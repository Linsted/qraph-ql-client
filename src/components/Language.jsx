import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";

export default function Language() {
  let { code } = useParams();
  const GET_LANGUAGE = gql`
    query GetLanguage($code: ID!) {
      language(code: $code) {
        name
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_LANGUAGE, {
    variables: { code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return <div>{data.language.name}</div>;
}
