/**
 * Represents a classroom.
 */
export default class ClassRoom {
  /**
     * Creates a new instance of {@link ClassRoom}.
     * @param {number} maxStudentsSize - The maximum number of students
     * allowed in the class.
     */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
