const TvNoiseBg = ({ children }) => {
  return (
    <div className="absolute h-full w-full overflow-hidden">
      <div className="tvNoiseAnimationCustom"></div>
      <div className="absolute left-0 top-0 h-full w-full">{children}</div>
    </div>
  );
};

export default TvNoiseBg;
