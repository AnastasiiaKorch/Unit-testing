export default function objHealth(obj) {
  let result;
  if (obj.health > 50) {
    result = "healthy"
  }
  else if (obj.health < 50 && obj.health > 15) {
    result = "wounded";
  }
  else {
    result = "critical"
  }
  return result
}