// components/sections/ContactSection.tsx
import { SectionTitle } from '@/app/components/ui/SectionTitle'
import { ContactForm } from '@/app/components/ui/ContactForm'

export function ContactSection() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Contactez-nous" 
          subtitle="Parlons de votre projet" 
        />
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Nos coordonnées</h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <span className="text-yellow-500 mr-2">📍</span>
                <span>123 Rue du Commerce, 75001 Paris, France</span>
              </p>
              <p className="flex items-start">
                <span className="text-yellow-500 mr-2">📞</span>
                <span>+33 1 23 45 67 89</span>
              </p>
              <p className="flex items-start">
                <span className="text-yellow-500 mr-2">✉️</span>
                <span>contact@terranova-trading.com</span>
              </p>
            </div>
            
            <div className="mt-8 h-64 rounded-lg overflow-hidden">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25924.36620077412!2d10.823995744538573!3d35.688184845404116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302122a8dbf68eb%3A0xa93323906a36e895!2sKsibet%20El%20M%C3%A9diouni!5e0!3m2!1sfr!2stn!4v1756651571044!5m2!1sfr!2stn" 
                width="100%" 
                height="100%" 
                loading="lazy"
                className="border-0"
              ></iframe>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}