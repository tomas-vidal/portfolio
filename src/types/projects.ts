export type projectType = {
  title: string;
  imgUrl: string;
  text: string;
  stack: any;
  projectUrl: urlType;
  githubUrl: urlType;
};

type urlType = `http://www.${string}`;
