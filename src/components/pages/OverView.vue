<template>
  <default-header title="总览" />
  <a-layout-content>
    <a-row justify="space-around" align="middle" style="height: 100%">
      <a-col
        :span="8"
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        "
      >
        <a-card
          title="室内模式"
          style="border-radius: 20px; width: 100%; height: 60%"
          bodyStyle="height: 80%"
          headStyle="text-align: center"
        >
          <div style="height: 100%">
            <p style="height: 20%">当前在线采集端:</p>
            <div class="flex-align-center" style="">
              <p style="font-size: 64px">{{ indoorSensorCount }}</p>
            </div>
          </div>
        </a-card>
      </a-col>

      <a-col
        :span="8"
        style="
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        "
      >
        <a-card
          title="室外模式"
          style="border-radius: 20px; width: 100%; height: 60%"
          bodyStyle="height: 80%"
          headStyle="text-align: center"
        >
          <a-row justify=" space-around">
            <a-col :span="12" style="">
              <p style="height: 20%; text-align: center">当前在线网关:</p>
              <div class="flex-align-center" style="">
                <p style="font-size: 64px">{{ outdoorGatewayCount }}</p>
              </div>
            </a-col>
            <a-col :span="12" style="">
              <p style="height: 20%; text-align: center">当前在线采集端:</p>
              <div class="flex-align-center" style="">
                <p style="font-size: 64px">{{ outdoorGatewayCount }}</p>
              </div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </a-layout-content>
</template>

<script>
import DefaultHeader from '../DefaultHeader.vue';
export default {
	components: {
		DefaultHeader,
	},
  data() {
    return {
      indoorSensorCount: 0,
      outdoorSensorCount: 0,
      outdoorGatewayCount: 0,
    };
  },
  async mounted() {
    let res = await this.$axios.get('/indoor/node/count');
    this.indoorSensorCount = res.data.data.count;
    res = await this.$axios.get('/outdoor/node/count');
    this.outdoorSensorCount = res.data.data.count;
    res = await this.$axios.get('/outdoor/gateway/count');
    this.outdoorGatewayCount = res.data.data.count;
  }
};
</script>

<style>
.flex-align-center {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}
</style>