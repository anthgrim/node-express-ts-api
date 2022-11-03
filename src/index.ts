import express from 'express'
import diaryRoutes from './routes/diaries'

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here')
  return res.send('pong')
})

app.use('/api/diaries', diaryRoutes)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
