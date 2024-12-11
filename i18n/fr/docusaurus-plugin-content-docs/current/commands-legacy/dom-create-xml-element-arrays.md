---
id: dom-create-xml-element-arrays
title: DOM Create XML element arrays
slug: /commands/dom-create-xml-element-arrays
displayed_sidebar: docs
---

<!--REF #_command_.DOM Create XML element arrays.Syntax-->**DOM Create XML element arrays** ( *refElément* ; *xChemin* {; *tabNomsAttributs* ; *tabValeursAttributs*} {; *tabNomsAttributs2* ; *tabValeursAttributs2* ; ... ; *tabNomsAttributsN* ; *tabValeursAttributsN*} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Create XML element arrays.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML racine |
| xChemin | Text | &#8594;  | Chemin XPath de l’élément XML à créer |
| tabNomsAttributs | Text array | &#8594;  | Tableau de noms d’attributs |
| tabValeursAttributs | Text array | &#8594;  | Tableau de valeurs d’attributs |
| Résultat | Text | &#8592; | Référence de l'élément XML créé |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Create XML element arrays.Summary-->La commande **DOM Create XML element arrays** permet d’ajouter un nouvel élément dans l’élément XML *refElément* ainsi que, facultativement, des attributs et leurs valeurs sous forme de tableaux.<!-- END REF-->

Hormis la prise en charge de tableaux (cf. ci-dessous), cette commande est identique à [DOM Create XML element](dom-create-xml-element.md). Reportez-vous à la description de cette commande pour le détail de son fonctionnement. 

Facultativement, la commande **DOM Create XML element arrays** permet de passer plusieurs couples d’attributs et de valeurs d’attributs sous forme de tableaux dans les paramètres *tabNomsAttributs* et *tabValeursAttributs*. Vous pouvez passer dans *tabValeursAttributs* des tableaux de type texte, date, numérique et image. 4D effectue automatiquement les conversions nécessaires, vous pouvez modifier ces conversions à l’aide de la commande [XML SET OPTIONS](xml-set-options.md). 

Les tableaux doivent avoir été créés au préalable et fonctionner par paires. Vous pouvez passer autant de couples de tableaux et autant d’éléments dans chaque couple que vous voulez. 

#### Exemple 

Nous souhaitons créer l'élément suivant :

```XML
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<RootElement>
   <Elem1>
      <Elem2>
         <Elem3 Font="Verdana" Size="10" Style="Bold"></Elem3>
      </Elem2>
   </Elem1>
</RootElement>
```

Pour cela, il suffit d'écrire :

```4d
 ARRAY TEXT(tNomsAtt;3)
 ARRAY TEXT(tValeursAtt;3)
 tNomsAtt{1}:="Font"
 tValeursAtt{1}:="Verdana"
 tNomsAtt{2}:="Size"
 tValeursAtt{2}:="10"
 tNomsAtt{3}:="Style"
 tValeursAtt{3}:="Bold"
 vRefRacine:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3"
 vRefElement:=DOM Create XML element arrays(vRefRacine;vxPath;tNomsAtt;tValeursAtt)
```

#### Voir aussi 

[DOM Create XML element](dom-create-xml-element.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1097 |
| Thread safe | &check; |
| Interdite sur le serveur ||


