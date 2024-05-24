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
      const response = await axios.post("https://hook.eu2.make.com/yyqsh9c7aqizyan1l725geu122h63sip", { email: email });
    
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
      className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-0 w-full mq380:px-0 px-4 pt-0"
    >
      <div className="flex flex-row items-center rounded-full bg-ghostwhite border border-gray-300 w-full">
        <img src={`/mail.png`} alt="Mail Icon" className="pl-4 h-8 mq450:h-5" />
        <input
          type="email"
          placeholder="Enter your Email Address"
          className="flex-grow text-black text-lg mq450:text-sm font-medium bg-white bg-opacity-20 focus:outline-none focus:border-blue-500 px-4 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          style={{ caretColor: 'black' }}
        />
        <button
          type="submit"
          className="sm:whitespace-nowrap cursor-pointer text-lg mq450:text-sm font-medium font-poppins text-white rounded-lg px-5 py-0 sm:px-3 sm:py-2 transition-colors duration-300 ease-linear [background:linear-gradient(90deg,_#FE920C,_#FF7F50)] hover:from-[#FE920C] hover:to-[#FF7F50]"
        >
          {joinTheBetaList}
        </button>
      </div>
    </form>
  );
};

export default DivheroButtonsHolder;
