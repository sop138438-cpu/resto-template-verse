import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Phone, Mail, Star } from "lucide-react";
import heroImage from "@/assets/hero-dining.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";

const Index = () => {
  const menuItems = [
    {
      name: "Seared Scallops",
      description: "Pan-seared scallops with cauliflower purée and truffle oil",
      price: "$42",
      image: dish1,
    },
    {
      name: "Prime Ribeye",
      description: "28-day aged ribeye with seasonal vegetables and red wine reduction",
      price: "$68",
      image: dish2,
    },
    {
      name: "Chocolate Soufflé",
      description: "Dark chocolate soufflé with vanilla bean ice cream",
      price: "$18",
      image: dish3,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.7)",
          }}
        />
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
            Experience Culinary
            <br />
            <span className="text-gradient">Excellence</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
            Where every dish tells a story of passion, tradition, and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Book a Table
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              View Menu
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Our Story</h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Since 2010, Savoria has been a cornerstone of culinary excellence, blending traditional
              techniques with modern innovation. Our award-winning chefs craft each dish with
              precision and passion, using only the finest seasonal ingredients sourced from local
              farmers and artisans.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe dining is more than just a meal—it's an experience that engages all your
              senses. From our elegant ambiance to our impeccable service, every detail is
              thoughtfully curated to create unforgettable moments.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Signature Dishes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our chef's carefully curated selection of exquisite flavors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {menuItems.map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-heading font-semibold">{item.name}</h3>
                    <span className="text-xl font-bold text-primary">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" className="text-lg px-10">
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Gallery</h2>
            <p className="text-lg text-muted-foreground">A glimpse into our culinary artistry</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[dish1, dish2, dish3].map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <section id="contact" className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">Visit Us</h2>
              <p className="text-background/80 text-lg mb-8">
                Experience exceptional dining in an atmosphere of refined elegance. Reservations
                recommended.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-background/80">123 Gourmet Avenue, Culinary District</p>
                    <p className="text-background/80">New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Hours</p>
                    <p className="text-background/80">Tuesday - Saturday: 5:00 PM - 11:00 PM</p>
                    <p className="text-background/80">Sunday: 4:00 PM - 10:00 PM</p>
                    <p className="text-background/80">Monday: Closed</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-background/80">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-background/80">reservations@savoria.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-3xl font-heading font-bold mb-6">Reserve Your Table</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md bg-background/20 border border-background/30 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-md bg-background/20 border border-background/30 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-md bg-background/20 border border-background/30 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-md bg-background/20 border border-background/30 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="time"
                    className="w-full px-4 py-3 rounded-md bg-background/20 border border-background/30 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <select className="w-full px-4 py-3 rounded-md bg-background/20 border border-background/30 text-background focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Number of Guests</option>
                  <option>1-2 Guests</option>
                  <option>3-4 Guests</option>
                  <option>5-6 Guests</option>
                  <option>7+ Guests</option>
                </select>
                <Button variant="hero" size="lg" className="w-full text-lg">
                  Confirm Reservation
                </Button>
              </form>
            </div>
          </div>

          <div className="text-center mt-16 pt-8 border-t border-background/20">
            <p className="text-background/60">
              © 2024 Savoria. All rights reserved. | Crafted with passion
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
