import HomeDetails from './components/HomeDetails'

function GoToDashboard() {
    window.location.href='/bonfire'
}

function App() {
  return (
    <HomeDetails>
        <div className="home">
            <img src="/logotipo.png"/>
            <h1>Sit, Call & Stay Warm with Friends</h1>
            <p>...With <span>Bonfire App</span> you ever stay relaxed with your friends, a safe conversation, warmed and be closed with the bests technologies and fast configuration of access and calls...</p>
            <button onClick={GoToDashboard}>Open Bonfire in your browser</button>
        </div>
    </HomeDetails>
  )
}

export default App
