---
id: runtime-vl
title: RuntimeVL
sidebar_label: RuntimeVL
sidebar_position: 2
description: "Clé RuntimeVL"
keywords: ["BuildApplication", "XML key", "BuildApp", "RuntimeVL"]
---

Le nœud `<RuntimeVL>` contient une seule clé, [LastDataPathLookup](#lastdatapathlookup).

```xml
<Preferences4D>
  <BuildApp>
    <RuntimeVL>
      <LastDataPathLookup>ByAppPath</LastDataPathLookup>
    </RuntimeVL>
  </BuildApp>
</Preferences4D>
```

## Résumé

| Clé | Valeurs | Description |
|---|---|---|
| [RuntimeVL/LastDataPathLookup](#lastdatapathlookup) | InDbStruct / ByAppName / ByAppPath | Mode de liaison des données de l'application monoposte |


## Application monoposte (RuntimeVL)

### LastDataPathLookup

```text title="Chemin XML"
/Preferences4D/BuildApp/RuntimeVL/LastDataPathLookup
```

Définit le [mode de liaison des données](../Desktop/data-file-configuration.md#configuring-the-data-linking-mode) de l'application monoposte :

| Valeur | Recherche du chemin du fichier de données | Stockage du chemin du fichier de données |
|---|---|---|
| InDbStruct | Chemin stocké dans le fichier de structure | Dans le fichier de structure (fonctionnement historique) |
| ByAppName | Entrée la plus récente dans *LastDataPath.xml* | Préférences utilisateur |
| ByAppPath | Entrée dont l'attribut *executablePath* correspond au chemin de l'application | Préférences utilisateur |

La même clé existe pour les applications client/serveur : [CS/LastDataPathLookup](./client-server.md#lastdatapathlookup).
