import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import { MessageSquare, ThumbsUp, Send, Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';

interface Post {
  id: number;
  author: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  comments: number;
  date: string;
}

export function CommunityForum() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: 'Maria Silva',
      title: 'Meu sistema de gotejamento caseiro funcionou!',
      content: 'Compartilho minha experiência: instalei um sistema de gotejamento usando garrafas PET e mangueiras simples. Consegui reduzir meu consumo de água em 45%! Posso compartilhar o passo a passo se alguém tiver interesse.',
      category: 'Sucesso',
      likes: 24,
      comments: 8,
      date: '2 dias atrás',
    },
    {
      id: 2,
      author: 'João Ferreira',
      title: 'Dúvida sobre captação de água da chuva',
      content: 'Estou planejando instalar um sistema de captação no telhado do meu galpão (150m²). Alguém tem experiência com o dimensionamento da cisterna? Minha região tem média de 1200mm de chuva por ano.',
      category: 'Dúvida',
      likes: 12,
      comments: 15,
      date: '3 dias atrás',
    },
    {
      id: 3,
      author: 'Ana Costa',
      title: 'Cobertura morta com folhas de bananeira',
      content: 'Descobri que as folhas de bananeira são excelentes para cobertura morta! Elas retêm muita umidade e se decompõem lentamente. Alguém mais usa?',
      category: 'Dica',
      likes: 31,
      comments: 12,
      date: '5 dias atrás',
    },
    {
      id: 4,
      author: 'Pedro Santos',
      title: 'Horta comunitária economizou 60% de água',
      content: 'Nossa horta comunitária implementou várias técnicas que aprendemos aqui: gotejamento, mulching e captação de chuva. Resultado: 60% de economia em 3 meses! Obrigado pela comunidade!',
      category: 'Sucesso',
      likes: 45,
      comments: 20,
      date: '1 semana atrás',
    },
  ]);

  const [newPost, setNewPost] = useState({
    author: '',
    title: '',
    content: '',
    category: 'Dúvida',
  });

  const [dialogOpen, setDialogOpen] = useState(false);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleSubmitPost = () => {
    if (!newPost.author || !newPost.title || !newPost.content) return;

    const post: Post = {
      id: posts.length + 1,
      author: newPost.author,
      title: newPost.title,
      content: newPost.content,
      category: newPost.category,
      likes: 0,
      comments: 0,
      date: 'Agora',
    };

    setPosts([post, ...posts]);
    setNewPost({ author: '', title: '', content: '', category: 'Dúvida' });
    setDialogOpen(false);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Sucesso':
        return 'bg-green-100 text-green-700';
      case 'Dúvida':
        return 'bg-blue-100 text-blue-700';
      case 'Dica':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-green-700 mb-2">Comunidade Colaborativa</h2>
            <p>
              Compartilhe experiências, tire dúvidas e aprenda com outros agricultores 
              sobre práticas sustentáveis de irrigação.
            </p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="w-4 h-4 mr-2" />
                Nova Publicação
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Criar Nova Publicação</DialogTitle>
                <DialogDescription>
                  Compartilhe suas experiências, dúvidas ou dicas com a comunidade
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="post-author">Seu Nome</Label>
                  <Input
                    id="post-author"
                    placeholder="Digite seu nome"
                    value={newPost.author}
                    onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="post-title">Título</Label>
                  <Input
                    id="post-title"
                    placeholder="Dê um título para sua publicação"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="post-content">Conteúdo</Label>
                  <Textarea
                    id="post-content"
                    placeholder="Compartilhe sua experiência, dúvida ou dica..."
                    rows={6}
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Categoria</Label>
                  <div className="flex gap-2">
                    {['Dúvida', 'Dica', 'Sucesso'].map((cat) => (
                      <Button
                        key={cat}
                        type="button"
                        variant={newPost.category === cat ? 'default' : 'outline'}
                        onClick={() => setNewPost({ ...newPost, category: cat })}
                      >
                        {cat}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button onClick={handleSubmitPost} className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Publicar
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <Avatar>
                    <AvatarFallback className="bg-green-600 text-white">
                      {post.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium">{post.author}</p>
                      <span className="text-sm text-gray-500">• {post.date}</span>
                    </div>
                    <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
                    <Badge className={getCategoryColor(post.category)}>
                      {post.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="flex items-center gap-4 pt-4 border-t">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleLike(post.id)}
                  className="gap-2"
                >
                  <ThumbsUp className="w-4 h-4" />
                  {post.likes}
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <MessageSquare className="w-4 h-4" />
                  {post.comments} comentários
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <p className="text-center text-blue-800">
            💡 Esta é uma versão demonstrativa. Para funcionalidade completa de comunidade 
            com armazenamento persistente de dados, considere conectar ao Supabase.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
