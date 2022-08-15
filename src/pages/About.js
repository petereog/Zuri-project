// images
import a from "../Talent/section1 - Copy.png";
import b from "../Talent/logo2.svg";
import c from "../Talent/bgsection2.063bd869082548bafa74.png";
import d from "../Talent/section2.png";
import ger from "../Talent/GER.svg";
import usa from "../Talent/ussa.svg";
import nig from "../Talent/NIG.svg";
import ind from "../Talent/ind.svg";
import e from "../Talent/zuritalentpng.png";
const Zuritalent = () => {
  return (
    <div className="text-center w-full">
      {/*navbar*/}
      <div className=" text-center  justify-center items-center">
        <div className="flex fixed  bg-white h-[5em]  w-full top-0 pt-5">
          <div className="mx-auto mt-2">
            <img className="mx-auto w-[10em]" src={b} alt="" />
          </div>
          <div className=" mx-auto hidden  lg:flex mt-2">
            <ul className="font-semibold text-xl ">
              <a className="ml-5 hover hover:border-b-2 border-red-500">Home</a>
              <a className="ml-5 hover hover:border-b-2 border-red-500">
                Impact us
              </a>
              <a className="ml-5 hover hover:border-b-2 border-red-500">
                Why us
              </a>
            </ul>
          </div>
          <div className=" mx-auto ov">
            <button className="w-48 text-white h-10 bg-red-500 rounded-br-xl ">
              Hire talents
            </button>
          </div>
        </div>
      </div>
      {/*navbar*/}
      {/*Hero section*/}
      <div className="flex grid text-center mx-auto sm:grid-cols-1 lg:grid-cols-2 gap-10 mt-32">
        <div className="mx-auto ">
          <h1 className="text-[35px]  font-bold">Vetted and Trusted talents</h1>
          <p className="text-xl  font-semibold justify-end">
            At Zuri Team, we train, test and place talent in various industries.
            We have access to the best pool of skills in the tech Industry.
          </p>
          <div className=" text-center flex mt-10 grid mx-auto w-[50%] gap-5 sm:grid-cols-1  lg:grid-cols-2  text-center">
            <button className="w-32 mx-auto text-white h-12 bg-red-600 shadow-slate-400  rounded-br-xl shadow-md ">
              Hire talent
            </button>
            <button className="w-32 mx-auto text-white h-12 bg-slate-600 shadow-slate-400  rounded-br-xl shadow-md ">
              Join talent pool
            </button>
          </div>
        </div>
        <div className=" mx-auto w-[50%]">
          <img className="w-[25em] mx-auto" src={a} alt="" />
        </div>
      </div>
      {/*Hero section*/}
      {/*section1*/}
      <div className=" text-center mt-32">
        <img className="  h-[50em]  " src={c} alt="" />
        <div className="flex  grid sm:grid-cols-1 gap-[5em] lg:grid-cols-2 relative bottom-[40rem] ">
          <div className="mx-auto text-start">
            <h1 className="text-[2rem] font-bold">
              We have impacted the lives <br></br>of
              <span className="text-red-500"> thousands</span> around the{" "}
              <br></br>world
            </h1>
            <p className="text-xl font-bold">6,000 trained in 14 months</p>
            <p className="text-gray-500">Talent Placed in 5 countries</p>
            <div className="text-start flex gap-5 mt-4">
              <div className="  w-16 h-14 bg-white rounded-md text-center ">
                <img className="w-[2em] mx-auto pt-4" src={ger} alt="" />
              </div>
              <div className="  w-16 h-14 bg-white rounded-md text-center ">
                <img className="w-[2em] mx-auto pt-4" src={usa} alt="" />
              </div>
              <div className="  w-16 h-14 bg-white rounded-md text-center ">
                <img className="w-[2em] mx-auto pt-4" src={nig} alt="" />
              </div>
              <div className="  w-16 h-14 bg-white rounded-md text-center ">
                <img className="w-[2em] mx-auto pt-4" src={ind} alt="" />
              </div>
              <div className="  w-16 h-14 bg-white rounded-md text-center ">
                <img className="w-[2em] mx-auto pt-4" src={ger} alt="" />
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <img className="w-96 relative bottom-16" src={d} alt="" />
          </div>
        </div>
      </div>
      {/*section1*/}
      {/*section2*/}
      <div className="bg-white pb-32 text-center">
        <div className="mx-auto pl-28  ">
          <h1 className="text-[2rem] mx-auto font-bold text-start ">
            Skill of our <span className="text-red-500">talent</span> that
            <br></br> you need
          </h1>
        </div>
        <div className="pl-28 mt-10 flex w-[70%] gap-5 grid sm:grid-cols-1 lg:grid-cols-4">
          <button className="w-48 h-8 bg--white shadow-lg shadow-gray-200 rounded-sm  hover:-translate-y-6  duration-500 ">
            Ui/Ux Design
          </button>

          <button className="w-48 h-8 bg--white shadow-lg shadow-gray-200 rounded-sm  hover:-translate-y-6  duration-500 ">
            DevOps Engineers
          </button>
          <button className="w-48 h-8 bg--white shadow-lg shadow-gray-200 rounded-sm hover:-translate-y-6  duration-500 ">
            Backend Developers
          </button>
          <button className="w-48 h-8 bg--white shadow-lg shadow-gray-200 rounded-sm  hover:-translate-y-6  duration-500 ">
            Frontend Developers
          </button>
        </div>
      </div>
      <div className="bg-white pb-32 text-center">
        <div className="mx-auto pl-28  ">
          <h1 className="text-[2rem] mx-auto font-bold text-start ">
            Where Our talent Work
          </h1>
        </div>
        <div className="pl-28 mt-10 flex w-[80%] gap-5 grid sm:grid-cols-1 lg:grid-cols-6">
          <button className="w-32 h-8 bg--white shadow-lg shadow-gray-200 rounded-sm hover  hover:-translate-y-6  duration-500 ">
            Github
          </button>
          <button className="w-32 h-8 bg--white shadow-lg shadow-gray-200 rounded-sm  hover:-translate-y-6  duration-500 ">
            Microsoft
          </button>
          <button className="w-32 h-8 bg--white shadow-lg shadow-gray-200 rounded-sm  hover:-translate-y-6  duration-500 ">
            Reskill Americans
          </button>
          <button className="w-32 h-8 bg--white shadow-lg shadow-gray-200 rounded-sm  hover:-translate-y-6  duration-500 ">
            Flutterwave
          </button>
          <button className="w-32 h-8 bg--white shadow-lg shadow-gray-200 rounded-sm hover:-translate-y-6  duration-500 ">
            Google
          </button>
          <button className="w-48 h-8 bg--white shadow-lg shadow-gray-200 rounded-sm  hover:-translate-y-6  duration-500  ">
            Career Transactioners
          </button>
        </div>
      </div>
      {/*section2*/}
      {/*section3*/}
      <div className="w-full  h-[120rem] gap bg-yellow-100 mx-auto">
        <h1 className="text-[3rem] pt-14 font-bold">
          Why we Hire <span className="text-red-500 font-bold">Talents</span>
        </h1>
        <div className="flex grid lg:grid-cols-3 sm:grid-cols-1 gap-5 pl-8 pr-8  pt-32">
          <div className="w-[25em] h-[19em] rounded-br-xl bg-white mx-auto ">
            <div>
              <img className="rounded mx-auto w-42" src={e} alt="" />
            </div>
            <p className="w-[70%] mx-auto pt-5">
              Zuri Team has a highly skilled set of talents that are built on
              referral and successful partnerships Our recruiters are
              exceptionally skilled in identifying top talent around the globe
              and matching them with the client's needs.
            </p>
          </div>
          <div className="w-[25em] h-[19em] rounded-br-xl bg-white mx-auto ">
            <div>
              <img className="rounded mx-auto w-42" src={e} alt="" />
            </div>
            <p className="w-[70%] mx-auto pt-5">
              Zuri Team has a highly skilled set of talents that are built on
              referral and successful partnerships Our recruiters are
              exceptionally skilled in identifying top talent around the globe
              and matching them with the client's needs.
            </p>
          </div>
          <div className="w-[25em] h-[19em] rounded-br-xl bg-white mx-auto ">
            <div>
              <img className="rounded mx-auto w-42" src={e} alt="" />
            </div>
            <p className="w-[70%] mx-auto pt-5">
              Zuri Team has a highly skilled set of talents that are built on
              referral and successful partnerships Our recruiters are
              exceptionally skilled in identifying top talent around the globe
              and matching them with the client's needs.
            </p>
          </div>
          <div className="text-center mx-auto">
            <div className="w-[25em] h-[19em] text-center rounded-br-xl bg-white mx-auto ">
              <div>
                <img className="rounded mx-auto w-42" src={e} alt="" />
              </div>
              <p className="w-[70%] mx-auto pt-5">
                Zuri Team has a highly skilled set of talents that are built on
                referral and successful partnerships Our recruiters are
                exceptionally skilled in identifying top talent around the globe
                and matching them with the client's needs.
              </p>
            </div>
            <div className="w-[25em] h-[19em] text-center rounded-br-xl bg-white mx-auto ">
              <div>
                <img className="rounded mx-auto w-42" src={e} alt="" />
              </div>
              <p className="w-[70%] mx-auto pt-5">
                Zuri Team has a highly skilled set of talents that are built on
                referral and successful partnerships Our recruiters are
                exceptionally skilled in identifying top talent around the globe
                and matching them with the client's needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*section 2*/}

      {/*section3*/}
    </div>
  );
};

export default Zuritalent;
