import React from 'react';
import PageTitle from '../components/PageTitle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contato = () => {
  return (
    <div>
      <PageTitle title='Contato' />
      <h1 className='text-bold text-4xl text-center mt-4'>Contatos</h1>
      <div className='container text-center block mb-8 mt-2'>
        <a className='block py-2' href='https://api.whatsapp.com/send?phone=8690900909&text=Teste'>
          <FontAwesomeIcon icon={['fab', 'whatsapp']} /> <span>(86) 9.9090-0909</span>
        </a>
        <a className='block py-2' href='mailto:email@teste.com'>
          <FontAwesomeIcon icon={['fas', 'at']} /> <span>email@teste.com</span>
        </a>
        <a className='block py-2' href='https://www.teste.com'>
          <FontAwesomeIcon icon={['fas', 'link']} /> <span>www.teste.com</span>
        </a>
      </div>
    </div>
  )
}

export default Contato;