const BASE_URL = 'https://api.tvmaze.com';

const getApi = async queryStr => {
  const response = await fetch(`${BASE_URL}${queryStr}`);
  const body = await response.json();
  return body;
};

export const searchShows = searchedStr =>
  getApi(`/search/shows?q=${searchedStr}`);

export const searchActors = searchedStr =>
  getApi(`/search/people?q=${searchedStr}`);

export const getShowById = showId => getApi(`/shows/${showId}`);

export const getShowByIds = async showIds => {
  const promises =  showIds.map(showId => getApi(`/shows/${showId}`));
  // eslint-disable-next-line no-undef
  const result = await Promise.all(promises);
  return result;
}
