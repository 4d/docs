---
id: general
title: Geral
sidebar_label: Geral
sidebar_position: 1
description: "Chaves XML BuildApplication localizadas diretamente sob o nó BuildApp, e chaves RuntimeVL."
keywords: ["BuildApplication", "XML key", "BuildApp", "RuntimeVL"]
---

Essas chaves estão localizadas diretamente sob o nó `<BuildApp>`.

```xml
<Preferences4D>
  <BuildApp>
    <BuildApplicationName>MyApplication</BuildApplicationName>
    <BuildWinDestFolder>C:\Builds\</BuildWinDestFolder>
    <BuildCompiled>True</BuildCompiled>
    <BuildApplicationSerialized>True</BuildApplicationSerialized>
  </BuildApp>
</Preferences4D>
```

## Resumo

| Chave | Valores | Descrição |
|---|---|---|
| [BuildApplicationName](#buildapplicationname) | Nome de arquivo | Nome do arquivo compilado ou da aplicação gerada |
| [BuildWinDestFolder](#buildwindestfolder) | Caminho | Pasta de destino Windows |
| [BuildMacDestFolder](#buildmacdestfolder) | Caminho | Pasta de destino macOS |
| [DataFilePath](#datafilepath) | Caminho | Arquivo de dados da aplicação final |
| [BuildCompiled](#buildcompiled) | True / False | Gerar uma estrutura compilada |
| [BuildApplicationSerialized](#buildapplicationserialized) | True / False | Gerar uma aplicação autônoma fusionada com 4D Volume Desktop |
| [IncludeAssociatedFolders](#includeassociatedfolders) | True / False | Copiar as pastas relacionadas à estrutura ao lado da estrutura compilada |
| [BuildComponent](#buildcomponent) | True / False | Gerar um componente |
| [PackProject](#packproject) | True / False | Gerar a aplicação como um arquivo .4dz (padrão) ou como uma pasta Project |
| [UseStandardZipFormat](#usestandardzipformat) | True / False | Usar o formato zip padrão para o arquivo .4dz (padrão) |
| [ArrayExcludedPluginName](#arrayexcludedpluginname) | Array de nomes | Plug-ins a excluir, por nome |
| [ArrayExcludedPluginID](#arrayexcludedpluginid) | Array de IDs | Plug-ins a excluir, por ID |
| [ArrayExcludedComponentName](#arrayexcludedcomponentname) | Array de nomes | Componentes a excluir |
| [ArrayExcludedModuleName](#arrayexcludedmodulename) | Array de nomes | Módulos opcionais a excluir |

## Nome da aplicação e destino

### BuildApplicationName

**Valores**: nome de arquivo

Nome do arquivo compilado ou da aplicação gerada. Esse nome está limitado a 27 caracteres, sem contar a extensão; até 31 caracteres com uma extensão de 4 caracteres.

Se essa chave não for usada, o arquivo compilado ou a aplicação usa o nome do arquivo de estrutura.

### BuildWinDestFolder

**Valores**: caminho

Caminho da pasta de destino Windows. O caminho pode ser absoluto ou relativo ao arquivo de estrutura. Se essa chave não for usada, a localização do arquivo de estrutura é utilizada.

### BuildMacDestFolder

**Valores**: caminho

Caminho da pasta de destino macOS. O caminho pode ser absoluto ou relativo ao arquivo de estrutura. Se essa chave não for usada, a localização do arquivo de estrutura é utilizada.

### DataFilePath

**Valores**: nome e caminho do arquivo de dados

Caminho do arquivo de dados da aplicação final. O caminho pode ser absoluto ou relativo ao arquivo de estrutura. Use a sintaxe da plataforma na qual a aplicação final será executada:

| Plataforma | Absoluto | Relativo |
|---|---|---|
| Windows | `C:\mybase\folder\mydata.4DD` | `\folder\mydata.4DD` |
| macOS (HFS) | `Macintosh HD:folder:mydata.4DD` | `:folder:mydata.4DD` |

Se essa chave estiver ausente ou for inválida, na primeira inicialização da aplicação final o 4D exibe uma caixa de diálogo padrão de abertura de arquivo para que o usuário possa selecionar o arquivo de dados.

## Opções de geração

### BuildCompiled

**Valores**: True / False (padrão)

Se True, uma estrutura compilada é gerada.

### BuildApplicationSerialized

**Valores**: True / False (padrão)

Se True, uma aplicação autônoma fusionada com 4D Volume Desktop é gerada.

O caminho do 4D Volume Desktop deve ser definido com a chave [RuntimeVLWinFolder](./source-files.md#runtimevlwinfolder) ou [RuntimeVLMacFolder](./source-files.md#runtimevlmacfolder) (dependendo da plataforma de geração). Se o caminho estiver ausente ou for inválido, um erro é retornado e a geração é interrompida.

### IncludeAssociatedFolders

**Valores**: True / False

Corresponde à opção [Incluir pastas relacionadas](../Desktop/building.md#include-related-folders) do gerador de aplicações. Quando True, as pastas Plugins, Resources, Components e Extras localizadas ao lado da estrutura são copiadas ao lado da estrutura compilada.

### BuildComponent

**Valores**: True / False

Se True, uma pasta "Components" é criada na pasta de destino. Ela contém a estrutura compilada em um pacote ".4dbase", pronta para ser instalada como componente. As pastas Resources e Extras associadas à estrutura original, se houver, também são colocadas nessa pasta.

### PackProject

**Valores**: True (padrão) / False

Quando True ou omitida, a aplicação gerada (usuário único ou cliente/servidor) é gerada como um [arquivo .4dz](../Desktop/building.md#build-compiled-structure) somente leitura.

Quando False, a aplicação gerada é gerada como uma pasta **Project** comum contendo apenas código compilado. Essa arquitetura permite que o código 4D modifique o modelo de dados local das aplicações implementadas (usando comandos como [`CREATE INDEX`](../commands/create-index) ou instruções SQL create/alter). Essas modificações são salvas localmente e são perdidas quando a aplicação é atualizada.

### UseStandardZipFormat

**Valores**: True (padrão) / False

Quando True ou omitida, o arquivo .4dz é gerado usando o formato zip padrão. Quando False, um formato proprietário é usado.

## Plug-ins, componentes e módulos

Por padrão, todos os plug-ins, componentes e módulos opcionais são incluídos na aplicação gerada. As chaves a seguir permitem excluir alguns deles.

### ArrayExcludedPluginName

**Valores**: array de nomes de plug-ins

Plug-ins a excluir, designados por seus nomes.

- Para excluir plug-ins 4D, somente a chave [ArrayExcludedPluginID](#arrayexcludedpluginid) é necessária.
- Para excluir plug-ins de terceiros e o plug-in 4D Internet Commands, é necessário passar tanto o nome deles com essa chave quanto o ID com [ArrayExcludedPluginID](#arrayexcludedpluginid). Somente pares nome/ID válidos são levados em conta.

### ArrayExcludedPluginID

**Valores**: array de IDs de plug-ins

Plug-ins a excluir, designados por seus IDs. Os IDs dos plug-ins são exibidos na página "Plugins e componentes" do gerador de aplicações, e no recurso 4BNX do plug-in.

Consulte [ArrayExcludedPluginName](#arrayexcludedpluginname) para as regras relativas aos plug-ins de terceiros.

### ArrayExcludedComponentName

**Valores**: array de nomes de componentes

Componentes a excluir. Por padrão, todos os componentes da pasta Components da estrutura original são incluídos.

### ArrayExcludedModuleName

**Valores**: array de nomes de módulos: "CEF", "MeCab", "PHP", "SpellChecker", "4D Updater"

[Módulos opcionais](../Desktop/building.md#deselecting-modules) a excluir.

:::caution

Excluir um módulo pode impedir que sua aplicação gerada funcione como esperado. Se você não tiver 100% de certeza de que um módulo nunca é chamado pela sua aplicação, mantenha-o incluído.

:::

