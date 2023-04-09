/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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
  BASE_URI: 'https://api.team-up.tk',
  headers: {
    'Content-Type': 'application/json',
  },
  async post(endpoint: string, body: unknown) {
    return await fetch(this.BASE_URI + endpoint, {
      method: 'post',
      headers: this.headers,
      body: JSON.stringify(body),
    });
  },
  async get(endpoint: string) {
    return await fetch(this.BASE_URI + endpoint);
  },
  async delete(endpoint: string) {
    return await fetch(this.BASE_URI + endpoint, {
      method: 'delete',
    });
  },
  async put(endpoint: string) {
    return await fetch(this.BASE_URI + endpoint, {
      method: 'put',
    });
  },
};

export default {
  async ping() {
    return await api.get('/ping');
  },
  async signup(body: User) {
    return await api.post('/users', body);
  },
  async verify(token: string) {
    return await api.put(`/users/verify/${token}`);
  },
  async remove(token: string) {
    return await api.delete(`/users/${token}`);
  },
  async findByName(name: string) {
    return await api.get(`/users/?name=${name}`);
  },
  async findBySkills(skills: string[]) {
    const s = skills.map((e) => `skills=${e}`).join('&');
    return await api.get(`/users/?${s}`);
  },
  parseErrors(body: ErrorResponse) {
    return body.errors.map((e) => `${e.label.split('.')[1]}: ${e.message}`);
  },
};
