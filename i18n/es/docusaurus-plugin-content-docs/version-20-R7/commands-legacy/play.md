---
id: play
title: PLAY
slug: /commands/play
displayed_sidebar: docs
---

<!--REF #_command_.PLAY.Syntax-->**PLAY** ( *nomObjeto* {; *canal*} )<!-- END REF-->
<!--REF #_command_.PLAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomObjeto | Text | &#8594;  | Nombre de archivo de sonido o sonido sistemaCadena vacía para detener un sonido asincrónico |
| canal | Integer | &#8594;  | Si se pasa, canal de salida y ejecución asincrónico Si se omite, ejecución sincrónica |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.PLAY.Summary-->El comando **PLAY** permite reproducir archivos de sonido o multimedia.<!-- END REF--> Pase la ruta de acceso completa del archivo que quiere reproducir en *nombreObjeto*. En OS X, el comando también puede utilizarse para reproducir un sonido sistema.   

* Para reproducir un archivo, pase su nombre y ruta de acceso en *nomObjeto*. Puede pasar una ruta de acceso completa o relativa al archivo de estructura de la base.  
Se soportan los principales formatos de archivos sonido y multimedia: .WAV, .MP3, .AVI, .AIFF (OS X), etc. Bajo OS X, el comando soporta particularmente formatos Core Audio.
* (OS X únicamente) para reproducir un sonido sistema, pase directamente su nombre en el parámetro *nomObjeto* **.**

**Nota**: los recursos 'snd', utilizados en Mac OS 9 y superiores, ya no se soportan.

El parámetro *asincrono* permite reproducir de forma asíncrona en Windows. Síncrono significa que todo el procesamiento se detiene hasta que el sonido haya terminado de reproducirse, asíncrono significa que la reproducción no se detiene y el sonido se reproduce de fondo. Si se pasa *asincrono* y contiene 0 (o cualquier valor entero largo), el sonido se reproduce de forma asíncrona. Si se omite, el sonido se reproduce de forma sincrónica.  
  
Para detener un sonido asincrónico, utilice la siguiente instrucción:

```4d
 PLAY("";0)
```

#### Ejemplo 1 

El siguiente ejemplo muestra cómo reproducir un archivo WAV en Windows:

```4d
 $DocRef :=Open document("";"WAV";Read Mode)
 If(OK=1)
    CLOSE DOCUMENT($DocRef)
    PLAY(Document;0) //reproducir asíncronamente
 End if
```

#### Ejemplo 2 

El siguiente código de ejemplo reproduce un sonido del sistema en OS X:

```4d
 PLAY("Submarine.aiff")
```

#### Ver también 

[BEEP](beep.md)  