---
id: licenses-signature
title: Licencias y firma
sidebar_label: Licencias y firma
sidebar_position: 7
description: "Llaves XML BuildApplication de los nodos Licenses y SignApplication: licencias integradas y firma macOS."
keywords: ["BuildApplication", "XML key", "Licenses", "SignApplication", "certificate", "signature"]
---

Estas llaves corresponden a la [página Licencias y certificados](../Desktop/building.md#licenses--certificate-page) del Creador de aplicaciones.

## Licencias

Estas llaves se encuentran bajo el nodo `<Licenses>`. Definen cómo se integran las [licencias de despliegue](../Admin/licenses.md#deployment-licenses) en la aplicación generada. Si no se integra ninguna licencia, la aplicación se inicia en modo demo.

| Llave | Valores | Descripción |
|---|---|---|
| <a name="automaticlicenseintegration"></a>AutomaticLicenseIntegration | True / False (por defecto) | Cuando es True, 4D [selecciona automáticamente las licencias más apropiadas](../Desktop/building.md#application-automatically-embedding-available-licenses) a integrar en la aplicación. Cuando es False o se omite, las licencias deben designarse con ArrayLicenseWin / ArrayLicenseMac |
| <a name="arraylicensewin"></a>ArrayLicenseWin | Array de rutas | Archivos de licencia a integrar en la versión Windows de la aplicación. Los archivos pueden estar ubicados en cualquier lugar de la máquina |
| <a name="arraylicensemac"></a>ArrayLicenseMac | Array de rutas | Archivos de licencia a integrar en la versión macOS de la aplicación. Los archivos pueden estar ubicados en cualquier lugar de la máquina |
| <a name="evaluationmode"></a>EvaluationMode | True / False | Cuando es True, se genera una [versión de evaluación](../Desktop/building.md#evaluation-application) de la aplicación |

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

## Firma macOS

Estas llaves se encuentran bajo el nodo `<SignApplication>`. Ver [Certificado de firma macOS](../Desktop/building.md#macos-signing-certificate).

| Llave | Valores | Descripción |
|---|---|---|
| <a name="macsignature"></a>MacSignature | True / False | Debe ser True para firmar la aplicación con el certificado designado por MacCertificate |
| <a name="maccertificate"></a>MacCertificate | Texto | Nombre del certificado: nombre común del certificado, o cadena completa de preferencia de identidad del llavero. Obligatorio cuando MacSignature es True; de lo contrario, la aplicación no se firma |
| <a name="adhocsign"></a>AdHocSign | True (por defecto) / False | Cuando es True o se omite, la aplicación se firma con una firma *ad hoc* si no se define ninguna firma válida (MacSignature ausente o MacCertificate inválido). Cuando es False, no se aplica ninguna firma ad hoc |

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
