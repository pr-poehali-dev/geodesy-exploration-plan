import type { Slide } from './slidesData';

interface SlideContentProps {
  slide: Slide;
}

export default function SlideContent({ slide }: SlideContentProps) {
  return (
    <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-12 min-h-[600px] flex flex-col animate-fade-in">
      <div className="mb-8">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
          {slide.title}
        </h1>
        <p className="text-xl text-primary font-semibold">{slide.subtitle}</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="animate-slide-in">{slide.content}</div>
      </div>
    </div>
  );
}
