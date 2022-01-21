
import { useEffect, useRef } from 'react'

export default (
  callback = () => null,
  delay = 0,
) => {
  const savedCallback = useRef(); // Store the defined callback where it can be located outside of the rendering loop

  savedCallback.current = callback; // Update the stored callback every render
  
  useEffect(() => { // Set up the interval
    
    if (!delay && delay !== 0) return; // Don't schedule the callback if no delay is specified (0 is a valid value, per setInterval spec)
    
    const id = setInterval(() => savedCallback.current(), delay); // Use the latest callback function without resetting the interval if the callback changed while waiting
    
    return () => clearInterval(id); // Remove the interval when the delay changes or component using this hook unmounts

  }, [delay]); // Regenerate the interval if delay changes
}
