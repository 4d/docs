---
id: dom-create-xml-element
title: DOM Create XML element
slug: /commands/dom-create-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Create XML element.Syntax-->**DOM Create XML element** ( *elementRef* ; *xRuta* {; *nomAtrib* ; *valorAtrib*} {; *nomAtrib2* ; *valorAtrib2* ; ... ; *nomAtribN* ; *valorAtribN*} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Create XML element.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Referencia del elemento XML raíz |
| xRuta | Text | &#8594;  | Ruta XPath del elemento XML a crear |
| nomAtrib | Text | &#8594;  | Atributo a definir |
| valorAtrib | Text, Boolean, Integer, Real, Time, Date | &#8594;  | Nuevo valor del atributo |
| Resultado | Text | &#8592; | Referencia del elemento XML creado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM Create XML element.Summary-->El comando **DOM Create XML element** permite crear un nuevo elemento en el elemento XML *refElement* en la ubicación definida por el parámetro *xRuta* y añadirle atributos si es necesario.<!-- END REF-->

Pase en *refElement* la referencia del elemento raíz (creado, por ejemplo utilizando el comando [DOM Create XML Ref](dom-create-xml-ref.md)).

En *xRuta*, pase la ruta de acceso del elemento a crear en notación XPath (para mayor información, ver la sección *Uso de la notación XPath (DOM)*). Se admiten las siguientes expresiones de ruta:

| **Expresión**  | **Acción**                                       |
| -------------- | ------------------------------------------------ |
| /              | Designa el nodo raíz (ruta absoluta)             |
| para\[1\]      | Designa el primer hijo para del nodo de contexto |
| para\[last()\] | Designa el último hijo para del nodo de contexto |

**Nota de compatibilidad:** **a partir de la v18 R3, la implementación de XPath en 4D es más compatible. Por razones de compatibilidad, la implementación no estándar anterior se mantiene de forma predeterminada en las bases convertidas. Si desea beneficiarse de las funcionalidades extendidas en sus bases convertidas, debe seleccionar la opción de compatibilidad *Utilizar XPath estándar de Página Compatibilidad.* 

Es posible pasar directamente en *xRuta* un nombre de elemento simple con el fin de crear un subelemento a partir del elemento actual (ver el ejemplo 3).

Si los elementos de la ruta de acceso no existen, son creados. Si ya existen los elementos de ruta, se agrega un nuevo nodo.

**Nota:** si definió uno o más espacios de nombre (namespaces) para el árbol designado por *refElement* (ver el comando [DOM Create XML Ref](dom-create-xml-ref.md)), debe preceder el parámetro *xRuta* del nombre de espacio a utilizar (por ejemplo, “MiNombreEspacio:MiElemento”).

Puede pasar pares de valor atributo/atributo (en forma de variables, campos o valores literales) en los parámetros opcionales *nomAtributo* y *valorAtributo*. Puede pasar tantos pares como quiera.

El parámetro *valorAtributo* puede ser de tipo texto o de otro tipo (Booleano, entero, real, hora o fecha). Si pasa un valor de un tipo diferente al tipo texto, 4D se encarga de la conversión a texto, de acuerdo a los siguientes principios:

| **Tipo** | **Ejemplo de valor convertido**               |
| -------- | --------------------------------------------- |
| Booleano | "true" o "false"                              |
| Entero   | "123456"                                      |
| Real     | "12.34" (el separador decimal siempre es ".") |
| Fecha    | "2006-12-04T00:00:00Z" (estándar RFC 3339)    |
| Hora     | "5233" (Número de segundos)                   |

El comando devuelve en resultado la referencia XML del elemento creado.

#### Ejemplo 1 

Queremos crear el siguiente elemento: 

```json
                                      
```

Para hacerlo, simplemente escribimos:

```4d
 var vRootRef;vElemRef : Text
 vRootRef:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3[2]"
 vElemRef:=DOM Create XML element(vRootRef;vxPath)
```

#### Ejemplo 2 

Queremos crear el siguiente elemento (contiene los atributos): \[#codeXML\]<?xml version="1.0" encoding="UTF-8" standalone="no" ?>  
<RootElement>  
<Elem1>  
<Elem2>  
<Elem3 Font=Verdana Size=10> </Elem3>  
<Elem3 Font=Verdana Size=8> </Elem3>  
</Elem2>  
</Elem1>  
</RootElement>\[#/codeRAW\]

Para hacerlo, simplemente escribimos:

```4d
 var vRootRef;vElemRef : Text
 var $aAttrName1;$aAttrName2;$aAttrVal1;$aAttrVal2;$aAttrVal3 : Text

$aAttrName1:="Font"
 $aAttrName2:="Size"
 $aAttrVal1:="Verdana"
 $aAttrVal2:="10"
 $aAttrVal3:="8"
 
 vRootRef:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3"
 vElemRef:=DOM Create XML element(vRootRef;vxPath;$aAttrName1;$aAttrVal1;$aAttrName2;$aAttrVal2)
 vElemRef:=DOM Create XML element(vRootRef;vxPath;$aAttrName1;$aAttrVal1;$aAttrName2;$aAttrVal3)


```

Si desea insertar un elemento después, puede escribir:

```4d
 vxPath:="/RootElement/Elem1/Elem2/Elem3[2]"
 vElemRef:=DOM Create XML element(vRootRef;vxPath;"Font";"Arial")
```

Tiene entonces:

```json
                                                
```

#### Ejemplo 3 

Queremos crear y exportar la siguiente estructura: 

```XML
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<Root>
   <Elem1>Hola</Elem1>
</Root>
```

Queremos utilizar la sintaxis basada en un nombre de elemento simple. Para hacerlo, simplemente escribimos:

```4d
 var $root : Text
 var $ref1 : Text
 
 $root:=DOM Create XML Ref("Raíz")
 $ref1:=DOM Create XML element($root;"Elem1")
 DOM SET XML ELEMENT VALUE($ref1;"Hola")
 DOM EXPORT TO FILE($root;"midoc.xml")
 DOM CLOSE XML($root)
```

#### Variables y conjuntos del sistema 

Si el comando se ejecutó correctamente, la variable sistema OK toma el valor 1\. De lo contrario, toma el valor 0 y se genera un error.

#### Gestión de errores 

Se genera un error cuando:

* La referencia del elemento raíz no es válida.
* El nombre del elemento a crear es inválido (por ejemplo, si comienza por un número).

#### Ver también 

[DOM Create XML element arrays](dom-create-xml-element-arrays.md)  
[DOM Get XML element](dom-get-xml-element.md)  
[DOM REMOVE XML ELEMENT](dom-remove-xml-element.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 865 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |
| Prohibido en el servidor ||


