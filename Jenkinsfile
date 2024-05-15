pipeline {
    agent any
    environment {
        DOCKER_PATH = "C:\\Program Files\\Docker\\cli-plugins"
        PATH = "${DOCKER_PATH}:${PATH}"
        //DOCKERHUB_CREDENTIALS = credentials('DockerHub')
        NODEJS_PATH = "C:\\Program Files (x86)\\nodejs"
    }
    stages {
        stage('Install Node.js and npm') {
            steps {
                script {
                    // Utilisation de l'outil Node.js installé sur Jenkins
                    def nodejs = tool name: 'NODEJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${nodejs}/bin:${env.PATH}"
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // Installation des dépendances du projet, y compris Express
                    bat "npm install express"
                    bat "npm install"
                }
            }
        }
        stage('Checkout') {
            steps {
                script {
                    // Récupération du code depuis le référentiel source
                    checkout scm
                }
            }
        }
        stage('Build & tag Docker Image') {
            steps {
                script {
                    // Construction de l'image Docker et ajout d'un tag
                    bat "docker build -t back_rendezvous:latest ."
                    bat "docker tag back_rendezvous:latest arijchetoui1/back_rendezvous:latest"
                }
            }
        }
        stage('Deploy Docker image to Docker Hub') {
            steps {
                script {
                    // Déploiement de l'image Docker sur Docker Hub
                    docker.withRegistry('https://index.docker.io/v1/', 'DOCKERHUB_CREDENTIALS') {
                        docker.image('arijchetoui1/back_rendezvous:latest').push()
                    }
                }
            }
        }
        stage('Deploy with docker-compose ') {
            steps {
                script {
                    // Déploiement avec docker-compose
                    bat "docker-compose up"
                }
            }
        }
    }
}
