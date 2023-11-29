import { Blueprint, LikeYou, More } from '../../components/exports';
import Services from '../Services/Services';

const Main = () => {
  return (
    <div id='main'>
      <Services />
      <Blueprint />
      <LikeYou />
      <More />
    </div>
  );
};

export default Main;
