/*===========================================
	Variáveis Globais
===========================================*/
var conteudo;
var divCampoTexto = false;
var divCamposImagem = false;
var divCamposLink = false;
var divCamposInput = false;

/*===========================================
	Função: inserirParagrafo
	Descrição: Insere um parágrafo na div conteúdo
	Autor: Rodrigo Silva
	Última atualização: 23/04/2020
===========================================*/
function inserirParagrafo()
{
	var texto = $("#texto").val();
	conteudo = $("#conteudo").html();	
	$("#conteudo").html(conteudo + "<p>" + texto + "</p><br/>");
}

/*===========================================
	Função: inserirImagem
	Descrição: Insere uma imagem na div conteúdo
	Autor: Rodrigo Silva
	Última atualização: 23/04/2020
===========================================*/
function inserirImagem()
{
	var url = $("#url_img").val();
	var legenda = $("#legenda").val();	
	conteudo = $("#conteudo").html();					
	$("#conteudo").html(conteudo + "<img src='"+ url +"' alt='"+ legenda +"' title='"+ legenda +"' width='500' /><br/>");
}

/*===========================================
	Função: inserirLink
	Descrição: Insere um link na div conteúdo
	Autor: Rodrigo Silva
	Última atualização: 23/04/2020
===========================================*/
function inserirLink()
{
	var url = $("#url").val();
	var link = $("#link").val();
	conteudo = $("#conteudo").html();	
	$("#conteudo").html(conteudo + "<a href='"+ url +"' target='_blank'>"+ link +"</a><br/>");
}

/*===========================================
	Função: inserirInput
	Descrição: Insere um campo texto na div conteúdo
	Autor: Rodrigo Silva
	Última atualização: 23/04/2020
===========================================*/
function inserirInput()
{
	var label = $("#label").val();
	var id = $("#id").val();
	conteudo = $("#conteudo").html();
	$("#conteudo").html(conteudo + "<label for='"+ id +"'>"+ label +": </label><input type='text' id='"+ id +"' name='"+ id +"' /><br/><br/>");
}

/*===========================================
	Função: inserirConteudo
	Descrição: Chama as funções para inserção de conteúdo
	Autor: Rodrigo Silva
	Última atualização: 23/04/2020
===========================================*/
function inserirConteudo()
{
	if(divCampoTexto) inserirParagrafo();
	if(divCamposImagem) inserirImagem();
	if(divCamposLink) inserirLink();
	if(divCamposInput) inserirInput();
}

/*===========================================
	Função: exibirCampos
	Descrição: Exibe os campos de acordo com a seleção do usuário
	Autor: Rodrigo Silva
	Última atualização: 23/04/2020
===========================================*/
function exibirCampos()
{
	var tipo = $("#tipo").val();
	
	switch(tipo)
	{
		case "1":
			$("#divCampoTexto").show(500);
			divCampoTexto = true;
			desabilitarCampos("texto");
		break;
		case "2":
			$("#divCamposImagem").show(500);
			divCamposImagem = true;
			desabilitarCampos("imagem");
		break;
		case "3":
			$("#divCamposLink").show(500);
			divCamposLink = true;
			desabilitarCampos("link");
		break;	
		case "4":
			$("#divCamposInput").show(500);
			divCamposInput = true;
			desabilitarCampos("input");
		break;		
	}
}

/*===========================================
	Função: desabilitarCampos
	Descrição: Esconde os outros campos, além do tipo selecionado pelo usuário
	Autor: Rodrigo Silva
	Última atualização: 23/04/2020
===========================================*/
function desabilitarCampos(tipoAtual)
{
	switch(tipoAtual)
	{
		case "texto":
			$("#divCamposImagem").hide();
			$("#divCamposLink").hide();
			$("#divCamposInput").hide();
			divCamposImagem = false;
			divCamposLink = false;
			divCamposInput = false;
		break;
		case "imagem":
			$("#divCampoTexto").hide();
			$("#divCamposLink").hide();
			$("#divCamposInput").hide();
			divCampoTexto = false;
			divCamposLink = false;
			divCamposInput = false;
		break;
		case "link":
			$("#divCampoTexto").hide();
			$("#divCamposImagem").hide();
			$("#divCamposInput").hide();
			divCampoTexto = false;
			divCamposImagem = false;
			divCamposInput = false;
		break;	
		case "input":
			$("#divCampoTexto").hide();
			$("#divCamposImagem").hide();
			$("#divCamposLink").hide();
			divCampoTexto = false;
			divCamposImagem = false;
			divCamposLink = false;
		break;		
	}
}

/*===========================================
	Função: limparConteúdo
	Descrição: Limpa todo conteúdo da div
	Autor: Rodrigo Silva
	Última atualização: 23/04/2020
===========================================*/
function limparConteudo()
{
	$("#conteudo").html("");
}		