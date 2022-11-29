import { Header } from "../components/Header";
import Head from "next/head";
import styles from '../styles/Form.module.css'
import { InputField } from "../src/components/Input";
import { SelectField } from "../src/components/Select";
import {useState} from "react";
import {Checkbox, FormControl, FormControlLabel, FormGroup, Paper} from "@mui/material";
import Image from 'next/image'

const rashArray = [
    "пятно", "папула", "волдырь", "бугорок", "узел",
    "пузырь", "гнойничок", "чешуйка", "струп", "экскориация",
    "эрозия", "трещина", "язва", "рубец", "лихенификация", "кератоз",
    "дерматосклероз", "атрофодермия", "атрофия", "пойкилодермия", "анетодермия"
]

export default function Form() {
    const [years] = useState([1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997])
    const [year, setYear] = useState(null)
    return (
        <>
            <Head>
                <title>СППР по диагностике дерматологических заболеваний</title>
                <meta name="description" content="Определим ваше заболевание без похода к врачу" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <div className={styles.form}>
                <div className={styles.paperWrapper}>
                    <Paper elevation={8} >
                        Данные
                        <div className={styles.formSection}>
                            <InputField label="Имя" required helperText="Введите свое имя на Русском"/>
                            <InputField label="Фамилия" required helperText="Введите свою фамилию на Русском"/>
                            <SelectField options={years} value={year} handleChange={setYear}/>
                            <FormControl style={{display: 'block'}} className={styles.inputWrapper}>
                                <FormControlLabel control={<Checkbox />} label="Муж" />
                                <FormControlLabel control={<Checkbox />} label="Жен" />
                            </FormControl>
                        </div>
                    </Paper>
                </div>

                <div className={styles.paperWrapper}>
                    <Paper elevation={8} >
                        Тип сыпи на коже
                        <div className={styles.formSection}>
                            {rashArray.map(item => (
                                    <div>
                                        <div style={{
                                            width: 200,
                                            height: 200,
                                            backgroundImage: `url(/rush/${item}.jpg)`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center",
                                            backgroundSize: "cover"
                                        }}></div>
                                        <FormControlLabel control={<Checkbox />} label={item} />
                                    </div>
                                )
                            )}
                        </div>
                    </Paper>
                </div>
             </div>
        </>
    )
}
