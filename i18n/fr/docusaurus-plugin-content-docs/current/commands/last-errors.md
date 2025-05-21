---
id: last-errors
title: Last errors
slug: /commands/last-errors
displayed_sidebar: docs
---

<!--REF #_command_.Last errors.Syntax-->**Last errors** : Collection<!-- END REF-->

<!--REF #_command_.Last errors.Params-->

| Paramètres | Type       |                             | Description                |
| ---------- | ---------- | --------------------------- | -------------------------- |
| Résultat   | Collection | &#8592; | Collection d'objets erreur |

<!-- END REF-->

## Description

<!--REF #_command_.Last errors.Summary-->La commande **Last errors** renvoie la pile d'erreurs courante de l'application 4D sous la forme d'une collection d'objets erreur, ou **null** si aucune erreur ne s'est produite.<!-- END REF--> La pile d'erreurs inclut les objets envoyés par la commande [throw](throw.md), le cas échéant. 

Cette commande doit être appelée à partir d'une méthode d'appel sur erreur installée par la commande [ON ERR CALL](on-err-call.md) ou dans un contexte [Try ou Try/Catch](../Concepts/error-handling.md#tryexpression).

Chaque objet erreur contient les propriétés suivantes :

| **Propriété**      | **Type** | **Description**                                                                            |
| ------------------ | -------- | ------------------------------------------------------------------------------------------ |
| errCode            | number   | Code d'erreur                                                                              |
| message            | text     | Description de l'erreur                                                                    |
| componentSignature | text     | Signature du composant interne qui a renvoyé l'erreur (voir ci-dessous) |

#### Signatures des composants internes (4D)

| Signature du composant    | Composant                                                           |
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

#### Signatures des composants internes (système)

| Signature du composant | Composant                                                |
| ---------------------- | -------------------------------------------------------- |
| CARB                   | Carbon subsystem                                         |
| COCO                   | Cocoa subsystem                                          |
| MACH                   | macOS Mach subsystem                                     |
| POSX                   | posix/bsd subsystem (mac, linux, win) |
| PW32                   | Pre-Win32 subsystem                                      |
| WI32                   | Win32 subsystem                                          |

## Voir également

[ON ERR CALL](on-err-call.md)\
[throw](throw.md)\
[Error handling](../Concepts/error-handling.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 1799                        |
| Thread safe        | &check; |


