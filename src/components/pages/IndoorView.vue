<template>
  <default-header 
    title="总览 / 室内模式 / 当前数据" 
    :hasSubTitle="true"
    :subTitle="'更新时间: '+updatedTime"
  />
  <a-layout-content>
    <a-row justify="space-around" style="height: 30%">
      <a-col :span="4">
        <normal-value-card title="当前温度" :value="temperature + '&#8451;'" />
      </a-col>
      <a-col :span="4">
        <normal-value-card title="当前湿度" :value="humidity + '%'" />
      </a-col>
      <a-col :span="4">
        <normal-value-card title="当前气压" :value="pressure + 'kPa'" />
      </a-col>
      <a-col :span="4">
        <normal-value-card title="当前海拔" :value="altitude + 'M'" />
      </a-col>
      <a-col :span="4">
        <normal-value-card title="当前光强" :value="lightingValue + 'lm'" />
      </a-col>
    </a-row>

    <a-row justify="space-around" style="height: 70%">
      <a-col :span="5">
        <solid-sendor-card 
         v-if="soliMosValue"
         :value="soliMosValue"
        />
      </a-col>
      <a-col :span="5">
        <rainy-sensor-card 
          v-if="rainyValue"
          :value="rainyValue"
        />
      </a-col>
      <a-col :span="10">
        <map-card 
          v-if="mapFlag"
          :location="location"
        />
      </a-col>
    </a-row>
  </a-layout-content>
</template>

<script>
import DefaultHeader from "../DefaultHeader.vue";
import NormalValueCard from "../cards/NormalValueCard.vue";
import SolidSendorCard from "../cards/SolidSensorCard.vue";
import RainySensorCard from "../cards/RainySensorCard.vue";
import MapCard from "../cards/MapCard.vue";
import {customData} from "../../utils/data"

export default {
  data () {
    return {
      temperature: 0,
      humidity: 0,
      altitude:0,
      pressure:0,
      lightingValue:0,
      rainyValue: null,
      soliMosValue: null,
      location:[0, 0],
      mapFlag: false,
      updatedTime:'',
    };
  },
  mounted() {
    this.$axios.get('/indoor/data/1')
    .then(response => {
      let data = response.data.data;
      this.temperature = Number(data.temperature).toFixed(2);
      this.humidity = Number(data.humidity).toFixed(2);
      this.altitude = Number(data.altitude).toFixed(2);
      this.pressure = Number(data.presssure / 1000).toFixed(2);
      this.lightingValue = Number(data['lighting_value']).toFixed(2);
      this.rainyValue = Number(data['rainy_value']);
      this.soliMosValue = Number(data['soliMos_value']);
      this.location [0] = Number(data.lng).toFixed(2);
      this.location[1] = Number(data.lat).toFixed(2);
      this.mapFlag = true;
      this.updatedTime = customData(data.time);
    }).catch( e => console.log(e));
  },
  props: {},
  components: {
    DefaultHeader,
    NormalValueCard,
    SolidSendorCard,
    RainySensorCard,
    MapCard,
  },
};
</script>

<style>
</style>