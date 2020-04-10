import React from 'react';
import { SelectComponentProps } from '../../interfaces/selectComponent.interface';
import styles from './index.module.scss';

const SelectComponent: React.FunctionComponent<SelectComponentProps> = ({
  field,
  title,
  handleSelectChange,
  value,
}) => {
  const handleChange = (event: any) => {
    handleSelectChange(title, event.target.value);
  };

  return (
    <React.Fragment>
      <select
        onChange={handleChange}
        defaultValue='disabled'
        value={value}
        className={styles.selectDropdown}
      >
        <option value='disabled' disabled>
          Select {title}
        </option>
        {field.map(
          ({ option, value }: { option: string; value: string }, i: number) => (
            <option value={value} key={i}>
              {option[0].toUpperCase() + option.slice(1)}
            </option>
          )
        )}
      </select>
    </React.Fragment>
  );
};

export default SelectComponent;
