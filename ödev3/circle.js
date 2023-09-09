const circleArea = (r) => {
	const area = Math.PI * r * r
	console.log(`Daire alanı: ${area.toFixed(2)}`)
}

const circleCircumference = (r) => {
	const circumference = 2 * Math.PI * r
	console.log(`Daire çevresi: ${circumference.toFixed(2)}`)
}

module.exports = { circleArea, circleCircumference }
