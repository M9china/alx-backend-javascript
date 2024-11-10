import ClassRoom from './0-classroom';
/**
  * creates a function
  * That returns an array of 3 objects
  */

export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
