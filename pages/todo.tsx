import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Center } from '@chakra-ui/react'
import styled from '../styles/todo.module.css'
import TodoCard from '../components/TodoCard/TodoItem'


export default function Home() {
  return (
    <div className={styles.container}>
        <Center bg='#6a7a85' h='100vh' color='yellow'>
        <TodoCard/>
        </Center>
    

      
    </div>
   
  )
}
