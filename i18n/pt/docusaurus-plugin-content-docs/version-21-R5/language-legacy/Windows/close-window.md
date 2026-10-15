---
id: close-window
title: CLOSE WINDOW
slug: /commands/close-window
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE WINDOW.Syntax-->**CLOSE WINDOW** ({ *janela* : Integer })<!-- END REF-->
<!--REF #_command_.CLOSE WINDOW.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janela | Integer | &#8594; | Número de referência da Janela, ou a janela ativa do processo atual, se omitido |
</div>
<!-- END REF-->

## Descrição 

<!--REF #_command_.CLOSE WINDOW.Summary-->CLOSE WINDOW fecha a janela ativa aberta pelo comando [Open window](../commands/open-window) ou [Open form window](../commands/open-form-window) no processo atual.<!-- END REF--> CLOSE WINDOW não faz nada se não houver uma janela personalizada aberta; não fecha as janelas sistema. CLOSE WINDOW tampoco tem efeito se for chamado enquanto um formulário estiver ativo na janela. Deve chamar CLOSE WINDOW quando tiver terminado de utilizar uma janela aberta por [Open window](../commands/open-window) ou [Open form window](../commands/open-form-window)..  

É inútil passar um número a CLOSE WINDOW quando o utiliza para fechar as janelas abertas por [Open window](../commands/open-window) ou [Open form window](../commands/open-form-window) , já que CLOSE WINDOW sempre fechará a última janela criada por um destes comandos.  
  
Se passar um número de referência de janela externa no parâmetro *janela*, CLOSE WINDOW fecha a janela externa especificada. Para maior informação sobre janelas externas, consulte a função .

## Exemplo 

O seguinte exemplo abre uma janela formulario e cria novos registros com o comando [ADD RECORD](../commands/add-record). Ao serem adicionados os registros, a janela se fecha com **CLOSE WINDOW**:

```4d
 FORM SET INPUT([Employees];"Entry")
 $winRef:=Open form window([Employees];"Entry")
 Repeat
    ADD RECORD([Employees]) //Adicionar um novo registro de empregado
 Until(OK=0) //Loop até que o usuário cancele
 CLOSE WINDOW //Fechamento da janela
```

## Ver também 

[Open form window](../commands/open-form-window)  
[Open window](../commands/open-window)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 154 |
| Thread-seguro | no |



