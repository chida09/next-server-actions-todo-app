import TaskList from "@/components/task-list.component"
import { Container, Heading, Stack } from '@chakra-ui/react'

const Todo = () => {
  return (
    <main>
    <Container my='32px'>
      <Stack spacing='32px'>
        <Heading>TASK LIST</Heading>
        <TaskList />
      </Stack>
    </Container>
  </main>
  )
}

export default Todo
