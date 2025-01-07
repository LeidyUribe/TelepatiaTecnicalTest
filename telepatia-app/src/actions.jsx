import { ReactMediaRecorder } from "react-media-recorder";

import './App.css'

const RecordView = () => (
  
  <div>
    <ReactMediaRecorder
      audio
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <p>{status === "stopped"? "Pausado": ""}</p>
          <p>{status === "recording"? "Grabando": ""}</p>

          <p>
            <button onClick={startRecording}>Comenzar Grabación</button>
            <button onClick={stopRecording} className="importantButton">Detener Grabación</button>
          </p>

          <audio src={mediaBlobUrl} controls autoPlay />
        </div>
      )}
    />
  </div>
  
);

export default RecordView;
