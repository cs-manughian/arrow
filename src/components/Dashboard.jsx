import React, { useEffect, useRef } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';
import autosize from 'autosize';
import './Dashboard.scss';
import { useState } from 'react';

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

  let [textStream, setTextStream] = useState('');
  let [analysis, setAnalysis] = useState(null);

  function performAnalysis() {

    axios.get(`${process.env.REACT_APP_TEXT_ANALYTICS_API}/sentiment/${textStream}`)
      .then(function (response) {
        setAnalysis(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  return (
    <div className='dashboard'>
      <WelcomeMessage />
      {
        analysis &&
          <Plot
            style={{
              color: 'blue',
              'margin': 'auto',
              // 'font-family': 'rubik, -apple-system, sans-serif',
            }}
            data={[
              {
                type: 'bar', 
                orientation: 'h',
                x: Object.values(analysis),
                y: ['neg', 'neu', 'pos', 'compound'],
                marker: { color: '#fcca44' },
              },
            ]}
            layout={{
              width: 320, 
              height: 240,
              title: 'Sentiment'
            }}
            config={{
              staticPlot: true,
              showLegend: false
            }}
          />
      }
      <textarea 
        ref={textEl}
        defaultValue={textStream}
        onChange={(e) => setTextStream(e.target.value)}
        placeholder='Stream of consciousness...' 
        maxLength={2000} />
      <button onClick={performAnalysis}>done</button>
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
