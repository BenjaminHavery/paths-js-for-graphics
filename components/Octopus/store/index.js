
import { makeStore } from 'react-contexts-store';

import dimensions from './slices/dim';
import arms from './slices/arms';
import arm from './slices/arm';

import { FrameProvider } from './extras/frame';


const store = makeStore({
  slices: [
    dimensions,
    arms,
    arm,
  ],
  initialState: {
    playing: {
      ai: true,
      animation: true,
    },
  },
  actions: {
    setPlayingAi: (s,a) => ({ ...s, playing: { ...s.playing, ai: !!a.value }}),
    setPlayingAnimation: (s,a) => ({ ...s, playing: { ...s.playing, animation: !!a.value }}),
  },
});

const {
  StoreProvider: _StoreProvider, // Aliased for modification prior to export
  useDispatch,
  usePlayingAi,
  usePlayingAnimation,
} = store;

export {
  useDispatch,
  usePlayingAi,
  usePlayingAnimation,
};

export const StoreProvider = ({ children }) => (
  <_StoreProvider>
    <FrameProvider>
      { children }
    </FrameProvider>
  </_StoreProvider>
)