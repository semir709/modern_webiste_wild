import ParticlesComponent from "./ParticlesComponent";

const ParticlesContainer = ({ darkMode }) => {
  return (
    <div
      className="fixed left-0 top-0 -z-10 h-full w-full"
      style={{
        background: darkMode ? "#252422" : "white",
        transition: "background 0.3s ease",
      }}
    >
      <ParticlesComponent darkMode={darkMode} />
    </div>
  );
};

export default ParticlesContainer;
