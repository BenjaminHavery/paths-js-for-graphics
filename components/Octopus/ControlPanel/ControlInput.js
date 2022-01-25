
import { useMemo } from 'react';


const ControlInput = ({ type, value, setValue }) => {

  const valueProps = useMemo(() => {
    switch (type) {
      case 'checkbox': return { checked: value }
      default: return { value }
    }
  }, [type, value]);

  const eventProps = useMemo(() => {
    switch (type) {
      // case 'something': return { onChange: (e) => console.log(e) }
      case 'checkbox': return { onChange: (e) => setValue(e.target.checked) }
      default: return { onChange: (e) => setValue(e.target.value) }
    }
  }, [type, setValue]);

  return (
    <>
      <input {...{ type, ...valueProps, ...eventProps }}/>
      
      <style jsx>{``}</style>
    </>
  )
}

export default ControlInput;
