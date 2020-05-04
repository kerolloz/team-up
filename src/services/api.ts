interface User {
  name: string;
  email: string;
  skills: string[];
}
interface ErrorResponse {
  message: string;
  errors: { label: string; type: string; message: string }[];
}

const api = {
  headers: {
    'Content-Type': 'application/json',
  },
  async post(uri: string, body: {}) {
    return await fetch(uri, {
      method: 'post',
      headers: this.headers,
      body: JSON.stringify(body),
    });
  },
  async get(uri: string) {
    return await fetch(uri);
  },
  async delete(uri: string) {
    return await fetch(uri, {
      method: 'delete',
    });
  },
};

export default {
  BASE_URI: 'https://api-team-up-fci.herokuapp.com',
  async signup(body: User) {
    return await api.post(`${this.BASE_URI}/users`, body);
  },
  async verify(token: string) {
    return await api.post(`${this.BASE_URI}/users/verify/${token}`, {});
  },
  async remove(token: string) {
    return await api.delete(`${this.BASE_URI}/users/${token}`);
  },
  async findByName(name: string) {
    return await api.get(`${this.BASE_URI}/users/?name=${name}`);
  },
  async findBySkills(skills: string[]) {
    const s = skills.map((e) => `skills=${e}`).join('&');
    return await api.get(`${this.BASE_URI}/users/?${s}`);
  },
  parseErrors(body: ErrorResponse) {
    return body.errors.map((e) => `${e.label.split('.')[1]}: ${e.message}`);
  },
};
