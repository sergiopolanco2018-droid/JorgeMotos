import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from './Button';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onClick: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
      <div className="relative overflow-hidden cursor-pointer" onClick={() => onClick(product.id)}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">
          {product.category}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 
            className="text-lg font-bold text-slate-800 cursor-pointer hover:text-orange-600"
            onClick={() => onClick(product.id)}
          >
            {product.name}
          </h3>
        </div>
        <div className="flex items-center mb-3">
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className={i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"} />
            ))}
            <span className="text-xs text-gray-500 ml-2">({product.reviews})</span>
        </div>
        <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-grow">{product.description}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <span className="text-xl font-bold text-slate-900">
            ${product.price.toLocaleString()}
          </span>
          <Button size="sm" onClick={() => onAddToCart(product)}>
            <ShoppingCart size={16} className="mr-2" />
            Agregar
          </Button>
        </div>
      </div>
    </div>
  );
};