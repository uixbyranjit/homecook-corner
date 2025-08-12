import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { heroSlides } from "@/data/products";
import { useNavigate } from "react-router-dom";

export const HeroCarousel = () => {
  const navigate = useNavigate();
  return (
    <section aria-label="Featured products" className="container mx-auto px-4 mt-6">
      <div className="relative">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {heroSlides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="order-2 md:order-1">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-3">{slide.title}</h2>
                    <p className="text-muted-foreground mb-6">{slide.description}</p>
                    <Button variant="hero" size="lg" onClick={() => navigate("/catalog")}>Learn More</Button>
                  </div>
                  <div className="order-1 md:order-2">
                    <img
                      src={slide.image}
                      loading="lazy"
                      alt={`${slide.title} hero image`}
                      className="w-full h-[260px] md:h-[360px] object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
