import React from 'react';
import { vi } from 'vitest';

// No usamos JSX directamente aquí para evitar problemas de transpilación
// Mock simplificado para Box y otros componentes de MUI
export function mockMUIComponents() {
  vi.mock('@mui/material', () => {
    return {
      Box: vi.fn().mockImplementation(({ children, display, alignItems, height, ...props }) => {
        const boxProps = {
          'data-testid': 'mui-box',
          'data-display': display,
          'data-align-items': alignItems,
          'data-height': height,
          ...props
        };
        return React.createElement('div', boxProps, children);
      }),
      Container: vi.fn().mockImplementation(({ children, ...props }) => 
        React.createElement('div', props, children)
      ),
      Typography: vi.fn().mockImplementation(({ children, ...props }) => 
        React.createElement('p', props, children)
      ),
      Paper: vi.fn().mockImplementation(({ children, ...props }) => 
        React.createElement('div', props, children)
      ),
      Button: vi.fn().mockImplementation(({ children, ...props }) => 
        React.createElement('button', props, children)
      ),
      TextField: vi.fn().mockImplementation(({ label, id, ...props }) => {
        const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
        return React.createElement('div', { className: 'MuiFormControl-root' },
          React.createElement('label', { htmlFor: inputId, id: `${inputId}-label` }, label),
          React.createElement('input', { 
            id: inputId, 
            'aria-labelledby': `${inputId}-label`,
            ...props
          })
        );
      }),
      MenuItem: vi.fn().mockImplementation(({ children, value, ...props }) => 
        React.createElement('li', { role: 'option', 'data-value': value, ...props }, children)
      ),
      IconButton: vi.fn().mockImplementation(({ children, ...props }) => 
        React.createElement('button', props, children)
      ),
      Dialog: vi.fn().mockImplementation(({ children, open, ...props }) => 
        open ? React.createElement('div', props, children) : null
      ),
      DialogTitle: vi.fn().mockImplementation(({ children, ...props }) => 
        React.createElement('div', props, children)
      ),
      DialogContent: vi.fn().mockImplementation(({ children, ...props }) => 
        React.createElement('div', props, children)
      ),
      DialogContentText: vi.fn().mockImplementation(({ children, ...props }) => 
        React.createElement('p', props, children)
      ),
      DialogActions: vi.fn().mockImplementation(({ children, ...props }) => 
        React.createElement('div', props, children)
      ),
      Stack: vi.fn().mockImplementation(({ children, ...props }) => 
        React.createElement('div', props, children)
      ),
      Grid: vi.fn().mockImplementation(({ children, ...props }) => 
        React.createElement('div', props, children)
      ),
      FormControl: vi.fn().mockImplementation(({ children, ...props }) => 
        React.createElement('div', props, children)
      ),
      InputLabel: vi.fn().mockImplementation(({ children, id, htmlFor, ...props }) => 
        React.createElement('label', { id, htmlFor, ...props }, children)
      ),
      Select: vi.fn().mockImplementation(({ children, id, labelId, value, ...props }) => {
        return React.createElement('div', 
          { 
            role: 'combobox', 
            id, 
            'aria-labelledby': labelId ? `${labelId} ${id}` : id,
            ...props
          },
          React.createElement('input', { type: 'hidden', value }),
          children
        );
      }),
      CircularProgress: vi.fn().mockImplementation((props) => 
        React.createElement('div', { 'data-testid': 'loading-indicator', ...props })
      ),
      // Iconos como componentes simples
      Add: vi.fn().mockImplementation(() => React.createElement('span', null, '+')),
      Search: vi.fn().mockImplementation(() => React.createElement('span', null, '🔍')),
      Edit: vi.fn().mockImplementation(() => React.createElement('span', null, '✏️')),
      Delete: vi.fn().mockImplementation(() => React.createElement('span', null, '🗑️')),
      Refresh: vi.fn().mockImplementation(() => React.createElement('span', null, '🔄'))
    };
  });
}

// Mock para DataGrid de MUI X
export function mockDataGridComponents() {
  vi.mock('@mui/x-data-grid', () => {
    return {
      DataGrid: vi.fn().mockImplementation(({ loading, localeText, columns }) => {
        const children = [];
        
        if (loading) {
          children.push(React.createElement('div', { 'data-testid': 'loading-indicator', key: 'loading' }, 'Cargando...'));
        }
        
        if (localeText && localeText.MuiTablePagination) {
          children.push(React.createElement(
            'div', 
            { 'data-testid': 'pagination-text', key: 'pagination' }, 
            localeText.MuiTablePagination.labelRowsPerPage
          ));
        }
        
        if (columns) {
          children.push(React.createElement(
            'div', 
            { key: 'columns-count' }, 
            'Filas: ', Array.isArray(columns) ? columns.length : 0
          ));
          
          if (Array.isArray(columns)) {
            columns.forEach((col, index) => {
              if (col.field === 'activo' && col.renderCell) {
                const cellContent = col.renderCell({
                  value: true,
                  row: { activo: true }
                });
                
                children.push(React.createElement(
                  'div', 
                  { 'data-testid': `column-${col.field}`, key: `col-${index}` },
                  React.createElement('div', { 'data-testid': 'estado-cell' }, cellContent)
                ));
              }
            });
          }
        }
        
        return React.createElement('div', { 'data-testid': 'data-grid' }, ...children);
      }),
      GridColDef: function GridColDef() {},
      GridRenderCellParams: function GridRenderCellParams() {}
    };
  });
}

// Exportamos una función para inicializar todos los mocks
export function initializeMocks() {
  mockMUIComponents();
  mockDataGridComponents();
}

export default { initializeMocks }; 