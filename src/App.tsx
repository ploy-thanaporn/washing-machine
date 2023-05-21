import "./App.css";
import WashingMachineComponent from "./components/WasingMachine";

function App() {
  return (
    <div className="flex flex-col justify-center text-center my-5">
      <div className="font-bold text-2xl">Washing Machine</div>

      <div className="flex justify-center mt-10">
        <WashingMachineComponent />
      </div>
      {/* <CountdownTime /> */}
    </div>
  );
}

export default App;
