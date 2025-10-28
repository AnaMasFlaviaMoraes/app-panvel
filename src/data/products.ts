export type Product = {
  id: string;
  name: string;
  price: number;          // em reais
  image: string;
  description: string;
  badge?: string;         // ex.: "-30%"
  brand?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "95799",
    name: "Kit Dove Hidratação Shampoo 400ml + Condicionador 200ml",
    price: 24.49,
    image: "https://sjdigital.vtexassets.com/arquivos/ids/1089367-800-800?v=638684006915200000&width=800&height=800&aspect=true",
    description:
      "Kit promocional com shampoo 400ml e condicionador 200ml. Hidratação potente sem pesar.",
    badge: "-30%",
    brand: "Panvel"
  },
  {
    id: "clear400",
    name: "Shampoo Anticaspa Clear 400ml",
    price: 29.9,
    image: "https://m.media-amazon.com/images/I/41jHZYcpdKL._AC_SX679_.jpg",
    description:
      "Hidratação intensa com ação anticaspa. Ideal para uso diário.",
    badge: "-17%",
  },
  {
    id: "remover90",
    name: "Removedor de Esmalte com Óleo de Uva 90ml",
    price: 9.99,
    image: "https://m.media-amazon.com/images/I/61gn5DzCZSL._AC_SX679_.jpg",
    description:
      "Fórmula com óleo de uva para remoção suave do esmalte, sem ressecar.",
  },
  {
    id: "rexona",
    name: "Desodorante Rexona Clinical Men 58g",
    price: 21.99,
    image: "https://m.media-amazon.com/images/I/51+mF9SkGnL._AC_SY300_SX300_QL70_ML2_.jpg",
    description:
      "Proteção intensa contra o suor por até 48h. Fórmula dermatologicamente testada.",
    badge: "-15%",
  },
  {
    id: "pantene",
    name: "Shampoo Pantene Pro-V Restauração 400ml",
    price: 23.49,
    image: "https://m.media-amazon.com/images/I/51go-AiVIQL._AC_SY300_SX300_QL70_ML2_.jpg",
    description:
      "Restaura a força e o brilho dos fios desde o primeiro uso. Ideal para cabelos danificados.",
    brand: "Panvel"
  },

  {
    id: "colgate",
    name: "Creme Dental Colgate Total 12 Clean Mint 90g",
    price: 8.99,
    image: "https://m.media-amazon.com/images/I/61uSOQ0LX7L._AC_SY300_SX300_QL70_ML2_.jpg",
    description:
      "Proteção completa contra bactérias e cáries por até 12 horas. Sabor refrescante de menta.",
  },
  {
    id: "hidratanteNivea",
    name: "Hidratante Corporal Nivea Milk 400ml",
    price: 27.49,
    image: "https://m.media-amazon.com/images/I/61K9kyXATvL._AC_SY300_SX300_QL70_ML2_.jpg",
    description:
      "Hidratação profunda por até 48h com óleo de amêndoas e vitamina E. Ideal para pele seca.",
    badge: "-10%",
  },
  {
    id: "detoxSalon",
    name: "Shampoo Salon Line Detox Purificante 300ml",
    price: 19.9,
    image: "https://m.media-amazon.com/images/I/51lFG+X91uL._AC_SY300_SX300_QL70_ML2_.jpg",
    description:
      "Remove impurezas e oleosidade sem ressecar. Enriquecido com gengibre e menta.",
  },
  {
    id: "doveSabonete",
    name: "Sabonete Dove Original 90g (unidade)",
    price: 3.99,
    image: "https://m.media-amazon.com/images/I/71bR8jBRL7L._AC_SY300_SX300_QL70_ML2_.jpg",
    description:
      "Limpeza suave com 1/4 de creme hidratante. Deixa a pele macia e nutrida após o banho.",
    badge: "-20%",
  },
  {
    id: "johnsons",
    name: "Sabonete Líquido Johnson’s Baby Hora do Sono 200ml",
    price: 17.9,
    image: "https://m.media-amazon.com/images/I/51KNP7RNDtL._AC_SY300_SX300_QL70_ML2_.jpg",
    description:
      "Com aroma relaxante que ajuda o bebê a dormir melhor. Fórmula hipoalergênica e suave.",
  },
  {
    id: "neutrogena",
    name: "Sabonete Facial Neutrogena Deep Clean 80g",
    price: 12.99,
    image: "https://m.media-amazon.com/images/I/61LjW7CkcsL._AC_SY300_SX300_QL70_ML2_.jpg",
    description:
      "Remove impurezas e oleosidade, deixando a pele limpa e fresca. Indicado para uso diário.",
  },
  {
    id: "listerine",
    name: "Enxaguante Bucal Listerine Cool Mint 500ml",
    price: 27.9,
    image: "https://m.media-amazon.com/images/I/71LaNMPsalL._AC_SY300_SX300_QL70_ML2_.jpg",
    description:
      "Combate germes que causam mau hálito e placa bacteriana. Sensação de frescor duradouro.",
    badge: "-25%",
  },
  {
    id: "bepantol",
    name: "Pomada Bepantol Baby 30g",
    price: 24.99,
    image: "https://m.media-amazon.com/images/I/61hQ05oap1L._AC_SY300_SX300_QL70_ML2_.jpg",
    description:
      "Protege e hidrata a pele do bebê contra assaduras. Com pró-vitamina B5 e lanolina.",
  },
];
