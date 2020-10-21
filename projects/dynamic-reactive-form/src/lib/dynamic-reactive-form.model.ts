import { Validators } from '@angular/forms';

export enum FieldType {
  CHECKBOX,
  DATEPICKER,
  RADIO,
  SELECT_DROPDOWN,
  SELECT_LIST,
  SLIDE_TOGGLE,
  TEXT_AREA,
  TEXT_FIELD,
  SUBHEADER,
  DIVIDER,
}

export interface Field {
  name: string;
  type: FieldType;
  children?: Field[];
  defaultValue?: any;
  disabled?: boolean;
  options?: string[];
  parent?: string;
  validation?: Validators[];
  visible?: boolean;
}

export interface KeyValuePair {
  key: string;
  value: any;
}
