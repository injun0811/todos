import { useRef, useState } from 'react';
import './TodoInput.scss';
const TodoInput = ({ addBtn }) => {
    const [text, setText] = useState('');
    const textRef = useRef('');
    const chgInput = (e) => {
        setText(e.target.value);
    };
    const onSub = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addBtn(text);
        setText('');
        textRef.current.focus();
    };
    return (
        <form onSubmit={onSub} className="TodoInput">
            <input onChange={chgInput} ref={textRef} type="text" value={text} />
            <button type="submit">추가</button>
        </form>
    );
};

export default TodoInput;
