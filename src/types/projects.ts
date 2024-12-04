export type projectType = {
  title: string;
  imgUrl: string;
  text: string;
  stack: stack;
  projectUrl: urlType;
  githubUrl: urlType;
};

type urlType = `http://www.${string}`;

type stackDetails = {
  name: string;
  icon: string;
};

type stack = {
  [key: string]: stackDetails;
};
