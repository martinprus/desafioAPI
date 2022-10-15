class ContainerMemory {
  constructor() {
    this.elements = [];
  }
  getAll() {
    if (this.elements.length > 0) {
      return this.elements;
    } else {
      return { mensaje: "Aun no hay elementos en la lista" };
    }
  }

  save(element) {
    element.id =
      this.elements.length === 0
        ? 1
        : this.elements[this.elements.length - 1].id + 1;
    this.elements.push(element);
    return element;
  }

  getbyID(id) {
    return this.elements.find((e) => e.id == id);
  }

  delete(id) {
    this.elements.filter((element) => element.id != id);
    return { success: true };
  }

  update(id, newData) {
    const elementIndex = this.elements.findIndex((e) => e.id == id);
    if (elementIndex == -1) return { error: true };

    this.elements[elementIndex] = {
      ...this.elements[elementIndex],
      ...newData,
    };

    return this.elements[elementIndex];
  }
}

module.exports = ContainerMemory;
