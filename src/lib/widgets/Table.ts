import { StyleableProps, TextProps, WidgetProps } from "../Widget";

interface CellProps extends TextProps, StyleableProps {}

const Cell = (props: CellProps): WidgetProps => ({
  tag: "td",
  ...props
});

interface RowProps extends StyleableProps {
  cells: CellProps[];
}

const Row = (props: RowProps): WidgetProps => ({
  tag: "tr",
  children: props.cells.map(Cell)
});

interface TableProps extends StyleableProps {
  rows: RowProps[];
}

const Table = (props: TableProps): WidgetProps => ({
  tag: "table",
  children: props.rows.map(Row),
  ...props
});

export default Table;
