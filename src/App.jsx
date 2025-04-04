import { GlobalProvider } from './context/GlobalContext';

export default function App() {
  return (
    <>
      <GlobalProvider>
        <div className='container py-4 text-white'>
          <h1>React BoolFlix</h1>
          {/* qui vanno poi inseriti i componenti */}
        </div>
      </GlobalProvider>
    </>
  )
}
