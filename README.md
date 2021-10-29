# Group6-Project-202109

Páginas:

- HOMEPAGE/categoría:

  - recibe un listado de objetos book (de la api google-books) y renderiza un componente BookCard para cada elemento
  - recibe un titulo y lo renderiza
  - renderiza los botones de paginacion

- DETAILPAGE:

  - recibe un objeto book y lo renderiza

- MYBOOKS:

  - renderiza componentes book (de la api local)
  - recibe funcion: podemos ir a la pagina del formulario

- FORMPAGE:
  - renderiza los inputs del formulario,
  - recoge los inputs del usuario,
  - submitea un objeto book a la api local

Componentes:

- BookCard

  - Recibe un objeto de libro.
  - Renderiza una foto, un título, autor y precio.
  - Tiene un botón que realiza una función recibida

- Botón

  - Renderiza un texto
  - Realiza una función recibida

- Menú

  - Renderizar un listado de enlaces, que ejecutan una función

- Paginado

  - Recibe un enlace y lo manipula.
  - Ejecuta una función

- Footer

Comunes a todas las páginas: Header, Footer y Search.
Search: recoge un input del usuario tipo texto y realiza una función recibida,
renderiza el logo, un botón de menu y el search.
