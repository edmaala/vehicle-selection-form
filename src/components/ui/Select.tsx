import { ChangeEvent } from 'react';

function Select({ options, nullValueText, name, id, onChange, value }: Props) {
  return (
    <select
      name={name}
      id={id}
      className="p-4 border border-gray-200 min-w-full"
      onChange={onChange}
      value={value ?? ''}
    >
      <option value="">{nullValueText}</option>
      {options.map((optionValue) => (
        <option key={optionValue} value={optionValue}>
          {optionValue}
        </option>
      ))}
    </select>
  );
}

type Props = {
  options: string[];
  name: string;
  id: string;
  value?: string | null;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  nullValueText?: string;
};

Select.defaultProps = {
  nullValueText: '',
  value: '',
  onChange: () => {},
};

export default Select;
