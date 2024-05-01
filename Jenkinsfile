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
                    def nodejs = tool name: 'NODEJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${nodejs}/bin:${env.PATH}"
                }
            }
        }

        stage('Checkout') {
            steps {
                script {
                    checkout scm
                }
            }
        }

        stage('Build & rename Docker Image') {
            steps {
                script {
                    // Construisez l'image Docker
                    bat "docker build -t back_rendezvous:latest ."
                    bat "docker tag back_rendezvous:latest arijchetoui1/back_rendezvous:latest"
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    bat "docker-compose up --build"
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    // Exécutez le conteneur Docker en utilisant l'image construite
                    bat "docker run -d -p 3003:3003 --name back_rendezvous_container_latest arijchetoui1/back_rendezvous:latest"
                }
            }
        }
        stage('Deploy Docker image') {
            steps {
                script {
                    // Push Docker image to Docker Hub
                     docker.withRegistry('https://index.docker.io/v1/', '14') {
                        // Push both the latest and tagged images
                        docker.image('arijchetoui1/back_rendezvous:latest').push()
                    }
                }
            }
        }
    }
}