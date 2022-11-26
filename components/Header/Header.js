import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import styles from './Header.module.css';
import Link from "next/link";
import {useRouter} from "next/router";

const isMedic = true;

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

export const Header = () => {

    const router = useRouter()

    return (
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
                        {navItems.map((item) => {
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
