const addLikes = async (id) => {
  const addLikesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CleVZYCORgbN3niQTjHc/likes';
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  };
  await fetch(addLikesUrl, parameters);
};

export default addLikes;