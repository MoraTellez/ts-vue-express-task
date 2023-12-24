import express from 'express'
import Task from '../models/Task'

const router = express.Router()

router.get('/tasks', async (req, res) => {
  const tasks = await Task.find()
  res.send(tasks)
})

router.post('/tasks', async (req, res) => {
  const {title, description} = req.body
  const task = new Task({title, description})
  await task.save()
  res.json(task)
})

router.get('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    if(!task) throw new Error('La tarea no existe')
    res.send(task)
  } catch (error: any) {
    if(error.name === 'CastError') return res.status(500).json({error: 'Se produjo un error en el servidor'})
    res.status(500).json({error: error.message})
  }
})

router.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id)
    if(!task) throw new Error('La tarea no existe')
    res.send(task)
  } catch (error: any) {
    if(error.name === 'CastError') return res.status(500).json({error: 'Se produjo un error en el servidor'})
    res.status(500).json({error: error.message})
  }
})

router.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true})
    if(!task) throw new Error('La tarea no existe')
    res.send(task)
  } catch (error: any) {
    if(error.name === 'CastError') return res.status(500).json({error: 'Se produjo un error en el servidor'})
    res.status(500).json({error: error.message})
  }
})

export default router