import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Badge } from '../ui/badge';
import { Lightbulb, Droplets, Clock, Leaf, CloudRain, Sprout } from 'lucide-react';

export function Tips() {
  const tips = [
    {
      title: 'Irrigação por Gotejamento',
      icon: '💧',
      image: 'https://images.unsplash.com/photo-1653226361684-2730bbab56b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmlwJTIwaXJyaWdhdGlvbiUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzYxODIxNzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Fornece água diretamente às raízes das plantas.',
      savings: '60% de economia',
      difficulty: 'Médio',
    },
    {
      title: 'Horário Ideal',
      icon: '🌅',
      image: 'https://images.unsplash.com/photo-1621958206813-2e9c0441c5b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW4lMjB3YXRlcmluZ3xlbnwxfHx8fDE3NjE4MjE3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Irrigue entre 6h-9h ou após 17h.',
      savings: '50% menos evaporação',
      difficulty: 'Fácil',
    },
    {
      title: 'Cobertura Morta',
      icon: '🍂',
      image: 'https://images.unsplash.com/photo-1761201509055-30c04b68901c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwd2F0ZXJ8ZW58MXx8fHwxNzYxODIxNzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Cubra o solo com palha ou folhas secas.',
      savings: '60% menos evaporação',
      difficulty: 'Fácil',
    },
    {
      title: 'Captação de Chuva',
      icon: '🌧️',
      image: 'https://images.unsplash.com/photo-1664261521636-23385000bb27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWlud2F0ZXIlMjBoYXJ2ZXN0aW5nfGVufDF8fHx8MTc2MTgyMTc1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Aproveite água da chuva com calhas e reservatórios.',
      savings: 'Recurso gratuito',
      difficulty: 'Médio',
    },
    {
      title: 'Plantas Adaptadas',
      icon: '🌱',
      image: 'https://images.unsplash.com/photo-1621958206813-2e9c0441c5b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW4lMjB3YXRlcmluZ3xlbnwxfHx8fDE3NjE4MjE3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Escolha espécies do clima local.',
      savings: 'Menos água necessária',
      difficulty: 'Fácil',
    },
    {
      title: 'Monitore o Solo',
      icon: '👆',
      image: 'https://images.unsplash.com/photo-1761201509055-30c04b68901c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwd2F0ZXJ8ZW58MXx8fHwxNzYxODIxNzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Teste a umidade antes de irrigar.',
      savings: 'Evita desperdício',
      difficulty: 'Fácil',
    },
  ];

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 text-white px-4 pt-12 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <Lightbulb className="w-8 h-8" />
          <h1 className="text-white text-2xl">Dicas Práticas</h1>
        </div>
        <p className="text-sm text-green-100">
          Economize água com técnicas eficientes
        </p>
      </div>

      <div className="px-4 py-6 space-y-4">
        {tips.map((tip, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="h-32 relative overflow-hidden">
              <ImageWithFallback
                src={tip.image}
                alt={tip.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2">
                <Badge className="bg-white/90 text-gray-900 backdrop-blur">
                  {tip.difficulty}
                </Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl">{tip.icon}</span>
                <div className="flex-1">
                  <h3 className="mb-1">{tip.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{tip.description}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-green-600 text-sm">
                      <Droplets className="w-4 h-4" />
                      <span>{tip.savings}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
