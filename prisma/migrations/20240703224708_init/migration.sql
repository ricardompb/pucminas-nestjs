-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "password" VARCHAR(70) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
