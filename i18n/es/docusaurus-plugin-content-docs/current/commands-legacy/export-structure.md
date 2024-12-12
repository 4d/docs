---
id: export-structure
title: EXPORT STRUCTURE
slug: /commands/export-structure
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT STRUCTURE.Syntax-->**EXPORT STRUCTURE** ( *estructuraXML* {; *format*} )<!-- END REF-->
<!--REF #_command_.EXPORT STRUCTURE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| estructuraXML | Text | &#8592; | Exportación de la definición XML de la estructura de la base 4D |
| format | Text | &#8594;  | Export format: xml format (default) or html format |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.EXPORT STRUCTURE.Summary-->El comando **EXPORT STRUCTURE** exporta la definición de la estructura de la base 4D actual en *estructuraE* *xportada*.<!-- END REF-->

En *estructuraE* *xportada*, pase la variable texto destinada a almacenar la definición de la estructura. La definición exportada incluye las tablas, los campos, los índices y las relaciones, así como también sus atributos y todas las características necesarias para obtener una descripción completa de la estructura. Los elementos invisibles se exportan con el atributo correspondiente. Sin embargo, los elementos eliminados no se exportan. 

Por defecto, si omite el parámetro *formato*, el comando exporta la definición de la estructura en formato XML. De lo contrario, puede pasar una de las siguientes constantes en el parámetro *formato*:

| Constante   | Valor |
| ----------- | ----- |
| html format | html  |
| xml format  | xml   |

El comando genera el mismo código XML o HTML que el elemento de menú **Exportar > Definición de estructura a archivo XML... o Exportar > Definición de estructura a archivo HTML...** (ver *Exportar e importar las definiciones de estructura*).

* **Formato xml**: la "gramática" interna de las definiciones de estructura 4D se documenta mediante archivos DTD, también utilizados para la validación de archivos XML. Los archivos DTD utilizados por 4D están agrupados en la carpeta DTD, que se encuentra junto a la aplicación 4D. Los archivos **base\_core.dtd** y **common.dtd** se utilizan para las definiciones de estructura. Para más información, puede consultar estos archivos junto con los comentarios que contienen.Una definición de estructura exportada en formato XML puede ser importada en otra base de datos (ver [IMPORT STRUCTURE](import-structure.md)).
* **Formato** **html**: el comando genera código HTML puro que incluye referencias a una carpeta que contiene recursos externos como imágenes o css, necesarios para la representación HTML. Si desea guardar este código en una página HTML para mostrarla en un navegador, puede reutilizar la carpeta creada por la opción de menú **Exportar > Definición de estructura a archivo HTML...**, o crear su propia carpeta de recursos.

#### Ejemplo 1 

Usted desea exportar la estructura de la base a un documento de texto:

```4d
 var $vTStruc : Text
 EXPORT STRUCTURE($vTStruc)
 TEXT TO DOCUMENT("myStructure.xml";$vTStruc)
```

#### Ejemplo 2 

Desea exportar la estructura actual de la base de datos en formato html:

```4d
 var $vHtml : Text
 EXPORT STRUCTURE($vHtml;html format)
 File("/PACKAGE/myProject Structure Export/myProject.html").setText($vHtml)
```

#### Ver también 

[IMPORT STRUCTURE](import-structure.md)  