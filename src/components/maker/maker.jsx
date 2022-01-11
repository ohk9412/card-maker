import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css'



const Maker = ({FileInput , authService, cardRepository}) => {
    const navigate = useNavigate();
    const navigateState = navigate.state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(navigateState && navigateState.id);

    
    
    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            if(user) {
                setUserId(user.uid);
            } 
            else {
                navigate('/');
            }
        })
    })

    const createOrupdateCard = card => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId,card);
    };

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId,card);
    };
    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor 
                FileInput={FileInput}
                cards={cards} 
                addCard={createOrupdateCard} 
                updateCard={createOrupdateCard} 
                deleteCard={deleteCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer />
        </section>
    )
};

export default Maker;