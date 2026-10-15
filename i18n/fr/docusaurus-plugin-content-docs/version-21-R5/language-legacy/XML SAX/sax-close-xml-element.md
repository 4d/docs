---
id: sax-close-xml-element
title: SAX CLOSE XML ELEMENT
slug: /commands/sax-close-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.SAX CLOSE XML ELEMENT.Syntax-->**SAX CLOSE XML ELEMENT** ( *document* : Time )<!-- END REF-->
<!--REF #_command_.SAX CLOSE XML ELEMENT.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| document | Time | &#8594;  | Référence du document ouvert |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|2004|Créé|

</details>
</div>

## Description 

<!--REF #_command_.SAX CLOSE XML ELEMENT.Summary-->La commande **SAX CLOSE XML ELEMENT** inscrit dans le document XML référencé par *document* les instructions nécessaires à la fermeture du dernier élément ouvert via la commande [SAX OPEN XML ELEMENT](../commands/sax-open-xml-element).<!-- END REF--> 

L’emploi de cette commande est facultatif. En effet, 4D ajoute automatiquement si nécessaire, au moment de la fermeture des documents XML, les balises de fin d’éléments non refermés explicitement.

## Exemple 

Si le dernier élément ouvert est *<Book>*, l’instruction suivante :

```4d
 SAX CLOSE XML ELEMENT($RefDoc)
```

... inscrira cette ligne dans le document : 

```XML
</Book>
```

## Voir aussi 

[SAX OPEN XML ELEMENT](../commands/sax-open-xml-element)  
[SAX OPEN XML ELEMENT ARRAYS](../commands/sax-open-xml-element-arrays)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 854 |
| Thread safe | yes |


