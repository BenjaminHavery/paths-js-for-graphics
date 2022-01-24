
import { createContext, useContext } from 'react';
import { usePlayingAnimation } from '../';

import useAnimationFrame from '/hooks/useAnimationFrame';


const frameContext = createContext(),
      { Provider } = frameContext;

export const useFrame = () => useContext(frameContext);

export const FrameProvider = ({ children }) => {
  const playing = usePlayingAnimation();
  const value = useAnimationFrame(playing);

  return <Provider {...{ value }}>{ children }</Provider>
}
