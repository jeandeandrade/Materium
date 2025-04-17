import { Button } from "../buttons/button";
import { CheckCircle } from 'lucide-react';

export function Hero() {
  return (
    <div className="mt-6 items-center">
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-12">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl  font-semibold leading-tight text-black">
          Encontre os melhores fornecedores
        </h1>

        <ul className="mt-8 space-y-4 text-blue-900 font-medium text-base md:text-lg">
          {[
            'Oportunidades para expandir seu negócio',
            'Negocie de forma simples e rápida',
            'Segurança e transparência',
            'Publique ou encontre ofertas',
          ].map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 md:mt-0 md:ml-10">
        <img
          src="/img-home.svg" 
          alt="Ilustração de fornecedores"
        />
      </div>
    </section>
      <Button />
    </div>
  );
}
