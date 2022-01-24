
import { useDispatch } from '../store';
import { useArmsCount } from '../store/slices/arms';

import controlables from './controlables';

// const controlables = [
//   { name: 'Tentacles', type: 'number', useValue: useArmsCount, dispatch: 'setArmsCount' },
// ];


const ControlPanel = () => (
  <>
    <ul className='control-panel'>
      { controlables.map((c, i) => (
        <li key={i}>
          <Control {...c} />
        </li>
      ))}
    </ul>


    <style jsx>{`
      ul {
        margin: 0;
        list-style: none
      }
      li {
        margin: 20px 0 0;
        padding: 0;
      }
    `}</style>
  </>
)

export default ControlPanel;


const Control = ({ name, type, useValue, action }) => {
  const [dispatch, value] = [useDispatch(), useValue()];
  const onUpdate = (v) => dispatch({ type: action, value: v });

  return (
    <>
      <span>{name}:</span>
      <input onChange={(e) => onUpdate(e.target.value)} {...{ type, value }}/>

      <style jsx>{`
        span {
          margin-right: 20px;
        }
      `}</style>
    </>
  )
}
