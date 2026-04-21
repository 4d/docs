---
id: move-document
title: MOVE DOCUMENT
slug: /commands/move-document
displayed_sidebar: docs
---

<!--REF #_command_.MOVE DOCUMENT.Syntax-->**MOVE DOCUMENT** ( *cheminSource* ; *cheminDest* )<!-- END REF-->
<!--REF #_command_.MOVE DOCUMENT.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminSource | Text | &#8594;  | Chemin d'accès complet au document existant |
| cheminDest | Text | &#8594;  | Chemin d'accès de destination |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.MOVE DOCUMENT.Summary-->La commande **MOVE DOCUMENT** déplace ou renomme un document.<!-- END REF-->

Vous passez le chemin d'accès complet au document existant dans le paramètre *cheminSource* et le nouveau nom et/ou emplacement du document dans *cheminDest*.

**Attention :** Avec **MOVE DOCUMENT**, vous pouvez déplacer un document depuis et vers tous les dossiers du même volume. Si vous souhaitez déplacer un document entre deux volumes différents, utilisez la commande [COPY DOCUMENT](../commands/copy-document) pour “déplacer” le document puis effacez le document original avec la commande [DELETE DOCUMENT](../commands/delete-document).

## Exemple 1 

L'exemple suivant renomme le document DocNom :

```4d
 MOVE DOCUMENT("C:\\DOSSIER\\DocNom";"C:\\DOSSIER\\NouveauDocNom")
```

## Exemple 2 

L'exemple suivant déplace et renomme le document DocNom :

```4d
 MOVE DOCUMENT("C:\\DOSSIER1\\DocNom";"C:\\DOSSIER2\\NouveauDocNom")
```

## Exemple 3 

L'exemple suivant déplace le document DocNom :

```4d
 MOVE DOCUMENT("C:\\DOSSIER1\\DocNom";"C:\\DOSSIER2\\DocNom")
```

**Note :** Dans les deux derniers exemples, le dossier de destination *"C:\\\\DOSSIER2"* doit déjà exister. En effet, la commande **MOVE DOCUMENT** déplace uniquement un document, elle ne peut créer de dossiers. 

## Voir aussi 

[COPY DOCUMENT](../commands/copy-document)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 540 |
| Thread safe | yes |
| Modifie les variables | OK, error |


