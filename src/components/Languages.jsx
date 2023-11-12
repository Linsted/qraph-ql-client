import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

export default function Languages() {
  const GET_LANGUAGES = gql`
    query GetLanguages {
      languages {
        code
        name
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_LANGUAGES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      {data.languages.map((language) => (
        <Link key={language.code} to={`/${language.code}`}>
          <div>{language.name}</div>
        </Link>
      ))}
    </>
  );
}
