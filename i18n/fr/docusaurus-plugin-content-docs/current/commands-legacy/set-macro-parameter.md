---
id: set-macro-parameter
title: SET MACRO PARAMETER
slug: /commands/set-macro-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SET MACRO PARAMETER.Syntax-->**SET MACRO PARAMETER** ( *sélecteur* ; *paramTexte* )<!-- END REF-->
<!--REF #_command_.SET MACRO PARAMETER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| sélecteur | Integer | &#8594;  | Sélection à utiliser |
| paramText | Text | &#8594;  | Texte envoyé |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SET MACRO PARAMETER.Summary-->La commande **SET MACRO PARAMETER** insère le texte *paramTexte* dans la méthode depuis laquelle elle a été appelée.<!-- END REF-->

Si du texte était sélectionné dans la méthode, le paramètre *sélecteur* permet de définir si le texte *paramTexte* doit remplacer la totalité de la méthode ou uniquement le texte sélectionné. Vous pouvez passer dans *sélecteur* l’une des constantes suivantes, placées dans le thème “*Environnement 4D*” :

| Constante               | Type        | Valeur |
| ----------------------- | ----------- | ------ |
| Full method text        | Entier long | 1      |
| Highlighted method text | Entier long | 2      |

Si aucun texte n’était sélectionné, *paramTexte* est inséré dans la méthode.

#### Note 

 Pour que les commandes [GET MACRO PARAMETER](get-macro-parameter.md) et **SET MACRO PARAMETER** fonctionnent correctement, l'attribut “version” doit être déclaré dans la macro elle-même, de la façon suivante :

```xml
<macro name="MaMacro" version="2">
--- Texte de la macro ---
</macro>
```

#### Exemple 

Cette macro construit un nouveau texte qui sera retourné à la méthode appelante

```4d
 var $texte_entrée : Text
 var $texte_sortie : Text
 GET MACRO PARAMETER(Highlighted method text;$texte_entrée)
  //Supposons que le texte sélectionné est une table, i.e. “[Clients]”
 $texte_sortie:=""
 $texte_sortie:=$texte_sortie+Command name(47)+"("+$texte_entrée+")" // Tout sélectionner ([Clients])
 $texte_sortie:=$texte_sortie+"$i:="+Command name(76)+"("+$texte_entrée+")" // $i:=Enregistrements trouves([Clients])
 SET MACRO PARAMETER(Highlighted method text;$texte_sortie)
  //On remplace le texte sélectionné par le nouveau code
```

#### Voir aussi 

[GET MACRO PARAMETER](get-macro-parameter.md)  