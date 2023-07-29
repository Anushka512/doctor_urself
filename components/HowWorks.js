import Image from "next/image";


const HowWorks = () => {
  const data = [
    {
      step: 1,
      img: "assets/step1.svg",
      title: "Clarity Call",
      des: "Have a call with us to know how we work. Make program payment. Start program from comfort of your home.",
    },
    {
      step: 2,
      img: "assets/step2.svg",
      title: "Register to one of our program",
      des: "on your diet, supplements, lifestyle, etc. Explanations sent via text, images & videos. ",
    },
    {
      step: 3,
      img: "assets/step3.svg",
      title: "Connecting the medical history",
      des: "Fill out a medical history form, do a blood test and have a detailed call with our medical expert.",
    },
    {
      step: 4,
      img: "assets/step4.svg",
      title: "Follow Up Consults",
      des: "happen each month. Health progress reviewed. Changes made, when needed Ask questions on chat/mail (working hours only please)",
    },
  ];

  return (
    <div className=" w-full py-15 ">
      <h1 className="text-3xl text-center text-black py-20 head-font">
        How the Program Works
      </h1>

      <div className="flex justify-center">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 	py-10">
          {data.map((item) => (
            <div>
               <div className=" mb-4 ">
                <span className="  px-2 	regular-font">STEP {item.step}</span>
              </div>
              <div className="flex flex-col card justify-center w-60 h-[400px] shadow-xl bg-[#5D9C59] rounded-lg">
             
              <figure className="px-10 pt-10">
                <Image src={item.img} alt="img" className="rounded-xl" width={100} height={100}/>
              </figure>
              <div className="card-body items-center p-3 text-white">
                <h2 className="card-title text-2xl regular-font">{item.title}</h2>
                <span className="regular-font">{item.des}</span>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
