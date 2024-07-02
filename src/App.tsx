import './App.css'
import Header from './components/Header';
import Table from './components/Table';
import searchIcon from './assets/Icons/Default.svg';

function App() {

  return (
    <>
      <Header />
      <main>
        <div className="m-8">
          <div className="flex flex-col md:flex-row md:justify-between ">
            <h1 className="text-2xl text-[#1C1C1C] mb-4 md:mb-0">Funcionários</h1>
            <div className="relative mb-6 w-full md:w-auto">
              <div className="absolute inset-y-0 end-3 flex items-center ps-3.5 pointer-events-none">
                <img src={searchIcon} className="w-4 h-4 text-[#9E9E9E] text-[#DFDFDF]" alt="Search Icon" />
              </div>
              <input type="text" id="input-group-1" className="bg-gray-50 border border-gray-300 text-[#DFDFDF] text-sm rounded-lg block w-full  p-2.5  dark:placeholder-gray-400 " placeholder="Pesquisar" />
            </div>
          </div>
          <Table />
        </div>
      </main>
    </>
  )
}

export default App
