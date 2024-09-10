export interface IProjectArgs {
  projectID: number;
}

export type UniqueEntityArgs<T extends {}> =
  | T
  | { project: { projectID: number } }
  | ({ project: { projectID: number } } & T);

export interface ICreateProjectArgs {
  projectName: string;
}
