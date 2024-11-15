---
id: select-document
title: Select document
slug: /commands/select-document
displayed_sidebar: docs
---

<!--REF #_command_.Select document.Syntax-->**Select document** ( *directorio* ; *tiposArchivos* ; *titulo* ; *opciones* {; *seleccionados*} ) : Text<!-- END REF-->
<!--REF #_command_.Select document.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| directorio | Text, Integer | &#8594;  | • Ruta de acceso del directorio para mostrar por defecto en la caja de diálogo de selección o • Cadena vacía para mostrar la carpeta del usuario por defecto (“Mis documentos” bajo Windows, “Documentos” bajo Mac OS), o • Número de la ruta de acceso memorizada |
| tiposArchivos | Text | &#8594;  | Lista de los tipos de documentos a filtrar, o "*" para no filtrar los documentos |
| titulo | Text | &#8594;  | Título de la caja de diálogo de selección |
| opciones | Integer | &#8594;  | Opciones de selección |
| seleccionados | Text array | &#8592; | Array que contiene la lista de rutas de acceso + los nombres de los archivos seleccionados |
| Resultado | Text | &#8592; | Nombre del archivo seleccionado (primer archivo de la lista en caso de selección múltiple) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Select document.Summary-->El comando Select document muestra una caja de diálogo estándar de apertura de documentos, permitiendo al usuario definir uno o más archivos y devolver el nombre y/o ruta de acceso completa del o de los archivo(s) seleccionado(s).<!-- END REF-->

El parámetro *directorio* indica la carpeta cuyo contenido debe mostrarse inicialmente en la caja de diálogo de apertura de documentos. Puede pasar tres tipos de valores:

* un texto que contiene la ruta de acceso completa del directorio a mostrar.
* una cadena vacía ("") para mostrar la carpeta del usuario por defecto del sistema (“Mis documentos” bajo Windows, “Documentos” bajo Mac OS).
* un número de ruta de acceso memorizada (de 1 a 32 000) para mostrar la carpeta asociada.  
Con este principio, puede almacenar en memoria la ruta de acceso de la carpeta abierta en el momento en que el usuario hace clic en el botón de selección, en otras palabras, la carpeta seleccionada por el usuario. Durante la primera llamada de un número arbitrario (por ejemplo, 5) el comando muestra la carpeta usuario por defecto del sistema operativo (equivalente a pasar una cadena vacía). El usuario podrá navegar las carpetas en el disco duro. Cuando el usuario hace clic en el botón de selección, la ruta de acceso se memoriza y asocia al número 5\. Durante las siguientes llamadas al número 5, la ruta de acceso memorizada será utilizada por defecto. En caso de que se seleccione una nueva ubicación, la ruta número 5 se actualiza.  
Este mecanismo le permite memorizar hasta 32 000 rutas de acceso. Bajo Windows, cada ruta se conserva durante la sesión únicamente. Bajo Mac OS, las rutas son conservadas por el sistema y permanecen almacenadas de una sesión a otra.

**Nota:** este mecanismo es el mismo al utilizado por el comando [Select folder](select-folder.md). Los números de las rutas de acceso memorizadas son compartidos por ambos comandos.

Pase en el parámetro *tiposArchivos* el o los tipo(s) de archivo(s) que pueden ser seleccionados en la caja de diálogo de apertura. Puede pasar una lista de varios tipos separados por un ; (punto y coma). Para cada tipo definido, una fila será añadida en el menú de selección del tipo de la caja de diálogo.

* Bajo Mac OS, puede pasar un tipo Mac OS clásico (TEXT, APPL, etc.), o un tipo UTI (Uniform Tipo Identifier). Los tipos UTIs son definidos por Apple para cumplir con las necesidades de estandarización de tipos de archivos. Por ejemplo, "public.text" es el tipo UTI de los archivos de tipo texto. Para mayor información sobre UTIs, consulte *[Uniform Type Identifier Concepts page](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_conc/understand_utis_conc.html)* en el sitio web *developer.apple.com* (documentación en ingles).
* Bajo Windows, puede pasar igualmente un tipo de archivo clásico Mac OS, 4D efectúa la correspondencia internamente o la extensión de archivos (.txt, .exe, etc.). Note que bajo Windows, el usuario puede “forzar” la visualización de todos los tipos de archivos introduciendo \*.\* en la caja de diálogo. Sin embargo, en este caso, 4D efectuará una verificación adicional de los tipos de archivos seleccionados: si el usuario selecciona un tipo de archivo no autorizado, el comando devuelve un error.

Si no quiere restringir los archivos mostrados a uno o a más tipos, pase "\*" (asterisco) o ".\*" en *tiposArchivos*.

Pase en el parámetro *titulo* la etiqueta que debe aparecer en la caja de diálogo. Por defecto, si pasa una cadena vacía, se muestra la etiqueta “Abrir”.

El parámetro *opciones* permite especificar funciones avanzadas autorizadas en la caja de diálogo de apertura. 4D ofrece las siguientes constantes predefinidas en el tema *Documentos sistema*. Puede pasar una constante o una combinación de constantes.

| Constante         | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------- | ------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Allow alias files | Entero largo | 8     | Autoriza la selección de atajos (Windows) o de alias (Mac OS) como documentos. <br/>Por defecto, si no se utiliza esta constante no se utiliza, cuando se seleccione un alias o atajo, el comando devolverá la ruta de acceso del elemento objetivo. Cuando pase la constante, el comando devuelve la ruta del alias o del atajo.                                                                                                                                                                         |
| File name entry   | Entero largo | 32    | Autoriza al usuario a introducir un nombre de archivo en una caja de diálogo "Guardar como". No se guardan los archivos, el desarrollador debe crear un archivo en respuesta a esta acción (la variable sistema Documento se actualiza). En este contexto, el parámetro directorio puede contener la ruta a un archivo en lugar de a un directorio. El nombre del archivo se utilizará como nombre de archivo sugerido en el campo de texto Guardar como. El directorio padre se utilizará como ruta por defecto. |
| Multiple files    | Entero largo | 1     | Autoriza la selección simultánea de varios archivos utilizando las combinaciones **Mayús+clic** (selección adyacente) y **Ctrl+clic** (Windows) o **Comando+clic** (Mac OS). En este caso, el parámetro *seleccionado*, si se pasa, contiene la lista de todos los archivos seleccionados. Por defecto, si esta constante no se utiliza, el comando no permitirá la selección de archivos múltiples.                                                                                                              |
| Package open      | Entero largo | 2     | (macOS únicamente): autoriza la apertura de paquetes como carpetas y por lo tanto la visualización/selección de sus contenidos. Por defecto, si no se utiliza esta constante, el comando no permitirá la apertura de paquetes.                                                                                                                                                                                                                                                                                    |
| Package selection | Entero largo | 4     | (macOS únicamente): autoriza la selección de paquetes como entidades (por defecto si se omite). Utilice Package open si desea permitir que los usuarios visualicen/seleccionen contenidos del paquete.                                                                                                                                                                                                                                                                                                            |
| Use sheet window  | Entero largo | 16    | (Mac OS únicamente): muestra la caja de diálogo de selección en forma de una ventana hoja (esta opción se ignora en Windows). <br/>Las ventanas hojas son específicas para la interfaz Mac OS X con animación gráfica (para mayor información, consulte la sección *Tipos de ventanas (Compatibilidad)*). Por defecto, si esta constante no se utiliza, el comando mostrará una caja de diálogo estándar.                                                                                                 |

Si no quiere utilizar una opción, pase 0 en el parámetro *opciones*.

El parámetro opcional *seleccionados* le permite obtener la ruta de acceso completa (ruta de acceso + nombre) de cada archivo seleccionado por el usuario. El comando crea, dimensiona y llena el array de acuerdo a la selección del usuario. Este parámetro es útil cuando la opción Multiple files se utiliza o cuando quiere conocer la ruta de acceso del archivo seleccionado (simplemente tome el nombre del archivo devuelto por el comando del valor del array). Si ningún archivo está seleccionado, el array se devuelve vacío.

**Nota:** bajo Mac OS, un paquete seleccionado se considera como una carpeta. La ruta de acceso devuelta en el array *seleccionados* incluye un carácter final ":" . Por ejemplo: Disk:Applications:4D:4D v11.4:US:4D Volume Desktop.app:

El comando devuelve el nombre (nombre + extensión bajo Windows) del archivo seleccionado. Si son seleccionados varios archivos, el comando devuelve el nombre del primer archivo de la lista de archivos seleccionados. La lista de archivos puede recuperarse en el parámetro *seleccionados*. Si ningún archivo es seleccionado, el comando devuelve una cadena vacía.

#### Ejemplo 1 

Este ejemplo se utiliza para especificar un archivo de datos 4D: 

```4d
 var $plataforma : Integer
 PLATFORM PROPERTIES($plataforma)
 If($plataforma=Windows)
    $DocTipo:=".4DD"
 Else
    $DocTipo:="com.4d.4d.data-file" //UTI type
 End if
 $Opciones:=Allow alias files+Package open+Use sheet window
 $Doc:=Select document("";$DocTipo;"Seleccionar el archivo de datos";$Opciones)
```

#### Ejemplo 2 

Creación de un documento personalizado por el usuario:

```4d
 $doc:=Select document(System folder(Documents folder)+"Report.pdf";"pdf";"Report name:";File name entry)
 If(OK=1)
    BLOB TO DOCUMENT(Document;$blob) // $blob contiene el documento a registrar
 End if
```

#### Variables y conjuntos del sistema 

Si el comando se ha ejecutado correctamente y se seleccionó un documento válido, la variable sistema OK toma el valor 1 y la variable sistema Document contendrá la ruta de acceso completa del archivo seleccionado.  
  
Si no se seleccionó ningún archivo (por ejemplo, si el usuario hace clic en el botón **Cancelar** en la caja de diálogo de apertura de archivos), la variable sistema OK toma el valor 0 y la variable Document estará vacía. 

#### Ver también 

[Open document](open-document.md)  
[Select folder](select-folder.md)  