const KEY = '18962627-3cde470dd8252503102b1f7f8';
const BASE_URL = `https://pixabay.com/api/`;

async function fetchImages() {
  const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this._searchQuery}&page=${this._page}&per_page=12&key=${KEY}`;

  return this.getData(url).then(response => {
    return response.hits;
  });
}

async function countImages() {
  const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this._searchQuery}&page=${this._page}&per_page=12&key=${KEY}`;

  return this.getData(url).then(response => {
    return response.totalHits;
  });
}

async function getData(url) {
  const images = await fetch(url);
  const response = await images.json();
  return response;
}

const api = {
  fetchImages,
  countImages,
  getData,
};

export default api;
