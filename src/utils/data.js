function customData(newdate) {
	let newDate = new Date(newdate);
	let FullYear = newDate.getFullYear();
	let Month = newDate.getMonth() + 1;
	let date = newDate.getDate();
	let Hours = newDate.getHours();
	let Minutes = newDate.getMinutes();
	let Seconds = newDate.getSeconds();

	let dateString = FullYear
		+ '-' + (Month > 9 ? Month : '0' + Month)
		+ '-' + (date > 9 ? date : '0' + date)
		+ ' '
		+ (Hours > 9 ? Hours : '0' + Hours)
		+ ':' + (Minutes > 9 ? Minutes : '0' + Minutes)
		+ ':' + (Seconds > 9 ? Seconds : '0' + Seconds)

	return dateString;
}

function customIndoorData(data) {
	return {
		name: `采集端${data['node_id']}`,
		temperature: Number(data.temperature).toFixed(2),
		humidity: Number(data.humidity).toFixed(2),
		altitude: Number(data.altitude).toFixed(2),
		pressure: Number(data.presssure / 1000).toFixed(2),
		lightingValue: Number(data['lighting_value']).toFixed(2),
		rainyValue: Number(data['rainy_value']),
		soliMosValue: Number(data['soliMos_value']),
		updatedTime: customData(data.time),
	}
}

function customOutdoorData(data) {
	return {
		name: `采集端${data['node_id']}`,
		gateway: `网关${data['gateway_id']}`,
		temperature: Number(data.temperature).toFixed(2),
		humidity: Number(data.humidity).toFixed(2),
		altitude: Number(data.altitude).toFixed(2),
		pressure: Number(data.presssure / 1000).toFixed(2),
		lightingValue: Number(data['lighting_value']).toFixed(2),
		rainyValue: Number(data['rainy_value']),
		soliMosValue: Number(data['soliMos_value']),
		updatedTime: customData(data.time),
	}
}

export {
	customData,
	customIndoorData,
	customOutdoorData,
}