---
id: templates
title: Páginas de plantillas
---

4D's Web server allows you to use HTML template pages containing tags, i.e. a mix of static HTML code and 4D references added by means of [transformation tags](../Tags/transformation-tags.md) such as 4DTEXT, 4DIF, or 4DINCLUDE. These tags are usually inserted as HTML type comments (`<!--#4DTagName TagValue-->`) into the HTML source code.

Cuando estas páginas son enviadas por el servidor HTTP, son analizadas y las etiquetas que contienen son ejecutadas y sustituidas por los datos resultantes. Las páginas que reciben los navegadores son una combinación de elementos estáticos y valores procedentes del procesamiento 4D.

Por ejemplo, si se escribe en una página HTML:

```html
<P>Bienvenido a <!--#4DTEXT vtSiteName-->!</P>
```

The value of the 4D variable _vtSiteName_ will be inserted in the HTML page.

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

These tags are described in the [Transformation Tags](../Tags/transformation-tags.md) page.

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

Parsing of the contents of template pages sent by 4D web server takes place when `WEB SEND FILE` (.htm, .html, .shtm, .shtml), `WEB SEND BLOB` (text/html type BLOB) or `WEB SEND TEXT` commands are called, as well as when sending pages called using URLs. En este último caso, por razones de optimización, las páginas con sufijo ".htm" y ".html" NO se analizan. In order to "force" the parsing of HTML pages in this case, you must add the suffix “.shtm” or “.shtml” (for example, `http://www.server.com/dir/page.shtm`). An example of the use of this type of page is given in the description of the `WEB GET STATISTICS` command. Las páginas XML (.xml, .xsl) también son compatibles y siempre son analizadas por 4D.

You can also carry out parsing outside of the Web context when you use the `PROCESS 4D TAGS` command.

Internamente, el analizador funciona con cadenas UTF-16, pero los datos a analizar pueden haber sido codificados de forma diferente. When tags contain text (for example `4DHTML`), 4D converts the data when necessary depending on its origin and the information available (charset). A continuación se muestran los casos en los que 4D analiza las etiquetas contenidas en las páginas HTML, así como las conversiones realizadas:

| Acción / Comando                         | Análisis del contenido de las páginas enviadas                                          | Soporte de la sintaxis $(\*)                                         | Conjunto de caracteres utilizados para el análisis sintáctico de las etiquetas                                                                                                                                                                                                                            |
| ---------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Páginas llamadas a través de URLs        | X, excepto las páginas con extensiones ".htm" o ".html" | X, excepto las páginas con extensiones ".htm" o ".html" | Uso del conjunto de caracteres pasado como parámetro del encabezado "Content-Type" de la página. Si no hay ninguna, busca una etiqueta META-HTTP EQUIV con un conjunto de caracteres. En caso contrario, uso del conjunto de caracteres por defecto para el servidor HTTP |
| `WEB SEND FILE`                          | X                                                                                       | -                                                                                       | Uso del conjunto de caracteres pasado como parámetro del encabezado "Content-Type" de la página. Si no hay ninguna, busca una etiqueta META-HTTP EQUIV con un conjunto de caracteres. En caso contrario, uso del conjunto de caracteres por defecto para el servidor HTTP |
| `WEB SEND TEXT`                          | X                                                                                       | *                                                                                       | No es necesaria la conversión                                                                                                                                                                                                                                                                             |
| `WEB SEND BLOB`                          | X, si el BLOB es de tipo "text/html                                                     | -                                                                                       | Uso del conjunto de caracteres definido en el encabezado "Content-Type" de la respuesta. En caso contrario, uso del conjunto de caracteres por defecto para el servidor HTTP                                                                                                              |
| Inclusion by the `<!--#4DINCLUDE-->` tag | X                                                                                       | X                                                                                       | Uso del conjunto de caracteres pasado como parámetro del encabezado "Content-Type" de la página. Si no hay ninguna, busca una etiqueta META-HTTP EQUIV con un conjunto de caracteres. En caso contrario, uso del conjunto de caracteres por defecto para el servidor HTTP |
| `PROCESS 4D TAGS`                        | X                                                                                       | X                                                                                       | Datos de texto: no hay conversión. Datos BLOB: conversión automática del conjunto de caracteres Mac-Roman por compatibilidad                                                                                                                              |

(\*) La sintaxis alternativa basada en $ está disponible para las etiquetas 4DHTML, 4DTEXT y 4DEVAL.

## Acceso a los métodos 4D a través de la web

Executing a 4D method with `4DEACH`, `4DELSEIF`, `4DEVAL`, `4DHTML`, `4DIF`, `4DLOOP`, `4DSCRIPT`, or `4DTEXT` from a web request is subject to the [Available through 4D tags and URLs (4DACTION...)](allowProject.md) attribute value defined in the properties of the method. Si no se comprueba el atributo para el método, éste no puede ser llamado desde una petición web.

## Prevención de la inserción de códigos maliciosos

Las etiquetas 4D aceptan diferentes tipos de datos como parámetros: texto, variables, métodos, nombres de comandos, etc. Cuando estos datos son proporcionados por su propio código, no hay riesgo de inserción de código malicioso ya que usted controla la entrada. Sin embargo, el código de su base de datos suele trabajar con datos que, en un momento u otro, fueron introducidos a través de una fuente externa (entrada del usuario, importación, etc.).

In this case, it is advisable to **not use** tags such as `4DEVAL` or `4DSCRIPT`, which evaluate parameters, directly with this sort of data.

In addition, according to the [principle of recursion](../Tags/transformation-tags.md#recursive-processing), malicious code may itself include transformation tags. En este caso, es imprescindible utilizar la etiqueta `4DTEXT`. Imagine, por ejemplo, un campo de formulario web llamado "Name", donde los usuarios deben introducir su nombre. This name is then displayed using a `<!--#4DHTML vName-->` tag in the page. Si se inserta un texto del tipo "\<!--#4DEVAL QUIT 4D-->" en lugar del nombre, la interpretación de esta etiqueta provocará la salida de la aplicación. To avoid this risk, you can just use the `4DTEXT` tag systematically in this case. Como esta etiqueta escapa a los caracteres especiales de HTML, cualquier código recursivo malicioso que pueda haberse insertado no será reinterpretado. To refer to the previous example, the "Name" field will contain, in this case, "`&lt;!--#4DEVAL QUIT 4D--&gt;`" which will not be transformed.
