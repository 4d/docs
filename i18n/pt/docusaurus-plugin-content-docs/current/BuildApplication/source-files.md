---
id: source-files
title: Arquivos fonte
sidebar_label: Arquivos fonte
sidebar_position: 4
description: "Chaves XML BuildApplication do nó SourcesFiles: localizações do 4D Volume Desktop e do 4D Server, ícones, licenças OEM."
keywords: ["BuildApplication", "XML key", "SourcesFiles", "4D Volume Desktop", "icon"]
---

Essas chaves designam as aplicações fonte (4D Volume Desktop, 4D Server) e os ícones usados para a geração. Elas estão localizadas sob o nó `<SourcesFiles>`, em um subnó `<RuntimeVL>` para aplicações usuário único e em um subnó `<CS>` para aplicações cliente/servidor.

Todos os caminhos podem ser absolutos ou relativos ao arquivo de estrutura. Uma chave `...IncludeIt` definida como True é necessária para que a aplicação correspondente seja incluída na geração.

## Aplicação usuário único (RuntimeVL)

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

| Chave | Valores | Descrição |
|---|---|---|
| <a name="runtimevlincludeit"></a>RuntimeVLIncludeIt | True / False | Deve ser True para incluir o 4D Volume Desktop designado pelas chaves seguintes |
| <a name="runtimevlwinfolder"></a>RuntimeVLWinFolder | Caminho | Pasta do 4D Volume Desktop para Windows |
| <a name="runtimevlmacfolder"></a>RuntimeVLMacFolder | Caminho | Pacote do 4D Volume Desktop para macOS |
| <a name="runtimevliconwinpath"></a>RuntimeVLIconWinPath | Caminho | Ícone da aplicação para Windows (.ico) |
| <a name="runtimevliconmacpath"></a>RuntimeVLIconMacPath | Caminho | Ícone da aplicação para macOS (.icns, o arquivo info.plist é atualizado) |
| [IsOEM](#isoem) | True / False | Incluir as licenças de implementação OEM |

RuntimeVLWinFolder e RuntimeVLMacFolder são obrigatórias se [BuildApplicationSerialized](./general.md#buildapplicationserialized) for True. Caso contrário, um erro é retornado e a geração é interrompida.

Se uma chave de ícone for omitida, o ícone padrão do 4D Volume Desktop é usado. Veja também [Personalizar ícones de uma aplicação](../Desktop/building.md#customizing-application-icons).

## Aplicação cliente/servidor (CS)

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

### Servidor

| Chave | Valores | Descrição |
|---|---|---|
| <a name="serverincludeit"></a>ServerIncludeIt | True / False | Deve ser True para incluir o 4D Server designado pelas chaves seguintes |
| <a name="serverwinfolder"></a>ServerWinFolder | Caminho | Pasta do 4D Server para Windows |
| <a name="servermacfolder"></a>ServerMacFolder | Caminho | Pasta do 4D Server para macOS |
| <a name="servericonwinpath"></a>ServerIconWinPath | Caminho | Ícone do servidor para Windows (.ico) |
| <a name="servericonmacpath"></a>ServerIconMacPath | Caminho | Ícone do servidor para macOS (.icns, o arquivo info.plist é atualizado) |

ServerWinFolder e ServerMacFolder são obrigatórias se [BuildServerApplication](./client-server.md#buildserverapplication) for True. Caso contrário, um erro é retornado e a geração é interrompida.

Se uma chave de ícone for omitida, o ícone padrão do 4D Server é usado.

### Clientes

As chaves de cliente são nomeadas de acordo com a plataforma da aplicação cliente (`ClientWin...`, `ClientMac...`) e com a plataforma da máquina de geração (`...ToWin`, `...ToMac`, `...ForWinPath`, `...ForMacPath`).

| Chave | Valores | Descrição |
|---|---|---|
| <a name="clientwinincludeit"></a>ClientWinIncludeIt | True / False | Deve ser True para incluir o cliente Windows designado por ClientWinFolderToWin ou ClientWinFolderToMac |
| <a name="clientwinfoldertowin"></a>ClientWinFolderToWin | Caminho | 4D Volume Desktop para Windows, ao gerar no Windows |
| <a name="clientwinfoldertomac"></a>ClientWinFolderToMac | Caminho | 4D Volume Desktop para Windows ou arquivo **.4darchive** Windows, ao gerar no macOS |
| <a name="clientmacincludeit"></a>ClientMacIncludeIt | True / False | Deve ser True para incluir o cliente macOS designado por ClientMacFolderToMac ou ClientMacFolderToWin |
| <a name="clientmacfoldertomac"></a>ClientMacFolderToMac | Caminho | 4D Volume Desktop para macOS, ao gerar no macOS |
| <a name="clientmacfoldertowin"></a>ClientMacFolderToWin | Caminho | Arquivo **.4darchive** macOS, ao gerar no Windows |
| <a name="clientwiniconforwinpath"></a>ClientWinIconForWinPath | Caminho | Ícone do cliente Windows (.ico), ao gerar no Windows |
| <a name="clientwiniconformacpath"></a>ClientWinIconForMacPath | Caminho | Ícone do cliente Windows (.ico), ao gerar no macOS |
| <a name="clientmaciconforwinpath"></a>ClientMacIconForWinPath | Caminho | Ícone do cliente macOS (.icns), ao gerar no Windows |
| <a name="clientmaciconformacpath"></a>ClientMacIconForMacPath | Caminho | Ícone do cliente macOS (.icns), ao gerar no macOS |
| <a name="databasetoembedinclientwinfolder"></a>DatabaseToEmbedInClientWinFolder | Caminho | Pasta Windows contendo a estrutura compilada a [incorporar em um cliente usuário único](../Desktop/building.md#embedding-a-single-user-client-application) |
| <a name="databasetoembedinclientmacfolder"></a>DatabaseToEmbedInClientMacFolder | Caminho | Pasta macOS contendo a estrutura compilada a [incorporar em um cliente usuário único](../Desktop/building.md#embedding-a-single-user-client-application) |
| [IsOEM](#isoem) | True / False | Incluir as licenças de implementação OEM |

Se uma chave de ícone for omitida, o ícone padrão do 4D Volume Desktop é usado. Veja também [Seleção do arquivo cliente para a plataforma concorrente](../Desktop/building.md#selecting-client-archive-for-the-concurrent-platform).

## IsOEM

```text title="Caminhos XML"
/Preferences4D/BuildApp/SourcesFiles/RuntimeVL/IsOEM
/Preferences4D/BuildApp/SourcesFiles/CS/IsOEM
```

**Valores**: True / False (padrão)

Se True, a aplicação gerada (usuário único ou cliente/servidor, dependendo do nó) inclui as licenças de implementação OEM. Caso contrário, a aplicação é gerada em modo de demonstração. Essa chave requer uma licença OEM.
