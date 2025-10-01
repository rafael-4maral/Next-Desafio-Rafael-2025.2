-- CreateTable
CREATE TABLE "public"."livro" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "livro_pkey" PRIMARY KEY ("id")
);
