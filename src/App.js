import '../src/stylesheets/css/style.css';
import AppHeader from './modules/LandingPage/Components/AppHeader/Header';
import AppFooter from './modules/LandingPage/Components/AppFooter/AppFooter';
import WelcomeSection from './modules/LandingPage/Components/WelcomeSection/WelcomeSection';
import ServiceRegisterSection from './modules/LandingPage/Components/ServiceRegisterSection/ServiceRegisterSection';
import ButtonsSection from './modules/LandingPage/Components/ButtonsSection/ButtonsSection';
import SuccessStoriesSection from './modules/LandingPage/Components/SuccessStoriesSection/SuccessStoriesSection';
import ContactUsSection from './modules/LandingPage/Components/ContactUsSection/ContactUsSection';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <WelcomeSection />
      <ServiceRegisterSection />
      <ButtonsSection/>
      <SuccessStoriesSection/>
      <ContactUsSection/>
      <AppFooter />
      
    </div>
  );
}

export default App;
