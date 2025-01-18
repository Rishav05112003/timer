import { useEffect, useState } from 'react';
import './App.css';
import moment from 'moment';

function App() {
  const [timer, setTimer] = useState(moment.duration(10, 'minutes'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        // Subtract one second from the previous timer
        const newTimer = moment.duration(prevTimer.asMilliseconds() - 1000);
        return newTimer;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="countDown">
        <p>
          Timer: {String(timer.minutes()).padStart(2, '0')} :{' '}
          {String(timer.seconds()).padStart(2, '0')}
        </p>
      </div>
    </>
  );
}

export default App;
