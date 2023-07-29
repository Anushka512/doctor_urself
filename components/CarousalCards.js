import Image from 'next/image'
import {useState} from "react";
import Modal from 'react-modal';
import evidence from "../public/assets/evidence.png"



const CarousalCards = ({item,image,transformation,letter})=>{
    const [isOpen, setIsOpen] = useState(false)

    const [modalType,setModalType] = useState(null)

    const Proof = ()=>{
        return <div>
            <div className='flex flex-row justify-between'>
                    <h1 className='regular-font'>{transformation!=="NA"? `${item.name}'s Transformation`:`${item.name}`}</h1>
                    <button onClick={() => setIsOpen(false)}>X</button>
                </div>
            {transformation!=="NA" && <Image src={transformation} className='w-full mt-8'/>}
            <h1 className='regular-font mt-8'>A letter from {item.name}</h1>
            <Image src={letter} className='w-full mt-8'/>
        </div>
    }

    const Account =()=>{
       return <div className='p-4'>
                <div className='flex flex-row justify-between'>
                    <h1 className='regular-font'>{item.name}</h1>
                    <button onClick={() => setIsOpen(false)}>X</button>
                </div>
                <p className='regular-font mt-4'><span className='regular-font text-[#5D9C59]'>Treatment : </span>{item.treatment}</p>
                <p className='light-regular-font mt-4'>{item.data}</p>
            </div>
    }

    const readMoreOnClick = ()=>{
        setIsOpen(true)
        setModalType("read-more")
    }

    const proofOnClick = ()=>{
        setIsOpen(true)
        setModalType("proof")
    }

    const customStyles = {
        overlay: {
           backgroundColor: 'rgba(0, 0, 0, 0.6)'
        },
        content: {
           top: '50%',
           left: '50%',
           right: 'auto',
           bottom: 'auto',
           marginRight: '-50%',
           transform: 'translate(-50%, -50%)',
           width:`${window.innerWidth<600? '80%':'50%'}`,
           height:"60%",
        }
     }
  

    return <div className='p-5 bg-[#FFFFFF] mx-4 rounded'>
        <div className='flex flex-row'>
            <div className='mr-4'>
                <Image src={image} className='rounded-full mr-4' width={55} height={55}/>
            </div>
            <div className='w-full'>
                <div className='flex flex-row justify-between w-full'>
                    <p className='regular-font'>{item.name}</p>
                    <Image onClick={()=>proofOnClick()} className='cursor-pointer' src={evidence} width={20} height={10}/>
                </div>
                <p className='regular-font'>{item.age}</p>
                <p className='regular-font'>{item.treatment}</p>
            </div>
        </div>
        <p className='light-regular-font mt-4 line-clamp-4'>{item.data}</p>
        <span onClick={() => readMoreOnClick()} className='text-[#4942E4] light-regular-font cursor-pointer'>Read more</span>
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
            {modalType==="read-more" ? Account():Proof()}
         </Modal>
    </div>
}

export default CarousalCards;