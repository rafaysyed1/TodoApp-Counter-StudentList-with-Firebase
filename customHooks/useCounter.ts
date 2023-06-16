import {useSelector, useDispatch} from "react-redux"
import { useEffect, useState } from "react"
import { doDecrement, doIncrement } from "../store/counterSlice";


export default function useCounter() {
    const dispatch = useDispatch()
    const [description, setDescription] = useState<string>('')

 const counter = useSelector((store:any)=> store.counterSlice.count)
 
     console.log("count",counter);

     const onClickIncrementHandler = ()=>{
        console.log("increment");
        dispatch(doIncrement({data:"any data"}))
        
     }

     const onClickDecrementHandler = ()=>{
        console.log("ffffffffff");
        let dataSendToStore = {
            description
        }
        dispatch(doDecrement(dataSendToStore))
        
     }
  return {
    counter,
    onClickIncrementHandler ,
    onClickDecrementHandler ,
    setDescription
  }
}