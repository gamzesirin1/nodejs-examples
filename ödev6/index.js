const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
	const path = ctx.path
	let content = ''

	if (path === '/') {
		content = '<h1>İndex Sayfasına Hoşgeldiniz!</h1>'
	} else if (path === '/hakkimda') {
		content = '<h1>Hakkimda Sayfasına Hoşgeldiniz!</h1>'
	} else if (path === '/iletisim') {
		content = '<h1>İletisim Sayfasına Hoşgeldiniz!</h1>'
	} else {
		content = '<h1>Sayfa bulunamadı!</h1>'
	}

	ctx.body = content
})

const port = 3000
app.listen(port, () => {
	console.log(`Sunucu port ${port} de başlatıldı.`)
})
