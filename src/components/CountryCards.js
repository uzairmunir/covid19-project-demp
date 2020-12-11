import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
        textDecoration:'bold',
        color:'#de2323'
    },
    pos: {
        marginBottom: 12,
    },
});

export default function CountryCard({ cases, total, title }) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} >
                    <h2>{title}</h2>
                </Typography>
                <Typography >
                    <h3>{total}</h3>
                </Typography>
                <Typography variant="h5" >
                    <h4>Today  :  {cases}</h4>
                </Typography>
            </CardContent>

        </Card>
    );
}