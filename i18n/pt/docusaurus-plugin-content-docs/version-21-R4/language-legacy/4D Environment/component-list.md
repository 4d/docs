---
id: component-list
title: COMPONENT LIST
slug: /commands/component-list
displayed_sidebar: docs
---

<!--REF #_command_.COMPONENT LIST.Syntax-->**COMPONENT LIST** ( *arrayComponentes* : Text array )<!-- END REF-->
<!--REF #_command_.COMPONENT LIST.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| arrayComponentes | Text array | &#8592; | Nomes dos componentes |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.COMPONENT LIST.Summary-->O comando `COMPONENT LIST` dimensiona e preenche a matriz *arrayComponentes* com os nomes dos componentes carregados pela aplicação 4D para o projeto atual.<!-- END REF--> 

Ao abrir um projeto, 4D carrega os componentes válidos:

* encontrados na [pasta Components do seu projeto](../../Project/architecture.md#components).
* declarados no [arquivo **dependencies.json** do seu projeto](../../Project/components.md#dependenciesjson-and-environment4djson).

**Lembre**: Se o mesmo componente estiver instalado em diferentes localizações, uma [ordem de prioridade](../../Project/components.md#priority) é aplicada.

Este comando pode ser chamado desde o projeto local ou desde um componente. Se o projeto não utilizar componentes, o array *arrayComponentes* é devolvido vazio

Os nomes dos componentes são os nomes dos arquivos de estrutura dos bancos de dados da matriz (.4db, .4dc ou .4dbase). Este comando pode ser usado para configurar arquiteturas e interfaces modulares, que oferecem funcionalidades adicionais em função da presença dos componentes.

Para maiores informações sobre componentes 4D, por favor consulte [esta página](../../Concepts/components.md).

## Ver também 

[PLUGIN LIST](../commands/plugin-list)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1001 |
| Thread-seguro | yes |


