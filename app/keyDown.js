export default function keyDownHandler(e, func, ...params) {
  if (e.key.toLowerCase() !== "tab" && e.key.toLowerCase() !== "shift") {
    func(...params);
  }
}
