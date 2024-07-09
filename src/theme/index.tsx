import { useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import {
    createTheme,
    ThemeOptions,
    StyledEngineProvider,
    ThemeProvider as MUIThemeProvider
} from '@mui/material/styles';

import { palette } from './palette';
import { shadows } from './shadows';
import { typography } from './typography';
import { customShadows } from './custom-shadows';
import { componentsOverrides } from './overrides';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ----------------------------------------------------------------------

type Props = {
    children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
    const themeOptions = useMemo(
        () => ({
            palette: palette('light'),
            shadows: shadows('light'),
            customShadows: customShadows('light'),
            typography,
            spacing: 8,
            shape: { borderRadius: 4 }
        }),
        []
    );

    const theme = createTheme(themeOptions as ThemeOptions);

    theme.components = componentsOverrides(theme);

    return (
        <StyledEngineProvider injectFirst>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </StyledEngineProvider>
    );
}
