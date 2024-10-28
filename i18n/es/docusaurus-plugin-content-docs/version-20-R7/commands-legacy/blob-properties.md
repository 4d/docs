---
id: blob-properties
title: BLOB PROPERTIES
slug: /commands/blob-properties
displayed_sidebar: docs
---

<!--REF #_command_.BLOB PROPERTIES.Syntax-->**BLOB PROPERTIES** ( *BLOB* ; *comprimido* {; *descompTam* {; *tamañoActual*}} )<!-- END REF-->
<!--REF #_command_.BLOB PROPERTIES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB del cual obtener información |
| comprimido | Integer | &#8592; | 0 = BLOB no está comprimido 1 = BLOB comprimido modo compacto 2 = BLOB comprimido modo rápido |
| descompTam | Integer | &#8592; | Tamaño del BLOB (en bytes) cuando no está comprimido |
| tamañoActual | Integer | &#8592; | Tamaño actual del BLOB (en bytes) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.BLOB PROPERTIES.Summary-->El comando **BLOB PROPERTIES** devuelve información sobre el BLOB *blob*.<!-- END REF-->

 El parámetro *comprimido* devuelve un valor indicando si el BLOB está comprimido. Puede comparar este valor con las siguientes constantes, ubicadas en el tema *BLOB* :

| Constante                  | Tipo         | Valor | Comentario                                                                                                                                                              |
| -------------------------- | ------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Compact compression mode   | Entero largo | 1     | Compresión interna más compacta (en detrimento de la velocidad a la cual la compresión y descompresión se efectúan). Método por defecto.                                |
| Fast compression mode      | Entero largo | 2     | Compresión más rápida en detrimento (y será descomprimido lo más rápido posible), en detrimento de la tasa de compresión (una vez comprimido, el BLOB será más grande). |
| GZIP best compression mode | Entero largo | \-1   | Compresión GZIP más compacta (en detrimento de la velocidad a la cual la compresión y decompresión se efectúan).                                                        |
| GZIP fast compression mode | Entero largo | \-2   | Compresión/descompresión GZIP más rápida (en detrimento de la tasa de compresión).                                                                                      |
| Is not compressed          | Entero largo | 0     | Sin compresión                                                                                                                                                          |

 Cualquiera que sea el estado de compresión del BLOB, el parámetro *descompTam* devuelve el tamaño del BLOB cuando no está comprimido.  
El parámetro *tamañoActual* devuelve el tamaño actual del BLOB. Si el BLOB está comprimido, *tamañoActual* será menor que *descompTam*. Si el BLOB no está comprimido, *tamañoActual* será igual a *descompTam*.

#### Ejemplo 1 

Vea los ejemplos de los comandos [COMPRESS BLOB](compress-blob.md "COMPRESS BLOB") y [EXPAND BLOB](expand-blob.md "EXPAND BLOB").

#### Ejemplo 2 

Después de que un BLOB ha sido comprimido, el siguiente método de proyecto obtiene el porcentaje de espacio ahorrado por la compresión:

```4d
  // Método de proyecto Espacio ahorrado por compresión
  // Espacio ahorrado por la compresión (Puntero {; Puntero } ) -> Entero Largo
  // Espacio ahorrado por la compresión ( -> BLOB {; -> bytesAhorrados } ) -> Porcentaje
 
 var $1;$2 : Pointer
 var $0;$vlComprimido;$vlDescompTam;$vlTamañoActual : Integer
 
 BLOB PROPERTIES($1->;$vlComprimido;$vlDescompTam;$vlTamañoActual)
 If($vlDescompTam=0)
    $0:=0
    If(Count parameters>=2)
       $2->:=0
    End if
 Else
    $0:=100-(($vlTamañoActual/$vlDescompTam)*100)
    If(Count parameters>=2)
       $2->:=$vlDescompTam-$vlTamañoActual
    End if
 End if
```

Después de añadir este método a su aplicación, lo puede utilizar de esta manera:

```4d
  // ...
 COMPRESS BLOB(vxBlob)
 $vlPorcentaje:=Espacio ahorrado por compresión(->vxBlob;->vlTamañoBlob)
 ALERT("La compresión ahorró "+String(vlBlobSize)+" bytes, "+String($vlPorcentaje;"#0%")+
 " de espacio.")
```

#### Ver también 

[COMPRESS BLOB](compress-blob.md)  
[EXPAND BLOB](expand-blob.md)  