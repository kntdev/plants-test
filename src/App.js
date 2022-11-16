import {
  AiOutlineMenu,
  AiOutlineBarChart,
  AiFillCheckCircle,
  AiOutlineDownCircle,
  AiOutlineDoubleRight,
  AiOutlineSetting

 } from "react-icons/ai";

 import logo from './assets/planta.png'
 import item from './assets/planta2.png'

function App() {
  return (
   <div className="overflow-x-hidden">
    <header className="flex items-center justify-between px-5 pt-10 pb-5 font-bold text-2xl mb-10 border relative">
      <AiOutlineMenu className="inline-block md:hidden"/>
      <ul className="flex text-lg gap-6 text-green-400 fixed top-0 p-20 left-0 z-50 h-screen bg-green-200 flex-col md:static md:flex md:flex-row">
        <li>Home</li>
        <li>Forum</li>
        <li>Settings</li>
      </ul>
      <h1 className="text-green-600">Logo</h1>
      <AiOutlineBarChart className="inline-block md:hidden"/>
      <ul className="hidden text-lg gap-4 text-green-400 md:flex">
        <li>Account</li>
        <li>Stats</li>
        <li>My inventory</li>
      </ul>
    </header>
    <main className="lg:w-[65%] w-[90%] m-auto overflow-x-visible overflow-y-clip">
      <div className="flex font-bold text-4xl mb-16">
        <h2>My plants</h2>
        <span className="text-sm pl-1">3</span>
      </div>
      <section className="flex gap-5 w-screen mb-8">
        <div className="bg-green-500 min-w-[10.125rem] w-40 h-48 rounded-2xl text-white pl-4 p-2 text-lg relative flex flex-col justify-between">
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
        <div className="bg-green-500 min-w-[10.125rem] w-40 h-48 rounded-2xl text-white pl-4 p-2 text-lg relative flex flex-col justify-between">
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
        <div className="bg-green-500 min-w-[10.125rem] w-40 h-48 rounded-2xl text-white pl-4 p-2 text-lg relative flex flex-col justify-between">
          <AiFillCheckCircle/>
          <img src={logo} 
          className="absolute
          w-40
          h-60
           -top-20
           -right-5"
          alt="Planta" />
          <div className="font-bold">
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
        <div className="bg-gray-200 min-w-[10.125rem] w-40 h-48 rounded-2xl relative flex flex-col-reverse z-20">
          <div className="w-full absolute m-auto -top-12 left-10">
              <div className="relative">
              <img src={item} 
              className="h-48"
              alt="Planta" />
              <div className="w-20 h-20 rounded-full bg-[#3dc1269f] absolute bottom-2 left-0 -z-10"></div>
              </div>
          </div>
          <div className="font-bold p-2 px-4 flex flex-col">
            <div className="text-xl relative">
            <h4 className="leading-[1.5rem]">Gazonia</h4>
            <small className="text-xs font-bold absolute top-0 right-8">$20</small>
            </div>
            <span className="uppercase text-sm tracking-tighter text-green-600">Indoor</span>
          </div>
          </div>
          </section>
      </section>
    </main>
    <footer className="py-10 pb-20">
      <section className="flex justify-around items-center">
          <div className="flex items-baseline gap-4 font-bold">
            <AiOutlineDoubleRight className="text-lg"/>
            <h2 className="text-xl w-64">Adjust the watering of plants</h2>
          </div>
          <div className="text-white bg-green-500 p-8 rounded-full">
            <AiOutlineSetting className="text-3xl"/>
          </div>
      </section>
    </footer>
   </div>
  );
}

export default App;
