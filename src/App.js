import {
  AiOutlineMenu,
  AiOutlineBarChart,
  AiFillCheckCircle,
  AiOutlineDownCircle

 } from "react-icons/ai";

 import logo from './assets/planta.png'
 import item from './assets/planta2.png'

function App() {
  return (
   <div className="overflow-x-hidden">
    <header className="flex items-center justify-between px-5 pt-10 pb-5 font-bold text-2xl mb-10 border">
      <AiOutlineMenu/>
      <h1 className="text-green-600">Logo</h1>
      <AiOutlineBarChart/>
    </header>
    <main className="w-[90%] m-auto overflow-x-visible overflow-y-clip">
      <div className="flex font-bold text-4xl mb-16">
        <h2>My plants</h2>
        <span className="text-sm pl-1">3</span>
      </div>
      <section className="flex gap-5 w-screen mb-8">
        <div className="bg-green-500 w-40 h-48 rounded-2xl text-white pl-4 p-2 text-lg relative flex flex-col justify-between">
          <AiFillCheckCircle/>
          <img src={logo} 
          className="absolute
          w-40
          h-60
           -top-20
           -right-5"
          alt="Planta" />
          <div className="font-bold leading-3">
          <h4 className="tracking-wide">Monstéra</h4>
          <span className="uppercase text-sm tracking-tighter text-green-200">indoor</span>
          </div>
        </div>
        <div className="bg-green-500 w-40 h-48 rounded-2xl text-white pl-4 p-2 text-lg relative flex flex-col justify-between">
          <AiFillCheckCircle/>
          <img src={logo} 
          className="absolute
          w-40
          h-60
           -top-20
           -right-5"
          alt="Planta" />
          <div className="font-bold leading-3">
          <h4 className="tracking-wide">Monstéra</h4>
          <span className="uppercase text-sm tracking-tighter text-green-200">indoor</span>
          </div>
        </div>
        <div className="bg-green-500 w-40 h-48 rounded-2xl text-white pl-4 p-2 text-lg relative flex flex-col justify-between">
          <AiFillCheckCircle/>
          <img src={logo} 
          className="absolute
          w-40
          h-60
           -top-20
           -right-5"
          alt="Planta" />
          <div className="font-bold leading-3">
          <h4 className="tracking-wide">Monstéra</h4>
          <span className="uppercase text-sm tracking-tighter text-green-200">indoor</span>
          </div>
        </div>
      </section>
      <section className="text-4xl font-bold">
        <div className="flex
        justify-between items-center mb-16">
        <h2>Explore</h2>
        <AiOutlineDownCircle className="text-3xl"/>
        </div>
        <section className="flex gap-5 w-screen mb-8">
        <div className="bg-gray-200 w-40 h-48 rounded-2xl relative flex flex-col-reverse z-20">
          <div className="w-full absolute m-auto -top-12 left-10">
              <div className="relative">
              <img src={item} 
              className="h-48"
              alt="Planta" />
              <div className="w-20 h-20 rounded-full bg-[#3dc1269f] absolute bottom-2 left-0 -z-10"></div>
              </div>
          </div>
          <div className="font-bold leading-3">
          <h4 className="m-2 text-xl">Hola</h4>
          </div>
          </div>
          </section>
      </section>
    </main>
   </div>
  );
}

export default App;
