import express from 'express'
import { getEntries, getEntriesWithoutSensitiveInfo, addEntry, findById } from '../services/diariyServices'
import { toNewDiaryEntry } from '../utils/diariesUtils'

const router = express.Router()

router.get('/', (_req, res) => {
  const entries = getEntries()
  res.send(entries)
})

router.post('/', (req, res) => {
  try {
    const newEntry = toNewDiaryEntry(req.body)
    const newDiaryEntry = addEntry(newEntry)
    res.send(newDiaryEntry)
  } catch (error) {
    res.status(400)
  }
})

router.get('/sensitive', (_req, res) => {
  const diaries = getEntriesWithoutSensitiveInfo()
  res.send(diaries)
})

router.get('/:id', (req, res) => {
  const entry = findById(Number(req.params.id))
  return (entry !== null) ? res.send(entry) : res.sendStatus(404)
})

export default router
