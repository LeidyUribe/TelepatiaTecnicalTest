import axios from "axios";
import { useState } from "react";

const FileUploader = () => {
  const token = 
    "ya29.a0ARW5m77V7W083OzLRvLd3qGvV6L91AL3JXJaWmCP6BX_QyH-QVdRHng_EU2UoDAwODwOyHorLntzSU-PIuSvRldnlWToc56rnUSqCwMSlPQ_LFz2UImfvh5HMIbXUkrXNAI7XY1Jiwx8f2Xrok_bdDQjhTh785werJtI4pXkcRwgr1MaCgYKAWASARASFQHGX2MigP6_fvshIvVlZt5mbJ7bpw0182";
// token temporal

  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Selecciona el archivo
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Por favor, selecciona un archivo primero.");
      return;
    }

    try {
      const bucketName = "bucket_test_telepatia";
      const fileName = "testFile%"; // Nombre del archivo
      const url = `https://storage.googleapis.com/upload/storage/v1/b/${bucketName}/o?uploadType=media&name=${fileName}`;

      const headers = {
        Authorization: "Bearer " + `${token}`,
        "Content-Type": file.type,
      };

      const response = await axios.post(url, file, {
        headers,
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentCompleted);
        },
      });

      const publicUrl = `https://storage.googleapis.com/${bucketName}/${fileName}`;
      setFileUrl(publicUrl);

      {
        response.data && alert("Archivo subido correctamente.");
        console.log("URL pública:", publicUrl);
      }
    } catch (error) {
      console.error("Error al subir el archivo:", error);
    }
  };

  return (
    <div>
      <h3>Subir archivo al bucket</h3>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="importantButton">
        Subir archivo
      </button>
      {uploadProgress > 0 && <h4>Progreso: {uploadProgress}%</h4>}
      <hr />

      {fileUrl && (
        <div>
          <p>Archivo disponible en:</p>

          <div>
            <a href={fileUrl} target="_blank" rel="referred">
              Grabación
            </a>
          </div>

          <audio controls>
            <source src={fileUrl} type="audio/mpeg" />
            El audio no funciona.
          </audio>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
