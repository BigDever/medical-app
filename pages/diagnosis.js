import {Header} from "../components/Header";
import Head from "next/head";
import Link from "next/link";
import {
    Alert, Button,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@mui/material";
import {useRouter} from "next/router";
import {useEffect, useState, useMemo} from "react";
import {db} from "../firebase/clientApp";
import {getCookie} from "cookies-next";
import {diagnosesMap} from "../src/constants/consts";

export default function Diagnosis () {
    const router = useRouter()
    const date = router.query.date
    console.log(date)
    let userPhone = getCookie('phoneUser')
    let isMedic = getCookie('isMedic')
    const [diagnosis, setDiagnosis] = useState()

    useEffect(() => {
        if(date && userPhone) {
            db.collection('ancets').get().then((response) => {
                const result = []
                response.docs.forEach(item => result.push(item.data()))
                console.log(result)
                const filteredRes = result.filter(item => {
                    return item.date === date && item.phone === userPhone
                })
                console.log(filteredRes)
                setDiagnosis(filteredRes)
            })
        }
    }, [date, userPhone])

    const renderButton = useMemo(() => {
        if(!isMedic) {
            return (
                <Button
                    fullWidth={false}
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    style={{position: "absolute", right: 23}}
                >
                    <Link href={'/enroll'}>Записаться к врачу</Link>
                </Button>
            )
        }
        return <></>
    }, [isMedic])

    return (
        <>
            <Head>
                <title>СППР по диагностике дерматологических заболеваний</title>
                <meta name="description" content="Определим ваше заболевание без похода к врачу" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Container maxWidth="md" sx={{pt: 4}} style={{position: "relative"}}>
                <Typography variant="h4" component="h4" sx={{mb: 4}}>
                    Личная информация:
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableBody>
                            <TableRow
                                key='1'
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Фамилия
                                </TableCell>
                                <TableCell align="right">{diagnosis?.[0].lName}</TableCell>
                            </TableRow>
                            <TableRow
                                key='1'
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Имя
                                </TableCell>
                                <TableCell align="right">{diagnosis?.[0].fName}</TableCell>
                            </TableRow>
                            <TableRow
                                key='1'
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Возраст
                                </TableCell>
                                <TableCell align="right">{diagnosis?.[0].age}</TableCell>
                            </TableRow>
                            <TableRow
                                key='1'
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Телефон
                                </TableCell>
                                <TableCell align="right">{diagnosis?.[0].phone}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Typography variant="h4" component="h4" sx={{mb: 4}} mt={6}>
                    Диагноз:
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Заболевание</TableCell>
                                <TableCell align="right">Вероятность (%)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                <TableRow
                                    key='1'
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {diagnosesMap[diagnosis?.[0].main_class_output]}
                                    </TableCell>
                                    <TableCell align="right">{Math.round(parseFloat(diagnosis?.[0].main_proba)*100)}</TableCell>
                                </TableRow>
                            <TableRow
                                key='2'
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {diagnosesMap[diagnosis?.[0].second_class_output]}
                                </TableCell>
                                <TableCell align="right">{Math.round(parseFloat(diagnosis?.[0].second_proba)*100)}</TableCell>
                            </TableRow>
                            <TableRow
                                key='3'
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {diagnosesMap[diagnosis?.[0].third_class_output]}
                                </TableCell>
                                <TableCell align="right">{Math.round(parseFloat(diagnosis?.[0].third_proba)*100)}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Alert style={{marginTop: 50}} severity="warning"><span style={{fontWeight: "bold"}}>Данные результаты НЕ ЯВЛЯЮТСЯ ДИАГНОЗОМ.</span> Согласно федеральному закону №323-ФЗ от 21.11.2011 диагноз устанавливает лечащий врач на основании совокупности всех данных о пациенте.</Alert>
                {renderButton}
            </Container>
        </>
    )
}
