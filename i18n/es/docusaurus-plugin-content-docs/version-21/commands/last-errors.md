---
id: last-errors
title: Last errors
slug: /commands/last-errors
displayed_sidebar: docs
---

<!--REF #_command_.Last errors.Syntax-->**Last errors** : Collection<!-- END REF-->

<!--REF #_command_.Last errors.Params-->

| Parámetros | Tipo       |                             | Descripción                   |
| ---------- | ---------- | --------------------------- | ----------------------------- |
| Resultado  | Collection | &#8592; | Colección de objetos de error |

<!-- END REF-->

## Descripción

<!--REF #_command_.Last errors.Summary-->El comando **Last errors** devuelve la pila actual de errores de la aplicación 4D como una colección de objetos de error, o **null** si no se ha producido ningún error.<!-- END REF--> La pila de errores incluye los objetos enviados por el comando [throw](../commands-legacy/throw.md), si los hay. 

Este comando debe ser llamado desde un método de llamada de error instalado por el comando [ON ERR CALL](../commands-legacy/on-err-call.md) o dentro de un contexto [Try o Try/Catch](../Concepts/error-handling.md#tryexpression).

Cada objeto error contiene las siguientes propiedades:

| **Propiedad**      | **Tipo** | **Description**                                                                   |
| ------------------ | -------- | --------------------------------------------------------------------------------- |
| errCode            | number   | Código de error                                                                   |
| message            | text     | Descripción del error                                                             |
| componentSignature | text     | Firma del componente interno que devolvió el error (ver abajo) |

#### Firmas de los componentes internos (4D)

| Firma del componente      | Componente                                                          |
| ------------------------- | ------------------------------------------------------------------- |
| 4DCM                      | 4D Compiler runtime                                                 |
| 4DRT                      | 4D runtime                                                          |
| bkrs                      | 4D backup & restore manager                     |
| brdg                      | SQL 4D bridge                                                       |
| cecm                      | 4D code Editor                                                      |
| CZip                      | zip 4D apis                                                         |
| dbmg                      | 4D database manager                                                 |
| FCGI                      | fast cgi 4D bridge                                                  |
| FiFo                      | 4D file objects                                                     |
| HTCL                      | http client 4D apis                                                 |
| HTTP                      | 4D http server                                                      |
| IMAP                      | IMAP 4D apis                                                        |
| JFEM                      | Form Macro apis                                                     |
| LD4D                      | LDAP 4D apis                                                        |
| lscm                      | 4D language syntax manager                                          |
| MIME                      | MIME 4D apis                                                        |
| mobi                      | 4D Mobile                                                           |
| pdf1                      | 4D pdf apis                                                         |
| PHP_ | php 4D bridge                                                       |
| POP3                      | POP3 4D apis                                                        |
| SMTP                      | SMTP 4D apis                                                        |
| SQLS                      | 4D SQL server                                                       |
| srvr                      | 4D network layer apis                                               |
| svg1                      | SVG 4D apis                                                         |
| ugmg                      | 4D users and groups manager                                         |
| UP4D                      | 4D updater                                                          |
| VSS                       | 4D VSS support (Windows Volume Snapshot Service) |
| webc                      | 4D Web view                                                         |
| xmlc                      | XML 4D apis                                                         |
| wri1                      | 4D Write Pro                                                        |

#### Firmas de componentes internos (Sistema)

| Firma del componente | Componente                                                |
| -------------------- | --------------------------------------------------------- |
| CARB                 | Carbon subsystem                                          |
| COCO                 | Cocoa subsystem                                           |
| MACH                 | macOS Mach subsystem                                      |
| POSX                 | subsistema posix/bsd (mac, linux, win) |
| PW32                 | Pre-Win32 subsystem                                       |
| WI32                 | Win32 subsystem                                           |

## Ver también

[ON ERR CALL](../commands-legacy/on-err-call.md)
[throw](../commands-legacy/throw.md)  
[Error handling](../Concepts/error-handling.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1799                        |
| Hilo seguro       | &check; |


