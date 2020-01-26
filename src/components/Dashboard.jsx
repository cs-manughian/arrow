import React, { useEffect, useRef } from 'react';
import autosize from 'autosize';
import './Dashboard.scss';

function Dashboard() {
  const textEl = useRef(null);

  useEffect(() => {
    autoResizeTextarea();
  }, []);

  function autoResizeTextarea() {
    // `current` points to the mounted textarea element
    textEl.current.focus();
    autosize(textEl.current);
  }

  return (
    <div className='dashboard'>
      <WelcomeMessage />
      <textarea 
        ref={textEl}
        placeholder='Stream of consciousness...' 
        maxLength={2000}>
      </textarea>
    </div>
  )
}

const WelcomeMessage = () => (
  <>
    <div className='welcome'>
      welcome to arrow~ :)
    </div>
    <div className='instruction'>
      feel free to begin typing whatever comes to mind...
    </div>
  </>
)

export default Dashboard;
