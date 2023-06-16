import Head from 'next/head'
import Image from 'next/image'
import { Center } from '@chakra-ui/react'
// import styled from '../styles/todo.module.css'

import Counter from '../components/counter/Counter'

// import styles from '../styles/Home.module.css'
import style from '../styles/studentList.module.css'
// import TodoCard from '../components/TodoCard/TodoItem'


export default function Home() {
  return (
    <Center bg='#6a7a85' h='100vh' color='yellow'>
   <div>
      
   {/* <h1>Counter App</h1> */}
    <Counter/>
     {/* <p>All Right reseved by Rafay 2022</p> */}
     </div>
  </Center>

  )
}
