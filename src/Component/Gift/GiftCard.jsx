const GiftCard = ({title,value,bg ,text}) => {
    return (
        <div className={`${bg} w-full flex flex-col justify-center items-center p-4 rounded`}>
            <p>{title}</p>
            <p className={`${text} font-bold text-2xl`}>{value}</p>
        </div>
    );
};

export default GiftCard;