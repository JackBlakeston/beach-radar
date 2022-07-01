import { get } from "firebase/database";
import { IBeach, ICoordinates } from "../interfaces";
import { dbRef } from "../services/firebase";
import getDistance from "./getDistance";

export const getBeaches = async (userCoordinates: ICoordinates) => {
  const snapshot = await get(dbRef);
  const beaches: IBeach[] = snapshot.val().beaches;

  beaches.forEach(beach => {
    const distance = getDistance(userCoordinates, beach.coordinates);
    beach.distance = distance;
  });
  const sortedBeaches: IBeach[] = beaches.sort((a, b) => {
    return a.distance - b.distance;
  });
  return sortedBeaches;
}