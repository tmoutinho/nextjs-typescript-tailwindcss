import ProjectList from "../components/projects-list";

const Home = () => {
  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-2 text-3xl font-bold">Hello world! 👋</h1>

      <div className="mb-4">
        <button type="button" className="btn-default">
          Open dialog
        </button>
      </div>

      <button className="mb-4 btn-primary">Testing reuse button</button>
      <button className="mb-4 btn">Testing reuse button</button>

      <ProjectList />
    </div>
  );
};

export default Home;
