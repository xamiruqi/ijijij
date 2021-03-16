const ok = document.getElementById("ok");

let imagen = document.createElement("img");
imagen.setAttribute("src","imagen clipart.jpg");
ok.appendChild(imagen);
imagen.setAttribute("id","imagen");

let title = document.createElement("h1");
title.setAttribute("id","title");
title.innerHTML = "¿Cómo añadir un efecto a una imagen?";
ok.appendChild(title);

let parragraph = document.createElement("p");
parragraph.setAttribute("id","parrafo");
parragraph.innerHTML = "Existen muchos plugins para insertar efectos especiales a las imágenes cuando se les pasa el cursor por encima. Todos esos plugins añaden un montón de código a la página, que terminan afectando a la velocidad de la web en sí. Si quieres utilizar muy poco código para así optimizar la carga de tu web, nuestro script para generar un efecto de zoom es perfecto para ti.";
ok.appendChild(parragraph);

let button = document.createElement("div");
button.setAttribute("id","boton");
button.innerHTML = "Leer más";
ok.appendChild(button);
