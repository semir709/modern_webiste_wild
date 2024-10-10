const AwardCard = ({ Logo, text, url = "" }) => {
  return (
    <div className="group flex flex-col items-center justify-center hover:cursor-pointer">
      <figure className="mb-5 transition duration-300 group-hover:scale-110">
        {<Logo className="w-[100%]" />}
      </figure>
      <span className="text-center decoration-4 underline-offset-4 group-hover:underline">
        {text}
      </span>
    </div>
  );
};

export default AwardCard;
