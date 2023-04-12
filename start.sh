# git reset --hard origin/master
git pull

docker build -t chat_vue_img .

docker run -itd --rm -p 5173:5173 --name chat_vue -v $(pwd):/app chat_vue_img

#docker run --rm -it -v /Users/zanghan/git/chat_vue:/app  --name test debian:stable-slim /bin/bash