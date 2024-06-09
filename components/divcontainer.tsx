import type { NextPage } from "next";

const Divcontainer: NextPage = () => {
  return (
    <footer id="div-container" className="w-full flex flex-col items-center justify-start py-0 px-5 gap-16">
      <div className="bg-ghostwhite flex flex-col md:flex-row items-center justify-center py-0 px-5 w-full">
        <div className="w-full md:w-96 bg-gray-900" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between py-0 px-5 gap-10 w-full">
        <img className="h-16 w-auto" src="/favicon.png" alt="" />
        <div className="flex flex-row items-start justify-start gap-4 md:gap-6">
        <a href="https://www.linkedin.com/company/collabmaps/">
            <img
              className="h-6 w-6"
              src="/6548a60ae9964e23ec87812a-xcomsvg.svg"
              alt="Linkedin page"
            />
          </a>
          <a href="https://www.instagram.com/collabmaps">
            <img
              className="h-6 w-6"
              src="/instagram-seeklogo.svg"
              alt=""
            />
          </a>

          <a href="https://www.facebook.com/profile.php?id=61560425317641">
            <img
              className="h-6 w-6"
              src="/6548a60ae9964e23ec8780c4-facebooksvg.svg"
              alt="Facebook Icon"
            />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Divcontainer;
