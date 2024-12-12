---
id: receive-packet
title: RECEIVE PACKET
slug: /commands/receive-packet
displayed_sidebar: docs
---

<!--REF #_command_.RECEIVE PACKET.Syntax-->**RECEIVE PACKET** ( {*docRef* ;} *varRecep* ; stopCar | numBytes )<!-- END REF-->
<!--REF #_command_.RECEIVE PACKET.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Número de referencia del documento o canal actual (puerto serial o documento) |
| varRecep | Text, Blob | &#8592; | Variable para recibir datos |
| stopCar &#124; numBytes | Cadena, Entero largo | &#8594;  | Carácter(es) en el(los) cual(es) detener la recepción de datos o número de bytes a recibir |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.RECEIVE PACKET.Summary-->RECEIVE PACKET lee los caracteres desde un puerto serial o desde un documento.<!-- END REF-->

Si se especifica *docRef*, el comando recupera los caracteres desde un documento abierto por la función [Open document](open-document.md), [Create document](create-document.md) o [Append document](append-document.md). Si se omite *docRef*, este comando recupera los caracteres de un puerto serial o de un documento abierto utilizando [SET CHANNEL](set-channel.md).

Sin importar la fuente, los caracteres leídos se devuelven en la variable *varRecep*, la cual debe ser una variable de tipo Texto, Alfa o BLOB. Si los caracteres han sido enviados por el comando [SEND PACKET](send-packet.md), el tipo debe corresponder al del paquete enviado. 

**Notas:**

* Cuando el paquete recibido es de tipo BLOB, el comando no tiene en cuenta ningún conjunto de caracteres definido por el comando [USE CHARACTER SET](use-character-set.md). Se devuelve el BLOB sin ninguna modificación.
* Cuando el paquete recibido es de tipo texto, el comando RECEIVE PACKET soporta Byte Order Marks (BOMs). En este caso, si el conjunto de caracteres actual es de tipo Unicode (UTF-8, UTF-16 o UTF-32), 4D intenta identificar un BOM entre los primeros bytes recibidos. Si detecta uno, lo filtra de la variable *recepVar* y 4D utiliza el conjunto de caracteres definido en lugar del conjunto de caracteres actual.

Para leer un número particular de caracteres, pase este número en el parámetro *numBytes.* Si la variable *recepVar* es de tipo Texto, en una sola llamada puede leer hasta 2 GB de texto (valor teórico).   
  
Para recibir datos hasta una cadena particular (compuesta por uno o más caracteres) pase esta cadena en *stopCar* (la cadena no se devuelve en *varRecep*).

En este caso, si no se encuentra el carácter cadena especificado por *stopCar*:

* Cuando RECEIVE PACKET lee datos en un documento, se detendrá la lectura al final del documento.
* Cuando RECEIVE PACKET lee datos de un puerto serial, el comando se ejecutará indefinidamente hasta que el timeout (si hay) haya pasado (ver [SET TIMEOUT](set-timeout.md)) o hasta que el usuario interrumpa la recepción (ver a continuación).

Durante la ejecución de RECEIVE PACKET, el usuario puede interrumpir la recepción presionando Ctrl-Alt-Mayús (Windows) o Comando-Opción-Mayús (Macintosh). Esta interrupción genera un error -9994 que puede interceptar con un método instalado utilizando [ON ERR CALL](on-err-call.md). Generalmente, sólo tendrá que administrar la interrupción de una recepción en el momento de una comunicación sobre un puerto serial.

Durante la lectura de un documento, el primer RECEIVE PACKET comienza por leer el principio del documento. La lectura de cada paquete subsiguiente comienza con el carácter después del último carácter leído.

**Nota:** este comando es útil con un documento abierto con [SET CHANNEL](set-channel.md). Por el contrario, para un documento abierto con [Open document](open-document.md), [Create document](create-document.md) o [Append document](append-document.md) puede utilizar los comandos [Get document position](get-document-position.md) y [SET DOCUMENT POSITION](set-document-position.md) para obtener y cambiar la ubicación en el documento donde ocurrirá la próxima escritura ([SEND PACKET](send-packet.md)) o lectura (RECEIVE PACKET).

Cuando intente leer después del final de un archivo RECEIVE PACKET devuelve los datos leídos hasta ese punto y la variable OK tomará el valor 1\. Luego, el siguiente RECEIVE PACKET devolverá una cadena vacía y la variable OK tomará el valor cero.

**Nota:** en modo no Unicode (compatibilidad) cuando utiliza el comando RECEIVE PACKET para leer caracteres de un documento Windows y no quiere utilizar mapas ASCII para convertir los caracteres Windows en caracteres Mac OS, puede utilizar la función *Win to Mac*.

#### Ejemplo 1 

El siguiente ejemplo lee 20 caracteres de un puerto serial en la variable *recupVeinte*:

```4d
 RECEIVE PACKET(recupVeinte;20)
```

#### Ejemplo 2 

El siguiente ejemplo lee datos del documento referenciado por la variable *miDoc* en la variable *vData*. El comando lee hasta que encuentra un retorno de carro:

```4d
 RECEIVE PACKET(miDoc;vData;Char(Carriage return))
```

#### Ejemplo 3 

El siguiente ejemplo lee datos desde el documento referenciado por la variable *miDoc* en la variable *vData*. El comando lee hasta que encuentra una etiqueta HTML de fin de tabla *</TD>*:

```4d
 RECEIVE PACKET(miDoc;vData;"")
```

#### Ejemplo 4 

El siguiente ejemplo lee datos de un documento y los pone en campos. Los datos se almacenan como campos de longitud fija. El método llama a una subrutina para eliminar espacios (espacios al final de la cadena). La subrutina sigue el método: 

```4d
 $vhDocRef :=Open document("";"TEXT") // Apertura de un documento de tipo TEXTO
 If(OK=1) // Si el documento está abierto
    Repeat // Bucle hasta que no haya más datos
       RECEIVE PACKET($vhDocRef;$Var1;15) // Lectura de 15 caracteres
       RECEIVE PACKET($vhDocRef;$Var2;15) // Hace lo mismo para el segundo campo
       If(($Var1#"")|($Var2#"")) // Si por lo menos uno de los campos no está vacío
          CREATE RECORD([Personas]) // Crear un nuevo registro
          [Personas]Nombre:=Strip($Var1) // Guardar el nombre
          [Personas]Apellido:=Strip($Var2) // Guardar el apellido
          SAVE RECORD([Personas]) // Guardar el registro
       End if
    Until(OK=0)
    CLOSE DOCUMENT($vhDocRef) // Cierre del documento
 End if
```

Los espacios al final de los datos son eliminados por el siguiente método, llamado Elimina:

```4d
 For($i;Length($1);1;-1) // Bucle desde el final de la cadena al inicio
    If($1[[$i]]#" ") // Si no es un espacio…
       $i :=-$i  // Forzar el bucle a detenerse
    End if
 End for
 $0:=Delete string($1;-$i;Length($1)) // Borrar los espacios
```

#### Variables y conjuntos del sistema 

Después de un llamado a RECEIVE PACKET, la variable sistema OK toma el valor 1 si el paquete se recibe sin errores. De lo contrario, la variable sistema OK toma el valor 0.

#### Ver también 

[Get document position](get-document-position.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[SEND PACKET](send-packet.md)  
[SET DOCUMENT POSITION](set-document-position.md)  
[SET TIMEOUT](set-timeout.md)  
[USE CHARACTER SET](use-character-set.md)  