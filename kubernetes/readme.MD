# Kubernetes

[Exercise instructions](https://btholt.github.io/complete-intro-to-containers/kompose)

## Diversions from the course

- Kompose up command is no longer available. Instead convert docker-compose
  to kubernetes config files using `kompose convert`. We can put all the config
  in a folder using the `-o` flag. `kompose convert -o k8s/`. The slash at the end
  is needed for the -o flag, else it would put everything in a file instead of a directory.
- Create the actual kubernetes pods, services and deployments using `kubectl apply -f k8s`.
  The `-f` takes the directory where the kubernetes config files are.

Also for kompose convert to work, kubectl needs to be listening on port 8080
`kubectl proxy --port=8080` as mentioned in the instructions
