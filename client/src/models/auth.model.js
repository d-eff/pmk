import authService from '../api/auth.service';

class Auth {
  constructor() {
    this.data = {
      isAuthed: false,
      token: '',
    };
  }

  async login(username, password) {
    try {
      const response = await authService.login(username, password);
      const { token } = response.data;
      localStorage.setItem('token', token);
      this.data.token = token;
      return true;
    } catch (err) {
      return err;
    }
  }
}

const auth = new Auth();
Object.freeze(auth);

export default auth;
