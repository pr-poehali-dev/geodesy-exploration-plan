import { useState } from 'react';
import { slides } from '@/components/presentation/slidesData';
import SlideContent from '@/components/presentation/SlideContent';
import SlideNavigation from '@/components/presentation/SlideNavigation';

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
            <SlideContent slide={slides[currentSlide]} />
          </div>
        </div>

        <SlideNavigation
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onPrevious={prevSlide}
          onNext={nextSlide}
          onGoToSlide={goToSlide}
        />
      </div>
    </div>
  );
}
