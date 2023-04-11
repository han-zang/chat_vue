docker build -t chat_vue_img .
docker rm chat_vue
docker run -p 5173:5173 --name chat_vue -v "$pwd":/app chat_vue_img