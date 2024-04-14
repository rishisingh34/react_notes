import React from 'react'
import img from '../images/peakpx_last_of_us.jpg'

const user = {
  name: "John",
  age: 25,
  address: {
    city: "New York",
    zip: 10001,
  },
};
function Lec01() {
  return (
    <div>
      {/* inside jsx the anything written inside curly braces is javascript code  */}
      <label htmlFor="example_for_adding_label" />
      <input id="example_for_adding_label" />
      {/* In the input below the value set cannot be changed  */}
      <input type="number" id="inputId_2" value={3} />
      {/* In the input below the value set can be changed by using defaultValue  */}
      <input type="number" defaultValue={3} />

      {/* similarly ---> use defaultChecked for checked box to be checked by default and not checked = true otherwise react won't let the value change  */}

      {/* adding style in jsx  */}
      {/* using single bracket for js code then adding object of styles , thus double curly braces  */}
      <div style={{ color: 'red', fontSize: 30 }}>Hello World</div>
      <div className='takingJson'>
        {/* we cannot pass object inside jsx therefore we have to stringify first  */}
        {JSON.stringify(user)}
      </div>
      {/* adding image to react  */}
      <img src={img} />
    </div>
  );
}

export default Lec01
// can also use  export {Lec01}  instead of export default Lec01 --> it is called named export
// and import {Lec01} from './components/Lec01' in App.jsx

// creating a class component in react ---> 
// import React from 'react';
// export default class Lec01 extends React.Component {
//   render() {
//     return (
//       <div>
//         Hello World
//       </div>
//     );
// }