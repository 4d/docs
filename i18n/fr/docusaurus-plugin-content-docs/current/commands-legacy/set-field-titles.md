---
id: set-field-titles
title: SET FIELD TITLES
slug: /commands/set-field-titles
displayed_sidebar: docs
---

<!--REF #_command_.SET FIELD TITLES.Syntax-->**SET FIELD TITLES** ( *laTable* ; *titresChamps* ; *numChamps* {; *} )<!-- END REF-->
<!--REF #_command_.SET FIELD TITLES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table dont vous voulez redéfinir les titres des champs |
| titresChamps | Text array | &#8594;  | Nouveaux titres des champs |
| numChamps | Integer array | &#8594;  | Numéros des champs |
| * | Operator |  &#8594;  | Utiliser les noms personnalisés dans l’éditeur de formules |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET FIELD TITLES.Summary-->**SET FIELD TITLES** vous permet de masquer, renommer et réordonner les champs d'une table de votre base lorsqu'ils apparaissent dans les éditeurs standard de 4D en mode Application (lorsque le mode de lancement est le mode **Application**, ou après avoir sélectionné "**Tester l'application**" dans le menu **Exécution**).<!-- END REF-->

Cette commande vous permet également de modifier à la volée les libellés des champs apparaissant dans vos formulaires, si vous avez utilisé des libellés dynamiques. Pour plus d'informations sur l'insertion de libellés de tables et de champs dynamiques dans les formulaires, reportez-vous au manuel *Mode Développement*.

Les tableaux *titresChamps* et *numChamps* doivent être synchronisés. Dans le tableau *titresChamps*, vous passez les noms des champs tels que vous voulez qu'ils apparaissent. Les champs s'afficheront dans l'ordre défini par ces tableaux. Dans chaque élément du tableau *numChamps*, vous passez le numéro de la table qui correspond au nom, nouveau ou ancien, du champ, et ce dans le même numéro d'élément que dans le tableau *titresChamps*.   
Si vous voulez masquer un champ, il suffit de ne pas le passer dans les tableaux. Vous avez, par exemple, une table comprenant les champs F, G et H, créés dans cet ordre. Vous voulez que ces champs apparaissent comme M, N et O. De plus, vous ne voulez pas faire apparaître le champ N. Enfin, vous voulez que les tables soient dans l'ordre O et M. Pour cela, vous passez dans le paramètre *titresChamps* un tableau contenant deux éléments, O et M, et vous passez dans le paramètre *numChamps* un tableau contenant deux éléments, 3 et 1.

Le paramètre facultatif *\** vous permet d'indiquer si les noms personnalisés (la "structure virtuelle") définis à l’aide de cette commande peuvent être ou non utilisés dans les formules de 4D. Par défaut, lorsque ce paramètre est omis, les formules exécutées dans 4D ne peuvent pas utiliser ces noms personnalisés ; il est nécessaire d'utiliser les noms de champs véritables. Vous devez passer ce paramètre si vous souhaitez contrôler l'information fournie aux utilisateurs et assurer la cohérence de l'interface lors de l'utilisation de ces formules ou expressions, *i.e* :

* Si votre application fournit un accès à l'éditeur de formules (par exemple via l'éditeur d'états rapides)
* Si votre application affiche des références d'expressions, comme dans les documents 4D Write Pro.

**Note :** Lorsque le paramètre \* est passé, les noms définis par cette commande peuvent être utilisés dans les formules exécutées par 4D. **Attention dans ce cas**, les noms personnalisés ne doivent pas contenir de caractères “interdits” par l’interpréteur du langage de 4D, tels que -?\*! Par exemple, le nom "Rate\_in\_%" ne pourrait pas être utilisé dans une formule (pour plus d'informations, reportez-vous à la section “*Nommer les objets du langage 4D*”).

**SET FIELD TITLES** ne modifie pas la structure de votre base. Cette commande est conçue pour affecter l'utilisation ultérieure des éditeurs de 4D et des formulaires comportant des libellés dynamiques lorsqu'ils sont utilisés dans l'environnement d'Application. L'aire de validité de la commande **SET FIELD TITLES** est la session. L'avantage, en Client/Serveur, est que plusieurs 4D distants peuvent “voir” simultanément votre structure d'une manière différente. Vous pouvez appeler **SET FIELD TITLES** autant de fois que vous voulez.

La commande **SET FIELD TITLES** est utile dans les cas suivants :

* Traduction dynamique de votre base.
* Affichage des champs dans l'ordre et avec les noms que vous voulez, indépendamment de leurs définitions.
* Affichage des champs suivant l'identité ou les privilèges d'un utilisateur.

**ATTENTION :**

* **SET FIELD TITLES** n'annule pas l'effet de la propriété Invisible d'un champ. Si vous avez défini un champ en tant qu'invisible au niveau de la structure, il n'apparaîtra pas en mode Application même s'il est spécifié dans **SET FIELD TITLES**.
* Les plug-ins accèdent toujours à la structure "virtuelle" telle que définie par cette commande.
* Lorsque la commande [SET TABLE TITLES](set-table-titles.md) est appelée sans aucun paramètre, la structure "virtuelle" (incluant les noms personnalisés de tables et de champs) est retirée de l'environnement d'Application.

#### Exemple 

Reportez-vous à l'exemple de la commande [SET TABLE TITLES](set-table-titles.md).

#### Voir aussi 

[Field name](field-name.md)  
[GET FIELD TITLES](get-field-titles.md)  
[Last field number](last-field-number.md)  
[Parse formula](parse-formula.md)  
[SET TABLE TITLES](set-table-titles.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 602 |
| Thread safe | &cross; |


