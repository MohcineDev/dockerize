git config --global credential.helper store

# Docker things


> Docker can build images automatically by reading the instructions from a Dockerfile.
Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image.

### list running containers
docker ps

### list availabel images
> _docker images_


#### list hidden images
_docker images -a_    



#### list hidden images in quite mode ( only IDs)
docker images -aq


## build docker file and give the image a name
docker build -t express-node-app .

docker ps // list running containers
docker stop container-name // stop the running container

### remove the container 
docker rm container-name 
///remove all containers using the ID extrcted using the commande docker ps -aq
docker rm $(docker ps -aq)

### here the port is not published so the users can't access the web server
docker run --name express-node-app-container -d express-node-app 
// run the express-node-app image and give the container a name express-node-app-container and run it on the detach mode to hide the running logs


###  publishing ports creates a bridge between the isolated environment of the container and the outside world
### links a specific port on the container to a port on the host machine
### the container is running inside an isolated environment
### publishing a port connects a container port to a port on the docker host

## port forwarding 
### forward container port to local machine port

### forward the request comming from the port 4000 on the container to port 8080 on the host machine   
docker run --name express-node-app-container -d -p 4000:8080 express-node-app

build dockerfile ===>> docker image

### run commande inside the container --it = interactive terminal

docker exec -it express-node-app-container bash
