
import { useState, useEffect, useRef, useCallback, useMemo } from 'react'


export default (playing = false) => {

  const hasWindow = useMemo(() => typeof window !== 'undefined', []); // Check for window to only progress the animation beyond frame 0 on devices with screens
  const makeFrame = useCallback((_t, prev) => { // Constructor for making frames, never changes but defined inside for consistency
    const t = _t || _t === 0 ? _t : !hasWindow ? 0 : performance.now();
    const dt = !prev || !prev.t ? 0 : t - prev.t;
    return { t, dt };
  }, [hasWindow]);

  const p = useMemo(() => !!playing, [playing]) // Alias playing prop and ensure boolean
  const pNow = useRef(); // Playing reference for access outside render loop
  pNow.current = p; // Synchronize pNow every render

  const [frame, setFrame] = useState(makeFrame(0)); // Timestamp 0 so that default/initial frame matches on server and client
  const fNow = useRef(); // Frame reference for access outside render loop
  fNow.current = frame; // Synchronize fNow every render

  const tick = useCallback((timestamp) => { // Called every monitor frame (~16.67ms on 60hz display) while playing, increments stateful frame
    if (!pNow.current) return; // Stop if no longer playing
    const newFrame = makeFrame(timestamp, fNow.current) // Make a new frame using the timestamp and previous frame
    setFrame(newFrame); // Update the stateful frame
    window.requestAnimationFrame(tick); // Queue the next frame
  }, [pNow, fNow, makeFrame, setFrame]);
  
  useEffect(() => hasWindow && p && window.requestAnimationFrame(tick), [hasWindow, p, tick]); // Begin the frame loop if has a screen and playing

  return frame;
}