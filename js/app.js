var $ = require("jquery");
$(document).ready(function(){
	
	function listar(){
	
		$.get("https://ead-crud.firebaseio.com/clientes.json", function(json){
			var table = $("#table");
			$.each(json, function(i, e){
				var html = [];
				html.push("<tr>");
				html.push("  <td>" + e.uid + "</td>");
				html.push("  <td>" + e.nome + "</td>");
				html.push("</tr>");
				table.append(html.join(""));
			});
		});
	};	
	
	$("#show").on("click", function(){
		listar();	
	});
	
	$("#save").on("click", function(){
		var key = firebase.database().ref().push().key;	
		var contato = {
			uid: key,
			nome: $("#name").val()
		};	
		
		var updates = {};
		updates["clientes" + "/" + key] = contato;
		
		firebase.database().ref().update(updates);
	
		alert("Registo salvo" );
		
		listar();
		
	});
	  
});