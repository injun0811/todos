import './TodosTotalController.scss';

const TodosTotalController = ({ todos, showTodos, totalShow, completeShow, ingShow, clickBtn }) => {
    const totalCnt = showTodos.length;
    return (
        <div className="buttonDiv">
            <button onClick={totalShow} className={clickBtn === 'all' ? 'on' : ''}>
                전체
            </button>
            <button onClick={completeShow} className={clickBtn === 'com' ? 'on' : ''}>
                완료
            </button>
            <button onClick={ingShow} className={clickBtn === 'ing' ? 'on' : ''}>
                진행중
            </button>
            <p>총개수 : {totalCnt}</p>
        </div>
    );
};

export default TodosTotalController;
