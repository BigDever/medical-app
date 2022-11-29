import Head from 'next/head'
import {Box, Button, Container, Paper, Stack, Typography} from "@mui/material";
import Link from "next/link";
import {Header} from "../components/Header";
import styles from '../styles/Home.module.css';
import LoginIcon from '@mui/icons-material/Login';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

export default function Home() {

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
                        <Button size="large" variant="contained">
                            <Link href={'/sign'}>Войти</Link>
                        </Button>
                    </Stack>
                </Container>
            </Box>
        </main>
    </>
  )
}
