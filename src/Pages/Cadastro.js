import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cadastro.module.css'; // Importa o CSS Module

const Cadastro = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            navigate('/');
        } else {
            setError('Email ou senha incorretos.');
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (email === '' || password === '' || name === '' || confirmPassword === '') {
            setError('Por favor, preencha todos os campos.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Senhas não conferem.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            setError('Email já cadastrado.');
            return;
        }

        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        setSuccess('Cadastro realizado com sucesso!');

        setTimeout(() => {
            setIsLogin(true);
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setName('');
            setSuccess('');
            setError('');
        }, 2000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <div className={styles.formHeader}>
                    <button
                        className={`${styles.formToggleButton} ${isLogin ? styles.formToggleButtonActive : ''}`}
                        onClick={handleToggle}
                    >
                        Login
                    </button>
                    <button
                        className={`${styles.formToggleButton} ${!isLogin ? styles.formToggleButtonActive : ''}`}
                        onClick={handleToggle}
                    >
                        Cadastro
                    </button>
                </div>
                {error && <div className={`${styles.alert} ${styles.alertDanger}`}>{error}</div>}
                {success && <div className={`${styles.alert} ${styles.alertSuccess}`}>{success}</div>}
                {isLogin ? (
                    <div className={styles.formSection}>
                        <h2>Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className={styles.formGroup}>
                                <label htmlFor="loginEmail">Email:</label>
                                <input
                                    type="email"
                                    id="loginEmail"
                                    placeholder="Digite seu e-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="loginPassword">Senha:</label>
                                <input
                                    type="password"
                                    id="loginPassword"
                                    placeholder="Digite sua senha"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className={styles.submitButton}>Entrar</button>
                        </form>
                    </div>
                ) : (
                    <div className={styles.formSection}>
                        <h2>Cadastro</h2>
                        <form onSubmit={handleRegister}>
                            <div className={styles.formGroup}>
                                <label htmlFor="registerName">Nome:</label>
                                <input
                                    type="text"
                                    id="registerName"
                                    placeholder="Digite seu nome"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="registerEmail">Email:</label>
                                <input
                                    type="email"
                                    id="registerEmail"
                                    placeholder="Digite seu e-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="registerPassword">Senha:</label>
                                <input
                                    type="password"
                                    id="registerPassword"
                                    placeholder="Digite sua senha"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="registerConfirmPassword">Confirmar Senha:</label>
                                <input
                                    type="password"
                                    id="registerConfirmPassword"
                                    placeholder="Confirme sua senha"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className={styles.submitButton}>Cadastrar</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cadastro;
