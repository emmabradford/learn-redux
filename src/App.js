import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions';
import {decrement} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
     <h1>Counter: {counter}</h1>
     <button onClick={() => dispatch(increment(5))}> + </button>
     <button onClick={() => dispatch(decrement())}> - </button>
     {isLogged ? 
        <h3> Info I should only see if logged in</h3> :
        <h3> You are not logged in</h3>
     }
    </div>
  );
}

export default App;
