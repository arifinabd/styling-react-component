import logo from '../assets/logo.png';


export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-16">
      <img src={logo} alt="A canvas" className='object-contain mb-8 w-44 h-44' />
      <h1 className='font-semibold text-4xl tracking-widest text-center uppercase text-amber-800'>ReactArt</h1>
      <p >A community of artists and art-lovers.</p>
    </header>
  );
}
