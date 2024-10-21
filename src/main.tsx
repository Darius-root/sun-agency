import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/';
import Survey from './pages/Survely';
import Results from './pages/Results/';
import Freelances from './pages/Freelances/';
import Error from '@/components/Errors/';
import './index.css';
import Header from './pages/Header/index.tsx';
 
import { ThemeProvider } from '@/utils/context'
import Footer from './pages/Footer/index.tsx';
import GlobalStyle from './utils/style/GlobaleStyle.tsx';

createRoot(document.getElementById('root')!).render(
     <StrictMode>
          <Router>
   
          <ThemeProvider>
          <GlobalStyle />

               <Header />
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/survey" element={<Survey />} />
                    <Route
                         path="/survey/:questionNumber"
                         element={<Survey />}
                    />
                    <Route path="/results" element={<Results />} />
                    <Route path="/freelances" element={<Freelances />} />
                    <Route path="*" element={<Error />} />
               </Routes>
               <Footer/>

               </ThemeProvider>
          </Router>
     </StrictMode>
);
