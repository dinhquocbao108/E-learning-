export const USER_LOGIN = "USER_LOGIN";
const userLocal = {
  set: (userData) => {
    // const newUser ={...userData,coursesList:[]};
    // localStorage.setItem(USER_LOGIN, JSON.stringify(newUser));
    localStorage.setItem(USER_LOGIN, JSON.stringify(userData));
  },
  get: () => {
    let userJson = localStorage.getItem(USER_LOGIN);
    if (userJson != null) {
      return JSON.parse(userJson);
    } else {
      return null;
    }
  },
  remove: () => {
    localStorage.removeItem(USER_LOGIN);
  },
};
export default userLocal;
