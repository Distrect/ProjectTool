import CocomoDAO from '@entities/cocomo/cocomo.dao';
import { ICreateCocomoDATA, IGetCocomoDATA, IUpdateCocomoDATA } from '@entities/cocomo/cocomo.interface';
export default class CocomoFeatureService {
    private cocomoDAO;
    constructor(cocomoDAO: CocomoDAO);
    getCocomo(args: IGetCocomoDATA): Promise<import("../../database/entity/cocomo/cocomo.entity").default>;
    createCocomo(data: ICreateCocomoDATA): Promise<ICreateCocomoDATA & import("../../database/entity/cocomo/cocomo.entity").default>;
    deleteCocomo(args: IGetCocomoDATA): Promise<void>;
    updateCocomo(args: IGetCocomoDATA, data: IUpdateCocomoDATA): Promise<({
        cocomoID: number;
        project?: import("../../database/entity/project/project.entity").default | undefined;
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
    }) & import("../../database/entity/cocomo/cocomo.entity").default>;
}
