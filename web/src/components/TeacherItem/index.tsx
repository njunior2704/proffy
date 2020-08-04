import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://lh3.googleusercontent.com/ogw/ADGmqu_VLXusOjEPBRgJydz0ye6002R89BvvofjA3Uz9=s83-c-mo" alt="Nilton Júnior"/>
                <div>
                    <strong>Nilton Júnior</strong>
                    <span>Física Quântica</span>
                </div>
            </header>

            <p>
                Entusiasta da física quântica, louco.
                <br/> <br/>
                Apaixonado por astrologia e obcecado por passar conhecimento.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato.
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;