import Head from 'next/head'
import {Box, Button, Container, Paper, Stack, Typography} from "@mui/material";
import Link from "next/link";
import {Header} from "../components/Header";
import styles from '../styles/Home.module.css';
import LoginIcon from '@mui/icons-material/Login';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import {getCookie} from "cookies-next";
import {useEffect, useMemo, useState} from "react";

export default function Home() {
    const [phone, setPhone] = useState('')
    const [isMedik, setIsMedic] = useState(false)
    useEffect(() => {
        setPhone(getCookie('phoneUser'))
        setIsMedic(getCookie('isMedic'))
    }, [])

    const renderButton = useMemo(() => {
        if(!isMedik && phone) {
            return (
                <Button  size="large" variant="contained">
                    <Link href={'/form'}>Заполнить анкету</Link>
                </Button>
            )
        }
        else{
            if(isMedik && phone) {
                return <></>
            }
        }
        return (
            <Button  size="large" variant="contained">
                <Link href={'/auth'}>Войти</Link>
            </Button>
        )
    }, [isMedik, phone])

  return (
    <>
      <Head>
        <title>СППР по диагностике дерматологических заболеваний</title>
        <meta name="description" content="Определим ваше заболевание без похода к врачу" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header />
        <main>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        СППР по диагностике дерматологических заболеваний
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Определим ваше заболевание без похода к врачу
                    </Typography>
                    <div className={styles.faq}>
                        <Paper className={styles.faqItem}>
                            <div className={styles.faqIcon}>
                                <LoginIcon fontSize='inherit' />
                            </div>
                            <div className={styles.faqDesc}>
                                <p>Войдите по номеру телефона</p>
                            </div>
                        </Paper>
                        <div className={styles.faqArrow}>
                            <ArrowForwardIcon fontSize='inherit' />
                        </div>
                        <Paper className={styles.faqItem}>
                            <div className={styles.faqIcon}>
                                <FeaturedPlayListIcon fontSize='inherit' />
                            </div>
                            <div className={styles.faqDesc}>
                                <p>Выберите имеющиеся симптомы</p>
                            </div>
                        </Paper>
                        <div className={styles.faqArrow}>
                            <ArrowForwardIcon fontSize='inherit' />
                        </div>
                        <Paper className={styles.faqItem}>
                            <div className={styles.faqIcon}>
                                <AssignmentTurnedInIcon fontSize='inherit' />
                            </div>
                            <div className={styles.faqDesc}>
                                <p>Получите предварительный диагноз</p>
                            </div>
                        </Paper>
                    </div>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        {
                            renderButton
                        }
                    </Stack>
                </Container>
            </Box>
        </main>
    </>
  )
}
