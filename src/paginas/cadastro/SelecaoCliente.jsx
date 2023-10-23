import { Link as RouterLink } from 'react-router-dom';
import { Row, Col } from 'react-grid-system';

import cliente from './assets/cliente.png';
import freela from './assets/freela.png';
import { Link } from 'componentes/Link/Link';
import { Tipografia } from 'componentes/Tipografia/Tipografia';

const SelecaoCliente = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Tipografia variante="h1" componente="h1">
                Crie seu cadastro
            </Tipografia>
            <Tipografia variante="h3" componente="h2">
                Como podemos te ajudar?
            </Tipografia>
            <Row>
                <Col md={6} sm={12}>
                    <RouterLink to="interesses">
                        <img src={cliente} alt="" />
                        <Tipografia variante="body" componente="body">
                            Sou cliente e preciso de um freela!
                        </Tipografia>
                    </RouterLink>
                </Col>
                <Col md={6} sm={12}>
                    <img src={freela} alt="" />
                    <Tipografia variante="body" componente="body">
                        Sou um freela e preciso de clientes!
                    </Tipografia>
                </Col>
            </Row>
            <div>
                <Tipografia variante="body2" componente="body2">
                    Já tem conta?
                </Tipografia>
                <p>
                    <Link variante="secundaria">Faça login!</Link>
                </p>
            </div>
        </div>
    )
}

export default SelecaoCliente;