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

Table.Row = ({children, className, ...props} : HTMLAttributes<HTMLTableRowElement>) => <tr className={`text-gray-700 dark:text-gray-400 ${className}`} {...props} >{children}</tr>

Table.Cell = ({children, className, ...props} : HTMLAttributes<HTMLTableCellElement>) => <td className={`px-4 py-3 ${className}`} {...props}>{children}</td>

export default Table


