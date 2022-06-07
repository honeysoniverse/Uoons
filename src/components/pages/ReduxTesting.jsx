

import {useDispatch,useSelector} from 'react-redux';
import {bindActionCreators} from "redux";
import { actioncreator } from '../../state/action-creators/combinactioncreator';

function App() {
  
  const dispatch=useDispatch();

  const account=useSelector(state=>state);

  const {deposit,withdraw}=bindActionCreators(actioncreator,dispatch);

  return (
    <div className="App">
      <h1>{account.reducer}</h1>
      <button onClick={()=>deposit(1000)}>Deposit</button>
      <button onClick={()=>withdraw(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
