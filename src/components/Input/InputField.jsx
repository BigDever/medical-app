import React from "react";
import styles from "../../../styles/Form.module.css";
import {FormControl, TextField} from "@mui/material";

export const InputField = ({ label, required = false, helperText }) => (
    <div>
        <FormControl className={styles.inputWrapper}>
            <TextField
                id="outlined-basic"
                label={label}
                required={required}
                helperText={helperText ? helperText : null}
                variant="outlined"
            />
        </FormControl>
    </div>
)
