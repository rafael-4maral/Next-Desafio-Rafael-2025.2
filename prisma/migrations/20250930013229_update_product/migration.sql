/*
  Warnings:

  - You are about to drop the column `conteudo` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `preco` on the `product` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."product_nome_key";

-- AlterTable
ALTER TABLE "public"."product" DROP COLUMN "conteudo",
DROP COLUMN "data",
DROP COLUMN "nome",
DROP COLUMN "preco",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "product_title_key" ON "public"."product"("title");
