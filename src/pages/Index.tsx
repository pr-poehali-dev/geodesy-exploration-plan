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
        <Card className="p-6 bg-primary/5 border-primary/20">
          <p className="text-lg leading-relaxed mb-4">
            <strong>Геодезия</strong> — наука и практика измерения размеров и формы Земли, определения положения точек на её поверхности и построения карт.
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold text-base">Цель проекта:</h4>
            <p className="text-sm text-muted-foreground">
              Исследовать профессию геодезиста, её требования и перспективы, обосновать мой выбор и составить личный план подготовки.
            </p>
          </div>
        </Card>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 hover:shadow-lg transition-shadow">
            <Icon name="Building2" size={28} className="text-primary mb-2" />
            <h4 className="font-semibold mb-1 text-sm">Строительство</h4>
            <p className="text-xs text-muted-foreground">Точные измерения для возведения зданий</p>
          </Card>
          <Card className="p-5 hover:shadow-lg transition-shadow">
            <Icon name="Map" size={28} className="text-primary mb-2" />
            <h4 className="font-semibold mb-1 text-sm">Землеустройство</h4>
            <p className="text-xs text-muted-foreground">Определение границ участков</p>
          </Card>
          <Card className="p-5 hover:shadow-lg transition-shadow">
            <Icon name="Network" size={28} className="text-primary mb-2" />
            <h4 className="font-semibold mb-1 text-sm">Инфраструктура</h4>
            <p className="text-xs text-muted-foreground">Дороги, мосты, тоннели</p>
          </Card>
          <Card className="p-5 hover:shadow-lg transition-shadow">
            <Icon name="Sprout" size={28} className="text-primary mb-2" />
            <h4 className="font-semibold mb-1 text-sm">Экология и сельское хозяйство</h4>
            <p className="text-xs text-muted-foreground">Мониторинг и точное земледелие</p>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Значение профессии',
    subtitle: 'Роль геодезиста в современном мире',
    content: (
      <div className="space-y-5">
        <Card className="p-5 bg-primary/5">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Icon name="Shield" size={20} className="text-primary" />
            Ключевая роль
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>Обеспечение точности строительства и инженерных коммуникаций</span>
            </li>
            <li className="flex gap-2">
              <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>Создание и обновление топографических и кадастровых карт</span>
            </li>
            <li className="flex gap-2">
              <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>Контроль деформаций зданий и сооружений</span>
            </li>
            <li className="flex gap-2">
              <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
              <span>Участие в землеустройстве и урегулировании границ</span>
            </li>
          </ul>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm">
              <Icon name="TrendingUp" size={18} className="text-blue-600" />
              Тенденции развития
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>• Внедрение GNSS-технологий</li>
              <li>• Беспилотники (БПЛА) и LiDAR</li>
              <li>• Интеграция с ГИС и BIM</li>
              <li>• Экология и точное земледелие</li>
            </ul>
          </Card>
          
          <Card className="p-5">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm">
              <Icon name="Award" size={18} className="text-green-600" />
              Критерии значимости
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>• Точность влияет на безопасность</li>
              <li>• Устойчива к автоматизации</li>
              <li>• Востребована в регионах</li>
              <li>• Развитие инфраструктуры</li>
            </ul>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Описание профессии',
    subtitle: 'Обязанности и виды деятельности',
    content: (
      <div className="space-y-5">
        <Card className="p-5 bg-gradient-to-br from-primary/10 to-primary/5">
          <h3 className="font-semibold mb-2 text-base">Основная цель работы</h3>
          <p className="text-sm text-muted-foreground">
            Определение координат, расстояний, углов и высот для задач проектирования, строительства и учёта земли.
          </p>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5">
            <h4 className="font-semibold mb-3 text-sm flex items-center gap-2">
              <Icon name="ClipboardList" size={18} className="text-primary" />
              Типичные обязанности
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li className="flex gap-2"><Icon name="Dot" size={12} className="mt-1 flex-shrink-0" />Полевые измерения и съёмки</li>
              <li className="flex gap-2"><Icon name="Dot" size={12} className="mt-1 flex-shrink-0" />Обработка данных в CAD/GIS</li>
              <li className="flex gap-2"><Icon name="Dot" size={12} className="mt-1 flex-shrink-0" />Создание топографических карт</li>
              <li className="flex gap-2"><Icon name="Dot" size={12} className="mt-1 flex-shrink-0" />Контроль строительства</li>
              <li className="flex gap-2"><Icon name="Dot" size={12} className="mt-1 flex-shrink-0" />Мониторинг деформаций</li>
            </ul>
          </Card>

          <Card className="p-5">
            <h4 className="font-semibold mb-3 text-sm flex items-center gap-2">
              <Icon name="Briefcase" size={18} className="text-primary" />
              Виды работ
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li className="flex gap-2"><Icon name="Dot" size={12} className="mt-1 flex-shrink-0" />Топографическая съёмка</li>
              <li className="flex gap-2"><Icon name="Dot" size={12} className="mt-1 flex-shrink-0" />Кадастровая съёмка и межевание</li>
              <li className="flex gap-2"><Icon name="Dot" size={12} className="mt-1 flex-shrink-0" />Инженерно-геодезические изыскания</li>
              <li className="flex gap-2"><Icon name="Dot" size={12} className="mt-1 flex-shrink-0" />Контроль осадок и деформаций</li>
              <li className="flex gap-2"><Icon name="Dot" size={12} className="mt-1 flex-shrink-0" />Геодезическое обеспечение сетей</li>
            </ul>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 border-l-4 border-l-green-500">
            <h4 className="font-semibold mb-2 text-sm text-green-700">Плюсы профессии</h4>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>• Востребованность на рынке</li>
              <li>• Интересные проекты</li>
              <li>• Техническое развитие</li>
              <li>• Возможность командировок</li>
            </ul>
          </Card>

          <Card className="p-5 border-l-4 border-l-orange-500">
            <h4 className="font-semibold mb-2 text-sm text-orange-700">Минусы и риски</h4>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li>• Работа в разных погодных условиях</li>
              <li>• Высокая ответственность</li>
              <li>• Постоянное обучение</li>
              <li>• Физическая нагрузка</li>
            </ul>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Знания и навыки',
    subtitle: 'Необходимые инструменты',
    content: (
      <div className="space-y-5">
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-5 text-center">
            <Icon name="Brain" size={36} className="text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2 text-sm">Знания</h4>
            <ul className="text-xs text-muted-foreground space-y-1 text-left">
              <li>• Геодезия и картография</li>
              <li>• Математика и геометрия</li>
              <li>• Физическая география</li>
              <li>• Спутниковая навигация</li>
              <li>• ГИС и САПР системы</li>
            </ul>
          </Card>

          <Card className="p-5 text-center">
            <Icon name="Wrench" size={36} className="text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2 text-sm">Навыки</h4>
            <ul className="text-xs text-muted-foreground space-y-1 text-left">
              <li>• Работа с тахеометром</li>
              <li>• GNSS-приёмники</li>
              <li>• Настройка оборудования</li>
              <li>• Цифровые модели (ЦМР)</li>
              <li>• Обработка данных LiDAR</li>
            </ul>
          </Card>

          <Card className="p-5 text-center">
            <Icon name="Laptop" size={36} className="text-primary mx-auto mb-3" />
            <h4 className="font-semibold mb-2 text-sm">ПО и приборы</h4>
            <ul className="text-xs text-muted-foreground space-y-1 text-left">
              <li>• AutoCAD, Civil 3D</li>
              <li>• QGIS, ArcGIS</li>
              <li>• Trimble, Leica Geo Office</li>
              <li>• Дроны и Pix4D</li>
              <li>• Лазерные сканеры</li>
            </ul>
          </Card>
        </div>

        <Card className="p-5 bg-primary/5">
          <h4 className="font-semibold mb-3 text-sm">Современные технологии</h4>
          <div className="grid md:grid-cols-4 gap-3">
            {[
              { icon: 'Satellite', label: 'GNSS/GPS' },
              { icon: 'Scan', label: 'Лазерное сканирование' },
              { icon: 'Plane', label: 'БПЛА и аэрофотосъёмка' },
              { icon: 'Database', label: 'BIM и ГИС' },
            ].map((tech, i) => (
              <div key={i} className="flex items-center gap-2 p-2 bg-background rounded">
                <Icon name={tech.icon} size={20} className="text-primary flex-shrink-0" />
                <span className="text-xs font-medium">{tech.label}</span>
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
    subtitle: 'Пути профессионального роста',
    content: (
      <div className="space-y-5">
        <div className="space-y-3">
          <h3 className="font-semibold flex items-center gap-2 text-base">
            <Icon name="GraduationCap" size={22} className="text-primary" />
            Образовательные маршруты
          </h3>
          
          <Card className="p-5 border-l-4 border-l-blue-500">
            <h4 className="font-semibold mb-2 text-sm">Среднее профессиональное</h4>
            <p className="text-xs text-muted-foreground mb-2">
              Колледж/техникум (2-3 года) — специальность «Геодезия» или «Землеустройство»
            </p>
            <div className="flex items-center gap-2 text-xs">
              <Icon name="Clock" size={14} className="text-blue-600" />
              <span>Быстрый путь на рынок труда</span>
            </div>
          </Card>

          <Card className="p-5 border-l-4 border-l-purple-500">
            <h4 className="font-semibold mb-2 text-sm">Высшее образование</h4>
            <p className="text-xs text-muted-foreground mb-2">
              Университет (4+2 года) — «Геодезия и дистанционное зондирование», «ГИС»
            </p>
            <div className="flex items-center gap-2 text-xs">
              <Icon name="TrendingUp" size={14} className="text-purple-600" />
              <span>Карьерный рост и научная деятельность</span>
            </div>
          </Card>
        </div>

        <Card className="p-5 bg-gradient-to-r from-primary/10 to-blue-500/10">
          <h3 className="font-semibold mb-3 text-sm">Карьерный путь</h3>
          <div className="space-y-2">
            {[
              '1. Техническое образование → Младший техник-геодезист',
              '2. Высшее образование → Инженер-геодезист',
              '3. Стажировка → Геодезист участка',
              '4. Опыт → Ведущий геодезист, руководитель группы',
              '5. Специализация → Кадастр, мониторинг, BIM/ГИС-менеджмент',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-2 text-xs">
                <Icon name="ArrowRight" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                <span>{step}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Рынок труда',
    subtitle: 'Оплата и перспективы',
    content: (
      <div className="space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm">
              <Icon name="Building" size={18} className="text-primary" />
              Работодатели
            </h4>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>• Строительные компании</li>
              <li>• Проектные институты</li>
              <li>• Энергетические компании</li>
              <li>• Кадастровые палаты</li>
              <li>• Геодезические фирмы</li>
              <li>• Транспортные организации</li>
            </ul>
          </Card>

          <Card className="p-5 bg-gradient-to-br from-green-500/10 to-blue-500/10">
            <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm">
              <Icon name="DollarSign" size={18} className="text-green-600" />
              Зарплаты (2025, РФ)
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2 bg-background rounded">
                <span>Младший специалист</span>
                <span className="font-semibold">40-70 тыс. ₽</span>
              </div>
              <div className="flex justify-between p-2 bg-background rounded">
                <span>Инженер-геодезист</span>
                <span className="font-semibold">60-120 тыс. ₽</span>
              </div>
              <div className="flex justify-between p-2 bg-background rounded">
                <span>Ведущий специалист</span>
                <span className="font-semibold">100-200+ тыс. ₽</span>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-5 bg-primary/5">
          <h4 className="font-semibold mb-3 text-sm">Факторы, влияющие на доход</h4>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { icon: 'MapPin', text: 'Регион работы' },
              { icon: 'Award', text: 'Квалификация и опыт' },
              { icon: 'CheckCircle2', text: 'Сертификаты' },
              { icon: 'Plane', text: 'Готовность к командировкам' },
            ].map((factor, i) => (
              <div key={i} className="flex items-center gap-2 text-xs">
                <Icon name={factor.icon} size={16} className="text-primary" />
                <span>{factor.text}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5 border-l-4 border-l-blue-500">
          <h4 className="font-semibold mb-2 text-sm text-blue-700">Перспективы и технологии</h4>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            <li className="flex gap-2"><Icon name="Check" size={14} className="text-blue-600 mt-0.5" />Рост спроса на специалистов с БПЛА и LiDAR</li>
            <li className="flex gap-2"><Icon name="Check" size={14} className="text-blue-600 mt-0.5" />Автоматизация рутины, рост аналитики</li>
            <li className="flex gap-2"><Icon name="Check" size={14} className="text-blue-600 mt-0.5" />Возможность международных проектов</li>
          </ul>
        </Card>
      </div>
    ),
  },
  {
    id: 7,
    title: 'Личный план подготовки',
    subtitle: 'Самооценка и цели',
    content: (
      <div className="space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5 border-l-4 border-l-green-500">
            <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
              <Icon name="ThumbsUp" size={16} className="text-green-600" />
              Сильные стороны
            </h4>
            <ul className="space-y-1 text-xs">
              <li>• Аккуратность и внимательность</li>
              <li>• Склонность к точным наукам</li>
              <li>• Любовь к работе на воздухе</li>
              <li>• Умение работать в команде</li>
            </ul>
          </Card>

          <Card className="p-5 border-l-4 border-l-orange-500">
            <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
              <Icon name="Target" size={16} className="text-orange-600" />
              Что улучшить
            </h4>
            <ul className="space-y-1 text-xs">
              <li>• Повысить уровень математики</li>
              <li>• Овладеть САПР</li>
              <li>• Основы программирования</li>
              <li>• Навыки фотограмметрии</li>
            </ul>
          </Card>
        </div>

        <Card className="p-5 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
          <h3 className="font-semibold mb-3 text-base">Дорожная карта</h3>
          <div className="space-y-3">
            <div className="p-3 bg-background rounded-lg">
              <h4 className="font-semibold text-xs mb-1.5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">1</span>
                Краткосрочные (1-2 года)
              </h4>
              <ul className="text-xs text-muted-foreground space-y-1 ml-8">
                <li>• Подготовка по математике и физике</li>
                <li>• Вводный курс по геодезии</li>
                <li>• Освоение AutoCAD и QGIS</li>
              </ul>
            </div>

            <div className="p-3 bg-background rounded-lg">
              <h4 className="font-semibold text-xs mb-1.5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs">2</span>
                Среднесрочные (3-5 лет)
              </h4>
              <ul className="text-xs text-muted-foreground space-y-1 ml-8">
                <li>• Поступление в колледж/университет</li>
                <li>• Первые полевые практики</li>
                <li>• Работа с GNSS и тахеометром</li>
              </ul>
            </div>

            <div className="p-3 bg-background rounded-lg">
              <h4 className="font-semibold text-xs mb-1.5 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">3</span>
                Долгосрочные (5-10 лет)
              </h4>
              <ul className="text-xs text-muted-foreground space-y-1 ml-8">
                <li>• Квалифицированный инженер-геодезист</li>
                <li>• Освоение фотограмметрии и LiDAR</li>
                <li>• Портфолио проектов</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    ),
  },
  {
    id: 8,
    title: 'Учебный проект',
    subtitle: 'Практическая часть',
    content: (
      <div className="space-y-5">
        <Card className="p-5 bg-gradient-to-br from-primary/10 to-blue-500/10">
          <h3 className="font-semibold mb-3 flex items-center gap-2 text-base">
            <Icon name="Lightbulb" size={20} className="text-primary" />
            Топографическая съёмка территории школы
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            Выполнить полевую съёмку участка площадью 0.1–0.5 га и построить топоплан в масштабе 1:500
          </p>
          <div className="flex flex-wrap gap-2">
            {['Измерения', 'Расчёты', 'ЦМР', 'План 1:500', 'Отчёт'].map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-5">
            <h4 className="font-semibold mb-3 text-sm flex items-center gap-2">
              <Icon name="ListChecks" size={18} className="text-primary" />
              Этапы работы
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex gap-2">
                <Icon name="Circle" size={12} className="text-primary mt-1 flex-shrink-0" />
                <span><strong>Подготовка:</strong> Техника безопасности, паспорт работ</span>
              </div>
              <div className="flex gap-2">
                <Icon name="Circle" size={12} className="text-primary mt-1 flex-shrink-0" />
                <span><strong>Полевые работы:</strong> Съёмка реперов, измерения, нивелирование</span>
              </div>
              <div className="flex gap-2">
                <Icon name="Circle" size={12} className="text-primary mt-1 flex-shrink-0" />
                <span><strong>Обработка:</strong> Перенос в ПО, корректуры, построение планов</span>
              </div>
              <div className="flex gap-2">
                <Icon name="Circle" size={12} className="text-primary mt-1 flex-shrink-0" />
                <span><strong>Оформление:</strong> Отчёт, планы, таблицы, выводы</span>
              </div>
            </div>
          </Card>

          <Card className="p-5">
            <h4 className="font-semibold mb-3 text-sm flex items-center gap-2">
              <Icon name="Calendar" size={18} className="text-primary" />
              График на учебный год
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-2 bg-blue-500/10 rounded"><strong>Месяц 1-2:</strong> Теоретическая подготовка</div>
              <div className="p-2 bg-green-500/10 rounded"><strong>Месяц 3-4:</strong> Полевые выезды</div>
              <div className="p-2 bg-purple-500/10 rounded"><strong>Месяц 5:</strong> Обработка данных</div>
              <div className="p-2 bg-orange-500/10 rounded"><strong>Месяц 6:</strong> Защита проекта</div>
            </div>
          </Card>
        </div>

        <Card className="p-5 bg-yellow-500/10 border-yellow-500/20">
          <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
            <Icon name="AlertTriangle" size={16} className="text-yellow-700" />
            Риски и меры предосторожности
          </h4>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>• Неблагоприятная погода → Запасные даты</li>
            <li>• Ошибки в измерениях → Двойная проверка</li>
            <li>• Проблемы с оборудованием → Инструкции, диагностика</li>
          </ul>
        </Card>
      </div>
    ),
  },
  {
    id: 9,
    title: 'Заключение',
    subtitle: 'Выводы и рекомендации',
    content: (
      <div className="space-y-6 text-center max-w-3xl mx-auto">
        <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
          <Icon name="Award" size={40} className="text-primary" />
        </div>
        
        <p className="text-base leading-relaxed">
          Профессия геодезиста сочетает практические полевые работы и интеллектуальную обработку данных. 
          Это технологичная и востребованная сфера с ясными карьерными маршрутами и хорошими перспективами.
        </p>

        <div className="grid md:grid-cols-3 gap-4 text-left">
          <Card className="p-5 text-center">
            <Icon name="TrendingUp" size={32} className="text-blue-600 mx-auto mb-2" />
            <h4 className="font-semibold mb-1 text-sm">Актуальность</h4>
            <p className="text-xs text-muted-foreground">Высокий спрос на специалистов</p>
          </Card>
          
          <Card className="p-5 text-center">
            <Icon name="Rocket" size={32} className="text-purple-600 mx-auto mb-2" />
            <h4 className="font-semibold mb-1 text-sm">Технологии</h4>
            <p className="text-xs text-muted-foreground">GNSS, БПЛА, LiDAR, BIM</p>
          </Card>
          
          <Card className="p-5 text-center">
            <Icon name="Heart" size={32} className="text-red-600 mx-auto mb-2" />
            <h4 className="font-semibold mb-1 text-sm">Призвание</h4>
            <p className="text-xs text-muted-foreground">Точные науки и практика</p>
          </Card>
        </div>

        <Card className="p-5 bg-primary/5 border-primary/20">
          <h4 className="font-semibold mb-3 text-sm">Рекомендации для начинающего</h4>
          <ul className="text-xs text-left space-y-2">
            <li className="flex gap-2">
              <Icon name="Check" size={14} className="text-primary mt-0.5 flex-shrink-0" />
              <span>Сосредоточиться на практике: полевые работы и стажировки</span>
            </li>
            <li className="flex gap-2">
              <Icon name="Check" size={14} className="text-primary mt-0.5 flex-shrink-0" />
              <span>Осваивать современные технологии: GNSS, дроны, LiDAR, GIS</span>
            </li>
            <li className="flex gap-2">
              <Icon name="Check" size={14} className="text-primary mt-0.5 flex-shrink-0" />
              <span>Развивать навыки ПО и программирования (Python для обработки данных)</span>
            </li>
          </ul>
        </Card>

        <Card className="p-5 bg-primary text-primary-foreground">
          <p className="text-base font-semibold">
            Мой выбор профессии геодезиста обоснован и подкреплён чётким планом подготовки.
          </p>
        </Card>

        <div className="pt-2">
          <p className="text-muted-foreground text-sm">
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
