saveAudio = curl -X POST --data-binary @C:\Users\Asus\Downloads\
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type:WAV"\
"https://storage.googleapis.com/upload/storage/v1/b/bucket_test_telepatia/o?uploadType=media&name=audio%Ftest.wav"

export default saveAudio