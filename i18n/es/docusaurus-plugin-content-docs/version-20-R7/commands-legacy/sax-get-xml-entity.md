---
id: sax-get-xml-entity
title: SAX GET XML ENTITY
slug: /commands/sax-get-xml-entity
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML ENTITY.Syntax-->**SAX GET XML ENTITY** ( *documento* ; *nombre* ; *valor* )<!-- END REF-->
<!--REF #_command_.SAX GET XML ENTITY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Time | &#8594;  | Referencia del documento abierto |
| nombre | Text | &#8592; | Nombre de la entidad |
| valor | Text | &#8592; | Valor de la entidad |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SAX GET XML ENTITY.Summary-->El comando SAX GET XML ENTITY  permite recuperar el *nombre* y *valor* de una entidad XML presente en el documento XML referenciado por *documento*.<!-- END REF--> Este comando debe llamarse con el evento XML Entity SAX. Para mayor información sobre los eventos SAX, consulte la descripción del comando [SAX Get XML node](sax-get-xml-node.md "SAX Get XML node"). 

#### Ejemplo 

Miremos el siguiente código XML: 

```XML
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE body [
   <!ELEMENT body (element*)>
   <!ELEMENT element (#PCDATA)>
   <!ENTITY nombre "Remplazo">
]>
<body>
   <element>Entidad actualizada por &nombre;</element>
</body>
```

La siguiente instrucción devolverá “nombre” en *vNom* y “Remplazo” en *vValor*. 

```4d
 SAX GET XML ENTITY(DocRef;vNom;vValor)
```

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario toma el valor 0 y se genera un error. 

#### Ver también 

[SAX Get XML node](sax-get-xml-node.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 879 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |


