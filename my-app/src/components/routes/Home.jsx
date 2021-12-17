import * as React from 'react';

export default function Home() {
    return (
        <main>
            <h2>Home</h2>
            <h3>Bienvenido a MiniJuegos React</h3>
            <p>Aquí podrás disfritar de una serie de MiniJuegos</p>
            <p>Seleccione el juego al que quiera jugar en la barra de navegación</p>
            <div>
                <img src={'minijuegos.jpg'} className="img" alt="logo" />
            </div>
        </main>
    );
}