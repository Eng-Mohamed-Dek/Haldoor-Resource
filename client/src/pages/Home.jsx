import HeroSection from "../sections/hero-section";
import OurTestimonialsSection from "../sections/our-testimonials-section";
import CallToActionSection from "../sections/call-to-action-section";
import TemplatesSection from "../components/TemplatesSection";
import CEOMessage from "../sections/CEOMessage";

const Home = () => {
    return (
        <>
            <main className='px-4'>
                <HeroSection />
                <TemplatesSection />
                <CEOMessage />
                <OurTestimonialsSection />
                <CallToActionSection />
            </main>
        </>
    )
}

export default Home;