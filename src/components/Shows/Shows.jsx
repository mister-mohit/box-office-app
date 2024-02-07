import { useStarredShows } from '../lib/useStarredShows';
import ShowCard from './ShowCard';

const Shows = ({ show }) => {
  const [starredShows, dispatchStarredShows] = useStarredShows();
  const starMe = showId => {
    const isStarred = starredShows.includes(showId);

    if (isStarred) {
      dispatchStarredShows({ type: 'Unstar', id: showId });
    } else {
      dispatchStarredShows({ type: 'Star', id: showId });
    }
  };

  return (
    <div>
      {show.map(data => {
        return (
          <ShowCard
            key={data.id}
            id={data.show.id}
            name={data.show.name}
            summary={data.show.summary}
            image={
              data.show.image
                ? data.show.image.medium
                : '../lib/image-not-found.png'
            }
            starMe={starMe}
            isStarred={starredShows.includes(data.show.id)}
          />
        );
      })}
    </div>
  );
};

export default Shows;
