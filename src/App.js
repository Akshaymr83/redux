import { useDispatch, useSelector } from 'react-redux';
import { increment } from './Reducer/counterReducer';
import {decrement} from './Reducer/counterReducer';


function App() {
  // useSelector is used to extract the 'count' state from the Redux store
  const { count } = useSelector((state) => state.counter);

  // useDispatch is used to get the dispatch function from the Redux store
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick ={()=>dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
