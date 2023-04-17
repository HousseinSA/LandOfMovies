import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrashCan, faEdit} from "@fortawesome/free-solid-svg-icons"
export default function TaskCard({task, handelDelete, handelEdit}) {
  return (
    <li>
      <div className="taskcard">
        <div className="card-info">
          <span>{task.name}</span>
          <span>{task.time}</span>
        </div>
        <div>
          {/* fontAsome icon for trach can and delete */}
          <FontAwesomeIcon
            className="icon"
            icon={faEdit}
            color={"teal"}
            // this on to get the object of the task we want to edit
            onClick={() => handelEdit(task)}></FontAwesomeIcon>
          <FontAwesomeIcon
            className="icon"
            icon={faTrashCan}
            color={"teal"}
            onClick={() => handelDelete(task.id)}></FontAwesomeIcon>
        </div>
      </div>
    </li>
  )
}
