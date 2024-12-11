---
id: export-structure-file
title: Export structure file
slug: /commands/export-structure-file
displayed_sidebar: docs
---

<!--REF #_command_.Export structure file.Syntax-->**Export structure file** ( *rotaPasta* {; *opções*} ) : Object<!-- END REF-->
<!--REF #_command_.Export structure file.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rotaPasta | Text | &#8594;  | Rota da pasta destino para arquivos projeto |
| opções | Object | &#8594;  | Opções de exportação |
| Resultado | Object | &#8592; | Estado de validação e mensagens (se houver) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Export structure file.Summary-->O comando **Export structure file** divide a estrutura atual do banco de dados 4D em um conjunto de arquivos de texto ou arquivos de imagem nativos e os armazena na *rotaPastta* especificada.<!-- END REF--> Como padrão, se exporta a totalidade da estrutura do banco de dados (métodos, formulários, catálogo, etc.). Pode filtrar os conteúdos a exportar utilizando o parâmetro *opções* (ver abaixo).

Este comando lhe permite armazenar arquivos de estrutura de banco de dados em um repositório de controle de fonte (ou seja, *Git, Perforce*, etc.). As mudanças sucessivas ou as mudanças de várias fontes podem ser comparadas utilizando ferramentas normais de controle de fonte.

Este comando apenas pode ser utilizado nos contextos abaixo:

* 4D em modo local ou 4D Server (um erro é devolvido se for chamado desde 4D em modo remoto),
* Banco de dados interpretado (o comando não faz nada se for chamado desde um banco de dados .4DC)

Lembre também que quando for chamado desde um componente, o comando sempre exporta a estrutura do banco de dados local.

Em *rotaPasta*, passe a rota do sistema da pasta onde se devem salvar os arquivos de exportação.

O parâmetro *opções* lhe permite personalizar o processo de conversão. O objeto *opções* pode conter as propriedades abaixo:

| **Nome da propriedade** | **Tipo de valor**  | **Descrição**                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| withLog                 | booleano ou string | <table><tbody><tr><td>true ou "always": cria um arquivo de registro de conversão na pasta de Registros de destino.</td></tr><tr><td>"ifNotEmpty": cria um arquivo de registro de conversão apenas se conter algumas mensagens</td></tr><tr><td>false ou omitido (prè-determinado): não cria um arquivo de registro de conversão</td></tr></tbody></table> |
| makeProject             | boolean            | true para gerar um arquivo .4DProject na pasta "Project"                                                                                                                                                                                                                                                                                                                                                                                                  |
| filter                  | objeto             | Conteúdos para exportar. Se for omitido (padrão normal), tudo se exporta                                                                                                                                                                                                                                                                                                                                                                                  |
| projectMethods          | booleano           | true para exportar métodos projeto                                                                                                                                                                                                                                                                                                                                                                                                                        |
| databaseMethods         | booleano           | true para exportar métodos banco de dados                                                                                                                                                                                                                                                                                                                                                                                                                 |
| triggerMethods          | booleano           | true para exportar métodos trigger                                                                                                                                                                                                                                                                                                                                                                                                                        |
| forms                   | booleano           | true para exportar formulários                                                                                                                                                                                                                                                                                                                                                                                                                            |
| pageFormat              | booleano           | true para incluir o formato de página de formulário como propriedade "pageFormat" de cada arquivo json                                                                                                                                                                                                                                                                                                                                                    |
| catalog                 | booleano           | true para exportar definições de tabela e campo                                                                                                                                                                                                                                                                                                                                                                                                           |
| folders                 | booleano           | true para exportar as definições das pastas do Explorador                                                                                                                                                                                                                                                                                                                                                                                                 |
| settings                | booleano           | true para exportar configurações de estrutura                                                                                                                                                                                                                                                                                                                                                                                                             |
| menus                   | booleano           | true para exportar menus                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| tips                    | booleano           | true para exportar dicas                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| lists                   | booleano           | true para exportar listas                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| filters                 | booleano           | true para exportar filtros                                                                                                                                                                                                                                                                                                                                                                                                                                |
| pictures                | booleano           | true para exportar imagens desde a biblioteca de imagens                                                                                                                                                                                                                                                                                                                                                                                                  |
| resources               | booleano           | true para exportar a pasta de Recursos                                                                                                                                                                                                                                                                                                                                                                                                                    |
| trash                   | booleano           | true para exportar métodos e formulários na lixeira (\*)                                                                                                                                                                                                                                                                                                                                                                                                  |
| windowPositions         | booleano           | true para exportar posições de janela                                                                                                                                                                                                                                                                                                                                                                                                                     |
| methodPreferences       | booleano           | true para exportar as preferências de editor de métodos                                                                                                                                                                                                                                                                                                                                                                                                   |
| buildSettings           | booleano           | true para exportar o arquivo buildApp.xml                                                                                                                                                                                                                                                                                                                                                                                                                 |
| dataPath                | booleano           | true para copiar a última rota de arquivo de dados no arquivo de preferências de usuário de projeto                                                                                                                                                                                                                                                                                                                                                       |
| directory               | booleano           | true para exportar usuários e grupos 4D                                                                                                                                                                                                                                                                                                                                                                                                                   |
| styleSheets             | booleano           | true para exportar folhas de estilo como CSS                                                                                                                                                                                                                                                                                                                                                                                                              |
| documentation           | boolean            | true para exportar comentários Explorer como arquivos do tipo markdown                                                                                                                                                                                                                                                                                                                                                                                    |
  
  
(\*) O filtro "trash" é útil apenas se também forem selecionados os filtros "projectMethods" ou "forms". 

**Atenção**: quando for passado o parâmetro *opções e* for usado o objeto "filtro", deve declarar explicitamente cada propriedade para exportar com o valor **true**. Quando for passado este objeto, 4D assume que todas as propriedades estão em **false** como padrão.

##### Result 

O comando devolve um objeto que oferece o estado final da exportação, assim como informação sobre problemas encontrados ou erros, se houver São devolvidas as propriedades abaixo:

| **Nome da propriedade** | **Tipo de valor** | **Descrição** success                                                                                                 | booleano | True se a operação de exportação for exitosa, do contrário false. |
| ----------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------- |
| messages                | colección         | Coleção de objetos que descrevem problemas encontrados durante a operação de exportação                               |          |                                                                   |
| \[ \].severity          | texto             | Nível de emissão. Valores possíveis: "info", "error". Só o nível de "erro" estabelece a propriedade "éxito" em false. |          |                                                                   |
| \[ \].message           | texto             | Descrição do problema ou erro, por exemplo, "Não compatível com o tipo de objeto"                                     |          |                                                                   |
| \[ \].errors            | colección         | Pilha de erros (se houver)                                                                                            |          |                                                                   |

**Nota:** os objetos de emissão podem incluir propriedades adicionais segundo o contexto.

Os erros possíveis incluem:

* elementos duplicados
* erros de gestão de arquivos (o arquivo já existe, arquivo bloqueado, disco cheio, etc.)

#### Exemplo 1 

Se quiser exportar o arquivo de estrutura do banco de dados em uma pasta "Export" com a configuração pré-determinada:

```4d
 var $result : Object
 $result:=Export structure file("Export")
 If($result.success=True)
    ALERT("Export successful")
 Else
    ALERT("Error during export")
 End if
```

#### Exemplo 2 

Se quiser exportar apenas os métodos projeto e banco de dados, e um arquivo de registro:

```4d
 var $option;$result : Object
 $option:=New object("filter";New object)
 $option.filter.projectMethods:=True
 $option.filter.databaseMethods:=True
 $option.withLog:="always"
 $result:=Export structure file("exportWithLog";$option)
```

#### Ver também 

[FORM Convert to dynamic](form-convert-to-dynamic.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1565 |
| Thread-seguro | &check; |
| Proibido no servidor ||


