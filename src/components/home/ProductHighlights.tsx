import { useRef, useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionContainer } from "@/components/ui/Container";
import { Cpu, Code, Network, Bot, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type ProductCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: string;
  index: number;
  url: string;
};

const ProductCard = ({
  title,
  description,
  icon,
  className,
  delay,
  index,
  url,
}: ProductCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-7 rounded-xl transition-all duration-500 relative border border-[#0361DA]/10 reveal",
        delay,
        className
      )}
    >
      <div className="inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-[#0361DA]/20 to-blue-500/10 text-[#0361DA] mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>

      <Button
        variant="ghost"
        className="group p-0 h-auto hover:bg-transparent"
        onClick={() => (window.location.href = url)}
      >
        <span className="flex items-center text-sm font-medium text-[#0361DA]">
          Learn more
          <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </Button>
    </div>
  );
};

export default function ProductHighlights() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const products = [
    {
      title: "GPU Compute",
      description:
        "Rent GPUs for AI training and inference. Affordable, scalable compute power for all.\n\nWhy it matters: Access high-performance GPUs on demand—no need to own expensive hardware. Ideal for researchers, startups, and creators who need flexible, affordable compute resources.",
      icon: <Cpu className="h-6 w-6" />,
      delay: "reveal-delay-1",
      url: "/products/compute",
    },
    {
      title: "AI Models",
      description:
        "Generate images, text, audio, code, and video with ease. Unleash creativity with Neurolov.\n\nWho it’s for: Artists, developers, and businesses looking to integrate state-of-the-art AI into their workflows—no technical barriers, just results.",
      icon: <Code className="h-6 w-6" />,
      delay: "reveal-delay-2",
      url: "/products/ai-models",
    },
    {
      title: "Swarm Network",
      description:
        "Connect devices, solve compute tasks, and earn NLOV. Turn idle hardware into income.\n\nWhy it matters: Anyone can contribute their device’s unused power to the network and earn rewards, making advanced AI accessible and affordable for all.",
      icon: <Network className="h-6 w-6" />,
      delay: "reveal-delay-3",
      url: "/products/swarm",
    },
    {
      title: "AI Agents",
      description:
        "Autonomous AI solutions for decentralized apps. The future of blockchain automation.\n\nWho it’s for: Web3 builders and enterprises seeking autonomous, intelligent agents to power next-gen dApps and automate complex workflows.",
      icon: <Bot className="h-6 w-6" />,
      delay: "reveal-delay-4",
      url: "/products/agents",
    },
  ];

  return (
    <SectionContainer className="py-24 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots-light bg-[size:20px_20px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0361DA]/20 to-transparent"></div>
      </div>

      <div className="text-center mb-16">
        <div>
          <h2 className="text-4xl font-bold mb-6 reveal reveal-delay-1 relative inline-block">
            Discover the Neurolov Advantage
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#0361DA] to-blue-500 rounded-full"></div>
          </h2>
        </div>

        <div>
          <p className="text-muted-foreground max-w-2xl mx-auto reveal reveal-delay-2">
            A comprehensive ecosystem combining AI, decentralized computing, and
            blockchain rewards.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* Connecting lines between cards (desktop only) */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-[#0361DA]/10 hidden lg:block"></div>

        {products.map((product, index) => (
          <ProductCard
            key={index}
            index={index}
            title={product.title}
            description={product.description}
            icon={product.icon}
            delay={product.delay}
            url={product.url}
          />
        ))}
      </div>

      {/* Call to action */}
      <div className="mt-16 text-center reveal reveal-delay-5">
        <a
          href="https://app.neurolov.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-[#0361DA] hover:bg-[#0361DA]/80 text-white group">
            <span className="flex items-center">
              Explore All Products
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
        </a>
      </div>
    </SectionContainer>
  );
}
