import Particles, { initParticlesEngine } from "@tsparticles/react";
import particlesOptions from "../dataJSON/particles.json";
import { loadFull } from "tsparticles";
import { useEffect, useState } from "react";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return init && <Particles options={particlesOptions} />;
};

export default ParticlesComponent;
