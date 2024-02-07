import { Link } from "react-router-dom";

const ShowCard = ({ id, name, image, summary, starMe, isStarred }) => {

  const summaryStr = summary
    ?.replace(/<\/?p>/g, '')
    .split(/\s+/)
    .slice(0, 10)
    .join(' ');
  
  return (
    <div>
      <img src={image} alt="Show Image" />
      <h2>{name}</h2>
      <p>{summaryStr}</p>
      <Link href={`/show/${id}`} target='_blank' rel='noreferrer'>Read More..</Link>
      <button type="button" onClick={() => starMe(id)}>{isStarred ? 'Unstar Me' : 'Star Me'}</button>
    </div>
  );
};

export default ShowCard;
