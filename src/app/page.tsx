import Link from "next/link";
import { Fade } from 'react-awesome-reveal';

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden text-white">
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-center bg-cover bg-no-repeat z-0"
        style={{
          backgroundImage: `url('/images/backgrounds/campus.jpg')`,
        }}
      ></div>

      <div className="fixed inset-0 bg-black opacity-65 z-10"></div>


      <section className="relative z-20 h-full flex flex-col justify-between">

        <div className="hero flex-grow flex items-center justify-center" id="hero">
          <div className="hero-content text-neutral-content text-center">
            <div className="space-y-6 md:space-y-10">

              <div>
                <Fade triggerOnce delay={300}>
                  <h1 className="text-2xl md:text-6xl font-bold mb-2 text-white shadow-2xl">
                    İzmir University of Economics
                  </h1>
                </Fade>
                <Fade triggerOnce delay={500}>
                  <h1 className="mb-5 text-2xl md:text-6xl font-bold text-white shadow-2xl">
                    ECOMUN Conference
                  </h1>
                </Fade>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <Fade triggerOnce delay={800}>
                  <Link
                    href="/prime"
                    className="px-20 py-3 text-lg bg-black bg-opacity-50 font-bold rounded-lg shadow-md shadow-slate-500 text-white transform hover:scale-105 hover:shadow-md hover:shadow-white transition-all duration-300 border flex items-center justify-center"
                  >
                    Prime
                  </Link>
                </Fade>
                <Fade triggerOnce delay={1000}>
                  <Link
                    href="/train"
                    className="px-20 py-3 text-lg bg-black bg-opacity-50 font-bold rounded-lg shadow-md shadow-slate-500 text-white transform hover:scale-105 hover:shadow-md hover:shadow-white transition-all duration-300 border flex items-center justify-center"
                  >
                    Train
                  </Link>
                </Fade>
              </div>

              <Fade triggerOnce delay={1200}>
                <div className="text-xl text-white">#feeltheaegeandifference</div>
              </Fade>
            </div>
          </div>
        </div>

        <div className="flex justify-center pb-5">
          <a
            href="https://enes.run"
            target="_blank"
            rel="noopener noreferrer"
            className="italic"
          >
            Developed by <span className="font-bold">Enes Uysal</span>
          </a>
        </div>
      </section>

    </main>
  );
}
