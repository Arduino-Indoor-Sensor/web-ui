<template>
  <a-page-header
    style="background-color: rgb(240,242,245)"
  >
    <template #title>
      <span v-html="title"></span>
    </template>
    <template #subTitle v-if="hasSubTitle">
      <span v-html="subTitle"></span>
    </template>
    <template #extra>
      <a-dropdown :trigger="['hover']">
        <a-button type="link" size="small" shape="circle" @click.prevent>
          <a-avatar style="background-color: #1890ff" 
            >Kirin</a-avatar
          >
        </a-button>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              <a href="">登出</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <a-button type="link" size="small" shape="circle">
        <a-badge dot>
          <bell-outlined style="font-size: 20px" />
        </a-badge>
      </a-button>
    </template>
  </a-page-header>
</template>

<script>
import { BellOutlined } from "@ant-design/icons-vue";

export default {
  components: {
    BellOutlined,
  },
  data(){
    return {
      updatedTime: new Date().toDateString(),
    }
  },
  props : {
    title: String,
    hasSubTitle: {
      type: Boolean,
      default: false,
    },
    subTitle: String,
  }
};
</script>