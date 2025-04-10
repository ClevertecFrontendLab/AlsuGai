import { Checkbox, Select } from '@chakra-ui/react';

export interface ISelectOption {
    value: string;
    label: string;
}

function Options() {
    const options: ISelectOption[] = [
        { value: 'Молочные продукты', label: 'Молочные продукты' },
        { value: 'Яйцо', label: 'Яйцо' },
        { value: 'Рыба', label: 'Рыба' },
    ];

    return (
        <Select placeholder='Выберите из списка...' variant='outline'>
            {options.map((option) => (
                <Checkbox size='sm' colorScheme='red'>
                    <option value={option.value} key={option.value}>
                        {option.label}
                    </option>
                </Checkbox>
            ))}
        </Select>
    );
}

export default Options;
