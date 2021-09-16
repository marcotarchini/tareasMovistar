'use strict';
var dataLayer,
  RTD_Planes,
  tipoCallCenter,
  _llamame = '.llamame',
  _modalNocturno = '#modalNocturno',
  _modal = '#modal',
  _modalNewFlow = '#modalNewFlow',
  _tab = '.mainMultiTabs a[data-toggle="tab"]',
  _modalTerminal = '.planesMovistar_planEquiposMoviles_icon-info',
  _modalTerminalEquiposLiberados = '.equipos-liberados__info',
  _modalLoading = '#modalLoading',
  _informationModal = '#informationModal',
  _showMenuTabs = '#showMenuTabs',
  _mainMultiProductoTabs = '#mainMultiProductoTabs',
  _sendGTM = '.sendGTM',
  _sendClick = '.sendClick',
  _sendGTMtelefonoHeader = '.sendGTMtelefonoHeader',
  _dataTargetModal = '*[data-target="#modal"]',
  _dataTargetModalRoamingInfo = '*[data-target="#modalodalRoamingInfo"]',
  _dataTargetModalNocturno = '*[data-target="#modalNocturno"]',
  _llamarFlotante = '.js-llamar-flotante',
  _btnC2CfooterMobile = '#btnC2CfooterMobile',
  _carouselHome = '#carousel-home',
  categoria = '',
  estadoCallCenterFija = '',
  estadoCallCenterMovil = '',
  botonClicado = {
    zona: '',
    texto: '',
  },
  url_api_main = 'https://guia-interactiva.movistararg.com/',
  feriados = [
    {
      y: 2017,
      m: 12,
      d: 25,
    },
    {
      y: 2018,
      m: 1,
      d: 1,
    },
    {
      y: 2018,
      m: 2,
      d: 12,
    },
    {
      y: 2018,
      m: 2,
      d: 13,
    },
    {
      y: 2018,
      m: 3,
      d: 29,
    },
    {
      y: 2018,
      m: 5,
      d: 1,
    },
    {
      y: 2018,
      m: 6,
      d: 20,
    },
    {
      y: 2018,
      m: 7,
      d: 9,
    },
    {
      y: 2018,
      m: 8,
      d: 20,
    },
    {
      y: 2018,
      m: 10,
      d: 15,
    },
    {
      y: 2018,
      m: 11,
      d: 19,
    },
    {
      y: 2018,
      m: 12,
      d: 24,
    },
    {
      y: 2018,
      m: 12,
      d: 25,
    },
    {
      y: 2018,
      m: 12,
      d: 31,
    },
    {
      y: 2019,
      m: 1,
      d: 1,
    },
  ],
  activityTimeout = null,
  _startActivityChecking = !0,
  _exitModal = '#exitModal',
  _activityModal = '#activityModal',
  _jsBtnLlamemeModal = '.js-btn-llameme-modal';
$(function () {
  'use strict';

  function setCookie(a, b, c) {
    var e = new Date();
    e.setTime(e.getTime() + 2 * (1e3 * (60 * (60 * c))));
    var d = 'expires=' + e.toGMTString();
    document.cookie = a + '=' + b + '; ' + d;
  }

  function getCookie(a) {
    var b = '; ' + document.cookie,
      c = b.split('; ' + a + '=');
    if (2 == c.length) return c.pop().split(';').shift();
  }

  function showLightbox(a, b, c, d, e) {
    $('.modal').modal('hide'),
      !0 === e
        ? (2 == d || 1 == d) && (b = 'Int\xE9ntelo en el horario de ')
        : (2 == d || 1 == d) &&
          ((b = 'Te estaremos llamando dentro de nuestro horario de atenci\xF3n, '),
          c &&
            $(_informationModal)
              .find('#informationModal_subTitle .js-text-horario-feriado')
              .empty()
              .append(' excepto feriados.')),
      $(_informationModal).find('#informationModal_Title').text(a),
      $(_informationModal).find('#informationModal_subTitle .js-text-text-modal').empty().append(b),
      $(_informationModal).modal('show');
  }

  function getParam(a, b) {
    var c = '';
    b === void 0 && (b = window.location.href);
    try {
      a = a.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var d = '[\\?&]' + a + '=([^&#]*)',
        e = new RegExp(d),
        f = e.exec(b);
      c = null === f ? '' : f[1];
    } catch (a) {
      c = '';
    }
    return c;
  }

  function pausarSlider() {
    $(_carouselHome).carousel('pause');
  }

  function reanudarSlider() {
    $(_carouselHome).carousel('cycle');
  }

  function hacerScroll(a) {
    var b = '#' + a;
    b.length &&
      $('html, body').animate(
        {
          scrollTop: $(b).offset().top,
        },
        1e3
      );
  }

  function setTipoproducto() {
    $('.js-generic-plan').each(function () {
      var a = $('.tabsNav.active .js-mainBanner:visible .form-group .sendGTM').attr('data-valor-origen'),
        b = $('.tabsNav.active .js-mainBanner:visible .form-group .sendGTM').attr('data-valor-plan'),
        c = $('.tabsNav.active .js-mainBanner:visible .form-group .sendGTM').attr('data-cod-campana');
      $(this).attr('data-valor-plan', b),
        $(this).attr('data-valor-origen', a),
        $(this).attr('data-valor-origen-modal', a),
        $(this).attr('data-cod-campana', c);
    }),
      $('.js-sticky-c2c').each(function () {
        var a = $('.tabsNav.active .js-mainBanner:visible .form-group .sendGTM').attr('data-cod-campana'),
          b = $('.tabsNav.active .js-mainBanner:visible .form-group .sendGTM').attr('data-valor-plan');
        $(this).attr('data-valor-plan', b), $(this).attr('data-cod-campana', a);
      });
  }

  function closeDisponibilidad() {
    $(_llamarFlotante).hide(), $('.botonera-mobile .botonera-mobile-wrapper').hide(), $('.contactWrapper').hide();
  }

  function openDisponibilidad(a) {
    switch (($('.js-loquiero-movil-cerrado').hide(), a)) {
      case 'fija':
        $('.Llamar-FlotanteDisponibilidad').show(),
          $(_llamarFlotante).hide(),
          $('.botonera-mobile .botonera-mobile-wrapper').show(),
          $('.contactWrapper').show();
        break;
      case 'movil':
        $('.Llamar-FlotanteDisponibilidad').hide(),
          $(_llamarFlotante).show(),
          $('.botonera-mobile .botonera-mobile-wrapper').show(),
          $('.contactWrapper').show();
        break;
      case 'movil-automatico':
        $('.Llamar-FlotanteDisponibilidad').hide(),
          $(_llamarFlotante).hide(),
          $('.botonera-mobile .botonera-mobile-wrapper').hide(),
          $('.contactWrapper').show();
        break;
      default:
        $('.Llamar-FlotanteDisponibilidad').hide(),
          $(_llamarFlotante).show(),
          $('.botonera-mobile .botonera-mobile-wrapper').show(),
          $('.contactWrapper').show();
    }
  }

  function setDisponibilidad(a) {
    'Fija' == tipo_lp
      ? 'ABIERTO' === estadoCallCenterFija
        ? openDisponibilidad(a)
        : 'CERRADO' === estadoCallCenterFija && closeDisponibilidad()
      : 'ABIERTO' === estadoCallCenterMovil
      ? openDisponibilidad(a)
      : closeDisponibilidad(),
      '' !== $('.tabsNav.active').attr('data-disponibilidad') &&
      $('.tabsNav.active').attr('data-disponibilidad') !== void 0
        ? setHorarioModal($('.tabsNav.active').attr('data-disponibilidad'))
        : 'Fija' == tipo_lp
        ? ($('.js-text-horario').html('Lunes a viernes de 8 a 21 horas'),
          $('.js-text-horario-modal').html('lunes a viernes de 8 a 21 horas'))
        : ($('.js-text-horario').html('Lunes a s\xE1bado de 9 a 21 horas'),
          $('.js-text-horario-modal').html('lunes a s\xE1bado de 9 a 21 horas')),
      'true' !== $('.tabsNav.active').attr('data-activate-call-me-back')
        ? ($(_llamarFlotante).hide(),
          $('.botonera-mobile .botonera-mobile-wrapper').hide(),
          $('.contactWrapper').hide(),
          $('.js-modal-phone-container').hide(),
          $('.Llamar-FlotanteDisponibilidad').hide())
        : $('.js-modal-phone-container').show(),
      ('ABIERTO' === estadoCallCenterMovil || 'ABIERTO' === estadoCallCenterFija) &&
        '' !== $('.tabsNav.active').attr('data-custom-c2c-lateral') &&
        $('.tabsNav.active').attr('data-custom-c2c-lateral') !== void 0 &&
        'fija' === $('.tabsNav.active').attr('data-custom-c2c-lateral') &&
        openDisponibilidad($('.tabsNav.active').attr('data-custom-c2c-lateral'));
    var b;
    if (
      '' !== $('.tabsNav.active').attr('data-custom-tel-ctc') &&
      $('.tabsNav.active').attr('data-custom-tel-ctc') !== void 0
    ) {
      var c = $('.tabsNav.active').attr('data-custom-tel-ctc');
      b = c.replace(/-/g, '');
    } else b = telefono_contacto.replace(/-/g, '');
    $('.js-contact-phone').each(function () {
      $(this).attr('href', 'tel:' + b);
    }),
      $('.js-contactTitle__phone').each(function () {
        $(this).html(b);
      }),
      $('.js-contactTitle__phoneLink').each(function () {
        $(this).attr('href', 'tel:' + b);
      }),
      $('.js-numero-linea-gratuita').each(function () {
        if (0 < document.getElementsByClassName('js-contactTitle__phone').length) {
          var a = function (a) {
              return a.splice(4, 0, '--'), a.splice(8, 0, '--'), a;
            },
            b = document.getElementsByClassName('js-contactTitle__phone')[0].innerHTML;
          11 < b.length ? $(this).html(b.split(' ').join('-')) : $(this).html(a(b.split('')));
        }
      });
  }

  function setTipoCallCenter(a) {
    var b;
    switch (document.location.host) {
      case 'test.ddsuite.net':
        b = 'php/ControlCallCenter/php/LandingsCallcenter.json';
        break;
      case 'localhost:3000':
        b = 'php/ControlCallCenter/php/LandingsCallcenter.json';
        break;
      default:
        b = document.location.origin + '/php/ControlCallCenter/php/LandingsCallcenter.json';
    }
    fetch(b)
      .then(function (a) {
        return a.json();
      })
      .then(function (b) {
        for (var c = b, d = 0; d < c.lps.length; d++)
          0 === c.lps[d].codigo.indexOf(id_lp_call_center + '-' + c.lps[d].tab) &&
            c.lps[d].tab == a &&
            (tipoCallCenter = c.lps[d].callCenter);
        console.log('tipoCallCenter: ' + tipoCallCenter);
      });
  }

  function cargaPestanaMobile() {
    var a = getParam('tab', window.location.href),
      b = '';
    '' === a
      ? ((b = '#tab1'),
        $('li.menu-tab > a[href="' + b + '"]')
          .parent()
          .addClass('active'))
      : ((b = $('[data-tipo-tab=' + a + ']').attr('id')),
        b
          ? ($('li.menu-tab > a[href="' + b + '"]')
              .parent()
              .addClass('active'),
            $('li.menu-tab > a[href="#' + b + '"]')
              .parent()
              .addClass('active'))
          : ((b = '#tab1'),
            $('li.menu-tab > a[href="' + b + '"]')
              .parent()
              .addClass('active'),
            $('li.menu-tab > a[href="#' + b + '"]')
              .parent()
              .addClass('active')));
  }

  function setHorarioModal(a) {
    switch (a) {
      case 'fija':
        $('.js-text-horario').html('Lunes a viernes de 8 a 21 horas'),
          $('.js-text-horario-modal').html('lunes a viernes de 8 a 21 horas');
        break;
      default:
        $('.js-text-horario').html('Lunes a s\xE1bado de 9 a 21 horas'),
          $('.js-text-horario-modal').html('lunes a s\xE1bado de 9 a 21 horas');
    }
  }

  function cargaPestana() {
    var a,
      b = getParam('tab', window.location.href),
      c = '',
      d = '';
    '' === b
      ? ((c = '#tab1'),
        $('.nav > li > a[href="' + c + '"]')
          .parent()
          .addClass('active'),
        $('.tabsNav').removeClass('active'),
        $(c).addClass('active'),
        (d = $(c).attr('data-disponibilidad')),
        (a = $(c).attr('data-tipo-tab')),
        (b = 'tab1'))
      : ((c = $('[data-tipo-tab=' + b + ']').attr('id')),
        c
          ? ($('.nav > li > a[href="' + c + '"]')
              .parent()
              .addClass('active'),
            $('.nav > li > a[href="#' + c + '"]')
              .parent()
              .addClass('active'),
            $('.tabsNav').removeClass('active'),
            $('#' + c).addClass('active'),
            (b = c),
            (d = $('#' + c).attr('data-disponibilidad')),
            (a = $('#' + c).attr('data-tipo-tab')))
          : ((c = '#tab1'),
            $('.nav > li > a[href="' + c + '"]')
              .parent()
              .addClass('active'),
            $('.tabsNav').removeClass('active'),
            $(c).addClass('active'),
            (d = $(c).attr('data-disponibilidad')),
            (a = $(c).attr('data-tipo-tab')),
            (b = c))),
      $('.slick-slider').each(function () {
        $(this).slick('setPosition');
      }),
      setDisponibilidad(d, a),
      setTipoproducto(),
      setTipoCallCenter(a, window.location.pathname);
    var e = getParam('anc', window.location.href);
    '' !== e && hacerScroll(e), cargaPestanaMobile();
  }

  function cambiaPestana(a, b) {
    var c = getParam('campaign', window.location.href);
    b !== void 0 && '' !== b && 'undefined' !== b
      ? c !== void 0 && '' !== c && 'undefined' !== c
        ? window.history.pushState(null, null, '?tab=' + b + '&campaign=' + c)
        : window.history.pushState(null, null, '?tab=' + b)
      : c !== void 0 && '' !== c && 'undefined' !== c
      ? window.history.pushState(null, null, '?campaign=' + c)
      : window.history.pushState(null, null, '?'),
      $('.slick-slider').each(function () {
        $(this).slick('setPosition');
      }),
      setDisponibilidad($(a).attr('data-disponibilidad'), b),
      setTipoproducto(),
      setTipoCallCenter(b, window.location.pathname),
      $('html, body').animate(
        {
          scrollTop: 0,
        },
        'slow'
      );
  }

  function changeModalNocturno() {
    $('.modalWrapperNocturno .llamame').each(function () {
      $(this).attr('data-valor-url', $('.js-loquiero-movil-cerrado').attr('data-valor-url')),
        $(this).attr('data-accion', $('.js-loquiero-movil-cerrado').attr('data-accion')),
        $(this).attr('data-nombre-landing', $('j.s-loquiero-movil-cerrado').attr('data-nombre-landing')),
        $(this).attr('data-valor-plan', $('.js-loquiero-movil-cerrado').attr('data-valor-plan')),
        $(this).attr('data-valor-origen', $('.js-loquiero-movil-cerrado').attr('data-valor-origen')),
        $(this).attr('data-cod-campana', $('.js-loquiero-movil-cerrado').attr('data-cod-campana'));
    });
  }

  function validaestadoCallCenter() {}

  function validaHora() {
    var a = '';
    (a =
      'test.ddsuite.net' == document.location.host || 'localhost:3000' == document.location.host
        ? '../php/Functions.php'
        : document.location.origin + '/php/Functions.php'),
      $.ajax({
        url: a,
        type: 'POST',
        data: {
          action: 'CallCenterOpen',
        },
        success: function (a) {
          var b = a.split('|');
          (estadoCallCenterFija = b[0]),
            (estadoCallCenterMovil = b[1]),
            cargaPestana(),
            validaestadoCallCenter(estadoCallCenterMovil, estadoCallCenterFija);
        },
        error: function (a, b, c) {
          console.log(a),
            console.log('Details: ' + b + '\nError:' + c),
            (estadoCallCenterFija = 'ABIERTO'),
            (estadoCallCenterMovil = 'ABIERTO'),
            cargaPestana(),
            validaestadoCallCenter(estadoCallCenterMovil, estadoCallCenterFija);
        },
      });
  }

  function sendPin() {
    var a = localStorage.getItem('ani');
    $.ajax({
      url: 'https://guia-interactiva.movistararg.com/api/v1/send_pin/ani/54' + a,
      method: 'GET',
    })
      .done(function (a) {
        var b = a.data.sent.auth_session;
        localStorage.setItem('auth_session', b), $('.modal').modal('hide'), $('#planIdeal3').modal('show');
      })
      .fail(function (a, b) {
        console.log('Error' + b);
      });
  }

  function reenviar() {
    dataLayer.push({
      event: 'LinkClickAction',
      eventCategory: RTD_Planes,
      eventAction: 'click',
      eventLabel: 'reenviar_pin_sms',
      eventValue: 1,
      eventNonInteraction: !1,
    }),
      sendPin();
  }

  function checkTicketNumber() {
    var a = getParam('nroReferencia', window.location.href);
    a && $('.form-tramite span').html(a);
  }

  function loadDataConfirm() {
    $('.tyc').html(localStorage.getItem('tyc')),
      $('.form-nombre').html(localStorage.getItem('product_name') + ' ' + localStorage.getItem('internet')),
      $('.form-precio').html(localStorage.getItem('product_price')),
      $('#ani').val(localStorage.getItem('ani')),
      $('#field_plan').val(localStorage.getItem('product_name') + ' ' + localStorage.getItem('internet'));
  }

  function checkResponseSispro() {
    var a = getParam('nroReferencia', window.location.href);
    a &&
      (0 === parseInt(a)
        ? ($('.modal').modal('hide'), $('#planIdealError').modal('show'))
        : ($('.modal').modal('hide'), $('#planIdeal5').modal('show'), loadDataConfirm(), checkTicketNumber()));
  }

  function verifyPin() {
    var a = $('#input-pin').val();
    if ('' == a) return void alert('Ingres\xE1 el pin');
    var b = localStorage.getItem('auth_session');
    if (0 < a.trim().length) {
      $.ajax({
        url: 'https://guia-interactiva.movistararg.com/api/v1/verify_pin/pin/' + a + '/auth_session/' + b,
        method: 'GET',
      })
        .done(function (a) {
          var b = a.data.verify.pin_status;
          'verify_ok' == b
            ? ($('.modal').modal('hide'), $('#planIdeal4').modal('show'), checkResponseSispro(), loadDataConfirm())
            : ($('.modal').modal('hide'), $('#planIdealError').modal('show'));
        })
        .fail(function () {
          debugMessage('Error'), showError();
        });
    }
  }

  function sendDataLayer(a, b, c) {
    dataLayer.push({
      event: 'LinkClickAction',
      eventCategory: a,
      eventAction: b,
      eventLabel: c,
    });
  }

  function esFeriado(a, b, c) {
    for (var d in feriados) {
      var e = feriados[d];
      if (e.y == a && e.m == b && e.d == c) return !0;
    }
    return !1;
  }

  function saveProductData(a, b) {
    localStorage.setItem('tyc', b.terminos_condiciones),
      localStorage.setItem('tyc_link', b.terminos_condiciones_link),
      localStorage.setItem('product_name', b.nombre),
      localStorage.setItem('product_price', b.precio),
      localStorage.setItem('product_price_2', b.precio_descuento),
      localStorage.setItem('code', b.codigo),
      localStorage.setItem('minutos', b.minutos_incluidos),
      localStorage.setItem('sms', b.sms_incluidos),
      localStorage.setItem('familia_movistar', b.beneficio3),
      localStorage.setItem('beneficio4', b.beneficio4),
      localStorage.setItem('beneficio5', b.beneficio5),
      localStorage.setItem('extra', b.beneficio_extra),
      localStorage.setItem('test_drive', b.beneficio2),
      localStorage.setItem('leyenda', b.leyenda),
      localStorage.setItem('internet', b.internet);
  }

  function getProductData(a, b) {
    $.ajax({
      url: 'https://guia-interactiva.movistararg.com/api/v2/rtd/product/' + a + '/filter/' + b,
      method: 'GET',
    })
      .done(function (b) {
        var c = b.data.product;
        'none' == c
          ? console.log('No plans')
          : (saveProductData(a, c),
            $('.planesMovistar__title').html(c.leyenda),
            $('.cambioPlan .planesMovistar__headerTitle .nombrePlan').html(c.nombre),
            $('.cambioPlan .planesMovistar__headerTitle .internet').html(c.internet),
            $('.cambioPlan .loQuieroCambioPlan').attr('data-valor-plan', c.nombre + ' ' + c.internet),
            $('.cambioPlan .planesMovistar_price .price').html(c.precio.replace('$ ', '')),
            $('.cambioPlan .planesMovistar__paragraph .sms_incluidos').html(
              '<b>Mensaje\xE1</b> ' + c.sms_incluidos.replace('Libre', 'libre')
            ),
            $('.cambioPlan .planesMovistar__paragraph.llamadas').html(
              '<b>Habl\xE1</b> ' + c.minutos_incluidos.replace('Libre', 'libre')
            ),
            $('.cambioPlan .planesMovistar__paragraph .beneficio1').html(c.beneficio1),
            $('.cambioPlan .planesMovistar__paragraph.beneficio_extra1').html('Beneficio Extra: ' + c.beneficio_extra),
            $('.cambioPlan .planesMovistar__paragraph.beneficio_extra2').html(
              c.beneficio2 +
                ' activando Test Drive <button class="greenModalButton noneFLoating" data-target="#modalTestDrive" data-toggle="modal" tabindex="0">\xA1</button>'
            ),
            '-' == c.beneficio3
              ? $('.cambioPlan .planesMovistar__paragraph.beneficio_extra3').hide('none')
              : $('.cambioPlan .planesMovistar__paragraph.beneficio_extra3').html(c.beneficio3),
            '-' == c.beneficio4
              ? $('.cambioPlan .planesMovistar__paragraph.beneficio_extra4').hide('none')
              : $('.cambioPlan .planesMovistar__paragraph.beneficio_extra4').html(c.beneficio4),
            '-' == c.beneficio5
              ? $('.cambioPlan .planesMovistar__paragraph.beneficio_extra5').hide('none')
              : $('.cambioPlan .planesMovistar__paragraph.beneficio_extra5').html(c.beneficio5),
            (RTD_Planes = 'Ofertas Avatar - Cambio de Plan ' + c.internet));
      })
      .fail(function () {
        console.log('error');
      });
  }

  function getAni(a) {
    $.ajax({
      url: 'https://guia-interactiva.movistararg.com/api/v1/get_ani/code/' + a,
      method: 'GET',
    })
      .done(function (a) {
        var b = a.data.ani;
        null != b && 'none' != b && '' != b
          ? (12 == b.length && (b = b.toString().substring(2)), localStorage.setItem('ani', b))
          : localStorage.setItem('ani', 'empty'),
          getProductData(localStorage.getItem('product_type'), localStorage.getItem('filter'));
      })
      .fail(function (a, b) {
        console.log('Error' + b);
      });
  }

  function getCode(a) {
    var b = window.location.href,
      c = getParam('code', b);
    localStorage.setItem('product_type', a),
      c
        ? getAni(c)
        : (window.location.href = 'https://time.movistar.com.ar/dialog/oauth?provider_id=cuoma_01&redirect_uri=' + b);
  }

  function loQuieroCargaPlan() {
    getCode('rtd_planes_v2');
  }

  function callService(a) {
    function getAjaxErrorMsg(a, b, c) {
      var d = '[' + a.status + ']-' + b + '-' + c;
      return d;
    }
    var b,
      c = getCookie('session_timestamp'),
      e = $(a).parent().parent();
    b = 0 == e.find('.cod-urb').length ? e.find('.anictc').val() : e.find('.cod-urb').val() + e.find('.anictc').val();
    var f = e.find('.orig').val();
    'CERRADO' == estadoCallCenterMovil && ('Movil' == tipo_lp || 'Fija' == tipo_lp) && (f = 'Nocturno|' + f),
      $(a).attr('data-modal-label') && (f = $(a).attr('data-modal-label') + '|' + f),
      console.log(f);
    var g = e.find('.camp').val();
    console.log(g);
    var h =
      0 == e.find('.desc').val().length
        ? $('.js-tengoLinea a.disparadorModalSeoTienda').first().data('nombre')
        : e.find('.desc').val();
    console.log(h);
    var i = e.find('.rango').val(),
      j = getCookie('ctc'),
      k = new Date(),
      d = k.getHours(),
      l = k.getDay(),
      m = 0,
      n = esFeriado(k.getFullYear(), k.getMonth() + 1, k.getDate());
    'Fija' == tipo_lp
      ? ((m = 8),
        'CERRADO' === estadoCallCenterFija &&
          (0 >= i
            ? (e.find('label.error-horario').addClass('red'),
              e.find('label.error-horario').text('Por favor, seleccion\xE1 un rango horario para contactarte'))
            : e.find('label.error-horario').hide()))
      : ((m = 9),
        'CERRADO' === estadoCallCenterMovil &&
          (0 >= i
            ? (e.find('label.error-horario').addClass('red'),
              e.find('label.error-horario').text('Por favor, seleccion\xE1 un rango horario para contactarte'))
            : e.find('label.error-horario').hide()));
    var o = i,
      p = $(a).attr('onclick');
    if (p && ((p = p.replace(/\'/g, '"')), 0 <= p.indexOf('eventCategory'))) {
      var q = $.parseJSON(p.substring(p.indexOf('{'), p.indexOf('}') + 1));
      categoria = q.eventCategory;
    }
    console.log(categoria);
    var r = '|' + f + '|' + g + '|' + b + '|' + o + '|' + h + '|' + c;
    if ($('.error-horario').is(':visible')) return !1;
    '15' == b.substring(0, 2) && (b = '11' + b.substring(2)),
      (r = '|' + f + '|' + g + '|' + b + '|' + o + '|' + h + '|' + c);
    var t = 'formIntentoEnvio|' + f + '|' + g + '|' + b + '|' + o + '|' + h + '|' + c,
      u = '',
      v = '',
      w = getCookie('utms');
    w && (w = JSON.parse(w));
    var x = w && w.utm_source ? w.utm_source : '',
      y = w && w.utm_campaign ? w.utm_campaign : '',
      z = w && w.utm_medium ? w.utm_medium : '',
      A = w && w.utm_content ? w.utm_content : '',
      B = w && w.utm_term ? w.utm_term : '',
      C = 'noGA';
    try {
      C = ga.getAll()[0].get('userId') || ga.getAll()[0].get('clientId');
    } catch (a) {
      return !1;
    }
    var D = C + '-' + c,
      E = C,
      F = window.location.href;
    if ('Movil' == tipo_lp || 'Fija' == tipo_lp) {
      var G,
        H,
        I,
        J = $(a).attr('data-tipo-call-center-custom');
      '' != J && null != J ? (tipoCallCenter = J) : null,
        'GSS' === tipoCallCenter
          ? ((H = 'https://callservices.grupogss.com.pe/GSS_TmaC2C/api/gss/insert'),
            (I = 'POST'),
            (G = {
              CodigoOrigen: f,
              CodigoCampaña: g,
              Teléfonos: b,
              Horario: o,
              Descripcion: h,
              utm_source: x,
              utm_medium: z,
              utm_campaign: y,
              utm_content: A,
              utm_term: B,
              id_envio: D,
              id_cliente: E,
              pagina_solicitante: F,
              CUIT: '0',
            }))
          : ((H = 'https://wsc2c.grupokonecta.pe/neoapi/webservice.asmx/ExecuteTask13'),
            (I = 'get'),
            (G = {
              idTask: 14,
              param1: f,
              param2: g,
              param3: b,
              param4: o,
              param5: h,
              param6: x,
              param7: z,
              param8: y,
              param9: A,
              param10: D,
              param11: E,
              param12: F,
              param13: B,
            })),
        console.log('urlCallCenter: ' + H),
        jQuery.ajax({
          url: H,
          type: I,
          cache: !1,
          data: G,
          success: function () {
            (r = 'formenviado' + r),
              console.log('success: ' + r),
              (v = ''),
              (u = '\xA1Muchas gracias!'),
              (v = 'En breve nos estaremos comunicando con vos desde el n\xFAmero 11-2233-0286, de '),
              k.setTime(k.getTime() + 86400000),
              (document.cookie =
                'ctc=' + (j ? j + '|' : '') + b + '; expires=' + k.toGMTString() + ';domain=.movistar.com.ar; path=/'),
              $('.js-mainBanner:visible #ani2').val(''),
              $('.modal-container #ani2').val('');
          },
          beforeSend: function () {
            $('.modal').modal('hide'), $(_modalLoading).modal('show');
          },
          complete: function () {
            console.log('complete: ' + r),
              dataLayer.push({
                event: 'LinkClickAction',
                eventCategory: categoria,
                eventAction: 'click',
                eventLabel: r,
                eventValue: 1,
                eventNonInteraction: !0,
              });
            showLightbox(u, v, n, o, !1);
          },
          error: function (a, b) {
            var c = getAjaxErrorMsg(a, b);
            r = 'formNOenviado' + r + '|' + c;
            var d = '0800' + r;
            console.log('error: ' + r), (u = 'No se enviaron los datos.');
            var e =
              '<a href=\'tel:08009999941\' onclick=\'dataLayer.push({"event": "LinkClickAction", "eventCategory": "' +
              categoria +
              '", "eventAction": "click", "eventLabel": "' +
              d +
              '", "eventValue": 1, "eventNonInteraction": true});\'>0800-999-9941</a>';
            v = 'Int\xE9ntelo m\xE1s tarde o ll\xE1menos al ' + e + ' para ayudarlo con su compra.';
          },
        });
    }
    return (
      dataLayer.push({
        event: 'LinkClickAction',
        eventCategory: categoria,
        eventAction: 'click',
        eventLabel: t,
        eventValue: 1,
        eventNonInteraction: !0,
      }),
      console.log('idTask=2&param1=' + f + '&param2=' + g + '&param3=' + b + '&param4=' + o + '&param5=' + h),
      !0
    );
  }

  function changeNumeroLineaGratuita(a) {
    switch (a) {
      case 'Movil_Linea Nueva':
        $('.js-numero-linea-gratuita').html('0800-222-6116');
        break;
      case 'Movil_Portabilidad':
        $('.js-numero-linea-gratuita').html('0800-321-1112');
        break;
      case 'Fija_Alta':
        $('.js-numero-linea-gratuita').html('0800-999-4414');
        break;
      case 'Movil_Equipo Liberado':

      case 'Movil_Linea Nueva Con Equipo':

      case 'Movil_Cambio Equipo':

      case 'Equipos ContraFactura':
        $('.js-numero-linea-gratuita').html('0800-222-6116');
        break;
      default:
        $('.js-numero-linea-gratuita').html(telefono_contacto.split(' ').join('-'));
    }
    '' !== $('.tabsNav.active').attr('data-custom-tel-ctc') &&
      $('.tabsNav.active').attr('data-custom-tel-ctc') !== void 0 &&
      $('.js-numero-linea-gratuita').html($('.tabsNav.active').attr('data-custom-tel-ctc').split(' ').join('-'));
  }
  $('.menu-tab').on('shown.bs.tab', function (a) {
    $(a.target).parent().addClass('active');
  }),
    $('.menu-tab').on('hide.bs.tab', function (a) {
      $(a.target).parent().removeClass('active');
    }),
    $(document).on('click, touchstart', _showMenuTabs, function (a) {
      a.preventDefault(),
        a.stopPropagation(),
        $(_mainMultiProductoTabs).is(':visible')
          ? $(_mainMultiProductoTabs).slideUp()
          : $(_mainMultiProductoTabs).slideDown(),
        sendDataLayer('Click Menu Mobile', 'Click', $(this).find('.text').html());
    }),
    $(_modalTerminal).click(function () {
      $('#modal-terminal .modal-title-phone').text($(this).attr('data-title')),
        $('#modal-terminal .modal-image img').attr('src', $(this).attr('data-image')),
        $('#modal-terminal .caracteristicas-equipos__item_pantalla p strong').text($(this).attr('data-pantalla')),
        $('#modal-terminal .caracteristicas-equipos__item_camara p strong:first-child').text(
          $(this).attr('data-camara')
        ),
        $('#modal-terminal .caracteristicas-equipos__item_camara p strong:last-child').text(
          $(this).attr('data-frontal')
        ),
        $('#modal-terminal .caracteristicas-equipos__item_almacenamiento p strong').text($(this).attr('data-memoria')),
        $('#modal-terminal .caracteristicas-equipos__item_procesador p strong').text($(this).attr('data-procesador')),
        $('#modal-terminal .caracteristicas-equipos__item_sistema-operativo p strong').text($(this).attr('data-so'));
    }),
    $(_modalTerminalEquiposLiberados).click(function () {
      $('#modal-terminal-equipos-liberados .js__terminal-modal-titulo').text($(this).attr('data-title')),
        $('#modal-terminal-equipos-liberados .js__terminal-image-modal').attr('src', $(this).attr('data-image')),
        $('#modal-terminal-equipos-liberados .pantalla p strong').text($(this).attr('data-pantalla')),
        $('#modal-terminal-equipos-liberados .principal').text($(this).attr('data-camara')),
        $('#modal-terminal-equipos-liberados .frontal').text($(this).attr('data-frontal')),
        $('#modal-terminal-equipos-liberados .almacenamiento p strong').text($(this).attr('data-memoria')),
        $('#modal-terminal-equipos-liberados .procesador p strong').text($(this).attr('data-procesador')),
        $('#modal-terminal-equipos-liberados .so p strong').text($(this).attr('data-so'));
    }),
    $('.terminales-mas-plan__informacion-icono-grande').click(function () {
      $('#modal-terminal-equipos-liberados .js__terminal-modal-titulo').text($(this).attr('data-title')),
        $('#modal-terminal-equipos-liberados .js__terminal-image-modal').attr('src', $(this).attr('data-image')),
        $('#modal-terminal-equipos-liberados .pantalla p strong').text($(this).attr('data-pantalla')),
        $('#modal-terminal-equipos-liberados .principal').text($(this).attr('data-camara')),
        $('#modal-terminal-equipos-liberados .frontal').text($(this).attr('data-frontal')),
        $('#modal-terminal-equipos-liberados .almacenamiento p strong').text($(this).attr('data-memoria')),
        $('#modal-terminal-equipos-liberados .procesador p strong').text($(this).attr('data-procesador')),
        $('#modal-terminal-equipos-liberados .so p strong').text($(this).attr('data-so'));
    }),
    $(_dataTargetModalRoamingInfo).click(function () {
      $('#modalRoamingInfo').modal('show');
    }),
    $(_tab).on('shown.bs.tab', function (a) {
      var b = $(a.target).attr('href'),
        c = $(b).attr('data-etiqueta'),
        d = $(b).attr('data-tipo-tab');
      cambiaPestana(b, d),
        $('.contenido').addClass('degradado'),
        $('.contenido').removeClass('contenidoOpen'),
        setDisponibilidad($(b).attr('data-disponibilidad'), d);
    }),
    $('.moreButton').on('click', function (a) {
      a.preventDefault();
      var b = $(this).parent().parent();
      b.find('.terminos__extendedContent').slideDown(), b.find('.lessButton').show(), $(this).hide();
    }),
    $('.lessButton').on('click', function (a) {
      a.preventDefault();
      var b = $(this).parent().parent();
      b.find('.terminos__extendedContent').slideUp(), b.find('.moreButton').show(), $(this).hide();
    }),
    $('.close').on('click', function () {
      $('.form-group').find('label.error').css('display', 'none');
      $('.form-group').find('.tel_number').val(''), $('.form-group').find('label.error').text(''), reanudarSlider();
    }),
    $(document).on('click', _dataTargetModalNocturno, function () {
      if (
        ('CERRADO' == estadoCallCenterMovil && 'Movil' == tipo_lp) ||
        ('CERRADO' == estadoCallCenterFija && 'Fija' == tipo_lp)
      ) {
        if ($(this).attr('data-valor-url') && $(this).attr('id')) {
          var a = this.attributes['data-valor-url'].value;
          window.open(a, '_blank'), $('.modal').modal('hide');
        } else
          $(_dataTargetModalNocturno).attr('data-cod-campana') &&
            $(_modalNocturno).find('.camp').val($(this).attr('data-cod-campana')),
            $(_dataTargetModalNocturno).attr('data-valor-origen') &&
              $(_modalNocturno).find('.orig').val($(this).attr('data-valor-origen')),
            $(_dataTargetModalNocturno).attr('data-valor-plan') &&
              $(_modalNocturno).find('.desc').val($(this).attr('data-valor-plan')),
            $(_modalNocturno)
              .find('.llamame')
              .attr('data-disponibilidad-call-center', $(this).attr('data-disponibilidad-call-center'));
      }
    }),
    $(document).on('click', '*[data-target="#modal"]', function (a) {
      var b,
        c = $(this).attr('data-cod-campana'),
        d = $(this).attr('data-disponibilidad-call-center'),
        e = a.target;
      $(this).attr('data-valor-url') &&
        $(this).attr('id') &&
        ((b = this.attributes['data-valor-url'].value), window.open(b, '_blank'), $('.modal').modal('hide')),
        $(this).attr('data-cod-campana') && $(_jsBtnLlamemeModal).find('.camp').val($(this).attr('data-cod-campana')),
        $(this).attr('data-valor-origen') && $(_jsBtnLlamemeModal).find('.orig').val($(this).attr('data-valor-origen')),
        $(this).attr('data-valor-plan') && $(_jsBtnLlamemeModal).find('.desc').val($(this).attr('data-valor-plan')),
        $(this).attr('data-disponibilidad-call-center') &&
          $(_jsBtnLlamemeModal).find('.llamame').attr('data-disponibilidad-call-center', d),
        -1 < $(this).attr('data-valor-plan').search('Carrusel Planes')
          ? $('#modalMainTitle').html('Te ayudamos a contratar')
          : $('#modalMainTitle').html('Te ayudamos a Portar'),
        $('.modalWrapper input#infoModal').val($(this).attr('data-valor-plan')),
        $('.modalWrapper .llamame').each(function () {
          $(this).attr('data-accion', $(e).attr('data-accion')),
            $(this).attr('data-nombre-landing', $(e).attr('data-nombre-landing')),
            $(this).attr('data-valor-plan', $(e).attr('data-valor-plan')),
            $(this).attr('data-valor-origen', $(e).attr('data-valor-origen')),
            $(this).attr('data-disponibilidad-call-center', d),
            $(this).attr('data-tipo-call-center-custom', $(e).attr('data-tipo-call-center-custom'));
        }),
        $('#terminalTitle').html($(this).attr('data-modal-title')),
        $('#terminalTitleDisponibilidad').html($(this).attr('data-modal-title')),
        $('#terminalTitleDisponibilidad50MB').html($(this).attr('data-modal-title')),
        $('#terminalTitleDisponibilidad').show(),
        $('#terminalTitle').show(),
        setHorarioModal(d),
        changeNumeroLineaGratuita(c);
    }),
    $(document).on('click', _llamarFlotante, function () {
      $('#terminalTitle').hide();
      var a = $('.tabsNav.active .js-mainBanner:visible .form-group .sendGTM').attr('data-valor-origen');
      $(_modal).find('.camp').val($(this).attr('data-cod-campana')),
        $(_modal)
          .find('.llamame')
          .attr('data-valor-origen', a + ' - c2c lateral'),
        $(_modal)
          .find('.orig')
          .val(a + ' - c2c lateral');
    }),
    $('.close').on('click', function () {
      $('.modal-backdrop.fade.in').hide();
    }),
    $(document).on('click', _sendGTM, function () {
      var a = $(this).attr('data-cod-campana')
        ? $(this).attr('data-cod-campana') + ' | ' + $(this).attr('data-valor-plan')
        : $(this).attr('data-valor-plan');
      var b = $(this).text(),
        c = $(this).attr('data-valor-origen') + ' - ' + nombreLP;
      $(this).hasClass('boton-superior') && (botonClicado.zona = 'Banner Superior'),
        (categoria = c),
        sendDataLayer(c, b, a);
    }),
    $(document).on('click', _sendGTMtelefonoHeader, function () {
      sendDataLayer($(this).attr('data-valor-origen'), 'Click', 'Compr\xE1 ac\xE1  ' + telefono_contacto);
    }),
    $(document).on('click', _sendClick, function () {
      sendDataLayer($(this).attr('data-valor-origen'), 'Click', 'Lo quiero - ' + $(this).attr('data-nombre-landing'));
    }),
    $(document).on('click', _llamame, function () {
      callService(this),
        //Deshabilito boton CTC luego de enviar lead
        $(this).prop('disabled', true);
    }),
    $(_modal).on('hidden.bs.modal', function () {
      $('.error.active').each(function () {
        $(this).html('');
      });
    }),
    $(_modalLoading).on('hidden.bs.modal', function () {
      $('.error.active').each(function () {
        $(this).html('');
      });
    }),
    $('.radioPlanOption').on('change', function (a) {
      var b = $(a.target).parents('.js-radio-btn'),
        c = $(a.target).attr('value'),
        d = $('.btn', b);
      d.attr('data-accion', c),
        d.attr('data-modal-title', c),
        d.attr('data-modal-title', c),
        d.attr('data-valor-plan', c);
    }),
    $('.rangoHorario').on('change', function (a) {
      var b = $(a.target).attr('value');
      $('.rango').val(b);
    }),
    $('.wrapperChatAyuda.nueva-funcionalidad').animate({}, 1250, function () {
      $('.wrapperChatAyuda').css('top', $(window).scrollTop() + 200);
    }),
    $(window).bind('scroll', function () {
      var a = $('.wrapperChatAyuda.nueva-funcionalidad');
      a.stop().animate(
        {
          top: $(this).scrollTop() + 200,
        },
        1250,
        'swing'
      );
    }),
    $(document).ready(function () {
      if (
        ($(_activityModal).on('hidden.bs.modal', function () {
          $(_activityModal).modal('hide'), setCookie('poppedAc', 1, 1);
        }),
        $(_exitModal).on('hidden.bs.modal', function () {
          $(_exitModal).modal('hide'), setCookie('poppedUp', 1, 1);
        }),
        $('.loQuieroCambioPlan').attr('id-plan'))
      ) {
        var a = $('.loQuieroCambioPlan').attr('id-plan');
        localStorage.setItem('filter', a);
        var b = getParam('source', window.location.href);
        null != b && localStorage.setItem('source', b), loQuieroCargaPlan(), checkResponseSispro();
      }
      validaHora(),
        $('input').focusin(function () {
          pausarSlider();
        }),
        changeModalNocturno(),
        $('.js-contactTitle__phone').each(function () {
          $(this).html(telefono_contacto);
        });
      var c = 'tel:' + telefono_contacto.replace(/\s/g, '');
      $('.js-contact-phone').each(function () {
        $(this).attr('href', c);
      }),
        $('[data-nombre-landing]').each(function () {
          $(this).attr('data-nombre-landing', nombreLP);
        }),
        1 <= $('.clock').length && console.log,
        $('#category').on('change', function () {
          var a = $(this).val();
          console.log(a), 'todas' == a ? $('.striped').show() : ($('#modal-canales table').hide(), $('#' + a).show());
        });
    });
});
