<template>
	<a-menu mode="vertical" theme="dark" style="height: 100%">
		<div style="width: 100%; height: 10%; display: flex; align-content: center;justify-content: center;flex-wrap: wrap; align-items: center">
			<cloud-server-outlined style="font-size: 30px;margin: 3%;"/>
			<p style="font-color: white; font-size: 20px; margin-bottom: 0px; font-family: 楷体;">传感器面板</p>
		</div>
		<custom-sub-meun
			title="总览"
			link="/"
		/>
		<custom-sub-meun
			title="室内"
			link="/indoor"
		/>
		<custom-sub-meun
			title="室外"
			link="/outdoor"
		/>
		<custom-sub-meun
			title="导出"
			link="/export"
		/>
	</a-menu>
</template>

<script>
import { CloudServerOutlined } from "@ant-design/icons-vue";
import CustomSubMeun from './CustomSubMenu.vue';
export default {
	data() {
		return {
		}
	},
	components: {
		CloudServerOutlined,
		CustomSubMeun,
	},
}
</script>