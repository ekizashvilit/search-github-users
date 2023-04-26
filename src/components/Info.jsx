import { useGlobalContext } from '../context/context';

const Info = () => {
  const data = useGlobalContext();
  console.log(data);

  return <div>Info</div>;
};

export default Info;
