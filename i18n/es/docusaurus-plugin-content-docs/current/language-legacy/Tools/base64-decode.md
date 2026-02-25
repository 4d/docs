---
id: base64-decode
title: BASE64 DECODE
slug: /commands/base64-decode
displayed_sidebar: docs
---

<!--REF #_command_.BASE64 DECODE.Syntax-->**BASE64 DECODE** ( *aDecodificar* : Text, Blob {; *decodificado* : Text, Blob}{; *} )<!-- END REF-->
<!--REF #_command_.BASE64 DECODE.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| aDecodificar | Text, Blob | &#8596; | *in:* Encoded value to decode<br/>*out:* Decoded value (if decoded parameter omitted) |
| decodificado | Text, Blob | &#8592; | Valor decodificado |
| * | Operador | &#8594; | Decodificar en formato Base64URL |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historial</summary>

|Versión|Cambios|
|---|---|
|18 R4|Modificado|
|12|Modificado|
|12|Renombrar|
|2004|Creado por|

</details>
</div>

## Descripción 

<!--REF #_command_.BASE64 DECODE.Summary-->El comando **BASE64 DECODE** decodifica el texto o valor de blob codificado en formato Base64 o Base64URL pasado en el parámetro *aDecodificar*.<!-- END REF--> Para más información sobre los formatos Base64 y Base64URL, consulte la descripción del comando [BASE64 ENCODE](../commands/base64-encode). 

Pase en *aDecodificar* el valor codificado de tipo texto o BLOB, en Base64 or Base64URL, a decodificar.

Si pasa el parámetro *decodificado*, el comando descodifica el contenido de *aDecodificar* en el parámetro *decodificado*\-- el parámetro *aDecodificar* se deja intacto. Si omite el parámetro *decodificado*, el comando modifica directamente el contenido del parámetro *aDecodificar*.

**Nota:** si se pasa una variable de texto para recibir lo que decodifica el comando, recibe los bytes decodificados interpretados como utf-8.

Por defecto, si se omite el parámetro *\**, el comando utiliza una decodificación Base64\. Si pasa el parámetro *\**, el comando utiliza una decodificación Base64URL.

Si *aDecodificar* contiene un contenido base64 no válido, se devuelve un valor de tipo texto vacío o blob.

## Ejemplo 

Este ejemplo le permite transferir una imagen vía un BLOB:

```4d
 var $sourceBlob : Blob
 var $mypicture : Picture
 $mypicture:=[people]photo
 PICTURE TO BLOB($mypicture;$sourceBlob;".JPG")
 var $base64Text : Text
 BASE64 ENCODE($sourceBlob;$base64Text) //Encoding of text
  // the binary is now available as character strings in $base64Text
 
 var $base64Text : Text
 var $targetBlob : Blob
 BASE64 DECODE($base64Text;$targetBlob) //Decoding of text
  // the binary encoded in base 64 is now available as a BLOB in $blobTarget
```

## Ver también 

[BASE64 ENCODE](../commands/base64-encode)  
[Generate digest](../commands/generate-digest)  
*Presentación de los comandos XML DOM*  
[XML DECODE](../commands/xml-decode)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 896 |
| Hilo seguro | yes |


