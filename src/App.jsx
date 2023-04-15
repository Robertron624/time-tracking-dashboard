import './App.scss'
import useStore from './context/store'

function App() {

  const time = useStore(state => state.time)
  const setTime = useStore(state => state.setTime)

  const handleChange = (e) => {
    setTime(e.target.id)
  }

  return (
    <main className="App">
      <div className="user-control">
        <div className="user-info">
          <img src="image-jeremy.png" alt="jeremy's profile pic" />
          <div className='user-fullname'>
            <span>Report for</span>
            <p>Jeremy Robson</p>
          </div>
        </div>
        <div className="time-selector">
          <span id="daily" onClick={handleChange} className={`${time == 'daily' ? 'current' : ''}`}>daily</span>
          <span id="weekly" onClick={handleChange} className={`${time == 'weekly' ? 'current' : ''}`}>weekly</span>
          <span id="monthly" onClick={handleChange}  className={`${time == 'monthly' ? 'current' : ''}`}>monthly</span>
        </div>
      </div>
    </main>
  )
}

export default App
