const express = require(`express`)
const { findByIdAndUpdate } = require("../models/Task")
const router = express.Router()

const Task = require(`../models/Task`)

/**
 * GET: Returns one task with the task's id specified in the path
 */
router.get(`/:id`, async (req, res) => {
	try {
		const task = await Task.findById(req.params.id) // look at mongoose documentation
		if (!task) res.status(404).send(`Task with ID ${req.params.id} does not exist.`)
		else res.status(200).send(task)
	} catch (error) {
		console.error(error)
		res.status(500).send(`Something went wrong.`)
	}
})

// TODO: Write 4 more handlers for create, read, update, and delete
router.post(`/`, async (req, res) => {
	try {
		if(!req.body.Text){
			return res.status(400).send({
				success: 'true',
				message: 'Task not added',
		})}
		if(!req.body.Date){
			return res.status(400).send({
				success: 'true',
				message: 'Task not added',
		})}
		const task = new Task({
			UserId: req.user.Id, 
			Text: req.body.Text,
			Done: false,
			Date: req.body.Date,
		  })
		await task.save()
		return res.status(201).send(task)
		
	} catch (error) {
		console.error(error)
		res.status(500).send(`Something went wrong.`)

	}
})

//getall
router.get(`/`, async (req, res) => {
	try {
		const task = await Task.find({UserId: req.user.Id})
		if (!task) res.status(404).send('Task with this ID does not exist')
		else res.status(200).send(task)
	} catch (error) {
		console.error(error)
		res.status(500).send(`Something went wrong.`)
	}
})

router.put(`/:id`, async (req, res) => {
    try{
            if (!(await Task.findById(req.params.id))) res.status(404).send(`Task with ID ${req.params.id} does not exist.`)
            else{ 
                let task = await Task.findById(req.params.id)
                await Task.updateOne({_id: req.params.id}, {Done: req.body.Done})
                task = await Task.findById(req.params.id)
                res.status(200).send(task)
            }
        } 
            catch (error) {
                console.error(error)
                res.status(500).send(`Something went wrong.`)
            }
    })

router.delete(`/:id`, async (req, res) => {
	try {
		if (!(await Task.findById(req.params.id))) {
			res.status(404).send('Task with this ID does not exist')
		}
		else {
		await Task.findByIdAndDelete(req.params.id)
		res.status(201).send('Task successfully deleted')
		}
	} catch (error) {
		console.error(error)
		res.status(500).send(`Something went wrong.`)
	}
})


module.exports = router