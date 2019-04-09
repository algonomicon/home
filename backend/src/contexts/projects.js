import Router from 'koa-tree-router'
import mongoose from 'mongoose'
import authorize from '../auth'

////////////
// Schema //
////////////

const Project = mongoose.model('Project', {
  name: String,
  slug: String,
  hero: String,
  description: String,
  content: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
})

////////////
// Routes //
////////////

const router = new Router()

router.get('/projects', async (ctx) => {
  const projects = await Project.find()

  ctx.response.body = projects 
})

router.post('/projects', async (ctx) => {
  authorize(ctx)

  const project = new Project(ctx.request.body)
  await project.save()

  ctx.response.body = project
})

router.get('/projects/:id', async (ctx) => {
  const project = await Project.findById(ctx.params.id)

  ctx.response.body = project
})

router.put('/projects/:id', async (ctx) => {
  authorize(ctx)

  const project = await Project.findByIdAndUpdate(ctx.params.id, ctx.request.body)

  ctx.response.body = project
})

router.delete('/projects/:id', async (ctx) => {
  authorize(ctx)

  await Project.findByIdAndRemove(ctx.params.id)

  ctx.response.body = {
    status: `Deleted project:${ctx.params.id}`
  }
})

export default router