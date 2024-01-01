/*
  Warnings:

  - You are about to drop the `person` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "person";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "Fullname" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
