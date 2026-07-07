---
id: char
title: Char
slug: /commands/char
displayed_sidebar: docs
---

<!--REF #_command_.Char.Syntax-->**Char** ( *codeCaractère* : Integer ) : Text<!-- END REF-->
<!--REF #_command_.Char.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| codeCaractère | Integer | &#8594;  | Code de caractère |
| Résultat | Text | &#8592; | Caractère représenté par codeCaractère |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Char.Summary-->La fonction **Char** retourne le caractère dont le code est *codeCaractère*.<!-- END REF-->

Passez une valeur UTF-16 (comprise entre 1 et 65535) dans *codeCaractère*.

**Astuce :** La fonction **Char** est généralement utilisée pour insérer dans l'éditeur de méthodes des caractères qui ne peuvent être saisis au clavier ou des caractères de contrôle.

## Exemple 

L'exemple suivant utilise la fonction **Char** pour insérer un retour chariot dans une boîte de dialogue d'alerte afin de séparer deux lignes d'information :

```4d
 ALERT("Employés : "+String(Enregistrements dans table([Employés]))+Caractere(Retour chariot)+"Cliquez sur OK pour continuer.")
```

## Voir aussi 

[Character code](../commands/character-code)  
*Codes Unicode*  
*Symboles d'indice de chaîne*  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 90 |
| Thread safe | yes |


