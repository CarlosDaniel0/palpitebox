import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, err } = useSWR('api/getPromo', fetcher);
  return (
    <div>
      <PageTitle title='Home' />
      <p className='mt-6 text-center'>
        O restaurante sempre busca por atender melhor meus clientes. <br />
        Por isso, estamos sempre abertos ao ouvir sua opinião.
      </p>
      <div className='text-center my-12'>
        <Link href='/pesquisa'>
          <a className='bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow'>Dar opinião ou sugestão</a>
        </Link>
      </div>
      {!data && <p className='my-12 text-center' >Carregando...</p>}
      {data && data.showCoupon &&
        <p className='my-12 text-center'>
          {data.message}
        </p>
      }
    </div>
  )
}

export default Index;