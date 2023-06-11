import {SignForm} from "../components/SignForm";
import {Header} from "../components/Header";
import Head from "next/head"
import { signInWithPhoneNumber } from "firebase/auth";
import {useEffect, useState} from "react";
import {db} from "../firebase/clientApp";
import { getCookie } from 'cookies-next';


export default function Lk () {
    const [ancets, setAncets] = useState([])
    let phone = getCookie('phoneUser')
    useEffect(() => {
        db.collection('ancets').get().then((response) => {

            const result = []
            response.docs.forEach(item => result.push(item.data()))
            console.log(result)
            const filteredRes = result.filter(item => item.phone === phone)
            setAncets(filteredRes)
        })
    }, [])

    useEffect(() => {
        console.log(ancets)
    }, [ancets])


    return (
        <>
            <Head>
                <title>СППР по диагностике дерматологических заболеваний</title>
                <meta name="description" content="Определим ваше заболевание без похода к врачу" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            ТУТ БУДУТ АНКЕТЫ
        </>
    )
}
