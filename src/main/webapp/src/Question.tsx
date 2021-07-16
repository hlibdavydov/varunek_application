import React, {useState, useEffect} from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {QuestionModel} from './Question/QuestionModel';
import {Answer} from './Question/Answer';
import {getQuestions} from './api/Api';

const Question = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/question')
            .then(response => response.json())
            .then(data => setQuestions(data))
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <header>jakas zmiana</header>
            <InputGroup onChange={(event: any) => {
                console.log(event.target.value);
            }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
            >
                {
                    questions.length > 0 ?
                        questions.map((question: QuestionModel, index: number) => {
                            return (
                                <div>
                                    <h1>
                                        {question.text}
                                    </h1>
                                    {
                                        question.answers.map((answer, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        marginTop: 10
                                                    }}>
                                                    <InputGroup.Radio value={answer} name={question.text}
                                                                      aria-label="Radio button for following text input"/>
                                                    <InputGroup.Text>{answer.text}</InputGroup.Text>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }) :
                        <div>
                        </div>
                }
            </InputGroup>
            <Button onClick={() => {
                console.log('click')
            }} style={{marginTop: 15}} variant={'primary'}>Check</Button>
        </div>
    );
};

export default Question;
