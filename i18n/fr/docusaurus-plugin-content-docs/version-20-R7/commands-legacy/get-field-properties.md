---
id: get-field-properties
title: GET FIELD PROPERTIES
slug: /commands/get-field-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET FIELD PROPERTIES.Syntax-->**GET FIELD PROPERTIES** ( ptrChp | numTable {; *numChamp*}; *champType* {; *champLong* {; *indexé* {; *unique* {; *invisible*}}}} )<!-- END REF-->
<!--REF #_command_.GET FIELD PROPERTIES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| ptrChp &#124; numTable | Pointeur, Entier long | &#8594;  | Pointeur de champ ou Numéro de table |
| numChamp | Integer | &#8594;  | Numéro de champ si un numéro de table est passé en premier paramètre |
| champType | Integer | &#8592; | Type de champ |
| champLong | Integer | &#8592; | Longueur du champ (si alphanumérique) |
| indexé | Boolean | &#8592; | Vrai = Indexé, Faux = Non indexé |
| unique | Boolean | &#8592; | Vrai = Unique, Faux = Non unique |
| invisible | Boolean | &#8592; | Vrai = Invisible, Faux = Visible |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET FIELD PROPERTIES.Summary-->La commande **GET FIELD PROPERTIES** retourne des informations sur le champ désigné par *numTable* et *numChamp* ou par *ptrChp*.<!-- END REF-->

Vous pouvez soit passer :

* les numéros de table et de champ dans *numTable* et *numChamp*
* ou un pointeur vers le champ dans *ptrChp*.

Après l'appel :

* Le paramètre *champType* retourne le type du champ. Le paramètre variable *champType* reçoit l'une des valeurs prédéfinies par les constantes de 4D (thème *Types champs et variables*) :  

| Constante          | Type        | Valeur |  
| ------------------ | ----------- | ------ |  
| Is alpha field     | Entier long | 0      |  
| Is BLOB            | Entier long | 30     |  
| Is Boolean         | Entier long | 6      |  
| Is date            | Entier long | 4      |  
| Is float           | Entier long | 35     |  
| Is integer         | Entier long | 8      |  
| Is integer 64 bits | Entier long | 25     |  
| Is longint         | Entier long | 9      |  
| Is object          | Entier long | 38     |  
| Is picture         | Entier long | 3      |  
| Is real            | Entier long | 1      |  
| Is subtable        | Entier long | 7      |  
| Is text            | Entier long | 2      |  
| Is time            | Entier long | 11     |
* Le paramètre *champLong* retourne la longueur du champ si celui-ci est de type Alpha (ce qui signifie que vous obtenez *champType=*Is alpha field). La valeur de *champLong* n'est pas significative pour les autres types de champ.
* Le paramètre *indexé* retourne Vrai si le champ est indexé, Faux sinon. La valeur de *indexé* est significative pour les champs de type Alphanumérique, Entier, Entier long, Réel, Date, Heure et Booléen.
* Le paramètre *unique* retourne Vrai si le champ dispose de l’attribut “Unique”, Faux sinon.
* Le paramètre *invisible* retourne Vrai si le champ dispose de l’attribut “Invisible”, Faux sinon. L’attribut Invisible permet de masquer le champ dans les éditeurs standard de 4D (étiquettes, graphes...).

#### Exemple 1 

Dans l'exemple suivant, les variables *vType*, *vLong*, *vIndex*, *vUnique* et *vInvisible* prennent pour valeur les propriétés du troisième champ de la première table :

```4d
 GET FIELD PROPERTIES(1;3;vType;vLong;vIndex;vUnique;vInvisible)
```

#### Exemple 2 

L'exemple suivant récupère dans les variables *vType*, *vLong*, *vIndex*, *vUnique* et *vInvisible* les propriétés du champ \[Table3\]Champ2 :

```4d
 GET FIELD PROPERTIES(->[Table3]Champ2;vType;vLong;vIndex;vUnique;vInvisible)
```

#### Voir aussi 

[Field](field.md)  
[Field name](field-name.md)  
[SET INDEX](set-index.md)  