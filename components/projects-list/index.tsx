import { useRecoilValue, useSetRecoilState } from "recoil";
import { projectListAtom, projectListModalAtom } from "../../recoil";
import ProjectsFormModal from "./form-modal";

const ProjectCard = ({ title, category }) => {
  return (
    <li className="project-card">
      <dl className="grid items-center grid-cols-2 grid-rows-2 sm:block lg:grid xl:block">
        <div>
          <dt className="sr-only">Title</dt>
          <dd className="font-semibold group-hover:text-white text-slate-900">
            {title}
          </dd>
        </div>
        <div>
          <dt className="sr-only">Category</dt>
          <dd className="group-hover:text-blue-200">{category}</dd>
        </div>
        <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
          <dt className="sr-only">Users</dt>
          <dd
            x-for="user in project.users"
            className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5"
          ></dd>
        </div>
      </dl>
    </li>
  );
};

const ProjectList = () => {
  const projects = useRecoilValue(projectListAtom);
  const setModalProjectsVisible = useSetRecoilState(projectListModalAtom);

  return (
    <>
      <section className="border rounded-md">
        <header className="p-4 space-y-4 bg-white sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">Projects</h2>
          </div>
          <form className="relative group">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <input
              className="w-full py-2 pl-10 text-sm leading-6 rounded-md shadow-sm appearance-none focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-900 placeholder-slate-400 ring-1 ring-slate-200"
              type="text"
              aria-label="Filter projects"
              placeholder="Filter projects..."
            />
          </form>
        </header>
        <ul className="grid grid-cols-1 gap-4 p-4 text-sm leading-6 bg-slate-50 sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {projects.map((item, i) => (
            <ProjectCard key={i} {...item} />
          ))}

          <li className="flex">
            <button
              onClick={() => setModalProjectsVisible(true)}
              className="flex flex-col items-center justify-center w-full py-3 text-sm font-medium leading-6 border-2 border-dashed rounded-md hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group border-slate-300 text-slate-900"
            >
              <svg
                className="mb-1 group-hover:text-blue-500 text-slate-400"
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              New project
            </button>
          </li>
        </ul>
      </section>

      <ProjectsFormModal />
    </>
  );
};

export default ProjectList;
