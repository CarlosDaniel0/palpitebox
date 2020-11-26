import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Nota: 0
  }, []);

  const [success, setSuccess] = useState(false, []);
  const [retorno, setRetorno] = useState({});
  const notas = [0, 1, 2, 3, 4, 5]
  const save = async () => {
    try {
      const response = await fetch('/api/save/', {
        method: 'POST',
        body: JSON.stringify(form)
      });
      const data = await response.json();
      setSuccess(true);
      setRetorno(data);
    } catch (e) {

    }
  }
  const onChange = env => {
    const key = env.target.name;
    const value = env.target.value;
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (
    <div className='pt-6'>
      <PageTitle title='Pesquisa' />
      <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sujestões</h1>
      <p className='text-center mb-6'>
        O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opnião.
      </p>
      { !success &&
        <div className='md:w-1/5 w-1/2 mx-auto'>
          <label className='font-bold'>Seu Nome:</label>
          <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' onChange={onChange} name='Nome' placeholder='Nome' value={form.Nome} />
          <label className='font-bold'>Seu Email:</label>
          <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' onChange={onChange} name='Email' placeholder='Email' value={form.Email} />
          <label className='font-bold'>Seu Whatsapp:</label>
          <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' onChange={onChange} name='Whatsapp' placeholder='Whatsapp' value={form.Whatsapp} />
          <label className='font-bold'>Nota:</label>
          <div className='flex'>
            {notas.map(nota => {
              return (
                <label className='block w-1/6 text-center py-6'>
                  {nota} <br />
                  <input type='radio' name='Nota' onChange={onChange} value={nota}></input>
                </label>
              )
            })}
          </div>
          <button className='mb-6 bg-blue-400 px-6 py-4 font-bold rounded-lg shadow-lg hover:shadow mx-auto' onClick={save}>Salvar</button>
        </div>
      }
      { success &&
        <div className='w-1/5 mx-auto'>
          <p className='mb-6 bg-blue-100  border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com sua sugestão ou crítica</p>
          {
            retorno.showCoupon &&
            <div className='text-center border rounded p-4 my-6'>
              Seu cupom: <br />
              <span className='text-2xl font-bold'>{retorno.Cupom}</span>
              <hr className='border-dashed my-4' />
              <span className='mb-4'>{retorno.Promo}</span>
            </div>
          }
          <p className='mb-6 bg-green-100  border-t border-b border-green-500 text-green-700 px-4 py-3'>Tire um print ou salve esta página e apresente ao garçon.</p>
        </div>
      }
    </div>
  )
}

export default Pesquisa;