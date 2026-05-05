import { Product, Category, BlogPost } from './types';

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "TrailBlazer X1 Mountain Bike",
    price: 1250000,
    category: Category.BIKES_MOUNTAIN,
    image: "https://picsum.photos/id/146/600/400",
    description: "La bicicleta perfecta para conquistar senderos difíciles. Suspensión total y cuadro de aluminio ligero.",
    specs: { "Cuadro": "Aluminio 6061", "Frenos": "Hidráulicos Shimano", "Peso": "13.5 kg", "Ruedas": "29 pulgadas" },
    rating: 4.8,
    reviews: 124
  },
  {
    id: "2",
    name: "SpeedMaster Pro Ruta",
    price: 2800000,
    category: Category.BIKES_ROAD,
    image: "https://picsum.photos/id/227/600/400",
    description: "Aerodinámica pura. Diseñada para velocidad en asfalto con componentes de carbono.",
    specs: { "Cuadro": "Fibra de Carbono", "Grupo": "Shimano 105", "Peso": "7.8 kg", "Ruedas": "700c" },
    rating: 4.9,
    reviews: 89
  },
  {
    id: "3",
    name: "CityCommuter Urbana",
    price: 850000,
    category: Category.BIKES_URBAN,
    image: "https://picsum.photos/id/365/600/400",
    description: "Comodidad y estilo para tu día a día en la ciudad. Incluye parrilla y guardabarros.",
    specs: { "Cuadro": "Acero Hi-Ten", "Marchas": "7 Velocidades", "Peso": "11 kg", "Accesorios": "Luces LED incluidas" },
    rating: 4.5,
    reviews: 210
  },
  {
    id: "4",
    name: "Frenos Hidráulicos Zoom Tech",
    price: 320000,
    category: Category.PARTS_BRAKES,
    image: "https://picsum.photos/id/250/600/400",
    description: "Kit completo de frenos hidráulicos delantero y trasero. Potencia de frenado superior.",
    specs: { "Material": "Aleación", "Fluido": "Mineral", "Compatibilidad": "Montaña/Urbana" },
    rating: 4.6,
    reviews: 45
  },
  {
    id: "5",
    name: "Cassette 11-42T 10V",
    price: 180000,
    category: Category.PARTS_DRIVETRAIN,
    image: "https://picsum.photos/id/550/600/400",
    description: "Rango amplio para subidas empinadas. Acero endurecido para mayor durabilidad.",
    specs: { "Velocidades": "10", "Dientes": "11-42", "Material": "Acero Niquelado" },
    rating: 4.7,
    reviews: 67
  },
  {
    id: "6",
    name: "Casco Aero Safe",
    price: 250000,
    category: Category.ACCESSORIES,
    image: "https://picsum.photos/id/158/600/400",
    description: "Protección certificada con ventilación óptima para días calurosos.",
    specs: { "Certificación": "CPSC", "Talla": "Ajustable M/L", "Peso": "220g" },
    rating: 4.9,
    reviews: 156
  },
  {
    id: "7",
    name: "Neumático Gravel King",
    price: 120000,
    category: Category.PARTS_WHEELS,
    image: "https://picsum.photos/id/191/600/400",
    description: "Agarre mixto para tierra y asfalto. Protección anti-pinchazos reforzada.",
    specs: { "Medida": "700x38c", "Tipo": "Tubeless Ready", "TPI": "60" },
    rating: 4.4,
    reviews: 32
  },
  {
    id: "8",
    name: "Cadena KMC X10",
    price: 95000,
    category: Category.PARTS_DRIVETRAIN,
    image: "https://picsum.photos/id/133/600/400",
    description: "Alta durabilidad y cambios suaves. Incluye eslabón rápido.",
    specs: { "Velocidades": "10", "Eslabones": "116", "Color": "Plata" },
    rating: 4.8,
    reviews: 205
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Guía para elegir tu primera bicicleta de montaña",
    excerpt: "¿Rígida o doble suspensión? Te explicamos las diferencias clave para que elijas la mejor opción según tu presupuesto y terreno.",
    image: "https://picsum.photos/id/486/800/400",
    date: "15 Oct 2023",
    category: "Guías"
  },
  {
    id: "2",
    title: "Mantenimiento básico de frenos hidráulicos",
    excerpt: "Aprende a identificar cuándo purgar tus frenos y cómo cambiar las pastillas en casa para mantener tu seguridad al máximo.",
    image: "https://picsum.photos/id/352/800/400",
    date: "02 Nov 2023",
    category: "Mecánica"
  },
  {
    id: "3",
    title: "Las mejores rutas ciclistas de la ciudad",
    excerpt: "Descubre los carriles bici más seguros y las rutas panorámicas para disfrutar de tu ciudad sobre dos ruedas.",
    image: "https://picsum.photos/id/724/800/400",
    date: "10 Nov 2023",
    category: "Rutas"
  }
];