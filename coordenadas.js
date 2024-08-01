function convertirAPolares(radio, anguloGrados) {
    const anguloRadianes = anguloGrados * Math.PI / 180;

    const x = radio * Math.cos(anguloRadianes);
    const y = radio * Math.sin(anguloRadianes);

    return { x: x.toFixed(2), y: y.toFixed(2) };
}

function convertirARectangulares(x, y) {
    const radio = Math.sqrt(x * x + y * y);
    const anguloRadianes = Math.atan2(y, x);
    const anguloGrados = anguloRadianes * 180 / Math.PI;

    return { radio: radio.toFixed(2), anguloGrados: anguloGrados.toFixed(2) };
}

function manejarConversionPolares() {
    const radio = parseFloat(document.getElementById('radio').value);
    const anguloGrados = parseFloat(document.getElementById('angulo').value);

    const coordenadasRectangulares = convertirAPolares(radio, anguloGrados);

    document.getElementById('resultadoRectangular').innerText = 
        `Coordenadas Rectangulares: X = ${coordenadasRectangulares.x}, Y = ${coordenadasRectangulares.y}`;
}

function manejarConversionRectangulares() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);

    const coordenadasPolares = convertirARectangulares(x, y);

    document.getElementById('resultadoPolar').innerText = 
        `Coordenadas Polares: r = ${coordenadasPolares.radio}, θ = ${coordenadasPolares.anguloGrados}°`;
}