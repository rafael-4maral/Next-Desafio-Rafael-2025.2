/*
  Warnings:

  - You are about to drop the `livro` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `produto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."livro";

-- DropTable
DROP TABLE "public"."produto";

-- CreateTable
CREATE TABLE "public"."product" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "conteudo" TEXT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_nome_key" ON "public"."product"("nome");
