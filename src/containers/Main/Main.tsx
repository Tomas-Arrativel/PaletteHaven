import { Blueprint, Contact, LikeYou, More } from '../../components/exports';
import Questions from '../Questions/Questions';
import Services from '../Services/Services';

const Main = () => {
  return (
    <div id='main'>
      <Services />
      <Blueprint />
      <LikeYou />
      <More />
      <Questions />
      <Contact />
    </div>
  );
};

export default Main;
