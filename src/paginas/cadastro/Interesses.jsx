import { useState } from 'react';
import { Row, Col } from 'react-grid-system';

import { Botao } from 'componentes/Botao/Botao';
import GrupoRadio from 'componentes/Radio/GrupoRadio';
import { Tipografia } from 'componentes/Tipografia/Tipografia';

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
            <div style={{ textAlign: 'center' }}>
                <Tipografia variante="h1" componente="h1">
                    Crie seu cadastro
                </Tipografia>
                <Tipografia variante="h3" componente="h2">
                    Qual a área de interesse?
                </Tipografia>
            </div>
            <GrupoRadio
                opcoes={opcoes}
                valor={opcao}
                onChange={setOpcao}
            />
            <Row>
                <Col>
                <Botao variante="secundaria">Anterior</Botao>
                </Col>
                <Col>
                <div style={{ textAlign: 'right' }}>
                    <Botao variante="primaria">Próxima</Botao>
                </div>
                </Col>
            </Row>
            
        </>
    )
}

export default Interesses;