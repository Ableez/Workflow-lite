const ProjectsCategories = () => {
  return (
    <div>
      <nav className="font-medium text-neutral-300 pb-4">Categories</nav>
      <div className="grid grid-flow-col gap-2 w-full">
        <div className="p-8 h-32 rounded-xl bg-red-300"></div>
        <div className="p-8 h-32 rounded-xl bg-blue-300"></div>
        <div className="p-8 h-32 rounded-xl bg-yellow-200"></div>
      </div>
    </div>
  );
};

export default ProjectsCategories;
