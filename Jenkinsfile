library 'name-echo'
pipeline {
  agent any
  stages {
    stage("Run FE") {
      steps {
        echo "${GIT_BRANCH}"
        hello "HELO"
      }
    }
  }
}