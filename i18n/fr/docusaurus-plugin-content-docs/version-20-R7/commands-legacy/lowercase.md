---
id: lowercase
title: Lowercase
slug: /commands/lowercase
displayed_sidebar: docs
---

<!--REF #_command_.Lowercase.Syntax-->**Lowercase** ( *laChaîne* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Lowercase.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laText | Text | &#8594;  | Chaîne à convertir en minuscules |
| * | Opérateur | &#8594;  | Si passé : conserver les accents Si omis : supprimer les accents |
| Résultat | Text | &#8592; | chaîne en minuscules |

<!-- END REF-->

#### Description 

<!--REF #_command_.Lowercase.Summary-->**Lowercase** retourne une chaîne de caractères égale à *laChaîne* dont tous les caractères alphabétiques ont été convertis en minuscules.<!-- END REF-->

Le paramètre facultatif *\**, s'il est passé, indique que les éventuels caractères accentués présents dans *laChaîne* doivent être retournés sous forme de minuscules accentuées. Par défaut, lorsque ce paramètre est omis, les caractères accentués “perdent” leur accent une fois la conversion effectuée. 

#### Exemple 1 

L'exemple suivant est une méthode projet qui met en majuscule (capitale) le premier caractère de la chaîne ou du texte qui lui est passé(e). Par exemple, Nom := Capitale ("jean") donnerait à Nom la valeur "Jean" :

```4d
  // Méthode projet Capitale
  // Capitale ( Chaîne ) -> Chaîne
  // Capitale ( Tout texte ou chaîne ) -> texte avec une lettre capitale
 
 $0:=Lowercase($1)
 If(Length($0)>0)
    $0[[1]]:=Uppercase($0[[1]])
 End if
```

#### Exemple 2 

Cet exemple compare les résultats obtenus suivant que le paramètre *\** a été passé ou non :

```4d
 $lachaine:=Lowercase("DÉJÀ VU") // $lachaine vaut « deja vu »
 $lachaine:=Lowercase("DÉJÀ VU";*) // $lachaine vaut « déjà vu »
```

#### Voir aussi 

[Uppercase](uppercase.md)  