import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Benefits from './components/Benefits.jsx'

function App() {

    return (
        <>
            <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
                <Header />
                <Hero />
                <Benefits />
            </div>
        </>
    )
}

export default App
