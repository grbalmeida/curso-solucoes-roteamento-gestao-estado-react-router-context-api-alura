import { createContext, useState } from 'react';

const usuarioInicial = {
    perfil: '',
    interesse: '',
    nomeCompleto: '',
    uf: '',
    cidade: '',
    email: '',
    senha: '',
    senhaConfirmada: '',
};

export const CadastroUsuarioContext = createContext({
    usuario: usuarioInicial,
    setPerfil: () => null,
    setInteresse: () => null,
    setNomeCompleto: () => null,
    setUf: () => null,
    setEmail: () => null,
    setSenha: () => null,
    setSenhaConfirmada: () => null,
});

export const useCadastroUsuarioContexto = () => {
    return useState(CadastroUsuarioContext);
};

export const CadastroUsuarioProvider = ({ children }) => {
    
    const [usuario, setUsuario] = useState(usuarioInicial);

    const setPerfil = (perfil) => {
        setUsuario(estadoAnterior => ({
            ...estadoAnterior,
            perfil
        }));
    };

    const setInteresse = (interesse) => {
        setUsuario(estadoAnterior => ({
            ...estadoAnterior,
            interesse
        }));
    };

    const setNomeCompleto = (nomeCompleto) => {
        setUsuario(estadoAnterior => ({
            ...estadoAnterior,
            nomeCompleto
        }));
    };

    const setUf = (uf) => {
        setUsuario(estadoAnterior => ({
            ...estadoAnterior,
            uf
        }));
    };

    const setCidade = (cidade) => {
        setUsuario(estadoAnterior => ({
            ...estadoAnterior,
            cidade
        }));
    }

    const setEmail = (email) => {
        setUsuario(estadoAnterior => ({
            ...estadoAnterior,
            email
        }));
    };

    const setSenha = (senha) => {
        setUsuario(estadoAnterior => ({
            ...estadoAnterior,
            senha
        }));
    };

    const setSenhaConfirmada = (senhaConfirmada) => {
        setUsuario(estadoAnterior => ({
            ...estadoAnterior,
            senhaConfirmada
        }));
    };

    const contexto = {
        usuario,
        setPerfil,
        setInteresse,
        setNomeCompleto,
        setUf,
        setCidade,
        setEmail,
        setSenha,
        setSenhaConfirmada
    };
    
    return <CadastroUsuarioContext.Provider value={contexto}>
        {children}
    </CadastroUsuarioContext.Provider>
}