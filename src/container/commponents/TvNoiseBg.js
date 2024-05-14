const TvNoiseBg = ({ children }) => {
  return (
    <div className="w-full h-full absolute overflow-hidden ">
      <div className="tvNoiseAnimationCustom"></div>
      <div className="absolute top-0 left-0 w-full h-full">{children}</div>
    </div>
  );
};

export default TvNoiseBg;
