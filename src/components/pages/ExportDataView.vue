<template>
  <default-header title="总览 / 室外模式 / 历史数据" />
  <a-layout-content>
    <a-row>
      <a-col :span="3" offset="1">
        <a-button type="" @click="changeToIndoor">室内模式</a-button>
      </a-col>
      <a-col :span="3" offset="0">
        <a-button type="" @click="changeToOutdoor">室外模式</a-button>
      </a-col>
      <a-col :span="3" offset="10">
        <a-button type="" @click="handleExport">导出</a-button>
      </a-col>
    </a-row>
    <component :is="currentTable" />
  </a-layout-content>
</template>

<script>
import DefaultHeader from "../DefaultHeader.vue";
import IndoorTable from "../tables/IndoorTable.vue";
import OutdoorTable from "../tables/OutdoorTable.vue";
import * as XLSX from "xlsx";

export default {
  components: {
    DefaultHeader,
    IndoorTable,
    OutdoorTable,
  },
  data() {
    return {
      currentTable: IndoorTable,
    };
  },
  methods: {
    changeToIndoor() {
      this.currentTable = IndoorTable;
    },
    changeToOutdoor() {
      this.currentTable = OutdoorTable;
    },
    handleExport() {
      let table = document.getElementById("history-data-table");
      let workBook = XLSX.utils.table_to_book(table);
      XLSX.writeFile(workBook, "data.xlsx");
    },
  },
};
</script>

<style>
#history-data-table {
  margin: 30px;
}
</style>

