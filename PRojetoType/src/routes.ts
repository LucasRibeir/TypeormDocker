import  { Router, Request, Response} from 'express';
import { request } from 'http';
import { getTasks, saveTask, getTask,updateTask , finishedTask, removeTask} from './controller/TasksController'

const routes = Router();

routes.get("/", (request: Request , response: Response)=>{
return response.json({message: "Bem vindo"})
})

 routes.get("/tasks",  getTasks)
 routes.post("/tasks",  saveTask)
 routes.get("/tasks/:id",  getTask)
 routes.put("/tasks/:id",  updateTask)
 routes.patch("/tasks/:id",  finishedTask)
 routes.delete("/tasks/:id",  removeTask)

export default routes; 