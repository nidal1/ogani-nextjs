// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { v4 as uuidv4 } from 'uuid';

export default function handler(req, res) {
  const products = [
    {
      productId: uuidv4(),
      productImg: 'feature-1',
      discount: 0,
      category: 'meats',
      heading: 'Cow meat',
      price: 80,
      isCatoriezed:true,
      isFiltred: true
    },
    {
      productId: uuidv4(),
      productImg: 'feature-2',
      discount: 20,
      category: 'fruits',
      heading: 'Bananas',
      price: 15,
      isCatoriezed:true,
      isFiltred: false
    },
    {
      productId: uuidv4(),
      productImg: 'feature-3',
      discount: 0,
      category: 'fruits',
      heading: 'Kiwi',
      price: 40,
      isCatoriezed:false,
      isFiltred: true
    },
    {
      productId: uuidv4(),
      productImg: 'feature-4',
      discount: 11,
      category: 'fruits',
      heading: 'Watermelon',
      price: 25,
      isCatoriezed:true,
      isFiltred: true
    },
    {
      productId: uuidv4(),
      productImg: 'feature-5',
      discount: 10,
      category: 'fruits',
      heading: 'Blueberries',
      price: 15,
      isCatoriezed:false,
      isFiltred: false
    },
    {
      productId: uuidv4(),
      productImg: 'feature-6',
      discount: 20,
      category: 'fast-food',
      heading: 'Big mac',
      price: 45,
      isCatoriezed:false,
      isFiltred: true
    },
    {
      productId: uuidv4(),
      productImg: 'feature-7',
      discount: 0,
      category: 'fruits',
      heading: 'Mango',
      price: 30,
      isCatoriezed:false,
      isFiltred: false
    },
    {
      productId: uuidv4(),
      productImg: 'feature-8',
      discount: 0,
      category: 'fruits',
      heading: 'Apple',
      price: 12,
      isCatoriezed:true,
      isFiltred: true
    },
  ]
  res
    .status(200)
    .json(products);
}

