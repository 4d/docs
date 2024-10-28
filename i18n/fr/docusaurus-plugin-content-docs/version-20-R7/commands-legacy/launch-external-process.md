---
id: launch-external-process
title: LAUNCH EXTERNAL PROCESS
slug: /commands/launch-external-process
displayed_sidebar: docs
---

<!--REF #_command_.LAUNCH EXTERNAL PROCESS.Syntax-->**LAUNCH EXTERNAL PROCESS** ( *nomFichier* {; *fluxEntrée* {; *fluxSortie* {; *fluxErreur*}}}{; *pid*} )<!-- END REF-->
<!--REF #_command_.LAUNCH EXTERNAL PROCESS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomFichier | Text | &#8594;  | Chemin d’accès et arguments du fichier à lancer |
| fluxEntrée | Text, Blob | &#8594;  | Flux d’entrée (stdin) |
| fluxSortie | Text, Blob | &#8592; | Flux de sortie (stdout) |
| fluxErreur | Text, Blob | &#8592; | Flux d’erreur (stderr) |
| pid | Integer | &#8592; | Identifiant unique du process externe |

<!-- END REF-->

:::info Compatibilité

<!--REF #_command_.LAUNCH EXTERNAL PROCESS.Summary-->À partir de 4D v19 R4, nous recommandons l'utilisation de la classe [`4D.SystemWorker class`](../API/SystemWorkerClass.md) pour exécuter et contrôler les process externes.<!-- END REF--> Néanmoins, cette commande est toujours prise en charge. 

:::


#### Description 

La commande **LAUNCH EXTERNAL PROCESS** permet de lancer un process externe depuis 4D, sous macOS et Windows.   
Sous macOS, cette commande donne accès à toutes les applications exécutables pouvant être lancées depuis le Terminal.

Passez dans le paramètre *nomFichier* le chemin d’accès absolu de l’application à exécuter ainsi que les arguments nécessaires, le cas échéant.  
Sous macOS, vous pouvez également passer uniquement le nom de l’application à exécuter, 4D utilisera alors la variable d’environnement PATH pour localiser l’exécutable.

**Attention :** Cette commande permet uniquement de lancer des applications exécutables, elle ne peut pas exécuter d'instructions dépendantes du shell (l'interpréteur de commandes). Par exemple, sous macOS il n'est pas possible d'utiliser cette commande pour exécuter l'instruction *echo* ou des indirections.

Le paramètre *fluxEntrée* (facultatif) contient le *stdin* du process externe. Après l’exécution de la commande, les paramètres *fluxSortie* et *fluxErreur* (s’ils sont passés) retournent respectivement le *stdout* et le *stderr* du process externe. Vous pouvez utiliser des paramètres de type BLOBs au lieu de chaînes de caractères si vous traitez des données binaires (telles que des images).

XXX

4D fournit trois variables d'environnement spécifiques qui peuvent être définies à l'aide de [SET ENVIRONMENT VARIABLE](set-environment-variable.md) et utilisées dans le contexte de **LAUNCH EXTERNAL PROCESS**:

* *\_4D\_OPTION\_CURRENT\_DIRECTORY* : permet de définir le répertoire courant du process externe à lancer. Vous devez passer dans *valeurVar* le chemin d’accès du répertoire (syntaxe type HFS sous Mac OS et DOS sous Windows)
* *\_4D\_OPTION\_HIDE\_CONSOLE* (Windows uniquement) : permet de masquer la fenêtre de la console DOS. Vous devez passer "true" dans *valeurVar* pour masquer la console ou "false" pour l’afficher.
* *\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS* : permet d'exécuter le process externe en mode asynchrone, c'est-à-dire non bloquant pour les autres applications. Vous devez passer "false" dans *valeurVar* pour définir une exécution asynchrone ou "true" pour une exécution synchrone (par défaut). Passer "" dans *valeurVar* ne fera rien.  
Si vous définissez la variable d'environnement *\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS* sur "faux" via la commande [SET ENVIRONMENT VARIABLE](set-environment-variable.md) (exécution asynchrone), les paramètres *fluxSortie* et *fluxErreur* ne sont pas retournés.

Ces variables sont valides dans le process courant pour le prochain appel à **LANCER PROCESS EXTERNE**.

Lorsqu'il est passé, le paramètre *pid* (entier long) retourne l'identifiant unique du process (PID) affecté au niveau de l'OS, quel que soit le statut de l'option *\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS*. Avec cette information, il est plus facile d'interagir avec les process externes créés par la commande, par exemple pour les stopper. Si le lancement du process externe échoue, le paramètre *pid* n'est pas retourné.

#### Exemples sous macOS 

Tous les exemples suivants utilisent le Terminal de macOS, accessible dans le dossier Applications/Utilitaires.

(1) Pour modifier les accès à un fichier (*chmod* est la commande macOS permettant de modifier les accès des fichiers) :

```4d
 LAUNCH EXTERNAL PROCESS("chmod +x /dossier/monfichier.txt")
```

(2) Pour éditer un fichier texte (*cat* est la commande macOS permettant d’éditer les fichiers). Dans cet exemple, le chemin d’accès absolu de la commande est passé :

```4d
 var vtentrée;vtsortie : Text
 vtentrée:=""
 LAUNCH EXTERNAL PROCESS("/bin/cat /dossier/monfichier.txt";vtentrée;vtsortie)
```

(3) Pour récupérer la liste du contenu du dossier “Users” (*ls -l* est semblable à la commande *dir* du DOS) :

```4d
 var $In;$Out : Text
 LAUNCH EXTERNAL PROCESS("/bin/ls -l /Users";$In;$Out)
```

(4) Pour lancer une application "graphique" indépendante, il est préférable d'utiliser la commande système *open* (dans ce cas l'instruction **LAUNCH EXTERNAL PROCESS** a le même effet qu'un double-clic sur l'application) : 

```4d
 LAUNCH EXTERNAL PROCESS("open /Applications/Calculator.app")
```

#### Exemples sous Windows 

(5) Pour lancer l’application NotePad :

```4d
 LAUNCH EXTERNAL PROCESS("C:\\WINDOWS\\notepad.exe")
```

(6) Pour lancer l’application NotePad et ouvrir un document spécifique : 

```4d
 LAUNCH EXTERNAL PROCESS("C:\\WINDOWS\\notepad.exe C:\\Docs\\nouveau dossier\\res.txt")
```

(7) Pour lancer l’application Microsoft® Word® et ouvrir un document spécifique (à noter l’emploi de deux "") :

```4d
 $mondoc:="C:\\Program Files\\Microsoft Office\\Office10\\WINWORD.EXE \"C:\\Documents and
 Settings\\JeanMarc\\Bureau\\MesDocs\\Nouveau dossier\\essai.xml\""
 LAUNCH EXTERNAL PROCESS($mondoc;$tIn;$tOut)
```

(8) Pour exécuter un script Perl (requiert l’installation préalable d’ActivePerl) :

```4d
 var $entrée;$sortie : Text
 SET ENVIRONMENT VARIABLE("mavariable";"valeur")
 LAUNCH EXTERNAL PROCESS("D:\\Perl\\bin\\perl.exe D:\\Perl\\eg\\cgi\\env.pl";$entrée;$sortie)
```

(9) Pour lancer une commande avec un répertoire courant défini et sans afficher la console : 

```4d
 SET ENVIRONMENT VARIABLE("_4D_OPTION_CURRENT_DIRECTORY";"C:\\4D_VCS")
 SET ENVIRONMENT VARIABLE("_4D_OPTION_HIDE_CONSOLE";"true")
 LAUNCH EXTERNAL PROCESS("C:\\MesApplis\\macommande.exe")
```

(10) Pour permettre à l'utilisateur d'ouvrir un document externe sous Windows :

```4d
 $nomdoc:=Select document("";"*.*";"Choisissez le fichier à ouvrir";0)
 If(OK=1)
    SET ENVIRONMENT VARIABLE("_4D_OPTION_HIDE_CONSOLE";"true")
    LAUNCH EXTERNAL PROCESS("cmd.exe /C start \"\" \""+$nomdoc+"\"")
 End if
```

  
(11) Les exemples suivants récupèrent la liste des process sous Windows :

```4d
 var $pid : Integer
 var $stdin;$stdout;$stderr : Text
 
 LAUNCH EXTERNAL PROCESS("tasklist";$pid) //obtenir uniquement le PID
 LAUNCH EXTERNAL PROCESS("tasklist";$stdin;$stdout;$stderr;$pid) //obtenir toutes les informations
```

  
#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1\. Sinon (fichier non trouvé, mémoire insuffisante, etc.), elle prend la valeur 0.

#### Voir aussi 

[OPEN URL](open-url.md)  
[SET ENVIRONMENT VARIABLE](set-environment-variable.md)  