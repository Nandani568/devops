
## Normal Dockerfile
docker build -t fullstack-node-project .


## Multi-stage Dockerfile
docker build -t fullstack-node-project -f Dockerfile-multi-stage .

## multiplecontainer from single file [ default -Dockerfile ]
docker-compose up -d

## Choose specific Dockerfilebelow to build
docker-compose -f docker-compose.multi-stage.yml up --build

## Nodeport using kubernetes


