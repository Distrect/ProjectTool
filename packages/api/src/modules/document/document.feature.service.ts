import { Injectable } from '@nestjs/common';
import {
  ArrUFPFunctions,
  calculateDataIntegrityValues,
  functionPointAttributes,
  IFunctionPointValues,
  calculateFunction,
  IFunctionPoint,
  ICAF,
  IFunctionPointAttributes,
} from 'cocogantt-shared';
import {
  Document,
  IBorderOptions,
  ITableCellBorders,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
} from 'docx';
import ProjectDAO from '@entities/project/project.dao';

const borders: IBorderOptions = {
  style: 'single',
  color: 'ffffff',
  size: 2,
};
const allSideBorder: ITableCellBorders = {
  top: borders,
  bottom: borders,
  left: borders,
  right: borders,
};

@Injectable()
export default class DocumentFeatureService {
  constructor(private projectDAO: ProjectDAO) {}

  public async createProjectDocument(projectID: number) {
    const project = await this.projectDAO.getProject(projectID);
  }

  private generateDITable(caf: ICAF) {
    const diTableHeader = new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              alignment: 'center',
              children: [new TextRun({ text: 'Factor', bold: true })],
            }),
          ],
        }),
        new TableCell({
          children: [
            new Paragraph({
              alignment: 'center',
              children: [new TextRun({ text: 'Complexity Value', bold: true })],
            }),
          ],
        }),
      ],
    });
    const dataRows = Object.entries(caf).map(
      ([key, value]) =>
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  alignment: 'center',
                  text: key,
                }),
              ],
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: 'center',
                  text: value.toString(),
                }),
              ],
            }),
          ],
        }),
    );
    const resultRow = new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({
              alignment: 'center',
              run: { text: 'DI', bold: true },
            }),
          ],
        }),
        new TableCell({
          verticalAlign: 'center',
          borders: allSideBorder,

          children: [
            new Paragraph({
              run: {
                text: '' + calculateDataIntegrityValues(caf),
                bold: true,
              },
            }),
          ],
        }),
      ],
    });
    const diTable = new Table({
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

  private generatewUFPTable(data: IFunctionPointAttributes) {
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

    const ufpRowHeaders: ArrUFPFunctions = [
      'User Input',
      'User Output',
      'User Query',
      'Internal Files',
      'External Interfaces',
    ];

    const ufpHeaderRow = new TableRow({
      children: [
        ...ufpHeaders.map(
          (header) =>
            new TableCell({
              children: [new Paragraph({ text: header })],
            }),
        ),
      ],
    });

    const ufpDataRows: TableRow[] = [];

    for (const header of ufpRowHeaders) {
      const constant: IFunctionPointValues = functionPointAttributes[header];
      const tableData: IFunctionPointValues = data[header];
      const sideHeaderCell = new TableCell({
        children: [new Paragraph({ text: header })],
      });
      const result = new TableCell({
        children: [
          new Paragraph({
            text: calculateFunction(header, tableData).toString(),
          }),
        ],
      });

      const dataRow = Object.entries(tableData).flatMap(([key, value]) => [
        new TableCell({
          children: [new Paragraph({ text: value.toString() })],
        }),
        new TableCell({
          children: [new Paragraph({ text: constant[key]?.toString() })],
        }),
      ]);

      ufpDataRows.push(
        new TableRow({
          children: [sideHeaderCell, ...dataRow, result],
        }),
      );
    }

    return new Table({
      rows: [ufpHeaderRow, ...ufpDataRows],
    });
  }

  public async generateFunctionPointSection(data: IFunctionPoint) {
    const diTable = this.generateDITable(data.caf);
    const ufpTable = this.generatewUFPTable(data.attributes);

    return await Packer.toBuffer(
      new Document({
        sections: [{ children: [diTable] }, { children: [ufpTable] }],
      }),
    );
  }
}
