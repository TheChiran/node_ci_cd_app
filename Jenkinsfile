pipeline {
    agent any
    
    environment {
        GIT_URL = "https://github.com/TheChiran/node_ci_cd_app.git/"
        IMAGE_NAME = 'chiran97/node_ci_cd'
        IMAGE_TAG = "${IMAGE_NAME}:${env.GIT_COMMIT}"
    }
    
    stages {
        stage("Clone Git Repository") {
            steps {
                git(
                    url: "${GIT_URL}",
                    branch: "main",
                    changelog: true,
                    poll: true
                )
            }
        }

        stage('Login to docker hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                sh 'echo ${PASSWORD} | docker login -u ${USERNAME} --password-stdin'}
                echo 'Login successfully'
            }
        }

        stage('Build Docker Image')
        {
            steps
            {
                sh 'docker build -t ${IMAGE_TAG} .'
                echo "Docker image build successfully"
                sh 'docker image ls'
                
            }
        }

        stage('Push Docker Image')
        {
            steps
            {
                sh 'docker push ${IMAGE_TAG}'
                echo "Docker image push successfully"
            }
        }   

        stage('Remove / Stop previous')
        {
            steps
            {
                sh 'docker compose down'
            }
        }

        stage('Start with new updates')
        {
            steps
            {
                sh 'docker compose up -d'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
