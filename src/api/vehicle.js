const fetchVehicleByUrl = url =>
    fetch(url)
        .then(response => response.json())
        .then(vehicle => ({
          url: vehicle.url,
          name: vehicle.name,
          model: vehicle.model,
          manufacturer: vehicle.manufacturer,
          vehicleClass: vehicle.vehicle_class,
        }));

export {
  fetchVehicleByUrl,
};