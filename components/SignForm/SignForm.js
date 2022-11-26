import {Avatar, Box, Button, Container, CssBaseline, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {useState} from "react";

export const SignForm = () => {
    const [phoneSended, setPhoneSended] = useState(false);

    const handlePhoneSend = () => {
        setPhoneSended(true);
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Войти
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="Введите номер телефона"
                        name="phone"
                        autoFocus
                        disabled={phoneSended}
                    />
                    {phoneSended && <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Смс-код"
                        type="password"
                        id="password"
                    />}
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={handlePhoneSend}
                    >
                        {phoneSended ? 'Отправить смс-код' : 'Получить смс-код'}
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}
