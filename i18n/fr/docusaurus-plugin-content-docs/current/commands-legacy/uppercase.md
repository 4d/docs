---
id: uppercase
title: Uppercase
slug: /commands/uppercase
displayed_sidebar: docs
---

<!--REF #_command_.Uppercase.Syntax-->**Uppercase** ( *laChaîne* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Uppercase.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laText | Text | &#8594;  | Chaîne à convertir en majuscules |
| * | Opérateur | &#8594;  | Si passé : conserver les accents Si omis : supprimer les accents |
| Résultat | Text | &#8592; | chaîne en majuscules |

<!-- END REF-->

#### Description 

<!--REF #_command_.Uppercase.Summary-->**Uppercase** retourne une chaîne de caractères égale à *laChaîne* dont tous les caractères alphabétiques ont été convertis en majuscules.<!-- END REF-->

Le paramètre facultatif *\**, s'il est passé, indiqueque les éventuels caractères accentués présents dans *laChaîne* doivent être retournés sous forme de majuscules accentuées. Par défaut, lorsque ce paramètre est omis, les caractères accentués “perdent” leur accent une fois la conversion effectuée. 

#### Exemple 1 

Cet exemple compare les résultats obtenus suivant que le paramètre \* a été passé ou non :

```4d
 $lachaine:=Uppercase("hélène") // $lachaine vaut « HELENE »
 $lachaine:=Uppercase("hélène";*) // $lachaine vaut « HÉLÈNE »
```

#### Exemple 2 

Reportez-vous à l'exemple de [Lowercase](lowercase.md).

#### Voir aussi 

[Lowercase](lowercase.md)  