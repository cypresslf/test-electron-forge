import { ipcRenderer } from "electron";

export const foo = () => ipcRenderer.invoke("test");
