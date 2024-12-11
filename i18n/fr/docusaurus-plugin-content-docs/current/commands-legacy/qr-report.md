---
id: qr-report
title: QR REPORT
slug: /commands/qr-report
displayed_sidebar: docs
---

<!--REF #_command_.QR REPORT.Syntax-->**QR REPORT** ( {*laTable* ;} *nomFichier* {; *nomMéthode*}{; *} )<!-- END REF-->
<!--REF #_command_.QR REPORT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table à utiliser ou Table par défaut si ce paramètre est omis |
| nomFichier | Text | &#8594;  | Document d'état rapide à charger |
| nomMéthode | Text | &#8594;  | Nom de la méthode à appeler |
| * | Opérateur | &#8594;  | Suppression des boîtes de dialogue d'impression |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR REPORT.Summary-->La commande **QR REPORT** imprime un état pour *laTable*, à l'aide de l'Editeur d'états rapides de 4D.<!-- END REF--> Cet éditeur permet à l'utilisateur de construire en totalité son propre état. Pour plus d'informations sur la création d'états à l'aide de l'Editeur d'états rapides, reportez-vous à la section *Etats rapides* dans le manuel *Mode Développement* de 4D.

**Notes :**

* L'éditeur n'apparaît pas si la *laTable* a été déclarée “Invisible”.
* Lorsque l'éditeur est appelé via la commande **QR REPORT**, les liens entre les tables conservent leur statut manuel, le cas échéant. Ce principe permet au développeur de gérer lui-même ce statut à l'aide des commandes [SET AUTOMATIC RELATIONS](set-automatic-relations.md) et [SET FIELD RELATION](set-field-relation.md). Toutefois, n'oubliez pas que les automatismes sont désactivés lorsque les tables liées sont visualisées dans un formulaire liste affiché à l'aide de [DISPLAY SELECTION](display-selection.md), [MODIFY SELECTION](modify-selection.md) ou d'un sous-formulaire. Voir *Liens manuels et automatiques*.
* L'éditeur est appelé dans une fenêtre externe, il n'est pas possible d'utiliser la commande [QR ON COMMAND](qr-on-command.md) dans ce contexte. Vous pouvez cependant utiliser le paramètre *nomMéthode* afin d'exécuter du code personnalisé lorsqu'une commande d'interface est activée (cf. ci-dessous).

Le paramètre *nomFichier* désigne un modèle d'état créé dans l'éditeur d'états rapides et sauvegardé sur disque. Le document stocke les paramètres de l'état, pas les enregistrements. Si une chaîne vide ("") est passée dans *nomFichier*, **QR REPORT** affiche une boîte de dialogue d'ouverture de fichiers, dans laquelle l'utilisateur peut choisir un modèle d'état à imprimer.   
Si le paramètre *nomFichier* spécifie un document qui n'existe pas (si vous passez, par exemple, [Char](char.md)(1) dans *nomFichier*), l'éditeur d'états rapides s'affiche.

Le paramètre *nomMéthode* désigne une méthode projet 4D qui sera exécutée chaque fois qu'une commande de gestion de documents de l'éditeur d'états rapides sera appelée via un clic sur un bouton. L'utilisation de ce paramètre équivaut à l'utilisation de [QR ON COMMAND](qr-on-command.md) dans la fenêtre de l'éditeur d'états rapides ([QR ON COMMAND](qr-on-command.md) fonctionne uniquement pour une une zone intégrée). Par exemple, vous pouvez utiliser ce paramètre pour modifier le jeu de caratètres utilisé par l'état rapide. La méthode *nomMéthode* reçoit deux paramètres :

| **Paramètre** | **Type**    | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $1            | Entier long | Référence de la zone                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| $2            | Entier long | Numéro de la commande sélectionnée. À comparer avec les constantes suivantes du thème *QR Commandes* (seuls les événements listés sont pris en charge) : <table> <thead> <tr> <td>Constante</td> <td>Valeur</td> <td>Comment</td> </tr> </thead> <tbody> <tr> <td>qr cmd generate</td> <td>2008</td> <td>Utilisation de la commande [QR RUN](qr-run.md) conseillée</td> </tr><tr> <td>qr cmd open</td> <td>2001</td> <td></td> </tr><tr> <td>qr cmd page setup</td> <td>2006</td> <td></td> </tr><tr> <td>qr cmd print preview</td> <td>2007</td> <td></td> </tr><tr> <td>qr cmd save</td> <td>2002</td> <td></td> </tr><tr> <td>qr cmd save as</td> <td>2003</td> <td></td> </tr> </tbody> </table> |

**Note :** Si vous souhaitez compiler votre base de données, vous devez déclarer explicitement les paramètres $1 et $2 comme entiers longs, même si vous ne les utilisez pas.

Si vous souhaitez exécuter la commande initiale choisie par l'utilisateur, saisissez l'instruction suivante dans la méthode *nomMéthode* :

```4d
 QR EXECUTE COMMAND($1;$2)
```

Si le paramètre *nomMéthode* est une chaîne vide ("") ou est omis, aucune méthode n'est appelée et l'opération standard de **QR REPORT** est appliquée.

Une fois qu'un fichier d'état est sélectionné, les boîtes de dialogue d'impression s'affichent, sauf si le paramètre *\** a été spécifié — dans ce cas, elles ne s'affichent pas. L'état est alors imprimé.

Lorsque l'Editeur d'états rapides n'est pas affiché, la variable système OK prend la valeur 1 si un état est imprimé ; sinon elle prend la valeur 0 (zéro) — par exemple si l'utilisateur a cliqué sur **Annuler** dans les boîtes de dialogue d'impression.

**4D Server :** Cette commande peut être exécutée sur 4D Server dans le cadre d'une procédure stockée. Dans ce contexte :

* Veillez à ce qu’aucune boîte de dialogue n’apparaisse sur le poste serveur (sauf besoin spécifique). Pour cela, il est nécessaire d’appeler la commande avec le paramètre *\**.
* La syntaxe faisant apparaître l‘éditeur d'états rapide ne fonctionne pas avec 4D Server, dans ce cas la variable système OK prend la valeur 0.
* En cas de problème sur l’imprimante (plus de papier, imprimante déconnectée, etc.), aucun message d'erreur n'est généré.

#### Exemple 1 

L'exemple suivant permet à l'utilisateur d'effectuer une recherche dans la table \[Personnes\], puis imprime automatiquement l'état "Liste détaillée" :

```4d
 QUERY([Personnes])
 If(OK=1)
    QR REPORT([Personnes];"Liste détaillée";*)
 End if
```

#### Exemple 2 

L'exemple suivant permet à l'utilisateur d'effectuer une recherche dans la table \[Personnes\], puis de sélectionner le document d'état qui sera ensuite utilisé pour l'impression :

```4d
 QUERY([Personnes])
 If(OK=1)
    QR REPORT([Personnes];"")
 End if
```

#### Exemple 3 

L'exemple suivant permet à l'utilisateur d'effectuer une recherche dans la table \[Personnes\], puis affiche l'Editeur d'états rapides afin que l'utilisateur puisse construire, charger, sauvegarder ou imprimer tout état :

```4d
 QUERY([Personnes])
 If(OK=1)
    QR REPORT([Personnes];Char(1))
 End if
```

#### Exemple 4 

Reportez-vous à l'exemple de la commande [SET FIELD RELATION](set-field-relation.md). 

#### Exemple 5 

Vous souhaitez convertir le jeu de caractères utilisé dans un état rapide appelé via **QR REPORT** en Mac Roman :

```4d
 QR REPORT([MaTable];Char(1);"maCallbackMeth")
```

La méthode maCallbackMeth convertit l’état lorsqu’il est généré :

```4d
 var $1;$2 : Integer
 If($2=qr cmd generate) //si on a généré un état
    var $myblob : Blob
    var $path;$text : Text
    var $type : Integer
    QR EXECUTE COMMAND($1;$2) //exécution de la commande
    QR GET DESTINATION($1;$type;$path) //récupération de la destination
    If(($type=qr HTML file)|$type=qr text file))
       DOCUMENT TO BLOB($path;$myblob)
  //conversion vers un texte en utilisant UTF-8
       $text:=Convert to text($myblob;"UTF-8")
  //utilisation du jeu MacRoman
       CONVERT FROM TEXT($text;"MacRoman";$myblob)
  //Renvoi de l’état converti
       BLOB TO DOCUMENT($path;$myblob)
    End if
 Else //sinon exécution de la commande
    QR EXECUTE COMMAND($1;$2)
 End if
```

#### Voir aussi 

[PRINT LABEL](print-label.md)  
[PRINT SELECTION](print-selection.md)  
[SET ALLOWED METHODS](../commands/set-allowed-methods.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 197 |
| Thread safe | &check; |
| Modifie les variables | OK |


