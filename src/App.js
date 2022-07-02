import logo from './logo.svg';
import './App.css';
import React, { useState }  from 'react';
import {Unity, useUnityContext } from "react-unity-webgl";
import LoadingBar from 'react-top-loading-bar'
import background from './images/background.jpg'

function App() {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "Build/SampleBuild.loader.js",
    dataUrl: "Build/SampleBuild.data",
    frameworkUrl: "Build/SampleBuild.framework.js",
    codeUrl: "Build/SampleBuild.wasm",
  });

  // We'll round the loading progression to a whole number to represent the
  // percentage of the Unity Application that has loaded.
  const loadingPercentage = Math.round(loadingProgression * 100);

  // Variables for react-top-loading-bar, we're only using setProgress(0) in <LoadingBar> tag 
  // passing in loadingPercentage given by unity context
  const [progress, setProgress] = useState(0);
  // extra var for controlling the overlay
  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <div className="container h-full bg-barscene">

      <LoadingBar
        color='#f11946'
        progress={loadingPercentage}
        onLoaderFinished={() => setProgress(0)}
      />


      {isLoaded === false || showOverlay && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded
        // AND if the user has yet to click on a button.
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity className="unity" unityProvider={unityProvider} />
    </div>
  );
}

export default App;
