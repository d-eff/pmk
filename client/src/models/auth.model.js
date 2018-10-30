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
      this.data.token = response.data.token;
      return true;
    } catch (err) {
      return err;
    }
  }
}

const auth = new Auth();
Object.freeze(auth);

export default auth;
