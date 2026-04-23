---
id: object-set-font
title: OBJECT SET FONT
slug: /commands/object-set-font
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT.Syntax-->**OBJECT SET FONT** ( * ; *objeto* : Text ; *fuente* : Text )<br/>**OBJECT SET FONT** ( *objeto* : Field, Variable ; *fuente* : Text )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594; | Nombre de objeto (si se especifica *), o Campo o variable (si se omite *) |
| fuente | Text | &#8594; | Nombre o número de fuente |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|14|Modificado|
|12|Renombrar|
|6|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.OBJECT SET FONT.Summary-->OBJECT SET FONT muestra el *objeto* utilizando la fuente especificada en el parámetro *fuente*.<!-- END REF--> El parámetro *fuente* debe contener un nombre de fuente válido.

Si especifica el parámetro opcional *\**, indica un nombre de objeto (una cadena) en *objeto*. Si omite el parámetro opcional *\**, indica que el parámetro *objeto* es un campo o una variable. En este caso, se especifica una referencia de campo o de variable (campo o variable objeto únicamente) en lugar de una cadena.

**Nota:** si utiliza este comando en un *objeto* que estaba utilizando una hoja de estilo, la referencia a la hoja de estilo se elimina automáticamente del objeto - incluso si asigna los mismos atributos que los de la hoja de estilo.

## Ejemplo 1 

El siguiente ejemplo define la fuente de un botón llamado *bOK*: 

```4d
 OBJECT SET FONT(bOK;"Arial")
```

## Ejemplo 2 

El siguiente ejemplo define la fuente para todos los objetos de formulario cuyo nombre contenga "info": 

```4d
 OBJECT SET FONT(*;"@info@";"Times")
```

## Ejemplo 3 

El siguiente ejemplo utiliza la opción especial *%password*, diseñada para la entrada y visualización de campos de tipo “contraseña”. Cuando pase "%password" en el parámetro *fuente*:

* cada carácter introducido en el objeto se muestra con el mismo simbolo,
* las acciones "copiar" y "pegar" se desactivan en el objeto.

**Nota:** puede utilizar la opción *%password* con los objetos de tipo campo, variable y combo box.

```4d
 OBJECT SET FONT([Users]Password;"%password")
```

## Ver también 

[Font file](../commands/font-file)  
[FONT LIST](../commands/font-list)  
*Interacción de comandos genéricos con textos multiestilos*  
[OBJECT Get font](../commands/object-get-font)  
[OBJECT SET FONT SIZE](../commands/object-set-font-size)  
[OBJECT SET FONT STYLE](../commands/object-set-font-style)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 164 |
| Hilo seguro | no |


