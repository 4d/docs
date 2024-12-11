---
id: dom-create-xml-ref
title: DOM Create XML Ref
slug: /commands/dom-create-xml-ref
displayed_sidebar: docs
---

<!--REF #_command_.DOM Create XML Ref.Syntax-->**DOM Create XML Ref** ( *raiz* {; *nomEspacio*} {; *nSNom* ; *nSValor*} {; *nSNom2* ; *nSValor2* ; ... ; *nSNomN* ; *nSValorN*} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Create XML Ref.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| raiz | Text | &#8594;  | Nombre del elemento raíz |
| nomEspacio | Text | &#8594;  | Valor del espacio de nombre (namespace) |
| nSNom | Text | &#8594;  | Nombre del espacio de nombre |
| nSValor | Text | &#8594;  | Valor de espacio de nombre |
| Resultado | Text | &#8592; | Referencia del elemento XML raíz |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM Create XML Ref.Summary-->El comando DOM Create XML Ref crea un árbol XML vacío en memoria y devuelve su referencia.<!-- END REF-->  
  
Pase en el parámetro *raiz* el nombre del elemento raíz del árbol XML. 

Pase en el parámetro opcional *nomEspacio* la declaración del valor del espacio de nombre (namespace) del árbol (por ejemplo “http://www.4dhispano.com”). 

Note que es posible poner un prefijo al parámetro *raiz* con el nombre del espacio seguido de dos punto*s :* (por ejemplo “MiNombreEspacio:MiRaiz”). En este caso, el parámetro *nomEspacio* especificando el valor del espacio de nombre es obligatorio. 

**Nota:** el espacio de nombre es una cadena que permite garantizar la unicidad de los nombres de las variables XML. Por lo general, se utiliza un URL como http://www.misitio.com/miurl. El URL no necesariamente tiene que ser válido, pero tiene que ser único. 

Puede declarar uno o varios espacios de nombre adicionales en el árbol XML generado, con la ayuda de pares *nSNombre/nSValor*. Puede pasar tantos pares nombre/valor de espacio de nombre como quiera. 

**Importante:** recuerde llamar al comando [DOM CLOSE XML](dom-close-xml.md "DOM CLOSE XML") con el fin de liberar memoria cuando termine de utilizar el árbol XML.

#### Ejemplo 1 

Creación de un árbol XML simple: 

```4d
 var vRefElem : Text
 vRefElem:=DOM Create XML Ref("MiRaiz")
```

Este código produce el siguiente resultado:

```XML
<?xml version="1.0" encoding="UTF-8" standalone="no" ?> 
<MiRaiz/>
```

#### Ejemplo 2 

Creación de un árbol XML con un espacio de nombre: 

```4d
 var vRefElem : Text
 $Raiz:="MiNombreEspacio:MiRaiz"
 $Nombreespacio:="http://www.4DHispano.com/tech/nombreespacio"
 vRefElem:=DOM Create XML Ref($Raiz;$Nombreespacio)
```

Este código da el siguiente resultado:

```XML
<Minombreespacio:Miraiz xmlns:Minombreespacio="http://www.4DHispano.com/tech/nombreespacio"/>
```

#### Ejemplo 3 

Creación de un árbol XML con varios espacios de nombre: 

```4d
 var vRefElem : Text
 var 80;$aNSNom1;$aNSNom2;$aNSValor1;$aNSValor2 : Text
 $Raiz:="MiNombreEspacio:MiRaiz"
 $Nombreespacio:="http://www.4DHispano.com/tech/nombreespacio"
 $aNSNom1:="NSNom1"
 $aNSNom2:="NSNom2"
 $aNSValor1:="http://www.4DHispano.com/Prod/nombreespacio"
 $aNSValor2:="http://www.4DHispano.com/Mkt/nombreespacio"
 vRefElem:=DOM Create XML Ref($Raiz;$Nombreespacio;$aNSNom1;$aNSValor1;$aNSNom2;$aNSValor2)
```

Este código produce el siguiente resultado:

```XML
<MiNombreEspacio:MiRaiz xmlns:MiNombreEspacio="http://www.4DHispano.com/tech/nombreEspacio"
NSNom1="http://www.4DHispano.com/Prod/nombreespacio"
NSNom2="http://www.4DHispano.com/Mkt/nombreespacio"/>
```

#### Variables y conjuntos del sistema 

Si el comando se ejecutó correctamente, la variable sistema OK toma el valor 1\. De lo contrario, toma el valor 0 y se genera un error. 

#### Ver también 

[DOM CLOSE XML](dom-close-xml.md)  
[DOM SET XML DECLARATION](dom-set-xml-declaration.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 861 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |
| Prohibido en el servidor ||


