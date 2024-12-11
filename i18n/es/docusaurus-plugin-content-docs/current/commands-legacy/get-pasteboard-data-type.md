---
id: get-pasteboard-data-type
title: GET PASTEBOARD DATA TYPE
slug: /commands/get-pasteboard-data-type
displayed_sidebar: docs
---

<!--REF #_command_.GET PASTEBOARD DATA TYPE.Syntax-->**GET PASTEBOARD DATA TYPE** ( *firmas4D* ; *tiposNativos* {; *nombresFormatos*} )<!-- END REF-->
<!--REF #_command_.GET PASTEBOARD DATA TYPE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| firmas4D | Text array | &#8592; | Firmas 4D de tipos de datos |
| tiposNativos | Text array | &#8592; | Tipos de datos nativos |
| nombresFormatos | Text array | &#8592; | Nombres de los formatos (Windows únicamente), cadenas vacías bajo Mac OS |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET PASTEBOARD DATA TYPE.Summary-->El comando GET PASTEBOARD DATA TYPE permite obtener la lista de los tipos de datos presentes en el portapapeles.<!-- END REF--> Este comando generalmente debe ser utilizado en el contexto de una operación arrastrar y soltar, en los eventos de formulario On Drop o On Drag Over del objeto de destino. Más particularmente, permite verificar la presencia de un tipo de datos específico en el portapapeles. 

Este comando devuelve los tipos de datos en diferentes formas vía dos (o tres) arrays:

* El array *firmas4D* contiene los tipos de datos expresados utilizando la firma 4D interna (por ejemplo, “com.4d.picture.gif”). Si 4D no reconoce un tipo de datos encontrado, una cadena vacía (“”) se devuelve en el array.
* El array *tiposNativos* contiene los tipos de datos expresados utilizando su tipo nativo. El formato de los tipos nativos difiere entre Mac OS y Windows:

\- Bajo Mac OS, los tipos nativos son expresados como UTIs (Uniform Tipo Identifier).

\- Bajo Windows, los tipos nativos son expresados como números, cada número está asociado a un nombre de formato. El array *tiposNativos* contiene estos números en forma de cadenas (“3”, “12”, etc.). Si quiere utilizar más etiquetas explícitas, se recomienda utilizar el array opcional *nombresFormatos*, que contiene el nombre del formato de los tipos nativos bajo Windows.

El array *tiposNativos* permite soportar todo tipo de datos presentes en el portapapeles, incluyendo los datos cuyo tipo no está referenciado por 4D.

* Bajo Windows, también puede pasar el array *nombresFormatos*, que recibe los nombres de los tipos de datos encontrados en el portapapeles. Los valores devueltos en este array pueden ser utilizados por ejemplo para construir un menú desplegable de selección de formato. Bajo Mac OS, el array *nomsFormats* devuelve las cadenas vacías.

Para mayor información sobre los tipos de datos soportados, consulte la sección *Gestión de portapapeles*.

#### Ver también 

*Gestión de portapapeles*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 958 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


