---
id: get-localized-string
title: Get localized string
slug: /commands/get-localized-string
displayed_sidebar: docs
---

<!--REF #_command_.Get localized string.Syntax-->**Get localized string** ( *resNombre* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Get localized string.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| resNombre | Cadena | &#x1F852; | Nombre del atributo resNombre |
| Resultado | Cadena | &#x1F850; | Valor de la cadena designada por resNombre en el lenguaje actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get localized string.Summary-->El comando Get localized string devuelve el valor de la cadena designada por el atributo *resNombre* para el lenguaje actual.<!-- END REF--> 

Este comando sólo funciona dentro de una arquitectura XLIFF. Para mayor información sobre este tipo de arquitectura, por favor consulte la descripción de soporte de XLIFF en el *manual de Diseño*.

**Nota:** el comando [Get database localization](get-database-localization.md "Get database localization") puede utilizarse para buscar el lenguaje utilizado por la aplicación.

Pase en *resNombre* el nombre del recurso de la cadena en la cual quiere obtener la traducción en el lenguaje objetivo actual.

Tenga encuenta que XLIFF es diacrítica.

#### Ejemplo 

Este es un extracto del archivo .xlf: 

```XML
<file source-language="en-US" target-language="es-ES">
[...]
   <trans-unit resname="Show on disk">
      <source>Show on disk</source>
      <target>Mostrar en el disco</target>
   </trans-unit>
```

Después de la ejecución de la siguiente instrucción:

```4d
 $valorES:=Get localized string("Show on disk")
```

... si el lenguaje actual es el Español, $valorES contiene “Mostrar en el disco”.

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable OK toma el valor 1\. Si *resNombre* no se encuentra, el comando devuelve una cadena vacía y la variable OK toma el valor 0.

#### Ver también 

[Get database localization](get-database-localization.md)  