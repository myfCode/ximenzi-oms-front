export const useCheckLogin = () => {
  const hasLogin = sessionStorage.getItem("hasLogin");

  return [hasLogin];
};
