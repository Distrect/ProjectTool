import { Functionpoint, Project, Cocomo, Task } from '@prisma/client';
export type AllBaseEntites = Functionpoint | Project | Cocomo;
export { Functionpoint as BaseFunctionPoint, Project as BaseProject, Cocomo as BaseCocomo, Task as BaseTask, };
