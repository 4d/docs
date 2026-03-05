---
id: system-folder
title: System folder
slug: /commands/system-folder
displayed_sidebar: docs
---

<!--REF #_command_.System folder.Syntax-->**System folder** {( *type* )} : Text<!-- END REF-->
<!--REF #_command_.System folder.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| type | Integer | &#8594;  | Type de dossier système |
| Résultat | Text | &#8592; | Chemin d’accès d’un dossier du système actif |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|19 R8|Modifié|
|13|Modifié|
|11 SQL Release 4|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.System folder.Summary-->La fonction **System folder** retourne le chemin d'accès du dossier Système Windows ou macOS actif, ou le chemin d’accès d’un dossier particulier du système d'exploitation.<!-- END REF-->

Le paramètre optionnel *type* vous permet d’indiquer le type de dossier dont vous souhaitez obtenir le chemin d'accès. Si vous ne passez pas ce paramètre, **System folder** retourne le chemin d’accès du dossier Système Windows ou Mac OS actif.   
Vous passez dans *type* un code représentant le type de dossier. 4D fournit les constantes prédéfinies suivantes (placées dans le thème "*Dossier Système*") :

| Constante                     | Type        | Valeur | Comment                                                                               |
| ----------------------------- | ----------- | ------ | ------------------------------------------------------------------------------------- |
| Applications or program files | Entier long | 16     |                                                                                       |
| Desktop                       | Entier long | 15     |                                                                                       |
| Documents folder              | Entier long | 17     | Dossier "Documents" de l’utilisateur                                                  |
| Favorites Win                 | Entier long | 14     |                                                                                       |
| Fonts                         | Entier long | 1      |                                                                                       |
| Home folder                   | Entier long | 18     | Dossier personnel courant de l'utilisateur (généralement "/Users/<nom utilisateur>/") |
| Start menu Win\_all           | Entier long | 8      |                                                                                       |
| Start menu Win\_user          | Entier long | 9      |                                                                                       |
| Startup Win\_all              | Entier long | 4      |                                                                                       |
| Startup Win\_user             | Entier long | 5      |                                                                                       |
| System                        | Entier long | 0      |                                                                                       |
| System Win                    | Entier long | 12     |                                                                                       |
| System32 Win                  | Entier long | 13     |                                                                                       |
| User preferences\_all         | Entier long | 2      |                                                                                       |
| User preferences\_user        | Entier long | 3      |                                                                                       |

**Notes :**

* Les constantes suffixées **Win** sont réservées à une utilisation sous Windows. Lorsqu’elles sont utilisées sous macOS, **System folder** retourne une chaîne vide.
* L’emplacement de certains dossiers peut être différent suivant le type de session ouverte par l’utilisateur. Les constantes 2 à 9 permettent de choisir si vous souhaitez obtenir le chemin d’accès du dossier spécifique à l’utilisateur courant (constantes simples) ou commun à tous les utilisateurs (constantes suivies de “Tous”).

## Voir aussi 

[Get 4D folder](../commands/get-4d-folder)  
[Temporary folder](../commands/temporary-folder)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 487 |
| Thread safe | yes |


