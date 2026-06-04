# Children Bank

Children Bank is a production-ready Node.js web application for learning-friendly child banking experiences.

## Tech Stack

- Node.js
- Express.js
- EJS templates
- Bootstrap 5

## Features

- Home, Dashboard, Savings Goals, Piggy Bank, Transactions, Parent Approval, About pages
- Realistic dummy banking data (balance, goals, rewards, transaction history)
- MVC folder structure
- Health endpoint at `/health`
- Dockerfile for containerization
- Kubernetes manifests for deployment and service

## Project Structure

```text
children-bank/
├── app.js
├── package.json
├── Dockerfile
├── controllers/
├── models/
├── views/
├── routes/
├── public/
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
└── README.md
```

## Local Setup

```bash
npm install
npm start
```

Application runs at `http://localhost:3000`.

Health check:

```bash
curl http://localhost:3000/health
```

## Docker

```bash
docker build -t children-bank:latest .
docker run -p 3000:3000 children-bank:latest
```

## Kubernetes (Kind / ArgoCD learning flow)

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

This repository structure is ready to be used in a GitOps flow:

GitHub Repo -> Node App -> Docker Image -> Kind Cluster -> ArgoCD Application -> ApplicationSet
