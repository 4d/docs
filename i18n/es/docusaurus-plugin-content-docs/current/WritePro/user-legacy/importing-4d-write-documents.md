---
id: importing-4d-write-documents
title: Importar documentos 4D Write
displayed_sidebar: docs
---

#### 

Una de las principales funcionalidades del nuevo 4D Write Pro es la capacidad de importar y convertir documentos 4D Write Pro existentes. Esto le permitirá migrar las aplicaciones que se basan en el plug-in 4D Write.  
  
**Notas de compatibilidad**:

* Sólo se soportan documentos 4D Write de la última generación ("4D Write v7").
* No se soporta por el momento copiar\-pegar desde un documento 4D Write a un área 4D Write Pro. La importación de un documento 4D Write sólo puede hacerse utilizando los comandos del lenguaje 4D Write Pro.
* Los retornos de carro (CR) en las fórmulas se comportan de manera diferente en 4D Write y 4D Write Pro. En 4D Write, siempre se interpretan como saltos de párrafo, mientras que en 4D Write Pro se interpretan como saltos de línea por defecto. Para mantener CR en fórmulas como saltos de párrafo en documentos 4D Write importados, después de la conversión utilice:  
```4d  
 WP SET ATTRIBUTES(wp;wk break paragraphs in formulas;wk true)  
```  
    
Para más información, consulte *Gestión de fórmulas*.

#### Cómo importar un documento 4D Write 

Los objetos 4D Write Pro ofrecen dos maneras de importar documentos 4D Write:

* Para los archivos 4D Write Pro almacenados en el disco, se utiliza el comando [WP Import document](../commands/wp-import-document),
* Para las áreas 4D Write almacenadas en campos BLOB, se utiliza el comando [WP New](../commands/wp-new).

Para más información, consulte la descripción de estos comandos.

#### ¿Qué propiedades se conservan de 4D Write? 

Para facilitar la migración desde el plug-in 4D Write a 4D Write Pro, queremos soportar tantas funcionalidades 4D Write como sea posible en objetos 4D Write Pro.

Este párrafo muestra las propiedades del plug-in 4D Write que se recuperan en un área 4D Write Pro después de una importación con los comandos *WP Import document* o *WP New*. 

Tenga en cuenta sin embargo, que hay algunas diferencias, que no se consideran como bugs. Esto se debe, por ejemplo, a la fuente predeterminada utilizada en 4D Write Pro para viñetas, o pequeñas conversiones en el tipo Subrayado.

##### Información del documento 

| **Plug-in** **4D Write**  | **4D Write Pro**                                          |
| ------------------------- | --------------------------------------------------------- |
| Creación fecha y hora     | Disponible                                                |
| Modificación fecha y hora | Disponible                                                |
| Bloqueado                 | No disponible (utilizar la propiedad objeto sólo lectura) |
| Título                    | Disponible                                                |
| Tema                      | Disponible (sólo texto plano)                             |
| Autor                     | Disponible                                                |
| Empresa                   | Disponible                                                |
| Notas                     | Disponible                                                |

##### Parámetros de visualización del documento 

| **Plug-in** **4D Write**           | **4D Write Pro**                                                                |
| ---------------------------------- | ------------------------------------------------------------------------------- |
| Vista modo página                  | No importado (utilizar el modo de vista Documento/Página en el menú contextual) |
| Vista reglas                       | No importado (utilizar propiedad objeto)                                        |
| Vista marcos                       | No importado (utilizar propiedad objeto)                                        |
| Vista encabezado                   | No importado (utilizar propiedad objeto)                                        |
| Vista pie                          | No importado (utilizar propiedad objeto)                                        |
| Vista encabezado de primera página | No disponible                                                                   |
| Vista pie de primera página        | No disponible                                                                   |
| Vista imágenes                     | No disponible                                                                   |
| Vista HScrollbar                   | No importado (utilice la propiedad de objeto desplazable hor.)                  |
| Vista VScrollbar                   | No importado (utilice la propiedad de objeto desplazable vert.)                 |
| Vista invisible characters         | No importado (utilizar propiedad objeto)                                        |
| Vista referencias                  | No importado (utilice [ST SET OPTIONS](../../commands/st-set-options))          |
| Vista separadores de columna       | Disponible (a partir de v17)                                                    |
| Vista H Splitter                   | No disponible                                                                   |
| Vista V Splitter                   | No disponible                                                                   |
| Vista Wysiwyg                      | No disponible                                                                   |
| Vista zoom                         | No importado (utilice Document/Zoom en el menú contextual)                      |

##### Parámetros del documento 

| **Plug-in** **4D Write** | **4D Write Pro**                                                         |
| ------------------------ | ------------------------------------------------------------------------ |
| Unidad                   | No importado (utilizar Documento/Unidad de medida en el menú contextual) |
| Lenguaje                 | No disponible                                                            |
| Conteo de columnas       | Disponible (a partir de v17)                                             |
| Espacio entre columnas   | (a partir de v17)                                                        |
| Viudas y huérfanos       | Disponible                                                               |
| Pestaña por defecto      | Disponible                                                               |
| Pestaña Líder            | Disponible                                                               |
| Color URL                | No disponible                                                            |
| Color visitado URL       | No disponible                                                            |

**Nota:** el separador del sistema (como devuelto por [GET SYSTEM FORMAT](../../commands/get-system-format)) se utiliza como separador décimal para las tabulaciones decimales. Puede cambiar este parámetro utilizando el comando [WP SET ATTRIBUTES](../commands/wp-set-attributes). 

##### Parámetros de paginación de documentos 

| **Plug-in** **4D Write**                                         | **4D Write Pro** |
| ---------------------------------------------------------------- | ---------------- |
| Ancho de página                                                  | Disponible       |
| Alto página                                                      | Disponible       |
| Número primera página                                            | Disponible       |
| Primera página encabezado pies diferentes                        | Disponible       |
| Página encabezado Izquierda y derecha y pie de página diferentes | Disponible       |
| Encuadernación                                                   | Disponible       |
| Páginas opuestas                                                 | Disponible       |
| Márgenes página                                                  | Disponible       |
| Encabezado margen superior                                       | Disponible       |
| Encabezado margen inferior                                       | Disponible       |
| Pie de página margen superior                                    | Disponible       |
| Pie de página margen inferior                                    | Disponible       |
| Primera página margen superior                                   | Disponible       |
| Primera página margen inferior                                   | Disponible       |
| Encabezado primera página margen superior                        | Disponible       |
| Encabezado primera página margen inferior                        | Disponible       |
| Pie de página primera página margen superior                     | Disponible       |
| Pie de página primera página margen inferior                     | Disponible       |
| Primera página es correcta                                       | Disponible       |

##### Parámetros de impresión de documentos 

| **Plug-in 4D Write** | **4D Write Pro** |
| -------------------- | ---------------- |
| Clase de papel       | No disponible    |
| Paisaje              | No disponible    |
| Ancho                | No disponible    |
| Alto                 | No disponible    |
| Márgenes de usuario  | No disponible    |
| Escala               | No disponible    |
| Resolución X         | No disponible    |
| Resolución Y         | No disponible    |

##### Imágenes 

**Notas de compatibilidad:** 

* Los modos de visualización de imágenes se importan automáticamente a partir de 4D Write Pro v19 R2, utilizando [WP Import document](../commands/wp-import-document). Puede restaurar el comportamiento anterior (todas las imágenes se escalan para ajustarse) utilizando el atributo *importDisplayMode*.
* En Windows, las imágenes en formato PICT Mac OS son importadas pero no pueden ser renderizadas en 4D Write Pro. Si importa documentos que contengan imágenes de este tipo, es necesario convertirlas a otro formato. Tenga en cuenta que el formato PICT es obsoleto y no debe ser utilizado.

| **Plug-in** **4D Write**                       | **4D Write Pro**                                            |
| ---------------------------------------------- | ----------------------------------------------------------- |
| X (izquierda)                                  | (unicamente imágenes en página )                            |
| Y (arriba)                                     | (unicamente imágenes en página )                            |
| Ancho                                          | Disponible                                                  |
| Alto                                           | Disponible                                                  |
| Número de página                               | Disponible (a partir de 4D v16 R6)                          |
| Detrás                                         | Disponible (a partir de 4D v16 R6)                          |
| No en primera página                           | Disponible (a partir de 4D v16 R6)                          |
| Modo de visualización (escala a ajustar, etc.) | Disponible                                                  |
| Es una expresión                               | Disponible para imágenes en el texto(a partir de 4D v16 R5) |
| Conservar el tamaño                            | No importado (automático en 4D Write Pro)                   |

##### Propiedades de caracteres 

| **Plug-in** **4D Write**                      | **4D Write Pro (span)**         |
| --------------------------------------------- | ------------------------------- |
| Itálica                                       | Disponible                      |
| Negrita                                       | Disponible                      |
| Tachado                                       | Disponible                      |
| Subrayado                                     | Disponible                      |
| Sombra                                        | Disponible                      |
| Exponente (superscript o subscript)           | Disponible                      |
| Mayúsculas o pequeñas mayúsculas              | Disponible                      |
| Familia de fuente                             | Disponible                      |
| Tamaño de fuente                              | Disponible                      |
| Color texto                                   | Disponible                      |
| Color fondo de texto                          | Disponible                      |
| Color subrayado                               | Disponible                      |
| Color tachado                                 | Disponible                      |
| Color sombra                                  | Disponible                      |
| Propiedad usuario                             | No disponible                   |
| Corrección ortográfica (sintaxis y gramática) | No importada (propiedad área)   |
| Apariencia                                    | No disponible                   |
| Hoja de estilo                                | Disponible (a partir de 4D v18) |

##### Propiedades párrafos 

| **Plug-in** **4D Write**                 | **4D Write Pro** |
| ---------------------------------------- | ---------------- |
| Justificación                            | Disponible       |
| Interlinea                               | Disponible       |
| Viñetas                                  | Disponible       |
| Margen izquierdo                         | Disponible       |
| Margen derecho                           | Disponible       |
| Indentar texto                           | Disponible       |
| Estilo borde linea                       | Disponible       |
| Color borde linea                        | Disponible       |
| Color fondo borde                        | Disponible       |
| Borde izquierdo                          | Disponible       |
| Borde derecho                            | Disponible       |
| Borde superior y borde interior arriba   | Disponible       |
| Borde inferior y borde interior inferior | Disponible       |
| Espacio de borde                         | Disponible       |
| Hoja de estilo                           | Disponible       |
| Tabulaciones                             | Disponible       |

##### Hipervínculos 

| **Plug-in** **4** **D Write** | **4D Write Pro**                                  |
| ----------------------------- | ------------------------------------------------- |
| Enlace URL                    | Disponible (\*)                                   |
| Enlace método 4D              | Disponible (\*\*) (starting with v17 R5)          |
| Enlace documento abierto      | Disponible (convertido a un url de archivo local) |

* (\*) A partir de 4D v16 R4, los enlaces URLs se convierten en atributos editables. Para mayor información, consulte *Gestión de URLs*.
* (\*\*) Es necesario adaptar los parámetros recibidos dentro de los métodos llamados:  
| **Parámetros** | **Plug-in** **4** **D Write**                   | **4D Write Pro**                                                                                                                                                                                                                                                                                                        |  
| -------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| $1             | Entero largo- Referencia del área 4D Write      | Texto - Nombre del área 4D Write Pro                                                                                                                                                                                                                                                                                    |  
| $2             | Texto - Etiqueta de enlace                      | Objeto - Descripción del enlace:.method - Nombre del método del enlace. Debe permitirse con el comando [SET ALLOWED METHODS](../../commands/set-allowed-methods). .parameter - valor del parámetro de usuario pasado al método (si se usa).range - Rango de la etiqueta del enlace. Ver *Comandos de gestión de rangos* |  
| $3             | Entero largo - Parámetro de usuario (methodRef) | \-                                                                                                                                                                                                                                                                                                                      |

##### Expresiones 4D 

| **Plug-in** **4D Write** | **4D Write Pro**  |
| ------------------------ | ----------------- |
| Expresión 4D             | Disponible\*      |
| Fecha y hora             | Disponible        |
| Expresión HTML           | No disponible\*\* |
| Expresión RTF            | No disponible     |

\* Utilice el comando [WP SET ATTRIBUTES](../commands/wp-set-attributes) con el atributo wk break paragraphs in formulas para transformar el CR devuelto por las fórmulas en saltos de párrafo en el documento importado (saltos de línea por defecto). (Ver *Gestión de fórmulas*) 

\*\*se puede importar como texto entre las etiquetas **##htmlBegin##** y **##htmlEnd##** si utiliza la constante wk import html expressions as text.

##### Datos de texto 

| **Plug-in** **4D Write**   | **4D Write Pro** |
| -------------------------- | ---------------- |
| Datos de texto principales | Disponible       |
| Datos de texto encabezado  | Disponible       |
| Datos de texto Pie         | Disponible       |