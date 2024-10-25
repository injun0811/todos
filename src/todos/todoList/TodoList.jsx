import TodoItem from './TodoItem';
import './TodoList.scss';
const TodoList = ({ showTodos, delBtn, updBtn, onMode, onSave }) => {
    return (
        <ul className="TodoList">
            {showTodos.map((item) => (
                <TodoItem key={item.id} item={item} delBtn={delBtn} updBtn={updBtn} onMode={onMode} onSave={onSave} />
            ))}
        </ul>
    );
};

export default TodoList;
