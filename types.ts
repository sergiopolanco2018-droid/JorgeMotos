export enum Category {
  BIKES_MOUNTAIN = "Montaña",
  BIKES_ROAD = "Ruta",
  BIKES_URBAN = "Urbana",
  PARTS_BRAKES = "Frenos",
  PARTS_DRIVETRAIN = "Transmisión",
  PARTS_WHEELS = "Ruedas",
  ACCESSORIES = "Accesorios"
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  description: string;
  specs: Record<string, string>;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}