---
id: versioning
title: Clés de versionnage
sidebar_label: Versionnage
sidebar_position: 5
description: "Clés XML BuildApplication du nœud Versioning : numéro de version, copyright et informations de fichier des applications générées."
keywords: ["BuildApplication", "XML key", "Versioning", "version", "copyright"]
---

Ces clés définissent le numéro de version et les informations de fichier des applications générées. Elles sont situées sous le nœud `<Versioning>`, dans l'un des sous-nœuds suivants :

| Sous-nœud | Préfixe de clé | S'applique à | Valeur par défaut si omise |
|---|---|---|---|
| `<Common>` | Common | Toutes les applications générées | Valeur de l'application 4D |
| `<RuntimeVL>` | RuntimeVL | Applications monoposte (4D Volume Desktop) | Clé `Common...`, puis valeur de 4D Volume Desktop |
| `<Client>` | Client | Applications clientes (4D Volume Desktop) | Clé `Common...`, puis valeur de 4D Volume Desktop |
| `<Server>` | Server | Applications serveur (4D Server) | Clé `Common...`, puis valeur de 4D Server |

Chaque sous-nœud accepte les mêmes dix clés, nommées *préfixe* + *information* (par exemple `CommonVersion`, `ClientVersion`, `ServerVersion`, `RuntimeVLVersion`). Lorsqu'une clé spécifique et la clé `Common...` correspondante sont toutes deux définies, la clé spécifique est utilisée.

```xml
<Preferences4D>
  <BuildApp>
    <Versioning>
      <Common>
        <CommonVersion>1.0.5</CommonVersion>
        <CommonCopyright>© 2026 My Company</CommonCopyright>
        <CommonCompanyName>My Company</CommonCompanyName>
      </Common>
      <Server>
        <ServerFileDescription>My Application Server</ServerFileDescription>
      </Server>
    </Versioning>
  </BuildApp>
</Preferences4D>
```

## Clés

| Information | Clés | Plate-forme | Valeurs | Champ mis à jour |
|---|---|---|---|---|
| <a name="version"></a>Version | CommonVersion, RuntimeVLVersion, ClientVersion, ServerVersion | Windows, macOS | Numéro de version (x.x.x) | Windows : Version du produit<br/>macOS : `CFBundleShortVersionString` et `CFBundleVersion` dans info.plist |
| <a name="copyright"></a>Copyright | CommonCopyright, RuntimeVLCopyright, ClientCopyright, ServerCopyright | Windows, macOS | Texte | Windows : Copyright<br/>macOS : `NSHumanReadableCopyright` dans info.plist |
| <a name="creator"></a>Creator | CommonCreator, RuntimeVLCreator, ClientCreator, ServerCreator | macOS | 4 caractères max | Code créateur de l'application |
| <a name="comment"></a>Comment | CommonComment, RuntimeVLComment, ClientComment, ServerComment | Windows | 31 caractères max | Commentaire |
| <a name="companyname"></a>CompanyName | CommonCompanyName, RuntimeVLCompanyName, ClientCompanyName, ServerCompanyName | Windows | 31 caractères max | Nom de la société |
| <a name="filedescription"></a>FileDescription | CommonFileDescription, RuntimeVLFileDescription, ClientFileDescription, ServerFileDescription | Windows | 31 caractères max | Description du fichier |
| <a name="internalname"></a>InternalName | CommonInternalName, RuntimeVLInternalName, ClientInternalName, ServerInternalName | Windows | 31 caractères max | Nom interne |
| <a name="legaltrademark"></a>LegalTrademark | CommonLegalTrademark, RuntimeVLLegalTrademark, ClientLegalTrademark, ServerLegalTrademark | Windows | 31 caractères max | Marques légales |
| <a name="privatebuild"></a>PrivateBuild | CommonPrivateBuild, RuntimeVLPrivateBuild, ClientPrivateBuild, ServerPrivateBuild | Windows | 31 caractères max | Build privé |
| <a name="specialbuild"></a>SpecialBuild | CommonSpecialBuild, RuntimeVLSpecialBuild, ClientSpecialBuild, ServerSpecialBuild | Windows | 31 caractères max | Build spécial |

Sous Windows, les champs mis à jour sont affichés dans la fenêtre **Propriétés** du fichier de l'application. Les clés qui ne s'appliquent qu'à une seule plate-forme sont ignorées sur l'autre plate-forme.

Voir aussi [Fichiers générés](../Desktop/building.md#generated-files) pour le fichier info.plist sur macOS.
