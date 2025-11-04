import { Fade } from "react-awesome-reveal";

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

      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-10"></div>

      <section className="relative z-20 h-full flex flex-col justify-between select-none">

        <div className="hero flex-grow flex items-center justify-center" id="hero">
          <div className="hero-content text-center">
            <div className="space-y-6 md:space-y-10">

              <Fade triggerOnce delay={300}>
                <h1 className="text-3xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#fd7706] via-white to-[#0f216d] drop-shadow-[0_0_35px_rgba(255,255,255,0.35)]">
                  We are back, stay tuned!
                </h1>
              </Fade>

              <Fade triggerOnce delay={500}>
                <div className="mb-5 mt-5 text-3xl md:text-5xl font-bold text-white/90 tracking-wide drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                  ~ ECOMUN Team
                </div>
              </Fade>

            </div>
          </div>
        </div>

        <div className="flex justify-center pb-5">
          <a
            href="https://enes.run"
            target="_blank"
            rel="noopener noreferrer"
            className="italic opacity-70 hover:opacity-100 transition duration-200"
          >
            Developed by{" "}
            <span className="font-bold text-white hover:text-[#4fb0ff] transition">
              Enes Uysal
            </span>
          </a>
        </div>

      </section>

    </main>
  );
}
