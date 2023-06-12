import { Header } from "../components/Header";
import Head from "next/head";
import styles from '../styles/Form.module.css'
import { InputField } from "../src/components/Input";
import { SelectField } from "../src/components/Select";
import {useState} from "react";
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, Paper} from "@mui/material";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import {db} from "../firebase/clientApp";
import {getDiagnosisApi} from "../src/api/API";
import {useRouter} from "next/router";
import {getCookie} from "cookies-next";

const rashArray = [
    {
        id: 'erythema',
        title: 'Эритема',
        value: null
    },
    {
        id: 'scaling',
        title: 'Шелушение',
        value: null
    },
    {
        id: 'definite_borders',
        title: 'Определенные границы',
        value: null
    },
    {
        id: 'itching',
        title: 'Зуд',
        value: null
    },
    {
        id: 'koebner_phenomenon',
        title: 'Феномен Кебнера',
        value: null
    },
    {
        id: 'polygonal_papules',
        title: 'Полигональные (ороговевшие) папулы',
        value: null
    },
    {
        id: 'follicular_papules',
        title: 'Фолликулярные папулы',
        value: null
    },
    {
        id: 'oral_mucosal_involvement',
        title: 'Поражение слизистой оболочки рта',
        value: null
    },
    {
        id: 'knee_and_elbow_involvement',
        title: 'Высыпания на коленях и локтях',
        value: null
    },
    {
        id: 'scalp_involvement',
        title: 'Поражение зоны роста волос',
        value: null
    },
]

const rashImages = ["Определенные границы","Полигональные (ороговевшие) папулы", "Феномен Кебнера", "Фолликулярные папулы", "Эритема"]

export default function Form() {
    const router = useRouter()
    const [years] = useState([{name: '1990', value: 1990},
        {name: '1991', value: 1991},
        {name: '1992', value: 1992},
        {name: '1993', value: 1993},
        {name: '1994', value: 1994},
        {name: '1995', value: 1995},
        {name: '1996', value: 1996},
        {name: '1997', value: 1997},
])
    const [rashList, setRashList] = useState(rashArray)
    const [simptomsValues] = useState([
        {name: 'Нет', value: 0},
        {name: 'Слабо выражено', value: 1},
        {name: 'Выражено', value: 2},
        {name: 'Сильно выражено', value: 3}
    ])
    const [year, setYear] = useState(null)

    const [familyValues] = useState([{name: 'Да', value: 1},{name: 'Нет', value: 0} ])
    const [family, setFamily] = useState(  {
        id: 'family_history',
        title: 'Имеются заболевания у членов семьи',
        value: null
    })
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    let userPhone = getCookie('phoneUser')


    const handleChange = (id, value) => {
        const currentRashList = rashList.map(item => ({
            ...item,
            value: item.id === id ? value : item.value
        }))
        setRashList(currentRashList)
    }
    const handleChangeFamily = (item) => {
        setFamily(prev => ({
            ...prev,
            value: item
        }))
    }

    const handleClick = async () => {
        let model = rashList.reduce((acc, item) => {
            return {
                ...acc,
                [item.id]: item.value.value
            }
        }, {})
        model.family_history = family.value.value
        model.age = 2023 - year.value
        const currentDate = new Date().toLocaleString()
        const response = await getDiagnosisApi(model)
        model = {...model, ...response, phone: userPhone, date: currentDate, fName: fName, lName: lName}
        db.collection('ancets').add(model)
        setTimeout(() => {
            router.push(`/diagnosis/?date=${currentDate}`)
        }, 3000)
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
                                <InputField value={fName} handleChange={setFName} label="Имя" required helperText="Введите свое имя на Русском"/>
                                <InputField value={lName} handleChange={setLName} label="Фамилия" required helperText="Введите свою фамилию на Русском"/>
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
                                    rashList.map(item => (
                                        <div style={{display: 'flex', alignItems: 'center', marginTop: 15}}>
                                            <SelectField
                                                options={simptomsValues}
                                                value={item.value}
                                                label={item.title}
                                                handleChange={(value) => handleChange(item.id, value)}
                                            />
                                            {rashImages.includes(item.title) &&
                                                <div className={styles.question} style={{display: 'flex', alignItems: 'center'}}>
                                                    <IconButton aria-label="delete" size="large">
                                                        <QuestionMarkIcon />
                                                    </IconButton>
                                                    <img src={`/rush/${item.title}.jpg`} alt=""/>
                                                </div>
                                            }
                                        </div>
                                    )
                                )}
                                <div style={{marginTop: 15}}>
                                    <SelectField
                                        options={familyValues}
                                        value={family.value}
                                        label={family.title}
                                        handleChange={handleChangeFamily}
                                    />
                                </div>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={handleClick}
                                >
                                    Рассчитать
                                </Button>
                            </div>
                        </div>
                    </Paper>
                </div>
             </div>
        </>
    )
}
