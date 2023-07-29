import Image from "next/image";

const HowWeWork = () => {
  return (
    <div>
     

      <div className="my-20">
        <h1 className="text-xl md:mx-20 mx-3 text-justify my-10 regular-font">
          We believe in the five-elemental balancing to heal and a way towards a
          healthy life. Accutouch therapy enables one to tap into healthy and
          holistic development. Adding to this, it also leads to mental peace.
        </h1>
        <h1 className="text-xl md:mx-20 mx-3  my-10 regular-font">
          Evidence-based holistic care, completely online
        </h1>
        <h1 className="text-xl md:mx-20 mx-3  my-10 regular-font">
          Get customized treatment with lifestyle and Accutouch Therapy.
        </h1>
        <p className="text-xl md:mx-20 mx-3 text-justify my-10 regular-font">
          We’ve helped hundreds of people successfully manage their health
          conditions over the long term. What’s our secret? We treat your body
          as a whole.
        </p>
        <p className="text-xl md:mx-20 mx-3 text-justify my-10 regular-font">
          We work with you to help successfully manage your health conditions.
          Your body is a complex, interconnected, finely tuned system. An
          imbalance or disturbance in one part can manifest as a problem in a
          completely different part. We solve the hidden root causes of chronic
          conditions, and heal you from within.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="bg-[#786EB9] md:w-[70%] w-full rounded-t-[50px]">
          <div>
            <h1 className="text-3xl md:mx-20 my-10 text-center pt-10">
              We have a “5 petal” approach - <br />
              Air, Water, Wood, Fire, Earth.
            </h1>
            <Image
              src="/assets/5petal.jpg"
              className="container mx-auto w-[80%] pb-10"
              alt=""
              height={200}
              width={200}
            />
          </div>
        </div>
      </div>


    </div>
  );
};

export default HowWeWork;
