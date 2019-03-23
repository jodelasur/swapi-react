const PEOPLE_URL = "https://swapi.co/api/people/";

const fetchUsers = query =>
    fetch(`${PEOPLE_URL}?search=${query}`)
        .then(response => response.json())
        .then(data => (
            data.results.map(user => ({
              url: user.url,
              name: user.name,
              height: user.height,
              mass: user.mass,
              gender: user.gender,
              edited: user.edited,
              vehicleUrls: user.vehicles,
            }))
        ));

export {
  fetchUsers,
};