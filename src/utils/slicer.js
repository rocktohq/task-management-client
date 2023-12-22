const stringSlicer = (str) => {
  if (str?.length >= 40) {
    return str?.slice(0, 37) + "...";
  }
  return str;
};

export { stringSlicer };
