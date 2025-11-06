import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Users, ThumbsUp, MessageSquare, Plus } from 'lucide-react';

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

export function Community() {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: 'Maria Silva',
      title: 'Sistema de gotejamento caseiro funcionou!',
      content: 'Instalei usando garrafas PET e mangueiras. Reduzi 45% do consumo de água! 🎉',
      category: 'Sucesso',
      likes: 24,
      comments: 8,
      date: '2 dias atrás',
    },
    {
      id: 2,
      author: 'João Ferreira',
      title: 'Dúvida sobre captação de chuva',
      content: 'Como dimensionar cisterna para telhado de 150m² com 1200mm de chuva/ano?',
      category: 'Dúvida',
      likes: 12,
      comments: 15,
      date: '3 dias atrás',
    },
    {
      id: 3,
      author: 'Ana Costa',
      title: 'Folhas de bananeira como cobertura',
      content: 'Descobri que folhas de bananeira são ótimas para mulching! Retêm muita umidade.',
      category: 'Dica',
      likes: 31,
      comments: 12,
      date: '5 dias atrás',
    },
    {
      id: 4,
      author: 'Pedro Santos',
      title: 'Nossa horta economizou 60%!',
      content: 'Implementamos gotejamento, mulching e captação. Resultado incrível em 3 meses!',
      category: 'Sucesso',
      likes: 45,
      comments: 20,
      date: '1 semana',
    },
  ]);

  const [newPost, setNewPost] = useState({
    author: '',
    title: '',
    content: '',
    category: 'Dúvida',
  });

  const [sheetOpen, setSheetOpen] = useState(false);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const handleSubmitPost = () => {
    if (!newPost.author || !newPost.title || !newPost.content) return;

    const post: Post = {
      id: posts.length + 1,
      ...newPost,
      likes: 0,
      comments: 0,
      date: 'Agora',
    };

    setPosts([post, ...posts]);
    setNewPost({ author: '', title: '', content: '', category: 'Dúvida' });
    setSheetOpen(false);
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
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white px-4 pt-12 pb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8" />
            <div>
              <h1 className="text-white text-2xl">Comunidade</h1>
              <p className="text-sm text-orange-100">{posts.length} publicações</p>
            </div>
          </div>
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button size="sm" className="bg-white text-orange-600 hover:bg-orange-50">
                <Plus className="w-4 h-4 mr-1" />
                Novo
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[90vh]">
              <SheetHeader>
                <SheetTitle>Nova Publicação</SheetTitle>
                <SheetDescription>
                  Compartilhe sua experiência com a comunidade
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Input
                    placeholder="Seu nome"
                    value={newPost.author}
                    onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="Título"
                    value={newPost.title}
                    onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Compartilhe sua experiência..."
                    rows={6}
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-sm">Categoria</p>
                  <div className="flex gap-2">
                    {['Dúvida', 'Dica', 'Sucesso'].map((cat) => (
                      <Button
                        key={cat}
                        size="sm"
                        variant={newPost.category === cat ? 'default' : 'outline'}
                        onClick={() => setNewPost({ ...newPost, category: cat })}
                      >
                        {cat}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button onClick={handleSubmitPost} className="w-full">
                  Publicar
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="px-4 py-6 space-y-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardContent className="p-4">
              <div className="flex items-start gap-3 mb-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-orange-600 text-white text-sm">
                    {post.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">{post.author}</p>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
                <Badge className={getCategoryColor(post.category)}>
                  {post.category}
                </Badge>
              </div>
              
              <h3 className="mb-2">{post.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{post.content}</p>
              
              <div className="flex items-center gap-4 pt-3 border-t">
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center gap-1 text-sm text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <ThumbsUp className="w-4 h-4" />
                  {post.likes}
                </button>
                <button className="flex items-center gap-1 text-sm text-gray-600">
                  <MessageSquare className="w-4 h-4" />
                  {post.comments}
                </button>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <p className="text-sm text-center text-blue-800">
              💡 Conecte ao Supabase para armazenamento persistente
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
