---
id: compile-project
title: Compile project
slug: /commands/compile-project
displayed_sidebar: docs
---

<!--REF #_command_.Compile project.Syntax-->**Compile project** {( {*projectFile*}{;}{*options*} )} : Object<!-- END REF-->

<!--REF #_command_.Compile project.Params-->

| Parâmetro   | Tipo                     |                             | Descrição                                                |
| ----------- | ------------------------ | --------------------------- | -------------------------------------------------------- |
| projectFile | 4D. File | &#8594; | Arquivo .4DProject para compilar         |
| options     | Object                   | &#8594; | Objeto que especifica as opções de compilação            |
| Resultado   | Object                   | &#8592; | Objeto contendo informações sobre o estado de compilação |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças                                 |
| ------- | ---------------------------------------- |
| 20 R8   | Suporte do `type` "formObjectExpression" |

</details>

#### Descrição

**Compile project**<!--REF #_command_.Comile project.Summary--> permite que você compile o projeto host atual ou o projeto especificado no parâmetro *projectFile*.<!-- END REF--> Para obter mais informações sobre a compilação, verifique a [página de compilação](../Project/compiler.md).

Por padrão, o comando usa as opções do compilador definidas nas Configurações da estrutura. Você pode substituí-los passando um parâmetro *options*. As seguintes sintaxes são suportadas:

- **Compile project**(): compila o projeto aberto usando as opções definidas nas Configurações da Estrutura
- **Compile project**(*options*): compila o projeto aberto. As *options* definidas substituem os parâmetros de estrutura
- **Compile project**(*projectFile*): compila o projeto 4D *projectFile* usando as opções definidas nas parâmetros de estrutura
- **Compile project**(*projectFile*; *options*): compila o projeto 4D *projectFile* e as *options* definidas substituem os parâmetros de estrutura

**Nota:** Os bancos de dados binários não podem ser compilados usando este comando.

Ao contrário da janela do Compilador, esse comando requer que você designe explicitamente o(s) componente(s) para compilar. Ao compilar um projeto com **Compilar projeto**, você precisa declarar seus componentes usando a propriedade *components* do parâmetro *options*. Tenha em mente que os componentes já devem ser compilados (componentes binários são suportados).

O código compilado resultante será armazenado na pasta DerivedData ou Bibliotecas do projeto, dependendo da propriedade *targets* do parâmetro *options*. Se você quiser criar arquivos .4dz, ainda será necessário compactar manualmente o projeto compilado ou usar o recurso [build application](../Desktop/building.md).

Se você passar uma coleção vazia em *targets*, **Compilar projeto** executará uma verificação de sintaxe sem compilação.

Erros de compilação, se houver, são retornados como objetos na coleção de *erros*.

**Nota:** Você não pode chamar este comando quando outra compilação está sendo executada (por exemplo, uma compilação lançada a partir da janela de Compilação).

##### Parâmetro options

O parâmetro *opções* é um objeto. Aqui estão as opções de compilação disponíveis:

| **Propriedade**                                                                    | **Tipo**                         | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| components                                                                         | Collection                       | Coleção de objetos 4D.File para componentes dependentes (deve já estar compilado)                                                                                                                                                                                                                                                                                                                                                                                                                           |
| defaultTypeForButtons                                                              | Integer                          | Valor possível: é real ou longa                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| defaultTypeForNumerics                                                             | Integer                          | Valor possível: é real ou longa                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| generateSymbols                                                                    | Parâmetros                       | Verdadeiro para gerar informações de símbolo no objeto .sycharacters retornado                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| generateSyntaxFile                                                                 | Parâmetros                       | Verdadeiro para gerar um [arquivo de sintaxe para conclusão do código](../settings/general.md).md#generate-syntax-for-code-completion-when-compiled) na \\Resouras\\en.lproj pasta do projeto                                                                                                                                                                                                                                                                                                                |
| generateTypingMethods                                                              | Text                             | "redefinir" ou "acrescentar" para gerar métodos de digitação. Se o valor for "acrescentar", declarações variáveis existentes não serão modificadas (comportamento da janela do compilador). Se o valor for "redefinir" as declarações de variáveis existentes são removidas previamente.                                                                                                                                                                                    |
| plugins                                                                            | Objeto 4D.Folder | Pasta plug-ins a ser usada em vez da [pasta Plugins do projeto atual](../Project/architecture.md#plugins). Essa propriedade só está disponível com a sintaxe *projectFile*.                                                                                                                                                                                                                                                                                                                                    |
| targets                                                                            | Coleção de strings               | Valores possíveis: "x86_64_generic", "arm64_macOS_lib". Passe uma coleção vazia para executar a verificação de sintaxe apenas                                                                                                                                                                                                                                                                                              |
| typeInference                                                                      | Text                             | "all": O compilador deduz os tipos de todas as variáveis não declaradas explicitamente, "locals": O compilador deduz os tipos de variáveis locais não declaradas explicitamente, "none": Todas as variáveis devem ser declaradas explicitamente no código (modo legado), "direct": Todas as variáveis devem ser declaradas explicitamente no código ([digitação direta](../Project/compiler.md#enabling-direct-typing)). |
| warnings                                                                           | Uma coleção de objetos           | Define o estado dos avisos                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| \[\].major   | Number                           | Aviso de número principal, antes do ponto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| \[\].minor   | Number                           | Aviso de segundo número, após o ponto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| \[\].enabled | Parâmetros                       | Aviso de ativação                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

**Nota:** Quando o atributo *warnings* não está definido no objeto *options*, o comando **Compilar o projeto** usa os status padrão de geração de advertências definidos nas configurações.

##### Resultado

O objeto retornado pelo **projeto Compilar** possui até três propriedades:

| **Propriedade**                                                                                                        | **Tipo**               | **Description**                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| success                                                                                                                | Parâmetros             | True se a ação salvar tiver sucesso, senão False                                                                                             |
| errors                                                                                                                 | Uma coleção de objetos | **Disponível apenas em caso de erro ou aviso**. Coleção de objetos que descrevem erros de compilação ou avisos               |
| \[\].isError                                     | Parâmetros             | Erro se Verdadeiro, aviso caso contrário                                                                                                     |
| \[\].message                                     | Text                   | Mensagem de erro                                                                                                                             |
| \[\].code                                        | Object                 | [objeto código](#code-object)                                                                                                                |
| \[\].line                                        | Number                 | Número de erro da linha no código. Para métodos de classe, o número de linha na função                                       |
| \[\].lineInFile                                  | Number                 | Número da linha no arquivo (diferente de "linha" para métodos de classe, e leva em conta a linha de prefixo %attribuções) |
| symbols                                                                                                                | Object                 | **Disponível apenas se a opção generateSymbols estiver definida como Verdade:**                                              |
| symbols.interprocessVariables                                                                          | Object                 | Lista de todas as variáveis de interprocesso                                                                                                 |
| symbols.interprocessVariables.variables                                                | Collection             | Coleção de [objetos variáveis](#variable-objects)                                                                                            |
| symbols.interprocessVariables.size                                                     | Number                 |                                                                                                                                              |
| symbols.processVariables                                                                               | Object                 | Lista de todas as variáveis de processo                                                                                                      |
| symbols.processVariables.variables                                                     | Collection             | Coleção de [objetos variáveis](#variable-objects)                                                                                            |
| symbols.processVariables.size                                                          | Number                 |                                                                                                                                              |
| symbols.localVariables                                                                                 | Uma coleção de objetos | Lista de variáveis locais por método                                                                                                         |
| symbols.localVariables[].code      | Object                 | [objeto código](#code-object)                                                                                                                |
| symbols.localVariables[].variables | Collection             | Coleção de [objetos variáveis](#variable-objects)                                                                                            |
| symbols.methods                                                                                        | Uma coleção de objetos | Lista de métodos                                                                                                                             |
| symbols.methods\[\].code         | Object                 | [objeto código](#code-object)                                                                                                                |
| symbols.methods\[\].callCount    | Number                 | Número de vezes que este método foi chamado                                                                                                  |
| symbols.methods\[\].params       | Collection             | Coleção de tipos de parâmetro (tipo de valor numérico)                                                                    |
| symbols.methods\[\]. threadSafe  | Parâmetros             | Indica se este método é thread seguro                                                                                                        |

Para obter mais informações, consulte [Ferramentas de compilação](../Project/compiler.md#compilation-tools).

###### variável de objetos

`interprocessVariables.variables` and `processVariables.variables` contêm objetos com a seguinte estrutura:

| **Propriedade** | **Tipo** | **Description**                                                                                          |
| --------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| name            | Text     | Nome da variável                                                                                         |
| type            | number   | Tipo da variável (como comando do tipo Valor)                                         |
| arrayDimension  | number   | Para arrays apenas: 1 para arrays monodimensionais, 2 para arrays de duas dimensões      |
| code            | Object   | Para as variáveis de processo e interprocesso: descritor de onde a variável foi definida |

###### objeto de código

A propriedade `code` em `methods.code` e `errors.code` é um objeto com as seguintes propriedades:

| **Propriedade**                                                                                                             | **Tipo**                 | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type                                                                                                                        | Text                     | "projectMethod", "formObjectMethod", "formMethod", "databaseMethod", "triggerMethod", "executeOnServer" (ao chamar um método do projeto com o atributo *Executar no servidor*), "executeFormula" (ao executar uma fórmula através de [PROCESS 4D TAGS](../commands-legacy/process-4d-tags.md) ou avaliação de uma fórmula em um documento 4D Write Pro), "class", "classFunction", "formObjectExpression" (para erros que ocorrem em expressões associadas ao formulário de objetos) |
| path                                                                                                                        | Text                     | Caminho do método (mesmo formato que [METHOD OPEN PATH](../commands-legacy/method-open-path.md))                                                                                                                                                                                                                                                                                                                                                                                                                           |
| file                                                                                                                        | 4D. File | Arquivo do método                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                                                                                                                             |                          | **Retornado dependendo do valor da propriedade `type`:**                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| methodName                                                                                                                  | Text                     | Métodos proyecto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| tabela                                                                                                                      | Number                   | Número da tabela (retornado para um gatilho, um método de formulário da tabela ou um método de objeto de formulário da tabela)                                                                                                                                                                                                                                                                                                                                                                                             |
| formName                                                                                                                    | Text                     | Nome do formulário (retornado para um método do formulário)                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| objectName                                                                                                                  | Text                     | Nome do objeto do formulário (retornado para um método do objeto)                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Esta propriedade só está disponível quando não estiver selecionado <a href="#font-theme">tema de fonte</a>. | Text                     | Nome da propriedade objeto de formulário (retornado para uma expressão de objeto de forma)                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| className                                                                                                                   | Text                     | Nome da turma                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| functionName                                                                                                                | Text                     | Nome da função de classe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| databaseMethod                                                                                                              | Number                   | Índice de método                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

#### Exemplos

Para fazer uma verificação de sintaxe apenas, passe uma coleção vazia para o parâmetro de alvos:

```4d
 var $status : Objeto
 var $options:={}
 $options.targets:=Nova coleção //Vazio pela verificação de sintaxe
 $status:=Compilação de projeto($options)
```

Compilar o projeto atual usando apenas as opções do compilador das configurações de estrutura:

```4d
 var $status : Object
 $status:=Compile project
```

Em um Silicon Mac, compile o projeto atual apenas para ARM:

```4d
 var $status : Object
 var $options:={}
 $options.targets:=New collection("arm64_macOS_lib")
 $status:=Compile project($options)
```

Compilar um projeto diferente do projeto atual:

```4d
 var $status : Object
 var $projectFile: 4D.File
 $projectFile:=Folder(fk documents folder).file("Databases/myApp/Project/myApp.4DProject")
 $status:=Compile project($projectFile)
```

Compilar um projeto e declarar seu componente:

```4d
 var $status : Object
 var $component : 4D.File
 var $options:={}
 $component:=Folder(fk documents folder).file("Components/myComponent.4dz")
 $options.components:=New collection($component)
 $status:=Compile project($options)
```

Desativar avisos 518.1 e 518.2 ao compilar seu projeto:

```4d
var $options:={}
$options.warnings:=[]$options.warnings.push({major: 518; minor: 1; enabled: False})
$options.warnings.push({major: 518; minor: 2; enabled: False})
var $result:=Compile project($options)
```

#### Veja também

[BUILD APPLICATION](../commands-legacy/build-application.md)

#### Propriedades

|                |                                 |
| -------------- | ------------------------------- |
| Command number | 1760                            |
| Thread safe    | &amp;cross; |
