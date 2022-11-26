import React from "react";
import styles from "../../../styles/Form.module.css";
import { TextField } from "@mui/material";

export const InputField = ({ label, required = false, helperText }) => (
    <div className={styles.inputWrapper}>
        <TextField
            id="outlined-basic"
            label={label}
            required={required}
            helperText={helperText ? helperText : null}
            variant="outlined"
        />
    </div>
)

