"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const gantt_dao_1 = require("../../database/entity/gantt/gantt.dao");
const task_dao_1 = require("../../database/entity/task/task.dao");
let GanttFeatureService = class GanttFeatureService {
    constructor(ganttDAO, taskDAO) {
        this.ganttDAO = ganttDAO;
        this.taskDAO = taskDAO;
    }
    async deleteGanttChart(data) {
        return await this.ganttDAO.deleteGantt(data);
    }
    async getGanttChart(data) {
        return await this.ganttDAO.getGanttWithTasks(data);
    }
    async applyChanges(data) {
        const updatedTasks = [];
        const deletedTasks = [];
        const createdTasks = [];
        for (const task of data.tasks) {
            if (task.state === 'Unchanged')
                continue;
            switch (task.state) {
                case 'Created':
                    const { taskID, ...rest } = task;
                    createdTasks.push(rest);
                    break;
                case 'Deleted':
                    if (task.taskID === undefined)
                        throw new Error("Data missing 'taskID' attribute");
                    const gantt = task.ganttID
                        ? { gantt: { ganttID: task.ganttID } }
                        : {};
                    deletedTasks.push({
                        taskID: task.taskID,
                        gantt,
                    });
                    break;
                case 'Updated':
                    if (task.taskID === undefined)
                        throw new Error("Data missing 'taskID' attribute");
                    updatedTasks.push(task);
                default:
                    throw new Error('Unknown error');
            }
        }
        await Promise.all([
            this.taskDAO.bulkCreateTaskRecords(createdTasks),
            this.taskDAO.bulkUpdateTaskRecords(updatedTasks),
            this.taskDAO.bulkDeleteTaskRecords(deletedTasks),
        ]).then((res) => res);
        return await this.ganttDAO.getGanttWithTasks({ ganttID: data.ganttID });
    }
};
GanttFeatureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [gantt_dao_1.default,
        task_dao_1.default])
], GanttFeatureService);
exports.default = GanttFeatureService;
//# sourceMappingURL=gantt.feature.service.js.map