
import { useDispatch } from '../store';

import ControlInput from './ControlInput';


const ControlRow = ({ name, type, useValue, action }) => {

  const [dispatch, value] = [useDispatch(), useValue()];
  const setValue = (v) => dispatch({ type: action, value: v });


  return (
    <>
      <span>{name}:</span>
      <ControlInput {...{ type, value, setValue }}/>
      {/* <input onChange={(e) => setValue(e.target.value)} {...{ type, value }}/> */}

      <style jsx>{`
        span {
          margin-right: 20px;
        }
      `}</style>
    </>
  )
}

export default ControlRow;
