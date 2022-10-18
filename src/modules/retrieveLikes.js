const retrieveLikes = async () => {
  const retrieveLikesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CleVZYCORgbN3niQTjHc/likes';
  const response = await fetch(retrieveLikesUrl);

  return response.json();
};
retrieveLikes();
export default retrieveLikes;