---
id: dom-create-xml-element
title: DOM Create XML element
slug: /commands/dom-create-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Create XML element.Syntax-->**DOM Create XML element** ( *refElément* ; *xPath* {; *nomAttribut* ; *valeurAttribut*} {; *nomAttribut2* ; *valeurAttribut2* ; ... ; *nomAttributN* ; *valeurAttributN*} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Create XML element.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| refElément | Text | &#8594;  | Référence d’élément XML racine |
| xPath | Text | &#8594;  | Chemin XPath de l’élément XML à créer |
| nomAttribut | Text | &#8594;  | Attribut à définir |
| valeurAttribut | Text, Boolean, Integer, Real, Time, Date | &#8594;  | Nouvelle valeur d’attribut |
| Résultat | Text | &#8592; | Référence de l’élément XML créé |

<!-- END REF-->

#### Description 

<!--REF #_command_.DOM Create XML element.Summary-->La commande **DOM Create XML element** permet de créer un nouvel élément dans l’élément XML *refElément*, à l’emplacement du noeud désigné par le paramètre *xPath*, et de lui ajouter éventuellement des attributs.<!-- END REF-->

Passez dans *refElément* la référence de l’élément racine (créé par exemple à l’aide de la commande [DOM Create XML Ref](dom-create-xml-ref.md)).

Passez dans *xPath* le chemin de l’élément à créer, exprimé à l'aide de la notation XPath (pour plus d'informations, reportez-vous à la section *Utilisation de la notation XPath*). Les expressions de chemin suivantes sont prises en charge :

| **Expression** | **Action**                                         |
| -------------- | -------------------------------------------------- |
| /              | Désinge le noeud racine (chemin absolu)            |
| para\[1\]      | Désigne le premier para enfant du noeud contextuel |
| para\[last()\] | Désigne le dernier para enfant du noeud contextuel |

**Note de compatibilité :** *A partir de v18 R3, la conformité de l'implémentation de XPath dans 4D est renforcée. Pour des raisons de compatibilité, l'implémentation antérieure non standard est maintenue par défaut dans les bases converties. Si vous souhaitez obtenir les fonctionnalités avancées dans vos bases converties, vous devez cocher l'option de compatibilité *Utiliser XPath standard* de la* **Page Compatibilité.* 

Il est possible de passer directement dans *xPath* un nom d'élément simple afin de créer un sous-élément à partir de l'élément courant (cf. exemple 3).

Si des éléments de chemin n'existent pas, ils sont alors créés. Si les éléments de chemin existent déjà, un nouveau noeud est ajouté.

**Note :** Si vous avez défini un ou plusieurs espace(s) de nommage pour l’arbre désigné par *refElément* (cf. commande [DOM Create XML Ref](dom-create-xml-ref.md)), vous devez préfixer le paramètre *xPath* du nom de l’espace à utiliser (par exemple “MonNameSpace:MonElément”).

Vous pouvez passer dans les paramètres facultatifs *nomAttribut* et *valeurAttribut* un couple attribut / valeur d’attribut (sous forme de variables, champs ou valeurs littérales). Vous pouvez passer autant de couples que vous voulez.   
  
Le paramètre *valeurAttribut* peut être de type texte ou d'un autre type (booléen, entier, réel, heure ou date). Si vous passez une valeur d'un type autre que texte, 4D se charge de la conversion en texte, selon les principes suivants :

| **Type** | **Exemple de valeur convertie**                  |
| -------- | ------------------------------------------------ |
| Booléen  | "true" ou "false" (non traduit)                  |
| Entier   | "123456"                                         |
| Réel     | "12.34" (le séparateur décimal est toujours ".") |
| Heure    | "5233" (nombre de secondes)                      |
| Date     | "2006-12-04T00:00:00Z" (norme RFC 3339)          |

La commande retourne en résultat la référence XML de l’élément créé.

#### Exemple 1 

Nous souhaitons créer l’élément suivant : 

```RAW
                                      
```

Pour cela, il suffit d’écrire :

```4d
 var vRefRacine;vRefElement : Text
 vRefRacine:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3[2]"
 vRefElement:=DOM Create XML element(vRefRacine;vxPath)
```

#### Exemple 2 

Nous souhaitons créer l’élément suivant (comportant des attributs) : 

```RAW
                                      
```

Pour cela, il suffit d’écrire :

```4d
 var vRefRacine;vRefElement : Text
   var $aAttrNom1;$aAttrNom2;$aAttrVal1;$aAttrVal2;$aAttrVal3 : Text

$aAttrNom1:="Font"
 $aAttrNom2:="Size"
 $aAttrVal1:="Verdana"
 $aAttrVal2:="10"
 $aAttrVal3:="8"
 
 vRefRacine:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3"
 vRefElement:=DOM Create XML element(vRefRacine;vxPath;$aAttrNom1;$aAttrVal1;$aAttrNom2;$aAttrVal2)
 vRefElement:=DOM Create XML element(vRefRacine;vxPath;$aAttrNom1;$aAttrVal1;$aAttrNom2;$aAttrVal3)


```

Si par la suite vous souhaitez insérer un élément, vous pouvez saisir le code suivant : 

```4d
 vxPath:="/RootElement/Elem1/Elem2/Elem3[2]" 
 vElemRef:=DOM Creer element XML(vRefRacine;vxPath;"Font";"Arial")
```

Vous obtenez alors :

```RAW
                                                
```

#### Exemple 3 

Nous souhaitons créer et exporter la structure suivante : 

```XML
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<Racine>
   <Elem1>Hello</Elem1>
</Racine>
```

Nous souhaitons utiliser la syntaxe basée sur un nom d'élément simple. Pour cela, il suffit d’écrire :

```4d
 var $root : Text
 var $ref1 : Text
 
 $root:=DOM Create XML Ref("Racine")
 $ref1:=DOM Create XML element($root;"Elem1")
 DOM SET XML ELEMENT VALUE($ref1;"Hello")
 DOM EXPORT TO FILE($root;"mondoc.xml")
 DOM CLOSE XML($root)
```

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est générée. 

#### Gestion des erreurs 

Une erreur est générée lorsque :

* la référence de l’élément racine n’est pas valide
* le nom de l’élément à créer n’est pas valide (par exemple, s’il débute par un chiffre).

#### Voir aussi 

[DOM Create XML element arrays](dom-create-xml-element-arrays.md)  
[DOM Get XML element](dom-get-xml-element.md)  
[DOM REMOVE XML ELEMENT](dom-remove-xml-element.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 865 |
| Thread safe | &check; |
| Modifie les variables | OK, error |
| Interdite sur le serveur ||


