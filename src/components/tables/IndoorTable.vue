<template>
  <a-table
    id="history-data-table"
    :columns="columns"
    :data-source="data"
    :key="refreshKey"
    :scroll="{ y: 400 }"
    :pagination="false"
    size="small"
  >
    <template #bodyCell="{ text }">
       {{ text }}
    </template>
    <template
      #customFilterDropdown="{ selectedKeys, confirm, clearFilters, column }"
    >
      <div style="padding: 8px">
        <a-row style="padding: 8px">
          <a-col :span="24">
            <a-range-picker
              :show-time="{ format: 'HH:mm' }"
              format="YYYY-MM-DD HH:mm"
              :placeholder="['Start Time', 'End Time']"
              v-model:value="selectedKeys[0]"
            ></a-range-picker>
          </a-col>
        </a-row>
        <a-row justify="center">
          <a-col :span="8">
            <a-button
              type="primary"
              @click="handleFilter(selectedKeys, confirm, column.dataIndex)"
              >查询</a-button
            >
          </a-col>
          <a-col :span="8">
            <a-button type="primary" @click="handleReset(clearFilters)"
              >重置</a-button
            >
          </a-col>
        </a-row>
      </div>
    </template>
  </a-table>
</template>

<script>
import AdvancedFormat from "dayjs/plugin/advancedFormat";
import CustomeParseFormat from "dayjs/plugin/customParseFormat";
import IsBetween from "dayjs/plugin/isBetween";
import * as dayjs from "dayjs";
import * as XLSX from "xlsx";
import { customIndoorData } from '../../utils/data';

dayjs.extend(AdvancedFormat);
dayjs.extend(CustomeParseFormat);
dayjs.extend(IsBetween);

export default {
  data() {
		return {
			data:[],
			columns:[],
			refreshKey: 0,
		}
	},
  async mounted() {
    let sensorNodeFilter = [];
    let res = await this.$axios.get("/indoor/node");
		let indoorNode = res.data.data;
    indoorNode.forEach((element) => {
      sensorNodeFilter.push({
        text: `采集端${element.id}`,
        value: element.id,
      });
    });

    const columns = [
      {
        title: "采集端",
        dataIndex: "name",
        filters: sensorNodeFilter,
        onFilter: (value, record) => record.name.slice(3) === String(value),
      },
      {
        title: "光强",
        dataIndex: "lightingValue",
      },
      {
        title: "雨水",
        dataIndex: "rainyValue",
      },
      {
        title: "土壤湿度",
        dataIndex: "soliMosValue",
      },
      {
        title: "气压",
        dataIndex: "pressure",
      },
      {
        title: "海拔",
        dataIndex: "altitude",
      },
      {
        title: "温度",
        dataIndex: "temperature",
      },
      {
        title: "湿度",
        dataIndex: "humidity",
      },
      {
        title: "上传时间",
        dataIndex: "updatedTime",
        customFilterDropdown: true,
        onFilter: (value, record) => {
          return dayjs(record.date, "YYYY-MM-DD HH-mm:ss").isBetween(
            dayjs(value[0]),
            dayjs(value[1])
          );
        },
      },
    ];
		this.columns = columns;

		let data = [];
		res = await this.$axios.get("/indoor/data");
		let indoorData = res.data.data;
		indoorData.forEach((element) => {
			data.push(customIndoorData(element));
		})

		this.data = data;
  },
	methods: {
		handleFilter (selectedKeys, confirm) {
      confirm();
      let pickedDate = selectedKeys[0];
      let startTime = dayjs(pickedDate[0]).toString();
      let endTime = dayjs(pickedDate[1]).toString();
      console.log(startTime, "\n", endTime);
    },
    handleReset(clearFilters) {
      clearFilters();
      this.refreshKey++;
    },
    handleExport() {
      let table = document.getElementById("history-data-table");
      let workBook = XLSX.utils.table_to_book(table);
      XLSX.writeFile(workBook, "data.xlsx");
    },
  },


};
</script>
