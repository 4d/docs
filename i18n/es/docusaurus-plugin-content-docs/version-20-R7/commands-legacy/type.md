---
id: type
title: Type
slug: /commands/type
displayed_sidebar: docs
---

<!--REF #_command_.Type.Syntax-->**Type** ( *campoVar* ) : Integer<!-- END REF-->
<!--REF #_command_.Type.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| campoVar | Field, Variable | &#8594;  | Campo o variable a probar |
| Resultado | Integer | &#8592; | Número de tipo de datos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Type.Summary-->El comando Type devuelve un valor numérico que indica el tipo de campo o variable que pasa en el parámetro *campoVar*.<!-- END REF-->  
4D ofrece las siguientes constantes predefinidas que se encuentran en el tema *Tipos de campos y variables*:

| Constante          | Tipo         | Valor |
| ------------------ | ------------ | ----- |
| Array 2D           | Entero largo | 13    |
| Blob array         | Entero largo | 31    |
| Boolean array      | Entero largo | 22    |
| Date array         | Entero largo | 17    |
| Integer array      | Entero largo | 15    |
| Is alpha field     | Entero largo | 0     |
| Is BLOB            | Entero largo | 30    |
| Is Boolean         | Entero largo | 6     |
| Is collection      | Entero largo | 42    |
| Is date            | Entero largo | 4     |
| Is integer         | Entero largo | 8     |
| Is integer 64 bits | Entero largo | 25    |
| Is longint         | Entero largo | 9     |
| Is null            | Entero largo | 255   |
| Is object          | Entero largo | 38    |
| Is picture         | Entero largo | 3     |
| Is pointer         | Entero largo | 23    |
| Is real            | Entero largo | 1     |
| Is string var      | Entero largo | 24    |
| Is subtable        | Entero largo | 7     |
| Is text            | Entero largo | 2     |
| Is time            | Entero largo | 11    |
| Is undefined       | Entero largo | 5     |
| Is variant         | Entero largo | 12    |
| LongInt array      | Entero largo | 16    |
| Object array       | Entero largo | 39    |
| Picture array      | Entero largo | 19    |
| Pointer array      | Entero largo | 20    |
| Real array         | Entero largo | 14    |
| String array       | Entero largo | 21    |
| Text array         | Entero largo | 18    |
| Time array         | Entero largo | 32    |

Puede aplicar la función Type a los campos, variables interproceso, variables proceso, variables locales y punteros desreferenciados para estos tipos de objetos. Puede aplicar **Type** a los parámetros *($1, $2 ... ${...})* de un método proyecto o a un resultado de una función *($0)*.

**Notas:** 

* Puede aplicar la función **Type** a las expresiones escalares como propiedades de objeto (*emp.name*) o los elementos de colecciones (*myColl\[5\]*). Para ello, debe utilizar el comando [Value type](value-type.md).
* En modo compilado, llamar **Type** en un parámetro método ($0, $1...) declarado como [C\_VARIANT](c-variant.md) no devuelve Is variant sino el tipo de datos real (igual que llamar a [Value type](value-type.md)).

#### Ejemplo 1 

El siguiente método de proyecto borra una parte o la totalidad de los campos del registro actual de la tabla a la cual apunta el puntero pasado como parámetro. Hace esto sin borrar o cambiar el registro actual:

```4d
  // Método de proyecto BORRAR REGISTRO
  // BORRAR REGISTRO ( Puntero {; Entero largo } )
  // BORRAR REGISTRO ( -> [Tabla] { ; Tipo de valores } )
 var $1 : Pointer
 var $2;$vlTipoVal : Integer
 If(Count parameters>=2)
    $vlTipoVal:=$2
 Else
    $vlTipoVal:=0xFFFFFFFF
 End if
 For($vlCampo;1;Count fields($1))
    $vpCampo:=Field(Table($1);$vlCampo)
    $vlTipoCampo:=Type($vpCampo->)
    If($vlTipoVal??$vlTipoCampo )
       Case of
          :(($vlTipoCampo =Is alpha field)|($vlTipoCampo =Is text))
             $vpCampo->:=""
          :(($vlTipoCampo =Is real)|($vlTipoCampo=Is integer)|($vlTipoCampo =Is longint))
             $vpCampo->:=0
          :($vlTipoCampo =Is date)
             $vpCampo->:=!00/00/00!
          :($vlTipoCampo =Is time)
             $vpCampo->:=?00:00:00?
          :($vlTipoCampo =Is Boolean)
             $vpCampo->:=False
          :($vlTipoCampo =Is picture)
             var $vgImagenVacia : Picture
             $vpCampo->:=$vgImagenVacia
          :($vlTipoCampo =Is subtable)
             Repeat
                ALL SUBRECORDS($vpCampo->)
                DELETE SUBRECORD($vpCampo->)
             Until(Records in subselection($vpCampo->)=0)
          :($vlTipoCampo =Is BLOB)
             SET BLOB SIZE($vpCampo->;0)
       End case
    End if
 End for
```

Después de implementar este método de proyecto en su base de datos, puede escribir:

```4d
  // Borrar todo el registro actual de la tabla [Cosas por hacer]
 BORRAR REGISTRO(->[Cosas por hacer])
  // Borrar los campos de tipo Texto, BLOB e Imagen del registro actual de la tabla [Cosas por hacer]
 BORRAR REGISTRO(->[Cosas por hacer];0?+Is text?+Is BLOB?+Is picture)
  // Borrar la totalidad del registro actual de la tabla [Cosas por hacer] excepto los campos Alfa
 BORRAR REGISTRO(->[Cosas por hacer];-1?-Is alpha field)
```

#### Ejemplo 2 

En algunos casos, por ejemplo cuando se escribe código genérico, puede necesitar saber si un array es un array estándar independiente o una "fila" de un array 2D. En este caso, puede utilizar el siguiente código:  

```4d
 ptrmiArr:=->miArr{6} // ¿Es miArr{6} la fila de un array 2D?
 RESOLVE POINTER(ptrmiArr;varNombre;numTabla;numCamp)
 If(varNombre#"")
    $ptr:=Get pointer(varNombre)
    $eltipo:=Type($ptr->)
  // Si miArr{6} es una fila de un array 2D, $eltipo es igual a 13
 End if
```

#### Ejemplo 3 

Ver ejemplo del comando [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD").

#### Ver también 

[Is a variable](is-a-variable.md)  
[Undefined](undefined.md)  
[Value type](value-type.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 295 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


