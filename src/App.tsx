import { useState } from 'react';
import { Home } from './components/mobile/Home';
import { Calculator } from './components/mobile/Calculator';
import { Tips } from './components/mobile/Tips';
import { Learn } from './components/mobile/Learn';
import { Community } from './components/mobile/Community';
import { Home as HomeIcon, Calculator as CalcIcon, Lightbulb, BookOpen, Users } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'calculator':
        return <Calculator />;
      case 'tips':
        return <Tips />;
      case 'learn':
        return <Learn />;
      case 'community':
        return <Community />;
      default:
        return <Home />;
    }
  };

  const navItems = [
    { id: 'home', label: 'Início', icon: HomeIcon },
    { id: 'calculator', label: 'Calcular', icon: CalcIcon },
    { id: 'tips', label: 'Dicas', icon: Lightbulb },
    { id: 'learn', label: 'Aprender', icon: BookOpen },
    { id: 'community', label: 'Comunidade', icon: Users },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50 max-w-md mx-auto">
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20">
        {renderScreen()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 safe-area-pb">
        <div className="grid grid-cols-5 h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                  isActive
                    ? 'text-green-600'
                    : 'text-gray-500'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : ''}`} />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
