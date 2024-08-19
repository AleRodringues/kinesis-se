import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
    const navigate = useNavigate();
    const [editMode, setEditMode] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('loggedInUser')) || {});

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        navigate('/');
    };

    const handleEditToggle = () => {
        setEditMode(!editMode);
    };

    const handleSaveChanges = (event) => {
        event.preventDefault();
        const updatedUser = {
            ...user,
            name: event.target.name.value,
            email: event.target.email.value,
            address: event.target.address.value,
            phone: event.target.phone.value,
        };
        localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
        setUser(updatedUser); // Atualiza o estado com as novas informações
        alert('Alterações salvas com sucesso!');
        setEditMode(false);
    };

    return (
        <div className="user-profile-container">
            <h1>Olá, {user.name}</h1>

            {editMode ? (
                <form onSubmit={handleSaveChanges} className="user-profile-form">
                    <div className="user-profile-form-group">
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={user.name}
                            required
                        />
                    </div>
                    <div className="user-profile-form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            defaultValue={user.email}
                            required
                        />
                    </div>
                    <div className="user-profile-form-group">
                        <label htmlFor="address">Endereço:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            defaultValue={user.address || ''}
                        />
                    </div>
                    <div className="user-profile-form-group">
                        <label htmlFor="phone">Telefone:</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            defaultValue={user.phone || ''}
                        />
                    </div>
                    <button type="submit" className="user-profile-save-button">Salvar Alterações</button>
                    <button type="button" onClick={handleEditToggle} className="user-profile-cancel-button">Cancelar</button>
                </form>
            ) : (
                <>
                    <div className="user-profile-info">
                        <p>Email: {user.email}</p>
                        <p>Endereço: {user.address || 'Não informado'}</p>
                        <p>Telefone: {user.phone || 'Não informado'}</p>
                    </div>
                    <button onClick={handleEditToggle} className="user-profile-edit-button">Editar Perfil</button>
                </>
            )}

            <button onClick={handleLogout} className="user-profile-logout-button">Sair</button>
        </div>
    );
};

export default UserProfile;
