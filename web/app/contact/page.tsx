// app/contact/page.tsx
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { ContactForm } from '@/app/components/ui/ContactForm';
import { Breadcrumb } from '@/app/components/ui/Breadcrumb';

export default function ContactPage() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <Breadcrumb 
          items={[
            { name: 'Accueil', href: '/' },
            { name: 'Contact', href: '/contact' }
          ]} 
        />
        
        <SectionTitle 
          title="Contactez-nous" 
          subtitle="Nous sommes à votre écoute" 
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
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Heures d'ouverture</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>9h - 18h</span>
                </li>
                <li className="flex justify-between">
                  <span>Samedi</span>
                  <span>10h - 14h</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </li>
              </ul>
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
            <h3 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}