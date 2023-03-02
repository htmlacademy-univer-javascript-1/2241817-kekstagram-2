function getRandomNumber (min, max) {
  return Math.random()*(max-min)+min;
}

function checkCommentSize (comm, maxSize) {
  if (comm <= maxSize) {
    return true;
  }
  return false;
}

getRandomNumber (3, 9);
checkCommentSize ('nice job', 20);
