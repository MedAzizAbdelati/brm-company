// components/sections/ProductsSection.tsx
import { SectionTitle } from '@/app/components/ui/SectionTitle'
import { ProductCard } from '@/app/components/ui/ProductCard'

const products = [
  {
    id: 1,
    name: "laine de mouton de couleurs mélangées",
    description: "rosenice Laine à feutrer - 36 couleurs - Laine de conte de fées - Laine de mouton - Pour feutrage humide et à sec",
    image: "/images/couleur.jpg"
  },
  {
    id: 2,
    name: "Huile d'olive vierge extra",
    description: " la plus haute qualité d'huile d'olive, obtenue par extraction mécanique à froid des olives",
    image: "/images/extra.jpg"
  },
  {
    id: 3,
    name: "la peau du chévre",
    description: "La peau de chèvre est un matériau polyvalent qui est utilisé à diverses fins depuis des siècles.",
    image: "/images/goat.webp"
  }
]

export function ProductsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nos Produits" 
          subtitle="Qualité Premium" 
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}