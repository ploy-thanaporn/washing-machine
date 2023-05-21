import { useState } from "react";
import { GiWashingMachine } from "react-icons/gi";

import CoinInsertion from "./CoinInsertion";

interface WashingMachine {
  id: number;
  model: string;
  availability: boolean;
}

const WashingMachineComponent = () => {
  const defaultstate = [
    { id: 1, model: "Model A", availability: true },
    { id: 2, model: "Model B", availability: false },
    { id: 3, model: "Model C", availability: false },
  ];

  const [washingMachines, setWashingMachines] =
    useState<WashingMachine[]>(defaultstate);

  const [activeMachineId, setActiveMachineId] = useState<number>(0);

  const handleStart = (id: number) => {
    setActiveMachineId(id);
  };

  const handleCoinInserted = (machineId: number) => {
    setWashingMachines((prevMachines) =>
      prevMachines.map((machine) =>
        machine.id === machineId ? { ...machine, availability: true } : machine
      )
    );
  };

  return (
    <div className="px-10">
      <div className="flex text-center">
        {washingMachines.map((machine) => (
          <div key={machine.id} className="mx-2">
            <div>
              {machine.model}
              <GiWashingMachine
                className={
                  machine.availability === false
                    ? "w-40 h-40 text-gray-200"
                    : "w-40 h-40 text-gray-500"
                }
              />
              <div className="flex justify-center">
                <button
                  className={`px-4 lg:h-8 rounded-md text-white ${
                    machine.availability === false
                      ? "bg-blue-500 opacity-50"
                      : "bg-blue-500"
                  }`}
                  disabled={machine.availability === false}
                  onClick={() => handleStart(machine.id)}
                >
                  Start
                </button>
              </div>
              <CoinInsertion
                onCoinInserted={() => handleCoinInserted(machine.id)}
                isCoinInserted={machine.availability}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WashingMachineComponent;
