import { Link as RouterLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { Row, Col } from 'react-grid-system';

import { Botao } from 'componentes/Botao/Botao';
import CabecalhoCadastro from 'componentes/CabecalhoCadastro/CabecalhoCadastro';

import conclusao from './assets/cliente-concluido.png';

const ImagemEstilizada = styled.img`
    max-width: 100%;
    border-radius: 16px;
`;

const Concluido = () => {
    return (
        <>
            <CabecalhoCadastro
                titulo="Seu perfil está completo"
                subtitulo="Agora é só começar a se conectar com os melhores freelancers do mercado!"
            />
            <figure>
                <ImagemEstilizada src={conclusao} alt="" />
            </figure>
            <Row justify="center">
                <Col lg={6} md={6} sm={6} style={{ textAlign: 'center' }}>
                    <RouterLink to='/cadastro'>
                        <Botao variante="secundaria">
                            Voltar para a home
                        </Botao>
                    </RouterLink>
                </Col>
            </Row>
        </>
    )
}

export default Concluido;