import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { projectListAtom, projectListModalAtom } from "../../recoil";
import Modal from "../modal";

const ProjectsFormModal = () => {
  const setProjects = useSetRecoilState(projectListAtom);
  const [modalProjectsVisible, setModalProjectsVisible] =
    useRecoilState(projectListModalAtom);
  const [form, setForm] = React.useState({
    title: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjects((projects) => [...projects, form]);
    setModalProjectsVisible(false);
  };

  return (
    <Modal
      isOpen={modalProjectsVisible}
      closeModal={() => setModalProjectsVisible(false)}
      title="Modal testing"
    >
      <form className="relative mt-4 group" onSubmit={handleSubmit}>
        <div className="grid gap-1 mb-4">
          <label className="text-sm text-gray-500">Project title</label>
          <input
            className="w-full py-2 pl-10 text-sm leading-6 rounded-md shadow-sm appearance-none focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-900 placeholder-slate-400 ring-1 ring-slate-200"
            type="text"
            aria-label="Project title"
            placeholder="Project title..."
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div className="grid gap-1 mb-4">
          <label className="text-sm text-gray-500">Project category</label>
          <input
            className="w-full py-2 pl-10 text-sm leading-6 rounded-md shadow-sm appearance-none focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-900 placeholder-slate-400 ring-1 ring-slate-200"
            type="text"
            aria-label="Project category"
            placeholder="Project category..."
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
        </div>

        <button type="submit" className="btn-default">
          Create
        </button>
      </form>
    </Modal>
  );
};

export default ProjectsFormModal;
