---
id: source-files
title: Fichiers sources
sidebar_label: Fichiers sources
sidebar_position: 4
description: "Clés XML BuildApplication du nœud SourcesFiles : emplacements de 4D Volume Desktop et 4D Server, icônes, licences OEM."
keywords: ["BuildApplication", "XML key", "SourcesFiles", "4D Volume Desktop", "icon"]
---

Ces clés désignent les applications sources (4D Volume Desktop, 4D Server) et les icônes utilisées pour la génération. Elles sont situées sous le nœud `<SourcesFiles>`, dans un sous-nœud `<RuntimeVL>` pour les applications monoposte et dans un sous-nœud `<CS>` pour les applications client/serveur.

Tous les chemins peuvent être absolus ou relatifs au fichier de structure. Une clé `...IncludeIt` à True est requise pour que l'application correspondante soit incluse dans la génération.

## Application monoposte (RuntimeVL)

```xml
<Preferences4D>
  <BuildApp>
    <SourcesFiles>
      <RuntimeVL>
        <RuntimeVLIncludeIt>True</RuntimeVLIncludeIt>
        <RuntimeVLWinFolder>C:\4D\4D Volume Desktop\</RuntimeVLWinFolder>
        <RuntimeVLIconWinPath>C:\MyApp\MyApp.ico</RuntimeVLIconWinPath>
      </RuntimeVL>
    </SourcesFiles>
  </BuildApp>
</Preferences4D>
```

| Clé | Valeurs | Description |
|---|---|---|
| <a name="runtimevlincludeit"></a>RuntimeVLIncludeIt | True / False | Doit être à True pour inclure le 4D Volume Desktop désigné par les clés suivantes |
| <a name="runtimevlwinfolder"></a>RuntimeVLWinFolder | Chemin | Dossier de 4D Volume Desktop pour Windows |
| <a name="runtimevlmacfolder"></a>RuntimeVLMacFolder | Chemin | Package de 4D Volume Desktop pour macOS |
| <a name="runtimevliconwinpath"></a>RuntimeVLIconWinPath | Chemin | Icône de l'application pour Windows (.ico) |
| <a name="runtimevliconmacpath"></a>RuntimeVLIconMacPath | Chemin | Icône de l'application pour macOS (.icns, le fichier info.plist est mis à jour) |
| [IsOEM](#isoem) | True / False | Inclure les licences de déploiement OEM |

RuntimeVLWinFolder et RuntimeVLMacFolder sont obligatoires si [BuildApplicationSerialized](./general.md#buildapplicationserialized) vaut True. Sinon, une erreur est retournée et la génération est interrompue.

Si une clé d'icône est omise, l'icône par défaut de 4D Volume Desktop est utilisée. Voir aussi [Personnaliser les icônes d'une application](../Desktop/building.md#customizing-application-icons).

## Application client/serveur (CS)

```xml
<Preferences4D>
  <BuildApp>
    <SourcesFiles>
      <CS>
        <ServerIncludeIt>True</ServerIncludeIt>
        <ServerWinFolder>C:\4D\4D Server\</ServerWinFolder>
        <ClientWinIncludeIt>True</ClientWinIncludeIt>
        <ClientWinFolderToWin>C:\4D\4D Volume Desktop\</ClientWinFolderToWin>
      </CS>
    </SourcesFiles>
  </BuildApp>
</Preferences4D>
```

### Serveur

| Clé | Valeurs | Description |
|---|---|---|
| <a name="serverincludeit"></a>ServerIncludeIt | True / False | Doit être à True pour inclure le 4D Server désigné par les clés suivantes |
| <a name="serverwinfolder"></a>ServerWinFolder | Chemin | Dossier de 4D Server pour Windows |
| <a name="servermacfolder"></a>ServerMacFolder | Chemin | Dossier de 4D Server pour macOS |
| <a name="servericonwinpath"></a>ServerIconWinPath | Chemin | Icône du serveur pour Windows (.ico) |
| <a name="servericonmacpath"></a>ServerIconMacPath | Chemin | Icône du serveur pour macOS (.icns, le fichier info.plist est mis à jour) |

ServerWinFolder et ServerMacFolder sont obligatoires si [BuildServerApplication](./client-server.md#buildserverapplication) vaut True. Sinon, une erreur est retournée et la génération est interrompue.

Si une clé d'icône est omise, l'icône par défaut de 4D Server est utilisée.

### Clients

Les clés des clients sont nommées en fonction de la plate-forme de l'application cliente (`ClientWin...`, `ClientMac...`) et de la plate-forme de la machine de génération (`...ToWin`, `...ToMac`, `...ForWinPath`, `...ForMacPath`).

| Clé | Valeurs | Description |
|---|---|---|
| <a name="clientwinincludeit"></a>ClientWinIncludeIt | True / False | Doit être à True pour inclure le client Windows désigné par ClientWinFolderToWin ou ClientWinFolderToMac |
| <a name="clientwinfoldertowin"></a>ClientWinFolderToWin | Chemin | 4D Volume Desktop pour Windows, lors d'une génération sous Windows |
| <a name="clientwinfoldertomac"></a>ClientWinFolderToMac | Chemin | 4D Volume Desktop pour Windows ou fichier **.4darchive** Windows, lors d'une génération sur macOS |
| <a name="clientmacincludeit"></a>ClientMacIncludeIt | True / False | Doit être à True pour inclure le client macOS désigné par ClientMacFolderToMac ou ClientMacFolderToWin |
| <a name="clientmacfoldertomac"></a>ClientMacFolderToMac | Chemin | 4D Volume Desktop pour macOS, lors d'une génération sur macOS |
| <a name="clientmacfoldertowin"></a>ClientMacFolderToWin | Chemin | Fichier **.4darchive** macOS, lors d'une génération sous Windows |
| <a name="clientwiniconforwinpath"></a>ClientWinIconForWinPath | Chemin | Icône du client Windows (.ico), lors d'une génération sous Windows |
| <a name="clientwiniconformacpath"></a>ClientWinIconForMacPath | Chemin | Icône du client Windows (.ico), lors d'une génération sur macOS |
| <a name="clientmaciconforwinpath"></a>ClientMacIconForWinPath | Chemin | Icône du client macOS (.icns), lors d'une génération sous Windows |
| <a name="clientmaciconformacpath"></a>ClientMacIconForMacPath | Chemin | Icône du client macOS (.icns), lors d'une génération sur macOS |
| <a name="databasetoembedinclientwinfolder"></a>DatabaseToEmbedInClientWinFolder | Chemin | Dossier Windows contenant la structure compilée à [intégrer dans un client monoposte](../Desktop/building.md#embedding-a-single-user-client-application) |
| <a name="databasetoembedinclientmacfolder"></a>DatabaseToEmbedInClientMacFolder | Chemin | Dossier macOS contenant la structure compilée à [intégrer dans un client monoposte](../Desktop/building.md#embedding-a-single-user-client-application) |
| [IsOEM](#isoem) | True / False | Inclure les licences de déploiement OEM |

Si une clé d'icône est omise, l'icône par défaut de 4D Volume Desktop est utilisée. Voir aussi [Sélectionner l'archive cliente pour la plate-forme concurrente](../Desktop/building.md#selecting-client-archive-for-the-concurrent-platform).

## IsOEM

```text title="Chemins XML"
/Preferences4D/BuildApp/SourcesFiles/RuntimeVL/IsOEM
/Preferences4D/BuildApp/SourcesFiles/CS/IsOEM
```

**Valeurs** : True / False (défaut)

Si True, l'application générée (monoposte ou client/serveur, selon le nœud) inclut les licences de déploiement OEM. Sinon, l'application est générée en mode démo. Cette clé nécessite une licence OEM.
