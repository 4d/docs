---
id: set-application-color-scheme
title: SET APPLICATION COLOR SCHEME
slug: /commands/set-application-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.SET APPLICATION COLOR SCHEME.Syntax-->**SET APPLICATION COLOR SCHEME** ( *esquemaCor* : Text )<!-- END REF-->
<!--REF #_command_.SET APPLICATION COLOR SCHEME.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| esquemaCor | Text | &#8594; | "light/claro", "dark/escuro" ou "inherited/herdado" |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|19|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.SET APPLICATION COLOR SCHEME.Summary-->O comando **SET APPLICATION COLOR SCHEME** define o esquema de cores a usar no nível da aplicação para a sessão atual.<!-- END REF--> Este esquema será aplicado a formulários que não declaram um esquema específico (um esquema de cores definido no nível do formulário tem prioridade sobre o nível da aplicação).

**Nota:** Este comando só funciona em macOS. Em Windows, o único esquema disponível é "light/claro".

No parâmetro *esquemaCor*, passe um esquema de cores a aplicar:

* **"light/claro"** \- a aplicação vai usar o tema padrão claro
* **"dark/escuro"** \- a aplicação vai usar o tema padrão escuro
* **"inherited/herdado"** \- a aplicação vai herdar a partir do nível superior (das Configurações)

## Exemplo 

```4d
  // Força a aplicação atual para escuro
 SET APPLICATION COLOR SCHEME("dark")
```

## Ver também 

[FORM Get color scheme](../commands/form-get-color-scheme)  
[Get Application color scheme](../commands/get-application-color-scheme)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1762 |
| Thread-seguro | no |


