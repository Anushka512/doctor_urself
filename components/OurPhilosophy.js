import Image from "next/image";

const OurPhilosophy = () => {
  return (
    <div className="relative flex justify-center -mt-44 ">
      <div className="bg-gray-600 py-6 sm:py-8 lg:py-12 md:w-2/3 rounded-tl-[150px]  shadow-2xl">
        <Image
          src="/assets/leaf.webp"
          alt=""
          height={200}
          width={200}
          className="absolute w-1/4 -top-12 lg:-top-32  md:left-5 -left-15"
        />
        <Image
          src="/assets/flower.webp"
          alt=""
          height={200}
          width={200}
          className="absolute w-1/5 -bottom-14 right-0 lg:right-20 md:right-10"
        />
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* <p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">Introducing</p> */}

          <h2 className="mb-4 text-center text-2xl text-white font-extrabold  md:mb-6 lg:text-5xl">
            Our Philosophy
            <p className="text-center font bold text-xl mt-8">
              Is Unlearn and Relearn
            </p>
          </h2>

          <p className="mx-auto max-w-screen-md   lg:px-20 text-justify text-white md:text-3xl mt-20">
            We go beyond symptoms we listen to what your body is telling us -
            with pulse diagnosis and understanding the symptoms which are
            experienced by your body. we identity your root cause and we help
            you heal inside out, thought Accutouch therapy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurPhilosophy;
