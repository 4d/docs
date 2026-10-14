---
id: structure-exporting-and-importing
title: Exportar e importar definiciones de estructura
---

4D permite exportar la definición de la estructura de la base de datos como archivo XML o HTML. A la inversa, es posible utilizar una definición de estructura guardada en formato XML para generar una nueva base de datos 4D al instante. Estas posibilidades responden a distintas necesidades:

- representar estructuras en formatos personalizados (informes, tablas, etc.) o analizarlas en otros entornos;
- generar bases de datos a partir de archivos de definición.

## Formato de una definición de estructura 4D

Las definiciones de estructura 4D se basan en el formato XML. Puede mostrar una definición de estructura con un simple editor de texto. El formato XML también permite prever cualquier tipo de uso, en particular mediante transformaciones XSL. Además, 4D utiliza un archivo .XSL para exportar la definición de estructura en formato HTML.

Una definición de estructura incluye tablas, campos, índices y relaciones, junto con sus atributos y las características necesarias para describir la estructura por completo. La «gramática» interna de las definiciones de estructura 4D está documentada en archivos DTD, que también se utilizan para validar archivos XML. Los archivos DTD utilizados por 4D están agrupados en la carpeta DTD, situada junto a la aplicación 4D. Los archivos **base_core.dtd** y **common.dtd** se utilizan para definir la estructura. Para obtener más información, consulte estos archivos y sus comentarios.

## Exportar una definición de estructura

4D permite exportar una estructura en formato XML o HTML. Elija el formato que mejor se adapte a sus necesidades:

- **Formato XML:** una estructura XML puede visualizarse con un editor de texto o utilizarse de distintas maneras (transformación XSL personalizada, importación y análisis en otro software, etc.). Elija este formato si desea utilizar la definición de estructura para crear nuevas bases de datos.
- **Formato HTML:** este formato representa la estructura como un informe que se puede consultar e imprimir desde un navegador.

Para exportar una definición de estructura en formato XML:

1. Seleccione el comando **Exportar > Definición de estructura a archivo XML...** en el menú Archivo de 4D.
2. Aparece un cuadro de diálogo estándar Guardar como para especificar el nombre, la ubicación y el tipo del archivo que se exportará.
3. Especifique el nombre y la ubicación de la exportación y valide el cuadro de diálogo.

Para exportar una definición de estructura en formato HTML:

1. Seleccione el comando **Exportar > Definición de estructura a archivo HTML...** en el menú Archivo de 4D.
2. Aparece un cuadro de diálogo de selección de carpeta para indicar dónde se guardarán los archivos HTML.
3. Haga clic en **Crear nueva carpeta** o especifique una carpeta existente. 4D crea automáticamente en esa ubicación una carpeta llamada *«Mystructure.4db Structure Export»*, que contiene los elementos exportados (*Mystructure.4db* representa el nombre de la base de datos).
4. Un cuadro de diálogo permite ver directamente los resultados de la exportación en el navegador por defecto. Las definiciones de estructura en formato HTML tienen este aspecto:

[picture here]

### Personalizar la transformación XSL

Por defecto, para generar las páginas HTML de la definición de estructura, 4D realiza transformaciones XSL utilizando el archivo **«Structure_to_html.xsl»**, situado en la subcarpeta */Resource/language.lproj* de la aplicación.

:::note

Si este archivo no está presente, la exportación en formato HTML no estará disponible en el cuadro de diálogo de exportación.

:::

Puede personalizar estas transformaciones con una hoja de estilos XSL propia. Para ello, cree un archivo llamado **«Structure_to_html.xsl»** (puede duplicar el archivo por defecto) y colóquelo al mismo nivel que el archivo *.4db*. 4D utilizará ese archivo para generar la definición de estructura en formato HTML.

## Crear una base de datos a partir de una definición de estructura

Las definiciones de estructura exportadas en formato XML pueden utilizarse para crear al instante nuevas bases de datos idénticas. En este caso, la definición de estructura puede considerarse como una plantilla que se puede duplicar tantas veces como se desee.

Una definición de estructura XML puede utilizarse tal cual o modificarse previamente mediante un editor XML. Por tanto, es posible plantearse el uso de cualquier tipo de mecanismo para generar estructuras mediante programación.

Además, puesto que el formato interno de los archivos XML de definición de estructura 4D es público (véase más arriba la sección «Formato de una definición de estructura 4D»), se pueden crear estos archivos desde otros entornos de bases de datos o desde cualquier aplicación de diseño para generar bases de datos 4D automáticamente.

Para crear una base de datos a partir de una definición de estructura:

1. Seleccione el comando **Nuevo > Base de datos a partir de una definición de estructura...** en el menú Archivo de 4D. Aparece un cuadro de diálogo estándar Abrir documento para especificar el archivo de definición. Debe seleccionar un archivo XML que respete la «gramática» de las definiciones de estructura 4D (el programa valida el archivo DTD).
2. Seleccione un archivo XML de definición de estructura y haga clic en **OK**. 4D muestra un cuadro de diálogo para elegir el nombre y la ubicación de la base de datos que se creará.
3. Elija el nombre y la ubicación de la base de datos que se creará y haga clic en **OK**.

Si el archivo XML es válido, 4D cierra la base de datos actual (si corresponde), crea la nueva base de datos a partir del archivo de definición de estructura y muestra su ventana Explorador. También se crea un archivo de datos vacío.
