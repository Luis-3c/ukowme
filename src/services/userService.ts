export const signUp = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = {
          name: "Luis",
          userName: "luis3c",
          email: "luis3c@gmail.com",
        };
        resolve(user);
      }, 1000);
    });
  };

  export const login = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = {
          name: "Luis",
          userName: "luis3c",
          email: "luis3c@gmail.com",
        };
        resolve(user);
      }, 1000);
    });
  };