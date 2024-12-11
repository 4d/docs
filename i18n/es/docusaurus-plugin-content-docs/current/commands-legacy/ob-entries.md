---
id: ob-entries
title: OB Entries
slug: /commands/ob-entries
displayed_sidebar: docs
---

<!--REF #_command_.OB Entries.Syntax-->**OB Entries** ( *objeto* ) : Collection<!-- END REF-->
<!--REF #_command_.OB Entries.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objeto | Object | &#8594;  | Objeto para devolver contenidos |
| Resultado | Collection | &#8592; | Colección de objetos con propiedades llave/valor |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OB Entries.Summary-->El comando **OB Entries** devuelve una colección de objetos que contienen el contenido del *objeto* como pares de propiedades llave/valor.<!-- END REF--> 

Cada objeto devuelto contiene las siguientes propiedades:

| **Propiedad** | **Tipo** | **Descripción**                           |
| ------------- | -------- | ----------------------------------------- |
| key           | cadena   | nombre de propiedad enumerable del objeto |
| value         | variante | valor de propiedad enumerable del objeto  |

Solo se devuelven los nombres de propiedad de primer nivel (no se devuelven los nombres de propiedad de los subobjetos). El orden de las propiedades dentro de la colección devuelta sigue el orden de definición de las propiedades.

#### Ejemplo 

El uso de un objeto como un mapa hash (sistema llave/valor) ofrece un acceso rápido y directo a los datos, al igual que cuando se utiliza un índice (por ejemplo, si necesitamos la edad de Mary, podemos escribir: $persons\["Mary"\])

```4d
 var $individual;$persons : Object
 var $names;$ages : Collection
 
 $persons:=New object
 $persons["John"]:=42
 $persons["Andy"]:=24
 $persons["Mary"]:=30
 $persons["Paul"]:=50
 
 ALERT("La edad promedio es "+String(OB Values($persons).average()))
 ALERT("Hay "+String(OB Keys($persons).length)+" personas")
 
 $ages:=OB Entries($persons).query("value>:1";25)
 ALERT("Hay "+String($ages.length)+" personas de más de 25")
 
 ALERT("Sus nombres son: "+$ages.extract("key").join("-"))
```

#### Ver también 

[OB Keys](ob-keys.md)  
[OB Values](ob-values.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1720 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


