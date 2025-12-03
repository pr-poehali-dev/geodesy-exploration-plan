import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 0,
    title: 'Геодезия: Измеряя Землю',
    subtitle: 'Профессия будущего',
    content: (
      <div className="text-center space-y-6">
        <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
          <Icon name="Globe" size={48} className="text-primary" />
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Исследование профессии геодезиста: требования, перспективы и путь развития
        </p>
      </div>
    ),
  },
  {
    id: 1,
    title: 'Введение',
    subtitle: 'Что такое геодезия?',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          <strong>Геодезия</strong> — наука и практика измерения размеров и формы Земли, определения положения точек на её поверхности и построения карт.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Icon name="Building2" size={32} className="text-primary mb-3" />
            <h4 className="font-semibold mb-2">Строительство</h4>
            <p className="text-sm text-muted-foreground">Точные измерения для возведения зданий и сооружений</p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Icon name="Map" size={32} className="text-primary mb-3" />
            <h4 className="font-semibold mb-2">Землеустройство</h4>
            <p className="text-sm text-muted-foreground">Определение границ земельных участков</p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Icon name="Network" size={32} className="text-primary mb-3" />
            <h4 className="font-semibold mb-2">Инфраструктура</h4>
            <p className="text-sm text-muted-foreground">Проектирование дорог, мостов, тоннелей</p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Icon name="Sprout" size={32} className="text-primary mb-3" />
            <h4 className="font-semibold mb-2">Экология</h4>
            <p className="text-sm text-muted-foreground">Мониторинг изменений ландшафта</p>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Цель и задачи',
    subtitle: 'План исследования',
    content: (
      <div className="space-y-6">
        <Card className="p-6 bg-primary/5 border-primary/20">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon name="Target" size={24} className="text-primary" />
            Цель проекта
          </h3>
          <p className="text-lg">
            Исследовать профессию геодезиста, её требования и перспективы, обосновать выбор и составить личный план подготовки.
          </p>
        </Card>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">Задачи исследования:</h3>
        <div className="space-y-3">
          {[
            'Описать основные функции и специализации геодезиста',
            'Определить необходимые знания, умения и оборудование',
            'Изучить образовательные маршруты и рынок труда',
            'Сформировать практический план подготовки и учебный проект',
          ].map((task, index) => (
            <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-semibold">
                {index + 1}
              </div>
              <p className="pt-1">{task}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Функции геодезиста',
    subtitle: 'Основные направления работы',
    content: (
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon name="Ruler" size={24} className="text-primary" />
            </div>
            <h4 className="font-semibold text-lg">Полевые работы</h4>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
              <span>Топографическая съёмка местности</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
              <span>Создание геодезических сетей</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
              <span>Вынос проектов в натуру</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon name="Monitor" size={24} className="text-primary" />
            </div>
            <h4 className="font-semibold text-lg">Камеральные работы</h4>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
              <span>Обработка данных измерений</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
              <span>Создание цифровых карт и планов</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
              <span>Подготовка технической документации</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon name="Satellite" size={24} className="text-primary" />
            </div>
            <h4 className="font-semibold text-lg">Современные технологии</h4>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
              <span>GPS/GNSS-позиционирование</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
              <span>Лазерное сканирование</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
              <span>Аэрофотосъёмка с дронов</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon name="FileSearch" size={24} className="text-primary" />
            </div>
            <h4 className="font-semibold text-lg">Специализации</h4>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
              <span>Инженерная геодезия</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
              <span>Кадастровая деятельность</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
              <span>Маркшейдерское дело</span>
            </li>
          </ul>
        </Card>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Требования к профессии',
    subtitle: 'Знания, навыки, оборудование',
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <Icon name="Brain" size={40} className="text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-3">Знания</h4>
            <ul className="text-sm text-muted-foreground space-y-2 text-left">
              <li>• Математика и геометрия</li>
              <li>• Физическая география</li>
              <li>• Картография</li>
              <li>• Геодезическое черчение</li>
              <li>• Нормативная база</li>
            </ul>
          </Card>

          <Card className="p-6 text-center">
            <Icon name="Wrench" size={40} className="text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-3">Навыки</h4>
            <ul className="text-sm text-muted-foreground space-y-2 text-left">
              <li>• Работа с приборами</li>
              <li>• ГИС и САПР системы</li>
              <li>• Точность и внимательность</li>
              <li>• Командная работа</li>
              <li>• Физическая выносливость</li>
            </ul>
          </Card>

          <Card className="p-6 text-center">
            <Icon name="Briefcase" size={40} className="text-primary mx-auto mb-4" />
            <h4 className="font-semibold mb-3">Оборудование</h4>
            <ul className="text-sm text-muted-foreground space-y-2 text-left">
              <li>• Теодолит</li>
              <li>• Нивелир</li>
              <li>• GPS-приёмник</li>
              <li>• Лазерный сканер</li>
              <li>• Дрон с камерой</li>
            </ul>
          </Card>
        </div>

        <Card className="p-6 bg-primary/5 border-primary/20">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <Icon name="User" size={20} className="text-primary" />
            Личные качества
          </h4>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Аналитическое мышление',
              'Пространственное воображение',
              'Ответственность и дисциплина',
              'Стрессоустойчивость',
              'Готовность к командировкам',
              'Внимание к деталям',
            ].map((quality, index) => (
              <div key={index} className="flex items-center gap-2">
                <Icon name="Sparkles" size={16} className="text-primary flex-shrink-0" />
                <span className="text-sm">{quality}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Образование и карьера',
    subtitle: 'Путь к профессии',
    content: (
      <div className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Icon name="GraduationCap" size={24} className="text-primary" />
            Образовательные маршруты
          </h3>
          
          <Card className="p-6 border-l-4 border-l-primary">
            <h4 className="font-semibold mb-2">Среднее профессиональное образование</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Техникум или колледж (2-3 года). Специальность: "Прикладная геодезия"
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="Clock" size={16} className="text-primary" />
              <span>Быстрый путь на рынок труда</span>
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-primary">
            <h4 className="font-semibold mb-2">Высшее образование</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Университет (4 года бакалавриат + 2 года магистратура). Специальность: "Геодезия и дистанционное зондирование"
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Icon name="TrendingUp" size={16} className="text-primary" />
              <span>Карьерный рост и научная деятельность</span>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Icon name="Briefcase" size={24} className="text-primary" />
            Рынок труда
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-5">
              <h4 className="font-semibold mb-3 text-primary">Работодатели</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Строительные компании</li>
                <li>• Проектные организации</li>
                <li>• Кадастровые палаты</li>
                <li>• Горнодобывающие предприятия</li>
                <li>• Геодезические службы</li>
              </ul>
            </Card>

            <Card className="p-5">
              <h4 className="font-semibold mb-3 text-primary">Перспективы</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Icon name="DollarSign" size={16} className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Зарплата: 50-150 тыс. руб.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="BarChart" size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Стабильный спрос</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="Rocket" size={16} className="text-purple-600 mt-1 flex-shrink-0" />
                  <span>Карьерный рост до главного инженера</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Практический план',
    subtitle: 'Моя дорожная карта',
    content: (
      <div className="space-y-6">
        <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
          <h3 className="text-xl font-semibold mb-4">План подготовки</h3>
          <div className="space-y-4">
            {[
              {
                phase: 'Этап 1: Базовая подготовка',
                items: [
                  'Углубленное изучение математики и физики',
                  'Освоение AutoCAD и QGIS',
                  'Чтение профессиональной литературы',
                ],
              },
              {
                phase: 'Этап 2: Практический опыт',
                items: [
                  'Посещение дней открытых дверей в вузах',
                  'Онлайн-курсы по геодезии',
                  'Стажировка в геодезической компании',
                ],
              },
              {
                phase: 'Этап 3: Поступление',
                items: [
                  'Подготовка к ЕГЭ (математика, физика, русский)',
                  'Выбор вуза и программы обучения',
                  'Участие в олимпиадах по профилю',
                ],
              },
            ].map((stage, index) => (
              <div key={index} className="border-l-4 border-primary pl-4">
                <h4 className="font-semibold mb-2">{stage.phase}</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {stage.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon name="ArrowRight" size={16} className="text-primary mt-1 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 border-primary/20">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Icon name="Lightbulb" size={24} className="text-primary" />
            Учебный проект
          </h3>
          <p className="mb-4">
            Создание топографического плана территории школы с использованием простейших геодезических методов и современных инструментов (мобильные GPS-приложения).
          </p>
          <div className="flex flex-wrap gap-2">
            {['Измерения', 'Расчёты', 'Визуализация', 'Презентация'].map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </Card>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Заключение',
    subtitle: 'Выводы исследования',
    content: (
      <div className="space-y-8 text-center max-w-3xl mx-auto">
        <div className="space-y-4">
          <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
            <Icon name="Award" size={40} className="text-primary" />
          </div>
          <p className="text-lg leading-relaxed">
            Профессия геодезиста — это сочетание научного подхода, современных технологий и практической работы.
            Она востребована на рынке труда и предлагает разнообразные карьерные возможности.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <Card className="p-6 text-center">
            <Icon name="CheckCircle" size={32} className="text-green-600 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Актуальность</h4>
            <p className="text-sm text-muted-foreground">Высокий спрос на специалистов</p>
          </Card>
          
          <Card className="p-6 text-center">
            <Icon name="TrendingUp" size={32} className="text-blue-600 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Перспективы</h4>
            <p className="text-sm text-muted-foreground">Развитие в технологиях</p>
          </Card>
          
          <Card className="p-6 text-center">
            <Icon name="Heart" size={32} className="text-red-600 mx-auto mb-3" />
            <h4 className="font-semibold mb-2">Призвание</h4>
            <p className="text-sm text-muted-foreground">Интерес к точным наукам</p>
          </Card>
        </div>

        <Card className="p-6 bg-primary text-primary-foreground">
          <p className="text-lg font-semibold">
            Мой выбор профессии геодезиста обоснован и подкреплён чётким планом подготовки.
          </p>
        </Card>

        <div className="pt-4">
          <p className="text-muted-foreground">
            Спасибо за внимание! 🚀
          </p>
        </div>
      </div>
    ),
  },
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex flex-col">
      <div className="flex-1 flex flex-col">
        <div className="flex-1 container mx-auto px-4 py-8 flex items-center justify-center">
          <div className="w-full max-w-6xl">
            <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-12 min-h-[600px] flex flex-col animate-fade-in">
              <div className="mb-8">
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-xl text-primary font-semibold">{slides[currentSlide].subtitle}</p>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="animate-slide-in">{slides[currentSlide].content}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between gap-4">
              <Button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
              >
                <ChevronLeft size={20} />
                <span className="hidden sm:inline">Назад</span>
              </Button>

              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-muted hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Перейти к слайду ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                size="lg"
                className="flex items-center gap-2"
              >
                <span className="hidden sm:inline">Далее</span>
                <ChevronRight size={20} />
              </Button>
            </div>

            <div className="text-center mt-4 text-sm text-muted-foreground">
              Слайд {currentSlide + 1} из {slides.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
