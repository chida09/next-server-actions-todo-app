import { Context } from "./context"

export const resolvers = {
  Query: {
    tasks: (_parent: unknown, _args: unknown, context: Context) => {
      return context.prisma.task.findMany({
        include: { user: true }
      })
    },
  },
  Task: {
    user: (parent: any, _args: unknown, context: Context) => {
      return context.prisma.user.findUnique({
        where: { id: parent.userId }
      })
    },
  },
}
