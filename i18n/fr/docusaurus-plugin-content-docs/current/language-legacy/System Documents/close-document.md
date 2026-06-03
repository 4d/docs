---
id: close-document
title: CLOSE DOCUMENT
slug: /commands/close-document
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE DOCUMENT.Syntax-->**CLOSE DOCUMENT** ( *docRef* : Time )<!-- END REF-->
<!--REF #_command_.CLOSE DOCUMENT.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Numéro de référence du document |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.CLOSE DOCUMENT.Summary-->**CLOSE DOCUMENT** ferme le document spécifié par *docRef*.<!-- END REF-->

Fermer un document est le seul moyen de s'assurer que les données écrites dans le fichier sont sauvegardées. Vous devez fermer tous les documents ouverts par les commandes [Open document](../commands/open-document), [Create document](../commands/create-document) et [Append document](../commands/append-document).

## Exemple 

L'exemple suivant permet à l'utilisateur de créer un nouveau document, écrit la chaîne “Bonjour”, puis le referme :

```4d
 var vDoc : Time
 vDoc:=Create document("")
 If(OK=1)
    SEND PACKET(vDoc;"Bonjour") // Ecrire un mot dans le document
    CLOSE DOCUMENT(vDoc) // Fermer le document
 End if
```

## Voir aussi 

[Append document](../commands/append-document)  
[Create document](../commands/create-document)  
[Open document](../commands/open-document)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 267 |
| Thread safe | yes |


