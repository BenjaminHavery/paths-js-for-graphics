
import { useMemo } from 'react'


const BigSquareSvg = ({ sz = 1000, title = '', children, onClick, color: fill = 'black' }) => {

  const [height, width, h, w] = useMemo(() => Array.from({ length: 4 }, () => sz), [sz]);

  return (
    <svg viewBox={`0 0 ${h} ${w}`} {...{ height, width, onClick }}>
      { !!title && <text className='title' x={w/2} y={0} {...{ fill }}>{ title }</text> }
      { children }

      <style jsx>{`
        svg {
          height: 100vmin;
          width: 100vmin;
          font-size: 2vmin;
          stroke-width: 1vmin;
        }
        .title {
          text-anchor: middle;
          font-size: 4em;
          transform: translateY(1em);
        }
      `}</style>
    </svg>
  )
}

export default BigSquareSvg
