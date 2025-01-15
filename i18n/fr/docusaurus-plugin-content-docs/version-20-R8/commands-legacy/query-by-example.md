---
id: query-by-example
title: QUERY BY EXAMPLE
slug: /commands/query-by-example
displayed_sidebar: docs
---

<!--REF #_command_.QUERY BY EXAMPLE.Syntax-->**QUERY BY EXAMPLE** ( {*laTable*}{;}{*} )<!-- END REF-->
<!--REF #_command_.QUERY BY EXAMPLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle une sélection d'enregistrements doit être retournée ou Table par défaut si ce paramètre est omis |
| * | Opérateur | &#8594;  | Masquer les barres de défilement |

<!-- END REF-->

#### Description 

<!--REF #_command_.QUERY BY EXAMPLE.Summary-->La commande **QUERY BY EXAMPLE** effectue la même action que la commande de menu **Recherche par formulaire**.<!-- END REF-->.. en mode Développement. Cette commande affiche le formulaire entrée courant comme fenêtre de recherche. **QUERY BY EXAMPLE** cherche dans *laTable* les données que l'utilisateur a saisies dans cette fenêtre. Le formulaire doit contenir les champs sur lesquels vous voulez que l'utilisateur puisse effectuer la recherche. La recherche est optimisée : les champs indexés sont automatiquement utilisés.  
Si vous passez le paramètre optionnel *\**, les barres de défilement du formulaire sont masquées.

Reportez-vous au manuel Mode Développement de 4D pour plus d'informations sur l'utilisation de la commande de menu **Recherche par formulaire...** du mode Développement.

#### Exemple 

La méthode dans l'exemple suivant affiche le formulaire *maRecherche*. Si l'utilisateur valide le formulaire et exécute la recherche (c'est-à-dire si la variable système OK prend la valeur 1), les enregistrements trouvés sont affichés :

```4d
 FORM SET INPUT([Personnes];"maRecherche") // Ce formulaire devient le formulaire entrée
 QUERY BY EXAMPLE([Personnes]) // Afficher le formulaire pour la recherche
 If(OK=1) // Si l'utilisateur valide la recherche
    DISPLAY SELECTION([Personnes]) // Visualiser les enregistrements trouvés
 End if
```

#### Variables et ensembles système 

Si l'utilisateur clique sur le bouton Valider ou appuie sur la touche Entrée, la variable système OK prend la valeur 1 et la recherche est effectuée. Si l'utilisateur clique sur le bouton Annuler ou utilise la touche d'annulation, la variable système OK prend la valeur 0 et la recherche est annulée.

#### Voir aussi 

[ORDER BY](order-by.md)  
[QUERY](query.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 292 |
| Thread safe | &cross; |
| Modifie les variables | OK |
| Change l'enregistrement courant ||
| Change la sélection courante ||
| Interdite sur le serveur ||


