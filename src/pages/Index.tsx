import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedRation, setSelectedRation] = useState<string | null>(null);

  const rations = [
    {
      id: 'prosila',
      name: 'proЗЁРНА.ПроСила',
      category: 'Для активных и спортсменов',
      description: 'Рацион с упором на белок, энергию и восстановление. Подходит тем, кто занимается спортом, фитнесом, бегом.',
      features: ['Высокое содержание белка', 'Энергетические комплексы', 'Быстрое восстановление', 'Натуральные ингредиенты'],
      price: '2 890',
      color: 'forest'
    },
    {
      id: 'prolight',
      name: 'proЗЁРНА.ПроLight',
      category: 'Для следящих за фигурой',
      description: 'Лёгкие блюда, контроль калорий, правильные сочетания. Для тех, кто хочет стройность и лёгкость без лишних ограничений.',
      features: ['Контроль калорий', 'Лёгкие блюда', 'Правильные сочетания', 'Сохранение энергии'],
      price: '2 490',
      color: 'sage'
    },
    {
      id: 'probalans',
      name: 'proЗЁРНА.ПроБаланс',
      category: 'Для общего здоровья и гармонии',
      description: 'Сбалансированное питание для поддержания здоровья, энергии и хорошего самочувствия каждый день.',
      features: ['Полный баланс нутриентов', 'Поддержка иммунитета', 'Стабильная энергия', 'Общее оздоровление'],
      price: '2 690',
      color: 'earth'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-earth-50 font-open-sans">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-sage-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="/img/2f99170d-72a0-43ea-85f7-5ce59b94ad82.jpg" 
                alt="про зерна логотип"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="font-montserrat font-bold text-xl text-forest-800">про зерна</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-forest-700 hover:text-forest-800 transition-colors">Главная</a>
              <a href="#rations" className="text-forest-700 hover:text-forest-800 transition-colors">Рационы</a>
              <a href="#delivery" className="text-forest-700 hover:text-forest-800 transition-colors">Доставка</a>
              <a href="#about" className="text-forest-700 hover:text-forest-800 transition-colors">О нас</a>
              <a href="#reviews" className="text-forest-700 hover:text-forest-800 transition-colors">Отзывы</a>
              <a href="#contacts" className="text-forest-700 hover:text-forest-800 transition-colors">Контакты</a>
            </div>
            <Button className="bg-forest-600 hover:bg-forest-700 text-white">
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Заказать
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-100/80 to-sage-100/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-montserrat font-bold text-5xl lg:text-6xl text-forest-800 mb-6">
                Правильное питание от
                <span className="text-sage-600 block">про зерна</span>
              </h1>
              <p className="text-xl text-forest-600 mb-8 leading-relaxed">
                Персональные рационы здорового питания с доставкой. 
                Энергия, здоровье и отличное самочувствие каждый день.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-forest-600 hover:bg-forest-700 text-white font-medium px-8 py-4"
                  onClick={() => document.getElementById('rations')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Leaf" size={20} className="mr-2" />
                  Выбрать рацион
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-forest-300 text-forest-700 hover:bg-forest-50 px-8 py-4"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/6fcbcc79-c413-4ac5-916e-662f628e00b0.jpg" 
                alt="Здоровое питание от про зерна"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rations Section */}
      <section id="rations" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-forest-800 mb-4">
              Наши рационы
            </h2>
            <p className="text-xl text-forest-600 max-w-3xl mx-auto">
              Каждый рацион разработан с учетом ваших целей и потребностей. 
              Натуральные продукты, сбалансированный состав, удобная доставка.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rations.map((ration, index) => (
              <Card 
                key={ration.id} 
                className={`relative overflow-hidden border-2 hover:shadow-xl transition-all duration-300 animate-fade-in bg-gradient-to-br from-${ration.color}-50 to-white group cursor-pointer`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant="secondary" 
                      className={`bg-${ration.color}-100 text-${ration.color}-800 border-${ration.color}-200`}
                    >
                      {ration.category}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-forest-800">{ration.price} ₽</div>
                      <div className="text-sm text-forest-600">за неделю</div>
                    </div>
                  </div>
                  <CardTitle className="font-montserrat text-xl text-forest-800">
                    {ration.name}
                  </CardTitle>
                  <CardDescription className="text-forest-600">
                    {ration.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {ration.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-sage-600 flex-shrink-0" />
                        <span className="text-sm text-forest-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className={`w-full bg-${ration.color}-600 hover:bg-${ration.color}-700 text-white`}
                        onClick={() => setSelectedRation(ration.id)}
                      >
                        <Icon name="ShoppingBag" size={18} className="mr-2" />
                        Заказать рацион
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="font-montserrat">Оформить заказ</DialogTitle>
                        <DialogDescription>
                          Рацион: {ration.name}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Имя</Label>
                          <Input id="name" placeholder="Ваше имя" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон</Label>
                          <Input id="phone" placeholder="+7 (___) ___-__-__" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address">Адрес доставки</Label>
                          <Textarea id="address" placeholder="Укажите адрес доставки" />
                        </div>
                        <Button className="w-full bg-forest-600 hover:bg-forest-700 text-white">
                          Подтвердить заказ
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-r from-sage-100 to-earth-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-montserrat font-bold text-4xl text-center text-forest-800 mb-16">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Leaf" className="text-white" size={32} />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-forest-800 mb-2">
                100% натуральные продукты
              </h3>
              <p className="text-forest-600">
                Только свежие, качественные ингредиенты без искусственных добавок
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 bg-sage-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="text-white" size={32} />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-forest-800 mb-2">
                Ежедневная доставка
              </h3>
              <p className="text-forest-600">
                Свежие блюда каждый день прямо к вашему порогу
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 bg-earth-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="text-white" size={32} />
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-forest-800 mb-2">
                Забота о здоровье
              </h3>
              <p className="text-forest-600">
                Сбалансированные рационы от профессиональных диетологов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-forest-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/img/2f99170d-72a0-43ea-85f7-5ce59b94ad82.jpg" 
                  alt="про зерна логотип"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-montserrat font-bold text-xl">про зерна</span>
              </div>
              <p className="text-forest-200">
                Правильное питание с заботой о вашем здоровье и удовольствии от каждого приема пищи.
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Рационы</h4>
              <ul className="space-y-2 text-forest-200">
                <li>ПроСила</li>
                <li>ПроLight</li>
                <li>ПроБаланс</li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-forest-200">
                <li>О нас</li>
                <li>Доставка</li>
                <li>Оплата</li>
                <li>Отзывы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-forest-200">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>hello@prozerna.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Здоровья, 15</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-forest-700 mt-8 pt-8 text-center text-forest-300">
            <p>&copy; 2024 про зерна. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;