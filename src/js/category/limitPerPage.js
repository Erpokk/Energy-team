export function getLimitByPage() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 768) {
    return 12;
  }

  return 9;
}