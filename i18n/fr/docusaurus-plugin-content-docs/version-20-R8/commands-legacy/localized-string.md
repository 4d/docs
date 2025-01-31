---
id: localized-string
title: Localized string
slug: /commands/localized-string
displayed_sidebar: docs
---

<!--REF #_command_.Localized string.Syntax-->**Localized string** ( *resName* ) : Text<!-- END REF-->
<!--REF #_command_.Localized string.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| resName | Text | &#8594;  | Nom d’attribut resname |
| Résultat | Text | &#8592; | Valeur de la chaîne désignée par resName dans le langage courant |

<!-- END REF-->

#### Description 

<!--REF #_command_.Localized string.Summary-->La commande **Localized string** retourne la valeur de la chaîne désignée par l’attribut *resName* pour la langue courante.<!-- END REF--> 

Cette commande fonctionne uniquement dans le cadre d’une architecture XLIFF. Pour plus d’informations sur ce type d'architecture, reportez-vous à la description de la prise en charge du XLIFF dans le manuel *Mode Développement*.

**Note :** La commande [Get database localization](get-database-localization.md) permet de connaître la langue utilisée par l’application.

Passez dans *resName* le nom de ressource de la chaîne dont vous voulez obtenir la traduction dans la langue cible courante (target).

A noter que le XLIFF est diacritique.

#### Exemple 

Voici un extrait de fichier .xlf :

```XML
<file source-language="en-US" target-language="fr-FR">
   [...]
   <trans-unit resname="Show on disk">
      <source>Show on disk</source>
      <target>Montrer sur le disque</target>
   </trans-unit>
```

Après exécution de l’instruction suivante :

```4d
 $valeurFR:=Localized string("Show on disk")
```

... si la langue courante est le français, $valeurFR contient “Montrer sur le disque”.

#### Variables et ensembles système 

Si la commande a été exécutée correctement, la variable OK prend la valeur 1\. Si *resName* n’est pas trouvé, la commande retourne une chaîne vide et la variable OK prend la valeur 0.

#### Voir aussi 

[Get database localization](get-database-localization.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 991 |
| Thread safe | &check; |
| Modifie les variables | OK |


