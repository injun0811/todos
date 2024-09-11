import { useState } from 'react';

const TodoItem = ({ item, delBtn, updBtn, onMode, onSave }) => {
    const { id, text, isDone, isMod } = item;
    const [txt, setTxt] = useState(text);
    return (
        <li className={isDone ? 'on' : ''}>
            <div>
                <input type="checkbox" checked={isDone} onChange={(e) => updBtn(e, id)} />
                {!isMod ? (
                    <p>
                        <em>{text}</em>
                        <button onClick={() => onMode(id)}>수정</button>
                    </p>
                ) : (
                    <p>
                        <input type="text" value={txt} onChange={(e) => setTxt(e.target.value)} />
                        <button onClick={() => onSave(id, txt)}>저장</button>
                    </p>
                )}
            </div>
            <button onClick={() => delBtn(id)}>삭제</button>
        </li>
    );
};

export default TodoItem;
