---
id: set-print-option
title: SET PRINT OPTION
slug: /commands/set-print-option
displayed_sidebar: docs
---

<!--REF #_command_.SET PRINT OPTION.Syntax-->**SET PRINT OPTION** ( *option* ; *valeur1* {; *valeur2*} )<!-- END REF-->
<!--REF #_command_.SET PRINT OPTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | Numéro d’option ou Code d'option PDF |
| valeur1 | Integer, Text | &#8594;  | Valeur 1 de l’option |
| valeur2 | Integer, Text | &#8594;  | Valeur 2 de l’option |

<!-- END REF-->

## Description 

<!--REF #_command_.SET PRINT OPTION.Summary-->La commande **SET PRINT OPTION** permet de modifier par programmation la valeur d’une option d’impression.<!-- END REF--> Chaque option définie à l’aide de cette commande est appliquée aux [paramètres courants de l'impression 4D](../settings/compatibility.md) tant qu’aucune autre commande modifiant les paramètres d’impression ([PRINT SETTINGS](print-settings.md), [PRINT SELECTION](print-selection.md) sans le paramètre *\>*, etc.) n’est appelée. Si une tâche d'impression a été ouverte (ex : avec [OPEN PRINTING JOB](open-printing-job.md)), l'option est définie pour la tâche et n'est pas modifiable tant que la tâche n'est pas terminée (à l'exception de Orientation option, voir ci-dessous) .

### options et valeurs 

Le paramètre *option* vous permet de désigner l’option à modifier. Vous pouvez passer une des constantes prédéfinies du thème “*Options d'impression*” listées ci-dessous. Passez dans les paramètres *valeur1* et (facultativement) *valeur2* la ou les nouvelle(s) valeur(s) de l’*option* spécifiée. Le nombre et la nature des valeurs à passer dépend du type d’option spécifiée.

| Constante                    | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Paper option                 | 1      | Si vous passez uniquement *valeur1*, il contient le nom du papier. Si vous passez les deux paramètres, *valeur1* contient la largeur du papier et *valeur2* contient la hauteur du papier. La largeur et la hauteur sont exprimées en points. Utilisez la commande [PRINT OPTION VALUES](print-option-values.md) pour connaître le nom, la hauteur et la largeur de tous les formats de papier proposés par l’imprimante.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Orientation option           | 2      | *valeur1* uniquement : 1=Portrait, 2=Paysage. Si une option d’orientation différente est utilisée, [GET PRINT OPTION](get-print-option.md) retourne 0 dans *valeur1*. Cette option peut être appelée au sein d'une tâche d'impression, ce qui signifie que vous pouvez passer du mode portrait au mode paysage et inversement dans la même tâche d'impression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Scale option                 | 3      | *valeur1* uniquement : valeur d'échelle en pourcentage. Attention, certaines imprimantes ne permettent pas de modifier l’échelle. Si vous passez une valeur invalide, la propriété est remise à 100% au moment de l'impression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Number of copies option      | 4      | *valeur1* uniquement : nombre de copies à imprimer                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Paper source option          | 5      | (Windows uniqument) *valeur1* uniquement : numéro correspondant à l’indice, dans le tableau des bacs retourné par la commande [PRINT OPTION VALUES](print-option-values.md), du bac papier à utiliser. Cette option est utilisable sous Windows uniquement.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Destination option           | 9      | *valeur1*: code indiquant le type de destination de l’impression : 1=Imprimante, 2=Fichier (PC)/PS (Mac), 3=Fichier PDF, 5=Ecran (option du pilote macOS)<br/>Si *valeur1* est différent de 1 ou de 5, *valeur2* contient un chemin d’accès pour le document résultant. Ce chemin sera utilisé jusqu’à ce qu’un autre chemin soit spécifié. Si un fichier du même nom existe déjà à l’emplacement de destination, il est remplacé. Avec [GET PRINT OPTION](get-print-option.md), si la valeur courante n’est pas dans la liste prédéfinie, *valeur1* contient -1 et la variable système OK vaut 1\. Si une erreur se produit, *valeur1* et la variable système OK valent 0.<br/>Note (s**ous Windows) :** Pour imprimer un PDF sous Windows, vous devez appeler [SET CURRENT PRINTER](set-current-printer.md)(Generic PDF driver) et définir la destination d'impression 2 (Fichier) ou 3 (Fichier PDF). La destination d'impression 3 vous permet d'écrire du code multi-plate-forme. |
| Double sided option          | 11     | *valeur1*: 0=Recto ou standard, 1=Recto-verso. Si *valeur1*\=1, *valeur2* contient la reliure à appliquer : 0=Reliure à gauche (valeur par défaut), 1=Reliure en haut.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Spooler document name option | 12     | *valeur1* uniquement : nom du document d’impression, qui apparaît dans la liste des documents du serveur d’impression. Le nom défini par cette instruction sera utilisé pour tous les documents d’impression de la session tant qu’un nouveau nom ou une chaîne vide ne sera pas passé(e). Pour utiliser ou rétablir le fonctionnement standard (utilisation du nom de la méthode dans le cas d’une méthode, nom de la table pour un enregistrement, etc.), passez une chaîne vide dans *valeur1*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Page range option            | 15     | *valeur1*\=numéro de la première page à imprimer (valeur par défaut 1) et (optionnel) *valeur2*\=numéro de la dernière page à imprimer (valeur par défaut -1 = fin du document).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Legacy printing layer option | 16     | (Windows uniquement) *valeur1* uniquement : 1=sélectionner l'ancienne couche d'impression GDI pour toutes les tâches d'impression suivantes, 0=sélectionner la couche d'impression D2D (défaut). Ce sélecteur est principalement destiné, dans les applications 4D sous Windows, à permettre aux plug-ins d'ancienne génération d'imprimer dans des tâches d'impression 4D.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Print preview option         | 18     | (Uniquement pour Windows) *valeur1* : Format à utiliser pour les aperçus avant impression sous Windows. Valeurs disponibles : kp preview automatic (par défaut) : Utiliser l'imprimante et la visionneuse XPS si elles sont disponibles, sinon utiliser l'imprimante ou la visionneuse PDF si elles sont disponibles, sinon générer une erreur.. kp preview XPS : Utiliser l'imprimante et la visionneuse XPS si elle est disponible, sinon générer une erreur. kp preview PDF : Utiliser l'imprimante et la visionneuse PDF si elles sont disponibles, sinon générer une erreur. *valeur2* (ne peut être utilisé qu'avec [GET PRINT OPTION](get-print-option.md).): Format d'aperçu avant impression utilisé sous Windows (peut différer de la valeur1 en fonction de la configuration). Valeurs disponibles : kp preview none : Aucun format disponible. kp preview XPS : Imprimante et visionneuse XPS utilisées. kp preview PDF : Imprimante et visionneuse PDF utilisées.                        |

Une fois fixée à l’aide de cette commande, une option d’impression sera conservée durant toute la session pour l’application 4D entière. Elle sera utilisée par les commandes [PRINT SELECTION](print-selection.md), [PRINT RECORD](print-record.md), [Print form](../commands/print-form.md), [QR REPORT](qr-report.md) et par toutes les impressions de 4D, y compris en mode Développement.

**Notes :**

* Il est impératif d’utiliser le paramètre optionnel *\>* avec les commandes [PRINT SELECTION](print-selection.md), [PRINT RECORD](print-record.md) et [PAGE BREAK](page-break.md) afin de ne pas réinitialiser les options d’impression définies à l’aide de la commande **SET PRINT OPTION**.
* La commande **SET PRINT OPTION** prend principalement en charge les imprimantes PostScript. Elle peut être utilisée avec d'autres types d'imprimantes, telles que PCL ou Ink, mais dans ce cas il est possible que certaines options ne soient pas disponibles.

## Exemple 

La valeur de l'option Orientation option peut être modifiée à l'intérieur d'une même tâche d'impression. A noter que l'option doit être définie avant la commande [PAGE BREAK](page-break.md) :

```4d
 ALL RECORDS([Personnes])
 PRINT SETTINGS
 If(OK=1)
    OPEN PRINTING JOB
    SET PRINT OPTION(Orientation option;1) //portrait
    Print form([Personnes];"Form_Vert")
 
    SET PRINT OPTION(Orientation option;2) //paysage
    PAGE BREAK //doit être impérativement appelé APRES l'option
    Print form([Personnes];"Form_Hor")
    CLOSE PRINTING JOB
 End if
```

## Variables et ensembles système 

La variable système OK prend la valeur 1 si la commande a été exécutée correctement, sinon elle prend la valeur 0.

## Gestion des erreurs 

Si la valeur passée pour une *option* est invalide ou si elle n'est pas disponible sur l'imprimante, la commande retourne une erreur (que vous pouvez intercepter à l’aide d’une méthode de gestion d’erreur installée par la commande [ON ERR CALL](on-err-call.md)) et la valeur courante de l’option est inchangée. 

## Voir aussi 

[GET PRINT OPTION](get-print-option.md)  
*Options d'impression*  
[Print form](../commands/print-form.md)  
[PRINT OPTION VALUES](print-option-values.md)  
[SET CURRENT PRINTER](set-current-printer.md)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 733 |
| Thread safe | &cross; |
| Modifie les variables | OK, error |


