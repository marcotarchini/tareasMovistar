'use strict';

function _typeof(a) {
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (a) {
            return typeof a;
          }
        : function (a) {
            return a && 'function' == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype
              ? 'symbol'
              : typeof a;
          }),
    _typeof(a)
  );
}

function _toConsumableArray(a) {
  return _arrayWithoutHoles(a) || _iterableToArray(a) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}

function _iterableToArray(a) {
  if (Symbol.iterator in Object(a) || '[object Arguments]' === Object.prototype.toString.call(a)) return Array.from(a);
}

function _arrayWithoutHoles(a) {
  if (Array.isArray(a)) {
    for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
    return c;
  }
}
var planesJson,
  apiPlanes = function () {
    return 'test.ddsuite.net' == document.location.host || 'localhost:3000' == document.location.host
      ? 'php/Spreadsheet.json'
      : document.location.origin + '/php/Spreadsheet.json';
  },
  contenedoresParaActualizar = [],
  jsonDataContenedor = [],
  meses = [
    'placeHolderForIndex0',
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
$(function () {
  'use strict';

  function filtraContenedoresMasDatos() {
    for (var a = document.querySelectorAll('[class^="js__id-plan-"]'), b = 0; b < a.length; b++) {
      var c = a[b].classList[0].length,
        d = a[b].classList[0].slice(12);
      12 < c ? (contenedoresParaActualizar.push(a[b]), jsonDataContenedor.push(d)) : null;
    }
  }

  function arregloDePlanesConHotweek() {
    for (var a = [], b = 0; b < planesJson.length; b++)
      ('SI' === planesJson[b]['Promo Hotweek'] || 'Si' === planesJson[b]['Promo Hotweek']) &&
        a.push(planesJson[b].Producto);
    return a;
  }

  function validarFechas(a) {
    var b = new Date(a[0]),
      c = new Date(a[1]),
      d = new Date();
    return !!(b < d && c > d);
  }

  function promedioDescuento(a) {
    for (var b = 0, c = 0, d = 0; d < planesJson.length; d++)
      planesJson[d].Producto === a && ((b += parseInt(planesJson[d]['% OFF'])), c++);
    return b / c;
  }

  function mayorDescuento(a) {
    var b = planesJson.filter(function (b) {
        return b.Producto === a;
      }),
      c = b.map(function (a) {
        var b = parseInt(a['% OFF']);
        return isNaN(b) ? 0 : b;
      });
    return Math.max.apply(Math, _toConsumableArray(c));
  }

  function formatoDatosAntes(a, b) {
    var c = 1 > a ? 1e3 * a : a.replace('.', ',');
    return (c = 'GB' === b && 1 > a ? (c += 'MB') : (c += b)), c;
  }

  function llenarPlanes() {
    for (var a = 0; a < contenedoresParaActualizar.length; a++)
      for (var b = 0; b < planesJson.length; b++)
        if (planesJson[b].ID === jsonDataContenedor[a]) {
          var c = contenedoresParaActualizar[a];
          console.log(_typeof(planesJson[b]['Precio de Lista']));
          0 < c.getElementsByClassName('js-precio-off').length &&
            ('' === planesJson[b]['% OFF']
              ? ((c.getElementsByClassName('js-precio-off')[0].style.display = 'none'),
                (c.getElementsByClassName('js-precio-regular')[0].style.display = 'block'))
              : ((c.getElementsByClassName('js-precio-off')[0].style.display = 'block'),
                (c.getElementsByClassName('js-precio-regular')[0].style.display = 'none')));
          0 < c.getElementsByClassName('js-plan-descuentomayor-producto').length
            ? (c.getElementsByClassName('js-plan-descuentomayor-producto')[0].innerHTML = mayorDescuento(
                planesJson[b].Producto
              ))
            : null,
            '' !== planesJson[b]['Copy % off hotweek'] &&
            0 < c.getElementsByClassName('js__plan-copystickerdescuento').length
              ? (c.getElementsByClassName('js__plan-copystickerdescuento')[0].innerHTML =
                  planesJson[b]['Copy % off hotweek'])
              : null,
            'Si' === planesJson[b]['Sticker Exclusivo Promo online Banner'] &&
            0 < c.getElementsByClassName('js-exclusivo-online-banner').length
              ? (c.getElementsByClassName('js-exclusivo-online-banner')[0].style.display = 'block')
              : null,
            planesJson[b]['Precio de Lista'] !== void 0 &&
            '' !== planesJson[b]['Precio de Lista'] &&
            0 < c.getElementsByClassName('js__plan-precio-de-lista').length
              ? ((c.getElementsByClassName('js__plan-precio-de-lista')[0].innerHTML = planesJson[b]['Precio de Lista']),
                (c.getElementsByClassName('js__plan-precio-de-lista')[0].parentNode.style.display = 'block'))
              : null,
            planesJson[b]['Precio de Lista'] !== void 0 &&
            '' !== planesJson[b]['Precio de Lista'] &&
            0 < c.getElementsByClassName('js__plan-precio-de-lista-toggle').length
              ? (c.getElementsByClassName('js__plan-precio-de-lista-toggle')[0].style.display = 'inline')
              : null,
            planesJson[b]['Precio de Lista'] !== void 0 &&
            '' !== planesJson[b]['Precio de Lista'] &&
            0 < c.getElementsByClassName('js__plan-precio-vigente-descuento').length
              ? (c.getElementsByClassName('js__plan-precio-vigente-descuento')[0].style.display = 'inline')
              : null,
            0 < c.getElementsByClassName('js__plan-descuento').length &&
              ('' === planesJson[b]['% OFF']
                ? c.getElementsByClassName('js__plan-descuento')[0].parentNode.remove()
                : (c.getElementsByClassName('js__plan-descuento')[0].innerHTML = planesJson[b]['% OFF'])),
            0 < c.getElementsByClassName('singlePlanMigracionesToggle').length && '' === planesJson[b]['% OFF']
              ? c.getElementsByClassName('singlePlanMigracionesToggle')[0].remove()
              : null,
            0 < c.getElementsByClassName('js__plan-promedio-descuento-portabilidad').length
              ? (c.getElementsByClassName('js__plan-promedio-descuento-portabilidad')[0].innerHTML = promedioDescuento(
                  'Portabilidad'
                ))
              : null,
            0 < c.getElementsByClassName('js__plan-capacidad-unidad').length
              ? (c.getElementsByClassName('js__plan-capacidad-unidad')[0].innerHTML = planesJson[b]['Unidad Capacidad'])
              : null,
            0 < c.getElementsByClassName('js__plan-precio-oferta').length && '' !== planesJson[b]['Precio Oferta']
              ? (c.getElementsByClassName('js__plan-precio-oferta')[0].innerHTML = j(
                  parseInt(planesJson[b]['Precio Oferta'].slice(0, -3))
                ))
              : null,
            0 < c.getElementsByClassName('js__plan-precio-oferta').length &&
            '' === planesJson[b]['Precio Oferta'] &&
            '' !== planesJson[b]['Full Price']
              ? (c.getElementsByClassName('planesMovistar__priceTarifaAnterior--b')[0].remove(),
                (c.getElementsByClassName('js__plan-precio-oferta')[0].innerHTML = j(
                  parseInt(planesJson[b]['Full Price'].slice(0, -3))
                )))
              : null,
            0 < c.getElementsByClassName('js__plan-full-price').length
              ? (c.getElementsByClassName('js__plan-full-price')[0].innerHTML = j(
                  parseInt(planesJson[b]['Full Price'].slice(0, -3))
                ))
              : null,
            0 < c.getElementsByClassName('js__plan-full-price-migraciones').length
              ? (c.getElementsByClassName('js__plan-full-price-migraciones')[0].innerHTML = j(
                  parseInt(planesJson[b]['Full Price'].slice(0, -3))
                ))
              : null,
            0 < c.getElementsByClassName('js__plan-gigas').length
              ? (c.getElementsByClassName('js__plan-gigas')[0].innerHTML = planesJson[b]['Capacidad Plan'].replace(
                  '.',
                  ','
                ))
              : null,
            0 < c.getElementsByClassName('js__plan-nombre').length
              ? (c.getElementsByClassName('js__plan-nombre')[0].innerHTML = planesJson[b]['Nombre Plan'])
              : null,
            0 < c.getElementsByClassName('js__plan-duracion').length
              ? (c.getElementsByClassName('js__plan-duracion')[0].innerHTML = planesJson[b].Duración)
              : null,
            0 < c.getElementsByClassName('js__legales-plan').length
              ? (c.getElementsByClassName('js__legales-plan')[0].href = planesJson[b]['Legales Plan'])
              : null,
            '' !== planesJson[b]['Legales Plan'] &&
              0 < c.getElementsByClassName('js__url-legales-plan').length &&
              (c.getElementsByClassName('js__url-legales-plan')[0].href = planesJson[b]['Legales Plan']),
            '' !== planesJson[b]['Legales Promocion'] &&
              0 < c.getElementsByClassName('js__url-legales-promo').length &&
              (c.getElementsByClassName('js__url-legales-promo')[0].style.display = 'block') &&
              (c.getElementsByClassName('js__url-legales-promo')[0].href = planesJson[b]['Legales Promocion']),
            'Si' === planesJson[b]['Promo Hotsale'] && 0 < c.getElementsByClassName('js__plan-hotsale').length
              ? ((c.getElementsByClassName('js__plan-hotsale')[0].style.visibility = 'visible'),
                (c.getElementsByClassName('js__plan-hotsale')[0].src = 'images/global/hotsale.png'))
              : null,
            'No' === planesJson[b].MovistarPlay && 0 < c.getElementsByClassName('js__movistar-play').length
              ? c.getElementsByClassName('js__movistar-play')[0].remove()
              : null,
            'Si' === planesJson[b].MovistarPlay && 0 < c.getElementsByClassName('js__movistar-play').length
              ? (c.getElementsByClassName('js__movistar-play')[0].style.display = 'block')
              : null;
          var d, e;
          'No' !== planesJson[b]['Pas\xE1 Gigas Planes'] &&
          '' !== planesJson[b]['Pas\xE1 Gigas Planes'] &&
          0 < c.getElementsByClassName('js__pasa-gigas-activa').length &&
          0 < c.getElementsByClassName('js__movistar-play').length
            ? ((d = c.getElementsByClassName('js__movistar-play')[0].children[0]),
              (e = c.getElementsByClassName('js__pasa-gigas-activa')[0].children[0]),
              c.getElementsByClassName('js__movistar-play')[0].children[0].replaceWith(e),
              c.getElementsByClassName('js__pasa-gigas-activa')[0].replaceWith(d))
            : null,
            'No' !== planesJson[b]['Pas\xE1 Gigas Planes'] &&
            '' !== planesJson[b]['Pas\xE1 Gigas Planes'] &&
            0 < c.getElementsByClassName('js__pasa-gigas-activa').length &&
            0 >= c.getElementsByClassName('js__movistar-play').length
              ? ((e = c.getElementsByClassName('js__pasa-gigas-activa')[0].children[0]),
                (c.getElementsByClassName('js__pasa-gigas-activa')[0].style.display = 'block'),
                c.getElementsByClassName('planesMovistar__boton')[0].after(e))
              : null,
            ('No' === planesJson[b]['Pas\xE1 Gigas Planes'] || '' === planesJson[b]['Pas\xE1 Gigas Planes']) &&
            0 < c.getElementsByClassName('js__pasa-gigas-activa').length &&
            0 < c.getElementsByClassName('js__movistar-play').length
              ? ((d = c.getElementsByClassName('js__movistar-play')[0].children[0]),
                c.getElementsByClassName('js__pasa-gigas-novedad')[0].before(d),
                (c.getElementsByClassName('js__pasa-gigas-novedad')[0].style.display = 'block'))
              : null,
            ('No' === planesJson[b]['Pas\xE1 Gigas Planes'] || '' === planesJson[b]['Pas\xE1 Gigas Planes']) &&
            0 < c.getElementsByClassName('js__pasa-gigas-activa').length &&
            0 >= c.getElementsByClassName('js__movistar-play').length
              ? (c.getElementsByClassName('js__pasa-gigas-novedad')[0].style.display = 'block')
              : null,
            'Si' === planesJson[b].CyberMonday && 0 < c.getElementsByClassName('js__plan-cyberMonday').length
              ? ((c.getElementsByClassName('js__plan-cyberMonday')[0].style.visibility = 'visible'),
                (c.getElementsByClassName('js__plan-cyberMonday')[0].src = 'images/global/cybermonday.png'))
              : null,
            'Si' === planesJson[b].CyberWeek && 0 < c.getElementsByClassName('js__plan-cyberWeek').length
              ? ((c.getElementsByClassName('js__plan-cyberWeek')[0].style.visibility = 'visible'),
                (c.getElementsByClassName('js__plan-cyberWeek')[0].src = 'images/global/cyberweek.png'))
              : null,
            'Si' === planesJson[b]['Sticker Exclusivo Promo online Banner'] &&
            0 < c.getElementsByClassName('js__plan-promoExclusivaOnline').length
              ? ((c.getElementsByClassName('js__plan-promoExclusivaOnline')[0].style.visibility = 'visible'),
                (c.getElementsByClassName('js__plan-promoExclusivaOnline')[0].src =
                  'images/iconos/promo_exclsuiva_online_rosa.png'))
              : null,
            'Si' === planesJson[b]['Sticker Exclusivo Promo online Banner'] &&
            0 < c.getElementsByClassName('js__plan-promoExclusivaOnlineNew').length
              ? (c.getElementsByClassName('js__plan-promoExclusivaOnlineNew')[0].style.visibility = 'visible')
              : null,
            '' !== planesJson[b]['Pasa Gigas Banner Sticker'] && 'No' !== planesJson[b]['Pasa Gigas Banner Sticker']
              ? 'No' !== planesJson[b]['Amazon Prime'] &&
                '' !== planesJson[b]['Amazon Prime'] &&
                0 < c.getElementsByClassName('js__plan-primeVideo').length
                ? ((c.getElementsByClassName('js__plan-primeVideo')[0].style.visibility = 'visible'),
                  (c.getElementsByClassName('js__plan-primeVideo')[0].src = 'images/global/pasagigas.png'))
                : null
              : 'No' !== planesJson[b]['Amazon Prime'] &&
                '' !== planesJson[b]['Amazon Prime'] &&
                'No' !== planesJson[b]['Amazon Prime Precio'] &&
                '' !== planesJson[b]['Amazon Prime Precio'] &&
                0 < c.getElementsByClassName('js__plan-primeVideo').length
              ? ((c.getElementsByClassName('js__plan-primeVideo')[0].style.visibility = 'visible'),
                (c.getElementsByClassName('js__plan-primeVideo')[0].src = 'images/global/porta-planes-cuca.png'))
              : null,
            'No' !== planesJson[b]['Amazon Prime'] &&
            '' !== planesJson[b]['Amazon Prime'] &&
            0 < c.getElementsByClassName('js__plan-AmazonPrime').length
              ? ((c.getElementsByClassName('js__plan-AmazonPrime')[0].style.display = 'block'),
                (c.getElementsByClassName('js__plan-primeVideoMeses')[0].innerHTML = planesJson[b]['Amazon Prime']),
                'No' === planesJson[b]['Amazon Prime Precio']
                  ? null
                  : (c.getElementsByClassName('js__plan-primeVideoPrecio')[0].innerHTML =
                      planesJson[b]['Amazon Prime Precio']))
              : null,
            ('' === planesJson[b]['Amazon Prime Precio'] || 'No' === planesJson[b]['Amazon Prime Precio']) &&
            0 < c.getElementsByClassName('js__plan-AmazonPrime').length
              ? 0 < c.getElementsByClassName('js__plan-primeVideoSinPrecio').length
                ? c.getElementsByClassName('js__plan-primeVideoSinPrecio')[0].remove()
                : null
              : null,
            ('Si' === planesJson[b]['Promo Hotweek'] || 'SI' === planesJson[b]['Promo Hotweek']) &&
            0 < c.getElementsByClassName('js__plan-hotweek').length
              ? (c.getElementsByClassName('js__plan-hotweek')[0].style.visibility = 'visible')
              : null,
            'Si' === planesJson[b]['Promo BlackFriday Planes'] &&
            0 < c.getElementsByClassName('js__plan-blackFriday').length
              ? ((c.getElementsByClassName('js__plan-blackFriday')[0].style.visibility = 'visible'),
                (c.getElementsByClassName('js__plan-blackFriday')[0].src = 'images/global/blackfriday.png'))
              : null,
            '' !== planesJson[b]['Capacidad Plan Anterior'] &&
            0 < c.getElementsByClassName('js__plan-gigas-antes').length
              ? ((c.getElementsByClassName('js__plan-gigas-antes-numero')[0].innerHTML = formatoDatosAntes(
                  planesJson[b]['Capacidad Plan Anterior'],
                  planesJson[b]['Unidad Capacidad']
                )),
                (c.getElementsByClassName('js__plan-gigas-antes')[0].style.visibility = 'visible'))
              : null,
            0 < c.getElementsByClassName('js__plan-data-attributes').length
              ? (c
                  .getElementsByClassName('js__plan-data-attributes')[0]
                  .setAttribute('data-modal-title', planesJson[b]['Nombre Plan']),
                c
                  .getElementsByClassName('js__plan-data-attributes')[0]
                  .setAttribute('data-accion', planesJson[b]['Nombre Plan']),
                c
                  .getElementsByClassName('js__plan-data-attributes')[0]
                  .setAttribute('data-valor-plan', planesJson[b]['Nombre Plan']),
                c.getElementsByClassName('js__plan-data-attributes')[0].setAttribute('data-nombre-landing', nombreLP))
              : null,
            'Si' === planesJson[b].LlamadasCualquierCompañía &&
            0 < c.getElementsByClassName('js-minutos-compania').length
              ? (c.getElementsByClassName('js-minutos-compania')[0].style.display = 'block')
              : null,
            'Si' === planesJson[b].Roaming && 0 < c.getElementsByClassName('js-roaming-gratis-mundial').length
              ? (c.getElementsByClassName('js-roaming-gratis-mundial')[0].style.display = 'block')
              : null,
            'Si' === planesJson[b].LlamadasMovistar && 0 < c.getElementsByClassName('js-minutos-operador').length
              ? (c.getElementsByClassName('js-minutos-operador')[0].style.display = 'block')
              : null,
            'Si' === planesJson[b].MensajesMovistar && 0 < c.getElementsByClassName('js-extra-mensajea').length
              ? (c.getElementsByClassName('js-extra-mensajea')[0].style.display = 'block')
              : null,
            'Si' === planesJson[b].Whatsapp && 0 < c.getElementsByClassName('js-extra-whatsapp').length
              ? (c.getElementsByClassName('js-extra-whatsapp')[0].style.display = 'block')
              : null,
            '' !== planesJson[b].Extra && 0 < c.getElementsByClassName('js-beneficio-extra').length
              ? ((c.getElementsByClassName('js-beneficio-extra')[0].style.display = 'block'),
                (c.getElementsByClassName('js-beneficio-extra-copy')[0].innerHTML = planesJson[b].Extra))
              : null,
            'Si' === planesJson[b].TestDrive && 0 < c.getElementsByClassName('js-capacidad-navegaci\xF3n-extra').length
              ? (c.getElementsByClassName('js-capacidad-navegaci\xF3n-extra')[0].style.display = 'block')
              : null,
            'Si' === planesJson[b].FamiliaMovistar && 0 < c.getElementsByClassName('js-planes-familia-movistar').length
              ? (c.getElementsByClassName('js-planes-familia-movistar')[0].style.display = 'block')
              : null;
        }
  }

  function fetchPlanes(a) {
    fetch(a)
      .then(function (a) {
        return a.json();
      })
      .then(function (a) {
        (planesJson = a),
          0 < $('.js-main-migraciones').length && e(),
          filtraContenedoresMasDatos(),
          llenarPlanes(),
          g();
      });
  }
  var a = function (a) {
      for (var b = 0; b < planesJson.length; b++) if (planesJson[b].ID == a) return planesJson[b];
    },
    b = function (a, b, d) {
      (a.nextElementSibling.style.display = 'block'),
        (a.nextElementSibling.style.visibility = 'visible'),
        (a.nextElementSibling.getElementsByClassName('jsFlipClockDate')[0].innerHTML = 'Del '
          .concat(b.split(', ')[2], ' al ')
          .concat(d.split(', ')[2], ' ')
          .concat(meses[parseInt(b.split(', ')[1])])),
        c(d, a.nextElementSibling),
        a.remove();
    },
    c = function (a, b) {
      var c = new Date(a),
        d = b.getElementsByClassName('clock')[0],
        e = new Date(),
        f = c.getTime() / 1e3 + 86400 - e.getTime() / 1e3;
      (d.className +=
        100 >
        (function (a, b) {
          return (b - a) / 86400000;
        })(e, c)
          ? ' twoDayDigits'
          : ' threeDayDigits'),
        0 > f && (f = 0),
        $(d).FlipClock(f, {
          clockFace: 'DailyCounter',
          countdown: !0,
          language: 'es',
        });
    },
    d = function () {
      return Array.from(document.querySelectorAll('[class*="js__hotweekSwitch-"]'));
    },
    e = function () {
      var a = f(),
        b = Array.from(document.querySelectorAll('.js__id-plan-'));
      if (!isNaN(parseInt(a)))
        b.forEach(function (b) {
          b.classList.remove('js__id-plan-'), (b.className = 'js__id-plan-' + a + ' ' + b.className);
        }),
          document.getElementsByClassName('migracionesMultiPlanToggle')[0].remove();
      else {
        var c = Array.from(document.getElementsByClassName('singlePlanMigracionesToggle'));
        c.forEach(function (a) {
          a.remove();
        });
      }
    },
    f = function () {
      var a = document.URL,
        b = new URL(a),
        c = b.searchParams.get('planID');
      return parseInt(c);
    },
    g = function () {
      var c = d(),
        e = arregloDePlanesConHotweek();
      c.forEach(function (c) {
        var d = c.querySelectorAll('[class^="js__id-plan-"]')[0].classList[0].slice(12);
        if ('' != d) {
          var f = a(d),
            g = h(f['Fecha Promo Hotweek']);
          e.includes(f.Producto) && validarFechas(g) ? b(c, g[0], g[1]) : null;
        }
      });
    },
    h = function (a) {
      if ('' === a) {
        return '';
      }
      var b = a.split(' '),
        c = b[0].replace('/', '/').split('/').join(', '),
        d = b[1].replace('/', '/').split('/').join(', ');
      return (b = [c, d]), b;
    },
    j = function (a) {
      return a.toLocaleString().replace(',', 'D').replace(',', '.').replace('D', '.').replace(',00', '');
    };
  $(document).ready(function () {
    fetchPlanes(apiPlanes());
  });
});
