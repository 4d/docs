---
id: insert-menu-item
title: INSERT MENU ITEM
slug: /commands/insert-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.INSERT MENU ITEM.Syntax-->**INSERT MENU ITEM** ( *menu* : Integer ; *depuesDe* : Integer ; *textoElem* : Text {; *subMenu* : Text {; *proceso* : Integer}}{; *} )<!-- END REF-->
<!--REF #_command_.INSERT MENU ITEM.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer | &#8594; | Número de menú o referencia de menú |
| depuesDe | Integer | &#8594; | Número de la línea de menú |
| textoElem | Text | &#8594; | Texto para la línea de menú a insertar |
| subMenu | Text | &#8594; | Referencia del submenú asociado con la línea |
| proceso | Integer | &#8594; | Número de referencia del proceso |
| * | Operador | &#8594; | Si se pasa: considerar metacaracteres como caracteres estándar |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|16 R3|Modificado|
|11 SQL Release 4|Modificado|
|<6|Creado|

</details>
</div>

## Descripción 

<!--REF #_command_.INSERT MENU ITEM.Summary-->El comando **INSERT MENU ITEM** inserta nuevas líneas en el menú cuyo número o referencia se pasa en *menu* y las ubica después de la línea de menú cuyo número se pasa en *despuesItem*.<!-- END REF-->

Si omite el parámetro *proceso*, **INSERT MENU ITEM** se aplica a la barra de menús del proceso actual. De lo contrario, **INSERT MENU ITEM** se aplica a la barra de menús del proceso actual cuyo número de referencia se pasa en *proceso*. 

**Nota:** si pasa un [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") en *menu*, el parámetro *proceso* es inútil y se ignorará.

Si no pasa el parámetro \* *, INSERT MENU ITEM* le permite insertar uno o varios comandos de menú en una sola llamada.

**INSERT MENU ITEM** funciona como [APPEND MENU ITEM](../commands/append-menu-item), excepto que le permite insertar los comandos en cualquier parte del menú, mientras que [APPEND MENU ITEM](../commands/append-menu-item) siempre los añade al final del menú.

Consulte la descripción del comando [APPEND MENU ITEM](../commands/append-menu-item) para más información sobre la definición de los comandos de menús pasados en *itemtext*.

**Nota:** la constante ak standard action title es soportada en el parámetro *itemText* (4D v16 R3 y superior).

El parámetro opcional *submenu* permite designar un menú como línea insertada y definir un submenú jerárquico. De pasar en este parámetro una referencia de menú (cadena de tipo MenuRef) especificando un menú creado, por ejemplo, utilizando el comando de menú [Create menu](../commands/create-menu). Si el comando añade más de una línea de menú, el submenú se asocia con la primera línea. 

**Importante:** las nuevas líneas no tienen métodos o acciones asociados. Deben asociarse utilizando los comandos [SET MENU ITEM PROPERTY](../commands/set-menu-item-property) o [SET MENU ITEM METHOD](../commands/set-menu-item-method), o los elementos también pueden ser administrados desde un método de formulario utilizando el comando [Menu selected](../commands/menu-selected).

## Ejemplo 

El siguiente ejemplo crea un menú que consiste en dos comandos los cuales asignan un método:

```4d
 MenuRef:=Crear menu
 APPEND MENU ITEM(MenuRef;"Caracteres")
 SET MENU ITEM METHOD(MenuRef;1;"CarMgmtDial")
 INSERT MENU ITEM(MenuRef;1;"Parrafos")
 SET MENU ITEM METHOD(MenuRef;2;"ParaMgmtDial")
```

## Ver también 

[APPEND MENU ITEM](../commands/append-menu-item)  
[SET MENU ITEM PARAMETER](../commands/set-menu-item-parameter)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 412 |
| Hilo seguro | no |
| Prohibido en el servidor ||


