class Store {
  state;

  subscribers = new Map();

  rootReducer;

  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = this.rootReducer();
  }

  subscribe(callback) {
    this.subscribers.set(callback, callback);
    callback(this.state);
  }

  unsubscribe(callback) {
    if (this.subscribers.has(callback)) {
      this.subscribers.delete(callback);
    }
  }

  sendChanges() {
    this.subscribers.forEach((callback) => callback(this.state));
  }

  dispatch(action) {
    this.state = this.rootReducer(this.state, action);
    this.sendChanges();
  }

  getState() {
    return this.state;
  }
}

//new Store().subscribe(() => console.log("Hello"));

function createStore1() {
  let store;

  return (rootReducer) => {
    if (!store) {
      store = new Store(rootReducer);
    }
    return store;
  };
}

export const createStore = (() => {
  let store;

  return (rootReducer) => {
    if (!store) {
      store = new Store(rootReducer);
    }
    return store;
  };
})();
