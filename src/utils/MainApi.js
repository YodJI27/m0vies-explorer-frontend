const BASE_MAIN_URL = 'https://api.mydiploma.students.nomoredomains.monster';
let token = localStorage.getItem('jwt');

function responce(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(
      new Error(`Ошибка ${res.status} - ${res.statusText}`)
    );
  }
}

export const getUserInfo = () => {
  return fetch(`${BASE_MAIN_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
    .then(responce)
    .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
};

export const register = (name, email, password) => {
  return fetch(`${BASE_MAIN_URL}/signup`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then(responce)
    .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
};

export const login = (email, password) => {
  return fetch(`${BASE_MAIN_URL}/signin`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email, password }),
  })
    .then(responce)
    .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
};

export const getSavedMovies = () => {
  return fetch(`${BASE_MAIN_URL}/movies`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
    .then(responce)
    .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
};

export const addToSavedMovies = (movie) => {
  return fetch(`${BASE_MAIN_URL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(movie),
  })
    .then(responce)
    .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
};

export const removeSaveMovie = (movie) => {
  return fetch(`${BASE_MAIN_URL}/movies/${movie}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  })
    .then(responce)
    .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
};

export const authApiToken = (tokenn) => {
    return fetch(`${BASE_MAIN_URL}/users/me`, {
      method: "GET",
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json",
        'Authorization': `Bearer ${tokenn}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  };

export const updateUserInfo = (names, emails) => {
  return fetch(`${BASE_MAIN_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: names,
      email: emails,
    }),
  })
    .then(responce)
    .catch((err) => console.log(`Ошибка ${err.status} - ${err.statusText}`));
};