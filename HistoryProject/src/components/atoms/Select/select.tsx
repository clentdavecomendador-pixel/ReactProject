import type { ChangeEvent } from "react";

type SelectProps = {
    name: string;
    options: SelectOption[];
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}
type SelectOption = {
    value: string | number;
    label: string;
}
export const Select = ({name, options, onChange}: SelectProps) => {
    return(
        <select name={name} id={name} onChange={onChange}>
            {options.map((options) => (
                <option key={options.value} value={options.value} >
                    {options.label}
                </option>
            ))}
        </select>
    )
}