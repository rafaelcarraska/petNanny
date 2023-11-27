import { useState } from "react";
import './style.css';

function CadastroTutor() {
    return (
      <div className="container">
        <div className='resgister container'></div>
        <h1 className='register--title'>cadastro de tutor</h1>
        <input
          type='text'
          name='name'
          placeholder='Nome'
          className='register--input'
        />
        <input
          type='number'
          name=''
          placeholder='Idade'
          className='register--input'
        />
        <input
          type='text'
          name='description'
          placeholder='Breve descrição sobre o tutor, sua experiência e amor pelos animais.'
          className='register--input'
        />
  
      </div>
    );
  }
  
  export default CadastroTutor;
  