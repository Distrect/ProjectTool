import { IFunctionPoint } from 'cocogantt-shared';
import ProjectDAO from '@entities/project/project.dao';
export default class DocumentFeatureService {
    private projectDAO;
    constructor(projectDAO: ProjectDAO);
    createProjectDocument(projectID: number): Promise<void>;
    private generateDITable;
    private generatewUFPTable;
    generateFunctionPointSection(data: IFunctionPoint): Promise<Buffer>;
}
