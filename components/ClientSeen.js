import Image from "next/image";
import OurPhilosophy from "./OurPhilosophy";


const ClientSeen = () => {


  const data1 = [
    {
        img:"assets/tileIcon-1.svg",
        title:"Upto 2-3 inch loss",
        des:"with diet and natural supplements."
    },
    {
        img:"assets/tileIcon-2.svg",
        title:"Up to 10 kgs weight loss",
        des:"and reduction in blood pressure medication. "
    },
    {
        img:"assets/tileIcon-3.svg",
        title:"Relief from hot flashes & mood swings",
        des:"without any allopathic medication."
    }
]
  const data2 = [
    
    {
        img:"assets/tileIcon-4.svg",
        title:"Reversing diabetes naturally",
        des:"and reduction in PCOD symptoms."
    },
    {
        img:"assets/tileIcon-5.svg",
        title:"Natural healthy pregnancy",
        des:"after failed IUI and IVF cycles."
    }
]

  return (
   <div className="relative -z-10 mx-6 sm:mx-20 mt-20">
     <div className=" w-full pb-64 bg-[#66c6e4] py-10  rounded-tr-[150px] rounded-b-[150px]">
        <h1 className=" text-xl md:text-3xl font-bold head-font px-2 ">We are to hear to serve people to return back to health</h1>
        <p className="text-xl mt-3 font-medium text-center regular-font">Our client have seen</p>
      <div className=" grid grid-cols-1 md:grid-cols-3 justify-evenly justify-items-center	py-10">

        {data1.map(item=>
        <div key={item.index} className="card static w-64 my-10 md:w-52 h-96 bg-base-100 shadow-xl  rounded-tl-none  rounded-tr-[50px] rounded-br-none	rounded-bl-[50px]	">
          <figure className="px-10 pt-10">
            <Image src={item.img} alt="Shoes" className="rounded-xl" width={200} height={200}/>
          </figure>
          <div className="card-body items-center px-5 py-2">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.des}</p>
          </div>
        </div>
        )}
        
    
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly justify-items-center rounded-tr-[150px] rounded-b-[150px]	py-10">

{data2.map(item=>
  <div key={item.index} className="card static w-64 my-10 md:w-52 h-96 bg-base-100 shadow-xl  rounded-tl-none  rounded-tr-[50px] rounded-br-none	rounded-bl-[50px]	">
          <figure className="px-10 pt-10">
          <Image src={item.img} alt="Shoes" className="rounded-xl" width={200} height={200}/>
          </figure>
          <div className="card-body items-center px-5 py-2">
            <h2 className="card-title head-font">{item.title}</h2>
            <p className="regualr-font justify">{item.des}</p>
          </div>
        </div>
        )}

        
       
      </div>
    </div>
      <OurPhilosophy/>
   </div>
  );
};

export default ClientSeen;
