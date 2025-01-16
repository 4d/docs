---
id: num
title: Num
slug: /commands/num
displayed_sidebar: docs
---

<!--REF #_command_.Num.Syntax-->**Num** ( *expression* {; *séparateur*} ) : Real<!-- END REF-->
<!--REF #_command_.Num.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| expression | Text, Boolean, Integer | &#8594;  | Chaîne à convertir en numérique ou Booléen à convertir en 0 ou 1 ou Expression numérique |
| séparateur | Text | &#8594;  | Séparateur décimal |
| Résultat | Real | &#8592; | Valeur numérique du paramètre expression |

<!-- END REF-->

#### Description 

<!--REF #_command_.Num.Summary-->La fonction **Num** retourne sous forme de numérique l'expression de type chaîne, Booléen ou numérique que vous avez passée dans le paramètre *expression*.<!-- END REF--> Le paramètre facultatif *séparateur* permet de désigner un séparateur décimal pour l’évaluation des expressions de type chaîne. 

**Expressions de type chaîne**  
Si *expression* ne contient que des caractères alphabétiques, **Num** retourne zéro. Si *expression* contient des caractères alphabétiques et des caractères numériques, **Num** ignore les caractères alphabétiques. Ainsi, **Num** transformera la chaîne "a1b2c3" en nombre 123\. 

Il existe trois caractères réservés que **Num** traite de manière particulière. Il s'agit du séparateur décimal tel que défini dans le système (si le paramètre *séparateur* n'est pas passé), du tiret (-) et du *e* (ou E). Ils seront interprétés en tant que caractères de formatage des nombres :

* Le séparateur décimal est interprété en tant que tel et doit être inclus dans la chaîne de caractères numériques. Par défaut, la commande utilise le séparateur décimal défini dans le système d’exploitation. Vous pouvez modifier ce caractère à l'aide du paramètre *séparateur* (cf. ci-dessous).
* Le tiret définit un nombre ou un exposant négatif (signe moins). Le tiret doit être placé devant tout caractère numérique négatif ou derrière le e pour un exposant. Hormis le cas du caractère e, si le tiret est inclus dans une chaîne numérique, la partie de la chaîne se trouvant derrière le tiret est ignorée. Par exemple, Num("123-456") retourne 123, mais Num("-9") retourne -9.
* Le e ou E désigne tout caractère numérique se trouvant à sa droite comme étant la puissance d'un exposant. Le e doit être inclus dans une chaîne numérique. Ainsi, Num ("123e-2") retourne 1,23.  
A noter que dans le cas où la chaîne comporte plus d'un caractère e, la conversion pourra donner des résultats différents sous Mac OS et sous Windows.

Le paramètre *séparateur* permet de désigner un séparateur décimal personnalisé pour l’évaluation de *expression*. Lorsque la chaîne à évaluer est exprimée avec un séparateur décimal différent du séparateur système, la commande retourne un résultat incorrect. Le paramètre *séparateur* permet dans ce cas d’obtenir une évaluation correcte. Lorsque ce paramètre est passé, la commande ne tient pas compte du séparateur décimal système. Vous pouvez passer un ou plusieurs caractères.

**Note :** La commande [GET SYSTEM FORMAT](get-system-format.md) permet de connaître le séparateur décimal courant ainsi que plusieurs autres paramètres système régionaux.

**Expressions de type Booléen**  
Si vous passez une expression booléenne dans le paramètre *expression*, **Num** retourne 1 si *expression* est VRAI, sinon **Num** retourne 0.

**Expressions de type numérique**  
Si vous passez une expression numérique dans le paramètre *expression*, **Num** retourne telle quelle la valeur passée dans le paramètre *expression*. Ce fonctionnement est utile notamment dans le cadre d’une programmation générique utilisant des pointeurs.

**Expressions indéfinies**  
Si l'évaluation de *expression* donne une valeur indéfinie, **Num** retourne 0\. Ce fonctionnement est utile lorsque le code attend toujours un numérique alors que l'évaluation de *expression* peut parfois aboutir au type **indéfini** (cas par exemple des attributs d'objets).

#### Exemple 1 

L'exemple suivant illustre la manière dont Num fonctionne lorsqu'un argument de type chaîne lui est passé. A chaque ligne, un numérique est assigné à la variable *vRésultat*. Les commentaires décrivent les résultats :

```4d
 vRésultat:=Num("ABCD") // vRésultat vaut 0
 vRésultat:=Num("A1B2C3") // vRésultat vaut 123
 vRésultat:=Num("123") // vRésultat vaut 123
 vRésultat:=Num("123,4") // vRésultat vaut 123,4
 vRésultat:=Num("-123") // vRésultat vaut -123
 vRésultat:=Num("-123e2") // vRésultat vaut -12300
```

#### Exemple 2 

Dans l'exemple suivant, *\[Client\]Dette* est comparé à la valeur 1000\. La fonction Num appliquée à cette comparaison retourne 0 ou 1\. La multiplication d'une chaîne par 0 ou 1 retourne soit la chaîne, soit une chaîne vide. En définitive, le champ *\[Client\]Risque* reçoit la valeur “Acceptable” ou “Inacceptable” :

```4d
  // Si le client a des dettes inférieures à 1000, le risque est acceptable.
  // Si le client a des dettes supérieures à 1000, le risque est inacceptable.
 [Client]Risque:=("Acceptable"*Num([Client]Dettes<1000))+("Inacceptable"*Num([Client]Dettes>=1000))
```

#### Exemple 3 

Cet exemple compare les résultats obtenus en fonction du séparateur “courant” :

```4d
 $lachaine:="33,333.33"
 $lenum:=Num($lachaine)
  // par défaut, $lenum vaut 33,33333 sur un système français
 $lenum:=Num($lachaine;".")
  // $lenum vaut bien 33 333,33 quel que soit le système
```

#### Voir aussi 

[Bool](bool.md)  
[GET SYSTEM FORMAT](get-system-format.md)  
[String](string.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 11 |
| Thread safe | &check; |


