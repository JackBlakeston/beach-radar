import { ICoordinates } from "../interfaces";

const degreesToRadians = (degrees: number) => {
  return degrees * Math.PI / 180;
}

const distanceInKmBetweenEarthCoordinates = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  var earthRadiusKm = 6371;

  var dLat = degreesToRadians(lat2-lat1);
  var dLon = degreesToRadians(lon2-lon1);

  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return earthRadiusKm * c;
}

const getDistance = (userCoord: ICoordinates, beachCoord: ICoordinates) => {
  const userLat = userCoord.lat;
  const userLon = userCoord.lon;
  const beachLat = beachCoord.lat;
  const beachLon = beachCoord.lon;

  return +distanceInKmBetweenEarthCoordinates(userLat, userLon, beachLat, beachLon).toFixed(2);
}

export default getDistance;