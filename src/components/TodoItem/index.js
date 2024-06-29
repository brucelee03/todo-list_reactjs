import './index.css'

const TodosItem = props => {
  const {todos, deleteTodo} = props
  const {id, title} = todos
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todos-card">
      <div className="todos">
        <p className="tilte">{title}</p>
      </div>
      <div className="button-container">
        <button type="button" className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodosItem
