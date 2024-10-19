import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/'
import Survey from './pages/Survely'
import Results from './pages/Results/'
import Freelances from './pages/Freelances/'
import Error from './pages/Errors.tsx'


import './index.css'

createRoot(document.getElementById('root')!).render(
     <StrictMode>
          <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/survey" element={<Survey />} />
                <Route path="/survey/:questionNumber" element={<Survey />} />
               <Route path="/results" element={<Results />} />
               <Route path="/freelances" element={<Freelances />} />
                <Route path="*" element={<Error />} />

            </Routes>
                  </Router>
     </StrictMode>
)
