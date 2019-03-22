const PEOPLE_URL = "https://swapi.co/api/people/";

const fetchUsers = query =>
    fetch(`${PEOPLE_URL}?search=${query}`)
        .then(response => response.json());

export {
  fetchUsers,
};