

const ProgramCard = ({title,description,image})=>{
    return <div className="p-4 mx-auto bg-white rounded w-80 flex flex-col align-center justify-center">
        <div className={`${image}`}></div>
        <p className="regular-font mt-2 justify-center">{title}</p>
        <p className="light-regular-font line-clamp-2 mt-2">{description}</p>
    </div>
}

export default ProgramCard;