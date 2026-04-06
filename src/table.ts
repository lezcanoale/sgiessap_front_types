import type { PipeTransform } from "@angular/core";

export type ColumnStyleType =
  | "normal"
  | "label"
  | "codeWithDescription"
  | "actionBadges"
  | "link"
  | "icon";

export type ColumnColor =
  | "primary"
  | "accent"
  | "warn"
  | "success"
  | "warning"
  | "";

export interface ColumnItem {
  title: string;
  keys: string[];
  styleType: ColumnStyleType;
  bold?: boolean;
  color?: ColumnColor;
  pipe?: PipeTransform;
}

export interface CellContentWithColor {
  text: string;
  color: ColumnColor;
}

export type TableCellContent = string | { text: string; color?: ColumnColor };
