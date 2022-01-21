
import { useState, useEffect, useMemo } from 'react';

import useInterval from 'hooks/useInterval';

import makeBezier from 'paths-js/bezier';


const Tentacle = ({
  x = 0, y = 0, // Tentacle base position
  l: _l = 100, // Tentacle length, aliased to apply random variation before using it
  t: _t = 1000, // Tentacle AI movement frequency in ms, aliased to apply random variation before using it
  tension = 0,
  strokeWidth = 5,
  articulationPoints = 3, // Number of movable tentacle "joints"
  lVar = 1/10, // Maximum fraction of total by which tentacle length can vary
  oVar = 1/10, // Maximum fraction of tentacle length by which articulation point offset can vary
  tVar = 1/5, // Maximum fraction of total by which thought interval can vary
  frame,
}) => {

  // BRAIN
  const [thought, setThought] = useState(0); // Tentacle AI tick
  const hasThought = useMemo(() => !!thought, [thought]); // No randomness affecting HTML on thought 0, to avoid conflicts between server generated and hydrated HTML in Next.js
  const tMod = useMemo(() => (Math.random() - 0.5) * 2, []);
  const t = useMemo(() => _t * (1 + tVar * tMod), [_t, tVar, tMod]); // Tentacle AI tick interval

  const [aFrac, setAFrac] = useState(0); // Movement position between thoughts as a scalar
  // const aFrac = useMemo(() => (frame.t - thought) / t, [frame, thought, t]);

  useEffect(() => setThought(thought + t), [t]); // Have a thought when mounted
  useInterval(() => { // Keep having thoughts periodically
    setThought(thought + t);
    setPrevPointMods(pointMods);
    setAFrac(0); // Reset animation progress
  }, t);
  useEffect(() => setAFrac(Math.min(1, aFrac + (frame.dt / t))), [frame, t]);

  // DIMENSIONS
  const lMod = useMemo(() => hasThought ? Math.random() : 0, [hasThought]); // Random seed for length variation, unique to tentacle instance and only generated once
  const l = useMemo(() => _l * (1 - lVar * lMod), [_l, lVar, lMod]); // Apply length variation to length, minus so that l always less than or equal to _l

  const [prevPointMods, setPrevPointMods] = useState([]);
  const pointMods = useMemo(() => [ // Random scalers defining tentacle point offset from a straight line, base to tip
    0, 0, 0, // 3 Points with no variability to ensure straight tentacle base, also handy as we need at minimum two points total to render a tentacle with any length
    ...Array
      .from({ length: articulationPoints })
      .map(() => hasThought ? (Math.random() - 0.5) * 2 : 0) // Random offset scalars between -1 and 1
      .sort((a, b) => { // Sort low to high so greatest variation is at tip
        const [aAbs, bAbs] = [a, b].map((n) => Math.abs(n)); // ignore mathematical sign as direction is supposed to be random
        if (aAbs > bAbs) return 1;
        if (bAbs > aAbs) return -1;
        return 0;
      }),
  ], [articulationPoints, hasThought, thought]); // Regenerate when "thought" changes to "decide" next tentacle shape


  const points = useMemo(() => pointMods.map((m, i, a) => {
    const mPrev = !prevPointMods.length ? 0 : prevPointMods[i];
    const mInterpolated = mPrev + aFrac * (m - mPrev);
    return [
      x + (mInterpolated * l * oVar),
      y - (l * i / (a.length - 1)),
    ];
  }), [x, y, oVar, l, pointMods, prevPointMods, aFrac]);

  const dTentacle = useMemo(() => makeBezier({ points, tension }).path.print(), [points, tension]);


  return (
    <>
      <path {...{
        className: 'tentacle',
        d: dTentacle,
        strokeWidth,
      }}/>


      <style jsx>{`
        path {
          stroke: pink;
          fill: none;
        }
      `}</style>
    </>
  )
}

export default Tentacle
