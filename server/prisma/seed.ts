import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  {
    title: 'Perfume Sauvage',
    description: 'Fragancia masculina con notas bergamota, Ambroxan y Pimienta negra',
    price: 85.99,
    category: 'fragrances',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
    stock: 20,
  },
  {
    title: 'Perfume Black Orchid',
    description: 'Fragancia oscura y sofisticada con notas de orquídea negra, trufa y patchouli',
    price: 120.00,
    category: 'fragrances',
    image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400',
    stock: 15,
  },
  {
    title: 'Remera Básica Blanca',
    description: 'Remera de algodón orgánico, corte regular',
    price: 24.99,
    category: 'tees',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    stock: 50,
  },
  {
    title: 'Remera Negra Premium',
    description: 'Remera de algodon peinado, corte slim fit',
    price: 29.99,
    category: 'tees',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400',
    stock: 45,
  },
  {
    title: 'Zapatillas Urbanas Runner',
    description: 'Zapatillas cómodas para uso diario, suela acolchada',
    price: 79.99,
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    stock: 25,
  },
  {
    title: 'Zapatillas Clásicas Leather',
    description: 'Zapatillas de cuero genuino, estilo timeless',
    price: 129.99,
    category: 'shoes',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400',
    stock: 12,
  },
];

async function main() {
  console.log('Starting seed...');

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
    console.log(`Created product: ${product.title}`);
  }

  console.log('Seed completed!');
}

main()
  .catch((e) => {
    console.error('Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
