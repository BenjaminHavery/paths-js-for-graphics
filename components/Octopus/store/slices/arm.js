
import { makeSlice } from 'react-contexts-store';

import { updateDim } from './dim';


export const updateArm = (s, v) => ({...s, arm: { ...s.arm, ...v }})


const armSlice = makeSlice({
  initialState: {
    arm: {
      lengthRange: 1/10, // maximum fraction of total by which arm length can vary
      kinks: 3, // number of bends in each arm
      kinksRange: 1/10, // maximum fraction of arm length by which kink offset can vary
      duration: 1, // number of seconds between arm movements
      durationRange: 1/5, // Maximum fraction of total by which arm duration can vary
    },
  },
  computed: {
    armLength: [['dimR1', 'dimR2'], (r1, r2) => r2 - r1],
  },
  actions: {
    setArmLength: (s,a) => updateDim(s, { r2: s.dim.r1 + (parseInt(a.value) || 0) }),
    setArmLengthRange: (s,a) => updateArm(s, { lengthRange: parseInt(a.value) || 0 }),
    setArmKinks: (s,a) => updateArm(s, { kinks: parseInt(a.value) || 0 }),
    setArmKinksRange: (s,a) => updateArm(s, { kinksRange: parseFloat(a.value) || 0 }),
    setArmDuration: (s,a) => updateArm(s, { duration: parseFloat(a.value) || 0 }),
    setArmDurationRange: (s,a) => updateArm(s, { durationRange: parseFloat(a.value) || 0 }),
  },
});

export default armSlice;


const {
  useArm,
  useArmLength,
  useArmLengthRange,
  useArmKinks,
  useArmKinksRange,
  useArmDuration,
  useArmDurationRange,
} = armSlice;

export {
  useArm,
  useArmLength,
  useArmLengthRange,
  useArmKinks,
  useArmKinksRange,
  useArmDuration,
  useArmDurationRange,
};
