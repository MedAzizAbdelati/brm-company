// app/products/page.tsx
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { ProductCard } from '@/app/components/ui/ProductCard';
import { Breadcrumb } from '@/app/components/ui/Breadcrumb';

const products = [
  {
    id: 1,
    name: "laine de mouton de couleurs mélangées",
    description: "rosenice Laine à feutrer - 36 couleurs - Laine de conte de fées - Laine de mouton - Pour feutrage humide et à sec",
    category: "laine de mouton",
    image: "/images/couleur.jpg"
  },
  {
    id: 2,
    name: "Laine de Mouton Naturelle",
    description: "Laine 100% biologique, non traitée",
    category: "laine de mouton",
    image: "/images/coarse.jpg"
  },
  {
    id: 3,
    name: "Laine thermoliée",
    description: "Rouleaux en laine de mouton et fibres polyester thermoliées, pour isolation thermique des combles perdus,",
    category: "laine de mouton",
    image: "/images/secoured.jpg"
  },
  {
    id: 4,
    name: "la peau du chévre",
    description: "La peau de chèvre est un matériau polyvalent qui est utilisé à diverses fins depuis des siècles.",
    category: "poils de chèvre",
    image: "/images/goat.webp"
  },
  {
    id: 5,
    name: "Huile d'olive vierge extra",
    description: " la plus haute qualité d'huile d'olive, obtenue par extraction mécanique à froid des olives",
    category: "huile olive",
    image: "/images/extra.jpg"
  },
  {
    id: 6,
    name: "Huile de grignons",
    description: "Un sous-produit de l'extraction de l'huile d'olive, obtenue à partir des résidus (peaux, noyaux, pulpe) restants après le pressurage des olives",
    category: "huile olive",
    image: "/images/pomace.jpg"
  },
  {
    id: 6,
    name: "Huile de grignons",
    description: "Des fruits d'olivier transformés pour être consommés entiers, et non pour l'huile",
    category: "huile olive",
    image: "/images/table.png"
  }
];

export default function ProductsPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Breadcrumb 
          items={[
            { name: 'Accueil', href: '/' },
            { name: 'Produits', href: '/products' }
          ]} 
        />
        
        <SectionTitle 
          title="Nos Produits" 
          subtitle="Qualité Exceptionnelle" 
        />
        
        <div className="mb-8 flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-yellow-500 text-black rounded-full">Tous</button>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-100">laine de mouton</button>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-100">poils de chèvre</button>
          <button className="px-4 py-2 bg-white text-gray-800 rounded-full hover:bg-gray-100">huile olive</button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}