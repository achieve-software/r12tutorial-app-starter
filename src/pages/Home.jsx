import axios from "axios";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";

const Home = () => {
  const getTutorials = async () => {
    const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/";
    await axios(BASE_URL);
    const data = await axios(BASE_URL);
    console.log(data);
  };

  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;
