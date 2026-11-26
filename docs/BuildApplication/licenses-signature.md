---
id: licenses-signature
title: Licenses and signature
sidebar_label: Licenses & signature
sidebar_position: 7
description: "BuildApplication XML keys of the Licenses and SignApplication nodes: embedded licenses and macOS signature."
keywords: ["BuildApplication", "XML key", "Licenses", "SignApplication", "certificate", "signature"]
---

These keys correspond to the [Licenses & Certificate page](../Desktop/building.md#licenses--certificate-page) of the Application builder.

## Licenses

These keys are located under the `<Licenses>` node. They define how [deployment licenses](../Admin/licenses.md#deployment-licenses) are embedded in the built application. If no license is embedded, the application starts in demo mode.

| Key | Values | Description |
|---|---|---|
| <a name="automaticlicenseintegration"></a>AutomaticLicenseIntegration | True / False (default) | When True, 4D [automatically selects the most appropriate licenses](../Desktop/building.md#application-automatically-embedding-available-licenses) to embed in the application. When False or omitted, the licenses must be designated with ArrayLicenseWin / ArrayLicenseMac |
| <a name="arraylicensewin"></a>ArrayLicenseWin | Array of paths | License files to embed in the Windows version of the application. The files can be located anywhere on the machine |
| <a name="arraylicensemac"></a>ArrayLicenseMac | Array of paths | License files to embed in the macOS version of the application. The files can be located anywhere on the machine |
| <a name="evaluationmode"></a>EvaluationMode | True / False | When True, an [evaluation version](../Desktop/building.md#evaluation-application) of the application is built |

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

## macOS signature

These keys are located under the `<SignApplication>` node. See [macOS signing certificate](../Desktop/building.md#macos-signing-certificate).

| Key | Values | Description |
|---|---|---|
| <a name="macsignature"></a>MacSignature | True / False | Must be True to sign the application with the certificate designated by MacCertificate |
| <a name="maccertificate"></a>MacCertificate | Text | Certificate name: common name of the certificate, or complete identity preference string of the keychain. Mandatory when MacSignature is True, otherwise the application is not signed |
| <a name="adhocsign"></a>AdHocSign | True (default) / False | When True or omitted, the application is signed with an *ad hoc* signature if no valid signature is defined (MacSignature missing or MacCertificate invalid). When False, no ad hoc signature is applied |

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
