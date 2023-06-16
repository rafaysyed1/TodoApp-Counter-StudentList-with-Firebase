import { Button as ChakraButton, ButtonGroup, propNames } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css'
type Buttontype = {
    buttonName : string,
    onClickHandler:()=>void
}
const Button =(props:Buttontype)=>{
    
 const onClickHandler=()=>{
         console.log("Button is clicked")
    }
    
    return (
        
        <ChakraButton className='mx-5 submit' colorScheme='blue' onClick={props.onClickHandler}>{props.buttonName}</ChakraButton>
    )
}
export default Button