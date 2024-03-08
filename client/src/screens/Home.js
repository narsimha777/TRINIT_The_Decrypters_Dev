import { useState } from "react";

import ImgHero1 from "../assets/head1.jpg";
import ImgHero2 from "../assets/head2.jpg";
import ImgHero3 from "../assets/hero3.jpg";

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom";



// import IconPrev from "../icons/IconPrev";
// import IconNext from "../icons/IconNext";
// import ArticleHome from "./ArticleHome";

const ARTICLESHERO = [
  {
    title: "Unlock Your Linguistic Potential",
    description: "Embark on a journey of language mastery with our innovative learning platform. Connect with expert tutors and immerse yourself in a world of linguistic diversity. Whether you're a beginner or an advanced learner, our app provides tailored lessons to suit your needs. Start your language learning adventure today!",
    imgHero: ImgHero1,
    id: 1,
  },
  {
    title: "Expert Tutor Network",
    description: "Access a diverse network of expert tutors proficient in multiple languages. Receive personalized guidance, feedback, and support as you navigate through your language learning journey.",
    imgHero: ImgHero2,
    id: 2,
  },
  {
    title: "Live Conversation Practice",
    description: "Sharpen your language skills through live conversation practice sessions. Interact with native speakers and fellow learners in real-time, improving your fluency and confidence in speaking the language.",
    imgHero: ImgHero3,
    id: 3,
  },
];


const Home = () => {
  const [index, setIndex] = useState(0);
  setTimeout(() => {
    setIndex((index + 1) % 3)
  }, 3000);
  const navigate = useNavigate();


  const handlePrev = () => {
    if (index === 0) {
      return setIndex(ARTICLESHERO.length - 1);
    }
    setIndex(index - 1);
  };

  const handleNext = () => {
    if (index === ARTICLESHERO.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  };

  return (
    <>
      <header className="flex md:flex-row w-full-screen flex-col md:h-screen">
        <img
          src={ARTICLESHERO[index].imgHero}
          alt={ARTICLESHERO[index].title}
          className="col-start-1 col-end-4 row-start-1 row-end-3 h-full md:w-1/2 w-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3"
        />
        <article className=" flex-col flex items-start justify-center p-3 lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-2 lg:px-16 md:w-1/2">
          <div>

          <h1 className="mb-6 text-4xl font-bold">{ARTICLESHERO[index].title}</h1>
          <p className="mb-8 text-gray-500">{ARTICLESHERO[index].description}</p>
          <button onClick={() => navigate("/signup")} className="flex items-center  fill-black hover:fill-gray-500 hover:text-gray-500">
            <span className="text-base font-bold uppercase  mx-2 bg-gray-900 p-5 rounded text-white">
              Enroll now
            </span>
            {/* <IconArrowShop /> */}
          </button>
          </div>
          {/* <div className="col-start-3 col-end-4 row-start-2 row-end-3 flex bg-black text-white lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3">
            <button
              className="w-full hover:bg-gray-800"
              onClick={handlePrev}
            >
              <ArrowLeftIcon className="m-6 text-white" />
            </button>
            <button
              className="w-full hover:bg-gray-800"
              onClick={handleNext}
            >
              <ArrowRightIcon className="m-6 text-white" />
            </button>
          </div> */}
        </article>
      </header>
    </>
  );
};

export default Home;