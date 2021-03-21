import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './routes/ProductRoute.js'


const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true}))
app.use(cors());

const url = `mongodb+srv://hasan:a032002d@cluster0.cq8ef.mongodb.net/mevn-app`

const PORT = process.env.PORT || 5000

app.use('/products', router)

mongoose
	.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () =>
			console.log('Server is runnibg on port 5000'),
		),
	)
	.catch((error) => console.log(error))