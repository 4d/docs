---
id: ob-get-property-names
title: OB GET PROPERTY NAMES
slug: /commands/ob-get-property-names
displayed_sidebar: docs
---

<!--REF #_command_.OB GET PROPERTY NAMES.Syntax-->**OB GET PROPERTY NAMES** ( *objet* ; *tabPropriétés* {; *tabTypes*} )<!-- END REF-->
<!--REF #_command_.OB GET PROPERTY NAMES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objet | Object | &#8594;  | Objet structuré |
| tabPropriétés | Text array | &#8592; | Noms des propriétés |
| tabTypes | Integer array | &#8592; | Types des propriétés |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB GET PROPERTY NAMES.Summary-->La commande **OB GET PROPERTY NAMES** retourne dans *tabPropriétés* les noms des propriétés contenues dans l’objet de langage désigné par le paramètre *objet*.<!-- END REF-->doit avoir été défini via la commande [C\_OBJECT](c-object.md) ou désigner un champ objet 4D.

Passez dans le paramètre *tabPropriétés* un tableau texte. Si le tableau n’existe pas, la commande le crée et le dimensionne automatiquement. 

Optionnellement, vous pouvez passer dans *tabTypes* un tableau entier long. Pour chaque élément de *tabPropriétés*, la commande retournera dans *tabTypes* le type de la valeur stockée dans la propriété. Vous pouvez comparer les valeurs reçues aux constantes suivantes du thème *Types champs et variables* :

| Constante     | Type        | Valeur |
| ------------- | ----------- | ------ |
| Is Boolean    | Entier long | 6      |
| Is collection | Entier long | 42     |
| Is null       | Entier long | 255    |
| Is object     | Entier long | 38     |
| Is real       | Entier long | 1      |
| Is text       | Entier long | 2      |
| Object array  | Entier long | 39     |

**Note :** Pour les propriétés d'un tableau, la commande retourne Est une collection.

#### Exemple 1 

Vous souhaitez tester qu’un objet n’est pas vide :

```4d
 ARRAY TEXT(tabNoms;0)
 ARRAY LONGINT(tabTypes;0)
 var $ref_richard : Object
 OB SET($ref_richard;"nom";"Richard";"age";7)
 OB GET PROPERTY NAMES($ref_richard;tabNoms;tabTypes)
     //tabNoms{1}="nom", tabNoms{2}="age"
     //tabTypes{1}=2, tabTypes{2}=1
 If(Size of array(tabNoms)#0)
        //...
 End if
```

#### Exemple 2 

Utilisation d’un élément de tableau d’objets :

```4d
 var $Children;$ref_richard;$ref_susan;$ref_james : Object
 ARRAY OBJECT($arrayChildren;0)
 
 OB SET($ref_richard;"nom";"Richard";"age";7)
 APPEND TO ARRAY($arrayChildren;$ref_richard)
 OB SET($ref_susan;"nom";"Susan";"age";4;"fille";True) //attribut supplémentaire
 APPEND TO ARRAY($arrayChildren;$ref_susan)
 OB SET($ref_james;"nom";"James")
 OB SET NULL($ref_james;"age") //attribut null
 APPEND TO ARRAY($arrayChildren;$ref_james)
 
 OB GET PROPERTY NAMES($arrayChildren{1};$tabNoms;$tabTypes)
  // $arrayChildren{1} = {"nom":"Richard","age":7}
  // $tabNoms{1}="nom"
  // $tabNoms{2}="age"
  // $tabTypes{1}=2
  // $tabTypes{2}=1
 
 OB GET PROPERTY NAMES($arrayChildren{2};$tabNoms;$tabTypes)
  // $arrayChildren{3} = {"nom":"Susan","age":4,"fille":true}
  // $tabNoms{1}="nom"
  // $tabNoms{2}="age"
  // $tabNoms{3}="fille"
  // $tabTypes{1}=2
  // $tabTypes{2}=1
  // $tabTypes{3}=6
 
 OB GET PROPERTY NAMES($arrayChildren{3};$tabNoms;$tabTypes)
  // $arrayChildren{3} = {"nom":"James","age":null}
  // $tabNoms{1}="nom"
  // $tabNoms{2}="age"
  // $tabTypes{1}=2
  // $tabTypes{2}=255
```

#### Voir aussi 

[OB Get type](ob-get-type.md)  
[OB SET NULL](ob-set-null.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1232 |
| Thread safe | &check; |


