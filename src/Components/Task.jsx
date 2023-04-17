import TaskCard from "./TaskCard"
export default function Task({tasks, setTasks, handleEdit}) {
  // function to delete the task
  function handelDelete(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }
  return (
    <div className="task">
      <ul>
        <div className="task-header">
          <div className="top-header">
            {/*  get the length of tasks*/}
            <div className="counter">{tasks.length}</div>
            {/* button to clear all tasks */}
            <button className="cleanup" onClick={() => setTasks([])}>
              Clear All
            </button>
          </div>
          <h1>Task List</h1>
        </div>
        <div className="cards-container">
          {/* conditional rendering if there is task taskCard component will show also to prevent errors */}
          {tasks
            ? tasks.map((task) => {
                return (
                  <TaskCard
                    key={task.id}
                    task={task}
                    handelDelete={handelDelete}
                    handelEdit={handleEdit}
                  />
                )
              })
            : null}
        </div>
      </ul>
    </div>
  )
}
