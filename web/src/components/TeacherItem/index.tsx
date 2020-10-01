import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/53702713?s=460&u=77079df5a47da12290ff48f2da2529c5f8e4b64c&v=4" alt="Nicole Bidigaray"/>
        <div>
          <strong>Nicole Bidigaray</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias Front-end e Back-end.
        <br /><br />
        Apaixonada por tecnologia e por mudar a vida das pessoas através de novas experiências.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
