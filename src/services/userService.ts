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

export const login = (userName: string, password: string) : Promise<any> => {
  const req = {
    userName,
    password,
  };
  return fetch("http://localhost:4000/api/login", {
    method: "POST",
    credentials: 'include',
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => res);
};
