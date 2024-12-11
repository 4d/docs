---
id: string
title: String
slug: /commands/string
displayed_sidebar: docs
---

<!--REF #_command_.String.Syntax-->**String** ( *expression* {; *format* {; *heureComb*}} ) : Text<!-- END REF-->
<!--REF #_command_.String.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| expression | Expression | &#8594;  | Expression à convertir en chaîne (peut être de type Réel, Entier, Entier long, Date, Heure, Alpha, Texte, Booléen, Indéfini ou Null) |
| format | Integer, Text | &#8594;  | Format d'affichage |
| heureComb | Time | &#8594;  | Heure à combiner si expression est une date |
| Résultat | Text | &#8592; | expression convertie en chaîne alphanumérique |

<!-- END REF-->

#### Description 

<!--REF #_command_.String.Summary-->La commande **String** retourne sous forme de chaîne alphanumérique l'expression de type numérique, Date, Heure, chaîne ou Booléen que vous avez passée dans le paramètre *expression*.<!-- END REF-->

Si vous ne passez pas le paramètre optionnel *format*, la chaîne est retournée dans le format par défaut du type de données correspondant. Si vous passez le paramètre *format*, vous pouvez définir suivant vos besoins le formatage de la chaîne retournée.

Le paramètre optionnel *heureComb* permet d'ajouter une heure à une date dans un format combiné. Il est utilisable uniquement lorsque le paramètre *expression* est une date (voir ci-dessous).

  
**Expressions numériques**  
Si *expression* est du type numérique (Réel, Entier, Entier long), vous pouvez passer le paramètre optionnel de formatage de la chaîne. Voici quelques exemples :

| **Exemple**                          | **Résultat**       | **Commentaire**                       |
| ------------------------------------ | ------------------ | ------------------------------------- |
| **String**(2^15)                     | "32768"            | Format par défaut                     |
| **String**(2^15;"### ##0 habitants") | "32 768 habitants" |                                       |
| **String**(1/3;"##0.00000")          | "0,33333"          |                                       |
| **String**(1/3)                      | "0,3333333333333"  | Format par défaut(\*)                 |
| **String**(Arctan(1)\*4)             | "3,14159265359"    | Format par défaut(\*)                 |
| **String**(Arctan(1)\*4;"##0.00")    | "3,14"             |                                       |
| **String**(-1;"&x")                  | "0xFFFFFFFF"       |                                       |
| **String**(-1;"&$")                  | "$FFFFFFFF"        |                                       |
| **String**(0 ?+ 7;"&x")              | "0x0080"           |                                       |
| **String**(0 ?+ 7;"&$")              | "$80"              |                                       |
| **String**(0 ?+ 14;"&x")             | "0x4000"           |                                       |
| **String**(0 ?+ 14;"&$")             | "$4000"            |                                       |
| **String**(50,3;"&xml")              | "50.3"             | Toujours "." comme séparateur décimal |
| **String**(Num(1=1);"Vrai;;Faux")    | "Vrai"             |                                       |
| **String**(Num(1=2);"Vrai;;Faux")    | "Faux"             |                                       |
| **String**(Log(-1))                  | ""                 | Nombre indéfini                       |
| **String**(1/0)                      | "INF"              | Nombre infini positif                 |
| **String**(-1/0)                     | "-INF"             | Nombre infini négatif                 |

(\*) A compter de 4D v14 R3, l'algorithme de conversion des réels en texte se base sur 13 chiffres significatifs (contre 15 dans les versions précédentes de 4D). 

Le format est défini de la même manière que pour un champ numérique dans un formulaire. Pour plus d'informations sur le formatage des numériques, reportez-vous à la section *Formats d'affichage* du manuel "Mode Développement" de 4D. Vous pouvez également passer le nom d'un style personnalisé dans *format*. Dans ce cas, le nom du style doit être précédé du caractère “|”.

  
**Expressions de type Date**  
Si *expression* est de type Date, la chaîne est retournée dans le format par défaut défini dans le système. Vous pouvez passer dans le paramètre *format* une des constantes décrites ci-dessous (thème *Formats d'affichage des dates*).

Dans ce cas, vous pouvez également passer une heure dans le paramètre *heureComb*. Ce paramètre vous permet de combiner une date et une heure afin de générer des marqueurs de temps conformes aux normes en vigueur (constantes ISO Date GMT et Date RFC 1123). Ces formats sont particulièrement utiles dans le contexte des traitements XML et Web. Le paramètre *heureComb* est utilisable uniquement lorsque le paramètre *expression* est une date. 

| Constante                   | Type        | Valeur | Comment                                                                                                                          |
| --------------------------- | ----------- | ------ | -------------------------------------------------------------------------------------------------------------------------------- |

| Blank if null date          | Entier long | 100    | À ajouter à la constante format. Indique que dans le cas d'une valeur nulle, 4D doit retourner une chaîne vide au lieu de zéros. |
| Date RFC 1123               | Entier long | 10     | Fri, 10 Sep 2010 13:07:20 GMT                                                                                                    |
| Internal date abbreviated   | Entier long | 6      | 29 déc 2006                                                                                                                      |
| Internal date long          | Entier long | 5      | 29 décembre 2006                                                                                                                 |
| Internal date short         | Entier long | 7      | 29/12/2006                                                                                                                       |
| Internal date short special | Entier long | 4      | 06/12/06 (mais 06/12/1896 ou 06/12/2096)                                                                                         |
| ISO Date                    | Entier long | 8      | 2006-06-12T00:00:00                                                                                                              |
| ISO Date GMT                | Entier long | 9      | 2010-09-13T16:11:53Z                                                                                                             |
| System date abbreviated     | Entier long | 2      | mer. 25 déc. 2006                                                                                                                |
| System date long            | Entier long | 3      | mercredi 6 décembre 2006                                                                                                         |
| System date short           | Entier long | 1      | 06/12/2006                                                                                                                       |

**Note :** Les formats peuvent varier en fonction des paramétrages système.

Voici quelques exemples de formats simples (en supposant que la date du jour est le jeudi 5 mars 2009) :

```4d
 $vsRésultat:=String(Date du jour) //$vsRésultat prend la valeur "05/03/09"
 $vsRésultat:=String(Date du jour;Interne date long) //$vsRésultat prend la valeur "5 Mars 2009"
 $vsRésultat:=String(Date du jour;ISO Date GMT) //$vsRésultat prend la valeur "2009-03-04T23:00:00" en France
```

**Notes sur les formats combinés date/heure :**

* Le format ISO Date GMT correspond à la norme ISO8601, contenant une date et une heure en tenant compte de la zone de fuseau horaire (heure GMT).  
```4d  
 $madate:=String(Date du jour;ISO Date GMT;Heure courante) // retourne par exemple 2010-09-13T16:11:53Z  
```  
    
A noter le caractère "Z" final qui indique le format GMT.  
Si vous ne passez pas le paramètre *heureComb*, la commande retourne la date à minuit heure locale exprimée en heure GMT, ce qui peut entraîner un décalage :  
```4d  
 $madate:=String(!13/09/2010!;ISO Date GMT) // retourne 2010-09-12T22:00:00Z en France  
```
* Le format ISO Date est semblable au format ISO Date GMT, à la différence près qu'il exprime la date et l'heure sans tenir compte de la zone de fuseau horaire. A noter que ce format n'étant pas conforme à la norme ISO8601, son utilisation est à réserver à des usage très spécifiques.  
```4d  
 $madate:=String(!13/09/2010!;ISO Date) // retourne 2010-09-13T00:00:00 quel que soit le fuseau horaire  
 $madate:=String(Date du jour;ISO Date;Heure courante) // retourne 2010-09-13T18:11:53  
```
* Le format Date RFC 1123 permet de formater un ensemble date/heure suivant la norme définie par les RFC 822 et 1123\. Ce format est nécessaire par exemple pour fixer la date d'expiration des cookies dans un en-tête HTTP.  
```4d  
 $madate:=String(Date du jour;Date RFC 1123;Heure courante) // retourne par exemple Fri, 10 Sep 2010 13:07:20 GMT  
```  
    
L'heure est exprimée en tenant compte de la zone de fuseau horaire (heure GMT). Si vous passez uniquement une date, la commande retourne la date à minuit heure locale exprimée en heure GMT, ce qui peut entraîner un décalage :  
```4d  
 $madate:=String(Date du jour;Date RFC 1123) // retourne Thu, 09 Sep 2010 22:00:00 GMT  
```

  
**Expressions de type Heure**  
Si *expression* est de type Heure, la chaîne est retournée dans le format par défaut *hh:mm:ss*. Vous pouvez passer dans le paramètre *format* une des constantes suivantes (thème *Formats d'affichage des heures*) : 

| Constante                    | Type        | Valeur | Comment                                                                                                                                                                                                                                        |
| ---------------------------- | ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Blank if null time           | Entier long | 100    | À ajouter à la constante format. Indique que dans le cas d'une valeur nulle, 4D doit retourner une chaîne vide au lieu de zéros.                                                                                                               |
| HH MM                        | Entier long | 2      | 01:02                                                                                                                                                                                                                                          |
| HH MM AM PM                  | Entier long | 5      | 1:02 du matin                                                                                                                                                                                                                                  |
| HH MM SS                     | Entier long | 1      | 01:02:03                                                                                                                                                                                                                                       |
| Hour min                     | Entier long | 4      | 1 heure 2 minutes                                                                                                                                                                                                                              |
| Hour min sec                 | Entier long | 3      | 1 heure 2 minutes 3 secondes                                                                                                                                                                                                                   |
| ISO time                     | Entier long | 8      | 0000-00-00T01:02:03\. Correspond à la norme ISO8601, contenant en principe une date et une heure. Comme ce format ne prend pas en charge les dates/heures combinées, la partie date est remplie avec des 0\. Ce format exprime l'heure locale. |
| Min sec                      | Entier long | 7      | 62 minutes 3 secondes                                                                                                                                                                                                                          |
| MM SS                        | Entier long | 6      | 62:03                                                                                                                                                                                                                                          |
| System time long             | Entier long | 11     | 1:02:03 AM HNEC (Mac uniquement)                                                                                                                                                                                                               |
| System time long abbreviated | Entier long | 10     | 1•02•03 AM (Mac uniquement)                                                                                                                                                                                                                    |
| System time short            | Entier long | 9      | 01:02:03                                                                                                                                                                                                                                       |

**Notes :**

* Le format ISO Time correspond à la norme ISO8601, contenant en principe une date et une heure. Ce format ne prenant pas en charge les dates/heures combinées, la partie date est remplie avec des 0\. Ce format exprime l'heure locale.
* La constanteBlank if null time doit être additionnée au format, elle indique qu'en cas de valeur nulle 4D doit retourner une chaîne vide au lieu de zéros.

Voici quelques exemples (en supposant qu'il soit 17h30 et 45 secondes) :

```4d
 $vsRésultat:=String(Heure courante) // $vsRésultat prend la valeur "17:30:45"
 $vsRésultat:=String(Heure courante;Heures Minutes Secondes)
  // $vsRésultat prend la valeur "17 heures 30 minutes 45 secondes"
```

  
**Expressions de type chaîne**  
Si *expression* est de type Alpha ou Texte, la commande retourne la même valeur que celle passée en paramètre. Ce fonctionnement est utile notamment dans le cadre d’une programmation générique utilisant des pointeurs.  
Dans ce cas, le paramètre *format*, s'il est passé, est ignoré.

  
**Expressions de type Booléen**  
Si *expression* est de type Booléen, la commande retourne la chaîne “Vrai” ou “Faux” dans la langue de l’application (“True” ou “False” dans une version anglaise de 4D).  
Dans ce cas, le paramètre *format*, s'il est passé, est ignoré.

#### Voir aussi 

[Bool](bool.md)  
[Date](date.md)  
[Num](num.md)  
[Time string](time-string.md)  
[Timestamp](timestamp.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 10 |
| Thread safe | &check; |
| Interdite sur le serveur ||


