import React from 'react';
import Card_Add_Form from '../card_add_form/card_add_form';
import Card_Edit_Form from '../card_edit_form/card_edit_form';
import styles from './editor.module.css'

const Editor = ({FileInput, cards, addCard, updateCard, deleteCard}) => (
            <section className={styles.editor}>
                <h1 className={styles.title}>Card Maker</h1>
                {Object.keys(cards).map(key => (
                <Card_Edit_Form key={key}
                FileInput={FileInput}
                card={cards[key]} 
                updateCard={updateCard} 
                deleteCard={deleteCard}/>
        ))}
            <Card_Add_Form FileInput={FileInput} onAdd={addCard}/>
            </section>
    );

export default Editor;