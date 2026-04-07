import SectionTitle from '../components/section-title';
import { StarIcon } from 'lucide-react';

export default function OurTestimonialSection() {
    const data = [
        {
            review: "Shakhsi ahaan, ma aan baahni inaan ku raadiyo bogag badan si aan u helo templates bilaash ah, mana rabin in aan ku galo bogag kale. Haldoor Resources waxay ii keentay dhammaan resources-ka aan u baahnaa hal meel!",
            name: "Eng Mohamed Dek",
            date: "14 March 2026",
            rating: 5,
            image: "/assets/avator.png",
        },
        {
            review: "Waxaan mar walba dhib kala kulmay helidda resources bilaash ah oo aan login lahayn. Haldoor Resources ayaa fududeysay, dhammaan templates-ka iyo resources-ka muhiimka ah waxaan ku heli karaa hal meel!",
            name: "Nasro Mohamed",
            date: "2 June 2025",
            rating: 4,
            image: "/assets/placeholder.png",
        },
        {
            review: "Bogag badan ayaan isku dayay laakiin mar walba waxay i waydiinayeen in aan galo. Haldoor Resources waxay iga badbaadisay waqtiga, waxaana helay resources kala duwan oo bilaash ah aniga oo aan login samaynin!",
            name: "Sudays Ibraahim",
            date: "19 Sept 2025",
            rating: 3,
            image: "/assets/placeholder.png",
        },
    ];

    return (
        <section className='flex flex-col items-center justify-center'>
            <SectionTitle title='Our Testimonials' description='Hear from our satisfied user about the benefits of using Haldoor Digital Resources. We love hearing from our customers.' />

            <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {data.map((item, index) => (
                    <div key={index} className='w-full max-w-88 space-y-4 rounded-md border border-gray-200 bg-white p-3 text-gray-500 transition-all duration-300 hover:-translate-y-1'>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-1'>
                                {Array(item.rating)
                                    .fill('')
                                    .map((_, index) => <StarIcon key={index} className='size-4 fill-[#43BA89] orange' />)}
                            </div>
                            <p className='blue'>{item.date}</p>
                        </div>
                        <p>“{item.review}”</p>
                        <div className='flex items-center gap-2 pt-3'>
                            <img className='h-8 w-8 rounded-full' src={item.image} alt={item.name} />
                            <p className='font-medium text-gray-800'>{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
