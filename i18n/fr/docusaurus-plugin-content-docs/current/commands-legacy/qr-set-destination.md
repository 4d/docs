---
id: qr-set-destination
title: QR SET DESTINATION
slug: /commands/qr-set-destination
displayed_sidebar: docs
---

<!--REF #_command_.QR SET DESTINATION.Syntax-->**QR SET DESTINATION** ( *zone* ; *type* {; *spécificités*} )<!-- END REF-->
<!--REF #_command_.QR SET DESTINATION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| type | Integer | &#8594;  | Type d'état |
| spécificités | Text, Variable | &#8594;  | Spécificités du type de destination |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.QR SET DESTINATION.Summary-->La commande **QR SET DESTINATION** permet de définir le *type* de destination de sortie de l'état rapide contenu dans la *zone*.<!-- END REF-->

Passez dans le paramètre *type* une des constantes du thème *QR Destination de sortie*. Le contenu du paramètre *spécificités* dépend de la valeur de *type*. Le tableau suivant liste les valeurs qui peuvent être passées dans les paramètres *type* et *spécificités*.

| Constante             | Type        | Valeur | Comment                                                                  |
| --------------------- | ----------- | ------ | ------------------------------------------------------------------------ |
| \_o\_qr 4D Chart area | Entier long | 4      | \*\*\* Constante obsolète \*\*\*                                         |
| \_o\_qr 4D View area  | Entier long | 3      | \*\*\* Constante obsolète \*\*\*                                         |
| qr HTML file          | Entier long | 5      | *spécificités* : Chemin d'accès du fichier.                              |
| qr printer            | Entier long | 1      | *spécificités* : "\*" pour supprimer les boîtes de dialogue d'impression |
| qr text file          | Entier long | 2      | *spécificités* : Chemin d'accès du fichier.                              |

*qr printer* (1) : Si vous passez une chaîne contenant une étoile ("\*") dans le paramètre *spécificités*, aucune boîte de dialogue ne sera affichée lors de l'impression, les paramètres d'impression courants seront automatiquement utilisés. Ce paramétrage est nécessaire si vous souhaitez imprimer l'état sur le serveur. 

*qr text file* (2) : Si vous passez une chaîne vide dans le paramètre *spécificités*, une boîte de dialogue standard d'enregistrement de fichiers apparaît. Si vous passez un chemin d'accès valide, l'état rapide sera enregistré à l'emplacement indiqué.   
Par défaut, le délimiteur de champ est le caractère Tabulation (code 9) et le délimiteur d'enregistrement est le caractère Retour chariot (code 13). Vous pouvez modifier ces caractères par défaut en changeant la valeur des variables système FldDelimit et RecDelimit. Sous Windows, si FldDelimit vaut 13, un caractère 10 (Saut de ligne) sera ajouté après le Retour chariot. Tenez compte du fait que ces variables sont utilisées par d'autres commandes, par exemple [IMPORT TEXT](import-text.md). Toute modification de ces variables est répercutée sur l'ensemble de l'application.

*qr 4D View area* (3) : Si l'utilisateur courant dispose du plug-in 4D View, une fenêtre externe 4D View est créée et affiche les résultats des paramètres courants de la zone d'état rapide. 

*qr HTML file* (5) : Un fichier HTML est généré d'après les paramètres courants de la zone d'état rapide. Le fichier HTML est basé sur le modèle défini par la commande [QR SET HTML TEMPLATE](qr-set-html-template.md). Pour plus d'informations sur le mode de conversion des données, veuillez vous référer au manuel Mode Développement. 

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.  
Si la valeur de *type* de destination est incorrecte, l’erreur -9852 est générée.

#### Exemple 

L'exemple suivant définit le fichier texte "MonDoc.txt" comme type de destination de l'état puis l'exécute : 

```4d
 QR SET DESTINATION(MaZone;qr text file;"MonDoc.txt")
 QR RUN(MaZone)
```

#### Voir aussi 

[QR GET DESTINATION](qr-get-destination.md)  