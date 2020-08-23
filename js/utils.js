function getTimestamp() {
  let d = new Date();
  return d.getTime();
}

function getRandom() {
  const min = 1;
  const max = 36;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}