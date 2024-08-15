import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <div className="w-1/3 bg-[#4B2E2E] h-screen">
        <Sidebar title="Your Projects" />
      </div>
      <div className="w-2/3"></div>
    </>
  );
}

export default App;
