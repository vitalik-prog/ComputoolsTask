export const getRandomUserId = (minId = 1, maxId = 12) => {
  let rand = minId - 0.5 + Math.random() * (maxId - minId + 1);
  return String(Math.round(rand));
}
