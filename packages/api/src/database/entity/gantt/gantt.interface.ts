export type IGetGanttDATA =
  | {
      ganttID: number;
    }
  | {
      project: {
        projectID: number;
      };
    }
  | {
      ganttID: number;
      project: {
        projectID: number;
      };
    };

export interface Gantt {
  ganttID: number;
  ganttData: {};
}
