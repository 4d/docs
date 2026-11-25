---
id: versioning
title: Chaves de versionamento
sidebar_label: Versionamento
sidebar_position: 5
description: "Chaves XML BuildApplication do nó Versioning: número de versão, copyright e informações de arquivo das aplicações geradas."
keywords: ["BuildApplication", "XML key", "Versioning", "version", "copyright"]
---

Essas chaves definem o número de versão e as informações de arquivo das aplicações geradas. Elas estão localizadas sob o nó `<Versioning>`, em um dos seguintes subnós:

| Subnó | Prefixo da chave | Aplica-se a | Valor padrão se omitida |
|---|---|---|---|
| `<Common>` | Common | Todas as aplicações geradas | Valor da aplicação 4D |
| `<RuntimeVL>` | RuntimeVL | Aplicações usuário único (4D Volume Desktop) | Chave `Common...`, depois valor do 4D Volume Desktop |
| `<Client>` | Client | Aplicações cliente (4D Volume Desktop) | Chave `Common...`, depois valor do 4D Volume Desktop |
| `<Server>` | Server | Aplicações servidor (4D Server) | Chave `Common...`, depois valor do 4D Server |

Cada subnó aceita as mesmas dez chaves, nomeadas *prefixo* + *informação* (por exemplo `CommonVersion`, `ClientVersion`, `ServerVersion`, `RuntimeVLVersion`). Quando uma chave específica e a chave `Common...` correspondente estão ambas definidas, a chave específica é usada.

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

## Chaves

| Informação | Chaves | Plataforma | Valores | Campo atualizado |
|---|---|---|---|---|
| <a name="version"></a>Version | CommonVersion, RuntimeVLVersion, ClientVersion, ServerVersion | Windows, macOS | Número de versão (x.x.x) | Windows: Versão do produto<br/>macOS: `CFBundleShortVersionString` e `CFBundleVersion` em info.plist |
| <a name="copyright"></a>Copyright | CommonCopyright, RuntimeVLCopyright, ClientCopyright, ServerCopyright | Windows, macOS | Texto | Windows: Copyright<br/>macOS: `NSHumanReadableCopyright` em info.plist |
| <a name="creator"></a>Creator | CommonCreator, RuntimeVLCreator, ClientCreator, ServerCreator | macOS | 4 caracteres no máximo | Código criador da aplicação |
| <a name="comment"></a>Comment | CommonComment, RuntimeVLComment, ClientComment, ServerComment | Windows | 31 caracteres no máximo | Comentário |
| <a name="companyname"></a>CompanyName | CommonCompanyName, RuntimeVLCompanyName, ClientCompanyName, ServerCompanyName | Windows | 31 caracteres no máximo | Nome da empresa |
| <a name="filedescription"></a>FileDescription | CommonFileDescription, RuntimeVLFileDescription, ClientFileDescription, ServerFileDescription | Windows | 31 caracteres no máximo | Descrição do arquivo |
| <a name="internalname"></a>InternalName | CommonInternalName, RuntimeVLInternalName, ClientInternalName, ServerInternalName | Windows | 31 caracteres no máximo | Nome interno |
| <a name="legaltrademark"></a>LegalTrademark | CommonLegalTrademark, RuntimeVLLegalTrademark, ClientLegalTrademark, ServerLegalTrademark | Windows | 31 caracteres no máximo | Marcas registradas |
| <a name="privatebuild"></a>PrivateBuild | CommonPrivateBuild, RuntimeVLPrivateBuild, ClientPrivateBuild, ServerPrivateBuild | Windows | 31 caracteres no máximo | Build privado |
| <a name="specialbuild"></a>SpecialBuild | CommonSpecialBuild, RuntimeVLSpecialBuild, ClientSpecialBuild, ServerSpecialBuild | Windows | 31 caracteres no máximo | Build especial |

No Windows, os campos atualizados são exibidos na janela **Propriedades** do arquivo da aplicação. As chaves que se aplicam a apenas uma plataforma são ignoradas na outra plataforma.

Veja também [Arquivos gerados](../Desktop/building.md#generated-files) para o arquivo info.plist do macOS.
