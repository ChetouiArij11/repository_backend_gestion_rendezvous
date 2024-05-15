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
        stage('Install express , Dependencies') {
            steps {
                script {
                 bat "npm install express"
                 bat "npm install"
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

        stage('Deploy with docker-compose ') {
            steps {
                script {
                    // Deploy with docker-compose
                    bat "docker-compose up"
                }
            }
        }
    }
}