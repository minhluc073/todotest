import { add_task } from "../types/ToDoListType";
import { del_task } from "../types/ToDoListType";
export const addTaskAction = (newTask) => ({
    type: add_task,
    newTask
  })
export const removeTaskAction = (taskId)=>({
  type: del_task,
  taskId
})