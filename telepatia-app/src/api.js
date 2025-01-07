saveAudio = curl -X POST --data-binary @OBJECT_LOCATION \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: OBJECT_CONTENT_TYPE" \
"https://storage.googleapis.com/upload/storage/v1/b/BUCKET_NAME/o?uploadType=media&name=OBJECT_NAME"