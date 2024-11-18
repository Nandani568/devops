
## Normal Dockerfile
docker build -t fullstack-node-project .


## Multi-stage Dockerfile
docker build -t fullstack-node-project -f Dockerfile-multi-stage .

## multiplecontainer from single file [ default -Dockerfile ]
docker-compose up -d

## Choose specific Dockerfilebelow to build
docker-compose -f docker-compose.multi-stage.yml up --build

## clusterIp using kubernetes ->> internal commnication within node

kubectl apply -f clusterip.yaml
kubectl delete -f clusterip.yaml


## Nodeport using kubernetes --> external communication outside the node

kubectl apply -f nodeport.yaml
kubectl delete -f nodeport.yaml

## Nodeport using kubernetes --> external communication outside the node with nginx

kubectl apply -f nodeport-nginx.yaml
kubectl delete -f nodeport-nginx.yaml