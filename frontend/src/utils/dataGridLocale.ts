import { GridLocaleText } from '@mui/x-data-grid';

// Texto personalizado en español para MUI DataGrid
export const esESGrid: Partial<GridLocaleText> = {
  // Texto del footer/paginación
  MuiTablePagination: {
    labelRowsPerPage: 'Filas por página:',
    labelDisplayedRows: ({ from, to, count }) =>
      `${from}-${to} de ${count !== -1 ? count : `más de ${to}`}`,
  },
  footerRowSelected: (count) =>
    count !== 1
      ? `${count} filas seleccionadas`
      : `${count} fila seleccionada`,
  
  // Columnas y filas
  columnMenuLabel: 'Menú',
  columnMenuShowColumns: 'Mostrar columnas',
  columnMenuFilter: 'Filtrar',
  columnMenuHideColumn: 'Ocultar',
  columnMenuUnsort: 'Desordenar',
  columnMenuSortAsc: 'Ordenar ASC',
  columnMenuSortDesc: 'Ordenar DESC',
  
  // Filtros
  filterPanelAddFilter: 'Añadir filtro',
  filterPanelDeleteIconLabel: 'Borrar',
  filterPanelOperator: 'Operadores',
  filterPanelOperatorAnd: 'Y',
  filterPanelOperatorOr: 'O',
  filterPanelColumns: 'Columnas',
  filterPanelInputLabel: 'Valor',
  filterPanelInputPlaceholder: 'Valor de filtro',
  
  // Barra de herramientas
  toolbarFilters: 'Filtros',
  toolbarExport: 'Exportar',
  toolbarExportCSV: 'Descargar como CSV',
  toolbarExportPrint: 'Imprimir',
}; 