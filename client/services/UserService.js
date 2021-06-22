export async function getAllUsers() {

  const response = await fetch('/users');
  return await response.json();
}

export async function createUser(data) {

  console.log(data);
  
  const response = await fetch(`http://localhost:4000/users/register`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
  return await response.json();
}

export async function loginUser(data) {

  const response = await fetch(`http://localhost:4000/users/authenticate`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
  })
  var response_data = await response.json();

  return(response_data);
}

export async function submitForm(data) {
  
  console.log(data);
  const response = await fetch(`http://localhost:4000/users/submitForm`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
  })
  var response_data = await response.json();
  
  return(response_data);
}

export async function getUser(data) {

  const username = data
  const response = await fetch(`http://localhost:4000/users/${username}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
  })
  var response_data = await response.json();
  
  return(response_data);
}