import { Link } from "react-router-dom";
import img1 from "../images/hero-bg.svg";
import inter from "../images/zuri-internship-img.svg";
import training from "../images/zuri-training-img.svg";
import talent from "../images/zuri-talent-img.svg";

// icon
import a from "../images/fb.png";
import b from "../images/IG.png";
import c from "../images/in.png";
import d from "../images/twitter.png";

function Home() {
  return (
    <div>
      <div className="b-white  h-[40em] w-full bg-cover relative bg-center">
        <img
          className="w-full h-full object-cover absolute mix-blend-overlay"
          src={img1}
          alt=""
        />

        <h1 className="  pt-20 top-0 mx-auto text-gray-900 font-semibold text-2xl">
          Zuri<span className="text-red-500">.</span>Team
        </h1>
        <p className="text-[30px] text-gray-900 pt-10 font-semibold">
          Learn, Build, Grow.
        </p>
        <div className="w-[60%] pt-10 mx-auto">
          <p className="text-[16px] text-gray-900 ">
            Unlock your Brilliance with our hands-on
            <span className="text-red-500"> beginner</span> and
            <span className="text-red-500"> expert training.</span>
            Zuri Team has been immensely successful in creating a global network
            of a highly adept intelligent workforce that can help your company
            achieve their mission-critical
            <span className="text-red-500"> projects and goal</span>
          </p>
        </div>
        <div className="grid w-[40%] lg:grid-cols-2 mx-auto gap-5 sm:grid-cols-2  sm:grid-cols-1 flex  pt-20 text-center">
          <button className=" border mx-auto bg-red-800 w-56 h-9 text-[18px] font-light  text-white">
            i'm new to the industry
          </button>
          <button className="border mx-auto border-red-500 w-56 h-9 text-[18px] font-light text-red-500">
            i need industry experience
          </button>
        </div>
      </div>
      <div>
        <p className="text-red-500 pt-24">BY ZURI Team</p>
        <div className="w-[50%] mx-auto">
          <p className="text-xl">
            We cater for every level of expertise and needs in the industry{" "}
          </p>
        </div>
      </div>
      {/*cards*/}

      <div className="flex gap-8 mx-auto pt-24 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
        <div className="w-[24em] h-[27em] mx-auto bg-[#FFFAFA]">
          <img className="pt-5 pl-5" src={training} alt=" " />
          <p className="justify-start pl-5 sm:max-w-sm w-[15em] pt-10">
            We understand a complete beginner cannot become a professional after
            a few weeks, the aim here is to get you familiar enough with each
            the tools such that you’ll be able to continue learning on your own
            with minimal support.
            <br></br>
            <div className="pt-5">
              <Link className="text-red-500 pt-[5em]" to="Zuritalent">
                I want to be trained >
              </Link>
            </div>
          </p>
        </div>
        {/*cards*/}
        <div className="flex mx-auto  grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
          <div className="w-[24em] h-[27em] mx-auto bg-[#FFFAFA]">
            <img className="pt-5 pl-5" src={inter} alt=" " />
            <p className="justify-start pl-5 sm:max-w-sm w-[15em] pt-10">
              We place you in a work simulation. We give you tasks every week,
              the tasks ranges from easy to hard as you progress from stage to
              stage, making it to the final stage means you are ready for actual
              work
              <br></br>
              <div className="pt-5">
                <Link className="text-red-500 pt-[5em]" to="Zuri">
                  I want to join the internship >
                </Link>
              </div>
            </p>
          </div>
        </div>
        {/*cards*/}
        <div className="flex  mx-auto  grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1">
          <div className="w-[24em] h-[27em] mx-auto bg-[#FFFAFA]">
            <img className="pt-5 pl-5" src={talent} alt=" " />
            <p className="justify-start pl-5 sm:max-w-sm w-[15em] pt-10">
              Keeping pace with projects and being on the look out for the
              extremely talented individuals has become ever more challenging.
              Here is where Zuri Team comes into play to bring the best suited
              talent for your company
              <br></br>
              <div className="pt-5">
                <Link className="text-red-500 pt-[5em]" to="about">
                  I am looking for talent >
                </Link>
              </div>
            </p>
          </div>
        </div>
        {/*cards*/}
      </div>
      <div className="flex text-center mt-44 grid lg:grid-cols-4 sm:grid-cols-1">
        <div className="mx-auto">
          <h1 className="   top-0 mx-auto text-gray-900 font-semibold text-2xl">
            Zuri<span className="text-red-500">.</span>Team
          </h1>
        </div>
        <div className="mx-auto ">
          <p className="text-2xl">Links</p>
          <a className="text-red-500">Store</a>
          <br></br>
          <a className="text-red-500">Blog</a>
        </div>
        <div className="mx-auto">
          <p className="text-2xl">Contact</p>
          <p>8 Jubliee-CMD Road, Magodo, Lagos State</p>
          <a className="text-red-500">hello@Zuri.team</a>
        </div>
        <div className="mx-auto ">
          <p className="text-2xl">Follow us</p>
          <div className="flex mx-auto gap-5">
            <img className="w-5" src={a} alt="" />
            <img className="w-5" src={d} alt="" />
            <img className="w-5" src={b} alt="" />
            <img className="w-5" src={c} alt="" />
          </div>
        </div>
      </div>
      <hr className="mt-20 "></hr>
      <footer className=" text-center mx-auto">
        <h1 className="font-bold pb-20 mt-20">© 2020 ZURI TEAM</h1>
      </footer>
    </div>
  );
}

export default Home;
