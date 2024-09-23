import { Controller } from '@nestjs/common';
import { GanttFeatureService } from './gantt.feature.service';
import { IUpdateGanttChart } from './gantt.feature.interface';

@Controller('')
export class GanttFeatureController {
  constructor(private ganttFeatureService: GanttFeatureService) {}

  public async applyChanges(data: IUpdateGanttChart) {
    return await this.ganttFeatureService.applyChanges(data);
  }
}
