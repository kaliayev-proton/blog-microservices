# BLOG Microservices

## Infra

We are using Docker with Kubernetes

Previously you have to install Minikube and Docker in your OS

### Working in local

If we want to work in local we use Minikube: `minikube start`

Deploy one micro in K8s:

1. Move to /infra/k8s
2. Execute: `kubectl apply -f posts.yaml`
3. Get pods and check it is created: `kubectl get pods`

NOTE: you have to execute in the same terminal: `eval $(minikube -p minikube docker-env)` and next, build the docker image. Then you can create the posts pod with: `kubectl create -f infra/k8s/posts.yaml`

Other commands:

- Execute a command: `kubectl exec -it <pod-name> -- <cmd>`
- Delete pod: `kubectl delete pod <pod-name>`
- Get pod logs: `kubectl logs <pod-name>`
- Get pod description (includes events list): `kubectl describe <pod-name>`
- Get deployments: `kubectl get deployments`

### Alias

Use `k` instead of `kubectl`

### Deployments

When we execute a deploy with K8s we create a pod by default and if we get pods we see a pod with the name of the deployment plus a code. And if delete that pod will see that a new pod is recreated automatically with a new code

Get info from the deployment: `kubectl describe deployment <name-of-deployment>`

If we want to remove: `kubectl delete deployment <name-of-deployment>`

### Update deployments: rebuild and upgrade the version

1. Make a change in the project
2. Rebuild docker image with a new version: `docker build . -t blog/posts:0.0.2`
3. Update the version of the image in the deployment config file (inside /infra)
4. Run: `kubectl apply -f <deployment-file>`

### Deploy a image published in Docker Hub

1. Login in your local (you need a Docker Hub account): `docker login`
2. Create a repository "posts" (for example) in Docker Hub
3. Build docker image with the name of your account and the repo: `docker build . -t <my-docker-hub-user>/<docker-hub-repo>`
4. Push the image: `docker push <my-docker-hub-user>/<docker-hub-repo>`
5. Get the log to check the new version

### Services

Services provide networking between pods. Always we talk about microservices we have to think in "services".

Kind of services:

- **Cluster IP**: Sets up an easy-to-remember URL to access a pod. Only exposes pods in the cluster. (Communication between pods in the cluster, it is fundamental for microservices architectures)
- **Node Port**: Makes a pod accessible from outside the cluster. Usually only used for dev purposes. (Just development purposes!)
- **Load Balancer**: Makes a pod accessible from outside the cluster. This is the right way to expose a pod to the outside world. (Is like Node Port but the right way). It is used to make request from the browser or other clients like Postman
- **External Name**: Redirects an in-cluster request to a CNAME URL.
