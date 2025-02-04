import AiQueries from "../component/AIQueries";
import { useParams } from "react-router";
const AIQuery = () => {
  console.log(useParams())
  return (
    <div className="]">
      <AiQueries /> 
    </div>
  );
};

export default AIQuery;
