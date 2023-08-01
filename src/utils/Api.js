export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._token = null;
  }

  _fetch({ url, method, body }) {
    return fetch(`${this._baseUrl}${url}`, {
      method,
      headers: {
        ...this._headers,
        Authorization: `Bearer ${this._token}`,
      },
      body,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

export const api = new Api({
  baseUrl: `https://api.daria-lgtn-movies.nomoredomains.xyz/`,
  headers: {
    "Content-Type": "application/json",
  },
});
