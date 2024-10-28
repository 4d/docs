---
id: open-url
title: OPEN URL
slug: /commands/open-url
displayed_sidebar: docs
---

<!--REF #_command_.OPEN URL.Syntax-->**OPEN URL** ( *ruta* {; *nomAp*}{; *} )<!-- END REF-->
<!--REF #_command_.OPEN URL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ruta | Text | &#8594;  | Ruta del documento o URL a abrir |
| nomAp | Text | &#8594;  | Nombre de la aplicación a utilizar |
| * | Operador | &#8594;  | Si se especifica = la URL no está traducida, Si se omite = la URL está traducida |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OPEN URL.Summary-->El comando OPEN URL abre el archivo o URL pasado en el parámetro *ruta* con la aplicación indicada en *nomAp* (si hay).<!-- END REF-->   

El parámetro *ruta* puede contener bien un URL estándar o una ruta de acceso de archivo. El comando acepta dos puntos (':') bajo Mac OS, barras oblicuas ('\\') bajo Windows o un URL Posix que comience por archivo://. Si el parámetro *nomAp* se omite, 4D primero intenta interpretar el parámetro *ruta* como un nombre de ruta de archivo. Si este es el caso, 4D solicitará al sistema abrir el archivo utilizando la aplicación más apropiada (por ejemplo, un navegador para los archivos .html, Word para los archivos .doc, etc.). El parámetro *\** se ignora en este caso.

Si el parámetro *ruta* contiene un URL estándar (protocolos mailto:, news:, http:, etc.), 4D lanza el navegador web por defecto y accede al URL. Si no hay navegador en los volúmenes conectados al ordenador, el comando no tiene efecto.

Cuando se pasa el parámetro *nomAp* , el comando interroga al sistema. Si se instala una aplicación con este nombre, que se inicia y el comando le pide que abra la dirección URL o el documento especificado.   
En Windows, el mecanismo para el reconocimiento del nombre de la aplicación es la misma que el utilizado por el comando "Ejecutar" del menú Inicio. Por ejemplo, podría pasar:

 "iexplore" para iniciar Internet Explorer.  
 "chrome" para iniciar Chrome (si está instalado)  
 "winword" para iniciar MS Word (si está instalado)

**Nota**: encontrará la lista de aplicaciones instaladas en el *registry* en la siguiente llave: HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths  

Bajo OS X, el mecanismo utiliza el Finder que indexa automáticamente todas las aplicaciones instaladas. Puede reconocer toda aplicación .app por su nombre de package (con o sin el sufijo .app). Por ejemplo, puede pasar:  
  
 "safari"  
 "FireFox"  
 "TextEdit"  
  
Si la aplicación *nomAp* no se encuentra, ningún error se devuelve; el comando se ejecuta como si el parámetro no hubiera sido especificado.  
  
4D codifica automáticamente los caracteres especiales de la URL. Si pasa el carácter *\**, 4D no traducirá los caracteres especiales del URL. Esta opción le permite acceder y enviar las URLS de tipo "*http://www.server.net/page.htm?q=something*".  
  
**Nota:** este comando no funciona cuando se llama desde un proceso web.

#### Ejemplo 1 

Los siguientes ejemplos muestran los diferentes tipos de cadenas que son aceptadas como URLs por el comando:  

```4d
 OPEN URL("http://www.4d.com")
 OPEN URL("file://C:/Users/Laurent/Documents/pending.htm")
 OPEN URL("C:\\Users\\Laurent\\Documents\\pending.htm")
 OPEN URL("mailto:jean_martin@4d.fr")
```

#### Ejemplo 2 

Este ejemplo puede utilizarse para lanzar la aplicación más conveniente:  

```4d
 $file:=Select document("";"";0)
 If(OK=1)
    OPEN URL(Document)
 End if
```

#### Ejemplo 3 

Puede abrir un mismo archivo texto con diferentes aplicaciones utilizando el parámetro *nomAp*:

```4d
 OPEN URL("C:\\temp\\cookies.txt") //abre el archivo con el Bloc de notas
 OPEN URL("C:\\temp\\cookies.txt";"winword") //abre el archivo con MS Word (si está instalado)
 OPEN URL("C:\\temp\\cookies.txt";"excel") //abre el archivo con MS Excel (si está instalado)
```

  

#### Ver también 

[LAUNCH EXTERNAL PROCESS](launch-external-process.md)  