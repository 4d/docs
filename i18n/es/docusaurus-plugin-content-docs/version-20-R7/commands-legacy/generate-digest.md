---
id: generate-digest
title: Generate digest
slug: /commands/generate-digest
displayed_sidebar: docs
---

<!--REF #_command_.Generate digest.Syntax-->**Generate digest** ( *param* ; *algoritmo* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Generate digest.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| param | Blob, Text | &#8594;  | Blob o texto para el cual obtener un extracto |
| algoritmo | Integer | &#8594;  | Algoritmo utilizado para devolver la llave: 0 = Digest MD5, 1 = Digest SHA1 |
| * | Operador | &#8594;  | Codificar digest en Base64URL |
| Resultado | Text | &#8592; | Valor de la llave digest |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Generate digest.Summary-->El comando **Generate digest** devuelve el extracto de un BLOB o de un texto después de la aplicación de un algoritmo de encripción.<!-- END REF-->

Pase un campo o una variable Texto o BLOB en el parámetro *param*. La función **Generate digest** devuelve la llave digest como una cadena.

En el parámetro *algoritmo*, pase un valor designando la función hash a utilizar. Utilice una de las siguientes constantes, ubicadas en el tema *Tipo Digest*:

| Constante           | Tipo         | Valor | Comentario                                                                                                    |
| ------------------- | ------------ | ----- | ------------------------------------------------------------------------------------------------------------- |
| \_o\_4D REST digest | Entero largo | 2     | \*\*\* Constante obsoleta \*\*\*                                                                              |
| MD5 digest          | Entero largo | 0     | Algoritmo *Message Digest 5*. Una serie de 128 bits devueltos como una cadena de 32 caracteres hexadecimales. |
| SHA1 digest         | Entero largo | 1     | Algoritmo *Secure Hash 1*. Una serie de 160 bits devueltos como una cadena de 40 caracteres hexadecimales.    |
| SHA256 digest       | Entero largo | 3     | (Familia SHA-2) SHA-256 es una serie de 256 bits devueltos como una cadena de 64 caracteres hexadecimales.    |
| SHA512 digest       | Entero largo | 4     | (Familia SHA-2) SHA-512 es una serie de 512 bits devueltos como una cadena de 128 caracteres hexadecimales.   |

**Nota:** no se recomienda utilizar algoritmos MD5 y SHA para manejar contraseñas; si necesita verificar contraseñas, se recomienda utilizar los comandos [Generate password hash](generate-password-hash.md) y [Verify password hash ](verify-password-hash.md).

Por defecto, si se omite el parámetro *\**, el digest devuelto está codificado en hexadecimal. Pase el parámetro *\** si desea que se codifique en Base64URL.

El valor devuelto por el mismo objeto es el mismo en todas las plataformas (macOS/Windows). El cálculo se efectúa a partir de la representación en UTF-8 del texto pasado en parámetro. 

**Nota:** si utiliza el comando con un texto/BLOB vacío, no devolverá void sino un valor cadena (por ejemplo "d41d8cd98f00b204e9800998ecf8427e" para MD5).

#### Ejemplo 1 

Este ejemplo compara dos documentos utilizando el algoritmo MD5: 

```4d
 var $vPict1;$vPict2 : Picture
 var $FirstBlob;$SecondBlob : Blob
 READ PICTURE FILE("c:\\myPhotos\\photo1.png")
 If(OK=1)
    READ PICTURE FILE("c:\\myPhotos\\photo2.png")
    If(OK=1)
       PICTURE TO BLOB($vPict1;$FirstBlob;".png")
       PICTURE TO BLOB($vPict2;$SecondBlob;".png")
 
       $MD5_1:=Generate digest($FirstBlob;MD5 digest)
       $MD5_2:=Generate digest($SecondBlob;MD5 digest)
 
       If($MD5_1#$MD5_2)
          ALERT("Estas dos imágenes son diferentes.")
       Else
          ALERT("Estas dos imágenes son idénticas.")
       End if
    End if
 End if
```

#### Ejemplo 2 

Estos ejemplos ilustran cómo recuperar el extracto de un texto:

```4d
 $key1:=Generate digest("The quick brown fox jumps over the lazy dog.";MD5 digest)
  // $key1 is "e4d909c290d0fb1ca068ffaddf22cbd0"
 $key2:=Generate digest("The quick brown fox jumps over the lazy dog.";SHA1 digest)
  // $key2 is "408d94384216f890ff7a0c3528e8bed1e0b01621"
```

#### Ver también 

[BASE64 DECODE](base64-decode.md)  
[BASE64 ENCODE](base64-encode.md)  
[Generate password hash](generate-password-hash.md)  
*Protocolo seguro*  
[WEB Validate digest](web-validate-digest.md)  