import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { BookOpen, Video, FileText, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export function EducationalResources() {
  const resources = [
    {
      category: 'Guias Práticos',
      icon: FileText,
      items: [
        {
          title: 'Manual de Irrigação por Gotejamento',
          description: 'Aprenda a instalar e manter sistemas de gotejamento em hortas.',
          type: 'PDF',
          level: 'Iniciante',
        },
        {
          title: 'Guia de Captação de Água da Chuva',
          description: 'Como dimensionar e construir sistemas de captação pluvial.',
          type: 'PDF',
          level: 'Intermediário',
        },
        {
          title: 'Cobertura Morta: Técnicas e Materiais',
          description: 'Diferentes tipos de mulching e suas aplicações.',
          type: 'PDF',
          level: 'Iniciante',
        },
      ],
    },
    {
      category: 'Vídeos Educativos',
      icon: Video,
      items: [
        {
          title: 'Instalação de Sistema de Gotejamento',
          description: 'Passo a passo visual para instalação eficiente.',
          type: 'Vídeo',
          duration: '15 min',
        },
        {
          title: 'Técnicas de Conservação de Água',
          description: 'Práticas sustentáveis para pequenas propriedades.',
          type: 'Vídeo',
          duration: '20 min',
        },
        {
          title: 'Construção de Cisterna Simples',
          description: 'Como fazer uma cisterna com materiais acessíveis.',
          type: 'Vídeo',
          duration: '25 min',
        },
      ],
    },
  ];

  const faqs = [
    {
      question: 'Qual o melhor horário para irrigar a horta?',
      answer: 'O ideal é irrigar nas primeiras horas da manhã (entre 6h e 9h) ou no final da tarde (após 17h). Nesses horários, a evaporação é menor e as plantas conseguem absorver melhor a água. Evite irrigar durante o meio do dia, quando o sol está mais forte.',
    },
    {
      question: 'Como saber se estou usando água demais?',
      answer: 'Alguns sinais de excesso de irrigação incluem: solo constantemente encharcado, folhas amareladas, crescimento lento, e aparecimento de fungos. Faça o teste do dedo: enfie o dedo no solo até 5cm de profundidade. Se estiver úmido, não precisa irrigar.',
    },
    {
      question: 'Quanto custa instalar irrigação por gotejamento?',
      answer: 'O custo varia conforme o tamanho da área, mas para uma horta de 100m², o investimento inicial fica entre R$ 300 e R$ 600. O retorno vem através da economia de água (até 60%) e aumento da produtividade.',
    },
    {
      question: 'Posso usar água da chuva para todas as culturas?',
      answer: 'Sim! A água da chuva é excelente para todas as culturas. Ela é naturalmente mais "macia" (com menos minerais) e não contém cloro. Apenas certifique-se de que o sistema de captação esteja limpo para evitar contaminações.',
    },
    {
      question: 'Como fazer cobertura morta com materiais disponíveis?',
      answer: 'Você pode usar diversos materiais: palha seca, folhas mortas, serragem, casca de árvores, jornal picado, ou até papelão. Aplique uma camada de 5-10cm sobre o solo ao redor das plantas, mantendo um pequeno espaço ao redor do caule.',
    },
    {
      question: 'Qual a diferença entre irrigação por aspersão e gotejamento?',
      answer: 'A aspersão espalha água no ar (como uma chuva artificial), tendo eficiência de 60-75%. O gotejamento fornece água diretamente às raízes gota a gota, com eficiência de 85-95%. O gotejamento economiza mais água, mas tem custo inicial maior.',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-green-700 mb-2">Recursos Educativos</h2>
        <p>
          Materiais didáticos, guias práticos e vídeos para aprofundar seus conhecimentos 
          sobre uso racional da água na agricultura.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-blue-600" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="border-l-4 border-blue-600 pl-4 py-2 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-1">
                        <h4>{item.title}</h4>
                        <Badge variant="outline" className="ml-2">
                          {item.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                      <div className="flex items-center gap-2 text-sm">
                        {'level' in item && (
                          <Badge variant="secondary" className="text-xs">
                            {item.level}
                          </Badge>
                        )}
                        {'duration' in item && (
                          <span className="text-gray-500">{item.duration}</span>
                        )}
                        <Button variant="link" size="sm" className="ml-auto p-0 h-auto">
                          Acessar <ExternalLink className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-green-600" />
            Perguntas Frequentes
          </CardTitle>
          <CardDescription>
            Respostas para as dúvidas mais comuns sobre irrigação e conservação de água
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
