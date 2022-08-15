import { atom } from "recoil";
import { Project } from "../models";
import { localStorageEffect } from "../utils/local-storage";

const projectListAtom = atom<Project[]>({
  key: "project-list",
  default: [],
  effects_UNSTABLE: [localStorageEffect<Project[]>("PROJECTS_LIST_KEY")],
});

const projectListModalAtom = atom<boolean>({
  key: "project-list-modal",
  default: false,
});

export { projectListAtom, projectListModalAtom };
