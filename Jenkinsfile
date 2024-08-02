pipeline {
    agent any
    options {
        disableConcurrentBuilds()
    }
    stages {
        stage('Prepare') {
            tools {
                nodejs 'node-21.11.1'
            }
            steps {
                sh 'npm install'
                sh 'icongenie generate -m pwa -i ./public/logo.png'
            }
        }
        stage('Build') {
            tools {
                nodejs 'node-21.11.1'
            }
            steps {
                sh 'quasar build -m pwa'
                sh 'chown -R jenkins:jenkins ./dist/pwa'
            }
        }
    }
}
