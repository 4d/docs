---
id: ob-is-defined
title: OB Is defined
slug: /commands/ob-is-defined
displayed_sidebar: docs
---

<!--REF #_command_.OB Is defined.Syntax-->**OB Is defined** ( *objeto* {; *propiedad*} ) : Boolean<!-- END REF-->
<!--REF #_command_.OB Is defined.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objeto | Object, Campo Object | &#8594;  | Objeto estructurado |
| propiedad | Text | &#8594;  | Si se pasa = propiedad a verificar, si se omite = verificar el objeto |
| Resultado | Boolean | &#8592; | Si propiedad se omite: True si objeto está definido, de lo contrario False.<br/>Si propiedad se pasa: True si propiedad está definida, de lo contrario False |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OB Is defined.Summary-->El comando **OB Is defined** devuelve **True** si *objeto* o *propiedad* se definen y **False** en caso contrario.<!-- END REF-->debe haber sido creado con el comando [C\_OBJECT](c-object.md) o designar un campo objeto 4D.  
  
Por defecto, si se omite el parámetro *propiedad*, el comando comprueba que *objeto* esté definido. Un objeto está definido si su contenido se ha sido inicializado.  
  
**Nota**: un objeto puede estar definido, pero vacío. Para saber si un objeto no está definido o está vacío, utilice el comando [OB Is empty](ob-is-empty.md).  
  
Si pasa el parámetro *propiedad*, el comando comprueba si existe esta propiedad en *objeto*. Tenga en cuenta que el parámetro *propiedad* es sensible a las mayúsculas y minúsculas.

#### Ejemplo 1 

Sintaxis probando la inicialización de un objeto:

```4d
 var $object : Object
 $def:=OB Is defined($object) // $def=false since $object no está incializado
 
 OB SET($object;"Name";"Martin")
 OB REMOVE($object;"Name")
 $def2:=OB Is defined($object) // $def2=true ya que $object está vacío {} pero ha sido inicializado
```

#### Ejemplo 2 

Prueba de la existencia de una propiedad:

```4d
 var $ref : Object
 OB SET($ref;"name";"smith";"age";42)
  //...
 If(OB Is defined($ref;"age"))
  //...
 End if
```

Esta prueba es equivalente a:

```4d
 If(OB Get type($Object;"name")#Is undefined)
```

#### Ver también 

[OB Is empty](ob-is-empty.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1231 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


