
import { useEffect, useState } from "react"
import { collection, getDocs, addDoc,deleteDoc,doc,updateDoc,} from "firebase/firestore";
import { db/*,storage*/ } from '../config/firebasedb'
import { async } from "@firebase/util";


type TodoType = {
    createdAt?: object,
    description: string,
    id?: string
}

const  useTodos=()=> {

    const [todoText, setTodoText] = useState<string>("")
    const [todos, setTodos] = useState<TodoType[]>([])
    const [isUpdate, setIsUpdate] = useState(false)
    const [oldItem, setOldItem] = useState({})
    const [loader, setLoader] = useState(false)
    const [urlAttachement,setURlAttachement]= useState("")
    const [urlImage,setURlImage]= useState({})    
    useEffect(() => {
        console.log("todo is getting data")
        onGetDataHandler();
    }, [])

    // const onClickHandler = async () => {

        // let newTodo: TodoType = {
        //     description: todoText
        // }
        // console.log("on click working", newTodo);

        // setTodos([...todos, newTodo])


    // }
    // const onFileChangeHandler = async () => {

    // }
    const onGetDataHandler = async () => {
        console.log("Getting data");
        try {
            setLoader(true)
            const querySnapshot = await getDocs(collection(db, "todo"));
            let todosList: TodoType[] = []
            querySnapshot.forEach((doc) => {
                todosList.push({
                    description: doc.data()?.description,
                    id: doc.id,
                    createdAt: doc.data()?.createdAt
                });
            });

            console.log('todos', todosList);
            setTodos(todosList)


        } catch (error) {
            console.log('================catch====================');
            console.log(error);
            console.log('====================================');
        }
        finally {
            setLoader(false)
        }


    }
    const onSubmitDataHandler = async () => {
        const newDoc: TodoType = {
          description: todoText,
          createdAt: new Date(),
        };
      
        try {
          const docRef = await addDoc(collection(db, "todo"), newDoc);
          console.log("Document written with ID: ", docRef.id);
      
          setTodos((prevTodos) => [
            ...prevTodos,
            { ...newDoc, id: docRef.id },
          ]);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      };
     // Note that the updated code uses a functional update for the setTodos function, which ensures that the previous state is correctly used to update the new state.
      
      
      
      
      




    const onDeleteHandler =async (item: TodoType) => {
        console.log("user want to delete this item", item);
        try {
           await deleteDoc(doc(db, "todo", item.id));
            let filteredTodos = todos.filter((todo: TodoType) => item.id !== todo.id)
            setTodos(filteredTodos)
        } catch (error) {
            alert(error)
        }

       

    }


    const onUpdateHandler = async (item: TodoType) => {
        try {
            await updateDoc(doc(db, "todo", item.id), {
                description:todoText,   
                createdAt: new Date(),
                capital: true
            });
            let updatedTodos = todos.map((todo: TodoType) => {
                console.log('====================================');
                console.log(item.id, todo.id);
                console.log('====================================');
                if (item.id === todo.id) {
                    return {

                        description:todoText,
                        createdAt: new Date(),
                        id: todo.id,
                        capital:true

                    }
                }
                else {
                    return todo
                }
            })

            console.log('====================================');
            console.log("updatedTodos", updatedTodos);
            console.log('====================================');

            setTodos(updatedTodos)
        } catch (error) {
            alert(error)
        }
    }


  const onEditHandler = () => {
    let updatedItem = {
        description: todoText
    };
    let updatedTodos = todos.map((todo) => {
        if (oldItem.description === todo.description) {
            return updatedItem;
        } else {
            return todo;
        }
    });
    setTodos(updatedTodos);
    setIsUpdate(false);
};

    // const onCompleteDataHAndler = async (item:TodoType)=> {
    //     try {
    //         await updateDoc(doc(db,, item.id), {
    //             capital: true
    //         });
    //         let updatedTodos = todos.map((todo: TodoType) => {
    //             console.log('====================================');
    //             console.log(item.id, todo.id);
    //             console.log('====================================');
    //             if (item.id === todo.id) {
    //                 return {

    //                     description:todoText,
    //                     createdAt: new Date(),
    //                     id: todo.id,

    //                 }
    //             }
    //             else {
    //                 return todo
    //             }
    //         })

    //         console.log('====================================');
    //         console.log("updatedTodos", updatedTodos);
    //         console.log('====================================');

    //         setTodos(updatedTodos)
    //     } catch (error) {
    //         alert(error)
    //     }
    // }




    return {
       todoText,
       todos,
       isUpdate,
       oldItem,
       loader,
       setTodoText,
       setTodos,
       setOldItem,
       setIsUpdate,
       setLoader,
       onGetDataHandler,
       onSubmitDataHandler,
       onDeleteHandler,
       onUpdateHandler,
       onEditHandler,
    //    onCompleteDataHAndler,


    }
}
export default useTodos        