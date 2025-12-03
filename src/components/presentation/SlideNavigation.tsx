import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onGoToSlide: (index: number) => void;
}

export default function SlideNavigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoToSlide,
}: SlideNavigationProps) {
  return (
    <div className="container mx-auto px-4 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          <Button
            onClick={onPrevious}
            disabled={currentSlide === 0}
            variant="outline"
            size="lg"
            className="flex items-center gap-2"
          >
            <ChevronLeft size={20} />
            <span className="hidden sm:inline">Назад</span>
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => onGoToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-muted hover:bg-muted-foreground/50'
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>

          <Button
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            size="lg"
            className="flex items-center gap-2"
          >
            <span className="hidden sm:inline">Далее</span>
            <ChevronRight size={20} />
          </Button>
        </div>

        <div className="text-center mt-4 text-sm text-muted-foreground">
          Слайд {currentSlide + 1} из {totalSlides}
        </div>
      </div>
    </div>
  );
}
