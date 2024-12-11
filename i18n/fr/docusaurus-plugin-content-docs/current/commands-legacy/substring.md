---
id: substring
title: Substring
slug: /commands/substring
displayed_sidebar: docs
---

<!--REF #_command_.Substring.Syntax-->**Substring** ( *source* ; àPartirDe {; *nbCars*} ) : Text<!-- END REF-->
<!--REF #_command_.Substring.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| source | Text | &#8594;  | Chaîne de laquelle extraire une sous-chaîne |
| àPartirDe | Integer | &#8594;  | Position du premier caractère |
| nbCars | Integer | &#8594;  | Nombre de caractères à extraire |
| Résultat | Text | &#8592; | Sous-chaîne de source |

<!-- END REF-->

#### Description 

<!--REF #_command_.Substring.Summary-->La fonction **Substring** retourne la partie de *source* délimitée par les paramètres *àPartirDe* et *nbCars*.<!-- END REF--> 

Le paramètre *àPartirDe* indique le premier caractère de la chaîne à retourner, et *nbCars* définit le nombre de caractères à retourner.

Si *nbCars* n'est pas défini ou si le total de *àPartirDe* plus *nbCars* est supérieur au nombre de caractères de la chaîne *source*, **Substring** retourne tous les caractères de la chaîne à partir du caractère spécifié par *àPartirDe*. Si *àPartirDe* est supérieur au nombre de caractères de la chaîne, **Substring** retourne une chaîne vide ("").

**Attention :** Si vous utilisez cette commande dans un contexte de texte multistyle, il est nécessaire de convertir les éventuels caractères de fin de ligne Windows ('\\r\\n') en caractères de fin de ligne simples ('\\r') afin que les traitements soient valides. Ce principe est lié au mécanisme de normalisation des fins de lignes de 4D assurant la compatibilité de multi-plate-forme des textes. Pour plus d'informations, reportez-vous au paragraphe *Normalisation automatique des fins de lignes*.

#### Exemple 1 

L'exemple suivant illustre l'utilisation de **Substring**. Les résultats sont assignés à la variable *vRésultat*. Les commentaires fournissent la valeur de *vRésultat* :

```4d
 vRésultat:=Substring("08/04/62";4;2) // vRésultat prend la valeur "04"
 vRésultat:=Substring("Important";1;6) // vRésultat prend la valeur "Import"
 vRésultat:=Substring(var;2) // vRésultat retourne tous les caractères sauf le premier
```

#### Exemple 2 

La méthode projet suivante ajoute au tableau de type texte ou alpha, dont le pointeur est passé en second paramètre, les paragraphes tirés du texte passé en premier paramètre :

```4d
  // EXTRAIRE PARAGRAPHES
  // EXTRAIRE PARAGRAPHES ( Texte ; Pointeur )
  // EXTRAIRE PARAGRAPHES ( Texte à étudier ; -> Tableau de paragraphes )
 
 var $1 : Text
 var $2 : Pointer
 
 $vlElem:=Size of array($2->)
 Repeat
    $vlElem:=$vlElem+1
    INSERT IN ARRAY($2->;$vlElem)
    $vlPos:=Position(Char(Carriage return);$1)
    If($vlPos>0)
       $2->{$vlElem}:=Substring($1;1;$vlPos-1)
       $1:=Substring($1;$vlPos+1)
    Else
       $2->{$vlElem}:=$1
    End if
 Until($1="")
```

#### Voir aussi 

[Position](position.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 12 |
| Thread safe | &check; |
| Interdite sur le serveur ||


