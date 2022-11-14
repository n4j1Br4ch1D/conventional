import Navbar from '../sections/Navbar';
import Sponsor from '../sections/Sponsor';
import Footer from '../sections/Footer';

function MainLayout({ children }: any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Sponsor />
      <Footer />
    </>
  );
}

export default MainLayout;
