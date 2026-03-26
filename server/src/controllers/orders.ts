import { Request, Response } from 'express';
import prisma from '../config/db';
import { AppError } from '../middleware/errorHandler';

interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

interface CreateOrderBody {
  buyerName: string;
  buyerEmail: string;
  buyerPhone: string;
  items: OrderItem[];
}

export const createOrder = async (req: Request, res: Response) => {
  const { buyerName, buyerEmail, buyerPhone, items } = req.body as CreateOrderBody;

  if (!buyerName || !buyerEmail || !buyerPhone || !items?.length) {
    throw new AppError('Missing required fields', 400);
  }

  const total = items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);

  const order = await prisma.order.create({
    data: {
      buyerName,
      buyerEmail,
      buyerPhone,
      total,
      items: {
        create: items.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
        })),
      },
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  res.status(201).json({
    success: true,
    data: order,
  });
};

export const getOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const orderId = Array.isArray(id) ? id[0] : id;

  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  if (!order) {
    throw new AppError('Order not found', 404);
  }

  res.json({ success: true, data: order });
};

export const getAllOrders = async (req: Request, res: Response) => {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });

  res.json({ success: true, data: orders });
};
