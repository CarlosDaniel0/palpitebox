import React from 'react';
import Link from 'next/link';
import PageTitle from '../components/PageTitle';

const Sobre = () => {
  return (
    <div >
      <PageTitle title='Sobre' />
      <p className='my-6 text-center'>
        Exemplo de sobre <br />
      </p>
    </div>
  );
}

export default Sobre;