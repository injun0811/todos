import { useRef, useState } from 'react';
import TodoInput from '../todoInput/TodoInput';
import TodoList from '../todoList/TodoList';
import './Todos.scss';
const Todos = () => {
    const [todos, setTodos] = useState([]);
    // {id : 1, text: dwfgwgasgsa, isDone:false}
    const no = useRef(1);

    // 추가
    const addBtn = (text) => {
        setTodos([...todos, { id: no.current++, text, isDone: false, isMod: false }]);
    };

    // 삭제
    const delBtn = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // 완료 처리
    const updBtn = (e, id) => {
        const { checked } = e.target;
        // isDone : 토글 형태로 사용 가능
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: checked } : todo)));
    };

    // 데이터 수정
    const onMode = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isMod: true } : todo)));
    };

    // 데이터 저장
    const onSave = (id, text) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isMod: false, text } : todo)));
    };

    return (
        <div className="Todos">
            <h2>할일 만들기</h2>
            <TodoInput addBtn={addBtn} />
            <TodoList todos={todos} delBtn={delBtn} updBtn={updBtn} onMode={onMode} onSave={onSave} />
        </div>
    );
};

export default Todos;

/*

    1. css 처리는 html/css 처럼 전체 스타일 style.css 만들고 연결해서 사용가능
    (모든 css style.css 관리 : 나쁜 예) <== 유지보수 하기 힘듦

    2. 보통은 컴포넌트 하나에 css(scss) 하나씩 연결 처리

    3. 이후 설명..

*/
