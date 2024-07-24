-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- AlterTable
ALTER TABLE "tasks" ADD COLUMN "user_id" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Insert a dummy user
INSERT INTO "users" (name, email, updated_at) VALUES ('Dummy User', 'dummy@example.com', CURRENT_TIMESTAMP);

-- Update existing tasks to use the dummy user
UPDATE "tasks" SET "user_id" = (SELECT id FROM "users" WHERE email = 'dummy@example.com');

-- Make user_id NOT NULL
ALTER TABLE "tasks" ALTER COLUMN "user_id" SET NOT NULL;
