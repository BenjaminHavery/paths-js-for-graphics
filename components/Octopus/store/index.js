
import { makeStore } from 'react-contexts-store';

import dimensions from './slices/dim';
import arms from './slices/arms';
import arm from './slices/arm';


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
  actions: {},
});

const {
  StoreProvider,
  useDispatch,
  usePlayingAi,
  usePlayingAnimation,
} = store;

export {
  StoreProvider,
  useDispatch,
  usePlayingAi,
  usePlayingAnimation,
};
