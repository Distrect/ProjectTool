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
const cocogantt_shared_1 = require("cocogantt-shared");
const docx_1 = require("docx");
const project_dao_1 = require("../../database/entity/project/project.dao");
const borders = {
    style: 'single',
    color: 'ffffff',
    size: 2,
};
const allSideBorder = {
    top: borders,
    bottom: borders,
    left: borders,
    right: borders,
};
let DocumentFeatureService = class DocumentFeatureService {
    constructor(projectDAO) {
        this.projectDAO = projectDAO;
    }
    async createProjectDocument(projectID) {
        const project = await this.projectDAO.getProject(projectID);
    }
    generateDITable(caf) {
        const diTableHeader = new docx_1.TableRow({
            children: [
                new docx_1.TableCell({
                    children: [
                        new docx_1.Paragraph({
                            alignment: 'center',
                            children: [new docx_1.TextRun({ text: 'Factor', bold: true })],
                        }),
                    ],
                }),
                new docx_1.TableCell({
                    children: [
                        new docx_1.Paragraph({
                            alignment: 'center',
                            children: [new docx_1.TextRun({ text: 'Complexity Value', bold: true })],
                        }),
                    ],
                }),
            ],
        });
        const dataRows = Object.entries(caf).map(([key, value]) => new docx_1.TableRow({
            children: [
                new docx_1.TableCell({
                    children: [
                        new docx_1.Paragraph({
                            alignment: 'center',
                            text: key,
                        }),
                    ],
                }),
                new docx_1.TableCell({
                    children: [
                        new docx_1.Paragraph({
                            alignment: 'center',
                            text: value.toString(),
                        }),
                    ],
                }),
            ],
        }));
        const resultRow = new docx_1.TableRow({
            children: [
                new docx_1.TableCell({
                    children: [
                        new docx_1.Paragraph({
                            alignment: 'center',
                            run: { text: 'DI', bold: true },
                        }),
                    ],
                }),
                new docx_1.TableCell({
                    verticalAlign: 'center',
                    borders: allSideBorder,
                    children: [
                        new docx_1.Paragraph({
                            run: {
                                text: '' + (0, cocogantt_shared_1.calculateDataIntegrityValues)(caf),
                                bold: true,
                            },
                        }),
                    ],
                }),
            ],
        });
        const diTable = new docx_1.Table({
            borders: {
                insideHorizontal: {
                    style: 'single',
                    color: 'ffffff',
                    space: 5,
                    size: 2,
                },
            },
            rows: [diTableHeader, ...dataRows, resultRow],
        });
        return diTable;
    }
    generatewUFPTable(data) {
        const ufpHeaders = [
            'Functions',
            'Simple No',
            'Simple Weight',
            'Average No',
            'Average Weight',
            'Complex No',
            'Complex Weight',
            'Total',
        ];
        const ufpRowHeaders = [
            'User Input',
            'User Output',
            'User Query',
            'Internal Files',
            'External Interfaces',
        ];
        const ufpHeaderRow = new docx_1.TableRow({
            children: [
                ...ufpHeaders.map((header) => new docx_1.TableCell({
                    children: [new docx_1.Paragraph({ text: header })],
                })),
            ],
        });
        const ufpDataRows = [];
        for (const header of ufpRowHeaders) {
            const constant = cocogantt_shared_1.functionPointAttributes[header];
            const tableData = data[header];
            const sideHeaderCell = new docx_1.TableCell({
                children: [new docx_1.Paragraph({ text: header })],
            });
            const result = new docx_1.TableCell({
                children: [
                    new docx_1.Paragraph({
                        text: (0, cocogantt_shared_1.calculateFunction)(header, tableData).toString(),
                    }),
                ],
            });
            const dataRow = Object.entries(tableData).flatMap(([key, value]) => [
                new docx_1.TableCell({
                    children: [new docx_1.Paragraph({ text: value.toString() })],
                }),
                new docx_1.TableCell({
                    children: [new docx_1.Paragraph({ text: constant[key]?.toString() })],
                }),
            ]);
            ufpDataRows.push(new docx_1.TableRow({
                children: [sideHeaderCell, ...dataRow, result],
            }));
        }
        return new docx_1.Table({
            rows: [ufpHeaderRow, ...ufpDataRows],
        });
    }
    async generateFunctionPointSection(data) {
        const diTable = this.generateDITable(data.caf);
        const ufpTable = this.generatewUFPTable(data.attributes);
        return await docx_1.Packer.toBuffer(new docx_1.Document({
            sections: [{ children: [diTable] }, { children: [ufpTable] }],
        }));
    }
};
DocumentFeatureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [project_dao_1.default])
], DocumentFeatureService);
exports.default = DocumentFeatureService;
//# sourceMappingURL=document.feature.service.js.map