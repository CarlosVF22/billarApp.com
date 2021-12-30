import React from 'react';

// import axios from 'axios';

import './gameTable.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import { Chronometer } from './../Chronometer';
import { useTimer } from './../../hooks/useTimer';
import {ConsumedGameTable} from './../ConsumedGameTable';


import tableImage from './../../image/table.png';

function GameTable() {
    const [valueGame, setValueGame] = React.useState(0);
    const baseURL = 'http://localhost:9000/api/v1';

    const costHourGame = 3000;

    const {
        timer,
        isActive,
        isPaused,
        handleStart,
        handlePause,
        handleReset,
        textButtonStart,
        timeInFormat
    } = useTimer(0);

    const products = ['cerveza', 'ron', 'aguardiente', 'derby']; // -> llamado a API con useEffect();
    
    const finishGame = (timer) => {
        const getHours = Math.floor(timer / 3600);
        const minutes = Math.floor(timer / 60);
        const getMinutes = minutes % 60;
        console.log(`horas y minutos jugados: ${getHours}, ${getMinutes}`);

        if (getHours != 0 && getMinutes != 0 && getMinutes <= 9) {
            const value = getHours * costHourGame;
            setValueGame(value);
        } else if (getHours != 0 && getMinutes != 0 && getMinutes >= 10) {
            const value = (getHours + 1) * costHourGame;
            setValueGame(value);
        } else if (getHours == 0 && getMinutes != 0) {
            const value = costHourGame;
            setValueGame(value);
        }
        handleReset();
    }

    return (
        <Container className='gameTable'>
            <Image src={tableImage} fluid={true} />
            <Chronometer
                timeInFormat={timeInFormat}
                timer={timer}
                isActive={isActive}
                isPaused={isPaused}
                handleStart={handleStart}
                handlePause={handlePause}
                handleReset={handleReset}
                textButtonStart={textButtonStart}
            />
            <Button
                onClick={() => finishGame(timer)}
            >
                {'Terminar juego'}
            </Button>
            <ConsumedGameTable
                valueGame = {valueGame}
            />
        </Container>
    );
}

export { GameTable }