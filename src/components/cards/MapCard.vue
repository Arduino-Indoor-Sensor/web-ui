<template>
	<a-card 
	class="home-div"
	bodyStyle="width:100%; height: 100%; padding: 0px; margin: 0px;">
    <template #title>
      <h4>采集端定位</h4>
    </template>
    <div id="container"></div>
	</a-card>
</template>

<script>
window._AMapSecurityConfig = {
  securityJsCode: "34348619c7d9bb19de986afb880ea676",
};
import AMapLoader from "@amap/amap-jsapi-loader";
import { shallowRef } from "@vue/reactivity";

export default {
  setup() {
    const map = shallowRef(null);
    return {
      map,
    };
  },
  props: ['location'],
  methods: {
    initMap() {
      AMapLoader.load({
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        key: "535b2d3075a103d2c5f0f9a3014aed30", // 申请好的Web端开发者Key，首次调用 load 时必填
        plugins: ["AMap.ToolBar", "AMap.Driving"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        security: {
          securityJsCode: "34348619c7d9bb19de986afb880ea676",
        },
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            //设置地图容器id
            viewMode: "3D", //是否为3D地图模式
            zoom: 5, //初始化地图级别
            center: this.location, //初始化地图中心点位置
          });
          this.map.add(
            new AMap.Marker({
              position: this.location,
            })
          );
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  },
};
</script>

<style scoped>
#container {
  padding: 0px;
  margin: 0px;
  height: 84%;
  width: 100%;
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px;
}

.home-div {
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px;
  position: relative;
	border-radius: 12px;
}
</style>