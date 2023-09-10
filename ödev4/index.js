const fs = require('fs')

const employee = {
	name: 'Employee 1 Name',
	salary: 2000
}
fs.writeFile('employees.json', JSON.stringify(employee), (err) => {
	if (err) throw err
	console.log('employees.json dosyası oluşturuldu ve veri eklendi.')
})
fs.readFile('employees.json', 'utf8', (err, data) => {
	if (err) throw err
	const employeeData = JSON.parse(data)
	console.log('Okunan veri:', employeeData)
	const updatedEmployee = {
		name: 'Employee 1 Updated Name',
		salary: 2500
	}
	fs.writeFile('employees.json', JSON.stringify(updatedEmployee), (err) => {
		if (err) throw err
		console.log('employees.json dosyası güncellendi.')
	})
})
fs.unlink('employees.json', (err) => {
	if (err) console.log(err)
})
