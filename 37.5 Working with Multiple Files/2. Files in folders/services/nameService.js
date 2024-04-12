let name = "Anonymous";

const set = (newName) => {
  name = newName;
};

const get = () => {
  return name;
};

export { get, set };