import axios from "axios";
import type { NextPage } from "next";
import { useMemo, useState, type CSSProperties } from "react";

type DivheroButtonsHolderType = {
  joinTheBetaList?: string;
  propWidth?: CSSProperties["width"];
};

const DivheroButtonsHolder: NextPage<DivheroButtonsHolderType> = ({
  joinTheBetaList = "Join",
  propWidth,
}) => {
  const [email, setEmail] = useState<string>("");
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const divheroButtonsHolderStyle: CSSProperties = useMemo(
    () => ({
      width: propWidth,
    }),
    [propWidth]
  );

  const onSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/sheets", { email: email });
    
      if (response.status !== 200) {
        throw new Error(`Error: ${response.status}`);
      }
    
      setEmail("");
      alert("Success - you'll hear from us in a bit!");
    } catch (error) {
      console.error("Sorry, an error occurred: ", error);
    }
    
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 w-full mq380:px-0 px-4 pt-5"
    >
      <div className="flex flex-row items-center rounded-full bg-ghostwhite border border-gray-300 w-full">
        <img src={`/mail.png`} alt="Mail Icon" className="pl-4 h-8 mq450:h-5" />
        <input
          type="email"
          placeholder="Enter your Email Address"
          className="flex-grow text-white text-lg mq450:text-sm font-medium bg-transparent focus:outline-none px-4 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       
        <button
          type="submit"
          className="sm:whitespace-nowrap  cursor-pointer text-lg mq450:text-sm font-medium font-poppins text-black rounded-full px-5 py-3 sm:px-3 sm:py-2 transition-colors duration-300 ease-linear bg-gradient-to-r from-white to-gray-300 hover:bg-gray-200"
        >
          {joinTheBetaList}
        </button>
      </div>
    </form>
  );
};

export default DivheroButtonsHolder;
