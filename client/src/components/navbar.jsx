import { MenuIcon, XIcon, ChevronDown, FileTextIcon, ImageUpIcon, FileVideo, AudioLines, LightbulbIcon, Folder, Palette, Monitor, Video, Code, Camera, Clapperboard } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Templates', href: '/templates' },
        { name: 'About', href: '/about' },
        { name: 'Contacts', href: '/contacts' },
    ];

    return (
        <>
            <nav className='sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-200/70 bg-white/50 px-4 py-3.5 backdrop-blur-md md:px-16 lg:px-24'>
                <a href='https://resources.hirkaab.com'>
                    <img src='/logo.svg' alt='logo' className='h-16 w-auto' width={205} height={48} />
                </a>

                <div className='hidden items-center space-x-6 text-gray-700 md:flex'>
                    {links.map((link) => link.subLinks ? (
                        <div key={link.name} className='group relative' onMouseEnter={() => setOpenDropdown(link.name)} onMouseLeave={() => setOpenDropdown(null)}>
                            <div className='flex cursor-pointer items-center gap-1 hover:text-black'>
                                {link.name}
                                <ChevronDown className={`mt-px size-4 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                            </div>
                        </div>
                    ) : (
                        <a key={link.name} href={link.href} className='transition hover:text-black'>
                            {link.name}
                        </a>
                    ))}
                </div>

                <a href='/templates' className='hidden rounded-full bg-orange px-8 py-2.5 font-medium text-white transition hover:opacity-90 md:inline-block'>
                    Get Started
                </a>

                <button onClick={() => setIsOpen(true)} className='transition active:scale-90 md:hidden'>
                    <MenuIcon className='size-6.5' />
                </button>
            </nav>

            <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-white/20 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {links.map((link) => (
                    <div key={link.name} className='text-center'>
                        {link.subLinks ? (
                            <>
                                <button onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)} className='flex items-center justify-center gap-1 text-gray-800'>
                                    {link.name}
                                    <ChevronDown className={`size-4 transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                                </button>
                                {openDropdown === link.name && (
                                    <div className='mt-2 flex flex-col gap-2 text-left text-sm'>
                                        {link.subLinks.map((sub) => (
                                            <a key={sub.name} href={sub.href} className='block text-gray-600 transition hover:text-black' onClick={() => setIsOpen(false)}>
                                                {sub.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <a href={link.href} className='block text-gray-800 transition hover:text-black' onClick={() => setIsOpen(false)}>
                                {link.name}
                            </a>
                        )}
                    </div>
                ))}

                <a href='/templates' className='rounded-full bg-orange px-8 py-2.5 font-medium text-white transition hover:opacity-90' onClick={() => setIsOpen(false)}>
                    Get Started
                </a>

                <button onClick={() => setIsOpen(false)} className='rounded-md bg-orange p-2 text-white ring-white active:ring-2'>
                    <XIcon />
                </button>
            </div>
        </>
    );
}
