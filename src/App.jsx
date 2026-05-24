import { useState } from "react";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");
  const [resultColor, setresultColor] = useState("");
  const [isMsg, setisMsg] = useState("");

  const submitHandler = () => {
    if (height === "" || weight === "" || isNaN(height) || isNaN(weight)) {
      setResult("Please Enter valid numbers");
      setBmi("");
      return;
    }

    let heightInMeter = height / 100;

    let BMI = weight / (heightInMeter * heightInMeter);

    if (BMI < 18.6) {
      setResult(`${BMI.toFixed(1)} underweight 😟`);
      setresultColor("text-yellow-900");
      setisMsg(true);
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      setResult(`${BMI.toFixed(1)} normal weight 😊`);
      setresultColor("text-green-900");
      setisMsg(true);
    } else {
      setResult(`${BMI.toFixed(1)} overweight 😐`);
      setresultColor("text-red-800");
      setisMsg(true);
    }
  };

  return (
    <div
      id="container"
      className="w-full h-screen text-center flex items-center justify-center sm:px-2 px-0"
    >
      <div className="w-full max-w-md flex flex-col gap-2 items-center justify-center bg-white/50 rounded-xl py-4">
        <h1 className="text-3xl font-serif font-bold mb-2">BMI Calculator</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler();
          }}
          className="flex flex-col gap-2 justify-center px-2"
        >
          <div className="flex gap-1">
            <label className="font-bold">
              Height in CM:
            </label>
            <input
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-80 border-pink-400 border bg-white/30 rounded-2xl outline-0 px-2 py-1"
              type="number"
            />
          </div>

          <div className="flex gap-1 ">
            <label className="font-bold">Weight in Kg:</label>
            <input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-80 border-pink-400 border bg-white/30 rounded-2xl outline-0 px-2 py-1"
              type="number"
            />
          </div>

          <span
            className={`${
              isMsg ? "block" : "hidden"
            } bg-pink-300 py-1 capitalize rounded-2xl ${resultColor}`}
          >
            {result}
          </span>

          <button className="bg-pink-600 py-2 px-4 text-white rounded-2xl cursor-pointer">
            Calculate
          </button>

          <div className="bg-pink-300 rounded">
            <h3 className="text-xl text-pink-900">BMI weight guide</h3>
            <p>Under weight = less than 18.6</p>
            <p>normal weight = 18.6 and 24.9</p>
            <p>over weight = greater than 24.9</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
