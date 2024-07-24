-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_user_id_fkey";

-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "title" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
