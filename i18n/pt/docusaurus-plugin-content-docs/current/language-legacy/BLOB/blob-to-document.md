---
id: blob-to-document
title: BLOB TO DOCUMENT
slug: /commands/blob-to-document
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO DOCUMENT.Syntax-->**BLOB TO DOCUMENT** ( *documento* : Text ; *BLOB* : Blob )<!-- END REF-->
<!--REF #_command_.BLOB TO DOCUMENT.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Text | &#8594; | Nome do documento gerado |
| Blob | Blob | &#8594; | Novo conteúdo para o documento |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|6|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.BLOB TO DOCUMENT.Summary-->**BLOB TO DOCUMENT** reescreve todo o conteúdo do documento utilizando os dados armazenados no blob.<!-- END REF-->.  
Você pode passar o nome de um documento existente no *documento*. Se o documento não existir, o comando o cria. Se você passar o nome de um documento existente, certifique-se que ele não está aberto, caso contrário, será gerado um erro. Se você quiser deixar o usuário escolher o documento, use os comandos [Open document](../commands/open-document) ou [Create document](../commands/create-document) e utilize a variável de processo *documento* (ver exemplo).

**Nota de Compatibilidade:** O \* opcional (gestão de resource fork em versões antigas de Mac OS) não é mais compatível com 4D a partir de 4D v16\. Para saber mais veja *Propriedades obsoletas ou removidas*.

## Exemplo 

Você escreve um Sistema de Informação que permite rapidamente armazenar e recuperar documentos. Em um formulário de entrada de dados, você cria um botão que permite salvar um documento que conterá os dados previamente carregados em um campo BLOB. O método para este botão pode ser:

```4d
 $vhDocRef:=Create document("") // Salvar o documento a sua escolha
 If(OK=1) // Se um documento já foi criado
    CLOSE DOCUMENT($vhDocRef) // Não necessitamos mante-lo aberto
    BLOB TO DOCUMENT(Document;[SuaTabela]SeuCampoBLOB) // Escrever o conteúdo do documento
    If(OK=0)
  // Gerir erro
    End if
 End if
```

## Variáveis e conjuntos do sistema 

OK é definido como 1 se o documento está escrito corretamente, caso contrário, OK é definido como 0 e um erro é gerado.

## Tratamento de erros 

* Se você tentar reescrever um documento que não existe ou que já está aberto por outro processo ou aplicativo, o erro adequado do Gerenciador arquivo de é gerado.
* O espaço em disco pode ser insuficiente para escrever o novo conteúdo do documento.
* Erros de E / S pode ocorrer durante a redação do documento.

Em todos os casos, você pode interceptar o erro usando um método [ON ERR CALL](../commands/on-err-call).

## Ver também 

[Create document](../commands/create-document)  
[DOCUMENT TO BLOB](../commands/document-to-blob)  
[Open document](../commands/open-document)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 526 |
| Thread-seguro | yes |
| Modificar variáveis | OK, error |


