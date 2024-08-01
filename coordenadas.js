function convertirAPolares() {
    const radio = parseFloat(document.getElementById('radio').value);
    const anguloGrados = parseFloat(document.getElementById('angulo').value);
    const anguloRadianes = anguloGrados * Math.PI / 180;

    const x = radio * Math.cos(anguloRadianes);
    const y = radio * Math.sin(anguloRadianes);

    document.getElementById('resultadoRectangular').innerText = 
        `Coordenadas Rectangulares: X = ${x.toFixed(2)}, Y = ${y.toFixed(2)}`;
}

function convertirARectangulares() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);

    const radio = Math.sqrt(x * x + y * y);
    const anguloRadianes = Math.atan2(y, x);
    const anguloGrados = anguloRadianes * 180 / Math.PI;

    document.getElementById('resultadoPolar').innerText = 
        `Coordenadas Polares: r = ${radio.toFixed(2)}, θ = ${anguloGrados.toFixed(2)}°`;
}