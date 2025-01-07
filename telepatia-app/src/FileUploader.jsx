import React, { useState } from "react";
import axios from "axios";

const FileUploader = () => {
  const token = "ya29.a0ARW5m74dOqniDcHYLMeC_kGx-wgLVDS4ft_T9j830vNxghIy332xnfMypknGdOxO2o6fzCtgLR9f1hEFudNDhNouQJ-I6_8cHiNYSjE0zGQFySTk9_ZWn7KccZ7hMID147RMSqNd5qu7ttykhQtq_VDqC2fr3n4BmjJotHJasgRzUQaCgYKAWUSARASFQHGX2MiiTm7j6JXkU5s32D5xtB4Kg0181";
  
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Selecciona el archivo
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Por favor, selecciona un archivo primero.");
      return;
    }

    try {
      const bucketName = "bucket_test_telepatia"; // Reemplaza con el nombre de tu bucket
      const fileName = file.name; // Nombre del archivo
      const url = `https://storage.googleapis.com/upload/storage/v1/b/${bucketName}/o?uploadType=media&name=${fileName}`;

      const headers = {
        "Authorization": "Bearer "+`${token}`,
        "Content-Type": file.type,
      };

      const response = await axios.post(url, file, { headers });
      {response.data && alert("Archivo subido correctamente.")};
    } catch (error) {
      console.error("Error al subir el archivo:", error);
    }
  };

  return (
    <div>
      <h1>Subir archivo al bucket</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className="importantButton">Subir archivo</button>
    </div>
  );
};

export default FileUploader;
