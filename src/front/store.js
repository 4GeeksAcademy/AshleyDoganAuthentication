// require('dotenv').config();

export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      },
    ],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "set_hello":
      return {
        ...store,
        message: action.payload,
      };

    case "add_task":
      const { id, color } = action.payload;

      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        ),
      };

    case "handleLogin":
      const { email, password } = action.payload;

      const login = async () => {
        let response = await fetch(
          process.env.VITE_BACKEND_URL + "/api/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: password }),
          }
        );

        if (response.status != 200) {
          console.log(
            "there was an error while attempting to login:",
            response.status,
            response.statusText
          );
          return false;
        }
        let data = await response.json();
        console.log(data);
        sessionStorage.setItem("token", data.token);
        return true;
      };

      login();

    default:
      throw Error("Unknown action.");
  }
}
