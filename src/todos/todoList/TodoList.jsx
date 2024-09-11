import TodoItem from './TodoItem';
import './TodoList.scss';
const TodoList = ({ todos, delBtn, updBtn, onMode, onSave }) => {
    return (
        <ul className="TodoList">
            {todos.map((item) => (
                <TodoItem key={item.id} item={item} delBtn={delBtn} updBtn={updBtn} onMode={onMode} onSave={onSave} />
            ))}
        </ul>
    );
};

export default TodoList;
