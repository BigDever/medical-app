import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import styles from './Header.module.css';
import Link from "next/link";
import {useRouter} from "next/router";
import {firebase} from "../../firebase/clientApp";
import {useEffect, useState} from "react";
//
// const isMedic = false;
//
// if (isMedic) {
//     navItems[1] = {
//         name: 'Анкеты пациентов',
//         href: '/list'
//     };
//     navItems.splice(2, 1);
// {
// name: 'Войти',
// href: '/auth',
// }
// }


export const Header = () => {
    const [navItems, setNavItems] = useState()
    const router = useRouter()

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                setNavItems(
                    [
                        {
                            name: 'Главная',
                            href: '/',
                        },
                        {
                            name: 'Заполнить анкету',
                            href: '/form',
                        },
                        {
                            name: 'Мой кабинет',
                            href: '/lk',
                        },
                    ]
                )
            } else {
                setNavItems(
                    [
                        {
                            name: 'Главная',
                            href: '/',
                        },
                        {
                            name: 'Заполнить анкету',
                            href: '/form',
                        },
                        {
                            name: 'Войти',
                            href: '/auth',
                        }
                    ]
                )
            }
        });
    }, [])

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" position="relative">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        СППР по диагностике дерматологических заболеваний
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {(navItems || []).map((item) => {
                            const isActive = item.href === router.asPath;
                            return (
                                <Button disabled={isActive} className={`${styles.link} ${isActive ? styles.active : ''}`} key={item.name}
                                        sx={{color: '#fff'}}>
                                    <Link href={item.href}>{item.name}</Link>
                                </Button>
                            )
                        })}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
