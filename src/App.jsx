import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [userName, setUserName] = useState("");
  const [userPhone, setPhone] = useState("");

  const handleSubmit = () => {
    console.log(userName);

    console.log(userPhone);

    if (userName === "") {
      toast.error("Enter the username");
    } else if (userPhone === "") {
      toast.error("Enter the phone number");
    } else {
      axios.post("https://getform.io/f/nelJnrbK", {
        Name: userName,
        Phone: userPhone,
      });

      toast.success("successfully send");
      setUserName("");
      setPhone("");
    }
  };
  return (
    <div className="flex  flex-col justify-center items-center mt-5 ">
      <p className="text-2xl font-semibold  text-green-400 mb-3">
        This is practice form
      </p>
      <div className="w-1/3 bg-slate-300 justify-start flex flex-col p-4">
        <form className="flex flex-col">
          <div className="mt-2 flex flex-col gap-1">
            <p className=" uppercase font-semibold">Name: </p>
            <input
              type="text"
              placeholder="Enter name"
              className="p-2"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <p className=" uppercase font-semibold">phone: </p>
            <input
              type="number"
              placeholder="Enter phone number"
              className="p-2"
              onChange={(e) => setPhone(e.target.value)}
              value={userPhone}
            />
          </div>
          <Toaster />
        </form>
        <button
          onClick={handleSubmit}
          className="bg-black font-semibold text-white p-2 mt-6 rounded-md"
        >
          submit
        </button>
      </div>
    </div>
  );
}
