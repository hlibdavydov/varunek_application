import React, {useState, useEffect} from 'react';
import {QuestionModel} from './Question/QuestionModel';
import {Answer} from './Question/Answer';
import {getQuestions} from './api/Api';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import {green} from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
    CloudDone, Done, DoneAll,
    DoneAllRounded,
    DoneAllTwoTone,
    DoneOutline,
    DoneOutlineOutlined,
    ThumbDown,
    ThumbUp
} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";

const Question = () => {

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            padding: 10,
            width: "90%",

        },
        button: {
            margin: theme.spacing(1, 1, 0, 0),

        },
        label: {
            fontSize: 25,
        },
        card: {
            backgroundColor: "whitesmoke",
            border:" solid red 2px",

        },
        root: {
            display: 'flex',
            alignItems: 'center',
            marginBottom:40,
        },
        wrapper: {
            margin: theme.spacing(1),
            position: 'relative',
        },
        buttonSuccess: {
            backgroundColor: green[500],
            '&:hover': {
                backgroundColor: green[700],
            },
        },
        fabProgress: {
            color: green[500],
            position: 'absolute',
            top: -6,
            left: -6,
            zIndex: 1,
        },
        buttonProgress: {
            color: green[500],
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: -12,
            marginLeft: -12,
        },
    }));

    const [questions, setQuestions] = useState<QuestionModel[]>([]);
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    });
    const timer = React.useRef();
    useEffect(() => {
        // fetch('http://localhost:8080/question')
        //     .then(response => response.json())
        //     .then(data => setQuestions(data))
        setQuestions(QuestionModel.getQuestions())
    }, []);

    const handleButtonClick = () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            // @ts-ignore
            timer.current = window.setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 2000);
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

        }}>

            {
                questions.length > 0 ?
                    questions.map((question: QuestionModel, index: number) => {
                        return (

                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "40vw",
                                alignItems: "flex-start",
                                padding: " 1vh 0 1vh 1vw",
                            }}>
                                <FormControl component="fieldset" className={classes.formControl}>

                                    <Card className={classes.card} raised={true}>
                                        <CardContent>
                                            <FormLabel className={classes.label}
                                                       component="legend">{question.text}</FormLabel>
                                            <RadioGroup aria-label="gender" name="gender1">
                                                {question.answers.map(((answer, id) => {
                                                    return (
                                                        <FormControlLabel key={id} value={answer.text}
                                                                          control={<Radio/>}
                                                                          label={answer.text}/>
                                                    )
                                                }))}

                                            </RadioGroup>
                                        </CardContent>
                                        <CardActions>{`${index + 1} / ${questions.length}`}
                                            <IconButton color={"primary"}><ThumbUp/></IconButton>
                                            <IconButton color={"secondary"}><ThumbDown/></IconButton>
                                        </CardActions>


                                    </Card>

                                </FormControl>
                            </div>
                        )
                    }) :
                    <div>
                    </div>
            }




            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <Fab
                        aria-label="save"
                        color="primary"
                        className={buttonClassname}
                        onClick={handleButtonClick}
                    >
                        {success ? <Done fontSize={"large"} /> : <DoneOutline />}
                    </Fab>
                    {loading && <CircularProgress size={68} className={classes.fabProgress} />}
                </div>
                <div className={classes.wrapper}>
                    <Button
                        variant="contained"
                        color="primary"
                        className={buttonClassname}
                        disabled={loading}
                        onClick={handleButtonClick}
                    >
                        Check Answers
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>
            </div>

        </div>
    );
};

export default Question;
