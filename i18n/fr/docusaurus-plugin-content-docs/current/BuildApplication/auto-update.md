---
id: auto-update
title: AutoUpdate
sidebar_label: AutoUpdate
sidebar_position: 6
description: "Clés XML BuildApplication du nœud AutoUpdate : élévation des privilèges d'installation de l'updater."
keywords: ["BuildApplication", "XML key", "AutoUpdate", "StartElevated", "updater"]
---

Ces clés élèvent les privilèges d'installation, afin que l'utilitaire "updater" puisse installer les [applications fusionnées mises à jour](../Desktop/managing-updates.md) dans des emplacements système protégés. Elles sont situées sous le nœud `<AutoUpdate>`.

Lorsqu'une clé est à True et que l'updater doit mettre à jour une application située dans un emplacement protégé, une boîte de dialogue informe l'utilisateur que des privilèges d'administrateur sont requis, et lui permet de se connecter avec un compte administrateur.

:::note

Il n'est pas recommandé d'installer des applications fusionnées dans le dossier "Program Files" sous Windows, car ce dossier comporte des mécanismes spécifiques incompatibles avec les applications 4D.

:::

```xml
<Preferences4D>
  <BuildApp>
    <AutoUpdate>
      <CS>
        <Client>
          <StartElevated>True</StartElevated>
        </Client>
        <Server>
          <StartElevated>True</StartElevated>
        </Server>
      </CS>
    </AutoUpdate>
  </BuildApp>
</Preferences4D>
```

## StartElevated

**Valeurs** : True / False (défaut)

Si True, la mise à jour est effectuée avec les privilèges d'administrateur de la machine. Si False, la mise à jour est effectuée sans élévation des privilèges.

| Chemin XML | Application mise à jour | Plate-forme |
|---|---|---|
| `AutoUpdate/RuntimeVL/StartElevated` | Application monoposte | Windows uniquement (toujours False sur macOS) |
| `AutoUpdate/CS/Server/StartElevated` | Application serveur | Windows uniquement (toujours False sur macOS) |
| `AutoUpdate/CS/Client/StartElevated` | Application cliente | Windows uniquement (toujours False sur macOS) |
| `AutoUpdate/CS/ClientUpdateWin/StartElevated` | Application cliente Windows, générée sur macOS | macOS uniquement (ignorée sous Windows) |
