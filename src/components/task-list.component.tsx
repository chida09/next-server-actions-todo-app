import { AllTasksQuery } from '@/graphql/task.query'
import { useQuery } from '@apollo/client'
import { Checkbox, List, ListItem } from '@chakra-ui/react'

const TaskList = () => {
  const { data, loading, error } = useQuery(AllTasksQuery)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <List>
      {data.tasks.map((task: any) => (
        <ListItem key={task.id}>
          <Checkbox colorScheme='teal' isChecked={task.done}>
            {task.title} (Assigned to: {task.user.name})
            </Checkbox>
        </ListItem>
      ))}
    </List>
  )
}

export default TaskList
