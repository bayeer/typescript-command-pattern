import { App } from './App';
import { InputHandler } from "./InputHandler";

window.addEventListener("DOMContentLoaded", () => {
  const inputHandler = new InputHandler();
  const app = new App(inputHandler);
  app.run();
});
