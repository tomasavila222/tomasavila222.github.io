//MI SEGUIMIENTO PROYECTO
//classconstructora
class Libro {
    constructor(id, autor, titulo, precio, imagen) {
      //propiedades o atributos
      (this.id = id),
        (this.autor = autor),
        (this.titulo = titulo),
        (this.precio = precio),
        (this.imagen = imagen);
    }
    //métodos
    mostrarInfoLibro() {
      console.log(
        `El titulo es ${this.titulo}, el autor es ${this.autor} y su precio es ${this.precio}`
      );
    }
  }
   
  const libro1 = new Libro(
    1,
    "Jim Afremow",
    "La mente del campeon",
    5500,
    "lamentedelcampeon.jpeg"
  );
  
  const libro2 = new Libro(
    2,
    "James Matthew Barrie",
    "Cerebro de pan",
    3400,
    "cerebrodepan.png"
  );

  const libro3 = new Libro(
    3,
    "David Marchante Domingo",
    "Ponte en Forma sin Perder el Tiempo",
    4500,
    "ponteenforma.jpeg"
  );
  
  const estanteria = [];
  estanteria.push(libro1, libro2,libro3);
  
  //FUNCTIONS proyecto:
  //functions para el menú:
  function agregarLibro(array) {
    let autorIngresado = prompt("Ingrese el nombre del autor");
    let tituloIngresado = prompt("Ingrese el titulo del libro");
    let precioIngresado = parseInt(prompt("Ingrese el precio del libro"));
  
    //hacerlo con la function constructora
    const nuevoLibro = new Libro(
      array.length + 1,
      autorIngresado,
      tituloIngresado,
      precioIngresado
    );
    console.log(nuevoLibro);
  
    //pushearlo o sumarlo al array
    array.push(nuevoLibro);
    mostrarCatalogo(array);
  }
  
  function mostrarCatalogo(array) {
    console.log("Los libros disponibles son:");
    for (let elemento of array) {
      console.log(elemento.id, elemento.titulo, elemento.autor, elemento.precio);
    }
  }
  
  function mostrarCatalogoForEach(arr) {
    console.log("Nuestro catalogo es con forEach");
    arr.forEach((libro) => {
      console.log(
        `${libro.id} - ${libro.titulo} del autor/a ${libro.autor} que vale ${libro.precio}`
      );
    });
  }
  
  
  function ordenarMenorMayor(array) {
    //copia array original, para no modificar estanteria
    const menorMayor = [].concat(array);
    menorMayor.sort((param1, param2) => param1.precio - param2.precio);
    mostrarCatalogo(menorMayor);
  }
  // ordenarMenorMayor(estanteria)
  function ordenarMayorMenor(array) {
    const mayorMenor = [].concat(array);
    mayorMenor.sort((a, b) => b.precio - a.precio);
    mostrarCatalogo(mayorMenor);
  }
  // ordenarMayorMenor(estanteria)
  function ordenarAlfabeticamenteTitulo(array) {
    const ordenadoAlfabeticamente = [].concat(array);
    //ordenar algo que tiene un dato string
    //forma de la a-z ascendente
    ordenadoAlfabeticamente.sort((a, b) => {
      if (a.titulo > b.titulo) {
        return 1;
      }
      if (a.titulo < b.titulo) {
        return -1;
      }
      // a es igual b
      return 0;
    });
    mostrarCatalogo(ordenadoAlfabeticamente);
  }
  
  //---------------------------------------------------//MIPROYECTO CON DOM:
  
  //capturo divLibros
  let librosDiv = document.getElementById("libros");
  let verCatalogoBtn = document.getElementById("verCatalogo");
  let ocultarCatalogoBtn = document.getElementById("ocultarCatalogo");
  
  let guardarLibroBtn = document.getElementById("guardarLibroBtn");
  
  //FUNCTION PROYECTO DOM
  //imprimiendo los objetos en el DOM
  function verCatalogo(array) {
    //reseteo de div antes de imprimir de nuevo
    librosDiv.innerHTML = "";
  
    for (let libro of array) {
   
      let nuevoLibroDiv = document.createElement("div");
       
      nuevoLibroDiv.className = "col-12 col-md-6 col-lg-4 my-3";
      nuevoLibroDiv.innerHTML = `
        <div id="${libro.id}" class="card"style="width: 18rem;">
            <img class="card-img-top img-fluid" style="height: 200px;"src="/img/libros/${libro.imagen}" alt="${libro.titulo} de ${libro.autor}">
            <div class="card-body tampersonalizada">
                <h4 class="card-title">${libro.titulo}</h4>
                <p>Autor: ${libro.autor}</p>
                <p class="">Precio: ${libro.precio}</p>
                <button id="agregarBtn${libro.id}" class="btn btn-outline-success">Agregar al carrito</button>
            </div>
        </div> 
        `;
      librosDiv.appendChild(nuevoLibroDiv);
      let agregarBtn = document.getElementById(`agregarBtn${libro.id}`);
      console.log(agregarBtn);
      agregarBtn.onclick = () => {
        console.log(libro);
        console.log(
          `El producto ${libro.titulo} de ${libro.autor} ha sido agregado correctamente al carrito y su valor es de ${libro.precio}`
        );
      };
    }
  }
  
  //evento
  verCatalogoBtn.onclick = function () {
    verCatalogo(estanteria);
  };
  
  ocultarCatalogoBtn.addEventListener("dblclick", () => {
    librosDiv.innerHTML = ""; 
  });
  
 

