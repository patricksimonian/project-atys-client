#!/bin/bash
imageName=project-atys-client:latest
containerName=atys-fe

docker build -t $imageName -f Dockerfile  .

echo Delete old container...
docker rm -f $containerName

echo Run new container...
docker run --rm -it -p 3000:3000 --name $containerName $imageName
