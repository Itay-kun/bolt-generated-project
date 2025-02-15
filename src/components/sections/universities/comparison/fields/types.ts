import { University } from "../../types";
import { LucideIcon } from "lucide-react";

export type ComparisonField = {
  id: string;
  label: string;
  icon: LucideIcon;
  getValue: (uni: University) => React.ReactNode;
};

export interface FieldConfig {
  language: string;
}
