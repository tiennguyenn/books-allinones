import { readable, writable } from "svelte/store";

export const userprefs = writable({
  language: "en",
  theme: "light",
});

export const timer = readable(null, (set) => {
  const timer = setInterval(() => {
    set(new Date().toLocaleTimeString());
  }, 1000);

  return () => {
    clearInterval(timer);
  };
});
