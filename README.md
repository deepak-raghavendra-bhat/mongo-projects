# mongo-projects
#docker command to create the db

docker run --name mongodb -p 27017:27017 -v /home/ubuntu/dee_softwares/mongo/docker_volume:/data/db -d mongo
