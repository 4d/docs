---
id: get-last-field-number
title: Get last field number
slug: /commands/get-last-field-number
displayed_sidebar: docs
---

<!--REF #_command_.Get last field number.Syntax-->**Get last field number** ( numTabla | ptrTabla ) -> Resultado<!-- END REF-->
<!--REF #_command_.Get last field number.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| numTabla &#124; ptrTabla | Entero largo, Puntero | &#x1F852; | Número de tabla o puntero a una tabla |
| Resultado | Integer | &#x1F850; | Número de campo más alto en la tabla |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get last field number.Summary-->El comando Get last field number devuelve el número de campo más alto de los campos en la tabla cuyo número o puntero se pasa en *numTabla* o *ptrTabla*.<!-- END REF--> 

Los campos están numerados en el orden en el cual fueron creados. Si ningún campo ha sido borrado de la tabla, este comando devuelve el número de campos que contiene la tabla. En el caso de bucles interactivos sobre los números de campo de la tabla, debe utilizar el comando [Is field number valid](is-field-number-valid.md "Is field number valid") con el fin de verificar que el campo no ha sido eliminado.

#### Ejemplo 

El siguiente método de proyecto crea el array *asCampos*, con los nombres de los campos de la tabla cuyo puntero se recibe como primer parámetro: 

```4d
 $vlTabla:=Table($1)
 ARRAY STRING(31;asCampos;Get last field number($vlTabla))
 For($vlCampo;Size of array(asCampos);1;-1)
    If(Is field number valid($vlTabla;$vlCampo)
       asCampos{$vlCampo}:=Field name($vlTabla;$vlCampo)
    Else
       DELETE FROM ARRAY(asCampos;$vlCampo)
    End if
 End for
```

#### Ver también 

[Field name](field-name.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[Get last table number](get-last-table-number.md)  
[Is field number valid](is-field-number-valid.md)  