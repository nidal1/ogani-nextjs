// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { v4 as uuidv4 } from 'uuid';

export default function handler(req, res) {
  const products = [
    {
      productId: uuidv4(),
      productImg: 'feature-1',
      discount: 0,
      category: 'Meats',
      heading: 'Cow meat',
      price: 80,
      isCatoriezed:true,
    },
    {
      productId: uuidv4(),
      productImg: 'feature-2',
      discount: 20,
      category: 'Fruits',
      heading: 'Bananas',
      price: 15,
      isCatoriezed:true,
    },
    {
      productId: uuidv4(),
      productImg: 'feature-3',
      discount: 0,
      category: 'Fruits',
      heading: 'Kiwi',
      price: 40,
      isCatoriezed:false,
    },
    {
      productId: uuidv4(),
      productImg: 'feature-4',
      discount: 11,
      category: 'Fruits',
      heading: 'Watermelon',
      price: 25,
      isCatoriezed:true,
    },
    {
      productId: uuidv4(),
      productImg: 'feature-5',
      discount: 10,
      category: 'Fruits',
      heading: 'Blueberries',
      price: 15,
      isCatoriezed:false,
    },
    {
      productId: uuidv4(),
      productImg: 'feature-6',
      discount: 20,
      category: 'Fast Food',
      heading: 'Big mac',
      price: 45,
      isCatoriezed:false,
    },
    {
      productId: uuidv4(),
      productImg: 'feature-7',
      discount: 0,
      category: 'Fruits',
      heading: 'Mango',
      price: 30,
      isCatoriezed:false,
    },
    {
      productId: uuidv4(),
      productImg: 'feature-8',
      discount: 0,
      category: 'Fruits',
      heading: 'Apple',
      price: 12,
      isCatoriezed:true,
    },
  ]
  res
    .status(200)
    .json(products);
}

