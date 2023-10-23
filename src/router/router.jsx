import { createBrowserRouter } from 'react-router-dom';
import SelecaoCliente from 'paginas/cadastro/SelecaoCliente';
import LayoutBaseCadastro from 'paginas/cadastro/LayoutBaseCadastro';
import LayoutBase from '../paginas/LayoutBase';
import GrupoRadio from 'componentes/Radio/GrupoRadio';

const opcoes = [{valor: 'TI', label: 'TI e Programação'}, {valor: 'DE', label: 'Design'}];

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutBase />,
        children: [
            {
                path: 'cadastro',
                element: <LayoutBaseCadastro />,
                children: [
                    {
                        path: '',
                        element: <SelecaoCliente />
                    },
                    {
                        path: 'interesses',
                        element: <>
                            <h1>Interesses</h1>
                            <GrupoRadio opcoes={opcoes} valor="TI" onChange={() => {}} />
                        </>
                    },
                    {
                        path: 'dados-pessoais',
                        element: <h1>Dados pessoais</h1>
                    },
                    {
                        path: 'concluido',
                        element: <h1>Concluído</h1>
                    }
                ]
            }
        ],
    }
]);