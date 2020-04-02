export const isMobile = () => {
  let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  return isMobile
}