import  { useContext } from 'react';
import AppContext from '../store/AppContext'
import { INCREASE_COUNT, DECREASE_COUNT, RESET } from "../store/actions";


function Button() {
    //Dispatcher
const {dispatch} = useContext(AppContext);
    return(
    <div>
            <button onClick={()=> dispatch ({type: INCREASE_COUNT})}>Up</button>
            <button onClick={()=> dispatch ({type: DECREASE_COUNT})}>Down</button>
            <button onClick={()=> dispatch ({type: RESET})}>Rest</button>
       </div>
    )
}


export default Button