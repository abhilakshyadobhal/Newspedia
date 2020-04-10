export interface SelectComponentProps {
  field: {
    option: string;
    value: string;
  }[];
  title: string;
  handleSelectChange: (key: string, value: string) => any;
  value: string;
}
