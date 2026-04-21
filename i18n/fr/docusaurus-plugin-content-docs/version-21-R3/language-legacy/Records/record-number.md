---
id: record-number
title: Record number
slug: /commands/record-number
displayed_sidebar: docs
---

<!--REF #_command_.Record number.Syntax-->**Record number** {( *laTable* )} : Integer<!-- END REF-->
<!--REF #_command_.Record number.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle vous souhaitez obtenir le numéro de l'enregistrement courant ou Table par défaut si ce paramètre est omis |
| Résultat | Integer | &#8592; | Numéro d'enregistrement courant |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.Record number.Summary-->**Record number** retourne le numéro de l'enregistrement courant de *laTable*.<!-- END REF--> S'il n'y a pas d'enregistrement courant, par exemple si le pointeur d'enregistrement se trouve avant ou après la sélection courante, **Record number** retourne -1 (constante `No current record`). S'il s'agit d'un nouvel enregistrement qui n'a pas encore été sauvegardé, **Record number** retourne -3 (constante `New record`).

Les numéros d'enregistrements peuvent varier. Par exemple, les numéros des enregistrements supprimés sont réutilisés. 

**4D Server :** Cette commande retourne un résultat différent dans le contexte de l'événement formulaire On Validate suivant qu'elle est exécutée sur 4D en mode local ou 4D en mode distant. En mode local, la commande retourne un numéro d'enregistrement (l'enregistrement est considéré comme déjà créé). En mode distant, la commande retourne -3 (constante `New record`) car dans ce cas, l'enregistrement est également déjà créé sur le serveur mais l'information n'a pas encore été envoyée au client.

**Note :** Il est fortement conseillé d'utiliser la commande [Is new record](../commands/is-new-record) pour vérifier si un enregistrement est en cours de création. 

## Exemple 

L'exemple suivant sauvegarde le numéro d'enregistrement courant puis cherche dans la table si un autre enregistrement a la même valeur : 

```4d
 $NumEnreg :=Record number([Personnes]) // Obtenir le numéro d'enregistrement
  // Est-ce que quelqu'un d'autre a le même nom ?
 QUERY([Personnes];[Personnes]Nom=[Personnes]Nom)
  // Afficher une alerte avec le nombre de personnes qui ont le même nom
 ALERT("Il existe "+String(Enregistrements trouves([Personnes])+" personnes du même nom.")
 GOTO RECORD([Personnes];$NumEnreg) // Retourner à l'enregistrement original
```

## Voir aussi 

*A propos des numéros d'enregistrements*  
[GOTO RECORD](../commands/goto-record)  
[Is new record](../commands/is-new-record)  
[Selected record number](../commands/selected-record-number)  
[Sequence number](../commands/sequence-number)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 243 |
| Thread safe | yes |


