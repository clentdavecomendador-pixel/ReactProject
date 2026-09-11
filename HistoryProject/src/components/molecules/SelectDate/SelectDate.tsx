import type { ChangeEvent } from "react"
import { Select } from "../../atoms/Select/select"

type SelectDaysProps = {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void

}
export const SelectDate = ({onChange}: SelectDaysProps) => {
    const arrDays = Array.from({ length: 31 }, (_, index) => {
        const day = index + 1

        return { label: String(day), value: String(day) }
    })
  return (
    <Select name="date" options={arrDays} onChange={onChange}/>
  )
}
