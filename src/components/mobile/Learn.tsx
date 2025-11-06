import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { BookOpen, Video, FileText, Play } from 'lucide-react';

export function Learn() {
  const [selectedCategory, setSelectedCategory] = useState('guias');

  const guides = [
    {
      title: 'Manual de Irrigação por Gotejamento',
      type: 'PDF',
      duration: '10 min',
      level: 'Iniciante',
      icon: '📖',
    },
    {
      title: 'Guia de Captação de Água da Chuva',
      type: 'PDF',
      duration: '15 min',
      level: 'Intermediário',
      icon: '📘',
    },
    {
      title: 'Cobertura Morta: Técnicas e Materiais',
      type: 'PDF',
      duration: '8 min',
      level: 'Iniciante',
      icon: '📗',
    },
  ];

  const videos = [
    {
      title: 'Instalação de Sistema de Gotejamento',
      type: 'Vídeo',
      duration: '15 min',
      icon: '🎥',
    },
    {
      title: 'Técnicas de Conservação de Água',
      type: 'Vídeo',
      duration: '20 min',
      icon: '🎬',
    },
    {
      title: 'Construção de Cisterna Simples',
      type: 'Vídeo',
      duration: '25 min',
      icon: '📹',
    },
  ];

  const faqs = [
    {
      question: 'Qual o melhor horário para irrigar?',
      answer: 'O ideal é entre 6h-9h ou após 17h, quando a evaporação é menor e as plantas absorvem melhor a água.',
    },
    {
      question: 'Como saber se estou usando água demais?',
      answer: 'Sinais incluem solo encharcado, folhas amareladas e crescimento lento. Teste enfiando o dedo no solo até 5cm - se estiver úmido, não precisa irrigar.',
    },
    {
      question: 'Quanto custa irrigação por gotejamento?',
      answer: 'Para 100m², o investimento fica entre R$ 300-600, com economia de até 60% de água e aumento de produtividade.',
    },
    {
      question: 'Posso usar água da chuva?',
      answer: 'Sim! É excelente para todas as culturas, mais "macia" e sem cloro. Mantenha o sistema de captação limpo.',
    },
    {
      question: 'Como fazer cobertura morta?',
      answer: 'Use palha, folhas secas, serragem ou papelão. Aplique 5-10cm sobre o solo, deixando espaço no caule.',
    },
  ];

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white px-4 pt-12 pb-6">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="w-8 h-8" />
          <h1 className="text-white text-2xl">Aprender</h1>
        </div>
        <p className="text-sm text-purple-100">
          Recursos educativos e guias práticos
        </p>
      </div>

      {/* Category Tabs */}
      <div className="sticky top-0 bg-white border-b px-4 py-3 z-10">
        <div className="flex gap-2 overflow-x-auto">
          <button
            onClick={() => setSelectedCategory('guias')}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
              selectedCategory === 'guias'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            📚 Guias
          </button>
          <button
            onClick={() => setSelectedCategory('videos')}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
              selectedCategory === 'videos'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            🎥 Vídeos
          </button>
          <button
            onClick={() => setSelectedCategory('faq')}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
              selectedCategory === 'faq'
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            ❓ FAQ
          </button>
        </div>
      </div>

      <div className="px-4 py-6">
        {/* Guides */}
        {selectedCategory === 'guias' && (
          <div className="space-y-3">
            {guides.map((guide, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{guide.icon}</span>
                    <div className="flex-1">
                      <h3 className="mb-2">{guide.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {guide.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {guide.level}
                        </Badge>
                        <span className="text-xs text-gray-500 py-1">
                          {guide.duration}
                        </span>
                      </div>
                    </div>
                    <FileText className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Videos */}
        {selectedCategory === 'videos' && (
          <div className="space-y-3">
            {videos.map((video, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Play className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2">{video.title}</h3>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {video.type}
                        </Badge>
                        <span className="text-xs text-gray-500 py-1">
                          {video.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* FAQ */}
        {selectedCategory === 'faq' && (
          <Card>
            <CardContent className="p-4">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-sm">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-gray-700">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
