import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card, CardContent } from '../ui/card';
import { Droplets, TrendingDown, CloudRain, Zap, Lightbulb } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-full">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white px-4 pt-12 pb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Droplets className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-white text-2xl">Água Consciente</h1>
            <p className="text-sm text-blue-100">Uso racional da água</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="px-4 -mt-6 mb-6">
        <div className="grid grid-cols-2 gap-3">
          <Card className="bg-white shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingDown className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              <div className="text-2xl text-blue-600 mb-1">40%</div>
              <p className="text-xs text-gray-600">Economia com gotejamento</p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-md">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CloudRain className="w-4 h-4 text-green-600" />
                </div>
              </div>
              <div className="text-2xl text-green-600 mb-1">1000L</div>
              <p className="text-xs text-gray-600">Captação por 100m²</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="px-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <h2 className="text-green-700 mb-2">Bem-vindo!</h2>
            <p className="text-sm mb-4">
              Aprenda a usar água de forma eficiente em hortas comunitárias 
              e pequenas propriedades rurais.
            </p>
            <div className="relative h-40 rounded-lg overflow-hidden mb-4">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1621958206813-2e9c0441c5b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW4lMjB3YXRlcmluZ3xlbnwxfHx8fDE3NjE4MjE3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Horta comunitária"
                className="w-full h-full object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mb-6">
        <h3 className="mb-3">Ações Rápidas</h3>
        <div className="space-y-3">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm">Calcule seu consumo de água</p>
              </div>
              <Zap className="w-5 h-5 text-blue-600" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm">Veja dicas de economia</p>
              </div>
              <Zap className="w-5 h-5 text-green-600" />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Daily Tip */}
      <div className="px-4 mb-6">
        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">💡</span>
              <div>
                <p className="text-sm mb-1">Dica do Dia</p>
                <p className="text-sm text-gray-700">
                  Irrigue nas primeiras horas da manhã (6h-9h) para reduzir 
                  evaporação em até 50%!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
