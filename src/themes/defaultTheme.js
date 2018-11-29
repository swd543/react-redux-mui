import { blueGrey, green } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme=createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: { main: blueGrey[500] }, // Purple and green play nicely together.
        secondary: { main: green[700] }, // This is just green.A700 as hex.
    },
})

export default theme;