class MainApi {
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

      return res
        .json()
        .then((text) => Promise.reject(text.message ?? "Ошибка"));
    });
  }

  me(jwt) {
    if (jwt) {
      this._token = jwt;
    }

    return this._fetch({
      url: `/users/me`,
      method: "GET",
    });
  }

  update(data) {
    return this._fetch({
      url: `/users/me`,
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  signUp(data) {
    return this._fetch({
      url: `/signup`,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  signIn(data) {
    return this._fetch({
      url: `/signin`,
      method: "POST",
      body: JSON.stringify(data),
    }).then((data) => {
      if (data.token) {
        this._token = data.token;
      }
      return data;
    });
  }

  like(data) {
    return this._fetch({
      url: `/movies`,
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  likeUndo(id) {
    return this._fetch({
      url: `/movies/${id}`,
      method: "DELETE",
    });
  }

  movies() {
    return this._fetch({
      url: `/movies`,
      method: "GET",
    }).then((data) => data.data);
  }
}

export const mainApi = new MainApi({
  baseUrl: `https://api.daria-lgtn-movies.nomoredomains.xyz`,
  headers: {
    "Content-Type": "application/json",
  },
});
