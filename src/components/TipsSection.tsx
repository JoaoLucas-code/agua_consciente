import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { Droplets, Clock, Sprout, CloudRain, Thermometer, Leaf } from 'lucide-react';

export function TipsSection() {
  const tips = [
    {
      title: 'Irrigação por Gotejamento',
      category: 'Tecnologia',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1653226361684-2730bbab56b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmlwJTIwaXJyaWdhdGlvbiUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzYxODIxNzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Sistema mais eficiente, fornece água diretamente às raízes das plantas.',
      benefits: ['Economia de até 60% de água', 'Reduz doenças foliares', 'Menor evaporação'],
      difficulty: 'Médio',
    },
    {
      title: 'Horário Ideal de Irrigação',
      category: 'Prática',
      icon: Clock,
      image: 'https://images.unsplash.com/photo-1621958206813-2e9c0441c5b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW4lMjB3YXRlcmluZ3xlbnwxfHx8fDE3NjE4MjE3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Irrigue nas primeiras horas da manhã ou ao final da tarde.',
      benefits: ['Menor evaporação', 'Melhor absorção', 'Previne doenças'],
      difficulty: 'Fácil',
    },
    {
      title: 'Cobertura Morta (Mulching)',
      category: 'Técnica',
      icon: Leaf,
      image: 'https://images.unsplash.com/photo-1761201509055-30c04b68901c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwd2F0ZXJ8ZW58MXx8fHwxNzYxODIxNzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Cubra o solo com palha, folhas secas ou serragem.',
      benefits: ['Reduz evaporação em até 60%', 'Controla ervas daninhas', 'Melhora o solo'],
      difficulty: 'Fácil',
    },
    {
      title: 'Captação de Água da Chuva',
      category: 'Sustentabilidade',
      icon: CloudRain,
      image: 'https://images.unsplash.com/photo-1664261521636-23385000bb27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWlud2F0ZXIlMjBoYXJ2ZXN0aW5nfGVufDF8fHx8MTc2MTgyMTc1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Instale calhas e reservatórios para aproveitar a água da chuva.',
      benefits: ['Recurso gratuito', 'Reduz conta de água', 'Água de qualidade'],
      difficulty: 'Médio',
    },
    {
      title: 'Escolha de Plantas Adaptadas',
      category: 'Planejamento',
      icon: Sprout,
      image: 'https://images.unsplash.com/photo-1621958206813-2e9c0441c5b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW4lMjB3YXRlcmluZ3xlbnwxfHx8fDE3NjE4MjE3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Prefira espécies adaptadas ao clima local e com menor demanda hídrica.',
      benefits: ['Menos irrigação necessária', 'Plantas mais saudáveis', 'Maior produtividade'],
      difficulty: 'Fácil',
    },
    {
      title: 'Monitoramento do Solo',
      category: 'Técnica',
      icon: Thermometer,
      image: 'https://images.unsplash.com/photo-1761201509055-30c04b68901c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFncmljdWx0dXJlJTIwd2F0ZXJ8ZW58MXx8fHwxNzYxODIxNzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      description: 'Verifique a umidade do solo antes de irrigar.',
      benefits: ['Evita desperdício', 'Previne excesso de água', 'Economiza recursos'],
      difficulty: 'Fácil',
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil':
        return 'bg-green-100 text-green-700';
      case 'Médio':
        return 'bg-yellow-100 text-yellow-700';
      case 'Difícil':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-green-700 mb-2">Dicas Práticas de Economia de Água</h2>
        <p>
          Aprenda técnicas eficientes de irrigação e práticas sustentáveis para maximizar 
          a produtividade enquanto economiza água.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => {
          const Icon = tip.icon;
          return (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Icon className="w-6 h-6 text-blue-600" />
                  <Badge variant="secondary">{tip.category}</Badge>
                </div>
                <CardTitle>{tip.title}</CardTitle>
                <CardDescription>{tip.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm mb-2">Benefícios:</p>
                    <ul className="space-y-1">
                      {tip.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="text-green-600 mt-1">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2">
                    <Badge className={getDifficultyColor(tip.difficulty)}>
                      {tip.difficulty}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
