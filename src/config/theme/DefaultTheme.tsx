import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        primary: {
            softred: "#fe7867",
            yellow: "#fad400",
            darkdesaturatedcyan: "#25564b",
            darkblue: "#19536b",
            darkmoderatecyan: "#8ad2c4",
        },
        neutral: {
            verydarkdesaturatedblue: "#23303e",
            verydarkgrayishblue: "	#5a636c",
            darkgrayishblue: "#818498",
            grayishblue: "#a7abae",
            white: "#ffffff",
        }
    },
    font: {
        familybarlow: {
            barlow: "'Barlow', sans-serif",
            fontweights: 600 
        },
        familyfraunces: {
            fraunces: "'Fraunces', serif",
            fontweights: {
                bold: 700,
                extrabold: 900
            }
        }
    }
}

interface DefaultThemeProps {
    children: React.ReactNode;
};

const DefautTheme: React.FC<DefaultThemeProps> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default DefautTheme;