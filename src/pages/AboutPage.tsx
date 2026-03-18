import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-serif mb-4">About MissBatti</h1>
            <p className="text-muted-foreground">
              Elevating your nail game with premium press-on nails.
            </p>
          </div>

          <div className="space-y-8 text-muted-foreground">
            <p>
              MissBatti was born from a passion for beautiful nails and a belief that luxury nail art should be accessible to everyone. We design premium press-on nails that deliver salon-quality results in minutes — no appointments, no wait times, no damage to your natural nails.
            </p>
            
            <p>
              Each set in our collection is hand-crafted with meticulous attention to detail, using high-quality materials that look and feel like a professional manicure. From elegant French tips to bold statement designs, our nails are made to turn heads.
            </p>

            <p>
              We're proud to offer a wide range of styles for every occasion — whether you're looking for everyday elegance or a show-stopping set for a special event. MissBatti nails are reusable, easy to apply, and designed to last.
            </p>

            <div className="border-t border-border pt-8">
              <h2 className="text-xl font-medium text-foreground mb-4">Our Values</h2>
              <ul className="space-y-3">
                <li><strong className="text-foreground">Quality:</strong> Premium materials and handcrafted artistry in every set.</li>
                <li><strong className="text-foreground">Creativity:</strong> Unique designs inspired by the latest nail art trends.</li>
                <li><strong className="text-foreground">Accessibility:</strong> Salon-quality nails at a fraction of the cost.</li>
                <li><strong className="text-foreground">Confidence:</strong> Empowering you to express yourself through beautiful nails.</li>
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