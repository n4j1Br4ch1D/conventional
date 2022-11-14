import MainLayout from '../layouts/MainLayout';
import Hero from '../sections/Hero';
import Application from '../sections/Application';
import HowItWorks from '../sections/HowItWorks';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Application />
      <HowItWorks />
    </MainLayout>
  );
}

export default App;
