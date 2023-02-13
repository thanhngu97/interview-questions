class Stack {
  constructor() {
    this.items = [];
  }

  find(conditionFn) {
    const foundItems = this.items.find(conditionFn);
    console.log(foundItems);
    return foundItems;
  }

  push(...elArr) {
    elArr.forEach((el) => this.items.push(el));
    console.log(this.items);
    return this.items;
  }

  pop() {
    if (this.isEmpty()) console.log("There is no element to remove.");
    const removedItem = this.items.pop();
    console.log(removedItem);
    return removedItem;
  }

  size() {
    console.log(this.items.length);
    return this.items.length;
  }

  isEmpty() {
    console.log(this.items.length === 0);
    return this.items.length === 0;
  }
}

const example = new Stack();
example.isEmpty();
example.push(1);
example.push(3, 4, 5, 6);
example.size();
example.pop();
example.find((el) => el > 3);
