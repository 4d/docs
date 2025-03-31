---
id: "null"
title: "Null"
slug: /commands/null
displayed_sidebar: docs
---

<!--REF #_command_.Null.Syntax-->**Null**  : Null<!-- END REF-->
<!--REF #_command_.Null.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Null | &#8592; | Valor Null |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Null.Summary-->**Null** devuelve el valor **null** de tipo *null*.<!-- END REF-->

Esta función permite afectar o comparar el valor **null** de los siguientes elementos del lenguaje 4D:

| **Elementos del lenguaje**                                     | **Comentarios**                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Valores de propiedades de objetos                              | La comparación de **Null** con una propiedad de objeto devuelve True si el valor de la propiedad es null o False de lo contrario. Para simplificar código, comparar **Null** también devuelve true si la propiedad no existe en el objeto (es decir [Undefined](undefined.md)), ver ejemplo 4\. |
| Elementos de colecciones                                       | Cuando una colección se expande añadiendo elementos no adyacentes, todos los elementos intermediarios obtienen automáticamente el valor **null**.                                                                                                                                               |
| Variables de tipo objeto (*C\_OBJECT*)            | Ver (\*) abajo                                                                                                                                                                                                                                                                                  |
| Variables de tipo colección (*C\_COLLECTION*) | Ver (\*) abajo                                                                                                                                                                                                                                                                                  |
| Variables de tipo puntero (*C\_POINTER*)         | Ver (\*) abajo                                                                                                                                                                                                                                                                                  |
| Variables de tipo imagen (*C\_PICTURE*)          | (\*) Asignar el valor null a una variable de este tipo borra su contenido. En este caso, tiene el mismo efecto que llamar al comando [CLEAR VARIABLE](clear-variable.md)                                                                                                                        |
| Variables de tipo variant (*C\_VARIANT*)         |                                                                                                                                                                                                                                                                                                 |

El valor **Null** no se puede pasar como un parámetro a un método o se devuelve como un resultado de función.

**Nota:** este comando no se puede utilizar con campos escalares de la base de datos. Los valores Null en los campos de la base son gestionados por el motor SQL y se gestionan a través de los comandos [Is field value Null](is-field-value-null.md) y [SET FIELD VALUE NULL](set-field-value-null.md).

#### Ejemplo 1 

Usted desea asignar y probar el valor **null** con las propiedades de los objetos:

```4d
 var vEmp : Object
 vEmp:=New object
 vEmp.name:="Smith"
 vEmp.children:=Null
 
 If(vEmp.children=Null) //true
 End if
 If(vEmp.name=Null) //false
 End if
 If(vEmp.parent=Null) //true
 End if
```

**Nota:** este ejemplo requiere que la notación objeto esté activada en la base.

#### Ejemplo 2 

Usted desea asignar y comparar el valor **null** con colección de elementos:

```4d
 var myCol : Collection
 myCol:=New collection(10;20;Null)
 ...
 If(myCol[2]=Null)
  // si el tercer elemento es null
    ...
 End if
```

#### Ejemplo 3 

Estos ejemplos muestran las distintas maneras de asignar o comparar el valor **null** con las variables:

```4d
  //Variable objeto
 var $o : Object
 $o:=New object
 $o:=Null //equivalente a CLEAR VARIABLE($o)
 If($o#Null) //equivalente a If (OB Is defined($o))
 End if
```

```4d
  //Variable collection
 var $c : Collection
 $c:=New collection
 $c:=Null //equivalent to CLEAR VARIABLE($c)
 If($c#Null)
 End if
```

```4d
  //Variable Puntero
 var $p : Pointer
 $p:=->$v
 $p:=Null //equivalente a CLEAR VARIABLE($p)
 If($p=Null) //equivalente a If (Is Nil pointer($p))
 End if
```

```4d
  //Variable imagen
 var $i : Picture
 $i:=$vpicture
 $i:=Null //equivalente a CLEAR VARIABLE($i)
 If($i#Null) //equivalente a If (Picture size($i)#0)
 End if
```

#### Ejemplo 4 

Aquí están los diferentes resultados del comando [Undefined](undefined.md) así como también del comando [Null](null.md) aplicados a las propiedades de objetos, dependiendo del contexto:

```4d
 var vEmp : Object
 vEmp:=New object
 vEmp.name:="Smith"
 vEmp.children:=Null
 
 $undefined:=Undefined(vEmp.name) // False
 $null:=(vEmp.name=Null) //False
 
 $undefined:=Undefined(vEmp.children) // False
 $null:=(vEmp.children=Null) //True
 
 $undefined:=Undefined(vEmp.parent) // True
 $null:=(vEmp.parent=Null) //True
```

#### Ver también 

[Is field value Null](is-field-value-null.md)  
[OB SET NULL](ob-set-null.md)  
[SET FIELD VALUE NULL](set-field-value-null.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1517 |
| Hilo seguro | &check; |


