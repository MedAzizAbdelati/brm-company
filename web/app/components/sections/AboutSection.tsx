// components/sections/AboutSection.tsx
import { SectionTitle } from '@/app/components/ui/SectionTitle'
import Image from 'next/image'

export function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Notre Histoire" 
          subtitle="Depuis 2023" 
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div>
            <Image
              src="/images/brm.jpg"
              alt="logo"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">A propos de nous </h3>
            <p className="text-gray-600 mb-6">
            Depuis 2023, nous sommes spécialisés dans l'importation d'une large gamme de produits de haute qualité sur le marché tunisien à des prix compétitifs. Notre expertise ne s'arrête pas là : nous sommes également fiers d'exporter une variété de produits et services vers les marchés du monde entier 🌎.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">✓</span>
                <span>« Élargir les frontières et bâtir la prospérité » est notre devise, reflétant notre engagement envers l'excellence et notre volonté de favoriser les relations commerciales internationales. Nous sommes là pour répondre à vos besoins en matière d'importation et d'exportation 🛳️✈️.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}