import { EventEmitter } from "./EventEmitter";

(document.querySelector("#app") as HTMLElement).innerHTML = `
<input name="input1" placeholder="Enter some text..." />
<h1></h1>
<input name="input2" placeholder="Enter some text..." />
`;
const input1 = document.querySelector("input[name=input1") as HTMLInputElement;
const input2 = document.querySelector("input[name=input2") as HTMLInputElement;
const header = document.querySelector("h1") as HTMLHeadingElement;

const eventEmitter = new EventEmitter<{
  changeText: (arg: string) => void;
  click: () => void;
}>();

eventEmitter.on("changeText", (text) => (header.innerHTML = text));

input1.addEventListener("input", (ev) =>
  eventEmitter.trigger("changeText", (ev.target as HTMLInputElement).value)
);
input2.addEventListener("input", (ev) =>
  eventEmitter.trigger("changeText", (ev.target as HTMLInputElement).value)
);

eventEmitter.trigger("some", "test");
eventEmitter.trigger("changeText", []);