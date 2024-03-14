import GithubIcon from "../icons/GithubIcon";
import PreviewIcon from "../icons/PreviewIcon";
import RedirectIcon from "../icons/RedirectIcon";

function ProjectItem({ title, img, text, stack }) {
  return (
    <article className="flex gap-7">
      <img className="object-cover w-80 h-50 rounded-sm " src={img}></img>
      <div>
        <div className="flex gap-3 items-center cursor-pointer  mb-2 mr-auto">
          <h5 className="text-4xl font-bold ">{title}</h5>
          <RedirectIcon className="w-6 "></RedirectIcon>
        </div>
        <p>{text}</p>
        <div className="mt-3 flex gap-2 mb-2">
          <button className="border rounded-sm py-2 px-4 flex items-center gap-1">
            <GithubIcon className="text-xl"></GithubIcon>
            Github
          </button>
          <button className="border rounded-sm py-2 px-4 flex items-center gap-1">
            <PreviewIcon className="text-xl"></PreviewIcon>
            Live
          </button>
        </div>
        {stack &&
          stack.map((item) => {
            return <span className="text-stone-600 text-xs">{item.name} </span>;
          })}
      </div>
    </article>
  );
}

export default ProjectItem;
