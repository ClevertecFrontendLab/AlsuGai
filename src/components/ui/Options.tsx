import { Select } from '@chakra-ui/react';

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
        <Select
            placeholder='Выберите из списка...'
            variant='outline'
            border='1px solid rgba(0, 0, 0, 0.08)'
            color='blackAlpha.700'
            _hover={{ borderColor: 'lime.300' }}
        >
            {options.map((option) => (
                <option value={option.value} key={option.value}>
                    {option.label}
                </option>
            ))}
        </Select>
    );
}

export default Options;
