import useCounter  from "../../customHooks/useCounter"
import Button from "../button/Button"


const Counter=()=>{
  const{
    counter,
    onClickIncrementHandler ,
    onClickDecrementHandler ,

  }=useCounter();
   
return (
   <div>
    

    <div>
    <Button  buttonName="-" onClickHandler={onClickDecrementHandler} />
    {counter}
    <Button buttonName="+" onClickHandler={onClickIncrementHandler}/>
    </div>
   </div>
)
}
export default Counter