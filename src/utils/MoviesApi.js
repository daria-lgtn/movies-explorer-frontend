class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _fetch({ url, method }) {
    return fetch(`${this._baseUrl}${url}`, {
      method,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  movies() {
    return this._fetch({
      url: `/beatfilm-movies`,
      method: "GET",
    });
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: `https://api.nomoreparties.co`,
});
