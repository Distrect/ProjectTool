import CocomoEntity from '@entities/cocomo/cocomo.entity';
import { ICreateCocomoDATA, IGetCocomoDATA, IUpdateCocomoDATA } from '@entities/cocomo/cocomo.interface';
import { Repository } from 'typeorm';
export default class CocomoDAO {
    private cocomoRepository;
    constructor(cocomoRepository: Repository<CocomoEntity>);
    createCocomoRecord(data: ICreateCocomoDATA): Promise<ICreateCocomoDATA & CocomoEntity>;
    getCocomoRecord(args: IGetCocomoDATA): Promise<CocomoEntity>;
    deleteCocomoRecord(args: IGetCocomoDATA): Promise<void>;
    updateCocomoRecord(args: IGetCocomoDATA, data: IUpdateCocomoDATA): Promise<({
        cocomoID: number;
        project?: import("../project/project.entity").default | undefined;
        mode?: import("cocogantt-shared").CocomoMode | undefined;
        kloc?: number | undefined;
    } | {
        project: {
            projectID: number;
        };
        mode?: import("cocogantt-shared").CocomoMode | undefined;
        kloc?: number | undefined;
    } | {
        project: {
            projectID: number;
        };
        cocomoID: number;
        mode?: import("cocogantt-shared").CocomoMode | undefined;
        kloc?: number | undefined;
    }) & CocomoEntity>;
}
