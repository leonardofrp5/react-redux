import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { increment, decrement, reset } from '../../actions/contadorActions';
import { ROUTES } from '../../Routes';
import './styles.css';

function Counter() {
  const { counter } = useSelector(state => state.reducers);
  const dispatch = useDispatch();

  return (
    <>
      <div className="section">
        <div className="board">
          <span className="count">{counter}</span>
        </div>
        <div className="content">
          <span className="button" onClick={() => dispatch(increment())}>
            Incre
          </span>
          <span className="button" onClick={() => dispatch(decrement())}>
            Decre
          </span>
          <span className={`${counter <= 0 ? 'disabled' : 'button'}`} onClick={() => dispatch(reset(0))}>
            Reset
          </span>
        </div>
      </div>
      <Link className="button" to={ROUTES.HOME}>
        Go back
      </Link>
    </>
  );
}

export default Counter;
