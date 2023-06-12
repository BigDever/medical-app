import {SignForm} from "../components/SignForm";
import {Header} from "../components/Header";
import Head from "next/head"
import { signInWithPhoneNumber } from "firebase/auth";
import {useEffect, useState} from "react";
import {db} from "../firebase/clientApp";
import { getCookie } from 'cookies-next';
import {
    TableCell,
    TableRow,
    TableBody,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    Grid,
    Container
} from "@mui/material";
import {diagnosesMap} from "../src/constants/consts";
import Link from "next/link";



export default function Enroll () {
    const [medics, setMedics] = useState([])
    let phone = getCookie('phoneUser')

    useEffect(() => {
        if (phone) {
            db.collection('phones').get().then((response) => {
                const result = []
                response.docs.forEach(item => result.push(item.data()))
                console.log(result)
                setMedics(result)
            })
        }
    }, [phone])

    useEffect(() => {
        console.log(medics)
    }, [medics])


    return (
        <>
            <Head>
                <title>СППР по диагностике дерматологических заболеваний</title>
                <meta name="description" content="Определим ваше заболевание без похода к врачу" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Container maxWidth="xl" style={{marginTop: 100}}>
                <Grid container spacing={2} >
                    {
                        medics?.map(item => <Grid item xs={12} sm={6} md={4} lg={3}>
                                <Card>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {`Дерматолог: ${item.lName} ${item.fName}`}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Возраст: {item.age}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Больница: {item.institution}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Записаться</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </>

    )
}
