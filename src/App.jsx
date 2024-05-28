import React, { useRef } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import AudioPlayer from 'react-h5-audio-player';

import BackgroundImage from './components/parts/BackgroundImage';
import Body from './components/parts/Body';
import NotFound from './components/parts/NotFound';
import Navbar from './components/parts/Navbar';
import Footer from './components/parts/Footer';
import DisableInspectMenu from './components/reusable/DisableInspectMenu';
import DisableRightClick from './components/reusable/DisableRightClick';

function App() {
  const playerRef = useRef();
  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.audio.current.play().catch((error) => {
        console.log('Playing music failed:', error);
      });
    }
  };

  return (
    <div onMouseEnter={()=>{handlePlay()}} onMouseOver={()=>{handlePlay()}} onMouseLeave={()=>{handlePlay()}}>
      <BackgroundImage pauseTime={1000}/>
      <AudioPlayer
        className='w-0 h-0'
        ref={playerRef}
        loop
        volume={0.12}
        src={'./Music/music2.mp3'}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        showJumpControls={false}
      />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div> 
  )
}

// this line disables the pressing of right click and Inspect Menu
export default DisableInspectMenu( DisableRightClick(App) );

// export default App;