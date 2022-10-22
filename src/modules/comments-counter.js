const commentsCounter = (response, elementid) => {
  const el = document.getElementById(elementid);
  const commentBtn = el.querySelector('.comments-btn');
  commentBtn.innerHTML = `Comment ${response.length}`;
};

const getCommentCounterApi = async (cArr) => {
  for (let i = 0; i < cArr.length; i += 1) {
    const commentUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CleVZYCORgbN3niQTjHc/comments?item_id=${cArr[i]}`;
    // eslint-disable-next-line no-await-in-loop
    await fetch(commentUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((json) => {
          commentsCounter(json, cArr[i]);
        });
      } else {
        commentsCounter([], cArr[i]);
      }
    });
  }
};

export default getCommentCounterApi;