---
id: auto-update
title: AutoUpdate
sidebar_label: AutoUpdate
sidebar_position: 6
description: "Chaves XML BuildApplication do nó AutoUpdate: elevar os privilégios de instalação do updater."
keywords: ["BuildApplication", "XML key", "AutoUpdate", "StartElevated", "updater"]
---

Essas chaves elevam os privilégios de instalação, para que o utilitário "updater" possa instalar [aplicações fusionadas atualizadas](../Desktop/managing-updates.md) em locais protegidos do sistema. Elas estão localizadas sob o nó `<AutoUpdate>`.

Quando uma chave está definida como True e o updater precisa atualizar uma aplicação em um local protegido, uma caixa de diálogo informa o usuário de que são necessários privilégios de administrador e permite que ele se conecte com uma conta de administrador.

:::note

Não é recomendado instalar aplicações fusionadas na pasta "Program Files" no Windows, pois essa pasta inclui mecanismos específicos que são incompatíveis com as aplicações 4D.

:::

```xml
<Preferences4D>
  <BuildApp>
    <AutoUpdate>
      <CS>
        <Client>
          <StartElevated>True</StartElevated>
        </Client>
        <Server>
          <StartElevated>True</StartElevated>
        </Server>
      </CS>
    </AutoUpdate>
  </BuildApp>
</Preferences4D>
```

## StartElevated

**Valores**: True / False (padrão)

Quando True, a atualização é realizada com os privilégios de administrador da máquina. Quando False, a atualização é realizada sem elevar os privilégios.

| Caminho XML | Aplicação atualizada | Plataforma |
|---|---|---|
| `AutoUpdate/RuntimeVL/StartElevated` | Aplicação usuário único | Somente Windows (sempre False no macOS) |
| `AutoUpdate/CS/Server/StartElevated` | Aplicação servidor | Somente Windows (sempre False no macOS) |
| `AutoUpdate/CS/Client/StartElevated` | Aplicação cliente | Somente Windows (sempre False no macOS) |
| `AutoUpdate/CS/ClientUpdateWin/StartElevated` | Aplicação cliente Windows, gerada no macOS | Somente macOS (ignorada no Windows) |
