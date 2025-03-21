import React from 'react';
import { vi } from 'vitest';

// Mock para el DataGrid de MUI
const DataGrid = vi.fn().mockImplementation(({ loading, localeText, columns }) => {
  return React.createElement('div', { 'data-testid': 'data-grid' }, [
    loading && React.createElement('div', { 'data-testid': 'loading-indicator', key: 'loading' }, 'Cargando...'),
    localeText && localeText.MuiTablePagination && 
      React.createElement('div', { 'data-testid': 'pagination-text', key: 'pagination' }, localeText.MuiTablePagination.labelRowsPerPage),
    columns && 
      React.createElement('div', { key: 'columns-count' }, [
        'Filas:', 
        Array.isArray(columns) ? columns.length : 0
      ]),
    columns && Array.isArray(columns) && columns.map((col, index) => 
      col.field === 'activo' && col.renderCell ? 
        React.createElement('div', { key: index, 'data-testid': `column-${col.field}` }, 
          React.createElement('div', { 'data-testid': 'estado-cell' }, 
            col.renderCell({
              value: true,
              row: { activo: true }
            })
          )
        ) : null
    )
  ]);
});

// Exportar los componentes mockeados
export { DataGrid };

// Exportar clases y tipos mockeados
export function GridColDef() {}
export function GridRenderCellParams() {}

// Exportar por defecto
export default {
  DataGrid,
  GridColDef,
  GridRenderCellParams
}; 