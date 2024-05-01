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

        stage('Build & Tag Docker Image') {
            steps {
                script {
                    // Construire l'image Docker
                    bat "docker build -t arijchetoui1/back_rendezvous:latest ."
                    // Tag l'image Docker
                    bat "docker tag arijchetoui1/back_rendezvous:latest arijchetoui1/back_rendezvous:latest"
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

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    // Déployer les ressources Kubernetes
                    bat "kubectl apply -f kubernetes/deployment.yaml"
                }
            }
        }
    }
}
