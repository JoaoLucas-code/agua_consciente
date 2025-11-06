import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';
import { Calculator, Droplets, TrendingDown } from 'lucide-react';

export function WaterCalculator() {
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
    
    // Litros por m² por dia
    const waterPerDay = (baseWaterNeed / efficiency) * areaNum;
    const waterPerMonth = waterPerDay * 30;
    
    // Comparação com método menos eficiente (sulco)
    const wastefulWater = (baseWaterNeed / 0.5) * areaNum * 30;
    const savings = ((wastefulWater - waterPerMonth) / wastefulWater) * 100;

    let recommendation = '';
    if (irrigationType === 'sulco') {
      recommendation = 'Considere mudar para irrigação por gotejamento para economizar até 40% de água.';
    } else if (irrigationType === 'aspersao') {
      recommendation = 'Ótimo! Considere irrigação por gotejamento para ainda mais eficiência.';
    } else {
      recommendation = 'Excelente! Você está usando um dos métodos mais eficientes.';
    }

    setResult({
      daily: waterPerDay,
      monthly: waterPerMonth,
      savings: savings,
      recommendation: recommendation,
    });
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            Calculadora de Consumo de Água
          </CardTitle>
          <CardDescription>
            Estime o consumo de água da sua horta e identifique oportunidades de economia
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="area">Área da Horta (m²)</Label>
            <Input
              id="area"
              type="number"
              placeholder="Ex: 100"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="crop">Tipo de Cultivo</Label>
            <Select value={cropType} onValueChange={setCropType}>
              <SelectTrigger id="crop">
                <SelectValue placeholder="Selecione o cultivo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tomate">Tomate</SelectItem>
                <SelectItem value="alface">Alface</SelectItem>
                <SelectItem value="cenoura">Cenoura</SelectItem>
                <SelectItem value="pepino">Pepino</SelectItem>
                <SelectItem value="feijao">Feijão</SelectItem>
                <SelectItem value="milho">Milho</SelectItem>
                <SelectItem value="abobora">Abóbora</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="irrigation">Sistema de Irrigação</Label>
            <Select value={irrigationType} onValueChange={setIrrigationType}>
              <SelectTrigger id="irrigation">
                <SelectValue placeholder="Selecione o sistema" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gotejamento">Gotejamento (90% eficiência)</SelectItem>
                <SelectItem value="microaspersao">Microaspersão (85% eficiência)</SelectItem>
                <SelectItem value="aspersao">Aspersão (70% eficiência)</SelectItem>
                <SelectItem value="sulco">Sulco/Inundação (50% eficiência)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={calculateWater} className="w-full">
            Calcular Consumo
          </Button>
        </CardContent>
      </Card>

      {result && (
        <div className="space-y-4">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <Droplets className="w-5 h-5" />
                Resultados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Consumo Diário</p>
                  <p className="text-2xl text-blue-700">{result.daily.toFixed(0)}L</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Consumo Mensal</p>
                  <p className="text-2xl text-blue-700">{result.monthly.toFixed(0)}L</p>
                </div>
              </div>

              {result.savings > 0 && (
                <div className="bg-green-100 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="w-5 h-5 text-green-700" />
                    <p className="text-green-700">Economia vs. Método Tradicional</p>
                  </div>
                  <p className="text-2xl text-green-700">{result.savings.toFixed(0)}%</p>
                </div>
              )}

              <Alert>
                <AlertDescription>{result.recommendation}</AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dica Rápida</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                💡 Instale um sistema de captação de água da chuva. Em uma chuva de 10mm, 
                um telhado de 100m² pode captar até 1.000 litros de água!
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
