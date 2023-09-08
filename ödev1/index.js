const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.question('Yarıçapı girin: ', (radius) => {
	const area = Math.PI * radius * radius
	console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`)
	rl.close()
})
