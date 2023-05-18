import { Header } from "../components/Header";
import Head from "next/head";
import styles from '../styles/Form.module.css'
import { InputField } from "../src/components/Input";
import { SelectField } from "../src/components/Select";
import {useState} from "react";
import {Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, Paper} from "@mui/material";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export const rashArray = [
    "Эритема", "Шелушение", "Определенные границы", "Зуд", "Феномен Кебнера",
    "Полигональные (ороговевшие) папулы", "Фолликулярные папулы", "Поражение слизистой оболочки рта", "Высыпания на коленях и локтях",
        "Поражение зоны роста волос"
]

const rashImages = ["Определенные границы","Полигональные (ороговевшие) папулы", "Феномен Кебнера", "Фолликулярные папулы", "Эритема"]

export default function Form() {
    const [years] = useState([1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997])
    const [simptomsValues] = useState(['Нет', 'Слабо выражено', 'Выражено', 'Сильно выражено'])
    const [year, setYear] = useState(null)
    const [simptom, setSimptom] = useState(rashArray.reduce((acc, item) => {
        acc[item] = null
        return acc
    }, {}))
    const [familyValues] = useState(['Да', 'Нет'])
    const [family, setFamily] = useState(null)

    const handleChange = (label, value) => {
        setSimptom(prev => ({
            ...prev,
            [label]: value,
        }))
    }

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
                        <div style={{padding: 20}}>
                            <h2 style={{textAlign: 'center', margin: 0}}>Данные</h2>
                            <div className={styles.formSection}>
                                <InputField label="Имя" required helperText="Введите свое имя на Русском"/>
                                <InputField label="Фамилия" required helperText="Введите свою фамилию на Русском"/>
                                <SelectField options={years} value={year} handleChange={setYear} label='Год рождения'/>
                                <FormControl style={{display: 'block'}} className={styles.inputWrapper}>
                                    <FormControlLabel control={<Checkbox />} label="Муж" />
                                    <FormControlLabel control={<Checkbox />} label="Жен" />
                                </FormControl>
                            </div>
                        </div>
                    </Paper>
                </div>

                <div className={styles.paperWrapper}>
                    <Paper elevation={8} >
                        <h2 style={{textAlign: 'center', margin: 0, paddingTop: 20}}>Симптомы</h2>
                        <div className={styles.formSection}>
                            <div>
                                {
                                    rashArray.map(item => (
                                        <div style={{display: 'flex', alignItems: 'center', marginTop: 15}}>
                                            <SelectField
                                                options={simptomsValues}
                                                value={simptom[item]}
                                                label={item}
                                                handleChange={(value) => handleChange(item, value)}
                                            />
                                            {rashImages.includes(item) &&
                                                <div className={styles.question} style={{display: 'flex', alignItems: 'center'}}>
                                                    <IconButton aria-label="delete" size="large">
                                                        <QuestionMarkIcon />
                                                    </IconButton>
                                                    <img src={`/rush/${item}.jpg`} alt=""/>
                                                </div>
                                            }
                                        </div>
                                    )
                                )}
                                <div style={{marginTop: 15}}>
                                    <SelectField
                                        options={familyValues}
                                        value={family}
                                        label="Имеются заболевания у членов семьи"
                                        handleChange={setFamily}
                                    />
                                </div>
                            </div>
                        </div>
                    </Paper>
                </div>
             </div>
        </>
    )
}
