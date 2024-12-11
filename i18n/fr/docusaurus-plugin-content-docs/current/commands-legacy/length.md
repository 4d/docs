---
id: length
title: Length
slug: /commands/length
displayed_sidebar: docs
---

<!--REF #_command_.Length.Syntax-->**Length** ( *chaîne* ) : Integer<!-- END REF-->
<!--REF #_command_.Length.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| chaîne | Text | &#8594;  | Chaîne dont vous voulez connaître la longueur |
| Résultat | Integer | &#8592; | Nombre de caractères de chaîne |

<!-- END REF-->

#### Description 

<!--REF #_command_.Length.Summary-->**Length** vous permet d'obtenir la longueur de *laChaîne*.<!-- END REF-->retourne le nombre de caractères alphanumériques contenus dans *laChaîne*.

**Note :** En mode Unicode, si vous souhaitez vérifier qu'une chaîne ne contient aucun caractère, y compris des caractères ignorables, vous devez utiliser le test Si(Longueur(vTexte)=0) plutôt que Si(vTexte=""). En effet, si la chaîne contient par exemple Caractere(1) qui est un caractère ignorable, Longueur(vTexte) retourne bien 1 mais vTexte="" retourne Vrai.

#### Exemple 

L'exemple suivant illustre l'utilisation de **Length**. Les valeurs retournées sont assignées à la variable *vRésultat*. Les commentaires fournissent la valeur de *vRésultat* :

```4d
 vRésultat:=Length("Topaze") // vRésultat prend la valeur 6
 vRésultat:=Length("Citoyen") // vRésultat prend la valeur 7
```


#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 16 |
| Thread safe | &check; |
| Interdite sur le serveur ||


