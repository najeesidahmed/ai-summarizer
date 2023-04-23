import { logo, breefLogo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex
    justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
          <img src={breefLogo} alt="sumz_logo" className="w-28 object-contain" />

          <button
          type="button"
          onClick={() => window.open('https://github.com/najeesidahmed/ai-summarizer')}
          className="black_btn"
          >
            Github
          </button>
      </nav>

      <h1 className="head_text">
      Get the Summary <br className="max-md:hidden" />
        <span className="blue_gradient">Skip the Read</span>
      </h1>
      <h2 className="desc">Empower Your Knowledge Journey with <span className="font-bold text-blue-700">Breef</span>, an open-sourced AI Article Summariser at Your Fingertips</h2>
    </header>
  )
}

export default Hero