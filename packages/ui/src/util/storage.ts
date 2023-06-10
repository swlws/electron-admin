import { ref, watch } from "vue";

class Storage {
  key = "app-storage";
  cache = ref<Record<string, any>>({});

  constructor() {
    this.init();
  }

  init() {
    try {
      this.cache.value = JSON.parse(localStorage.getItem(this.key) || "{}");
    } catch (e) {}

    watch(this.cache.value, () => {
      localStorage.setItem(this.key, JSON.stringify(this.cache.value));
    });
  }

  setItem<T>(key: string, value: T) {
    this.cache.value[key] = value;
  }

  getItem<T>(key: string): T {
    return this.cache.value[key];
  }

  clear() {
    Object.keys(this.cache.value).forEach((key) =>
      this.setItem(key, undefined)
    );
  }
}

export const globalStorage = new Storage();
