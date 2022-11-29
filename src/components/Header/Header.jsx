import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";

export const Header = ({navItems}) => (
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
                    {navItems.map((item) => (
                        <Button key={item} sx={{ color: '#fff' }}>
                            {item}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
)
