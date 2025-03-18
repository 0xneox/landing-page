
import { useEffect, useRef, useState } from 'react';
import { SectionContainer } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Wallet, Cpu, Coins, Rocket } from 'lucide-react';

type StepProps = {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: string;
};

const Step = ({ number, title, description, icon, delay }: StepProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`flex flex-col items-center p-6 text-center reveal ${delay}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-neuro-500/20 to-blue-500/10 mb-6 transition-all duration-500 ${isHovered ? 'shadow-neon scale-110' : ''}`}>
          <div className={`transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}>
            {icon}
          </div>
        </div>
        <div className={`absolute top-0 right-0 flex items-center justify-center w-6 h-6 bg-gradient-to-r from-neuro-500 to-blue-500 rounded-full text-white text-xs font-medium transition-all duration-500 ${isHovered ? 'animate-bounce-sm' : ''}`}>
          {number}
        </div>
        
        {/* Glow effect on hover */}
        {isHovered && (
          <div className="absolute inset-0 rounded-full bg-neuro-500/30 filter blur-md -z-10 animate-pulse-slow"></div>
        )}
      </div>
      <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${isHovered ? 'text-neuro-500' : ''}`}>{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

export default function HowItWorks() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    // Initialize the intersection observer
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, { threshold: 0.1 });

    // Observe all elements with the reveal class
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => {
      observerRef.current?.observe(el);
    });
    
    // Animated connecting line
    const lineTimer = setInterval(() => {
      setActiveLine(prev => (prev < 2 ? prev + 1 : 0));
    }, 3000);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearInterval(lineTimer);
    };
  }, []);

  const steps = [
    {
      number: 1,
      title: "Connect your Solana wallet",
      description: "Link Phantom or any Solana-compatible wallet in seconds.",
      icon: <Wallet className="h-6 w-6 text-neuro-500" />,
      delay: "reveal-delay-1"
    },
    {
      number: 2,
      title: "Rent GPUs or deploy AI models",
      description: "Choose your compute power or generate content instantly.",
      icon: <Cpu className="h-6 w-6 text-neuro-500" />,
      delay: "reveal-delay-2"
    },
    {
      number: 3,
      title: "Join the Swarm Network to earn NLOV",
      description: "Contribute compute, earn rewards – it's that easy.",
      icon: <Coins className="h-6 w-6 text-neuro-500" />,
      delay: "reveal-delay-3"
    }
  ];

  return (
    <SectionContainer className="py-24 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neuro-500/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neuro-500/20 to-transparent"></div>
        
        {/* Animated particles */}
        <div className="absolute top-20 left-1/4 w-3 h-3 bg-neuro-400/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-1/4 w-2 h-2 bg-blue-400/20 rounded-full animate-float animation-delay-700"></div>
        <div className="absolute bottom-20 left-1/3 w-4 h-4 bg-neuro-500/20 rounded-full animate-float animation-delay-1500"></div>
      </div>

      <div className="text-center mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-neuro-500/10 text-neuro-500 text-sm font-medium mb-4 reveal reveal-delay-1">
          <span className="mr-1">🚀</span>
          <span>Getting Started</span>
        </div>
        
        <h2 className="text-3xl font-bold mb-4 reveal reveal-delay-1 relative inline-block">
          Begin Your Journey in Three Simple Steps
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-neuro-500 to-blue-500 rounded-full"></div>
        </h2>
        
        <p className="text-muted-foreground max-w-2xl mx-auto reveal reveal-delay-2">
          Joining the Neurolov ecosystem is simple and straightforward. Follow these steps to begin your journey.
        </p>
      </div>

      <div className="relative">
        {/* Connecting line between steps */}
        <div className="absolute top-16 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neuro-500/40 to-transparent hidden md:block">
          {/* Animated dot moving along the line */}
          <div 
            className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-neuro-500 shadow-neon transition-all duration-1000 ease-in-out`}
            style={{ 
              left: `${activeLine * 50}%`,
              transform: `translateX(${activeLine === 0 ? '0' : '-50%'}) translateY(-50%)`
            }}
          ></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              delay={step.delay}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <Button variant="neon" size="lg" className="group relative overflow-hidden reveal reveal-delay-4">
          <span className="absolute inset-0 w-full h-full bg-white/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></span>
          <Rocket className="mr-2 h-5 w-5 transition-all group-hover:rotate-12" />
          <span className="relative">Start Now</span>
        </Button>
      </div>
    </SectionContainer>
  );
}
