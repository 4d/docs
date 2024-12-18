---
id: set-update-folder
title: SET UPDATE FOLDER
slug: /commands/set-update-folder
displayed_sidebar: docs
---

<!--REF #_command_.SET UPDATE FOLDER.Syntax-->**SET UPDATE FOLDER** ( *cheminDossier* {; *erreursDiscrètes*} )<!-- END REF-->
<!--REF #_command_.SET UPDATE FOLDER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminDossier | Text | &#8594;  | Chemin d’accès du dossier (package sous OS X) contenant l’application mise à jour |
| erreursDiscrètes | Boolean | &#8594;  | Faux (défaut) = afficher des messages d’erreur, Vrai = ne pas afficher de messages (uniquement enregistrer les erreurs) |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET UPDATE FOLDER.Summary-->La commande **SET UPDATE FOLDER** permet de définir le dossier contenant la mise à jour de l’application 4D fusionnée courante.<!-- END REF--> Cette information est mémorisée durant la session 4D jusqu’à l’appel de la commande [RESTART 4D](restart-4d.md). Si l’application est quittée manuellement, cette information n'est pas conservée.

Cette commande est destinée à être utilisée dans un processus de mise à jour automatique d’une application fusionnée (serveur ou monoposte). Pour plus d’informations, reportez-vous à la section *Finaliser et déployer les applications finales* dans le manuel *Mode Développement*.

**Note :** La commande fonctionne uniquement avec 4D Server ou une application monoposte fusionnée avec 4D Volume Desktop. 

Passez dans le paramètre *cheminDossier* le chemin d’accès complet du dossier de la nouvelle version de l’application fusionnée (dossier contenant l’application *monApp4D.exe* sous Windows et package *monApp4D.app* sous OS X), créée par le générateur d’applications de 4D. 

**Note :** Il est fortement conseillé d’utiliser pour les fichiers des nouvelles versions des applications le même nom que ceux des applications elles-mêmes, car le processus de mise à jour remplace le dossier de l’application. Si vous utilisez des noms différents, les raccourcis et chemins mémorisés ne fonctionneront plus. 

Si les paramètres sont valides, la mise à jour est placée "en attente" dans la session jusqu’à l’appel de la commande [RESTART 4D](restart-4d.md). Si vous exécutez plusieurs fois **SET UPDATE FOLDER** avant [RESTART 4D](restart-4d.md), le dernier appel valide est pris en compte. 

Vous pouvez passer une chaîne vide ("") dans *cheminDossier* pour réinitialiser les informations de mise à jour pour la session courante. 

Le paramètre optionnel *erreursDiscrètes* permet de définir le mode de report des erreurs lors de la mise à jour :

* si vous passez **Faux** ou si ce paramètre est omis, les erreurs sont inscrites dans le journal des mises à jour et affichées dans une boîte de dialogue d’alerte.
* si vous passez **Vrai**, les erreurs sont uniquement inscrites dans le journal des mises à jour.

Exception : s'il n'est pas possible de créer un fichier journal, une boîte de dialogue d’alerte est affichée, quelle que soit la valeur du paramètre *erreursDiscrètes*. Pour plus d'informations, reportez-vous à la description de la commande [Get last update log path](get-last-update-log-path.md).

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0\. Vous pouvez intercepter les erreurs éventuellement générées par la commande à l’aide d’une méthode installée via la commande [ON ERR CALL](on-err-call.md). 

#### Exemple 

Vous avez créé un dossier "MesMisesAJour" sur votre disque, dans lequel vous avez placé une nouvelle version de l’application "MonAppli". Vous ne souhaitez pas afficher les erreurs. Pour préparer la mise à jour, vous écrivez :

```4d
     // Syntaxe Windows
 SET UPDATE FOLDER("C:\\MesMisesAJour"+Folder separator+"MonAppli"+Folder separator;True)
 
     // Syntaxe OS X
 SET UPDATE FOLDER("MacHD:MesMisesAJour"+Folder separator+"MonAppli.app"+Folder separator;True)
```

#### Voir aussi 

[Get last update log path](get-last-update-log-path.md)  
[RESTART 4D](restart-4d.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1291 |
| Thread safe | &cross; |
| Modifie les variables | OK, error |


