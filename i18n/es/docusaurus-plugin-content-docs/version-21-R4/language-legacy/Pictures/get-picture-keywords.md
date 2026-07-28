---
id: get-picture-keywords
title: GET PICTURE KEYWORDS
slug: /commands/get-picture-keywords
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE KEYWORDS.Syntax-->**GET PICTURE KEYWORDS** ( *imagen* : Picture ; *arrayPalabrasClaves* : Text array {; *} )<!-- END REF-->
<!--REF #_command_.GET PICTURE KEYWORDS.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| imagen | Picture | &#8594; | Imagen para la cual obtener las palabras claves asociadas |
| arrayPalabrasClaves | Text array | &#8592; | Array con las palabras claves extraídas |
| * | Operador | &#8594; | Si se pasa = usar valores distintos |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|13|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.GET PICTURE KEYWORDS.Summary-->El comando **GET PICTURE KEYWORDS** devuelve en el array *arrayPalabrasClaves*, la lista de palabras claves asociadas a la imagen pasada como parámetro.<!-- END REF-->  
  
Sólo se tienen en cuenta las palabras claves definidas vía los metadatos **IPTC/Keywords**. Otros tipos de metadatos son ignorados por el comando. El comando funciona únicamente con los tipos de imágenes que soportan este tipo de metadatos (JPEG, TIFF, etc.).  
  
**Nota**: los metadatos de tipo IPTC/Keywords ahora son indexables en 4D (ver el manual de *Diseño*).   
  
Si pasa el parámetro *\**, el método sólo devuelve los "valores distintos" de palabras claves, es decir una lista sin duplicados.  
  
Si la imagen no contiene palabras claves o metadatos IPTC/Keywords, el comando devuelve un array vacío, no se genera ningún error.  
  
**Nota**: los resultados devueltos por este comando pueden diferir en función del valor actual de la propiedad de la base "Considerar únicamente caracteres no alfanuméricos para las palabras claves" (ver el párrafo [DOM GET XML CHILD NODES](../commands/dom-get-xml-child-nodes)).

## Ver también 

[GET PICTURE METADATA](../commands/get-picture-metadata)  
[SET PICTURE METADATA](../commands/set-picture-metadata)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 1142 |
| Hilo seguro | yes |


