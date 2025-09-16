---
id: importing-and-exporting-in-docx-format
title: Importar y Exportar al formato docx
displayed_sidebar: docs
---

#### 

4D Write Pro importar y exportar documentos en el formato .docx. Este formato es compatible con aplicaciones de procesamiento de textos como Microsoft Word.  
  
**Nota de compatibilidad:** el soporte para documentos 4D Write Pro importados o exportados en formato .docx solo está certificado para Microsoft Word 2010 y versiones posteriores. Las versiones anteriores, en particular Microsoft Word 2007, son susceptibles a que no se puedan abrir los documentos.

#### Cómo importar formato .docx 

Los documentos en formato .docx pueden ser importados a 4D Write Pro con el comando [WP Import document](../commands/wp-import-document). Para más información, consulte la descripción de este comando.

##### Cambios de comportamiento 

Aunque la mayoría de los ajustes de .docx se conservan, se sabe que algunos ajustes no son compatibles o se comportan de forma diferente en 4D Write Pro. Estos son:

###### Alineación / Diseño 

| **Configuración**           | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Áreas de texto ancladas     | Las áreas de texto ancladas son importadas como cajas de texto por defecto (también pueden ignorarse o importarse como texto en línea, ver la opción de comando [WP Import document](../commands/wp-import-document)). Sólo se pueden importar áreas de texto simples. Las áreas de texto ancladas con texto alrededor o en línea con texto se importan con sus propiedades de ajuste de texto (excepción: la opción de ajuste .docx "ajustado" se importa como ajustar cuadrado). |
| Disposición de los párrafos | Sólo se soportan disposiciones de texto occidentales. Los estilos de párrafo distribuido, tailandés y asiático no son soportados.                                                                                                                                                                                                                                                                                                                                                  |
| Tamaño de página            | No se soportan diferentes tamaños de página por sección. Sólo se importa el tamaño de página de la primera sección.                                                                                                                                                                                                                                                                                                                                                                |

###### Fondo 

| **Configuración** | **Descripción** |
| ----------------- | --------------- |
| Marca de agua     | No soportado    |

###### Expresiones 

| **Configuración** | **Descripción**                         |
| ----------------- | --------------------------------------- |
| MS Word equations | No soportado. Los datos no se importan. |
| MS Word charts    | No soportado. Los datos no se importan. |

###### Listas 

| **Configuración**  | **Descripción**                                                                                                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Listas jerárquicas | Las listas multiniveles no son soportadas. Las listas multinivel se convierten en listas de un solo nivel, por lo que el aspecto y/o la numeración de la lista pueden ser diferentes |

###### Imágenes 

| **Configuración**     | **Descripción**                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Formas DrawingML      | Sólo se importan las imágenes DrawingML simples (en línea o ancladas). No se soportan formas DrawingML complejas.   |
| Formas o imágenes VML | No soportadas. VML es obsoleto en MS Word y no debe utilizarse en documentos creados con MS Word 2010 o anteriores. |
| Modelos 3D            | No soportados, aunque la última imagen 2D renderizada del modelo 3D puede importarse si está presente en el .docx.  |
| SmartArt              | No soportado.                                                                                                       |

###### Referencias 

| **Configuración**     | **Descripción**                             |
| --------------------- | ------------------------------------------- |
| Comentarios           | No se soportan. El contenido no se importa. |
| Notas a pie de página | No se soportan. El contenido no se importa. |

###### Espaciado 

| **Configuración**       | **Descripción**                                                                          |
| ----------------------- | ---------------------------------------------------------------------------------------- |
| Interlineado "At least" | No se soporta. El interlineado "At least" se convierte en un interlineado fijo (simple). |
| Ajustar texto           | No se soporta. Se utiliza el estilo normal de 4D Write Pro.                              |

###### Tablas 

| **Parámetro** | **Descripción**                                      |
| ------------- | ---------------------------------------------------- |
| Tablas        | Las tablas contiguas no se fusionan automáticamente. |

###### Texto 

| **Configuración**                      | **Descripción**                                                                                                                                                                                            |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Temas                                  | Los temas de texto no se importan. Si una definición de color o fuente hace referencia a un color o fuente en un tema, se utilizará el último color o fuente calculado. En caso contrario, se utilizará el |
| color o la fuente definida en el tema. |                                                                                                                                                                                                            |

##### Historial de importación 

Cuando se importa el formato .docx en 4D Write Pro, se crea un objeto historial que se incluye dentro del objeto de documento importado. Este objeto puede ser recuperado por medio del atributo personalizado "importLog" (o la constante wk import log):

```4d
 $myDoc:=WP Import document("test.docx")
 if($myDoc#Null)
    var $log : Object
    $log:=$myDoc[wk import log]
 End if
```

El objeto historial de importación contiene las siguientes propiedades:

| Constante     | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| wk import log | Objeto de registro que contiene información sobre la operación de importación .docx. Las propiedades son de sólo lectura y no se pueden definir: <table> <tbody> <tr> <td>**Propiedad <br/>**</td> <td> </td> <td>**Tipo <br/>**</td> <td>**Descripción**</td> </tr> <tr> <td>status</td> <td> </td> <td>Texto</td> <td>Estado de la importación:<br/> exitoso - el documento es importado a 4D Write Pro fallido - se devuelve un documento vacío de 4D Write Pro  </td> </tr> <tr> <td>developer</td> <td> </td> <td>Colección</td> <td>Colección de objetos mensaje para los desarrolladores de 4D Write Pro.</td> </tr> <tr> <td> </td> <td>\[ \].type</td> <td>Texto</td> <td>El tipo de mensaje registrado: info warning error  </td> </tr> <tr> <td> </td> <td>\[ \].message</td> <td>Texto</td> <td>Mensaje sobre la operación de importación.</td> </tr> <tr> <td>user</td> <td> </td> <td>Colección</td> <td>Colección de objetos mensaje para los usuarios de 4D Write Pro.</td> </tr> <tr> <td> </td> <td>\[ \].type</td> <td>Texto</td> <td>El tipo de mensaje registrado: info warning  </td> </tr> <tr> <td> </td> <td>\[ \].messageShort</td> <td>Texto</td> <td>Mensaje breve sobre la operación de importación.</td> </tr> <tr> <td> </td> <td>\[ \].messageLong</td> <td>Texto</td> <td>Mensaje extenso sobre la operación de importación.</td> </tr> </tbody> </table> **Atención**: *importLog* es un atributo personalizado, por lo que la constante wk import log no puede ser utilizada por los comandos [WP SET ATTRIBUTES](../commands/wp-set-attributes), [WP GET ATTRIBUTES](../commands/wp-get-attributes) o [WP RESET ATTRIBUTES](../commands/wp-reset-attributes) (para más información, consulte *Utilizar atributos personalizados*). |

#### Cómo exportar al formato .docx 

Los objetos 4D Write Pro ofrecen dos formas de exportar documentos 4D Write Pro al formato .docx:

* para exportar un archivo .docx al disco; utilice el comando [WP EXPORT DOCUMENT](../commands/wp-export-document).
* para exportar un archivo .docx a una variable BLOB; utilice el comando [WP EXPORT VARIABLE](../commands/wp-export-variable).
Para más información, consulte la descripción de estos comandos.

##### Cambios de comportamiento 

Aunque la mayoría de las configuraciones de 4D Write Pro se conservan, se sabe que algunas configuraciones no son compatibles o se comportan de manera diferente en Microsoft Word. Estos son:

###### Alineación / Configuración 

| **Parámetro**                                                                                                        | **Parágrafos**                                                                                                                                                                                                                                                                                           | **Secciones**                                                                       | **Imágenes** |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------ |
| Anclaje                                                                                                              | En Microsoft Word, las imágenes ancladas se ubican en relación al angulo superior izquierdo de la página y del primer párrafo. Esto podría hacer que las imágenes se muestren en ubicaciones diferentes a las deseadas debido a las diferencias de diseño del texto entre 4D Write Pro y Microsoft Word. |                                                                                     |              |
| Las cajas de texto ancladas al área anidada no se exportan. La representación puede ser diferente en Microsoft Word. |                                                                                                                                                                                                                                                                                                          |                                                                                     |              |
| Alineación vertical                                                                                                  | No es soportado por Microsoft Word (todos los elementos serán alineados a la parte superior)                                                                                                                                                                                                             | No soportado para imágenes en línea (todos los elementos serán alineados a la base) |              |

###### Fondo 

  
| **Parámetro**                    | **Parágrafos**                                                                                                   | **Secciones**                                                                                                     | **Imágenes**                                                                                                                             |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Recorte de fondo                 | No es compatible con Microsoft Word (el color de fondo llena todo el párrafo, sin incluir los bordes y márgenes) | No es compatible con Microsoft Word (el recorte de fondo será igual al cuadro de relleno)                         |                                                                                                                                          |
| Imagen de fondo                  | No soportado por Microsoft Word                                                                                  | Diferentes imágenes/colores de fondo no soportados por Microsoft Word (convertidos en imágenes o formas ancladas) | Microsoft Word permite un color de fondo o una imagen de fondo. Si se define una imagen de fondo, el color de fondo será "transparente". |
| Repetición de la imagen de fondo | Los bloques horizontales o verticales se convierten en bloques completos en Microsoft Word                       | Bloques horizontales o verticales se convierten en bloques completos en Microsoft Word                            |                                                                                                                                          |
| Origen de fondo                  | El cuadro de origen se convierte al mismo valor que el cuadro de recorte de fondo.                               | No soportado por Microsoft.                                                                                       |                                                                                                                                          |

###### Bordes 

| **Parámetro**                        | **Parágrafos**                                                                                                                                                                                                                                     | **Secciones**                                                                         | **Imágenes** |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------ |
| Color de borde                       | Microsoft Word no admite diferentes colores de borde para cada línea de borde. La primera línea de borde de imagen 4D Write Pro definida (en este orden: superior, derecha, inferior, izquierda) se utilizará para todos los bordes de una imagen. |                                                                                       |              |
| Radio del borde (bordes redondeados) | No compatible con Microsoft Word                                                                                                                                                                                                                   |                                                                                       |              |
| Ancho del borde                      | El máximo de Microsoft Word es 12pt, los bordes que excedan este tamaño se reducirán.                                                                                                                                                              | El máximo de Microsoft Word es 12pt, los bordes que excedan este tamaño se reducirán. |              |

###### Expresiones 

| **Parámetro** | **Parágrafos**                                                                                                                                                                                                                                                                                                              | **Secciones** | **Imágenes** |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------ |
| Expressions   | Solamente las expresiones simples de 4D tales como "Fecha actual" u "Hora actual", o las variables locales reservadas de 4D Write Pro ($wp\_title, $wp\_pageNumber, etc.) se convierten a campos de Microsoft Word. Otras expresiones 4D se calculan y se convierten en texto o imágenes durante el proceso de exportación. |               |              |

###### Listas 

| **Parámetro**          | **Parágrafos**                                                                                                                                  | **Secciones** | **Imágenes** |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------ |
| Indentación            | Convertido a 0 para los elementos de lista (la indentación para los elementos de lista se convierte a indentación suspendida en Microsoft Word) |               |              |
| Tipo de lista ordenada | Griego, armenio y georgiano se convierten a decimal y Hiragana se convierte a Katakana en Microsoft Word.                                       |               |              |

###### Imágenes 

| **Parámetro** | **Parágrafos**                                                                              | **Secciones** | **Imágenes** |
| ------------- | ------------------------------------------------------------------------------------------- | ------------- | ------------ |
| SVG           | No soportado por Microsoft Word (las imágenes en formato SVG se convertirán al formato PNG) |               |              |

###### Tamaño 

| **Parámetro**        | **Parágrafos**                                                                   | **Secciones** | **Imágenes** |
| -------------------- | -------------------------------------------------------------------------------- | ------------- | ------------ |
| Altura mínima        | No soportado por Microsoft Word (la altura se maneja automáticamente)            |               |              |
| Ancho / Ancho mínimo | No soportado por Microsoft Word (el ancho del párrafo se maneja automáticamente) |               |              |

###### Espacio 

| **Parámetro** | **Parágrafos**                                                                      | **Secciones**                                                                                                 | **Imágenes** |
| ------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------ |
| Relleno       | El máximo de Microsoft Word es 31pt, se reducirá el relleno que exceda este tamaño. | El máximo de márgenes interiores en Microsoft Word es de 31pt, el relleno que exceda este tamaño se reducirá. |              |

###### Tablas 

| **Funcionalidad**          | **Descripción** |
| -------------------------- | --------------- |
| Línea de arrastre inferior | No se exporta.  |

###### Tabulaciones 

| **Parámetro**                            | **Parágrafos**                                                                                                                                        | **Secciones** | **Imágenes** |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------ |
| Tabulación por defecto                   | No soportado por Microsoft Word (se convertirán en tabulaciones absolutas)                                                                            |               |              |
| Caracteres iniciales de las tabulaciones | Microsoft Word soporta los caracteres iniciales "punto" (....), "dash" (----) y "guión bajo" (\_\_\_\_), todos los demás se convertirán en "ninguno". |               |              |

  
###### Texto 

| **Parámetro**         | **Parágrafos**                                                                                                                                            | **Secciones**                                                                                                                          | **Imágenes** |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Tachado               | La diferencia de color entre el color de la linea y el color del texto no es soportado por Microsoft Word. Solo los estilos sólido y doble son soportados |                                                                                                                                        |              |
| Hojas de estilo       | Las hojas de estilo de los párrafos se convierten en estilos de párrafos.                                                                                 |                                                                                                                                        |              |
| Alineación de texto   | En Microsoft Word los espacios se comprimen, de manera que la configuración de texto justificado es susceptible de ser modificada.                        | En Microsoft Word, los espacios son comprimidos, de manera que la configuración de texto justificado es susceptible de ser modificada. |              |
| Indentación del texto | Convertidos a 0 para los elementos de la lista (indentación en Microsoft Word)                                                                            |                                                                                                                                        |              |
| Subrayado             | La sombra de 4D Write Pro se convertirá en desenfoque y desplazamiento, utilizando el color predeterminado en Microsoft Word.                             |                                                                                                                                        |              |
| Subrayado             | Los subrayados semi transparentes se convertirán en sólidos.                                                                                              |                                                                                                                                        |              |