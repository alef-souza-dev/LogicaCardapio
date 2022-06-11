function adicionarPedido() {
  /*var filmeFavorito = document.getElementById("filme").value;*/
  var pedidoEntrada = document.getElementById("entrada").value;
  var retornoEntrada = "";
  var pedidoPratoPrincipal = document.getElementById("pratoPrincipal").value;
  var retornoPratoPrincipal = "";
  var pedidoBebidas = document.getElementById("bebidas").value;
  var retornoBebidas = "";
  var pedidoSobremesa = document.getElementById("sobremesa").value;
  var retornoSobremesa = "";
  var periodo = document.getElementById("cdPeriodo").value;
  var pedido = "";
  if (pedidoEntrada == "" && pedidoPratoPrincipal == "" && pedidoBebidas == "" && pedidoSobremesa == "") {
    pedido = "Escolha ao menos uma opção, nada foi escolhido!";
  }
  else {
    if (periodo == "Manhã") {
      periodo = "Manhã";
      /* Teste da entrada */
      if (pedidoEntrada > 1) {
        retornoEntrada = "Não é possivel mais que uma entrada, selecione somente 1.";
      } else if (pedidoEntrada == "") {
        retornoEntrada = "";
      }
      else {
        retornoEntrada = pedidoEntrada + "x - " + "Ovos";
      }
      /* Teste da Prato Principal */
      if (pedidoPratoPrincipal > 1) {
        retornoPratoPrincipal = "Não é possivel mais que um prato principal, selecione somente 1.";
      } else if (pedidoPratoPrincipal == "") {
        retornoPratoPrincipal = "";
      }
      else {
        retornoPratoPrincipal = pedidoPratoPrincipal + "x - " + "Torradas";
      }

      /* Teste da Bebida */
      if (pedidoBebidas > 0) {
        retornoBebidas = pedidoBebidas + "x - " + "Xicaras de café";
      }
      else {
        retornoBebidas = pedidoBebidas + "";
      }

      /* Teste da Sobremesa */
      if (pedidoSobremesa > 0) {
        retornoSobremesa = "Não é possivel adicionar sobremesa do periodo.";

      }
      else {
        retornoSobremesa = "";
      }
    }
    else {
      periodo = "Noite"
      /* Teste da entrada */
      if (pedidoEntrada > 1) {
        retornoEntrada = "Não é possivel mais que uma entrada, selecione somente 1.";
      } else if (pedidoEntrada == "") {
        retornoEntrada = "";
      }
      else {
        retornoEntrada = pedidoEntrada + "x - " + "Bife";
      }
      /* Teste da Prato Principal */
      if (pedidoPratoPrincipal > 0) {
        retornoPratoPrincipal = pedidoPratoPrincipal + "x - " + "Batatas";
      }
      else {
        retornoPratoPrincipal = pedidoPratoPrincipal + "";
      }

      /* Teste da Bebida */
      if (pedidoBebidas > 1) {
        retornoBebidas = "Não é possivel mais que uma bebida, selecione somente 1.";
      } else if (pedidoBebidas == "") {
        retornoBebidas = "";
      }
      else {
        retornoBebidas = pedidoBebidas + "x - " + "Vinho";
      }

      /* Teste da Sobremesa */
      if (pedidoSobremesa > 1) {
        retornoSobremesa = "Não é possivel mais que uma sobremesa, selecione somente 1.";
      } else if (pedidoSobremesa == "") {
        retornoSobremesa = "";
      }
      else {
        retornoSobremesa = pedidoSobremesa + "x - " + "Bolo";
      }
    }
    pedido = periodo + ", " + retornoEntrada + ", " + retornoPratoPrincipal + ", " + retornoBebidas + ", " + retornoSobremesa;
  }

  /*if (filmeFavorito.endsWith(".jpg")) {
    listarFilmesNaTela(filmeFavorito);
  } else {
    console.error("Endereço de filme inválido");
  }*/
  listarPedidoNaTela(pedido);
  /*document.getElementById("filme").value = "";*/
  /*pedido.value = "";
  /*console.error(filme);*/
}

function listarPedidoNaTela(pedido) {
  console.log(pedido);
  /*var elementoFilmeFavorito = "<img src =" + filme + ">";*/
  var elementoPedido = "<p class='page-subtitle'> " + pedido + "</p>";
  var elementoListapedido = document.getElementById("listaPedidos");
  elementoListapedido.innerHTML =
    elementoListapedido.innerHTML + elementoPedido;
}
