import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h5>
        {task.text}{" "}
        <FontAwesomeIcon
          icon={faXmark}
          size="2xl"
          className="icon"
          onClick={() => onDelete(task.id)}
        />
      </h5>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
