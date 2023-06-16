import useTodos from "../../customHooks/useTodos";
import {
  Card,
  CardBody,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Stack,
} from "@chakra-ui/react";
import { AddIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import styles from "../../styles/todo.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

type TodoType = {
  createdAt?: object;
  description: string;
  id?: string;
};

const TodoCard = () => {
  const {
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
  } = useTodos();

  return (
    <div className={styles.cardContainer}>
      <Card style={{ backgroundColor: "#CDECF8" }}>
        <CardBody>
          {/* input */}
          <InputGroup size="md" style={{ backgroundColor: "yellow" }}>
            <Input
              value={todoText}
              onChange={(e) => setTodoText(e.target.value)}
              pr="10.5rem"
              type="text"
              placeholder="Type anything to add here ..."
              style={{ borderRadius: 3 }}
            />
            <InputRightElement>
              <Button
                onClick={isUpdate ? onEditHandler : onSubmitDataHandler}
                style={{
                  backgroundColor: "#1c72db",
                  borderRadius: 0,
                  color: "light green",
                }}
                h="2.35rem"
                size="sm"
              >
                {isUpdate ? <EditIcon w={6} h={3} /> : <AddIcon w={6} h={3} />}
              </Button>
              <Button
                onClick={onGetDataHandler}
                style={{
                  backgroundColor: "#1c72db",
                  borderRadius: 0,
                  color: "light green",
                }}
                h="2.35rem"
                size="sm"
              >
                <ViewIcon w={6} h={3} color="white" />
              </Button>
              <br />
            </InputRightElement>
          </InputGroup>

          {/* listing */}
          {loader && <h1>Loading.....</h1>}
          <Stack mt="4" spacing="3">
            {todos.map((item: TodoType) => (
              <div key={item.id}>
                <Text mt="3" py="1" style={{ backgroundColor: "white" }}>
                  {item.id} - {item.description}
                </Text>
                <button
                  style={{ margin: "10px" }}
                  type="submit"
                  className="btn btn-danger"
                  onClick={() => onDeleteHandler(item)}
                >
                  Delete
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => onUpdateHandler(item)}
                >
                  Update
                </button>
              </div>
            ))}
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
};
export default TodoCard;
