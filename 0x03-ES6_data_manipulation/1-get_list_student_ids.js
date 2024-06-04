export default function getListStudentIds(items) {
  if (!Array.isArray(items)) {
    return [];
  }

  return items.map((item) => item.id);
}
