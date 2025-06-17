import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import DownloadSection from '@/components/DownloadSection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import StartEarn from '@/components/StartEarn';

export default function HomeView() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <DownloadSection />
            <FaqSection />
            <StartEarn />
            <Footer />
        </>
    );
}
