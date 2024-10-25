import { useState } from 'react';
import TodoInput from '../todoInput/TodoInput';
import TodoList from '../todoList/TodoList';
import './Todos.scss';
import todosData from '../../assets/api/todoData';
import TodosTotalController from '../todoTotalController/TodosTotalController';
const Todos = () => {
    const [todos, setTodos] = useState(todosData);
    const [showTodos, setShowTodos] = useState(todosData);
    const [clickBtn, setClickBtn] = useState('all');
    const no = showTodos.length + 1;

    // 추가
    const addBtn = (text) => {
        setTodos([...todos, { id: no, text, isDone: false, isMod: false }]);
        setShowTodos([...showTodos, { id: no, text, isDone: false, isMod: false }]);
    };

    // 삭제
    const delBtn = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
        setShowTodos(showTodos.filter((todo) => todo.id !== id));
    };

    // 완료 처리
    const updBtn = (e, id) => {
        const { checked } = e.target;
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: checked } : todo)));
        setShowTodos(showTodos.map((todo) => (todo.id === id ? { ...todo, isDone: checked } : todo)));
    };

    // 데이터 수정
    const onMode = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isMod: true } : todo)));
        setShowTodos(showTodos.map((todo) => (todo.id === id ? { ...todo, isMod: true } : todo)));
    };

    // 데이터 저장
    const onSave = (id, text) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isMod: false, text } : todo)));
        setShowTodos(showTodos.map((todo) => (todo.id === id ? { ...todo, isMod: false, text } : todo)));
    };

    // 전체 : 모두 보이기
    const totalShow = () => {
        setClickBtn('all');
        setShowTodos(todos);
    };

    // 완료 : isDone(true) 보이기
    const completeShow = () => {
        setClickBtn('com');
        setShowTodos(todos.filter((todo) => todo.isDone));
    };

    // 진행 : isDone(false) 보이기
    const ingShow = () => {
        setClickBtn('ing');
        setShowTodos(todos.filter((todo) => !todo.isDone));
    };

    return (
        <div className="Todos">
            <h2>할일 만들기</h2>
            <TodoInput addBtn={addBtn} />
            <TodoList showTodos={showTodos} delBtn={delBtn} updBtn={updBtn} onMode={onMode} onSave={onSave} />
            <TodosTotalController
                todos={todos}
                showTodos={showTodos}
                totalShow={totalShow}
                completeShow={completeShow}
                ingShow={ingShow}
                clickBtn={clickBtn}
            />
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
