async function logUser(userdata) {
  const data = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdata),
  });

  if (!data.ok) {
    throw new Error(`HTTP ${data.status}: Failed to login`);
  }

  const response = await data.json();
  localStorage.setItem("token", `${response.token}`);
}

export { logUser };
