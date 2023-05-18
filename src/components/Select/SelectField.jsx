import React, {useMemo} from 'react'
import {
    Select,
    MenuItem,
    FormControl,
    InputLabel
} from "@mui/material";
import styles from "../../../styles/Form.module.css";

export const SelectField = ({ options, value, handleChange, label }) => {
    const optionsList = useMemo(
        () => (
            options.map(item => <MenuItem value={item}>{item}</MenuItem>)
        ),
        [options]
    )

    return (
        <div>
            <FormControl className={styles.inputWrapper}>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={(e) => handleChange(e.target.value)}
                >
                    {optionsList}
                </Select>
            </FormControl>
        </div>
    )
}
