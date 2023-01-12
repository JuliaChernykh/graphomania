export class Api {
  authorize({login, password}: {login: string; password: string}) {
    return fetch('url', {
      method: 'POST',
      body: JSON.stringify({login, password}),
    }).then(res => res.json());
  }

  register({login, password}: {login: string; password: string}) {
    return fetch('url', {
      method: 'POST',
      body: JSON.stringify({login, password}),
    }).then(res => res.json());
  }
}

export const api = new Api();
