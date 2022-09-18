export const todoService = {
  fetchTodos,
  deleteTodo,
  addTodo,
  updateTodo,
  loginMethod,
};

let apiUrl = "https://6314996efa82b738f74a8bce.mockapi.io/todos/";
let apiUrl2 = "https://6314996efa82b738f74a8bce.mockapi.io/users/";
// fetch data
function fetchTodos() {
  return fetch(apiUrl).then(async (res) => {
    const data = await res.json();
    console.log(data);
    return data;
  });
}
//get a user
function getUsers() {
  return fetch(apiUrl2).then(async (res) => {
    const users = await res.json();
    console.log(users);
    return users;
  });
}
async function loginMethod(email, password) {
  let user;
  await getUsers().then((res) => {
    user = res.filter(
      (user) => user.email === email && user.password === password
    );
  });

  if (user[0].username) {
    localStorage.setItem("user", user[0].username);
    return true;
  }
  return false;
}

// fetch a data
function fetchTodo(id) {
  return fetch(apiUrl + `${id}`).then(async (res) => {
    const data = await res.json();
    console.log(data);
    return data;
  });
}

//add todo
function addTodo(todo) {
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  }).then(async (res) => {
    const data = await res.json();
    return data;
  });
}

//update todo
async function updateTodo(id) {
  const todo = await fetchTodo(id);
  debugger;
  const uptTodo = { ...todo, isCompleted: !todo.isCompleted };
  return fetch(apiUrl + `${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(uptTodo),
  }).then(async (res) => {
    const data = await res.json();
    return data;
  });
}

//delete todo
function deleteTodo(id) {
  return fetch(apiUrl + `${id}`, {
    method: "DELETE",
  });
}
