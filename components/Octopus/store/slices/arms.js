
import { makeSlice } from 'react-contexts-store';


export const updateArms = (s, v) => ({...s, arms: { ...s.arms, ...v }})


const armsSlice = makeSlice({
  initialState: {
    arms: {
      count: 8, // like an octopus would have
      sector1: 1/3, // fraction of body circumference clockwise from top at which arms start
      sector2: 2/3, // fraction... ...finish
    },
  },
  computed: {
  },
  actions: {
    setArmsCount: (s,a) => updateArms(s, { count: Math.max(2, (parseInt(a.value) || 0)) }),
  },
});

export default armsSlice;


const {
  useArms,
  useArmsCount,
  useArmsSector1,
  useArmsSector2,
} = armsSlice;

export {
  useArms,
  useArmsCount,
  useArmsSector1,
  useArmsSector2,
};
