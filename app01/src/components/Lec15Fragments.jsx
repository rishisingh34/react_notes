import {React, Fragment } from 'react'

const Lec15Fragments = () => {
  return (
    // below is an exmple of React Fragment
    <>
      <div>
        {/* to assign key to a react fragment we need to write React.Fragment inside fragment */}
        <Fragment key={1}>
          <span>Hi</span>
        </Fragment>
      </div>
    </>
  )
}

export default Lec15Fragments