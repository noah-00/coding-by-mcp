import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#043873] flex flex-col md:flex-row items-center px-8 py-[100px] overflow-hidden">
      {/* Decorative background element (absolute, low opacity) */}
      <div className="absolute left-[-274.5px] top-[152.24px] pointer-events-none select-none z-0 hidden md:block">
        <div className="w-[1988.85px] h-[433.11px] relative">
						<Image
							src="/images/hero-section/Element.png"
							alt="Logo"
							fill
							className="object-contain"
						/>
					</div>
      </div>

      {/* Left: Heading and CTA */}
      <div className="relative z-10 flex-1 flex flex-col gap-[60px] min-w-[691px]">
        <div className="flex flex-col gap-6">
          <h1 className="font-inter font-bold text-[64px] leading-[1.21] tracking-[-0.02em] text-white">
            Get More Done with whitepace
          </h1>
          <p className="font-inter text-[18px] leading-[1.67] tracking-[-0.02em] text-white">
            Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
          </p>
        </div>
        <Button
          className="bg-[#4F9CF9] text-white font-medium text-[18px] leading-[1.28] p-5 rounded-[8px] h-[60px] flex items-center gap-[10px] hover:bg-[#3586e6] w-fit shadow-md"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Try Whitepace free
          <Image src="/icons/arrow-right.svg" alt="Arrow Right" width={10} height={10} />
        </Button>
      </div>

      {/* Right: Main image */}
        <div className="w-[685px] h-[456.39px] relative">
          <Image
            src="/images/hero-section/Image-container.png"
            alt="Logo"
            fill
            className="object-contain"
						/>
					</div>
    </section>
  );
} 