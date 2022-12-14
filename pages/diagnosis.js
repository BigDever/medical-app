import {Header} from "../components/Header";
import Head from "next/head";
import {
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

export default function Diagnosis () {
    return (
        <>
            <Head>
                <title>СППР по диагностике дерматологических заболеваний</title>
                <meta name="description" content="Определим ваше заболевание без похода к врачу" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Container maxWidth="md" sx={{pt: 4}}>
                <Typography variant="h3" component="h3" sx={{mb: 4}}>
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
                                        Атопический дерматит
                                    </TableCell>
                                    <TableCell align="right">50%</TableCell>
                                </TableRow>
                            <TableRow
                                key='2'
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Лишай
                                </TableCell>
                                <TableCell align="right">35%</TableCell>
                            </TableRow>
                            <TableRow
                                key='3'
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    Грибовидный микоз
                                </TableCell>
                                <TableCell align="right">15%</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}
