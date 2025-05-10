import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

const navItems = [
  { label: 'Products', href: '#', dropdown: true },
  { label: 'Solutions', href: '#', dropdown: true },
  { label: 'Resources', href: '#', dropdown: true },
  { label: 'Pricing', href: '#', dropdown: true },
];

export default function Header() {
  return (
    <header className="w-full bg-[#043873] px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-[10px] min-w-[191px]">
        <Image
          src="/images/header/image.png"
          alt="Whitepace Logo"
          width={40}
          height={40}
          className="object-contain"
        />
        <span className="text-white font-bold text-[28px] leading-[1.21] font-inter" style={{ fontFamily: 'Inter, sans-serif' }}>whitepace</span>
      </Link>

      <div className='flex items-center'>
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-[32px] min-w-[551.5px]">
          {navItems.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-[10px] text-white font-medium text-[18px] leading-[1.28] focus:outline-none" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    {item.label}
                    <Image src="/icons/chevron-down.svg" alt="Dropdown" width={9} height={4} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Option 1</DropdownMenuItem>
                  <DropdownMenuItem>Option 2</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-[10px] text-white font-medium text-[18px] leading-[1.28]"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-[24px] min-h-[60px]">
          <Button
            variant="secondary"
            className="bg-[#FFE492] text-[#043873] font-medium text-[18px] leading-[1.28] px-[40px] py-4 rounded-[8px] h-[60px] hover:bg-[#ffe492]/90"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Login
          </Button>
          <Button
            className="bg-[#4F9CF9] text-white font-medium text-[18px] leading-[1.28] px-6 py-4 rounded-[8px] h-[60px] flex items-center gap-[10px] hover:bg-[#3586e6]"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Try Whitepace free
            <Image src="/icons/arrow-right.svg" alt="Arrow Right" width={20} height={20} />
          </Button>
        </div>

      </div>
    </header>
  );
} 