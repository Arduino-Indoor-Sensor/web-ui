<template>
  <a-card  style="border-radius: 12px" size="small">
    <template #title>
      <h4>{{ title }}</h4>
    </template>
        <p style="font-size: 20px; text-align: center">{{ value }} </p>
  </a-card>
</template>

<script>
export default {
	props: {
		title: {
      default: "",
      typeo: String | Number,
    },
		value: {
      default: "",
      typeo: String | Number,
    },
	}
};
</script>

<style>
</style>