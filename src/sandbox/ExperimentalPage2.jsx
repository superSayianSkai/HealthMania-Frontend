const ExperimentalPage2 = () => {
  const myName = " Hello World  ";
  const upperCase = (str) => str.toUpperCase();
  const trimIt = (str) => str.trim();
  const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
  const result = wrap(trimIt(upperCase(myName)));
  console.log(result);
  return <div>Hey hello </div>;
};

export default ExperimentalPage2;
