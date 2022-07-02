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
  const [progress, setProgress] = useState(0)

  return (
    <div style={{backgroundImage: `url(${background})` }} className="container">

      <LoadingBar
        color='#f11946'
        progress={loadingPercentage}
        onLoaderFinished={() => setProgress(0)}
      />

      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}

      <Unity className="unity" unityProvider={unityProvider} />

    </div>
  );
}

export default App;
