import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-serif mb-4">About BATTI©</h1>
            <p className="text-muted-foreground">
              Empowering confidence through innovative shapewear.
            </p>
          </div>

          <div className="space-y-8 text-muted-foreground">
            <p>
              BATTI© was founded with a simple mission: to create shapewear that makes every woman feel confident, comfortable, and beautiful in her own skin. We believe that true beauty comes from within, and our products are designed to enhance what you already have.
            </p>
            
            <p>
              Our team of designers and engineers work tirelessly to develop innovative fabrics and construction techniques that provide seamless shaping without sacrificing comfort. Every piece in our collection is crafted with attention to detail and a commitment to quality.
            </p>

            <p>
              We're proud to be a brand that celebrates all body types and sizes. Our inclusive sizing and thoughtful designs ensure that every woman can find her perfect fit.
            </p>

            <div className="border-t border-border pt-8">
              <h2 className="text-xl font-medium text-foreground mb-4">Our Values</h2>
              <ul className="space-y-3">
                <li><strong className="text-foreground">Quality:</strong> Premium materials and expert craftsmanship in every piece.</li>
                <li><strong className="text-foreground">Inclusivity:</strong> Shapewear for every body, every size, every woman.</li>
                <li><strong className="text-foreground">Comfort:</strong> All-day wearability without compromise.</li>
                <li><strong className="text-foreground">Confidence:</strong> Empowering you to feel your best, always.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;