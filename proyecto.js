function votar(candidato) {
    const confirmacion = window.confirm(`¿Está seguro que quiere votar por ${candidato}?`);
    if (confirmacion) {
        document.getElementById('mensaje-voto').style.display = 'block';
        document.getElementById('mensaje-voto').textContent = `¡Gracias por tu voto por ${candidato}!`;
    }
}



