---
id: dom-set-xml-element-name
title: DOM SET XML ELEMENT NAME
slug: /commands/dom-set-xml-element-name
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML ELEMENT NAME.Syntax-->**DOM SET XML ELEMENT NAME** ( *elementRef* ; *nomElement* )<!-- END REF-->
<!--REF #_command_.DOM SET XML ELEMENT NAME.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | Referencia del elemento XML |
| nomElement | Text | &#8594;  | Nuevo nombre del elemento |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DOM SET XML ELEMENT NAME.Summary-->El comando DOM SET XML ELEMENT NAME  permite modificar el nombre del elemento designado por *refElement*.<!-- END REF-->

Pase en *refElement* la referencia del elemento a renombrar y en *nomElement* el nuevo nombre del elemento. El comando también se encarga de actualizar las etiquetas de apertura y cierre del elemento. 

#### Ejemplo 

En el siguiente recurso XML: 

```XML
<Book>
   <Title>El mejor vendedor</Title>
</Book>
```

Si se ejecuta el siguiente código, suponiendo que *vRefElem* contiene la referencia del elemento ‘Book’:

```4d
 DOM SET XML ELEMENT NAME(vRefElem;"MejorVendedor")
```

Obtenemos:

```XML
<MejorVendedor>
   <Title>El mejor vendedor</Title>
</MejorVendedor>
```

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario toma el valor 0 y se genera un error. 

#### Gestión de errores 

Se genera un error cuando:

* La referencia del elemento no es válida
* El nuevo nombre del elemento a crear no es válido (por ejemplo, si comienza con un número).

#### Ver también 

[DOM GET XML ELEMENT NAME](dom-get-xml-element-name.md)  