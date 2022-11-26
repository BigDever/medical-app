import {Header} from "../components/Header";
import Head from "next/head";
import styles from '../styles/Form.module.css'
import { InputField } from "../src/components/Input";
import { SelectField } from "../src/components/Select";
import {useState} from "react";

export default function Form() {
    const [years] = useState([1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997])
    const [year, setYear] = useState(null)
    return (
        <>
            <Head>
                <title>Кож-помощь</title>
                <meta name="description" content="Определим ваше заболевание без похода к врачу" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className={styles.form}>
                <InputField label="Имя" required helperText="Введите свое имя на Русском"/>
                <InputField label="Фамилия" required helperText="Введите свою фамилию на Русском"/>
                <SelectField options={years} value={year} handleChange={setYear}/>
             </div>
        </>
    )
}
