---
id: volume-attributes
title: VOLUME ATTRIBUTES
slug: /commands/volume-attributes
displayed_sidebar: docs
---

<!--REF #_command_.VOLUME ATTRIBUTES.Syntax-->**VOLUME ATTRIBUTES** ( *volumen* ; *tamaño* ; *utilizado* ; *libre* )<!-- END REF-->
<!--REF #_command_.VOLUME ATTRIBUTES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| volumen | Text | &#8594;  | Nombre del volumen |
| tamaño | Real | &#8592; | Tamaño del volumen expresado en bytes |
| utilizado | Real | &#8592; | Espacio utilizado expresado en bytes |
| libre | Real | &#8592; | Espacio libre expresado en bytes |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.VOLUME ATTRIBUTES.Summary-->El comando VOLUME ATTRIBUTES devuelve en bytes el tamaño, el espacio utilizado y el espacio libre del volumen cuyo nombre se pasa en *volumen*.<!-- END REF-->si *volumen* indica un volumen remoto no montado, la variable OK toma el valor 0 y los tres parámetros devuelven -1\. 

#### Ejemplo 

Su aplicación incluye algunas operaciones por lotes que se ejecutan en la noche o los fines de semana para almacenar archivos temporales grandes en disco. Para que este proceso sea tan automático y flexible como sea posible, usted escribe una rutina que buscará automáticamente el primer volumen cuyo espacio libre sea suficiente para sus archivos temporales. He aquí el método:

```4d
  // Método de proyecto Buscar volumen para espacio
  // Buscar volumen para espacio ( Real ) -> Alfa
  // Buscar volumen para espacio ( Espacio necesario en bytes ) -> Nombre del volumen o cadena vacía
 
 C_STRING(31;$0)
 C_STRING(255;$vsDocNombre)
 var $vlNbVolumenes;$vlVolumenes : Integer
 var $1;$vlTamaño;$vlUtilizado;$vlLibre : Real
 var $vhDocRef : Time
 
  // Inicializar el resultado de la función
 $0:=""
  // Proteger todas las operaciones de entrada/salida con un método de interrupción de errores
 ON ERR CALL("ERROR METHOD")
  // Obtener la lista de los volúmenes
 ARRAY STRING(31;$asVolumenes;0)
 gError:=0
 VOLUME LIST($asVolumenes)
 If(gError=0)
  // Si se corre en Windows, ignorar los dos lectores de diskettes
    If(On Windows)
       $vlVolumen:=Find in array($asVolumenes;"A:\\")
       If($vlVolumen>0)
          DELETE FROM ARRAY($asVolumenes;$vlVolumen)
       End if
       $vlVolumen:=Find in array($asVolumenes;"B:\\")
       If($vlVolumen>0)
          DELETE FORM ARRAY($asVolumenes;$vlVolumen)
       End if
    End if
    $vlNbVolumenes:=Size of array($asVolumenes)
  // Para cada volumen
    For($vlVolumen;1;$vlNbVolumenes)
  // Obtener el tamaño, el espacio utilizado y el espacio libre
       gError:=0
       VOLUME ATTRIBUTES($asVolumenes{$vlVolumen};$vlTamaño;$vlUtilizado;$vlLibre)
       If(gError=0)
  // ¿El espacio libre es suficiente (más de 32K extra) ?
          If($vlLibre>=($1+32768))
  // Si es así, verificar si el volumen no está bloqueado..
             $vsDocNombre:=$asVolumenes{$vlVolumen}+Char(Directory symbol)+"XYZ"+String(Random)+".TXT"
             $vhDocRef:=Create document($vsDocNombre)
             If(OK=1)
                CLOSE DOCUMENT($vhDocRef)
                DELETE DOCUMENT($vsDocNombre)
  // Si todo está bien, devolver el nombre del volumen
                $0:=$asVolumenes{$vlVolumen}
                $vlVolumen:=$vlNbVolumenes+1
             End if
          End if
       End if
    End for
 End if
 ON ERR CALL("")
```

Una vez se añade este método de proyecto a su aplicación, puede escribir:

```4d
 $vsVolumen:=Buscar volumen para espacio(100*1024*1024)
 If($vsVolumen#"")
  // Continuar
 Else
    ALERT("¡Es necesario un volumen con por lo menos 100 MB de espacio libre!")
 End if
```

#### Ver también 

[VOLUME LIST](volume-list.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 472 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |


