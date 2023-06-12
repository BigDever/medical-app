import React from "react";
import styles from "../../../styles/Form.module.css";
import {FormControl, TextField} from "@mui/material";

export const InputField = ({ label, required = false, helperText, handleChange, value }) => (
    <div>
        <FormControl className={styles.inputWrapper}>
            <TextField
                id="outlined-basic"
                value={value}
                label={label}
                required={required}
                helperText={helperText ? helperText : null}
                variant="outlined"
                onChange={(e) => handleChange(e.target.value)}
            />
        </FormControl>
    </div>
)
