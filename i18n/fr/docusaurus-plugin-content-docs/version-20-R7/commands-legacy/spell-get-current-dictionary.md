---
id: spell-get-current-dictionary
title: SPELL Get current dictionary
slug: /commands/spell-get-current-dictionary
displayed_sidebar: docs
---

<!--REF #_command_.SPELL Get current dictionary.Syntax-->**SPELL Get current dictionary**  : Integer<!-- END REF-->
<!--REF #_command_.SPELL Get current dictionary.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | ID du dictionnaire utilisé pour la correction orthographique |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SPELL Get current dictionary.Summary-->La commande **SPELL Get current dictionary** retourne le numéro d’ID du dictionnaire en cours d’utilisation.<!-- END REF--> 

#### Exemple 

On souhaite afficher la langue du dictionnaire courant : 

```4d
  // Liste des dictionnaires chargés
 SPELL GET DICTIONARY LIST($IDs_al;$Codes_at;$Noms_at)
 $curLangCode:=SPELL Get current dictionary
 $countryName:=$Noms_at{Find in array($IDs_al;$curLangCode)}
  // Affichage du message
 ALERT("Dictionnaire courant : "+$countryName) // Espagnol
```

#### Voir aussi 

[SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md)  