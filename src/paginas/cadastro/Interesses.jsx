import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Row, Col } from 'react-grid-system';

import { Botao } from 'componentes/Botao/Botao';
import GrupoRadio from 'componentes/Radio/GrupoRadio';
import CabecalhoCadastro from 'componentes/CabecalhoCadastro/CabecalhoCadastro';

const opcoes = [
    {
        valor: 1,
        label: 'TI e Programação',
    },
    {
        valor: 2,
        label: 'Design e Multimídia',
    },
    {
        valor: 3,
        label: 'Revisão',
    },
    {
        valor: 4,
        label: 'Tradução',
    },
    {
        valor: 5,
        label: 'Transcrição',
    },
    {
        valor: 6,
        label: 'Marketing',
    },
];

const Interesses = () => {
    const [opcao, setOpcao] = useState('');

    return (
        <>
            <CabecalhoCadastro
                titulo="Crie seu cadastro"
                subtitulo="Qual a área de interesse?"
            />
            <GrupoRadio
                opcoes={opcoes}
                valor={opcao}
                onChange={setOpcao}
            />
            <Row>
                <Col>
                    <RouterLink to="/cadastro">
                        <Botao variante="secundaria">Anterior</Botao>
                    </RouterLink>
                </Col>
                <Col>
                <div style={{ textAlign: 'right' }}>
                    <RouterLink to="/cadastro/dados-pessoais">
                        <Botao variante="primaria">Próxima</Botao>
                    </RouterLink>
                </div>
                </Col>
            </Row>
            
        </>
    )
}

export default Interesses;