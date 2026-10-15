---
id: get-application-color-scheme
title: Get Application color scheme
slug: /commands/get-application-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.Get Application color scheme.Syntax-->**Get Application color scheme** ( * ) : Text<!-- END REF-->
<!--REF #_command_.Get Application color scheme.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594; | Retorna o esquema de cores do banco de dados host/anfitrião |
| Resultado | Text | &#8592; | Esquema de cores da aplicação atual |
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

<!--REF #_command_.Get Application color scheme.Summary-->O comando **Get Application color scheme** retorna o nome do esquema de cor atual para uso ao nível da aplicação.<!-- END REF--> 

**Nota:** Em Windows, esse comando sempre retorna "light"/claro.

O esquema de cores é definido por:

* uma chamada ao comando [SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme);
* Se [SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme) não for chamado ou então for chamado com o parâmetro "inherited/herdado", vá em Configurações (Configurações do banco de dados host no caso de um componente);
* Se configurações estiver estabelecido como "inherited", nas preferências de usuário do sistema operativo.

O parâmetro *\** é útil quando o comando for chamado de um componente: quando for passado, o comando retorna o esquema de cores do banco de dados host. 

Veja a descrição do comando [SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme) para detalhes sobre os nomes de esquema de cores. 

## Exemplo 

```4d
 var $colorScheme : Text
 
  // Recupera o esquemaCor do banco de dados host
 $colorScheme:=Get Application color scheme(*)
```

## Ver também 

[FORM Get color scheme](../commands/form-get-color-scheme)  
[SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1763 |
| Thread-seguro | no |


