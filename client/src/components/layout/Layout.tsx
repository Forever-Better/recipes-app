import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-1'>
        <section>{children}</section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
