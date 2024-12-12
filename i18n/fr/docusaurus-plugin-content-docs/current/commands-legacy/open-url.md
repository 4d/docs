---
id: open-url
title: OPEN URL
slug: /commands/open-url
displayed_sidebar: docs
---

<!--REF #_command_.OPEN URL.Syntax-->**OPEN URL** ( *chemin* {; *nomApp*}{; *} )<!-- END REF-->
<!--REF #_command_.OPEN URL.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| chemin | Text | &#8594;  | Chemin du document ou URL à ouvrir |
| nomApp | Text | &#8594;  | Nom de l'application à utiliser |
| * | Opérateur | &#8594;  | Si spécifié = l’URL n’est pas traduit, Si omis = l’URL est traduit |

<!-- END REF-->

#### Description 

<!--REF #_command_.OPEN URL.Summary-->La commande **OPEN URL** ouvre le fichier ou l'URL passé dans le paramètre *chemin* avec l'application éventuellement désignée par *nomApp*.<!-- END REF-->

Le paramètre *chemin* peut contenir aussi bien un URL standard qu’un chemin d'accès de fichier. La commande accepte des ':' sous OS X, des '\\' sous Windows ou un URL posix commençant par file://.

Si le paramètre *nomApp* est omis, 4D tente d'abord d'interpréter le paramètre *chemin* comme un chemin d'accès de fichier. Si c'est le cas, 4D demande au système d'ouvrir le fichier avec l'application la plus adaptée (par exemple un navigateur pour les .html, Word pour les .doc, etc.). Le paramètre *\**, s'il est passé, est ignoré dans ce cas.  
Si le paramètre *chemin* contient un URL standard (protocoles mailto:, news:, http:, etc), 4D lance le navigateur Web par défaut et accède à l’URL. S’il n’y a pas de navigateur sur les volumes connectés à l’ordinateur, la commande ne fait rien.

Si le paramètre *nomApp* est passé, la commande interroge le système. Si une application de ce nom est installée, elle est lancée et la commande lui demande d'ouvrir l'URL ou le document spécifié.  
Sous Windows, le mécanisme de reconnaissance du nom de l'application est le même que celui utilisé par la commande "Exécuter" du menu Démarrer. Vous pouvez passer par exemple :

* "iexplore" pour lancer Internet Explorer.
* "chrome" pour lancer Chrome (si installé)
* "winword" pour lancer MS Word (si installé)

**Note :** Vous pouvez trouver la liste des applications installées dans la *registry* à la clé suivante : HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths

Sous OS X, le mécanisme utilise la base du Finder qui indexe automatiquement toutes les applications installées. Il reconnaît toute application .app via son nom de package (avec ou sans le suffixe .app). Vous pouvez passer par exemple :

* "safari"
* "FireFox"
* "TextEdit"

Si l'application *nomApp* n'est pas trouvée, aucune erreur n'est retournée ; la commande s'exécute comme si le paramètre n'avait pas été spécifié. 

4D encode automatiquement les caractères spéciaux de l'URL passé en paramètre. Si vous passez le caractère *\**, 4D ne traduira pas les caractères spéciaux de l’URL. Cette option permet d’accéder à ou de renvoyer des URL du type "*http://www.server.net/page.htm?q=quelquechose*".

**Note :** Cette commande ne fonctionne pas dans le cadre d’un process Web.

#### Exemple 1 

Les exemples suivants illustrent les différents types de chaînes acceptées comme URLs par la commande :

```4d
 OPEN URL("http://www.4d.com")
 OPEN URL("file://C:/Users/Laurent/Documents/pending.htm")
 OPEN URL("C:\\Users\\Laurent\\Documents\\pending.htm")
 OPEN URL("mailto:jean_martin@4d.fr")
```

#### Exemple 2 

Cet exemple permet de lancer l'application la plus adaptée :

```4d
 $fichier:=Select document("";"";0)
 If(OK=1)
    OPEN URL(Document)
 End if
```

#### Exemple 3 

Vous pouvez ouvrir un même fichier texte avec différentes applications en utilisant le paramètre *nomApp* :

```4d
 OPEN URL("C:\\temp\\cookies.txt") //ouvre le fichier avec Notepad
 OPEN URL("C:\\temp\\cookies.txt";"winword") //ouvre le fichier avec MS Word (si installé)
 OPEN URL("C:\\temp\\cookies.txt";"excel") //ouvre le fichier avec MS Excel (si installé)
```

#### Voir aussi 

[LAUNCH EXTERNAL PROCESS](launch-external-process.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 673 |
| Thread safe | &check; |


