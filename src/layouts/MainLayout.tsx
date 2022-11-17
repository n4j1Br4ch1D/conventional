import Navbar from '../sections/Navbar';
import Sponsor from '../sections/Sponsor';
import Footer from '../sections/Footer';
import { AppProvider } from '../contexts/AppContext';

function MainLayout({ children }: any) {
  return (
    <>
      <AppProvider>
        <Navbar />
        <main>{children}</main>
        <Sponsor />
        <Footer />
      </AppProvider>
    </>
  );
}

export default MainLayout;
