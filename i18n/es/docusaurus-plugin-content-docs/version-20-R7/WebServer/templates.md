---
id: templates
title: Páginas de plantillas
---

El servidor web de 4D le permite utilizar las páginas de plantillas HTML que contengan etiquetas, es decir, una mezcla de código HTML estático y de referencias 4D añadidas mediante [etiquetas de transformación](../Tags/transformation-tags.md) como 4DTEXT, Estas etiquetas suelen insertarse como comentarios de tipo HTML (`<!--#4DTagName TagValue-->`) en el código fuente HTML.

Cuando estas páginas son enviadas por el servidor HTTP, son analizadas y las etiquetas que contienen son ejecutadas y sustituidas por los datos resultantes. Las páginas que reciben los navegadores son una combinación de elementos estáticos y valores procedentes del procesamiento 4D.

Por ejemplo, si se escribe en una página HTML:

```html
<P>Bienvenido a <!--#4DTEXT vtSiteName-->!</P>
```

El valor de la variable 4D _vtSiteName_ se insertará en la página HTML.

## Etiquetas para las plantillas

Las siguientes etiquetas 4D están disponibles:

- 4DTEXT, para insertar variables y expresiones 4D como texto,
- 4DHTML, para insertar el código HTML,
- 4DEVAL, para evaluar toda expresión 4D,
- 4DSCRIPT, para ejecutar un método 4D,
- 4DINCLUDE, para incluir una página dentro de otra,
- 4DBASE, para modificar la carpeta por defecto utilizada por la etiqueta 4DINCLUDE,
- 4DCODE, para insertar el código 4D,
- 4DIF, 4DELSE, 4DELSEIF y 4DENDIF, para insertar condiciones en el código HTML,
- 4DLOOP y 4DENDLOOP, para hacer bucles en el código HTML,
- 4DEACH y 4DENDEACH, para hacer bucles en colecciones, selecciones de entidades o propiedades de objetos.

Estas etiquetas se describen en la página [Etiquetas de transformación](../Tags/transformation-tags.md).

Es posible combinar etiquetas. Por ejemplo, el siguiente código HTML es permitido:

```html
<HTML>
...
<BODY>
<!--#4DSCRIPT/PRE_PROCESS-->   (Method call)
<!--#4DIF (myvar=1)-->   (If condition)
   <!--#4DINCLUDE banner1.html-->   (Subpage insertion)
<!--#4DENDIF-->   (End if)
<!--#4DIF (myvar=2)-->

   <!--#4DINCLUDE banner2.html-->
<!--#4DENDIF-->
 
<!--#4DLOOP [TABLE]-->   (loop on the current selection)
<!--#4DIF ([TABLE]ValNum>10)-->   (If [TABLE]ValNum>10)
   <!--#4DINCLUDE subpage.html-->   (subpage insertion)
<!--#4DELSE-->   (Else)
   <B>Value: <!--#4DTEXT [TABLE]ValNum--></B><br/>
      (Field display)
<!--#4DENDIF-->
<!--#4DENDLOOP-->   (End for)
</BODY>
</HTML>
```

## Análisis de etiquetas

Por razones de optimización, el servidor web de 4D no realiza el análisis del código fuente HTML cuando se llama a las páginas HTML utilizando URLs simples con el sufijo ".HTML" o ".HTM".

El análisis del contenido de las páginas plantillas enviadas por el servidor web de 4D tiene lugar cuando se llaman los comandos `WEB SEND FILE` (.htm, .html, .shtm, .shtml), `WEB SEND BLOB` (text/html type BLOB) o `WEB SEND TEXT`, así como cuando se enví En este último caso, por razones de optimización, las páginas con sufijo ".htm" y ".html" NO se analizan. Para "forzar" el análisis de las páginas HTML en este caso, debe añadir el sufijo ".shtm" o ".shtml" (por ejemplo, `http://www.server.com/dir/page.shtm`). Un ejemplo del uso de este tipo de página se da en la descripción del comando `WEB GET STATISTICS`. Las páginas XML (.xml, .xsl) también son compatibles y siempre son analizadas por 4D.

También puede llevar a cabo el análisis sintáctico fuera del contexto web cuando utilice el comando `PROCESS 4D TAGS`.

Internamente, el analizador funciona con cadenas UTF-16, pero los datos a analizar pueden haber sido codificados de forma diferente. Cuando las etiquetas contienen texto (por ejemplo `4DHTML`), 4D convierte los datos cuando es necesario dependiendo de su origen y de la información disponible (charset). A continuación se muestran los casos en los que 4D analiza las etiquetas contenidas en las páginas HTML, así como las conversiones realizadas:

| Acción / Comando                              | Análisis del contenido de las páginas enviadas                                          | Soporte de la sintaxis $(\*)                                         | Conjunto de caracteres utilizados para el análisis sintáctico de las etiquetas                                                                                                                                                                                                                            |
| --------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Páginas llamadas a través de URLs             | X, excepto las páginas con extensiones ".htm" o ".html" | X, excepto las páginas con extensiones ".htm" o ".html" | Uso del conjunto de caracteres pasado como parámetro del encabezado "Content-Type" de la página. Si no hay ninguna, busca una etiqueta META-HTTP EQUIV con un conjunto de caracteres. En caso contrario, uso del conjunto de caracteres por defecto para el servidor HTTP |
| `WEB SEND FILE`                               | X                                                                                       | -                                                                                       | Uso del conjunto de caracteres pasado como parámetro del encabezado "Content-Type" de la página. Si no hay ninguna, busca una etiqueta META-HTTP EQUIV con un conjunto de caracteres. En caso contrario, uso del conjunto de caracteres por defecto para el servidor HTTP |
| `WEB SEND TEXT`                               | X                                                                                       | -                                                                                       | No es necesaria la conversión                                                                                                                                                                                                                                                                             |
| `WEB SEND BLOB`                               | X, si el BLOB es de tipo "text/html                                                     | -                                                                                       | Uso del conjunto de caracteres definido en el encabezado "Content-Type" de la respuesta. En caso contrario, uso del conjunto de caracteres por defecto para el servidor HTTP                                                                                                              |
| Inclusión por la etiqueta `<!--#4DINCLUDE-->` | X                                                                                       | X                                                                                       | Uso del conjunto de caracteres pasado como parámetro del encabezado "Content-Type" de la página. Si no hay ninguna, busca una etiqueta META-HTTP EQUIV con un conjunto de caracteres. En caso contrario, uso del conjunto de caracteres por defecto para el servidor HTTP |
| `PROCESS 4D TAGS`                             | X                                                                                       | X                                                                                       | Datos de texto: no hay conversión. Datos BLOB: conversión automática del conjunto de caracteres Mac-Roman por compatibilidad                                                                                                                              |

(\*) La sintaxis alternativa basada en $ está disponible para las etiquetas 4DHTML, 4DTEXT y 4DEVAL.

## Acceso a los métodos 4D a través de la web

Ejecutar un método 4D con `4DEACH`, `4DELSEIF`, `4DEVAL`, `4DHTML`, `4DIF`, `4DLOOP`, `4DSCRIPT`, o `4DTEXT` desde una petición web está sujeto al valor del atributo [Disponible a través de etiquetas 4D y URLs (4DACTION...)](allowProject.md) definido en las propiedades del método. Si no se comprueba el atributo para el método, éste no puede ser llamado desde una petición web.

## Prevención de la inserción de códigos maliciosos

Las etiquetas 4D aceptan diferentes tipos de datos como parámetros: texto, variables, métodos, nombres de comandos, etc. Cuando estos datos son proporcionados por su propio código, no hay riesgo de inserción de código malicioso ya que usted controla la entrada. Sin embargo, el código de su base de datos suele trabajar con datos que, en un momento u otro, fueron introducidos a través de una fuente externa (entrada del usuario, importación, etc.).

En este caso, es aconsejable **no utilizar** etiquetas como `4DEVAL` o `4DSCRIPT`, que evalúan parámetros, directamente con este tipo de datos.

Además, de acuerdo con el [principio de recursividad](../Tags/transformation-tags.md#recursive-processing), el código malicioso puede incluir etiquetas de transformación. En este caso, es imprescindible utilizar la etiqueta `4DTEXT`. Imagine, por ejemplo, un campo de formulario web llamado "Name", donde los usuarios deben introducir su nombre. Este nombre se muestra mediante una etiqueta `<!--#4DHTML vName-->` en la página. Si se inserta un texto del tipo "\<!--#4DEVAL QUIT 4D-->" en lugar del nombre, la interpretación de esta etiqueta provocará la salida de la aplicación. Para evitar este riesgo, basta con utilizar sistemáticamente la etiqueta `4DTEXT` en este caso. Como esta etiqueta escapa a los caracteres especiales de HTML, cualquier código recursivo malicioso que pueda haberse insertado no será reinterpretado. Para referirse al ejemplo anterior, el campo "Nombre" contendrá, en este caso, "`&lt;! -#4DEVAL QUIT 4D--&gt;`" que no será transformado.
