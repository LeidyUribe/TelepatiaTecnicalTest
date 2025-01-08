import RecordView from "./actions"
import FileUploader from "./FileUploader"
import './App.css'

function App() {

  return (
    <>
      <div className="card">
        <h1>Graba tu audio aqui: </h1>
        <RecordView/>
        <hr/>
        <h1>Cargar archivo</h1>
       <FileUploader/>
      </div>
    </>
  )
}

export default App
