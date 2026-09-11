import type { ChangeEvent } from "react"
import { Select } from "../../atoms/Select/select"
type SelectMonthProps = {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void

}
export const SelectMonth = ({onChange}: SelectMonthProps) => {
    const arrMonths = Array.from({ length: 12 }, (_, index) => {
        const month = index + 1

        return {
          label: String(month),
          value: String(month),
          onChange: () => onChange,
        }
    })
  return (
    <Select name="month" options={arrMonths} onChange={onChange}/>
  )
}
