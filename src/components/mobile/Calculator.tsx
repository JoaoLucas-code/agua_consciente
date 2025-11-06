import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { Droplets, TrendingDown, Calculator as CalcIcon } from 'lucide-react';

export function Calculator() {
  const [area, setArea] = useState('');
  const [cropType, setCropType] = useState('');
  const [irrigationType, setIrrigationType] = useState('');
  const [result, setResult] = useState<{
    daily: number;
    monthly: number;
    savings: number;
    recommendation: string;
  } | null>(null);

  const cropWaterNeeds: Record<string, number> = {
    tomate: 5,
    alface: 3,
    cenoura: 4,
    pepino: 6,
    feijao: 4,
    milho: 5,
    abobora: 4,
  };

  const irrigationEfficiency: Record<string, number> = {
    aspersao: 0.7,
    gotejamento: 0.9,
    sulco: 0.5,
    microaspersao: 0.85,
  };

  const calculateWater = () => {
    const areaNum = parseFloat(area);
    if (!areaNum || !cropType || !irrigationType) {
      return;
    }

    const baseWaterNeed = cropWaterNeeds[cropType] || 4;
    const efficiency = irrigationEfficiency[irrigationType] || 0.7;
    
    const waterPerDay = (baseWaterNeed / efficiency) * areaNum;
    const waterPerMonth = waterPerDay * 30;
    
    const wastefulWater = (baseWaterNeed / 0.5) * areaNum * 30;
    const savings = ((wastefulWater - waterPerMonth) / wastefulWater) * 100;

    let recommendation = '';
    if (irrigationType === 'sulco') {
      recommendation = 'Troque para gotejamento e economize até 40% de água.';
    } else if (irrigationType === 'aspersao') {
      recommendation = 'Considere gotejamento para ainda mais eficiência.';
    } else {
      recommendation = 'Excelente! Sistema muito eficiente.';
    }

    setResult({
      daily: waterPerDay,
      monthly: waterPerMonth,
      savings: savings,
      recommendation: recommendation,
    });
  };

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white px-4 pt-12 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <CalcIcon className="w-8 h-8" />
          <h1 className="text-white text-2xl">Calculadora</h1>
        </div>
        <p className="text-sm text-blue-100">
          Estime o consumo de água da sua horta
        </p>
      </div>

      <div className="px-4 py-6 space-y-4">
        {/* Input Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Dados da Horta</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="area">Área (m²)</Label>
              <Input
                id="area"
                type="number"
                placeholder="Ex: 100"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="crop">Tipo de Cultivo</Label>
              <Select value={cropType} onValueChange={setCropType}>
                <SelectTrigger id="crop" className="text-base">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tomate">🍅 Tomate</SelectItem>
                  <SelectItem value="alface">🥬 Alface</SelectItem>
                  <SelectItem value="cenoura">🥕 Cenoura</SelectItem>
                  <SelectItem value="pepino">🥒 Pepino</SelectItem>
                  <SelectItem value="feijao">🫘 Feijão</SelectItem>
                  <SelectItem value="milho">🌽 Milho</SelectItem>
                  <SelectItem value="abobora">🎃 Abóbora</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="irrigation">Sistema de Irrigação</Label>
              <Select value={irrigationType} onValueChange={setIrrigationType}>
                <SelectTrigger id="irrigation" className="text-base">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gotejamento">💧 Gotejamento (90%)</SelectItem>
                  <SelectItem value="microaspersao">🌊 Microaspersão (85%)</SelectItem>
                  <SelectItem value="aspersao">💦 Aspersão (70%)</SelectItem>
                  <SelectItem value="sulco">🚿 Sulco (50%)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button onClick={calculateWater} className="w-full h-12 text-base bg-green-600 hover:bg-green-700">
              <CalcIcon className="w-5 h-5 mr-2" />
              Calcular Consumo
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        {result && (
          <div className="space-y-4">
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Droplets className="w-6 h-6" />
                  <h3 className="text-white">Consumo Estimado</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-blue-100 mb-1">Diário</p>
                    <p className="text-3xl">{result.daily.toFixed(0)}L</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-100 mb-1">Mensal</p>
                    <p className="text-3xl">{result.monthly.toFixed(0)}L</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {result.savings > 0 && (
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="w-6 h-6" />
                    <h3 className="text-white">Economia</h3>
                  </div>
                  <p className="text-4xl mb-2">{result.savings.toFixed(0)}%</p>
                  <p className="text-sm text-green-100">
                    vs. método tradicional
                  </p>
                </CardContent>
              </Card>
            )}

            <Card className="bg-amber-50 border-amber-200">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <p className="text-sm text-gray-700 pt-1">
                    {result.recommendation}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
