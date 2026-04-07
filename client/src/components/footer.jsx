import { DribbbleIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='px-4 pt-30 text-gray-600 md:px-16 lg:px-24'>
            <div className='flex flex-col items-start justify-between gap-8 md:flex-row md:gap-16'>
                <div className='flex-1'>
                    <a href="https://resources.hirkaab.com">
                        <img src='./logo.svg' alt='logo' className='h-20 w-auto' width={500} height={48} />
                    </a>
                    <p className='mt-6 max-w-sm text-sm/6'>Explore a growing library of over 500+ beautifully crafted, customizable templates and production-ready templates.</p>
                    <div className='mt-2 flex items-center gap-3 text-gray-400'>
                        <a href='https://www.youtube.com/@hirkaabacademy23' aria-label='YouTube' title='YouTube'>
                            <YoutubeIcon className='size-5 transition duration-200 hover:-translate-y-0.5' />
                        </a>
                        <a href='https://www.instagram.com/hirkaabacademy/' aria-label='Instagram' title='Instagram'>
                            <InstagramIcon className='size-5 transition duration-200 hover:-translate-y-0.5' />
                        </a>
                        <a href='https://www.tiktok.com/@mohameddekdalmar' aria-label='Tiktok' title='Tiktok'>
                            <FaTiktok className='size-5 transition duration-200 hover:-translate-y-0.5' />
                        </a>
                      
                    </div>
                </div>
                <div className='flex flex-col items-start justify-around gap-8 md:flex-1 md:flex-row md:gap-20'>
                    <div className='flex flex-col'>
                        <h2 className='mb-5 font-semibold text-gray-800'>Company</h2>
                        <a href='/' className='py-1.5 transition duration-200 hover:text-black' aria-label='Home' title='Home'>
                            Home
                        </a>
                        <a href='/about' className='py-1.5 transition duration-200 hover:text-black' aria-label='About' title='About'>
                            About
                        </a>
                        <a href='/contacts' className='py-1.5 transition duration-200 hover:text-black' aria-label='contacts' title='contacts'>
                            contacts
                        </a>
                        <a href='/partners' className='py-1.5 transition duration-200 hover:text-black' aria-label='Partners' title='Partners'>
                            Partners
                        </a>
                    </div>
                    <div>
                        <h2 className='mb-5 font-semibold text-gray-800 text-xl'>Subscribe to our newsletter</h2>
                        <div className='max-w-xs space-y-6 text-sm'>
                            <p>The latest templates and resources, sent to your inbox weekly.</p>
                            <form className='flex items-center justify-center gap-2 rounded-md bg-gray-200 p-1.5'>
                                <input className='w-full max-w-64 rounded px-2 py-2 outline-none' type='email' placeholder='Enter your email' required />
                                <button className='rounded bg-orange px-4 py-2 text-white transition hover:opacity-90'>Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6 flex flex-col items-center justify-between gap-4 border-t border-gray-200 py-4 md:flex-row'>
                <p className='text-center'>
                    Copyright 2025 © <a href='https://resources.hirkaab.com'>Hirkaab Resources.</a> All Right Reserved.
                </p>
                <div className='flex items-center gap-6'>
                    <a href='/privacy-policy' className='transition duration-200 hover:text-black' aria-label='Privacy Policy' title='Privacy Policy'>
                        Privacy Policy
                    </a>
                    <a href='/terms-and-condition' className='transition duration-200 hover:text-black' aria-label='Terms of Service' title='Terms of Service'>
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
}
