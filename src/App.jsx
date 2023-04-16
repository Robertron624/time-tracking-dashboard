import './App.scss'
import useStore from './context/store'
import TimeCard from './components/TimeCard'

const cardsData = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "SelfCare",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
]

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
      <div className="time-cards">
        {cardsData.map((card, i) => (
          <div key={i}><TimeCard card={card}/></div>
        ))}
      </div>
    </main>
  )
}

export default App
