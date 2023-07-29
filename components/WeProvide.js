import Image from "next/image";


const WeProvide = () => {
  return (
    <div className="">
      <div className="flex justify-center  p-4">
        <div className="flex flex-col justify-center items-center ">
         
          <div className="text-green-500 text-3xl md:text-2xl head-font">
          What we provide for you
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
            <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg   px-8">
              <div className="flex flex-col md:flex-row items-center justify-center  ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center text-center">
                    <Image
                      src="/assets/w1.webp"
                      alt=""
                      width={80}
                      height={80}
                    />
                    <div className="font-bold text-white">Training for begginerrs</div>
                    <div className="text-stone-500  m-2">
                      {" "}
                      Tailblocks provides best Tailwind CSS Components and
                      Blocks to create an unique websites within minutes.
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg   px-8">
              <div className="flex flex-col md:flex-row items-center justify-center  ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center text-center">
                  <Image
                      src="/assets/w2.webp"
                      alt=""
                      width={80}
                      height={80}
                    />
                    <div className="font-bold text-white">Buy courses with your credit card or debit card</div>
                    <div className="text-stone-500  m-2">
                      {" "}
                      Tailblocks provides best Tailwind CSS Components and
                      Blocks to create an unique websites within minutes.
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-hidden w-full m-4 flex justify-center rounded-lg   px-8">
              <div className="flex flex-col md:flex-row items-center justify-center  ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center text-center">
                  <Image
                      src="/assets/w3.webp"
                      alt=""
                      width={80}
                      height={80}
                    />
                     <div className="font-bold text-white">And our courses are taught by our experts</div>
                    <div className="text-stone-500  m-2">
                      {" "}
                      Tailblocks provides best Tailwind CSS Components and
                      Blocks to create an unique websites within minutes.
                    </div>
                   
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeProvide;
