import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className="bg-gray-700 p-4">
      <div className='container mx-auto text-center font-bold text-white'>
        Projeto Desenvolvido por: {' '}
        Carlos Daniel / {' '}
        <a className='p-2' target='_blank' href="https://www.linkedin.com/in/carlos-daniel0/">
          <FontAwesomeIcon icon={['fab', 'linkedin']} /> {' '}
          <span className='hover:underline'>Linkedin</span>
        </a> / {' '}
        <a className='p-2' target='_blank' href='https://github.com/carlosdaniel0'>
          <FontAwesomeIcon icon={['fab', 'github']} /> {' '}
          <span className='hover:underline'>Github</span>
        </a>
        <div className='mt-4'>
          <img className='inline p-4' src='/logo_semana_fsm.png' width='220px' />
          <img className='inline p-4' src='/logo_devpleno.png' width='214px' />
        </div>
      </div>
    </div >
  )
}

export default Footer;