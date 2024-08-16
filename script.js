function mostrarFormulario() {
    const figura = document.getElementById("figura").value;
    const formulario = document.getElementById("formulario");
    const imagen = document.getElementById("imagen");
    const calcularBtn = document.getElementById("calcular");
    formulario.innerHTML = ""; 
    imagen.innerHTML = ""; 
    calcularBtn.style.display = "none"; 

    if (figura === "cuadrado") {
        imagen.innerHTML = "<img src='imagenes/cuadrado.jpeg' alt='Cuadrado'>";
        formulario.innerHTML = `
            <label for="lado">Lado:</label>
            <input type="number" id="lado" placeholder="Ingresa el valor del lado">
        `;
        calcularBtn.style.display = "block";
    } else if (figura === "rectangulo") {
        imagen.innerHTML = "<img src='imagenes/rectangulo.jpeg' alt='Rectángulo'>";
        formulario.innerHTML = `
            <label for="base">Base:</label>
            <input type="number" id="base" placeholder="Ingresa el valor de la base">
            <label for="altura">Altura:</label>
            <input type="number" id="altura" placeholder="Ingresa el valor de la altura">
        `;
        calcularBtn.style.display = "block";
    } else if (figura === "trapecio") {
        imagen.innerHTML = "<img src='imagenes/trapecio.jpeg' alt='Trapecio'>";
        formulario.innerHTML = `
            <label for="base1">Base mayor:</label>
            <input type="number" id="base1" placeholder="Ingresa el valor de la base mayor">
            <label for="base2">Base menor:</label>
            <input type="number" id="base2" placeholder="Ingresa el valor de la base menor">
            <label for="altura">Altura:</label>
            <input type="number" id="altura" placeholder="Ingresa el valor de la altura">
        `;
        calcularBtn.style.display = "block";
    }
}

function calcularArea() {
    const figura = document.getElementById("figura").value;
    let area = 0;

    if (figura === "cuadrado") {
        const lado = document.getElementById("lado").value;
        area = lado * lado;
    } else if (figura === "rectangulo") {
        const base = document.getElementById("base").value;
        const altura = document.getElementById("altura").value;
        area = base * altura;
    } else if (figura === "trapecio") {
        const base1 = document.getElementById("base1").value;
        const base2 = document.getElementById("base2").value;
        const altura = document.getElementById("altura").value;
        area = ((parseFloat(base1) + parseFloat(base2)) * altura) / 2;
    }

    document.getElementById("resultado").innerText = "El área es: " + area;
}