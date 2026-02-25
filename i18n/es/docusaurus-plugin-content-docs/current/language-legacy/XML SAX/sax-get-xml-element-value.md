---
id: sax-get-xml-element-value
title: SAX GET XML ELEMENT VALUE
slug: /commands/sax-get-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.SAX GET XML ELEMENT VALUE.Syntax-->**SAX GET XML ELEMENT VALUE** ( *documento* : Time ; *valor* : Text, Blob )<!-- END REF-->
<!--REF #_command_.SAX GET XML ELEMENT VALUE.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| documento | Time | &#8594; | Referencia del documento abierto |
| valor | Text, Blob | &#8592; | Valor del elemento |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|12|Modificado|
|2004|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.SAX GET XML ELEMENT VALUE.Summary-->El comando SAX GET XML ELEMENT VALUE  permite recuperar el *valor* de un elemento XML existente en el documento XML referenciado por *documento*.<!-- END REF--> Este comando debe llamarse en el contexto de un evento XML DATA SAX. Para mayor información sobre los eventos SAX, consulte la descripción del comando [SAX Get XML node](sax-get-xml-node.md "SAX Get XML node"). 

Pase en el parámetro *valor* una variable de tipo Texto o BLOB. Si pasa un BLOB, el comando automáticamente intentará decodificarlo en base64.

## Ejemplo 

Miremos el siguiente código XML: 

```XML
<ElementoRaiz>
   <Hijo Att1="111" Att2="222" Att3="333">MyText</Hijo>
</ElementoRaiz>
```

La siguiente instrucción devolverá “MiText” en *vValor*:

```4d
 SAX GET XML ELEMENT VALUE(DocRef;vValor)
```

## Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario toma el valor 0 y se genera un error. 

## Ver también 

[SAX ADD XML ELEMENT VALUE](../commands/sax-add-xml-element-value)  
[SAX Get XML node](../commands/sax-get-xml-node)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 877 |
| Hilo seguro | yes |
| Modifica variables | OK, error |


