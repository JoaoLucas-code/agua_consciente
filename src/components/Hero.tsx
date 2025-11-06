import { ImageWithFallback } from './figma/ImageWithFallback';
import { Droplets } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-green-600 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1621958206813-2e9c0441c5b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW4lMjB3YXRlcmluZ3xlbnwxfHx8fDE3NjE4MjE3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Horta comunitária"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <Droplets className="w-12 h-12" />
            <h1 className="text-white">Água Consciente</h1>
          </div>
          <p className="text-xl mb-6">
            Educação ambiental e uso racional da água em hortas comunitárias e pequenas propriedades rurais
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span>🌱 Sustentável</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span>👥 Colaborativo</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span>📚 Educativo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
