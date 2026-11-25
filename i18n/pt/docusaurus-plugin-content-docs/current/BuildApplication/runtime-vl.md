---
id: runtime-vl
title: RuntimeVL
sidebar_label: RuntimeVL
sidebar_position: 2
description: "Chave RuntimeVL"
keywords: ["BuildApplication", "XML key", "BuildApp", "RuntimeVL"]
---

O nó `<RuntimeVL>` contém uma única chave, [LastDataPathLookup](#lastdatapathlookup).

```xml
<Preferences4D>
  <BuildApp>
    <RuntimeVL>
      <LastDataPathLookup>ByAppPath</LastDataPathLookup>
    </RuntimeVL>
  </BuildApp>
</Preferences4D>
```

## Resumo

| Chave | Valores | Descrição |
|---|---|---|
| [RuntimeVL/LastDataPathLookup](#lastdatapathlookup) | InDbStruct / ByAppName / ByAppPath | Modo de ligação de dados da aplicação usuário único |


## Aplicação usuário único (RuntimeVL)

### LastDataPathLookup

```text title="Caminho XML"
/Preferences4D/BuildApp/RuntimeVL/LastDataPathLookup
```

Define o [modo de ligação de dados](../Desktop/data-file-configuration.md#configuring-the-data-linking-mode) da aplicação usuário único:

| Valor | Busca do caminho do arquivo de dados | Armazenamento do caminho do arquivo de dados |
|---|---|---|
| InDbStruct | Caminho armazenado no arquivo de estrutura | Dentro do arquivo de estrutura (comportamento legado) |
| ByAppName | Entrada mais recente em *LastDataPath.xml* | Preferências do usuário |
| ByAppPath | Entrada cujo *executablePath* corresponde ao caminho da aplicação | Preferências do usuário |

A mesma chave existe para aplicações cliente/servidor: [CS/LastDataPathLookup](./client-server.md#lastdatapathlookup).
