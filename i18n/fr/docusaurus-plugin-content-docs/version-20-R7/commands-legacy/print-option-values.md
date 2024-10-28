---
id: print-option-values
title: PRINT OPTION VALUES
slug: /commands/print-option-values
displayed_sidebar: docs
---

<!--REF #_command_.PRINT OPTION VALUES.Syntax-->**PRINT OPTION VALUES** ( *option* ; *tabNoms* {; *tabInfo1* {; *tabInfo2*}} )<!-- END REF-->
<!--REF #_command_.PRINT OPTION VALUES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | Numéro d’option |
| tabNoms | Text array | &#8592; | Noms des valeurs |
| tabInfo1 | Integer array | &#8592; | Valeurs 1 de l’option |
| tabInfo2 | Integer array | &#8592; | Valeurs 2 de l’option |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.PRINT OPTION VALUES.Summary-->La commande **PRINT OPTION VALUES** retourne dans le tableau *tabNoms* la liste des noms de valeurs disponibles pour l’*option* d’impression définie.<!-- END REF--> Facultativement, vous pouvez récupérer des informations sur chaque valeur dans les tableaux *tabInfo1* et *tabInfo2*. 

Le paramètre *option* vous permet de désigner l’option à lire. Vous devez passer une des constantes du thème *Options d'impression* suivantes (options pouvant retourner des listes de noms de valeurs) :

| Constante           | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------- | ----------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Paper option        | Entier long | 1      | Si vous passez uniquement *valeur1*, il contient le nom du papier. Si vous passez les deux paramètres, *valeur1* contient la largeur du papier et *valeur2* contient la hauteur du papier. La largeur et la hauteur sont exprimées en pixels écran. Utilisez la commande [PRINT OPTION VALUES](print-option-values.md) pour connaître le nom, la hauteur et la largeur de tous les formats de papier proposés par l’imprimante. |
| Paper source option | Entier long | 5      | (Windows uniqument) *valeur1* uniquement : numéro correspondant à l’indice, dans le tableau des bacs retourné par la commande [PRINT OPTION VALUES](print-option-values.md), du bac papier à utiliser. Cette option est utilisable sous Windows uniquement.                                                                                                                                                                     |

Après exécution de la commande, le tableau *tabNoms* ainsi que, le cas échéant, les tableaux *tabInfo1* et *tabInfo2* seront remplis par la commande avec les noms et informations des valeurs disponibles. 

Si vous passez la valeur 1 (Paper option) dans le paramètre *option*, la commande retournera les informations suivantes : 

* dans le tableau *tabNoms*, les noms des formats de papiers disponibles ;
* dans le tableau *tabInfo1*, les hauteurs de chaque format de papier ;
* dans le tableau *tabInfo2*, les largeurs de chaque format de papier.

**Note :** Pour que vous puissiez obtenir ces informations, le pilote d’imprimante doit avoir accès à un fichier de description PostScript (PPD) valide de l’imprimante. 

Pour utiliser un format de papier spécifique à l’aide de la commande [SET PRINT OPTION](set-print-option.md), vous pouvez passer soit une des valeurs du tableau *tabNoms*, soit les valeurs correspondantes des tableaux *tabInfo1* et *tabInfo2*.

Si vous passez la valeur 5 (Paper source option) dans le paramètre *option*, la commande retourne dans le tableau *tabNoms* les noms des différents bacs disponibles et leur numéro Windows interne dans *tabInfo1* (*tabInfo2* reste vide).   
L’ordre des valeurs dans les tableaux est défini par le pilote d’impression. Pour désigner un bac à l’aide de la commande [SET PRINT OPTION](set-print-option.md), vous devez passer l’indice de l’élément souhaité dans tableau *tabNoms* ou *tabInfo1*.

**Note :** Cette option est utilisable sous Windows uniquement.

Pour plus d’informations sur les différentes options d’impression, reportez-vous à la description des commandes [SET PRINT OPTION](set-print-option.md) et [GET PRINT OPTION](get-print-option.md). 

Toutes les informations retournées par ces commandes sont fournies par le système d’exploitation. Reportez-vous à la documentation de votre système pour plus de détails sur certaines options. 

**Note :** La commande **PRINT OPTION VALUES** fonctionne avec les imprimantes PostScript uniquement. 

#### Voir aussi 

[GET PRINT OPTION](get-print-option.md)  
[SET PRINT OPTION](set-print-option.md)  