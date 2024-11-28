import AiQueries from "../component/AIQueries";
import { useParams } from "react-router";
const AIQuery = () => {
  console.log(useParams())
  return (
    <div>
      <AiQueries /> 
    </div>
  );
};

export default AIQuery;
