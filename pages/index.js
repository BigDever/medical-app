import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {AppBar, Box, Button, Container, Stack, Toolbar, Typography} from "@mui/material";
import Link from "next/link";

const isMedic = false;

let navItems = [
    {
        name: 'Главная',
        href: '/',
    },
    {
        name: 'Заполнить анкету',
        href: '/form',
    },
    {
        name: 'Диагнозы',
        href: '/diagnosis',
    },
    {
        name: 'Войти',
        href: '/sign',
    }
];

if (isMedic) {
    navItems[1] = {
        name: 'Анкеты пациентов',
        href: '/list'
    };
    navItems.splice(2, 1);
}

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Кож-помощь</title>
        <meta name="description" content="Определим ваше заболевание без похода к врачу" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" position="relative">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Кож-помощь
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item.name} sx={{ color: '#fff' }}>
                                <Link href={item.href}>{item.name}</Link>
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
        <main>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Кож-помощь
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Определим ваше заболевание без похода к врачу
                    </Typography>
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
    </div>
  )
}
