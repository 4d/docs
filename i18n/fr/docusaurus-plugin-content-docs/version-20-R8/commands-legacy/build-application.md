---
id: build-application
title: BUILD APPLICATION
slug: /commands/build-application
displayed_sidebar: docs
---

<!--REF #_command_.BUILD APPLICATION.Syntax-->**BUILD APPLICATION** {( *nomProjet* )}<!-- END REF-->
<!--REF #_command_.BUILD APPLICATION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nomProjet | Text | &#8594;  | Chemin d’accès complet du projet à utiliser |

<!-- END REF-->

#### Description 

<!--REF #_command_.BUILD APPLICATION.Summary-->La commande **BUILD APPLICATION** lance le processus de génération d’application en prenant en compte les paramètres définis dans le fichier de configuration d’application courant ou le fichier de configuration défini dans le paramètre *buildAppSettings*.<!-- END REF-->

**Note :** Cette commande fonctionne uniquement avec 4D Developer (monoposte). Elle ne peut pas être appelée depuis 4D Server, 4D en mode distant ou depuis une application fusionnée.

Un fichier de configuration d'application est un fichier XML contenant tous les paramétrages utilisés pour générer une application. La plupart de ces paramétrages sont visibles dans la boîte de dialogue du Générateur d’application (pour plus d'informations sur le Générateur d'application, reportez-vous à la section *Générateur d'applications* dans le manuel Mode Développement de 4D).   
Par défaut, 4D crée pour chaque base de données un fichier de configuration d’application par défaut “buildApp.4DSettings”, placé dans le dossier Settings de la base.

Si la base n’a pas été compilée ou si le code compilé n’est pas à jour, la commande lance au préalable le processus de compilation. Dans ce cas, la fenêtre du compilateur n’apparaît pas (sauf en cas d’erreur), seule une barre de progression est affichée.   
Vous pouvez éviter l'affichage de cette barre de progression à l'aide de la commande [MESSAGES OFF](messages-off.md).

Si vous ne passez pas le paramètre facultatif buildAppSettings, la commande affiche une boîte de dialogue standard d'ouverture de document, vous permettant de désigner un fichier de configuration d'application. La variable système Document contiendra le chemin d'accès complet du fichier sélectionné. Si vous passez le chemin d’accès et le nom d’un fichier XML de projet d’application valide (encodage UTF-8), la commande utilisera les paramètres définis dans le fichier. Pour plus d’informations sur la structure et les clés utilisables dans un fichier de configuration d’application, reportez-vous au manuel *4D Clés XML BuildApplication*.

#### Exemple 

Génération de deux applications dans une seule méthode :

```4d
 BUILD APPLICATION("c:\\dossier\\buildApp\\monclientApp.xml")
 If(OK=1)
    BUILD APPLICATION(Folder(Fichier de configuration d'application).platformPath) // paramètres par défaut
 End if
```

#### Variables et ensembles système 

La variable système OK prend la valeur 1 si la commande a été correctement exécutée, sinon elle prend la valeur 0\. La variable système Document prend le chemin d'accès complet du fichier de paramètres ouvert.

#### Gestion des erreurs 

Si la commande échoue, une erreur est générée, que vous pouvez intercepter à l’aide de la commande [ON ERR CALL](on-err-call.md).

#### Voir aussi 

[Compile project](../commands/compile-project.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 871 |
| Thread safe | &cross; |
| Modifie les variables | OK, Document, error |
| Interdite sur le serveur ||


