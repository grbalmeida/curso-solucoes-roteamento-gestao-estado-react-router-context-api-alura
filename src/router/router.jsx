import { createBrowserRouter } from 'react-router-dom';

import SelecaoCliente from 'paginas/cadastro/SelecaoCliente';
import Interesses from 'paginas/cadastro/Interesses';
import LayoutBaseCadastro from 'paginas/cadastro/LayoutBaseCadastro';
import LayoutBase from 'paginas/LayoutBase';

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
                        element: <Interesses />
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