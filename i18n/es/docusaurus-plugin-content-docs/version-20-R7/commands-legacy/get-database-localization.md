---
id: get-database-localization
title: Get database localization
slug: /commands/get-database-localization
displayed_sidebar: docs
---

<!--REF #_command_.Get database localization.Syntax-->**Get database localization** {( {*tipoLeng*}{;}{*} )} : Text<!-- END REF-->
<!--REF #_command_.Get database localization.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tipoLeng | Integer | &#8594;  | Tipo de lenguaje |
| * | Operador | &#8594;  | Devuelve información sobre la base local |
| Resultado | Text | &#8592; | Lenguaje actual de la base |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get database localization.Summary-->El comando Get database localization devuelve el lenguaje por defecto o el lenguaje de la base, especificado por *tipoLeng*, expresado en el estándar definido por la RFC 3066.<!-- END REF-->Generalmente, el comando devuelve “en” para inglés, “es” para español, etc. Para mayor información sobre este estándar y los valores devueltos por este comando, por favor consulte el *Apéndice B: Arquitectura XLIFF* en el manual de *Diseño*. 

Varios parámetros de idiomas diferentes pueden utilizarse simultáneamente en la aplicación. Para designar el parámetro a obtener, pase en *tipoLeng* una de las siguiente constantes, que se encuentran en el tema *Entorno 4D*:

| Constante                | Tipo         | Valor | Comentario                                                                                                                                                                       |
| ------------------------ | ------------ | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Current localization     | Entero largo | 1     | Lenguaje actual de la aplicación: lenguaje por defecto o lenguaje definido vía el comando [SET DATABASE LOCALIZATION](set-database-localization.md "SET DATABASE LOCALIZATION"). |
| Default localization     | Entero largo | 0     | Lenguaje definido automáticamente por 4D al inicio en función de la carpeta Resources y del entorno sistema (no modificable)                                                     |
| Internal 4D localization | Entero largo | 3     | Lenguaje utilizado por 4D para ordenaciones y comparaciones de textos (definido en las Preferencias de la aplicación).                                                           |
| User system localization | Entero largo | 2     | Lenguaje definido por el usuario actual del sistema.                                                                                                                             |

Por defecto, si omite el parámetro *tipoLeng*, el comando devuelve el lenguaje por defecto (0). 

El parámetro opcional *\** es útil en el caso de una arquitectura que utiliza componentes: puede utilizarse para determinar la base de datos (local o componente) para la que desea averiguar el idioma.

* Cuando se llama al comando desde un componente:  
   * Si se pasa el parámetro *\**, el comando devuelve la configuración de idioma de la base local.  
   * Si no se pasa el parámetro *\**, el comando devuelve la configuración de idioma de la base componente.

Cuando se llama al comando desde un método de la base local, siempre devuelve la configuración de idioma de la base de datos local (*\** se ignora).

El lenguaje actual de la base permite definir la carpeta .lproj en la que el programa va a buscar loe elementos localizados de la base de datos. 4D determina automáticamente el lenguaje actual al iniciarse la base de acuerdo a los contenidos de la carpeta *Recursos* y del entorno del sistema. El principio consiste en que 4D carga la primera carpeta .lproj de la base que corresponde al lenguaje de referencia, con el siguiente orden de prioridades:

**1.** Lenguaje del sistema (en Mac OS, varios idiomas pueden ser definidos con un orden de preferencia, 4D utiliza este parámetro).  
**2.** Lenguaje de la aplicación 4D.  
**3.** Inglés  
**4.** Primer lenguaje encontrado en la carpeta **Resources**.

**Nota:** si la base no contiene una carpeta .lproj, 4D aplica el siguiente orden de prioridad: 1\. Lenguaje del sistema 2\. Inglés (si el lenguaje del sistema no puede identificarse).

#### Ver también 

[Localized document path](localized-document-path.md)  
[SET DATABASE LOCALIZATION](set-database-localization.md)  