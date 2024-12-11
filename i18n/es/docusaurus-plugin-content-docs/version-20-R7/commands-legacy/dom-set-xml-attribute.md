---
id: dom-set-xml-attribute
title: DOM SET XML ATTRIBUTE
slug: /commands/dom-set-xml-attribute
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML ATTRIBUTE.Syntax-->**DOM SET XML ATTRIBUTE** ( *elementRef* ; *nomAtrib* ; *valorAtrib* {; *nomAtrib2* ; *valorAtrib2* ; ... ; *nomAtribN* ; *valorAtribN*} )<!-- END REF-->
<!--REF #_command_.DOM SET XML ATTRIBUTE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Referencia del elemento XML |
| nomAtrib | Text | &#8594;  | Atributo a definir |
| valorAtrib | Text, Boolean, Integer, Real, Time, Date | &#8594;  | Nuevo valor del atributo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM SET XML ATTRIBUTE.Summary-->El comando DOM SET XML ATTRIBUTE  permite añadir uno o varios atributos al elemento XML cuya referencia se pasa en el parámetro *refElement*.<!-- END REF--> También permite definir el valor de cada atributo definido. 

Pase en los parámetros *nomAtrib* y *valorAtrib* respectivamente el atributo a escribir y su valor (en forma de variables, campos, o valores literales). Puede pasar tantos atributos/valores como quiera.

El parámetro *valorAtrib* puede ser de tipo texto o de otro tipo (Booleano, entero, real, fecha u hora). Si pasa un valor de un tipo diferente a texto, 4D se encarga de su conversión a texto, de acuerdo a los siguientes principios:

| **Tipo** | **Ejemplo de valor convertido**               |
| -------- | --------------------------------------------- |
| Booleano | "true" o "false" (no traducido)               |
| Entero   | "123456"                                      |
| Real     | "12.34" (el separador decimal siempre es ".") |
| Fecha    | "2006-12-04T00:00:00Z" (estándar RFC 3339)    |
| Hora     | "5233" (número de segundos)                   |

#### Ejemplo 

En la siguiente fuente XML: 

```XML
<Book>
   <Title>El mejor vendedor</Title>
</Book>
```

Si se ejecuta el código siguiente:

```4d
 vAtrNom:="Font"
 vAtrVal:="Verdana"
 DOM SET XML ATTRIBUTE(vRefElem;vAtrNom;vAtrVal)
```

Obtenemos:

```XML
<Book>
   <Title Font=Verdana>El mejor vendedor</Title>
</Book>
```

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. Si no, toma el valor 0 y se genera un error.

#### Ver también 

[DOM GET XML ATTRIBUTE BY INDEX](dom-get-xml-attribute-by-index.md)  
[DOM GET XML ATTRIBUTE BY NAME](dom-get-xml-attribute-by-name.md)  
[DOM REMOVE XML ATTRIBUTE](dom-remove-xml-attribute.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 866 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


