
/*"use server";

import prisma from "@/lib/db"; 

export default async function getMaisVendidos() {
  const maisVendidos = await prisma.product.findMany({ // Alterado de 'post' para 'book'
    where: {
        published : true, // Filtra apenas livros publicados
    },
    select: {
      id: true,
      title: true,
      image: true, // Caminho para a imagem da capa do livro
      price: true,
      description: true,
      
    },

    take: 5, // Limitado a 5, conforme sua solicitação
  });

  return maisVendidos;
}*/