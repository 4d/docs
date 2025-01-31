---
id: print
title: Impression
---


## Propriétés

Permet de définir des paramètres d'impression spécifiques pour le formulaire. Cette fonctionnalité est utile pour afficher les limites de pages d'impression dans l'éditeur de formulaire.

> **Compatibilité** : Même si ces paramètres sont pris en compte lors de l'impression du formulaire en mode Application, il est déconseillé de s'appuyer sur cette fonctionnalité pour stocker les paramètres d'impression du formulaire, en raison des limitations liées à la plateforme et au pilote. Il est fortement recommandé d'utiliser les commandes 4D `Print settings to BLOB`/`BLOB to print settings` qui sont plus puissantes.

Vous pouvez modifier les paramètres d'impression suivants :

*   Format du papier
*   Orientation du papier
*   Mise à l'échelle de la page


> Les options disponibles dépendent de la configuration du système.




#### Grammaire JSON

| Nom         | Type de données | Valeurs possibles                                                                                       |
| ----------- | --------------- | ------------------------------------------------------------------------------------------------------- |
| pageFormat  | object          | Propriétés d'impression disponibles : paperName, paperWidth, paperHeight, orientation, scale            |
| paperName   | string          | "A4", "US Letter"...                                                                                    |
| paperWidth  | string          | Utilisé si un papier nommé paperName n'a pas été trouvé. Nécessite un suffixe d'unité : pt, in, mm, cm. |
| paperHeight | string          | Utilisé si un papier nommé paperName n'a pas été trouvé. Nécessite un suffixe d'unité : pt, in, mm, cm. |
| orientation | string          | "landscape" (par défaut "portrait")                                                                     |
| scale       | number          | minimum : 0                                                                                             |


---








