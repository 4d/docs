---
id: client-server
title: Client/Serveur
sidebar_label: Client/Serveur
sidebar_position: 3
description: "Clés XML BuildApplication du nœud CS, relatives aux applications client/serveur."
keywords: ["BuildApplication", "XML key", "CS", "client/server"]
---

Ces clés définissent les options des [applications client/serveur](../Desktop/building.md#clientserver-page). Elles sont situées sous le nœud `<CS>`.

```xml
<Preferences4D>
  <BuildApp>
    <CS>
      <BuildServerApplication>True</BuildServerApplication>
      <BuildCSUpgradeable>True</BuildCSUpgradeable>
      <IPAddress>myserver.example.com</IPAddress>
      <CurrentVers>3</CurrentVers>
    </CS>
  </BuildApp>
</Preferences4D>
```

## Résumé

| Clé | Valeurs | Description |
|---|---|---|
| [BuildServerApplication](#buildserverapplication) | True / False | Générer une application client/serveur |
| [BuildCSUpgradeable](#buildcsupgradeable) | True / False | Générer les applications de mise à jour des clients |
| [IPAddress](#ipaddress) | Adresse IP ou nom d'hôte | Adresse du serveur utilisée par les clients |
| [PortNumber](#portnumber) | Numéro de port | Port TCP du serveur utilisé par les clients |
| [ServerSelectionAllowed](#serverselectionallowed) | True / False | Autoriser la boîte de dialogue de sélection de serveur en cas d'échec de connexion |
| [HardLink](#hardlink) | Texte (31 car. max) | Signature des applications cliente et serveur |
| [CertificateAuthoritiesCertificates](#certificateauthoritiescertificates) | Chemin | Liste des autorités de certification de confiance, utilisée par les clients pour valider le certificat TLS du serveur |
| [CertificateDomainName](#certificatedomainname) | Texte | Noms de domaine de confiance du certificat TLS du serveur |
| [CurrentVers](#currentvers) | Numérique | Version courante de l'application générée |
| [RangeVersMin](#rangeversmin) | Numérique | Version minimale des clients autorisés à se connecter |
| [RangeVersMax](#rangeversmax) | Numérique | Version maximale des clients autorisés à se connecter |
| [LastDataPathLookup](#lastdatapathlookup) | InDbStruct / ByAppName / ByAppPath | Mode de liaison des données du serveur |
| [MacCompiledDatabaseToWin](#maccompileddatabasetowin) | Chemin | Structure compilée macOS pour les clients Silicon |
| [MacCompiledDatabaseToWinIncludeIt](#maccompileddatabasetowinincludeit) | True / False | Inclure la structure compilée macOS dans un serveur Windows |
| [ServerEmbedsProjectDirectoryFile](#serverembedsprojectdirectoryfile) | True / False | Copier le fichier directory.json du projet dans le serveur |
| [ServerDataCollection](#serverdatacollection) | True / False | Activer la collecte de données sur le serveur |
| [ServerStructureFolderName](#serverstructurefoldername) | Nom de dossier | Nom du dossier de cache du serveur |
| [ClientServerSystemFolderName](#clientserversystemfoldername) | Nom de dossier | Nom du dossier de cache client |
| [ClientUserPreferencesFolderByPath](#clientuserpreferencesfolderbypath) | True / False | Dossier de préférences utilisateur distinct par chemin de client |
| [ClientWinSingleInstance](#clientwinsingleinstance) | True / False | Autoriser une seule instance cliente sous Windows |
| [ShareLocalResourcesOnWindowsClient](#sharelocalresourcesonwindowsclient) | True / False | Stocker les ressources locales des clients dans un dossier partagé sous Windows |
| [HideAdministrationMenuItem](#hideadministrationmenuitem) | True / False | Masquer la fenêtre d'administration du serveur |
| [HideDataExplorerMenuItem](#hidedataexplorermenuitem) | True / False | Masquer la commande de menu Explorateur de données du serveur |
| [HideRuntimeExplorerMenuItem](#hideruntimeexplorermenuitem) | True / False | Masquer la commande de menu Explorateur d'exécution du serveur |

## Génération

### BuildServerApplication

**Valeurs** : True / False (défaut)

Si True, une application client/serveur est générée. Le chemin de 4D Server doit être défini à l'aide de la clé [ServerWinFolder](./source-files.md#serverwinfolder) ou [ServerMacFolder](./source-files.md#servermacfolder).

### BuildCSUpgradeable

**Valeurs** : True / False (défaut)

Si True, des applications de mise à jour des clients, prêtes à être téléchargées, sont générées pour macOS et Windows.

## Connexion

### IPAddress

**Valeurs** : adresse IP ou nom d'hôte

Adresse du serveur. Cette clé n'est pas obligatoire car 4D dispose de mécanismes réseau internes, mais elle est requise dans certains cas (WAN, numéros de port spécifiques, etc.). Voir [Gestion de la connexion des applications clientes](../Desktop/merged-client-connections.md).

L'adresse est stockée dans le fichier "EnginedServer.4Dlink", dans le dossier Database de l'application cliente.

### PortNumber

**Valeurs** : numéro de port (défaut 19813)

Port TCP du serveur. Cette clé n'est requise que lorsque le port du serveur a été modifié. Le port est ajouté à l'adresse stockée dans le fichier "EnginedServer.4Dlink" de l'application cliente.

:::caution

Cette clé modifie uniquement le numéro de port côté client. Côté serveur, c'est le numéro de port de la base 4D qui génère l'application qui est utilisé. Pour générer un serveur avec un port personnalisé, utilisez [`SET DATABASE PARAMETER`](../commands/set-database-parameter) avant d'appeler [`BUILD APPLICATION`](../commands/build-application) :

```4d
tempport:=Get database parameter(Client Server Port ID)
SET DATABASE PARAMETER(Client Server Port ID;21000)
BUILD APPLICATION("")
SET DATABASE PARAMETER(Client Server Port ID;tempport)
```

:::

### ServerSelectionAllowed

**Valeurs** : True / False

Configure la boîte de dialogue d'erreur affichée lorsque les mécanismes de connexion automatique échouent :

- **True** : la boîte de dialogue donne accès à la fenêtre de sélection de serveur.
- **False** : la boîte de dialogue ne donne pas accès à la fenêtre de sélection de serveur.

Appuyer sur **Alt** (Windows) ou **Option** (macOS) au démarrage affiche toujours la boîte de dialogue de sélection de serveur. Voir [Accès à la boîte de dialogue de sélection de serveur en cas d'erreur](../Desktop/merged-client-connections.md#availability-of-the-server-selection-dialog-box-in-case-of-error).

:::note

Dans les bases binaires, cette clé nécessite l'option de compatibilité **Utiliser la nouvelle architecture de déploiement des applications**.

:::

### HardLink

**Valeurs** : texte (31 caractères maximum)

Signature des applications cliente et serveur.

### CertificateAuthoritiesCertificates

**Valeurs** : chemin

Chemin d'un fichier contenant la liste des autorités de certification (CA) de confiance et le nom de domaine du certificat du serveur. Cette liste est copiée dans l'application cliente et est utilisée pour valider le certificat envoyé par 4D Server à la connexion.

Cette clé est utile lorsque vous installez votre propre certificat [TLS](../Admin/tls.md) dans une application client/serveur :

1. Copiez vos fichiers personnalisés *key.pem* et *cert.pem* dans le dossier **Resources** de l'application serveur générée (à côté de l'exécutable du serveur) :
   - Windows : `Client Server executable/<ApplicationName> Server/Resources`
   - macOS : `Client Server executable/<ApplicationName> Server.app` (le dossier Resources est au premier niveau du package)
2. Ajoutez le certificat de votre autorité de certification (généralement fourni par la CA elle-même) à une liste de CA de confiance au format PEM, et passez le chemin de cette liste à la clé **CertificateAuthoritiesCertificates**.

   La liste est un fichier texte contenant un ou plusieurs certificats, chacun pouvant être précédé d'un titre. Par exemple, avec une CA racine et une CA intermédiaire (le contenu des certificats est abrégé) :

   ```text title="Liste des CA de confiance (PEM)"
   Root CA
   ===========================================
   -----BEGIN CERTIFICATE-----
   MIIDdTCCAl2gAwIBAgILBAAAAAABFUtaw5QwDQYJKoZIhvcNAQEFBQAwVzELMAkG
   ...
   -----END CERTIFICATE-----

   Server CA
   ===========================================
   -----BEGIN CERTIFICATE-----
   MIIEkjCCA3qgAwIBAgIEOGPe+DANBgkqhkiG9w0BAQUFADCBtDEUMBIGA1UEChML
   ...
   -----END CERTIFICATE-----
   ```

Pour plus d'informations, consultez [cet article de blog](https://blog.4d.com/encryption-authentication-certificate-authority-validation).

### CertificateDomainName

**Valeurs** : texte (liste de noms de domaine séparés par des points-virgules)

Liste des noms de domaine de confiance pour le certificat envoyé par 4D Server à la connexion. Les applications clientes utilisent cette liste pour vérifier le nom de domaine du certificat, après avoir validé son autorité de certification avec [CertificateAuthoritiesCertificates](#certificateauthoritiescertificates) (le nom de domaine ne peut pas être vérifié sans une validation préalable de la CA).

## Versions

Les versions des clients autorisés à se connecter sont vérifiées par le serveur à l'aide des clés suivantes. Voir [Version courante](../Desktop/building.md#current-version).

### CurrentVers

**Valeurs** : numéro de version

Numéro de version courante de l'application générée. Si [RangeVersMin](#rangeversmin) et [RangeVersMax](#rangeversmax) ne sont pas utilisées, ce numéro est uniquement informatif. Sinon, le serveur le lit pour vérifier si le client appartient à la plage autorisée.

### RangeVersMin

**Valeurs** : numéro de version

Version minimale du client (par exemple 2). Les clients antérieurs sont invités à se mettre à jour. Utilisée avec [RangeVersMax](#rangeversmax) et [CurrentVers](#currentvers).

### RangeVersMax

**Valeurs** : numéro de version

Version maximale du client (par exemple 3). Les clients ultérieurs sont invités à se mettre à jour. Utilisée avec [RangeVersMin](#rangeversmin) et [CurrentVers](#currentvers).

## Serveur

### LastDataPathLookup

Définit le [mode de liaison des données](../Desktop/data-file-configuration.md#configuring-the-data-linking-mode) de l'application serveur :

| Valeur | Recherche du chemin du fichier de données | Stockage du chemin du fichier de données |
|---|---|---|
| InDbStruct | Chemin stocké dans le fichier de structure | Dans le fichier de structure (fonctionnement historique) |
| ByAppName | Entrée la plus récente dans *LastDataPath.xml* | Préférences utilisateur |
| ByAppPath | Entrée dont l'attribut *executablePath* correspond au chemin de l'application | Préférences utilisateur |

La même clé existe pour les applications monoposte : [RuntimeVL/LastDataPathLookup](./runtime-vl.md#lastdatapathlookup).

### MacCompiledDatabaseToWin

**Valeurs** : chemin

Chemin du dossier contenant la structure compilée sur macOS pour Silicon et Intel. Utilisée avec [MacCompiledDatabaseToWinIncludeIt](#maccompileddatabasetowinincludeit) pour [autoriser la connexion des clients Silicon Mac](../Desktop/building.md#allow-connection-of-silicon-mac-clients) à un serveur généré sous Windows.

### MacCompiledDatabaseToWinIncludeIt

**Valeurs** : True / False (défaut)

Lors de la génération d'un serveur sous Windows, si True, la structure compilée sur macOS désignée par [MacCompiledDatabaseToWin](#maccompileddatabasetowin) est incluse dans le serveur.

### ServerEmbedsProjectDirectoryFile

**Valeurs** : True / False (défaut)

Si True, le fichier [directory.json](../Users/handling_users_groups.md#directoryjson-file) du dossier des paramètres utilisateur du projet est copié dans le dossier des paramètres utilisateur du serveur généré. Voir [Intégrer le projet Groupe et Utilisateurs dans une application serveur](../Desktop/building.md#embed-the-project-users-and-groups-in-built-server-application).

### ServerDataCollection

**Valeurs** : True (défaut) / False

Si False, la [collecte automatique de données](../Admin/data-collect.md) est désactivée dans le serveur généré.

### ServerStructureFolderName

**Valeurs** : nom de dossier

Nom personnalisé du dossier de cache du serveur, créé dans le dossier 4D actif à l'intérieur du dossier de l'application fusionnée. Par défaut, le nom est celui de l'application fusionnée. Le nom doit respecter les règles du système d'exploitation pour les noms de dossiers. Voir [Dossier de cache du serveur](../Desktop/building.md#server-cache-folder).

```xml
<CS>
  <ServerStructureFolderName>MyCache_v1</ServerStructureFolderName>
</CS>
```

### HideAdministrationMenuItem

**Valeurs** : True / False (défaut)

Si True, dans le serveur généré :

- la commande **Administration** est supprimée du menu **Fenêtre**,
- la fenêtre d'administration n'est pas affichée au démarrage (elle peut toujours être affichée à l'aide de [`OPEN ADMINISTRATION WINDOW`](../commands/open-administration-window)).

### HideDataExplorerMenuItem

**Valeurs** : True / False (défaut)

Si True, la commande de menu **Explorateur de données** est supprimée du serveur généré.

### HideRuntimeExplorerMenuItem

**Valeurs** : True / False (défaut)

Si True, la commande de menu **Explorateur d'exécution** et son raccourci (Cmd+Maj+F9 sur macOS, Ctrl+Maj+F9 sous Windows) sont supprimés du serveur généré.

## Client

### ClientServerSystemFolderName

**Valeurs** : nom de dossier

Nom personnalisé du dossier de cache local des clients fusionnés (le dossier retourné par [`Get 4D folder`](../commands/get-4d-folder)`(4D Client database folder)`). Par défaut, le nom est construit à partir des informations de l'application et du serveur. Le nom doit respecter les règles du système d'exploitation pour les noms de dossiers. Voir [Dossier de cache client](../Desktop/building.md#client-cache-folder).

### ClientUserPreferencesFolderByPath

**Valeurs** : True / False (défaut)

Utile lorsque plusieurs clients fusionnés portant le même nom, sur la même machine, se connectent à des serveurs différents. Si True, le dossier de préférences utilisateur de chaque client est suffixé par un hash à 3 chiffres du chemin complet du client, de sorte que chaque client dispose de son propre dossier :

- **macOS** : `/Users/{UserAccount}/Library/Application Support/{ApplicationName} Client_{hash}`
- **Windows** : `\Users\{UserAccount}\AppData\Roaming\{ApplicationName}_{hash}`

[`Folder`](../commands/folder)`(fk user preferences folder)` et [`Get 4D folder`](../commands/get-4d-folder)`(Active 4D Folder)` retournent alors le chemin avec le hash.

:::note

Dans les bases binaires, cette clé nécessite l'option de compatibilité **Utiliser la nouvelle architecture de déploiement des applications**.

:::

### ClientWinSingleInstance

**Valeurs** : True (défaut) / False

Sous Windows, par défaut, une seule instance d'une application cliente peut être ouverte dans la même session. Passez cette clé à False pour autoriser plusieurs instances :

```xml
<CS>
  <ClientWinSingleInstance>False</ClientWinSingleInstance>
</CS>
```

### ShareLocalResourcesOnWindowsClient

**Valeurs** : True / False (défaut)

Définit l'emplacement où les clients fusionnés Windows stockent les *ressources locales* téléchargées depuis le serveur (fichier .4dz, dossier Libraries, dossier Resources...) :

- **False** : dans le dossier de l'utilisateur, `\Users\{UserAccount}\AppData\Local\{ApplicationName}\{ServerInformation}_ClientFolderSignature\`
- **True** : dans un dossier partagé, `\ProgramData\{ApplicationName}\{ServerInformation}_ClientFolderSignature\`

Un dossier partagé permet d'économiser du temps de téléchargement et de l'espace disque dans les environnements Remote Desktop Services ou Citrix. Cette clé n'est prise en compte que dans les projets, pour les clients fusionnés sous Windows.

Lorsque cette clé vaut True, la mise à jour des clients nécessite un accès en lecture/écriture au dossier ProgramData. Un administrateur doit :

1. Déconnecter tous les utilisateurs et interdire l'accès au client fusionné.
2. Mettre à jour le serveur fusionné.
3. Dans la session administrateur du serveur Remote Desktop, lancer le client fusionné afin qu'il se mette à jour (automatiquement ou manuellement) et télécharge les ressources locales dans le dossier partagé.
4. Rétablir l'accès des utilisateurs au client fusionné.

Cela évite les écritures concurrentes dans les ressources locales partagées ainsi que les erreurs de droits d'accès.
