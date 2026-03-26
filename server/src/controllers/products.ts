import { Request, Response } from 'express';
import prisma from '../config/db';
import { AppError } from '../middleware/errorHandler';

export const getAllProducts = async (req: Request, res: Response) => {
  const { category, search } = req.query;

  const where: Record<string, unknown> = {};
  
  if (category && category !== 'all') {
    where.category = category as string;
  }
  
  if (search) {
    where.OR = [
      { title: { contains: search as string, mode: 'insensitive' } },
      { description: { contains: search as string, mode: 'insensitive' } },
    ];
  }

  const products = await prisma.product.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  });

  res.json({ success: true, data: products });
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const productId = Array.isArray(id) ? id[0] : id;

  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    throw new AppError('Product not found', 404);
  }

  res.json({ success: true, data: product });
};

export const getProductsByCategory = async (req: Request, res: Response) => {
  const { category } = req.params;
  const categoryFilter = Array.isArray(category) ? category[0] : category;

  const products = await prisma.product.findMany({
    where: { category: categoryFilter },
    orderBy: { createdAt: 'desc' },
  });

  res.json({ success: true, data: products });
};

export const getCategories = async (req: Request, res: Response) => {
  const categories = await prisma.product.findMany({
    select: { category: true },
    distinct: ['category'],
  });

  res.json({ 
    success: true, 
    data: categories.map(c => c.category) 
  });
};
