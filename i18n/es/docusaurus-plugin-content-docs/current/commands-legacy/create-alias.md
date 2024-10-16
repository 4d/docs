---
id: create-alias
title: CREATE ALIAS
slug: /commands/create-alias
displayed_sidebar: docs
---

<!--REF #_command_.CREATE ALIAS.Syntax-->**CREATE ALIAS** ( *rutaObjetivo* ; *rutaAlias* )<!-- END REF-->
<!--REF #_command_.CREATE ALIAS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| rutaObjetivo | Text | &#8594;  | Nombre o ruta de acceso al objetivo del alias/atajo |
| rutaAlias | Text | &#8594;  | Nombre o ruta de acceso completa del alias/del atajo a crear |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CREATE ALIAS.Summary-->El comando CREATE ALIAS crea un alias (llamado “atajo” en Windows) del archivo o carpeta objetivo pasado en *rutaObjetivo*.<!-- END REF--> El nombre y la ubicación son definidos por el parámetro *rutaAlias*. 

Puede crear un alias de todo tipo de documento o de carpeta. El icono del alias será idéntico al del elemento objetivo. El icono contiene una pequeña flecha en la parte inferior izquierda. Bajo Mac OS, el nombre del icono se muestra en caracteres en itálica.

Este comando no asigna un nombre por defecto, el nombre tiene que pasarse en el parámetro *rutaAlias*. Si sólo pasa un nombre en este parámetro, el alias se crea en la carpeta activa actual (generalmente la carpeta que contiene el archivo de estructura).

**Nota:** bajo Windows, los atajos son archivos con extensión “.LNK” (invisible). Si esta extensión no se pasa, es añadida automáticamente por el comando.

Si se pasa una cadena vacía en *rutaObjetivo*, el comando no hace nada.

#### Ejemplo 

Su base genera archivos de texto llamados “InformeNúmero” almacenados en la carpeta de la base. El usuario quiere crear atajos a estos informes y almacenarlos en una ubicación conveniente:

```4d
  //Método CREAR_INFORME
 var $vtInf : Text
 C_STRING(250;$vtruta)
 C_STRING(80;$vanombre)
 var vDoc : Time
 C_INTEGER($NumInforme)
 
 $vtInf:=... //Crear informe
 $NumInforme:=... //Calculo del número del informe
 $vanombre:="Informe"+String($NumInforme)+".txt" //Nombre del archivo
 vDoc:=Create document($vanombre)
 If(OK=1)
    SEND PACKET(vDoc;$vtInf)
    CLOSE DOCUMENT(vDoc)
  //Añadir el alias
    CONFIRM("¿Crear un alias para este informe?")
    If(OK=1)
       $vtRuta:=Select folder("¿Dónde quiere crear el alias?")
       If(OK=1)
          CREATE ALIAS($vaNombre;$vtRuta+$vanombre)
          If(OK=1)
             SHOW ON DISK($vtRuta+$vanombre)
  //Mostrar la ubicación del alias
          End if
       End if
    End if
 End if
```

#### Variables y conjuntos del sistema 

La variable sistema OK toma el valor 1 si el comando se ejecuta correctamente, si no toma el valor 0.

#### Ver también 

[RESOLVE ALIAS](resolve-alias.md)  