import styled from 'styled-components';
import { useGlobalContext } from '../context/context';

const Repos = () => {
  const { repos } = useGlobalContext();
  console.log(repos);

  return <div>Repos</div>;
};

const Wrapper = styled.div``;

export default Repos;
