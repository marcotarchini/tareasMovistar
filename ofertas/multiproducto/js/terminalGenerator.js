'use strict';
var objetoCaracteristicasTerminales,
  terminalDataXML,
  xmlDoc,
  terminalsUnder15k = [],
  topTwelve = [],
  terminalsUnder15k = [],
  numTerminales = 12;
$(function () {
  'use strict';

  function TerminalDataCaracteristicas(a) {
    for (var b = 0; b < objetoCaracteristicasTerminales.length; b++)
      objetoCaracteristicasTerminales[b].IdEquipo === a
        ? ((this.IdEquipo = objetoCaracteristicasTerminales[b].IdEquipo),
          (this.Pantalla = objetoCaracteristicasTerminales[b].Pantalla),
          (this.CamaraPrincipal = objetoCaracteristicasTerminales[b].CamaraPrincipal),
          (this.CamaraFrontal = objetoCaracteristicasTerminales[b].CamaraFrontal),
          (this.Almacenamiento = objetoCaracteristicasTerminales[b].Almacenamiento),
          (this.Procesador = objetoCaracteristicasTerminales[b].Procesador),
          (this.SO = objetoCaracteristicasTerminales[b].SO))
        : null;
  }

  function setCaracteristicas(a, b) {
    try {
      null == a.IdEquipo
        ? b.getElementsByClassName('js-info-terminal')[0].remove()
        : ((b.getElementsByClassName('js-info-terminal')[0].attributes['data-camara'].value = a.CamaraPrincipal),
          (b.getElementsByClassName('js-info-terminal')[0].attributes['data-memoria'].value = a.Almacenamiento),
          (b.getElementsByClassName('js-info-terminal')[0].attributes['data-pantalla'].value = a.Pantalla),
          (b.getElementsByClassName('js-info-terminal')[0].attributes['data-frontal'].value = a.CamaraFrontal),
          (b.getElementsByClassName('js-info-terminal')[0].attributes['data-procesador'].value = a.Procesador),
          (b.getElementsByClassName('js-info-terminal')[0].attributes['data-so'].value = a.SO));
    } catch (a) {}
  }

  function setPlanOption(a, b) {
    for (var c = 0; c < b.getElementsByClassName('radioPlanOption').length; c++)
      (b.getElementsByClassName('radioPlanOption')[c].attributes.value.value =
        a.Modelo + b.getElementsByClassName('radioPlanOption')[c].attributes.value.value),
        (b.getElementsByClassName('radioPlanOption')[c].attributes.name.value =
          b.getElementsByClassName('radioPlanOption')[c].attributes.name.value +
          a.Modelo.replace(/ /g, '-').toLowerCase()),
        (b.getElementsByClassName('radioPlanOption')[c].attributes.id.value =
          b.getElementsByClassName('radioPlanOption')[c].attributes.id.value +
          a.Modelo.replace(/ /g, '-').toLowerCase()),
        (b.getElementsByClassName('radioPlanOption')[c].attributes['data-equipo'].value = a.Modelo.replace(
          / /g,
          '-'
        ).toLowerCase()),
        (b.getElementsByClassName('__plan')[c].attributes['for'].value =
          b.getElementsByClassName('__plan')[c].attributes['for'].value + a.Modelo.replace(/ /g, '-').toLowerCase());
  }

  function sendGTModelo(a, b) {
    (b.getElementsByClassName('sendGTM')[0].attributes['data-modal-title'].value =
      a.Modelo + ' ' + b.getElementsByClassName('sendGTM')[0].attributes['data-modal-title'].value),
      (b.getElementsByClassName('sendGTM')[0].attributes['data-accion'].value =
        a.Modelo + ' ' + b.getElementsByClassName('sendGTM')[0].attributes['data-accion'].value),
      (b.getElementsByClassName('sendGTM')[0].attributes['data-valor-plan'].value =
        a.Modelo + ' ' + b.getElementsByClassName('sendGTM')[0].attributes['data-valor-plan'].value);
  }

  function reemplazarAcentos(a) {
    var b = {
        ??: 'a',
        ??: 'e',
        ??: 'i',
        ??: 'o',
        ??: 'u',
        ??: 'a',
        ??: 'e',
        ??: 'i',
        ??: 'o',
        ??: 'u',
        ??: 'n',
        ??: 'A',
        ??: 'E',
        ??: 'I',
        ??: 'O',
        ??: 'U',
        ??: 'A',
        ??: 'E',
        ??: 'I',
        ??: 'O',
        ??: 'U',
        ??: 'N',
      },
      c = /[??????????????????????]/gi;
    return a.replace(c, function (a) {
      return b[a];
    });
  }

  function showSticker(a, b, c) {
    switch (a) {
      case '':
        b.getElementsByClassName(c)[0].remove();
        break;
      default:
        (b.getElementsByClassName(c)[0].src =
          'images/global/' + reemplazarAcentos(a.replace(/ /g, '').toLowerCase() + '.png')),
          (b.getElementsByClassName(c)[0].style.display = 'block');
    }
  }

  function showStickerLiberados(a, b, c) {
    switch (a) {
      case 'nuevo':
        b.getElementsByClassName('js__terminal-nuevo')[0].innerHTML = '\xA1Nuevo!';
        break;
      case 'exclusivo web':
        b.getElementsByClassName('js__terminal-exclusivo')[0].innerHTML = '\xA1Exclusivo Web!';
        break;
      case '':
        b.getElementsByClassName(c)[0].remove();
        break;
      default:
        (b.getElementsByClassName(c)[0].src =
          'images/global/' + reemplazarAcentos(a.replace(/ /g, '').toLowerCase() + '.png')),
          (b.getElementsByClassName(c)[0].style.display = 'block');
    }
  }

  function pegatinasTerminalSales(a, b) {
    !1 !== a.cucardaArribaIzq && 0 < b.getElementsByClassName('js-cucarda-arriba-izquierda').length
      ? showSticker(a.cucardaArribaIzq, b, 'js-cucarda-arriba-izquierda')
      : null,
      !1 !== a.cucardaArribaDer && 0 < b.getElementsByClassName('js-cucarda-arriba-derecha').length
        ? showSticker(a.cucardaArribaDer, b, 'js-cucarda-arriba-derecha')
        : null,
      !1 !== a.cucardaMedioIzq && 0 < b.getElementsByClassName('js-cucarda-medio-izquierda').length
        ? showSticker(a.cucardaMedioIzq, b, 'js-cucarda-medio-izquierda')
        : null,
      !1 !== a.cucardaMedioDer && 0 < b.getElementsByClassName('js-cucarda-medio-derecha').length
        ? showSticker(a.cucardaMedioDer, b, 'js-cucarda-medio-derecha')
        : null,
      !1 !== a.cucardaAbajoIzq && 0 < b.getElementsByClassName('js-cucarda-abajo-izquierda').length
        ? showSticker(a.cucardaAbajoIzq, b, 'js-cucarda-abajo-izquierda')
        : null,
      !1 !== a.cucardaAbajoDer && 0 < b.getElementsByClassName('js-cucarda-abajo-derecha').length
        ? showSticker(a.cucardaAbajoDer, b, 'js-cucarda-abajo-derecha')
        : null;
  }

  function pegatinasTerminalSalesLiberados(a, b) {
    !1 !== a.cucardaArribaIzq && 0 < b.getElementsByClassName('js-cucarda-arriba-izquierda').length
      ? showStickerLiberados(a.cucardaArribaIzq, b, 'js-cucarda-arriba-izquierda')
      : null,
      !1 !== a.cucardaArribaDer && 0 < b.getElementsByClassName('js-cucarda-arriba-derecha').length
        ? showStickerLiberados(a.cucardaArribaDer, b, 'js-cucarda-arriba-derecha')
        : null,
      !1 !== a.cucardaMedioIzq && 0 < b.getElementsByClassName('js-cucarda-medio-izquierda').length
        ? showStickerLiberados(a.cucardaMedioIzq, b, 'js-cucarda-medio-izquierda')
        : null,
      !1 !== a.cucardaMedioDer && 0 < b.getElementsByClassName('js-cucarda-medio-derecha').length
        ? showStickerLiberados(a.cucardaMedioDer, b, 'js-cucarda-medio-derecha')
        : null,
      !1 !== a.cucardaAbajoIzq && 0 < b.getElementsByClassName('js-cucarda-abajo-izquierda').length
        ? showStickerLiberados(a.cucardaAbajoIzq, b, 'js-cucarda-abajo-izquierda')
        : null,
      !1 !== a.cucardaAbajoDer && 0 < b.getElementsByClassName('js-cucarda-abajo-derecha').length
        ? showStickerLiberados(a.cucardaAbajoDer, b, 'js-cucarda-abajo-derecha')
        : null;
  }

  function returnGridsToUpdate() {
    return document.getElementsByClassName('js__terminal-grid');
  }

  function returnGridsToUpdateMobile() {
    return document.getElementsByClassName('js__terminal-grid-mobile');
  }

  function swapPuntoComa(a) {
    return a.toLocaleString().replace(',', 'D').replace('.', ',').replace('D', '.').replace(',00', '');
  }

  function swapPuntoComaContraFactura(a) {
    return a.toLocaleString().replace(',', 'D').replace(',', '.').replace('D', '.').replace(',00', '');
  }

  function terminalesOrdenAsignadoAscendente(c, a) {
    return parseInt(c.getElementsByTagName('assigned_order')[0].innerHTML.slice(0, -3).slice(9)) <
      parseInt(a.getElementsByTagName('assigned_order')[0].innerHTML.slice(0, -3).slice(9))
      ? -1
      : parseInt(c.getElementsByTagName('assigned_order')[0].innerHTML.slice(0, -3).slice(9)) >
        parseInt(a.getElementsByTagName('assigned_order')[0].innerHTML.slice(0, -3).slice(9))
      ? 1
      : 0;
  }

  function cuotaContraFactura(a) {
    var c,
      b = Math.floor;
    return (
      0 < $('.js-contra-factura-3').length && (c = b(parseInt(a.replace(',', '') / 3)).toLocaleString()),
      0 < $('.js-contra-factura-6').length && (c = b(parseInt((1.1 * a.replace(',', '')) / 6)).toLocaleString()),
      0 < $('.js-contra-factura-12').length && (c = b(parseInt((1.295 * a.replace(',', '')) / 12)).toLocaleString()),
      c
    );
  }

  function TerminalData(a) {
    (this.ID = a.getElementsByTagName('g:id')[0].innerHTML.slice(0, -3).slice(9)),
      (this.Modelo = a.getElementsByTagName('title')[0].innerHTML.slice(0, -3).slice(9)),
      (this.Precio = swapPuntoComa(a.getElementsByTagName('g:price')[0].innerHTML.slice(0, -4))),
      (this.Imagen = a.getElementsByTagName('g:image_link')[0].innerHTML.replace('http://', 'https://')),
      (this.StoreLink = a.getElementsByTagName('link')[0].innerHTML.slice(0, -3).slice(9)),
      (this.Descuento = a.getElementsByTagName('g:porc_off')[0].innerHTML.slice(0, -3).slice(9)),
      (this.Periodo = a.getElementsByTagName('g:installment')[0].children[0].innerHTML),
      (this.ValorCuota = swapPuntoComa(a.getElementsByTagName('g:installment')[0].children[1].innerHTML.slice(0, -4))),
      (this.montoCuotas = a
        .getElementsByTagName('g:valor_cuotas')[0]
        .innerHTML.replace(',', 'D')
        .replace('.', ',')
        .replace('D', '.')
        .replace(',00', '')),
      (this.cantCuotas = a.getElementsByTagName('g:cuotas')[0].innerHTML),
      (this.StoreLinkId = this.StoreLink.slice(31).slice(0, -5)),
      (this.brand = a.getElementsByTagName('g:brand')[0].innerHTML.slice(9).slice(0, -3)),
      (this.description = a.getElementsByTagName('description')[0].firstElementChild),
      (this.availability = !0),
      (this.assigned_order = a.getElementsByTagName('assigned_order')[0].innerHTML.slice(0, -3).slice(9)),
      (this.promo_mes =
        0 === a.getElementsByTagName('g:promo_mes').length ? null : a.getElementsByTagName('g:promo_mes')[0].innerHTML),
      a.getElementsByTagName('g:sale_price')[0] === void 0
        ? ((this.priceSale = !1),
          (0 < $('.js-contra-factura-3').length ||
            0 < $('.js-contra-factura-6').length ||
            0 < $('.js-contra-factura-12').length) &&
            (this.CuotaContraFactura = swapPuntoComaContraFactura(
              cuotaContraFactura(a.getElementsByTagName('g:price')[0].innerHTML.slice(0, -7))
            )))
        : ((this.priceSale = a
            .getElementsByTagName('g:sale_price')[0]
            .innerHTML.slice(0, -4)
            .replace(',', 'D')
            .replace('.', ',')
            .replace('D', '.')
            .replace(',00', '')),
          (0 < $('.js-contra-factura-3').length ||
            0 < $('.js-contra-factura-6').length ||
            0 < $('.js-contra-factura-12').length) &&
            (this.CuotaContraFactura = swapPuntoComaContraFactura(
              cuotaContraFactura(a.getElementsByTagName('g:sale_price')[0].innerHTML.slice(0, -7))
            ))),
      (this.discount =
        '' !== a.getElementsByTagName('g:porc_off')[0].innerHTML &&
        a.getElementsByTagName('g:porc_off')[0].innerHTML.slice(0, -3).slice(9)),
      a.getElementsByTagName('g:cucarda_arriba_izq')[0] !== void 0 &&
        ('0' === a.getElementsByTagName('g:cucarda_arriba_izq')[0].innerHTML
          ? (this.cucardaArribaIzq = !1)
          : (this.cucardaArribaIzq = a.getElementsByTagName('g:cucarda_arriba_izq')[0].innerHTML)),
      a.getElementsByTagName('g:cucarda_arriba_der')[0] !== void 0 &&
        ('0' === a.getElementsByTagName('g:cucarda_arriba_der')[0].innerHTML
          ? (this.cucardaArribaDer = !1)
          : (this.cucardaArribaDer = a.getElementsByTagName('g:cucarda_arriba_der')[0].innerHTML)),
      a.getElementsByTagName('g:cucarda_medio_izq')[0] !== void 0 &&
        ('0' === a.getElementsByTagName('g:cucarda_medio_izq')[0].innerHTML
          ? (this.cucardaMedioIzq = !1)
          : (this.cucardaMedioIzq = a.getElementsByTagName('g:cucarda_medio_izq')[0].innerHTML)),
      a.getElementsByTagName('g:cucarda_medio_der')[0] !== void 0 &&
        ('0' === a.getElementsByTagName('g:cucarda_medio_der')[0].innerHTML
          ? (this.cucardaMedioDer = !1)
          : (this.cucardaMedioDer = a.getElementsByTagName('g:cucarda_medio_der')[0].innerHTML)),
      a.getElementsByTagName('g:cucarda_abajo_izq')[0] !== void 0 &&
        ('0' === a.getElementsByTagName('g:cucarda_abajo_izq')[0].innerHTML
          ? (this.cucardaAbajoIzq = !1)
          : (this.cucardaAbajoIzq = a.getElementsByTagName('g:cucarda_abajo_izq')[0].innerHTML)),
      a.getElementsByTagName('g:cucarda_abajo_der')[0] !== void 0 &&
        ('0' === a.getElementsByTagName('g:cucarda_abajo_der')[0].innerHTML
          ? (this.cucardaAbajoDer = !1)
          : (this.cucardaAbajoDer = a.getElementsByTagName('g:cucarda_abajo_der')[0].innerHTML));
  }

  function infoTerminal(a, b) {
    try {
      (b.getElementsByClassName('js-info-terminal')[0].attributes['data-image'].value = a.Imagen),
        (b.getElementsByClassName('js-info-terminal')[0].attributes['data-title'].value = a.Modelo);
    } catch (a) {}
  }

  function fillTerminalData(a, b) {
    (b.getElementsByClassName('js__terminal-image')[0].src = a.Imagen),
      (b.getElementsByClassName('js__terminal-brand')[0].innerHTML = a.brand),
      (b.getElementsByClassName('js__terminal-name')[0].innerHTML = a.Modelo.replace(a.brand + '\xA0', '').replace(
        a.brand + ' ',
        ''
      )),
      (b.getElementsByClassName('js__terminal-cuotas')[0].innerHTML = a.ValorCuota),
      (b.getElementsByClassName('js__cant-cuotas')[0].innerHTML = a.cantCuotas),
      (b.getElementsByClassName('js__terminal-link')[0].href = a.StoreLink),
      0 < b.getElementsByClassName('js__terminal-exclusivo').length &&
        (!0 === a.exclusivo
          ? (b.getElementsByClassName('js__terminal-exclusivo')[0].innerHTML = '\xA1Exclusivo Online!')
          : (b.getElementsByClassName('js__terminal-exclusivo')[0].innerHTML = ' &nbsp; ')),
      '' === a.Descuento
        ? ((b.getElementsByClassName('js__terminal-contenedor-descuento')[0].style.visibility = 'hidden'),
          (b.getElementsByClassName('js__terminal-precio-tachado')[0].parentElement.style.visibility = 'hidden'),
          (b.getElementsByClassName('js__terminal-precio')[0].innerHTML = a.Precio))
        : ((b.getElementsByClassName('js__terminal-descuento')[0].innerHTML = a.Descuento + '%'),
          (b.getElementsByClassName('js__terminal-precio-tachado')[0].innerHTML = a.Precio),
          (b.getElementsByClassName('js__terminal-precio')[0].innerHTML = a.priceSale)),
      infoTerminal(a, b);
    var c = new TerminalDataCaracteristicas(a.ID);
    setCaracteristicas(c, b), setPlanOption(a, b), pegatinasTerminalSales(a, b), sendGTModelo(a, b);
  }

  function terminals15K(a) {
    for (var b = a.childElementCount, c = 0, d = 0, e = 0; e < b; e++) {
      (d = parseInt(a.children[e].getElementsByTagName('g:price')[0].innerHTML.slice(0, -7).replace(',', ''))),
        void 0 !== a.children[e].getElementsByTagName('g:sale_price')[0] &&
          (c = parseInt(a.children[e].getElementsByTagName('g:sale_price')[0].innerHTML.slice(0, -7).replace(',', '')));
      var f = parseInt(a.children[e].getElementsByTagName('assigned_order')[0].innerHTML.slice(0, -3).slice(9));
      0 === c
        ? 18e3 >= d && '0' !== f && '' !== f && terminalsUnder15k.push(a.children[e])
        : 18e3 >= c && '0' !== f && '' !== f && terminalsUnder15k.push(a.children[e]),
        (c = 0);
    }
    var g = [];
    for (var e in terminalsUnder15k)
      g[parseInt(terminalsUnder15k[e].getElementsByTagName('assigned_order')[0].innerHTML.slice(0, -3).slice(9))] =
        terminalsUnder15k[e];
    for (var e in ((terminalsUnder15k = []), g)) terminalsUnder15k.push(g[e]);
    return terminalsUnder15k;
  }

  function filtroSaleTime(a) {
    for (var b = [], c = 0; c < a.length; c++)
      0 !== a[c].getElementsByTagName('g:sale_time').length &&
      '1' === a[c].getElementsByTagName('g:sale_time')[0].innerHTML
        ? b.push(a[c])
        : null;
    return b;
  }

  function topTwelveTerminals(a) {
    for (var b, c = a.childElementCount, d = 1; d < c; d++)
      (b = a.children[d].getElementsByTagName('assigned_order')[0].innerHTML),
        '0' !== b &&
          '' !== b &&
          ((b = parseInt(b.slice(0, -3).slice(9))),
          a.children[d].setAttribute('grid_position', b),
          topTwelve.push(a.children[d]));
    for (var e = [], f = 1; 12 >= f; f++)
      for (var g, h = 0; h < topTwelve.length; h++)
        (g = topTwelve[h].attributes[0].value), g === f.toString() && e.push(topTwelve[h]);
    return (topTwelve = e), topTwelve;
  }

  function filtrarTopMobilesSamsungNuevos(a) {
    for (var b, c = a.childElementCount - 1, d = [], e = 0; e < c; e++) {
      (b = ''),
        void 0 !== a.children[e].getElementsByTagName('g:brand')[0] &&
          (b = a.children[e].getElementsByTagName('g:brand')[0].innerHTML);
      var f = a.children[e].getElementsByTagName('g:condition')[0].innerHTML;
      'nuevo' === f && !0 === b.includes('Samsung') && d.push(a.children[e]);
    }
    return d.sort(terminalesOrdenAsignadoAscendente), d;
  }

  function terminalGridFinder() {
    for (var a, b, c = returnGridsToUpdate(), d = 0; d < c.length; d++) {
      (a = c[d]),
        (a = a.getElementsByClassName('js__terminal-data')),
        (b = a.length > topTwelve.length ? topTwelve.length : a.length);
      for (var e, f = 0; f < b; f++) (e = new TerminalData(topTwelve[f])), fillTerminalData(e, a[f]);
    }
    c = returnGridsToUpdateMobile();
    for (var g = 0; g < c.length; g++) {
      (a = c[g]),
        (a = a.getElementsByClassName('js__terminal-data')),
        (b = a.length > topTwelve.length ? topTwelve.length : a.length);
      for (var h, j = 0; j < b; j++) (h = new TerminalData(topTwelve[j])), fillTerminalData(h, a[j]);
    }
    $('input[checked]').prop('checked', !0);
  }

  function parseXML(a) {
    if (window.DOMParser) {
      var b = new DOMParser();
      (xmlDoc = b.parseFromString(a, 'text/xml')), (xmlDoc = xmlDoc.firstElementChild.firstElementChild);
    } else (xmlDoc = new ActiveXObject('Microsoft.XMLDOM')), (xmlDoc.async = !1), xmlDoc.loadXML(a);
  }

  function showBannerNoXML() {
    $('.planes-con-equipo-static').attr('style', 'display:block;');
  }

  function hideplanesConEquipoBanner() {
    $('.con-equipo').remove();
  }

  function hideplanesConEquipoTerminales() {
    $('.terminalCarousel').remove();
  }

  function hideEquiposLiberados() {
    $('.js__terminal-container').remove();
  }

  function gridTerminalData(a, b) {
    (a.getElementsByClassName('planesMovistar_title')[0].innerHTML = b.Modelo),
      (a.getElementsByClassName('planesMovistarElegir_cuotas')[0].innerHTML =
        b.cantCuotas + ' cuotas de $' + b.montoCuotas),
      (a.getElementsByClassName('planesMovistarElegir_planEquiposMoviles_titlePlan')[0].innerHTML =
        !1 === b.priceSale ? 'Precio del celular $' + b.Precio : 'Precio del celular $' + b.priceSale),
      a.getElementsByClassName('js__terminal-link')[0] === void 0
        ? null
        : (a.getElementsByClassName('js__terminal-link')[0].href = b.StoreLink),
      pegatinasTerminalSales(b, a),
      (a.getElementsByClassName('planesMovistarElegir_planEquiposMoviles_imageItem')[0].src = b.Imagen),
      infoTerminal(b, a);
    var c = new TerminalDataCaracteristicas(b.ID);
    setCaracteristicas(c, a),
      setPlanOption(b, a),
      (a.parentElement.getElementsByClassName('ancla_content')[0].attributes.id.value = b.Modelo.replace(
        / /g,
        '-'
      ).toLowerCase()),
      sendGTModelo(b, a);
    try {
      !1 === b.discount
        ? a.getElementsByClassName('planesMovistarElegir_descuento')[0].remove()
        : (a.getElementsByClassName('planesMovistarElegir_descuento')[0].children[0].innerHTML =
            b.discount + '% <br />OFF');
    } catch (a) {
      console.log('planesMovistarElegir_descuento');
    }
  }

  function gridTerminalDataGenerator() {
    for (var a, b, c, d, e = 0; e < numTerminales; e++)
      (a = document.getElementsByClassName('js-planesMovistarElegirTerminales')[e]),
        topTwelve[e]
          ? ((c = new TerminalData(topTwelve[e])),
            !0 === c.availability
              ? gridTerminalData(a, c)
              : (a.parentElement.parentElement.parentElement.style.display = 'none'))
          : (a.parentElement.parentElement.parentElement.style.display = 'none');
    for (var f = 0; f < numTerminales; f++)
      (b = document.getElementsByClassName('js-planesMovistarElegirTerminalesMobile')[f + 1]),
        topTwelve[f]
          ? ((d = new TerminalData(topTwelve[f])),
            !0 === d.availability
              ? gridTerminalData(b, d)
              : (b.parentElement.parentElement.parentElement.style.display = 'none'))
          : (a.parentElement.parentElement.parentElement.style.display = 'none');
    $('input[checked]').prop('checked', !0);
  }

  function ofertasSinEquipoDataGenerator() {
    for (var a = 0; a < document.getElementsByClassName('ofertaInteres__container').length; a++) {
      var b = document.getElementsByClassName('ofertaInteres__container')[a],
        c = new TerminalData(topTwelve[a]);
      !0 === c.availability
        ? ((b.getElementsByClassName('numeroCuotas')[0].innerHTML = c.cantCuotas),
          (b.getElementsByClassName('montoCuota')[0].innerHTML = c.montoCuotas),
          (b.getElementsByClassName('ofertaInteres__title')[0].innerHTML = c.Modelo),
          (b.getElementsByClassName('ofertaInteres_column_terminal')[0].src = c.Imagen),
          (b.getElementsByClassName('js-sin-equipo-btn')[0].attributes[2].value = c.StoreLink),
          (b.getElementsByClassName('js-sin-equipo-btn')[0].attributes[5].value = c.Modelo),
          (b.getElementsByClassName('js-sin-equipo-btn')[0].attributes[6].value = 'Solicitar ' + c.Modelo),
          (b.getElementsByClassName('js-sin-equipo-btn')[0].attributes[7].value = c.Modelo),
          (b.getElementsByClassName('js-sin-equipo-btn')[0].attributes[8].value = c.Modelo),
          (b.getElementsByClassName('js-sin-equipo-btn')[0].attributes[10].value =
            c.Modelo + ' - Destacados inferiores Terminales'),
          (b.getElementsByClassName('js-sin-equipo-btn')[0].attributes[11].value = c.Modelo),
          !1 !== c.discount || !1 !== c.priceSale
            ? ((b.getElementsByClassName('ofertaInteres_price_before')[0].innerHTML = 'Antes $' + c.Precio),
              (b.getElementsByClassName('ofertaInteres_price_after')[0].innerHTML = 'Ahora $' + c.priceSale),
              (b.getElementsByClassName('ofertasInteres_descuento')[0].children[0].children[0].innerHTML = c.discount))
            : (b.getElementsByClassName('ofertasInteres_descuento')[0].remove(),
              b.getElementsByClassName('ofertaInteres_price_before')[0].remove(),
              (b.getElementsByClassName('ofertaInteres_price_after')[0].innerHTML = 'Precio $' + c.Precio)),
          pegatinasTerminalSales(c, b))
        : (b.parentElement.hidden = !0);
    }
  }

  function homeTerminalDataGenerator() {
    for (var a, b, c = document.getElementsByClassName('mobileOfferBlockTerminal'), d = 0; d < c.length; d++)
      if (((b = new TerminalData(topTwelve[d])), (a = c[d]), !0 === b.availability)) {
        (a.getElementsByClassName('img_terminal')[0].src = b.Imagen),
          (a.getElementsByClassName('offerBlockTitle')[0].innerText = b.Modelo),
          (a.getElementsByClassName('numeroCuotas')[0].innerHTML = b.cantCuotas),
          (a.getElementsByClassName('js-sin-equipo-home-btn')[0].href = b.StoreLink),
          (a.getElementsByClassName('js-sin-equipo-home-btn')[0].attributes['data-modal-title'].value = b.Modelo),
          (a.getElementsByClassName('js-sin-equipo-home-btn')[0].attributes['data-accion'].value = b.Modelo),
          (a.getElementsByClassName('js-sin-equipo-home-btn')[0].attributes['data-nombre-landing'].value = b.Modelo),
          (a.getElementsByClassName('js-sin-equipo-home-btn')[0].attributes['data-valor-plan'].value = b.Modelo),
          infoTerminal(b, a);
        var e = new TerminalDataCaracteristicas(b.ID);
        setCaracteristicas(e, a),
          !1 === b.discount
            ? (a.getElementsByClassName('offerBlock_price_before')[0].remove(),
              a.getElementsByClassName('offerBlock_descuento')[0].remove(),
              (a.getElementsByClassName('offerBlock_price_after')[0].innerHTML = 'Precio $' + b.Precio))
            : ((a.getElementsByClassName('price_before')[0].innerText = b.Precio),
              (a.getElementsByClassName('price_after')[0].innerHTML = b.priceSale),
              (a.getElementsByClassName('descuento')[0].innerHTML = b.discount)),
          pegatinasTerminalSales(b, a);
      } else a.parentElement.parentElement.hidden = !0;
  }

  function bannerMultiterminal(a) {
    for (var b, c = document.getElementsByClassName('js__bannerMultiterminal'), d = 0; d < c.length; d++) {
      b = c[d].getElementsByClassName('js__terminalContainer');
      for (var e = 0; e < b.length; e++) terminalContainer(b[e], a[e]);
    }
  }

  function terminalContainer(a, b) {
    console.log(a), console.log(b);
  }

  function saletimeBannerShow() {
    for (var a = document.getElementsByClassName('js__saletimeBannerShow'), b = 0; b < a.length; b++)
      a[b].style.display = 'block';
  }

  function conequipoBannerShow() {
    for (var a = document.getElementsByClassName('js__conequipoBannerShow'), b = 0; b < a.length; b++)
      (a[b].style.display = 'block'), (a[b].style.visibility = 'visible');
  }

  function conequipoBannerHide() {
    for (var a = document.getElementsByClassName('js__conequipoBannerShow'), b = 0; b < a.length; b++)
      a[b].style.display = 'none';
  }

  function isSaleTimeTrue() {
    for (var a, b = new TerminalData(topTwelve[0]), c = 0, d = 1; d < topTwelve.length; d++)
      (a = new TerminalData(topTwelve[d])), a.saleTime ? c++ : null;
    return b.saleTime && 0 === c;
  }

  function bannerDataGenerator(a) {
    var b = new TerminalData(a),
      c = document.getElementsByClassName('mainBanner_characteristics')[0];
    if (!0 === b.availability) {
      b.priceSale
        ? ((c.getElementsByClassName('mainBanner_title__terminal')[0].innerHTML = b.Modelo),
          (c.getElementsByClassName('mainBanner_priceSale__terminal')[0].innerHTML = ' <br/>Por solo $' + b.priceSale),
          (c.getElementsByClassName('mainBanner_characteristics_descuento_text')[0].innerHTML =
            b.discount + '% <br/>OFF'))
        : ((c.getElementsByClassName('mainBanner_title__terminal')[0].innerHTML = b.Modelo),
          (c.getElementsByClassName('mainBanner_priceSale__terminal')[0].innerHTML = ' <br/>Por solo $' + b.Precio),
          (c.getElementsByClassName('mainBanner_characteristics_descuento')[0].style.visibility = 'hidden')),
        (c.getElementsByClassName('planes-con-equipo__main-terminal-md')[0].src = b.Imagen),
        (c.getElementsByClassName('planes-con-equipo__main-terminal-sm')[0].src = b.Imagen),
        pegatinasTerminalSales(b, c),
        '1' === b.promo_mes && 0 < c.getElementsByClassName('js-promoMes').length
          ? ((c.getElementsByClassName('js-promoMes')[0].src = 'images/iconos/promo_mes.png'),
            (c.getElementsByClassName('js-promoMes')[0].style.display = 'block'))
          : null,
        !(
          0 < document.getElementsByClassName('js__link-terminal-sm').length &&
          0 < document.getElementsByClassName('js__link-terminal-lg').length
        ) ||
          ((document.getElementsByClassName('js__link-terminal-lg')[0].href = b.StoreLink),
          (document.getElementsByClassName('js__link-terminal-sm')[0].href = b.StoreLink));
      for (var d = 0; d < c.getElementsByClassName('sendGTM').length; d++)
        (c.getElementsByClassName('sendGTM')[d].attributes['data-modal-title'].value =
          b.Modelo + ' ' + c.getElementsByClassName('sendGTM')[d].attributes['data-modal-title'].value),
          (c.getElementsByClassName('sendGTM')[d].attributes['data-valor-origen-modal'].value =
            b.Modelo + ' ' + c.getElementsByClassName('sendGTM')[d].attributes['data-valor-origen-modal'].value),
          (c.getElementsByClassName('sendGTM')[d].attributes['data-valor-plan'].value =
            b.Modelo + ' ' + c.getElementsByClassName('sendGTM')[d].attributes['data-valor-plan'].value),
          (c.getElementsByClassName('sendGTM')[d].attributes['data-accion'].value =
            b.Modelo + ' ' + c.getElementsByClassName('sendGTM')[d].attributes['data-accion'].value);
      infoTerminal(b, c);
      var e = new TerminalDataCaracteristicas(b.ID);
      setCaracteristicas(e, c);
    } else c.remove(), showBannerNoXML();
  }

  function bannerSaleTIme() {
    0 < topTwelve.length
      ? isSaleTimeTrue()
        ? (bannerMultiterminal(filtroSaleTime(topTwelve)), saletimeBannerShow(), conequipoBannerHide())
        : (bannerDataGenerator(topTwelve[0]), conequipoBannerShow())
      : (showBannerNoXML(), hideplanesConEquipoBanner(), hideplanesConEquipoTerminales(), hideEquiposLiberados());
  }

  function multiplicarContenedores(a, b) {
    for (var c, d = 1; d < b; d++) (c = a.cloneNode(!0)), a.parentNode.appendChild(c);
  }

  function filtrarPorUsadosTop4() {
    for (var a = [], b = 0; 4 > b; b++)
      '' === xmlDoc.children[b].getElementsByTagName('g:nuevo_equipo')[0].innerHTML ? a.push(xmlDoc.children[b]) : null;
    return a;
  }

  function filtrarPorAssignedOrder(a) {
    for (var b, c = [], d = 0; d < a.length; d++) {
      b = '<![CDATA['.concat(a[d], ']]>');
      for (var e, f = 0; f < xmlDoc.childElementCount; f++)
        (e = xmlDoc.children[f].getElementsByTagName('assigned_order')[0].innerHTML),
          e === b && c.push(xmlDoc.children[f]);
    }
    return c;
  }

  function llenarGrilla(a, b, c) {
    var d = b.getElementsByClassName('js-terminal-template')[0],
      e = a.length;
    multiplicarContenedores(d, e);
    for (var f, g = Array.from(b.getElementsByClassName('js-terminal-template')), h = 0; h < g.length; h++) {
      (f = new TerminalData(a[h])),
        g[h].getElementsByClassName('js__terminal-image')[0] === void 0
          ? null
          : (g[h].getElementsByClassName('js__terminal-image')[0].src = f.Imagen),
        g[h].getElementsByClassName('js__terminal-image-modal')[0] === void 0
          ? null
          : (g[h].getElementsByClassName('js__terminal-image-modal')[0].src = f.Imagen),
        g[h].getElementsByClassName('js__terminal-link')[0] === void 0
          ? null
          : (g[h].getElementsByClassName('js__terminal-link')[0].href = f.StoreLink),
        g[h].getElementsByClassName('js__terminal-link')[0] === void 0
          ? null
          : (g[h].getElementsByClassName('js__terminal-link')[0].attributes['data-modal-title'].value =
              f.Modelo + ' Equipo ' + c),
        g[h].getElementsByClassName('js__terminal-link')[0] === void 0
          ? null
          : (g[h].getElementsByClassName('js__terminal-link')[0].attributes['data-nombre-landing'].value = f.Modelo),
        g[h].getElementsByClassName('js__terminal-link')[0] === void 0
          ? null
          : (g[h].getElementsByClassName('js__terminal-link')[0].attributes['data-valor-plan'].value =
              f.Modelo + ' Equipo ' + c),
        g[h].getElementsByClassName('js__terminal-link')[0] !== void 0 &&
        g[h].getElementsByClassName('js__terminal-link')[0].attributes['data-valor-url'] !== void 0
          ? (g[h].getElementsByClassName('js__terminal-link')[0].attributes['data-valor-url'].value = f.StoreLink)
          : null,
        g[h].getElementsByClassName('js__terminal-name')[0] === void 0
          ? null
          : (g[h].getElementsByClassName('js__terminal-name')[0].innerHTML = f.Modelo),
        g[h].getElementsByClassName('js__terminal-modal-titulo')[0] === void 0
          ? null
          : (g[h].getElementsByClassName('js__terminal-modal-titulo')[0].innerHTML = f.Modelo),
        g[h].getElementsByClassName('js__terminal-cuotas')[0] === void 0
          ? null
          : (g[h].getElementsByClassName('js__terminal-cuotas')[0].innerHTML = '$' + f.montoCuotas),
        g[h].getElementsByClassName('js__cant-cuotas')[0] === void 0
          ? null
          : (g[h].getElementsByClassName('js__cant-cuotas')[0].innerHTML = f.cantCuotas),
        g[h].getElementsByClassName('js__terminal-descuento')[0] !== void 0 && !1 !== f.discount
          ? (g[h].getElementsByClassName('js__terminal-descuento')[0].innerHTML = f.discount + '%')
          : (g[h].getElementsByClassName('js__terminal-descuento')[0].parentElement.parentElement.style.visibility =
              'hidden'),
        0 < g[h].getElementsByClassName('js__terminal-precio').length && !1 !== f.discount
          ? ((g[h].getElementsByClassName('js__terminal-precio')[0].innerHTML = '$' + f.priceSale),
            (g[h].getElementsByClassName('js__terminal-precio-tachado')[0].innerHTML = 'Antes $' + f.Precio))
          : null,
        g[h].getElementsByClassName('js__terminal-precio')[0] !== void 0 && !0 !== f.discount
          ? ((g[h].getElementsByClassName('js__terminal-precio-tachado')[0].innerHTML = '&nbsp;'),
            (g[h].getElementsByClassName('js__terminal-precio')[0].innerHTML = '$' + f.Precio))
          : null,
        g[h].getElementsByClassName('js__terminal-cuota-contra-factura')[0] === void 0
          ? null
          : (g[h].getElementsByClassName('js__terminal-cuota-contra-factura')[0].innerHTML =
              '$' + f.CuotaContraFactura),
        pegatinasTerminalSales(f, g[h]),
        infoTerminal(f, g[h]);
      var j = new TerminalDataCaracteristicas(f.ID);
      setCaracteristicas(j, g[h]),
        (g[h].getElementsByClassName('js__terminal-link')[0].attributes['data-modal-title'].value =
          f.Modelo + ' Equipo ' + c),
        (g[h].getElementsByClassName('js__terminal-link')[0].attributes['data-accion'].value =
          f.Modelo + ' Equipo ' + c),
        (g[h].getElementsByClassName('js__terminal-link')[0].attributes['data-nombre-landing'].value = f.Modelo),
        (g[h].getElementsByClassName('js__terminal-link')[0].attributes['data-valor-plan'].value =
          f.Modelo + ' Equipo ' + c),
        !0 === f.availability ? null : g[h].remove();
    }
  }

  function terminalInfoGeneratorGeneric(a, b, c, d) {
    for (var e, f = 0; f < c.length; f++)
      if (((e = c[f]), void 0 !== a[f])) {
        var g = new TerminalData(a[f]);
        void 0 === e.getElementsByClassName('js__terminal-image')[0]
          ? null
          : (e.getElementsByClassName('js__terminal-image')[0].src = g.Imagen),
          void 0 === e.getElementsByClassName('js__terminal-image-modal')[0]
            ? null
            : (e.getElementsByClassName('js__terminal-image-modal')[0].src = g.Imagen),
          void 0 === e.getElementsByClassName('js__terminal-link')[0]
            ? null
            : (e.getElementsByClassName('js__terminal-link')[0].href = g.StoreLink),
          void 0 !== e.getElementsByClassName('js__terminal-link')[0] &&
          void 0 !== e.getElementsByClassName('js__terminal-link')[0].attributes['data-valor-url']
            ? (e.getElementsByClassName('js__terminal-link')[0].attributes['data-valor-url'].value = g.StoreLink)
            : null,
          void 0 === e.getElementsByClassName('js__terminal-link')[0]
            ? null
            : (e.getElementsByClassName('js__terminal-link')[0].attributes['data-modal-title'].value =
                g.Modelo + ' Equipo ' + b),
          void 0 === e.getElementsByClassName('js__terminal-link')[0]
            ? null
            : (e.getElementsByClassName('js__terminal-link')[0].attributes['data-nombre-landing'].value = g.Modelo),
          void 0 === e.getElementsByClassName('js__terminal-link')[0]
            ? null
            : (e.getElementsByClassName('js__terminal-link')[0].attributes['data-valor-plan'].value =
                g.Modelo + ' Equipo ' + b),
          void 0 === e.getElementsByClassName('js__terminal-name')[0]
            ? null
            : (e.getElementsByClassName('js__terminal-name')[0].innerHTML = g.Modelo),
          void 0 === e.getElementsByClassName('js__terminal-brand')[0]
            ? null
            : (e.getElementsByClassName('js__terminal-brand')[0].innerHTML = g.Modelo),
          void 0 === e.getElementsByClassName('js__terminal-modal-titulo')[0]
            ? null
            : (e.getElementsByClassName('js__terminal-modal-titulo')[0].innerHTML = g.Modelo),
          void 0 === e.getElementsByClassName('js__terminal-cuotas')[0]
            ? null
            : (e.getElementsByClassName('js__terminal-cuotas')[0].innerHTML = '$' + g.montoCuotas),
          void 0 === e.getElementsByClassName('js__cant-cuotas')[0]
            ? null
            : (e.getElementsByClassName('js__cant-cuotas')[0].innerHTML = g.cantCuotas),
          void 0 !== e.getElementsByClassName('js__terminal-descuento')[0] && !1 !== g.discount
            ? (e.getElementsByClassName('js__terminal-descuento')[0].innerHTML = g.discount + '%')
            : (e.getElementsByClassName('js__terminal-descuento')[0].parentElement.parentElement.style.visibility =
                'hidden'),
          void 0 !== e.getElementsByClassName('js__terminal-precio')[0] && !1 !== g.discount
            ? ((e.getElementsByClassName('js__terminal-precio')[0].innerHTML = '$' + g.priceSale),
              (e.getElementsByClassName('js__terminal-precio-tachado')[0].innerHTML = 'Antes $' + g.Precio))
            : ((e.getElementsByClassName('js__terminal-precio-tachado')[0].innerHTML = '&nbsp;'),
              (e.getElementsByClassName('js__terminal-precio')[0].innerHTML = '$' + g.Precio)),
          void 0 === e.getElementsByClassName('js__terminal-cuota-contra-factura')[0]
            ? null
            : (e.getElementsByClassName('js__terminal-cuota-contra-factura')[0].innerHTML = '$' + g.CuotaContraFactura),
          'destacado' === d ? pegatinasTerminalSales(g, e) : pegatinasTerminalSalesLiberados(g, e),
          infoTerminal(g, e);
        var h = new TerminalDataCaracteristicas(g.ID);
        setCaracteristicas(h, e),
          (e.getElementsByClassName('js__terminal-link')[0].attributes['data-modal-title'].value =
            g.Modelo + ' Equipo ' + b),
          (e.getElementsByClassName('js__terminal-link')[0].attributes['data-accion'].value =
            g.Modelo + ' Equipo ' + b),
          (e.getElementsByClassName('js__terminal-link')[0].attributes['data-nombre-landing'].value = g.Modelo),
          (e.getElementsByClassName('js__terminal-link')[0].attributes['data-valor-plan'].value =
            g.Modelo + ' Equipo ' + b),
          void 0 !== e.getElementsByClassName('js__terminal-link')[0] &&
          void 0 !== e.getElementsByClassName('js__terminal-link')[0].attributes['data-valor-url']
            ? (e.getElementsByClassName('js__terminal-link')[0].attributes['data-valor-url'].value = g.StoreLink)
            : null,
          !0 === g.availability ? null : e.remove();
      } else e.remove();
  }

  function terminalInfoGeneratorDestacados(a, b) {
    var c = $('[class^="js__terminal-destacado-id"]');
    terminalInfoGeneratorGeneric(a, b, c, 'destacado');
  }

  function terminalInfoGenerator(a, b) {
    var c = $('[class^="js__terminal-id-"]');
    terminalInfoGeneratorGeneric(a, b, c, 'general');
  }

  function fetchDataTerminalesPlanes() {
    var a;
    (a =
      'test.ddsuite.net' == document.location.host || 'localhost:3000' == document.location.host
        ? 'json/terminales-caracteristicas.json'
        : document.location.origin + '/json/terminales-caracteristicas.json'),
      fetch(a)
        .then(function (a) {
          return a.json();
        })
        .then(function (a) {
          objetoCaracteristicasTerminales = a;
          var b = new XMLHttpRequest();
          return (
            'test.ddsuite.net' == document.location.host || 'localhost:3000' == document.location.host
              ? b.open('GET', 'php/movistar_tienda_liberados.xml', !0)
              : b.open('GET', document.location.origin + '/php/movistar_tienda_liberados.xml', !0),
            b.send(),
            void (b.onreadystatechange = function () {
              if (4 == this.readyState && 200 == this.status) {
                if (
                  ((terminalDataXML = b.responseText), parseXML(terminalDataXML), 0 < $('.js-equipos-samsung').length)
                ) {
                  var a = filtrarTopMobilesSamsungNuevos(xmlDoc);
                  terminalInfoGenerator(a, 'Liberado');
                }
                if (
                  (0 < $('.js-equipos-liberados').length &&
                    (topTwelveTerminals(xmlDoc), bannerSaleTIme(), terminalInfoGenerator(topTwelve, 'Liberado')),
                  0 < $('.js-contra-factura-3').length &&
                    (terminals15K(xmlDoc), terminalInfoGenerator(terminalsUnder15k, 'ContraFactura')),
                  0 < $('.js-contra-factura-6').length &&
                    (terminals15K(xmlDoc), terminalInfoGenerator(terminalsUnder15k, 'ContraFactura')),
                  0 < $('.js-contra-factura-12').length &&
                    (terminals15K(xmlDoc), terminalInfoGenerator(terminalsUnder15k, 'ContraFactura')),
                  0 < $('.js-planes-con-equipo').length &&
                    (topTwelveTerminals(xmlDoc), bannerSaleTIme(), gridTerminalDataGenerator()),
                  0 < $('.js-multiproducto').length)
                ) {
                  topTwelveTerminals(xmlDoc),
                    homeTerminalDataGenerator(),
                    terminalGridFinder(),
                    bannerSaleTIme(),
                    terminalInfoGenerator(topTwelve, 'Liberado'),
                    terminalInfoGeneratorDestacados(topTwelve, 'Liberado'),
                    ofertasSinEquipoDataGenerator();
                  var c = [];
                  (c = filtrarPorAssignedOrder([101, 102, 103])),
                    (document.getElementsByClassName('js-terminales-grid-container-banner')[0].style.display = 'none'),
                    0 < c.length
                      ? llenarGrilla(
                          filtrarPorAssignedOrder([101, 102, 103]),
                          document.getElementsByClassName('js-terminales-grid-container')[0],
                          'Liberado'
                        )
                      : ((document.getElementsByClassName('js-terminales-grid-container')[0].style.display = 'none'),
                        (document.getElementsByClassName('js-terminales-grid-container-banner')[0].style.display =
                          'block')),
                    0 < document.getElementsByClassName('js-terminales-celulares-usados-top4').length &&
                      llenarGrilla(
                        filtrarPorUsadosTop4(),
                        document.getElementsByClassName('js-terminales-celulares-usados-top4')[0],
                        'Liberado'
                      );
                }
                0 < $('.js-plan-sin-equipo').length && (topTwelveTerminals(xmlDoc), terminalGridFinder());
              } else
                200 !== this.status &&
                  (showBannerNoXML(),
                  hideplanesConEquipoBanner(),
                  hideplanesConEquipoTerminales(),
                  hideEquiposLiberados());
            })
          );
        });
  }
  $(document).ready(function () {
    fetchDataTerminalesPlanes();
  });
});
