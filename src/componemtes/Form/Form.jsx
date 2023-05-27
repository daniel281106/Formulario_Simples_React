import React from 'react';
import './Form.scss';

const Form = () => {
    return (
        <>
            <div className='Caixaf'>
                <form action="" className='form'>
                    <div className="separador">
                        <div className="alinhar">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id='nome' className='inputbox' required />
                        </div>
                        <div className="alinhar">
                            <label htmlFor="sobre">sobrenome</label>
                            <input type="text" id='sobre' className='inputbox' />
                        </div>
                    </div>

                    <div className="separador">
                        <div className="alinhar">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" className='inputbox' id='email' />
                        </div>
                        <div className="alinhar">
                            <label htmlFor="tele">Telefone</label>
                            <input type="tel" id='tele' className='inputbox' />
                        </div>
                    </div>

                    <div className="separador">
                        <div className="alinhar">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id='senha' className='inputbox' required />
                        </div>

                        <div className="alinhar">
                            <label htmlFor="senha2">Senha Novamente</label>
                            <input type="password" id='senha2' className='inputbox' required />
                        </div>

                    </div>
                    <div className='btn'>
                        <button>Criar</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Form