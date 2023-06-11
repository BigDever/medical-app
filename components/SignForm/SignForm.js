import {useEffect, useState} from "react";
import { useRouter } from 'next/router'
import {Avatar, Box, Button, Container, CssBaseline, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {auth, firebase} from "../../firebase/clientApp";
import { setCookie } from 'cookies-next';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber  } from "firebase/auth";

export const SignForm = ({getSMS}) => {
    const router = useRouter()
    const [phoneSended, setPhoneSended] = useState(false);
    const [phone, setPhone] = useState('')
    const [code, setCode] = useState('')
    const [reCaptcha, setReCaptcha] = useState()


    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const handleCodeChange = (e) => {
        setCode(e.target.value)
    }
    setCookie('phoneUser', '+79509191231')
    const handleClick = () => {
        window.confirmationResult.confirm(code).then(result => {
            console.log(result)

            //setCookie('phoneUser', result.user.phoneNumber)
            router.push('/form')
        }).catch(e => console.log(e))
    }

    const handleClickSendCode = () => {
        setPhoneSended(true)
        console.log(phone, window.recaptchaVerifier)
        firebase.auth().signInWithPhoneNumber(phone, window.recaptchaVerifier).then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            // ...
        }).catch((error) => {
            console.log(error)
        })
    }
    useEffect(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha', {
            'size': 'invisible',
            'callback': (response) => {
                console.log("This is not fired on loading", response)
            }
        })

    }, [])

    return (
        <Container component="main" maxWidth="xs">
            <div id='recaptcha'></div>
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
                        onChange={handlePhoneChange}
                        value={phone}
                    />
                    {phoneSended && <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Смс-код"
                        type="password"
                        id="password"
                        onChange={handleCodeChange}
                    />}
                    {
                        phoneSended ? <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleClick}
                        >
                            Отправить смс-код
                        </Button>
                             : <Button
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleClickSendCode}
                            >
                                Получить смс-код
                            </Button>
                    }

                </Box>
            </Box>
        </Container>
    )
}
