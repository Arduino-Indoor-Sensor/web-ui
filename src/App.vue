<template>
    <a-layout>
      <a-layout-sider>
        <default-sider></default-sider>
      </a-layout-sider>
      <a-layout style="height: 100%">
        <component :is="currentPage"></component>
        <a-layout-footer style="text-align: center">
          <default-footer></default-footer>
        </a-layout-footer>
      </a-layout>
    </a-layout>
</template>

<script>
import DefaultSider from "./components/DefaultSider.vue";
import DefaultFooter from "./components/DefaultFooter.vue";
import OverView from "./components/pages/OverView.vue";
import IndoorView from "./components/pages/IndoorView.vue"
import OutdoorView from "./components/pages/OutdoorView.vue"
import ExportDataView from "./components/pages/ExportDataView.vue"

const routes = {
  '/': OverView,
  '/indoor': IndoorView,
  '/outdoor': OutdoorView,
  '/export': ExportDataView,
}
export default {
  name: "App",
  components: {
    DefaultSider,
    DefaultFooter,
    OverView,
    IndoorView,
    OutdoorView,
    ExportDataView,
  },
  data () {
    return {
      currentPath: window.location.pathname
    }
  },
  computed: {
    currentPage() {
      return routes[this.currentPath];
    }
  }
};
</script>
<style>
#app {
  height: 100%;
}
.ant-layout {
   height: 100%;
}

</style>
