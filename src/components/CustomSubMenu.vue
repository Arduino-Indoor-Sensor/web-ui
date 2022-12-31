<template>
	<a-sub-menu
		@click="directLink(link)">
		<template #title>
			{{ title }}
		</template>
	</a-sub-menu>

</template>

<script>
export default ({
	setup() {
		return {
			localpath: `http://${window.location.hostname}:${window.location.port}`
		}
	},
	props: {
		title: String,
		link: String,
	},
	methods: {
		directLink(link) {
			window.location.href = this.localpath + link;
		}
	}
})
</script>
