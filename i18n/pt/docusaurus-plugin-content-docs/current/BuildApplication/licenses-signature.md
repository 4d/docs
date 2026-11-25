---
id: licenses-signature
title: Licenças e assinatura
sidebar_label: Licenças e assinatura
sidebar_position: 7
description: "Chaves XML BuildApplication dos nós Licenses e SignApplication: licenças incorporadas e assinatura macOS."
keywords: ["BuildApplication", "XML key", "Licenses", "SignApplication", "certificate", "signature"]
---

Essas chaves correspondem à [Página de licenças e certificados](../Desktop/building.md#licenses--certificate-page) do gerador de aplicações.

## Licenças

Essas chaves estão localizadas sob o nó `<Licenses>`. Elas definem como as [licenças de implementação](../Admin/licenses.md#deployment-licenses) são incorporadas na aplicação gerada. Se nenhuma licença for incorporada, a aplicação inicia em modo de demonstração.

| Chave | Valores | Descrição |
|---|---|---|
| <a name="automaticlicenseintegration"></a>AutomaticLicenseIntegration | True / False (padrão) | Quando True, o 4D [seleciona automaticamente as licenças mais apropriadas](../Desktop/building.md#application-automatically-embedding-available-licenses) a incorporar na aplicação. Quando False ou omitida, as licenças devem ser designadas com ArrayLicenseWin / ArrayLicenseMac |
| <a name="arraylicensewin"></a>ArrayLicenseWin | Array de caminhos | Arquivos de licença a incorporar na versão Windows da aplicação. Os arquivos podem estar localizados em qualquer lugar da máquina |
| <a name="arraylicensemac"></a>ArrayLicenseMac | Array de caminhos | Arquivos de licença a incorporar na versão macOS da aplicação. Os arquivos podem estar localizados em qualquer lugar da máquina |
| <a name="evaluationmode"></a>EvaluationMode | True / False | Quando True, uma [versão de avaliação](../Desktop/building.md#evaluation-application) da aplicação é gerada |

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

## Assinatura macOS

Essas chaves estão localizadas sob o nó `<SignApplication>`. Consulte [Certificado de assinatura do macOS](../Desktop/building.md#macos-signing-certificate).

| Chave | Valores | Descrição |
|---|---|---|
| <a name="macsignature"></a>MacSignature | True / False | Deve ser True para assinar a aplicação com o certificado designado por MacCertificate |
| <a name="maccertificate"></a>MacCertificate | Texto | Nome do certificado: nome comum do certificado, ou cadeia completa de preferência de identidade do keychain. Obrigatória quando MacSignature é True; caso contrário, a aplicação não é assinada |
| <a name="adhocsign"></a>AdHocSign | True (padrão) / False | Quando True ou omitida, a aplicação é assinada com uma assinatura *ad hoc* se nenhuma assinatura válida estiver definida (MacSignature ausente ou MacCertificate inválida). Quando False, nenhuma assinatura ad hoc é aplicada |

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
