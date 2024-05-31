import ClassRoom from './0-classroom';

/**
 * Initializes an array of {@link ClassRoom} instances with predefined sizes.
 * @returns {ClassRoom[]} An array of {@link ClassRoom} instances.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
