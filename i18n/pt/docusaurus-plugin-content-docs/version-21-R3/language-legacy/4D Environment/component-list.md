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

<!--REF #_command_.COMPONENT LIST.Summary-->O comando COMPONENT LIST dimensiona e preenche a matriz *arrayComponentes* com os nomes dos componentes carregados pela aplicação 4D para o banco de dados atual.<!-- END REF--> 

Ao abrir uma base, 4D carrega os componentes válidos localizados na pasta Componentes:

* A pasta Componentes localizada junto ao arquivo executável da aplicação 4D,
* E a pasta Componentes que se encontra junto ao arquivo de estrutura.

**Lembre**: Se o mesmo componente está nas duas localizações, 4D só carregara o localizado junto a estrutura.

Este comando pode ser chamado desde o banco de dados local ou desde um componente. Se o banco de dados não utilizar componentes, o array *arrayComponentes* é devolvido vazio

Os nomes dos componentes são os nomes dos arquivos de estrutura dos bancos de dados da matriz (.4db, .4dc ou .4dbase). Este comando pode ser usado para configurar arquiteturas e interfaces modulares, que oferecem funcionalidades adicionais em função da presença dos componentes.

Para maiores informações sobre componentes 4D, por favor consulte o Manual de Desenho.

## Ver também 

[PLUGIN LIST](../commands/plugin-list)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1001 |
| Thread-seguro | yes |


