---
id: date
title: Date
slug: /commands/date
displayed_sidebar: docs
---

<!--REF #_command_.Date.Syntax-->**Date** ( *expression* ) : Date<!-- END REF-->
<!--REF #_command_.Date.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| expression | Text, Date | &#8594;  | Chaîne contenant la date à retourner ou expression de type Date |
| Résultat | Date | &#8592; | Expression de type Date |

<!-- END REF-->

#### Description 

<!--REF #_command_.Date.Summary-->La fonction **Date** extrait et retourne la date de la chaîne *expression*.<!-- END REF-->

Le paramètre expression doit respecter soit le format date ISO, soit les paramètres régionaux du système.

**Format Date ISO**  
La chaîne doit être formatée de la manière suivante : "AAAA-MM-JJ**T**HH:MM:SS", par exemple "2013-11-20T10:20:00". Dans ce cas, **Date** évaluera correctement expression, quels que soient les réglages de langue courants. Les décimales de secondes, précédées d'un point, sont prises en charge (ex : "2013-11-20T10:20:00.9854").   
Si le format de expression ne respecte pas exactement ce format ISO, la date sera évaluée comme un format date court dépendant des paramètres régionaux du système.

**Note :** A compter de 4D v14, il est conseillé d'utiliser le format "AAAA-MM-JJTHH:MM:SS**Z**", conforme à la norme ISO et permettant d'exprimer le fuseau horaire.

**Paramètres régionaux**  
Si expression ne correspond pas au format ISO, les paramètres régionaux définis dans le système d'exploitation pour une date courte sont utilisés pour l'évaluation. Par exemple, dans une version française de 4D, la date doit être par défaut de la forme JJ/MM/AA (jour, mois, année). Le jour et le mois peuvent être composés d'un ou deux chiffres. L'année peut être composée de deux ou quatre chiffres. Si l'année comporte deux chiffres, **Date** considère que la date appartient au XXe ou au XXIe siècle en fonction de la valeur saisie. Par défaut, la valeur pivot est 30 :

* si la valeur saisie est supérieure ou égale à 30, 4D considère que la date appartient au XXe siècle et ajoute 19 devant la valeur.
* si la valeur saisie est inférieure à 30, 4D considère que la date appartient au XXIe siècle et ajoute 20 devant la valeur.

Ce mécanisme peut être modifié à l'aide de la commande [SET DEFAULT CENTURY](set-default-century.md).  
Les caractères de séparation de date autorisés sont les suivants : barre oblique (/), espace, point (.), virgule (,) et tiret (-).

* Si une date invalide (telle que "13/35/94" ou "aa/12/94") est passée dans expression, **Date** retourne une date vide (00/00/00). Il est de votre ressort de tester la validité de expression.
* Si l'évaluation de l'expression expression donne une valeur indéfinie, **Date** retourne une date vide (00/00/00). Ce principe est utile lorsque le code attend toujours une date et que l'évaluation de expression peut parfois aboutir au type **indéfini** (par exemple dans le cas des attributs d'objets).

**Note :** A compter de 4D v16 R6, les dates peuvent être stockées dans les attributs d'objets en tant que valeurs de type date. Dans les versions précédentes, elles pouvaient uniquement être stockées sous forme de textes (pour plus d'informations sur cette option, reportez-vous à la section *Page Compatibilité*, "Utiliser le type date au lieu du format date ISO dans les objets"). Pour savoir si un attribut contient une date stockée sous forme de date ou de texte, vous devez utiliser la commande [Value type](value-type.md) (voir dernier exemple).

**Expression de type date** 
Si expression est de type date, **Date** retourne la date passée dans le paramètre, telle quelle. Ce principe est utile en programmation générique, lors de l'utilisation de pointeurs ou d'attributs d'objets.

#### Exemple 1 

L'exemple suivant demande à l'utilisateur de saisir une date. La chaîne saisie est convertie en date et stockée dans la variable DemDate :

```4d
 DemDate:=Date(Demander("Saisissez une date :";Chaine(Date du jour)))
 If(OK=1)
  // Faire quelque chose avec la date
 End if
```

#### Exemple 2 

Les exemples suivants illustrent divers cas de conversion :

```4d
 vdDate:=Date("25/12/94") //retourne 25/12/94 sur un système français
 vdDate2:=Date("40/40/94") //00/00/00
 vdDate3:=Date("Nous étions le 30/6, en cette année 2016") //30/06/16
 var $vobj : Object
 $vobj:=New object("expDate";"2020-11-17T00:00:00.0000")
 vdDate4:=Date($vobj.expDate) //17/11/20
 vdDate5:=Date($vobj.creationDate) //00/00/00
```

#### Exemple 3 

Evaluation d'une date à partir d'une date au format ISO :

```4d
 $vtDateISO:="2013-06-05T20:00:00"
 $vDate:=Date($vtDateISO)
     //$vDate représente le 5 juin 2013 quelle que soit la langue du système
```

#### Exemple 4 

Vous souhaitez lire une date depuis un attribut d'objet, quelle que soit l'option courante de stockage d'attribut de date :

```4d
 If(Value type($myObj.myDate)=Is date) //stockage en date, pas besoin de convertir
    $vDate:=$myObj.myDate
 Else //stockage en texte
    $vDate:=Date($myObj.myDate)
 End if
```

#### Voir aussi 

[Bool](bool.md)  
[String](string.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 102 |
| Thread safe | &check; |


