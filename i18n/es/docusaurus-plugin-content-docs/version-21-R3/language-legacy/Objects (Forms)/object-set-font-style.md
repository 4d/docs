---
id: object-set-font-style
title: OBJECT SET FONT STYLE
slug: /commands/object-set-font-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT STYLE.Syntax-->**OBJECT SET FONT STYLE** ( * ; *objeto* : Text ; *estilos* : Integer )<br/>**OBJECT SET FONT STYLE** ( *objeto* : Field, Variable ; *estilos* : Integer )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT STYLE.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594; | Nombre de objeto (si se especifica *), o Campo o variable (si se omite *) |
| estilos | Integer | &#8594; | Estilo de fuente |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|12|Renombrar|
|6|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.OBJECT SET FONT STYLE.Summary-->OBJECT SET FONT STYLE asigna el estilo de fuente de *estilos* a los objetos de formulario especificados por *objeto*.<!-- END REF-->

Si especifica el parámetro opcional *\**, indica un nombre de objeto (una cadena) en *objeto*. Si omite el parámetro opcional \*, indica que el parámetro *objeto* es un campo o una variable. En este caso, se especifica una referencia de un campo o de una variable (campo o variable tipo objeto únicamente) en lugar de una cadena. Para mayor información sobre nombres de objetos, consulte la sección . 

En estilos se pasa una de las constantes predefinidas que define la selección de estilo de fuente. Las siguientes son constantes predefinidas de 4D:  

| Constante | Tipo         | Valor |
| --------- | ------------ | ----- |
| Plain     | Entero largo | 0     |
| Bold      | Entero largo | 1     |
| Italic    | Entero largo | 2     |
| Underline | Entero largo | 4     |

## Ejemplo 1 

Este ejemplo define el estilo de fuente para un botón llamado *bAñadirNuevo*. El estilo de fuente definido es negrita itálica: 

```4d
 OBJECT SET FONT STYLE(bAñadirNuevo;Bold+Italic)
```

## Ejemplo 2 

Este ejemplo define el estilo de fuente Plain para todos los objetos de formulario que comienzan por “vt”: 

```4d
 OBJECT SET FONT STYLE(*;"vt@";Plain)
```

## Ver también 

*Interacción de comandos genéricos con textos multiestilos*  
[OBJECT Get font style](../commands/object-get-font-style)  
[OBJECT SET FONT](../commands/object-set-font)  
[OBJECT SET FONT SIZE](../commands/object-set-font-size)  
[SET LIST ITEM PROPERTIES](../commands/set-list-item-properties)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 166 |
| Hilo seguro | no |


