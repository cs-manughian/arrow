import React from 'react';
import './Dashboard.scss';

function Dashboard() {
  return (
    <div className='dashboard'>
      <WelcomeMessage />
      <textarea placeholder='Stream of consciousness...' maxLength={2000}>
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
