---
id: licenses-signature
title: Licences et signature
sidebar_label: Licences & signature
sidebar_position: 7
description: "Clés XML BuildApplication des nœuds Licenses et SignApplication : licences intégrées et signature macOS."
keywords: ["BuildApplication", "XML key", "Licenses", "SignApplication", "certificate", "signature"]
---

Ces clés correspondent à la [Page Licences & Certificat](../Desktop/building.md#licenses--certificate-page) du Générateur d'applications.

## Licences

Ces clés sont situées sous le nœud `<Licenses>`. Elles définissent la manière dont les [licences de déploiement](../Admin/licenses.md#deployment-licenses) sont intégrées dans l'application générée. Si aucune licence n'est intégrée, l'application démarre en mode démo.

| Clé | Valeurs | Description |
|---|---|---|
| <a name="automaticlicenseintegration"></a>AutomaticLicenseIntegration | True / False (défaut) | Si True, 4D [sélectionne automatiquement les licences les plus appropriées](../Desktop/building.md#application-automatically-embedding-available-licenses) à intégrer dans l'application. Si False ou omise, les licences doivent être désignées avec ArrayLicenseWin / ArrayLicenseMac |
| <a name="arraylicensewin"></a>ArrayLicenseWin | Tableau de chemins | Fichiers de licence à intégrer dans la version Windows de l'application. Les fichiers peuvent être situés n'importe où sur la machine |
| <a name="arraylicensemac"></a>ArrayLicenseMac | Tableau de chemins | Fichiers de licence à intégrer dans la version macOS de l'application. Les fichiers peuvent être situés n'importe où sur la machine |
| <a name="evaluationmode"></a>EvaluationMode | True / False | Si True, une [version d'évaluation](../Desktop/building.md#evaluation-application) de l'application est générée |

```xml
<Preferences4D>
  <BuildApp>
    <Licenses>
      <ArrayLicenseWin>
        <ItemsCount>2</ItemsCount>
        <Item1>C:\MyLicenses\4DDP140HJDSOI00FAKE1861.license4D</Item1>
        <Item2>C:\MyLicenses\4UUD140DDE0DISFAKEBC5F.license4D</Item2>
      </ArrayLicenseWin>
      <ArrayLicenseMac>
        <ItemsCount>1</ItemsCount>
        <Item1>MacHD:4DDP140HJDSOI00FAKE1861.license4D</Item1>
      </ArrayLicenseMac>
    </Licenses>
  </BuildApp>
</Preferences4D>
```

## Signature macOS

Ces clés sont situées sous le nœud `<SignApplication>`. Voir [Certificat de signature macOS](../Desktop/building.md#macos-signing-certificate).

| Clé | Valeurs | Description |
|---|---|---|
| <a name="macsignature"></a>MacSignature | True / False | Doit être à True pour signer l'application avec le certificat désigné par MacCertificate |
| <a name="maccertificate"></a>MacCertificate | Texte | Nom du certificat : nom commun du certificat, ou chaîne complète de préférence d'identité du trousseau. Obligatoire lorsque MacSignature vaut True, sinon l'application n'est pas signée |
| <a name="adhocsign"></a>AdHocSign | True (défaut) / False | Si True ou omise, l'application est signée avec une signature *ad hoc* si aucune signature valide n'est définie (MacSignature absente ou MacCertificate invalide). Si False, aucune signature ad hoc n'est appliquée |

```xml
<Preferences4D>
  <BuildApp>
    <SignApplication>
      <MacSignature>True</MacSignature>
      <MacCertificate>Developer ID Application: My Company (XXXXXXXXXX)</MacCertificate>
    </SignApplication>
  </BuildApp>
</Preferences4D>
```
