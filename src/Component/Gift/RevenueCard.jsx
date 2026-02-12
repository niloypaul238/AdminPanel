const RevenueCard = ({title,value,bg,text}) => {
    return (
        <div className={`${bg} w-full p-2`}>
            <p className="text-sm">{title}</p>
            <p className={text}>{value}</p>
        </div>
    );
};

export default RevenueCard;