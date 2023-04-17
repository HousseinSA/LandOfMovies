import {useCallback, useEffect, useState} from "react"

export default function AddTask({setTasks, editTask, setEdittask}) {
  // state for the onChange
  const [taskValue, setTaskValue] = useState("")
  const date = new Date()
    .toLocaleString("en-US", {hour12: false})
    .replace(",", "")
  // class back function to edit task
  const editChange = useCallback(() => {
    if (editTask) {
      // editTask have value taskValue will have to name of it
      setTaskValue(editTask.name)
    }
  }, [editTask])
  // useEFfect to call the editChane when it change
  useEffect(() => {
    editChange()
  }, [editChange])
  // handel Submit to create new task or edit it
  function handelSubmit(e) {
    e.preventDefault()
    // if there is no taskValue then do nothing
    if (!taskValue) return
    const task = {
      id: Math.floor(Math.random() * 10000),
      name: taskValue,
      time: date,
    }
    setTasks((prev) => {
      // if there is editTask
      if (editTask) {
        return prev.map((task) => {
          setTaskValue(task.name)
          if (task.id === editTask.id) {
            return {...task, name: taskValue}
          }
          return task
        })
      }
      // or create new one
      return [...prev, task]
    })
    // when it all done then setTaskValue to string and setEditTask to undefined
    setTaskValue("")
    setEdittask(undefined)
  }
  return (
    <section className="AddTask">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={taskValue}
          name="task"
          id="task"
          onChange={({target}) => setTaskValue(target.value)}
          placeholder="Task Name"
        />
        <div>
          {/* chaning the button when editTAsk have value */}
          <button type="submit"> {editTask ? "Update" : "Add Task"}</button>
        </div>
      </form>
    </section>
  )
}
