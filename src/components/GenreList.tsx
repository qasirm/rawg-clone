import useGenres, { Genre } from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
