
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const GalaxyBackground = () => {
  // Use 'any' to avoid type conflicts between different tsParticles packages
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-galaxy"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: '#2cade9ff',
        },
        particles: {
          number: { value: 180, density: { enable: true, area: 1200 } },
          color: { value: ['#fff', '#a3c9ff', '#f3f3b3', '#b39ddb'] },
          shape: { type: 'circle' },
          opacity: { value: 0.8, random: { enable: true, minimumValue: 0.3 } },
          size: { value: 1.5, random: { enable: true, minimumValue: 0.5 } },
          move: {
            enable: true,
            speed: 0.1,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: {
            repulse: { distance: 60, duration: 0.4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default GalaxyBackground;
