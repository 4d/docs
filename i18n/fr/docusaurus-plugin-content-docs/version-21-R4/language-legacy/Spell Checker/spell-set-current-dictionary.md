---
id: spell-set-current-dictionary
title: SPELL SET CURRENT DICTIONARY
slug: /commands/spell-set-current-dictionary
displayed_sidebar: docs
---

<!--REF #_command_.SPELL SET CURRENT DICTIONARY.Syntax-->**SPELL SET CURRENT DICTIONARY** ( *dictionnaire* : Integer, Text )<!-- END REF-->
<!--REF #_command_.SPELL SET CURRENT DICTIONARY.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| dictionnaire | Integer, Text | &#8594;  | ID, Nom ou Code de langue du dictionnaire à utiliser pour la correction orthographique |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|14|Modifié|
|13|Renommé|
|13|Modifié|
|2004.5|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.SPELL SET CURRENT DICTIONARY.Summary-->La commande **SPELL SET CURRENT DICTIONARY** provoque le remplacement du dictionnaire courant par celui spécifié par le paramètre *dictionnaire*.<!-- END REF--> Le dictionnaire courant est utilisé pour la correction orthographique intégrée de 4D (pour plus d’informations, reportez-vous au manuel *Mode Développement*) ainsi qu'à celle de 4D Write Pro. La modification du dictionnaire courant est immédiatement répercutée dans tous les process de la base pour la session, ainsi que dans les zones 4D Write Pro. 

4D utilise :

* sous Windows, le dictionnaire Hunspell correspondant à la langue de l'application,
* par défaut sous macOS, le correcteur orthographique natif.

**Note :** Sous macOS, vous pouvez utiliser le dictionnaire Hunspell à l'aide de la commande [SET DATABASE PARAMETER](../commands/set-database-parameter). Pour plus d'informations, reportez-vous à la section *Configuration du correcteur* dans le manuel *Mode Développement*.

Vous pouvez changer de dictionnaire à l'aide du paramètre *dictionnaire*. Vous pouvez passer soit :

* un numéro d'ID de dictionnaire Hunspell (retourné par la commande [SPELL GET DICTIONARY LIST](../commands/spell-get-dictionary-list)),
* un nom de dictionnaire Hunspell (correspondant au nom du fichier de dictionnaire Hunspell avec ou sans extension),
* un code de langue BCP 47, ISO 639-1 ou ISO 639-2\. Par exemple, "fr-FR" désigne le français de France et "fr-BE" le français de Belgique avec le code de langue BCP 47\. Ces codes sont redirigés en interne vers le dictionnaire courant correspondant (Hunspell ou natif macOS).

**Note de compatibilité :** Dans les versions précédentes de 4D, les dictionnaires "Cordial" étaient également pris en charge. Par compatibilité, il reste possible de passer un numéro de dictionnaire "Cordial" dans le paramètre *dictionnaire* (valeur ou constante du thème "*Dictionnaires*"). Dans ce cas toutefois, le dictionnaire est redirigé en interne vers un dictionnaire Hunspell équivalent (ou le dictionnaire natif sous macOS). 

## Variables et ensembles système 

Si le *dictionnaire* est correctement chargé, la variable système OK prend la valeur 1, sinon elle prend la valeur 0 et une erreur est retournée. 

## Exemple 

Chargement du dictionnaire "fr-classique" présent dans le dossier Hunspell :

```4d
 SPELL SET CURRENT DICTIONARY("fr-classique")
     // SPELL FIXER DICTIONNAIRE COURANT("FR-classique.dic") est valide
```

## Voir aussi 

[SPELL CHECKING](../commands/spell-checking)  
[SPELL Get current dictionary](../commands/spell-get-current-dictionary)  
[SPELL GET DICTIONARY LIST](../commands/spell-get-dictionary-list)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 904 |
| Thread safe | no |
| Modifie les variables | OK |


