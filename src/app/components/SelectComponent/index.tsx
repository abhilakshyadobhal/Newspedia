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
      <div className={styles.selectWrapper}>
        <span className={styles.label}>Select {title}</span>
        <select
          onChange={handleChange}
          value={value}
          className={styles.selectDropdown}
        >
          <option value='' disabled>
            Please select {title}
          </option>
          {field.map(
            (
              { option, value }: { option: string; value: string },
              i: number
            ) => (
              <option value={value} key={i}>
                {option[0].toUpperCase() + option.slice(1)}
              </option>
            )
          )}
        </select>
      </div>
    </React.Fragment>
  );
};

export default SelectComponent;
