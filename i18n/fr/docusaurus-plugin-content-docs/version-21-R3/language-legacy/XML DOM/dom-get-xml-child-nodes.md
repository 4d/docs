---
id: dom-get-xml-child-nodes
title: DOM GET XML CHILD NODES
slug: /commands/dom-get-xml-child-nodes
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML CHILD NODES.Syntax-->**DOM GET XML CHILD NODES** ( *refElément* ; *tabTypesEnfants* ; *tabRefsNoeuds* )<!-- END REF-->
<!--REF #_command_.DOM GET XML CHILD NODES.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML |
| tabTypesEnfants | Integer array | &#8592; | Types des noeuds enfants |
| tabRefsNoeuds | Text array | &#8592; | Références ou Valeurs des noeuds enfants |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|12|Créé|

</details>
</div>

## Description 

<!--REF #_command_.DOM GET XML CHILD NODES.Summary-->La commande **DOM GET XML CHILD NODES** retourne les types et les références ou valeurs de tous les noeuds enfants de l’élément XML désigné par *refElément*.<!-- END REF-->

Les types des noeuds enfants sont retournés dans le tableau *tabTypesEnfants*. Vous pouvez comparer les valeurs renvoyées par la commande avec les constantes suivantes, placées dans le thème *XML* :

| Constante                  | Type        | Valeur |
| -------------------------- | ----------- | ------ |
| XML comment                | Entier long | 2      |
| XML processing instruction | Entier long | 3      |
| XML DATA                   | Entier long | 6      |
| XML CDATA                  | Entier long | 7      |
| XML DOCTYPE                | Entier long | 10     |
| XML ELEMENT                | Entier long | 11     |

Pour plus d’informations, reportez-vous à la description de la commande [DOM Append XML child node](../commands/dom-append-xml-child-node).

Le tableau *tabRefsNoeuds* reçoit les valeurs ou les références des éléments en fonction de leur nature (contenus ou instructions).

## Exemple 

Soit la structure XML suivante :  

```XML
<monElement>Bonjour<br/>La<br/>FRANCE</monElement>
```

Après l’exécution de ces instructions :  

```4d
 refElement:=DOM Find XML element($root;"monElement")
 DOM GET XML CHILD NODES(refElement;$tabtype;$tabtext)
```

... les tableaux $tabtype et $tabtext contiendront les valeurs suivantes :  

| $tabtype{1}=6  | $tabtext{1} = "Bonjour"                                         |
| -------------- | --------------------------------------------------------------- |
| $tabtype{2}=11 | $tabtext{2} = "AEF1233456878977" (référence de l’élément <Br/>) |
| $tabtype{3}=6  | $tabtext{3} = "La"                                              |
| $tabtype{4}=11 | $tabtext{4} = "AEF1237897734568" (référence de l’élément<Br/>)  |
| $tabtype{5}=6  | $tabtext{5} = "FRANCE"                                          |

## Voir aussi 

[DOM Append XML child node](../commands/dom-append-xml-child-node)  
[DOM Get XML document ref](../commands/dom-get-xml-document-ref)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1081 |
| Thread safe | yes |


