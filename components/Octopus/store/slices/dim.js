
import { makeSlice } from 'react-contexts-store';


export const updateDim = (s, v) => ({...s, dim: { ...s.dim, ...v }})

const sz = 1000; // Base pixel grid resolution for SVG viewbox, unrelated to visual size as SVGs are scalable


const dimSlice = makeSlice({
  initialState: {
    dim: {
      sz,
      cx: sz*(1/2), // x pos center
      cy: sz*(2/5), // y pos center
      r1: sz*(3/20), // inner radius (body/face)
      r2: sz*(9/20), // outer raduis (arms)
      strokeWidthBody: sz/150, // Stroke width of body/face shapes
      strokeWidthArms: sz/50, // Stroke width of tentacle arm paths
    },
  },
  computed: {
  },
  actions: {
    setSz: (s,a) => updateDim(s, { sz: parseInt(a.value) || sz }),
    setCx: (s,a) => updateDim(s, { cx: parseFloat(a.value) || 0 }),
    setCy: (s,a) => updateDim(s, { cy: parseFloat(a.value) || 0 }),
    setR1: (s,a) => updateDim(s, { r1: parseInt(a.value) || 0 }),
    setR2: (s,a) => updateDim(s, { r2: parseInt(a.value) || 0 }),
    setStrokeWidthBody: (s,a) => updateDim(s, { strokeWidthBody: parseInt(a.value) || 1 }),
    setStrokeWidthArms: (s,a) => updateDim(s, { strokeWidthArms: parseInt(a.value) || 1 }),
  },
});

export default dimSlice;


const {
  useDim,
  useDimSz,
  useDimCx,
  useDimCy,
  useDimR1,
  useDimR2,
  useDimStrokeWidthBody,
  useDimStrokeWidthArms,
} = dimSlice;

export {
  useDim,
  useDimSz,
  useDimCx,
  useDimCy,
  useDimR1,
  useDimR2,
  useDimStrokeWidthBody,
  useDimStrokeWidthArms,
};
