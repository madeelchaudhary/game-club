import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const params = useParams();
  return <div>GameDetailPage {params.id}</div>;
};

export default GameDetailPage;
