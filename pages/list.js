import {Header} from "../components/Header";
import {Divider, ListItem, ListItemText, Typography, List as ListMUI, Container} from "@mui/material";
import styles from "../styles/List.module.css";
import Head from "next/head";

export default function List () {
    return (
        <>
            <Head>
                <title>Кож-помощь</title>
                <meta name="description" content="Определим ваше заболевание без похода к врачу" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Container maxWidth="md" sx={{pt: 4}}>
                <ListMUI sx={{ width: '100%', maxWidth: 1200, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start" className={styles.listItem}>
                        <ListItemText
                            primary="Олег Царев"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Возраст: 25
                                    </Typography>
                                    {" Диагноза нет"}
                                </>
                            }
                        />
                    </ListItem>
                    <ListItem alignItems="flex-start" className={styles.listItem}>
                        <ListItemText
                            primary="Анастасия Царева"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Возраст: 23
                                    </Typography>
                                    {" Диагноза нет"}
                                </>
                            }
                        />
                    </ListItem>
                </ListMUI>
            </Container>
        </>
    )
}
