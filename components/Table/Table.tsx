import React, { HTMLAttributes } from 'react'

interface ITable extends React.PropsWithChildren<HTMLAttributes<HTMLTableElement>>{

}

const Table = ({className, children, ...props} : ITable) => {
    return (
        <table className={`w-full whitespace-no-wrap border-collapse ${className}`} {...props}>
            {children}
        </table>
    )
}

const Row = ({children, className, ...props} : HTMLAttributes<HTMLTableRowElement>) => <tr className={`text-gray-700 dark:text-gray-400 ${className}`} {...props} >{children}</tr>

interface ITableCell extends HTMLAttributes<HTMLTableCellElement>{
    as?: React.ElementType
}

const Cell = ({children, as: Element = 'td', className, ...props} : ITableCell) => <Element className={`px-4 py-3 ${className}`} {...props}>{children}</Element>

Table.Row = Row
Table.Cell = Cell

export default Table


