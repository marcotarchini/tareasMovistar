'use strict';

function _typeof(e) {
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    _typeof(e)
  );
}
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ('undefined' == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (e) {
  'use strict';
  var t = e.fn.jquery.split(' ')[0].split('.');
  if ((2 > t[0] && 9 > t[1]) || (1 == t[0] && 9 == t[1] && 1 > t[2]) || 2 < t[0])
    throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
})(jQuery),
  +(function (t) {
    'use strict';

    function transitionEnd() {
      var e = document.createElement('bootstrap'),
        t = {
          WebkitTransition: 'webkitTransitionEnd',
          MozTransition: 'transitionend',
          OTransition: 'oTransitionEnd otransitionend',
          transition: 'transitionend',
        };
      for (var i in t)
        if (e.style[i] !== void 0)
          return {
            end: t[i],
          };
      return !1;
    }
    (t.fn.emulateTransitionEnd = function (e) {
      var i = !1,
        a = this;
      t(this).one('bsTransitionEnd', function () {
        i = !0;
      });
      var s = function () {
        i || t(a).trigger(t.support.transition.end);
      };
      return setTimeout(s, e), this;
    }),
      t(function () {
        t.support.transition = transitionEnd();
        t.support.transition &&
          (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (i) {
              if (t(i.target).is(this)) return i.handleObj.handler.apply(this, arguments);
            },
          });
      });
  })(jQuery),
  +(function (t) {
    'use strict';
    var i = function (e) {
      t(e).on('click', '[data-dismiss="alert"]', this.close);
    };
    (i.VERSION = '3.3.6'),
      (i.TRANSITION_DURATION = 150),
      (i.prototype.close = function (a) {
        function removeElement() {
          n.detach().trigger('closed.bs.alert').remove();
        }
        var s = t(this),
          o = s.attr('data-target');
        o || ((o = s.attr('href')), (o = o && o.replace(/.*(?=#[^\s]*$)/, '')));
        var n = t(o);
        a && a.preventDefault(), n.length || (n = s.closest('.alert')), n.trigger((a = t.Event('close.bs.alert')));
        a.isDefaultPrevented() ||
          (n.removeClass('in'),
          t.support.transition && n.hasClass('fade')
            ? n.one('bsTransitionEnd', removeElement).emulateTransitionEnd(i.TRANSITION_DURATION)
            : removeElement());
      });
    var a = t.fn.alert;
    (t.fn.alert = function (e) {
      return this.each(function () {
        var a = t(this),
          s = a.data('bs.alert');
        s || a.data('bs.alert', (s = new i(this))), 'string' == typeof e && s[e].call(a);
      });
    }),
      (t.fn.alert.Constructor = i),
      (t.fn.alert.noConflict = function () {
        return (t.fn.alert = a), this;
      }),
      t(document).on('click.bs.alert.data-api', '[data-dismiss="alert"]', i.prototype.close);
  })(jQuery),
  +(function (t) {
    'use strict';

    function Plugin(i) {
      return this.each(function () {
        var a = t(this),
          s = a.data('bs.button'),
          o = 'object' == _typeof(i) && i;
        s || a.data('bs.button', (s = new e(this, o))), 'toggle' == i ? s.toggle() : i && s.setState(i);
      });
    }
    var e = function Button(e, i) {
      (this.$element = t(e)), (this.options = t.extend({}, Button.DEFAULTS, i)), (this.isLoading = !1);
    };
    (e.VERSION = '3.3.6'),
      (e.DEFAULTS = {
        loadingText: 'loading...',
      }),
      (e.prototype.setState = function (e) {
        var i = this.$element,
          a = i.is('input') ? 'val' : 'html',
          s = i.data();
        (e += 'Text'),
          null == s.resetText && i.data('resetText', i[a]()),
          setTimeout(
            t.proxy(function () {
              i[a](null == s[e] ? this.options[e] : s[e]),
                'loadingText' == e
                  ? ((this.isLoading = !0), i.addClass('disabled').attr('disabled', 'disabled'))
                  : this.isLoading && ((this.isLoading = !1), i.removeClass('disabled').removeAttr('disabled'));
            }, this),
            0
          );
      }),
      (e.prototype.toggle = function () {
        var e = !0,
          t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
          var i = this.$element.find('input');
          'radio' == i.prop('type')
            ? (i.prop('checked') && (e = !1), t.find('.active').removeClass('active'), this.$element.addClass('active'))
            : 'checkbox' == i.prop('type') &&
              (i.prop('checked') !== this.$element.hasClass('active') && (e = !1), this.$element.toggleClass('active')),
            i.prop('checked', this.$element.hasClass('active')),
            e && i.trigger('change');
        } else
          this.$element.attr('aria-pressed', !this.$element.hasClass('active')), this.$element.toggleClass('active');
      });
    var i = t.fn.button;
    (t.fn.button = Plugin),
      (t.fn.button.Constructor = e),
      (t.fn.button.noConflict = function () {
        return (t.fn.button = i), this;
      }),
      t(document)
        .on('click.bs.button.data-api', '[data-toggle^="button"]', function (i) {
          var e = t(i.target);
          e.hasClass('btn') || (e = e.closest('.btn')),
            Plugin.call(e, 'toggle'),
            t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault();
        })
        .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (i) {
          t(i.target)
            .closest('.btn')
            .toggleClass('focus', /^focus(in)?$/.test(i.type));
        });
  })(jQuery),
  +(function (t) {
    'use strict';

    function Plugin(i) {
      return this.each(function () {
        var a = t(this),
          s = a.data('bs.carousel'),
          o = t.extend({}, e.DEFAULTS, a.data(), 'object' == _typeof(i) && i),
          n = 'string' == typeof i ? i : o.slide;
        s || a.data('bs.carousel', (s = new e(this, o))),
          'number' == typeof i ? s.to(i) : n ? s[n]() : o.interval && s.pause().cycle();
      });
    }
    var e = function (e, i) {
      (this.$element = t(e)),
        (this.$indicators = this.$element.find('.carousel-indicators')),
        (this.options = i),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard && this.$element.on('keydown.bs.carousel', t.proxy(this.keydown, this)),
        'hover' != this.options.pause ||
          'ontouchstart' in document.documentElement ||
          this.$element
            .on('mouseenter.bs.carousel', t.proxy(this.pause, this))
            .on('mouseleave.bs.carousel', t.proxy(this.cycle, this));
    };
    (e.VERSION = '3.3.6'),
      (e.TRANSITION_DURATION = 600),
      (e.DEFAULTS = {
        interval: 5e3,
        pause: 'hover',
        wrap: !0,
        keyboard: !0,
      }),
      (e.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          t.preventDefault();
        }
      }),
      (e.prototype.cycle = function (i) {
        return (
          i || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
          this
        );
      }),
      (e.prototype.getItemIndex = function (e) {
        return (this.$items = e.parent().children('.item')), this.$items.index(e || this.$active);
      }),
      (e.prototype.getItemForDirection = function (e, t) {
        var i = this.getItemIndex(t),
          a = ('prev' == e && 0 === i) || ('next' == e && i == this.$items.length - 1);
        if (a && !this.options.wrap) return t;
        var s = 'prev' == e ? -1 : 1,
          o = (i + s) % this.$items.length;
        return this.$items.eq(o);
      }),
      (e.prototype.to = function (e) {
        var t = this,
          i = this.getItemIndex((this.$active = this.$element.find('.item.active')));
        return e > this.$items.length - 1 || 0 > e
          ? void 0
          : this.sliding
          ? this.$element.one('slid.bs.carousel', function () {
              t.to(e);
            })
          : i == e
          ? this.pause().cycle()
          : this.slide(e > i ? 'next' : 'prev', this.$items.eq(e));
      }),
      (e.prototype.pause = function (i) {
        return (
          i || (this.paused = !0),
          this.$element.find('.next, .prev').length &&
            t.support.transition &&
            (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (e.prototype.next = function () {
        return this.sliding ? void 0 : this.slide('next');
      }),
      (e.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide('prev');
      }),
      (e.prototype.slide = function (i, a) {
        var s = this.$element.find('.item.active'),
          o = a || this.getItemForDirection(i, s),
          n = this.interval,
          r = 'next' == i ? 'left' : 'right',
          d = this;
        if (o.hasClass('active')) return (this.sliding = !1);
        var l = o[0],
          c = t.Event('slide.bs.carousel', {
            relatedTarget: l,
            direction: r,
          });
        if ((this.$element.trigger(c), !c.isDefaultPrevented())) {
          if (((this.sliding = !0), n && this.pause(), this.$indicators.length)) {
            this.$indicators.find('.active').removeClass('active');
            var p = t(this.$indicators.children()[this.getItemIndex(o)]);
            p && p.addClass('active');
          }
          var u = t.Event('slid.bs.carousel', {
            relatedTarget: l,
            direction: r,
          });
          return (
            t.support.transition && this.$element.hasClass('slide')
              ? (o.addClass(i),
                o[0].offsetWidth,
                s.addClass(r),
                o.addClass(r),
                s
                  .one('bsTransitionEnd', function () {
                    o.removeClass([i, r].join(' ')).addClass('active'),
                      s.removeClass(['active', r].join(' ')),
                      (d.sliding = !1),
                      setTimeout(function () {
                        d.$element.trigger(u);
                      }, 0);
                  })
                  .emulateTransitionEnd(e.TRANSITION_DURATION))
              : (s.removeClass('active'), o.addClass('active'), (this.sliding = !1), this.$element.trigger(u)),
            n && this.cycle(),
            this
          );
        }
      });
    var i = t.fn.carousel;
    (t.fn.carousel = Plugin),
      (t.fn.carousel.Constructor = e),
      (t.fn.carousel.noConflict = function () {
        return (t.fn.carousel = i), this;
      });
    var a = function (i) {
      var e,
        a = t(this),
        s = t(a.attr('data-target') || ((e = a.attr('href')) && e.replace(/.*(?=#[^\s]+$)/, '')));
      if (s.hasClass('carousel')) {
        var o = t.extend({}, s.data(), a.data()),
          n = a.attr('data-slide-to');
        n && (o.interval = !1), Plugin.call(s, o), n && s.data('bs.carousel').to(n), i.preventDefault();
      }
    };
    t(document)
      .on('click.bs.carousel.data-api', '[data-slide]', a)
      .on('click.bs.carousel.data-api', '[data-slide-to]', a),
      t(window).on('load', function () {
        t('[data-ride="carousel"]').each(function () {
          var e = t(this);
          Plugin.call(e, e.data());
        });
      });
  })(jQuery),
  +(function (t) {
    'use strict';

    function getTargetFromTrigger(e) {
      var i,
        a = e.attr('data-target') || ((i = e.attr('href')) && i.replace(/.*(?=#[^\s]+$)/, ''));
      return t(a);
    }

    function Plugin(i) {
      return this.each(function () {
        var a = t(this),
          s = a.data('bs.collapse'),
          o = t.extend({}, e.DEFAULTS, a.data(), 'object' == _typeof(i) && i);
        !s && o.toggle && /show|hide/.test(i) && (o.toggle = !1),
          s || a.data('bs.collapse', (s = new e(this, o))),
          'string' == typeof i && s[i]();
      });
    }
    var e = function Collapse(e, i) {
      (this.$element = t(e)),
        (this.options = t.extend({}, Collapse.DEFAULTS, i)),
        (this.$trigger = t(
          '[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (e.VERSION = '3.3.6'),
      (e.TRANSITION_DURATION = 350),
      (e.DEFAULTS = {
        toggle: !0,
      }),
      (e.prototype.dimension = function () {
        var e = this.$element.hasClass('width');
        return e ? 'width' : 'height';
      }),
      (e.prototype.show = function () {
        if (!(this.transitioning || this.$element.hasClass('in'))) {
          var i,
            a = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');
          if (!(a && a.length && ((i = a.data('bs.collapse')), i && i.transitioning))) {
            var s = t.Event('show.bs.collapse');
            if ((this.$element.trigger(s), !s.isDefaultPrevented())) {
              a && a.length && (Plugin.call(a, 'hide'), i || a.data('bs.collapse', null));
              var o = this.dimension();
              this.$element.removeClass('collapse').addClass('collapsing')[o](0).attr('aria-expanded', !0),
                this.$trigger.removeClass('collapsed').attr('aria-expanded', !0),
                (this.transitioning = 1);
              var n = function () {
                this.$element.removeClass('collapsing').addClass('collapse in')[o](''),
                  (this.transitioning = 0),
                  this.$element.trigger('shown.bs.collapse');
              };
              if (!t.support.transition) return n.call(this);
              var r = t.camelCase(['scroll', o].join('-'));
              this.$element
                .one('bsTransitionEnd', t.proxy(n, this))
                .emulateTransitionEnd(e.TRANSITION_DURATION)
                [o](this.$element[0][r]);
            }
          }
        }
      }),
      (e.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass('in')) {
          var i = t.Event('hide.bs.collapse');
          if ((this.$element.trigger(i), !i.isDefaultPrevented())) {
            var a = this.dimension();
            this.$element[a](this.$element[a]())[0].offsetHeight,
              this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', !1),
              this.$trigger.addClass('collapsed').attr('aria-expanded', !1),
              (this.transitioning = 1);
            var s = function () {
              (this.transitioning = 0),
                this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');
            };
            return t.support.transition
              ? void this.$element[a](0)
                  .one('bsTransitionEnd', t.proxy(s, this))
                  .emulateTransitionEnd(e.TRANSITION_DURATION)
              : s.call(this);
          }
        }
      }),
      (e.prototype.toggle = function () {
        this[this.$element.hasClass('in') ? 'hide' : 'show']();
      }),
      (e.prototype.getParent = function () {
        return t(this.options.parent)
          .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
          .each(
            t.proxy(function (e, i) {
              var a = t(i);
              this.addAriaAndCollapsedClass(getTargetFromTrigger(a), a);
            }, this)
          )
          .end();
      }),
      (e.prototype.addAriaAndCollapsedClass = function (e, t) {
        var i = e.hasClass('in');
        e.attr('aria-expanded', i), t.toggleClass('collapsed', !i).attr('aria-expanded', i);
      });
    var i = t.fn.collapse;
    (t.fn.collapse = Plugin),
      (t.fn.collapse.Constructor = e),
      (t.fn.collapse.noConflict = function () {
        return (t.fn.collapse = i), this;
      }),
      t(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (i) {
        var e = t(this);
        e.attr('data-target') || i.preventDefault();
        var a = getTargetFromTrigger(e),
          s = a.data('bs.collapse'),
          o = s ? 'toggle' : e.data();
        Plugin.call(a, o);
      });
  })(jQuery),
  +(function (t) {
    'use strict';

    function getParent(e) {
      var i = e.attr('data-target');
      i || ((i = e.attr('href')), (i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, '')));
      var a = i && t(i);
      return a && a.length ? a : e.parent();
    }

    function clearMenus(i) {
      (i && 3 === i.which) ||
        (t('.dropdown-backdrop').remove(),
        t('[data-toggle="dropdown"]').each(function () {
          var e = t(this),
            a = getParent(e),
            s = {
              relatedTarget: this,
            };
          a.hasClass('open') &&
            ((i && 'click' == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(a[0], i.target)) ||
              (a.trigger((i = t.Event('hide.bs.dropdown', s))),
              i.isDefaultPrevented() ||
                (e.attr('aria-expanded', 'false'), a.removeClass('open').trigger(t.Event('hidden.bs.dropdown', s)))));
        }));
    }
    var i = '[data-toggle="dropdown"]',
      a = function (e) {
        t(e).on('click.bs.dropdown', this.toggle);
      };
    (a.VERSION = '3.3.6'),
      (a.prototype.toggle = function (i) {
        var a = t(this);
        if (!a.is('.disabled, :disabled')) {
          var s = getParent(a),
            o = s.hasClass('open');
          if ((clearMenus(), !o)) {
            'ontouchstart' in document.documentElement &&
              !s.closest('.navbar-nav').length &&
              t(document.createElement('div'))
                .addClass('dropdown-backdrop')
                .insertAfter(t(this))
                .on('click', clearMenus);
            var n = {
              relatedTarget: this,
            };
            if ((s.trigger((i = t.Event('show.bs.dropdown', n))), i.isDefaultPrevented())) return;
            a.trigger('focus').attr('aria-expanded', 'true'),
              s.toggleClass('open').trigger(t.Event('shown.bs.dropdown', n));
          }
          return !1;
        }
      }),
      (a.prototype.keydown = function (a) {
        if (/(38|40|27|32)/.test(a.which) && !/input|textarea/i.test(a.target.tagName)) {
          var e = t(this);
          if ((a.preventDefault(), a.stopPropagation(), !e.is('.disabled, :disabled'))) {
            var s = getParent(e),
              o = s.hasClass('open');
            if ((!o && 27 != a.which) || (o && 27 == a.which))
              return 27 == a.which && s.find(i).trigger('focus'), e.trigger('click');
            var n = s.find('.dropdown-menu li:not(.disabled):visible a');
            if (n.length) {
              var r = n.index(a.target);
              38 == a.which && 0 < r && r--,
                40 == a.which && r < n.length - 1 && r++,
                ~r || (r = 0),
                n.eq(r).trigger('focus');
            }
          }
        }
      });
    var s = t.fn.dropdown;
    (t.fn.dropdown = function (e) {
      return this.each(function () {
        var i = t(this),
          s = i.data('bs.dropdown');
        s || i.data('bs.dropdown', (s = new a(this))), 'string' == typeof e && s[e].call(i);
      });
    }),
      (t.fn.dropdown.Constructor = a),
      (t.fn.dropdown.noConflict = function () {
        return (t.fn.dropdown = s), this;
      }),
      t(document)
        .on('click.bs.dropdown.data-api', clearMenus)
        .on('click.bs.dropdown.data-api', '.dropdown form', function (t) {
          t.stopPropagation();
        })
        .on('click.bs.dropdown.data-api', i, a.prototype.toggle)
        .on('keydown.bs.dropdown.data-api', i, a.prototype.keydown)
        .on('keydown.bs.dropdown.data-api', '.dropdown-menu', a.prototype.keydown);
  })(jQuery),
  +(function (t) {
    'use strict';

    function Plugin(e, a) {
      return this.each(function () {
        var s = t(this),
          o = s.data('bs.modal'),
          n = t.extend({}, i.DEFAULTS, s.data(), 'object' == _typeof(e) && e);
        o || s.data('bs.modal', (o = new i(this, n))), 'string' == typeof e ? o[e](a) : n.show && o.show(a);
      });
    }
    var i = function (e, i) {
      (this.options = i),
        (this.$body = t(document.body)),
        (this.$element = t(e)),
        (this.$dialog = this.$element.find('.modal-dialog')),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find('.modal-content').load(
            this.options.remote,
            t.proxy(function () {
              this.$element.trigger('loaded.bs.modal');
            }, this)
          );
    };
    (i.VERSION = '3.3.6'),
      (i.TRANSITION_DURATION = 300),
      (i.BACKDROP_TRANSITION_DURATION = 150),
      (i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0,
      }),
      (i.prototype.toggle = function (e) {
        return this.isShown ? this.hide() : this.show(e);
      }),
      (i.prototype.show = function (a) {
        var s = this,
          o = t.Event('show.bs.modal', {
            relatedTarget: a,
          });
        this.$element.trigger(o);
        this.isShown ||
          o.isDefaultPrevented() ||
          ((this.isShown = !0),
          this.checkScrollbar(),
          this.setScrollbar(),
          this.$body.addClass('modal-open'),
          this.escape(),
          this.resize(),
          this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', t.proxy(this.hide, this)),
          this.$dialog.on('mousedown.dismiss.bs.modal', function () {
            s.$element.one('mouseup.dismiss.bs.modal', function (i) {
              t(i.target).is(s.$element) && (s.ignoreBackdropClick = !0);
            });
          }),
          this.backdrop(function () {
            var o = t.support.transition && s.$element.hasClass('fade');
            s.$element.parent().length || s.$element.appendTo(s.$body),
              s.$element.show().scrollTop(0),
              s.adjustDialog(),
              o && s.$element[0].offsetWidth,
              s.$element.addClass('in'),
              s.enforceFocus();
            var n = t.Event('shown.bs.modal', {
              relatedTarget: a,
            });
            o
              ? s.$dialog
                  .one('bsTransitionEnd', function () {
                    s.$element.trigger('focus').trigger(n);
                  })
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : s.$element.trigger('focus').trigger(n);
          }));
      }),
      (i.prototype.hide = function (a) {
        a && a.preventDefault(), (a = t.Event('hide.bs.modal')), this.$element.trigger(a);
        !this.isShown ||
          a.isDefaultPrevented() ||
          ((this.isShown = !1),
          this.escape(),
          this.resize(),
          t(document).off('focusin.bs.modal'),
          this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal'),
          this.$dialog.off('mousedown.dismiss.bs.modal'),
          t.support.transition && this.$element.hasClass('fade')
            ? this.$element
                .one('bsTransitionEnd', t.proxy(this.hideModal, this))
                .emulateTransitionEnd(i.TRANSITION_DURATION)
            : this.hideModal());
      }),
      (i.prototype.enforceFocus = function () {
        t(document)
          .off('focusin.bs.modal')
          .on(
            'focusin.bs.modal',
            t.proxy(function (t) {
              this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger('focus');
            }, this)
          );
      }),
      (i.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              'keydown.dismiss.bs.modal',
              t.proxy(function (t) {
                27 == t.which && this.hide();
              }, this)
            )
          : !this.isShown && this.$element.off('keydown.dismiss.bs.modal');
      }),
      (i.prototype.resize = function () {
        this.isShown
          ? t(window).on('resize.bs.modal', t.proxy(this.handleUpdate, this))
          : t(window).off('resize.bs.modal');
      }),
      (i.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(),
          this.backdrop(function () {
            e.$body.removeClass('modal-open'),
              e.resetAdjustments(),
              e.resetScrollbar(),
              e.$element.trigger('hidden.bs.modal');
          });
      }),
      (i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (i.prototype.backdrop = function (e) {
        var a = this,
          s = this.$element.hasClass('fade') ? 'fade' : '';
        if (this.isShown && this.options.backdrop) {
          var o = t.support.transition && s;
          if (
            ((this.$backdrop = t(document.createElement('div'))
              .addClass('modal-backdrop ' + s)
              .appendTo(this.$body)),
            this.$element.on(
              'click.dismiss.bs.modal',
              t.proxy(function (t) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      t.target !== t.currentTarget ||
                      ('static' == this.options.backdrop ? this.$element[0].focus() : this.hide())
                    );
              }, this)
            ),
            o && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass('in'),
            !e)
          )
            return;
          o ? this.$backdrop.one('bsTransitionEnd', e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in');
          var n = function () {
            a.removeBackdrop(), e && e();
          };
          t.support.transition && this.$element.hasClass('fade')
            ? this.$backdrop.one('bsTransitionEnd', n).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
            : n();
        } else e && e();
      }),
      (i.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (i.prototype.adjustDialog = function () {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : '',
          paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : '',
        });
      }),
      (i.prototype.resetAdjustments = function () {
        this.$element.css({
          paddingLeft: '',
          paddingRight: '',
        });
      }),
      (i.prototype.checkScrollbar = function () {
        var e = window.innerWidth;
        if (!e) {
          var t = document.documentElement.getBoundingClientRect();
          e = t.right - Math.abs(t.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < e), (this.scrollbarWidth = this.measureScrollbar());
      }),
      (i.prototype.setScrollbar = function () {
        var e = parseInt(this.$body.css('padding-right') || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ''),
          this.bodyIsOverflowing && this.$body.css('padding-right', e + this.scrollbarWidth);
      }),
      (i.prototype.resetScrollbar = function () {
        this.$body.css('padding-right', this.originalBodyPad);
      }),
      (i.prototype.measureScrollbar = function () {
        var e = document.createElement('div');
        (e.className = 'modal-scrollbar-measure'), this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t;
      });
    var a = t.fn.modal;
    (t.fn.modal = Plugin),
      (t.fn.modal.Constructor = i),
      (t.fn.modal.noConflict = function () {
        return (t.fn.modal = a), this;
      }),
      t(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (i) {
        var e = t(this),
          a = e.attr('href'),
          s = t(e.attr('data-target') || (a && a.replace(/.*(?=#[^\s]+$)/, ''))),
          o = s.data('bs.modal')
            ? 'toggle'
            : t.extend(
                {
                  remote: !/#/.test(a) && a,
                },
                s.data(),
                e.data()
              );
        e.is('a') && i.preventDefault(),
          s.one('show.bs.modal', function (t) {
            t.isDefaultPrevented() ||
              s.one('hidden.bs.modal', function () {
                e.is(':visible') && e.trigger('focus');
              });
          }),
          Plugin.call(s, o, this);
      });
  })(jQuery),
  +(function (t) {
    'use strict';
    var e = Math.round,
      i = function (e, t) {
        (this.type = null),
          (this.options = null),
          (this.enabled = null),
          (this.timeout = null),
          (this.hoverState = null),
          (this.$element = null),
          (this.inState = null),
          this.init('tooltip', e, t);
      };
    (i.VERSION = '3.3.6'),
      (i.TRANSITION_DURATION = 150),
      (i.DEFAULTS = {
        animation: !0,
        placement: 'top',
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
          selector: 'body',
          padding: 0,
        },
      }),
      (i.prototype.init = function (e, a, s) {
        if (
          ((this.enabled = !0),
          (this.type = e),
          (this.$element = t(a)),
          (this.options = this.getOptions(s)),
          (this.$viewport =
            this.options.viewport &&
            t(
              t.isFunction(this.options.viewport)
                ? this.options.viewport.call(this, this.$element)
                : this.options.viewport.selector || this.options.viewport
            )),
          (this.inState = {
            click: !1,
            hover: !1,
            focus: !1,
          }),
          this.$element[0] instanceof document.constructor && !this.options.selector)
        )
          throw new Error(
            '`selector` option must be specified when initializing ' + this.type + ' on the window.document object!'
          );
        for (var o, n = this.options.trigger.split(' '), r = n.length; r--; )
          if (((o = n[r]), 'click' == o))
            this.$element.on('click.' + this.type, this.options.selector, t.proxy(this.toggle, this));
          else if ('manual' != o) {
            var d = 'hover' == o ? 'mouseenter' : 'focusin',
              l = 'hover' == o ? 'mouseleave' : 'focusout';
            this.$element.on(d + '.' + this.type, this.options.selector, t.proxy(this.enter, this)),
              this.$element.on(l + '.' + this.type, this.options.selector, t.proxy(this.leave, this));
          }
        this.options.selector
          ? (this._options = t.extend({}, this.options, {
              trigger: 'manual',
              selector: '',
            }))
          : this.fixTitle();
      }),
      (i.prototype.getDefaults = function () {
        return i.DEFAULTS;
      }),
      (i.prototype.getOptions = function (e) {
        return (
          (e = t.extend({}, this.getDefaults(), this.$element.data(), e)),
          e.delay &&
            'number' == typeof e.delay &&
            (e.delay = {
              show: e.delay,
              hide: e.delay,
            }),
          e
        );
      }),
      (i.prototype.getDelegateOptions = function () {
        var e = {},
          i = this.getDefaults();
        return (
          this._options &&
            t.each(this._options, function (t, a) {
              i[t] != a && (e[t] = a);
            }),
          e
        );
      }),
      (i.prototype.enter = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data('bs.' + this.type);
        return (i ||
          ((i = new this.constructor(e.currentTarget, this.getDelegateOptions())),
          t(e.currentTarget).data('bs.' + this.type, i)),
        e instanceof t.Event && (i.inState['focusin' == e.type ? 'focus' : 'hover'] = !0),
        i.tip().hasClass('in') || 'in' == i.hoverState)
          ? void (i.hoverState = 'in')
          : (clearTimeout(i.timeout),
            (i.hoverState = 'in'),
            i.options.delay && i.options.delay.show
              ? void (i.timeout = setTimeout(function () {
                  'in' == i.hoverState && i.show();
                }, i.options.delay.show))
              : i.show());
      }),
      (i.prototype.isInStateTrue = function () {
        for (var e in this.inState) if (this.inState[e]) return !0;
        return !1;
      }),
      (i.prototype.leave = function (e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data('bs.' + this.type);
        if (
          (i ||
            ((i = new this.constructor(e.currentTarget, this.getDelegateOptions())),
            t(e.currentTarget).data('bs.' + this.type, i)),
          e instanceof t.Event && (i.inState['focusout' == e.type ? 'focus' : 'hover'] = !1),
          !i.isInStateTrue())
        )
          return (
            clearTimeout(i.timeout),
            (i.hoverState = 'out'),
            i.options.delay && i.options.delay.hide
              ? void (i.timeout = setTimeout(function () {
                  'out' == i.hoverState && i.hide();
                }, i.options.delay.hide))
              : i.hide()
          );
      }),
      (i.prototype.show = function () {
        var a = t.Event('show.bs.' + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(a);
          var e = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
          if (a.isDefaultPrevented() || !e) return;
          var s = this,
            o = this.tip(),
            n = this.getUID(this.type);
          this.setContent(),
            o.attr('id', n),
            this.$element.attr('aria-describedby', n),
            this.options.animation && o.addClass('fade');
          var r =
              'function' == typeof this.options.placement
                ? this.options.placement.call(this, o[0], this.$element[0])
                : this.options.placement,
            d = /\s?auto?\s?/i,
            l = d.test(r);
          l && (r = r.replace(d, '') || 'top'),
            o
              .detach()
              .css({
                top: 0,
                left: 0,
                display: 'block',
              })
              .addClass(r)
              .data('bs.' + this.type, this),
            this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element),
            this.$element.trigger('inserted.bs.' + this.type);
          var c = this.getPosition(),
            p = o[0].offsetWidth,
            u = o[0].offsetHeight;
          if (l) {
            var g = r,
              m = this.getPosition(this.$viewport);
            (r =
              'bottom' == r && c.bottom + u > m.bottom
                ? 'top'
                : 'top' == r && c.top - u < m.top
                ? 'bottom'
                : 'right' == r && c.right + p > m.width
                ? 'left'
                : 'left' == r && c.left - p < m.left
                ? 'right'
                : r),
              o.removeClass(g).addClass(r);
          }
          var h = this.getCalculatedOffset(r, c, p, u);
          this.applyPlacement(h, r);
          var f = function () {
            var e = s.hoverState;
            s.$element.trigger('shown.bs.' + s.type), (s.hoverState = null), 'out' == e && s.leave(s);
          };
          t.support.transition && this.$tip.hasClass('fade')
            ? o.one('bsTransitionEnd', f).emulateTransitionEnd(i.TRANSITION_DURATION)
            : f();
        }
      }),
      (i.prototype.applyPlacement = function (i, a) {
        var s = this.tip(),
          o = s[0].offsetWidth,
          n = s[0].offsetHeight,
          r = parseInt(s.css('margin-top'), 10),
          d = parseInt(s.css('margin-left'), 10);
        isNaN(r) && (r = 0),
          isNaN(d) && (d = 0),
          (i.top += r),
          (i.left += d),
          t.offset.setOffset(
            s[0],
            t.extend(
              {
                using: function (t) {
                  s.css({
                    top: e(t.top),
                    left: e(t.left),
                  });
                },
              },
              i
            ),
            0
          ),
          s.addClass('in');
        var l = s[0].offsetWidth,
          c = s[0].offsetHeight;
        'top' == a && c != n && (i.top = i.top + n - c);
        var p = this.getViewportAdjustedDelta(a, i, l, c);
        p.left ? (i.left += p.left) : (i.top += p.top);
        var u = /top|bottom/.test(a),
          g = u ? 2 * p.left - o + l : 2 * p.top - n + c,
          m = u ? 'offsetWidth' : 'offsetHeight';
        s.offset(i), this.replaceArrow(g, s[0][m], u);
      }),
      (i.prototype.replaceArrow = function (e, t, i) {
        this.arrow()
          .css(i ? 'left' : 'top', 50 * (1 - e / t) + '%')
          .css(i ? 'top' : 'left', '');
      }),
      (i.prototype.setContent = function () {
        var e = this.tip(),
          t = this.getTitle();
        e.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](t),
          e.removeClass('fade in top bottom left right');
      }),
      (i.prototype.hide = function (a) {
        function complete() {
          'in' != s.hoverState && o.detach(),
            s.$element.removeAttr('aria-describedby').trigger('hidden.bs.' + s.type),
            a && a();
        }
        var s = this,
          o = t(this.$tip),
          n = t.Event('hide.bs.' + this.type);
        if ((this.$element.trigger(n), !n.isDefaultPrevented()))
          return (
            o.removeClass('in'),
            t.support.transition && o.hasClass('fade')
              ? o.one('bsTransitionEnd', complete).emulateTransitionEnd(i.TRANSITION_DURATION)
              : complete(),
            (this.hoverState = null),
            this
          );
      }),
      (i.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr('title') || 'string' != typeof e.attr('data-original-title')) &&
          e.attr('data-original-title', e.attr('title') || '').attr('title', '');
      }),
      (i.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (i.prototype.getPosition = function (e) {
        e = e || this.$element;
        var i = e[0],
          a = 'BODY' == i.tagName,
          s = i.getBoundingClientRect();
        null == s.width &&
          (s = t.extend({}, s, {
            width: s.right - s.left,
            height: s.bottom - s.top,
          }));
        var o = a
            ? {
                top: 0,
                left: 0,
              }
            : e.offset(),
          n = {
            scroll: a ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
          },
          r = a
            ? {
                width: t(window).width(),
                height: t(window).height(),
              }
            : null;
        return t.extend({}, s, n, r, o);
      }),
      (i.prototype.getCalculatedOffset = function (e, t, i, a) {
        return 'bottom' == e
          ? {
              top: t.top + t.height,
              left: t.left + t.width / 2 - i / 2,
            }
          : 'top' == e
          ? {
              top: t.top - a,
              left: t.left + t.width / 2 - i / 2,
            }
          : 'left' == e
          ? {
              top: t.top + t.height / 2 - a / 2,
              left: t.left - i,
            }
          : {
              top: t.top + t.height / 2 - a / 2,
              left: t.left + t.width,
            };
      }),
      (i.prototype.getViewportAdjustedDelta = function (e, t, i, a) {
        var s = {
          top: 0,
          left: 0,
        };
        if (!this.$viewport) return s;
        var o = (this.options.viewport && this.options.viewport.padding) || 0,
          n = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
          var r = t.top - o - n.scroll,
            d = t.top + o - n.scroll + a;
          r < n.top ? (s.top = n.top - r) : d > n.top + n.height && (s.top = n.top + n.height - d);
        } else {
          var l = t.left - o,
            c = t.left + o + i;
          l < n.left ? (s.left = n.left - l) : c > n.right && (s.left = n.left + n.width - c);
        }
        return s;
      }),
      (i.prototype.getTitle = function () {
        var e,
          t = this.$element,
          i = this.options;
        return (e = t.attr('data-original-title') || ('function' == typeof i.title ? i.title.call(t[0]) : i.title)), e;
      }),
      (i.prototype.getUID = function (e) {
        do e += ~~(1e6 * Math.random());
        while (document.getElementById(e));
        return e;
      }),
      (i.prototype.tip = function () {
        if (!this.$tip && ((this.$tip = t(this.options.template)), 1 != this.$tip.length))
          throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!');
        return this.$tip;
      }),
      (i.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'));
      }),
      (i.prototype.enable = function () {
        this.enabled = !0;
      }),
      (i.prototype.disable = function () {
        this.enabled = !1;
      }),
      (i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (i.prototype.toggle = function (i) {
        var e = this;
        i &&
          ((e = t(i.currentTarget).data('bs.' + this.type)),
          !e &&
            ((e = new this.constructor(i.currentTarget, this.getDelegateOptions())),
            t(i.currentTarget).data('bs.' + this.type, e))),
          i
            ? ((e.inState.click = !e.inState.click), e.isInStateTrue() ? e.enter(e) : e.leave(e))
            : e.tip().hasClass('in')
            ? e.leave(e)
            : e.enter(e);
      }),
      (i.prototype.destroy = function () {
        var e = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            e.$element.off('.' + e.type).removeData('bs.' + e.type),
              e.$tip && e.$tip.detach(),
              (e.$tip = null),
              (e.$arrow = null),
              (e.$viewport = null);
          });
      });
    var a = t.fn.tooltip;
    (t.fn.tooltip = function (e) {
      return this.each(function () {
        var a = t(this),
          s = a.data('bs.tooltip'),
          o = 'object' == _typeof(e) && e;
        (!s && /destroy|hide/.test(e)) ||
          (!s && a.data('bs.tooltip', (s = new i(this, o))), 'string' == typeof e && s[e]());
      });
    }),
      (t.fn.tooltip.Constructor = i),
      (t.fn.tooltip.noConflict = function () {
        return (t.fn.tooltip = a), this;
      });
  })(jQuery),
  +(function (e) {
    'use strict';
    var t = function (e, t) {
      this.init('popover', e, t);
    };
    if (!e.fn.tooltip) throw new Error('Popover requires tooltip.js');
    (t.VERSION = '3.3.6'),
      (t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype)),
      (t.prototype.constructor = t),
      (t.prototype.getDefaults = function () {
        return t.DEFAULTS;
      }),
      (t.prototype.setContent = function () {
        var e = this.tip(),
          t = this.getTitle(),
          i = this.getContent();
        e.find('.popover-title')[this.options.html ? 'html' : 'text'](t),
          e
            .find('.popover-content')
            .children()
            .detach()
            .end()
            [this.options.html ? ('string' == typeof i ? 'html' : 'append') : 'text'](i),
          e.removeClass('fade top bottom left right in'),
          e.find('.popover-title').html() || e.find('.popover-title').hide();
      }),
      (t.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (t.prototype.getContent = function () {
        var e = this.$element,
          t = this.options;
        return e.attr('data-content') || ('function' == typeof t.content ? t.content.call(e[0]) : t.content);
      }),
      (t.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find('.arrow'));
      });
    var i = e.fn.popover;
    (e.fn.popover = function (i) {
      return this.each(function () {
        var a = e(this),
          s = a.data('bs.popover'),
          o = 'object' == _typeof(i) && i;
        (!s && /destroy|hide/.test(i)) ||
          (!s && a.data('bs.popover', (s = new t(this, o))), 'string' == typeof i && s[i]());
      });
    }),
      (e.fn.popover.Constructor = t),
      (e.fn.popover.noConflict = function () {
        return (e.fn.popover = i), this;
      });
  })(jQuery),
  +(function (e) {
    'use strict';

    function ScrollSpy(t, i) {
      (this.$body = e(document.body)),
        (this.$scrollElement = e(t).is(document.body) ? e(window) : e(t)),
        (this.options = e.extend({}, ScrollSpy.DEFAULTS, i)),
        (this.selector = (this.options.target || '') + ' .nav li > a'),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on('scroll.bs.scrollspy', e.proxy(this.process, this)),
        this.refresh(),
        this.process();
    }

    function Plugin(t) {
      return this.each(function () {
        var i = e(this),
          a = i.data('bs.scrollspy'),
          s = 'object' == _typeof(t) && t;
        a || i.data('bs.scrollspy', (a = new ScrollSpy(this, s))), 'string' == typeof t && a[t]();
      });
    }
    (ScrollSpy.VERSION = '3.3.6'),
      (ScrollSpy.DEFAULTS = {
        offset: 10,
      }),
      (ScrollSpy.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        );
      }),
      (ScrollSpy.prototype.refresh = function () {
        var t = this,
          i = 'offset',
          a = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          e.isWindow(this.$scrollElement[0]) || ((i = 'position'), (a = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var t = e(this),
                s = t.data('target') || t.attr('href'),
                o = /^#./.test(s) && e(s);
              return (o && o.length && o.is(':visible') && [[o[i]().top + a, s]]) || null;
            })
            .sort(function (e, t) {
              return e[0] - t[0];
            })
            .each(function () {
              t.offsets.push(this[0]), t.targets.push(this[1]);
            });
      }),
      (ScrollSpy.prototype.process = function () {
        var e,
          t = this.$scrollElement.scrollTop() + this.options.offset,
          a = this.getScrollHeight(),
          s = this.options.offset + a - this.$scrollElement.height(),
          o = this.offsets,
          n = this.targets,
          r = this.activeTarget;
        if ((this.scrollHeight != a && this.refresh(), t >= s)) return r != (e = n[n.length - 1]) && this.activate(e);
        if (r && t < o[0]) return (this.activeTarget = null), this.clear();
        for (e = o.length; e--; )
          r != n[e] && t >= o[e] && (void 0 === o[e + 1] || t < o[e + 1]) && this.activate(n[e]);
      }),
      (ScrollSpy.prototype.activate = function (t) {
        (this.activeTarget = t), this.clear();
        var i = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
          a = e(i).parents('li').addClass('active');
        a.parent('.dropdown-menu').length && (a = a.closest('li.dropdown').addClass('active')),
          a.trigger('activate.bs.scrollspy');
      }),
      (ScrollSpy.prototype.clear = function () {
        e(this.selector).parentsUntil(this.options.target, '.active').removeClass('active');
      });
    var t = e.fn.scrollspy;
    (e.fn.scrollspy = Plugin),
      (e.fn.scrollspy.Constructor = ScrollSpy),
      (e.fn.scrollspy.noConflict = function () {
        return (e.fn.scrollspy = t), this;
      }),
      e(window).on('load.bs.scrollspy.data-api', function () {
        e('[data-spy="scroll"]').each(function () {
          var t = e(this);
          Plugin.call(t, t.data());
        });
      });
  })(jQuery),
  +(function (t) {
    'use strict';

    function Plugin(i) {
      return this.each(function () {
        var a = t(this),
          s = a.data('bs.tab');
        s || a.data('bs.tab', (s = new e(this))), 'string' == typeof i && s[i]();
      });
    }
    var e = function (e) {
      this.element = t(e);
    };
    (e.VERSION = '3.3.6'),
      (e.TRANSITION_DURATION = 150),
      (e.prototype.show = function () {
        var e = this.element,
          i = e.closest('ul:not(.dropdown-menu)'),
          a = e.data('target');
        if (
          (a || ((a = e.attr('href')), (a = a && a.replace(/.*(?=#[^\s]*$)/, ''))), !e.parent('li').hasClass('active'))
        ) {
          var s = i.find('.active:last a'),
            o = t.Event('hide.bs.tab', {
              relatedTarget: e[0],
            }),
            n = t.Event('show.bs.tab', {
              relatedTarget: s[0],
            });
          if ((s.trigger(o), e.trigger(n), !(n.isDefaultPrevented() || o.isDefaultPrevented()))) {
            var r = t(a);
            this.activate(e.closest('li'), i),
              this.activate(r, r.parent(), function () {
                s.trigger({
                  type: 'hidden.bs.tab',
                  relatedTarget: e[0],
                }),
                  e.trigger({
                    type: 'shown.bs.tab',
                    relatedTarget: s[0],
                  });
              });
          }
        }
      }),
      (e.prototype.activate = function (i, a, s) {
        function next() {
          o
            .removeClass('active')
            .find('> .dropdown-menu > .active')
            .removeClass('active')
            .end()
            .find('[data-toggle="tab"]')
            .attr('aria-expanded', !1),
            i.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', !0),
            n ? (i[0].offsetWidth, i.addClass('in')) : i.removeClass('fade'),
            i.parent('.dropdown-menu').length &&
              i.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', !0),
            s && s();
        }
        var o = a.find('> .active'),
          n = s && t.support.transition && ((o.length && o.hasClass('fade')) || !!a.find('> .fade').length);
        o.length && n ? o.one('bsTransitionEnd', next).emulateTransitionEnd(e.TRANSITION_DURATION) : next(),
          o.removeClass('in');
      });
    var i = t.fn.tab;
    (t.fn.tab = Plugin),
      (t.fn.tab.Constructor = e),
      (t.fn.tab.noConflict = function () {
        return (t.fn.tab = i), this;
      });
    var a = function (i) {
      i.preventDefault(), Plugin.call(t(this), 'show');
    };
    t(document)
      .on('click.bs.tab.data-api', '[data-toggle="tab"]', a)
      .on('click.bs.tab.data-api', '[data-toggle="pill"]', a);
  })(jQuery),
  +(function (t) {
    'use strict';
    var i = Math.max;

    function Plugin(e) {
      return this.each(function () {
        var i = t(this),
          s = i.data('bs.affix'),
          o = 'object' == _typeof(e) && e;
        s || i.data('bs.affix', (s = new a(this, o))), 'string' == typeof e && s[e]();
      });
    }
    var a = function Affix(e, i) {
      (this.options = t.extend({}, Affix.DEFAULTS, i)),
        (this.$target = t(this.options.target)
          .on('scroll.bs.affix.data-api', t.proxy(this.checkPosition, this))
          .on('click.bs.affix.data-api', t.proxy(this.checkPositionWithEventLoop, this))),
        (this.$element = t(e)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (a.VERSION = '3.3.6'),
      (a.RESET = 'affix affix-top affix-bottom'),
      (a.DEFAULTS = {
        offset: 0,
        target: window,
      }),
      (a.prototype.getState = function (e, t, i, a) {
        var s = this.$target.scrollTop(),
          o = this.$element.offset(),
          n = this.$target.height();
        if (null != i && 'top' == this.affixed) return !!(s < i) && 'top';
        if ('bottom' == this.affixed)
          return null == i ? !(s + n <= e - a) && 'bottom' : !(s + this.unpin <= o.top) && 'bottom';
        var r = null == this.affixed,
          d = r ? s : o.top,
          l = r ? n : t;
        return null != i && s <= i ? 'top' : !!(null != a && d + l >= e - a) && 'bottom';
      }),
      (a.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(a.RESET).addClass('affix');
        var e = this.$target.scrollTop(),
          t = this.$element.offset();
        return (this.pinnedOffset = t.top - e);
      }),
      (a.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1);
      }),
      (a.prototype.checkPosition = function () {
        if (this.$element.is(':visible')) {
          var s = this.$element.height(),
            o = this.options.offset,
            n = o.top,
            r = o.bottom,
            d = i(t(document).height(), t(document.body).height());
          'object' != _typeof(o) && (r = n = o),
            'function' == typeof n && (n = o.top(this.$element)),
            'function' == typeof r && (r = o.bottom(this.$element));
          var l = this.getState(d, s, n, r);
          if (this.affixed != l) {
            null != this.unpin && this.$element.css('top', '');
            var c = 'affix' + (l ? '-' + l : ''),
              p = t.Event(c + '.bs.affix');
            if ((this.$element.trigger(p), p.isDefaultPrevented())) return;
            (this.affixed = l),
              (this.unpin = 'bottom' == l ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(a.RESET)
                .addClass(c)
                .trigger(c.replace('affix', 'affixed') + '.bs.affix');
          }
          'bottom' == l &&
            this.$element.offset({
              top: d - s - r,
            });
        }
      });
    var s = t.fn.affix;
    (t.fn.affix = Plugin),
      (t.fn.affix.Constructor = a),
      (t.fn.affix.noConflict = function () {
        return (t.fn.affix = s), this;
      }),
      t(window).on('load', function () {
        t('[data-spy="affix"]').each(function () {
          var e = t(this),
            i = e.data();
          (i.offset = i.offset || {}),
            null != i.offsetBottom && (i.offset.bottom = i.offsetBottom),
            null != i.offsetTop && (i.offset.top = i.offsetTop),
            Plugin.call(e, i);
        });
      });
  })(jQuery),
  (function (e) {
    'function' == typeof define && define.amd
      ? define(['jquery'], e)
      : 'object' === ('undefined' == typeof module ? 'undefined' : _typeof(module)) && module.exports
      ? (module.exports = e(require('jquery')))
      : e(jQuery);
  })(function (e) {
    var t = Math.pow,
      i = Math.round;
    e.extend(e.fn, {
      validate: function (t) {
        if (!this.length)
          return void (
            t &&
            t.debug &&
            window.console &&
            console.warn("Nothing selected, can't validate, returning nothing.")
          );
        var i = e.data(this[0], 'validator');
        return i
          ? i
          : (this.attr('novalidate', 'novalidate'),
            (i = new e.validator(t, this[0])),
            e.data(this[0], 'validator', i),
            i.settings.onsubmit &&
              (this.on('click.validate', ':submit', function (t) {
                i.settings.submitHandler && (i.submitButton = t.target),
                  e(this).hasClass('cancel') && (i.cancelSubmit = !0),
                  void 0 !== e(this).attr('formnovalidate') && (i.cancelSubmit = !0);
              }),
              this.on('submit.validate', function (t) {
                function handle() {
                  var a, s;
                  return (
                    !i.settings.submitHandler ||
                    (i.submitButton &&
                      (a = e("<input type='hidden'/>")
                        .attr('name', i.submitButton.name)
                        .val(e(i.submitButton).val())
                        .appendTo(i.currentForm)),
                    (s = i.settings.submitHandler.call(i, i.currentForm, t)),
                    i.submitButton && a.remove(),
                    void 0 !== s && s)
                  );
                }
                return (
                  i.settings.debug && t.preventDefault(),
                  i.cancelSubmit
                    ? ((i.cancelSubmit = !1), handle())
                    : i.form()
                    ? i.pendingRequest
                      ? ((i.formSubmitted = !0), !1)
                      : handle()
                    : (i.focusInvalid(), !1)
                );
              })),
            i);
      },
      valid: function valid() {
        var valid, t, i;
        return (
          e(this[0]).is('form')
            ? (valid = this.validate().form())
            : ((i = []),
              (valid = !0),
              (t = e(this[0].form).validate()),
              this.each(function () {
                (valid = t.element(this) && valid), valid || (i = i.concat(t.errorList));
              }),
              (t.errorList = i)),
          valid
        );
      },
      rules: function (t, i) {
        var a,
          s,
          o,
          n,
          r,
          d,
          l = this[0];
        if (null != l && null != l.form) {
          if (t)
            switch (((a = e.data(l.form, 'validator').settings), (s = a.rules), (o = e.validator.staticRules(l)), t)) {
              case 'add':
                e.extend(o, e.validator.normalizeRule(i)),
                  delete o.messages,
                  (s[l.name] = o),
                  i.messages && (a.messages[l.name] = e.extend(a.messages[l.name], i.messages));
                break;
              case 'remove':
                return i
                  ? ((d = {}),
                    e.each(i.split(/\s/), function (t, i) {
                      (d[i] = o[i]), delete o[i], 'required' === i && e(l).removeAttr('aria-required');
                    }),
                    d)
                  : (delete s[l.name], o);
            }
          return (
            (n = e.validator.normalizeRules(
              e.extend(
                {},
                e.validator.classRules(l),
                e.validator.attributeRules(l),
                e.validator.dataRules(l),
                e.validator.staticRules(l)
              ),
              l
            )),
            n.required &&
              ((r = n.required),
              delete n.required,
              (n = e.extend(
                {
                  required: r,
                },
                n
              )),
              e(l).attr('aria-required', 'true')),
            n.remote &&
              ((r = n.remote),
              delete n.remote,
              (n = e.extend(n, {
                remote: r,
              }))),
            n
          );
        }
      },
    }),
      e.extend(e.expr.pseudos || e.expr[':'], {
        blank: function (t) {
          return !e.trim('' + e(t).val());
        },
        filled: function (t) {
          var i = e(t).val();
          return null !== i && !!e.trim('' + i);
        },
        unchecked: function (t) {
          return !e(t).prop('checked');
        },
      }),
      (e.validator = function (t, i) {
        (this.settings = e.extend(!0, {}, e.validator.defaults, t)), (this.currentForm = i), this.init();
      }),
      (e.validator.format = function (t, i) {
        return 1 === arguments.length
          ? function () {
              var i = e.makeArray(arguments);
              return i.unshift(t), e.validator.format.apply(this, i);
            }
          : void 0 === i
          ? t
          : (2 < arguments.length && i.constructor !== Array && (i = e.makeArray(arguments).slice(1)),
            i.constructor !== Array && (i = [i]),
            e.each(i, function (e, i) {
              t = t.replace(new RegExp('\\{' + e + '\\}', 'g'), function () {
                return i;
              });
            }),
            t);
      }),
      e.extend(e.validator, {
        defaults: {
          messages: {},
          groups: {},
          rules: {},
          errorClass: 'error',
          pendingClass: 'pending',
          validClass: 'valid',
          errorElement: 'label',
          focusCleanup: !1,
          focusInvalid: !0,
          errorContainer: e([]),
          errorLabelContainer: e([]),
          onsubmit: !0,
          ignore: ':hidden',
          ignoreTitle: !1,
          onfocusin: function (e) {
            (this.lastActive = e),
              this.settings.focusCleanup &&
                (this.settings.unhighlight &&
                  this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass),
                this.hideThese(this.errorsFor(e)));
          },
          onfocusout: function (e) {
            this.checkable(e) || (!(e.name in this.submitted) && this.optional(e)) || this.element(e);
          },
          onkeyup: function (t, i) {
            (9 === i.which && '' === this.elementValue(t)) ||
              -1 !== e.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) ||
              ((t.name in this.submitted || t.name in this.invalid) && this.element(t));
          },
          onclick: function (e) {
            e.name in this.submitted
              ? this.element(e)
              : e.parentNode.name in this.submitted && this.element(e.parentNode);
          },
          highlight: function (t, i, a) {
            'radio' === t.type ? this.findByName(t.name).addClass(i).removeClass(a) : e(t).addClass(i).removeClass(a);
          },
          unhighlight: function (t, i, a) {
            'radio' === t.type ? this.findByName(t.name).removeClass(i).addClass(a) : e(t).removeClass(i).addClass(a);
          },
        },
        setDefaults: function (t) {
          e.extend(e.validator.defaults, t);
        },
        messages: {
          required: 'This field is required.',
          remote: 'Please fix this field.',
          email: 'Please enter a valid email address.',
          url: 'Please enter a valid URL.',
          date: 'Please enter a valid date.',
          dateISO: 'Please enter a valid date (ISO).',
          number: 'Please enter a valid number.',
          digits: 'Please enter only digits.',
          equalTo: 'Please enter the same value again.',
          maxlength: e.validator.format('Please enter no more than {0} characters.'),
          minlength: e.validator.format('Please enter at least {0} characters.'),
          rangelength: e.validator.format('Please enter a value between {0} and {1} characters long.'),
          range: e.validator.format('Please enter a value between {0} and {1}.'),
          max: e.validator.format('Please enter a value less than or equal to {0}.'),
          min: e.validator.format('Please enter a value greater than or equal to {0}.'),
          step: e.validator.format('Please enter a multiple of {0}.'),
        },
        autoCreateRanges: !1,
        prototype: {
          init: function () {
            function delegate(t) {
              !this.form && this.hasAttribute('contenteditable') && (this.form = e(this).closest('form')[0]);
              var i = e.data(this.form, 'validator'),
                a = 'on' + t.type.replace(/^validate/, ''),
                s = i.settings;
              s[a] && !e(this).is(s.ignore) && s[a].call(i, this, t);
            }
            (this.labelContainer = e(this.settings.errorLabelContainer)),
              (this.errorContext = (this.labelContainer.length && this.labelContainer) || e(this.currentForm)),
              (this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer)),
              (this.submitted = {}),
              (this.valueCache = {}),
              (this.pendingRequest = 0),
              (this.pending = {}),
              (this.invalid = {}),
              this.reset();
            var t,
              i = (this.groups = {});
            e.each(this.settings.groups, function (t, a) {
              'string' == typeof a && (a = a.split(/\s/)),
                e.each(a, function (e, a) {
                  i[a] = t;
                });
            }),
              (t = this.settings.rules),
              e.each(t, function (i, a) {
                t[i] = e.validator.normalizeRule(a);
              }),
              e(this.currentForm)
                .on(
                  'focusin.validate focusout.validate keyup.validate',
                  ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",
                  delegate
                )
                .on('click.validate', "select, option, [type='radio'], [type='checkbox']", delegate),
              this.settings.invalidHandler &&
                e(this.currentForm).on('invalid-form.validate', this.settings.invalidHandler),
              e(this.currentForm).find('[required], [data-rule-required], .required').attr('aria-required', 'true');
          },
          form: function () {
            return (
              this.checkForm(),
              e.extend(this.submitted, this.errorMap),
              (this.invalid = e.extend({}, this.errorMap)),
              this.valid() || e(this.currentForm).triggerHandler('invalid-form', [this]),
              this.showErrors(),
              this.valid()
            );
          },
          checkForm: function () {
            this.prepareForm();
            for (var e = 0, t = (this.currentElements = this.elements()); t[e]; e++) this.check(t[e]);
            return this.valid();
          },
          element: function (t) {
            var i,
              a,
              s = this.clean(t),
              o = this.validationTargetFor(s),
              n = this,
              r = !0;
            return (
              void 0 === o
                ? delete this.invalid[s.name]
                : (this.prepareElement(o),
                  (this.currentElements = e(o)),
                  (a = this.groups[o.name]),
                  a &&
                    e.each(this.groups, function (e, t) {
                      t === a &&
                        e !== o.name &&
                        ((s = n.validationTargetFor(n.clean(n.findByName(e)))),
                        s && s.name in n.invalid && (n.currentElements.push(s), (r = n.check(s) && r)));
                    }),
                  (i = !1 !== this.check(o)),
                  (r = r && i),
                  (this.invalid[o.name] = !i),
                  !this.numberOfInvalids() && (this.toHide = this.toHide.add(this.containers)),
                  this.showErrors(),
                  e(t).attr('aria-invalid', !i)),
              r
            );
          },
          showErrors: function (t) {
            if (t) {
              var i = this;
              e.extend(this.errorMap, t),
                (this.errorList = e.map(this.errorMap, function (e, t) {
                  return {
                    message: e,
                    element: i.findByName(t)[0],
                  };
                })),
                (this.successList = e.grep(this.successList, function (e) {
                  return !(e.name in t);
                }));
            }
            this.settings.showErrors
              ? this.settings.showErrors.call(this, this.errorMap, this.errorList)
              : this.defaultShowErrors();
          },
          resetForm: function () {
            e.fn.resetForm && e(this.currentForm).resetForm(),
              (this.invalid = {}),
              (this.submitted = {}),
              this.prepareForm(),
              this.hideErrors();
            var t = this.elements().removeData('previousValue').removeAttr('aria-invalid');
            this.resetElements(t);
          },
          resetElements: function (e) {
            var t;
            if (this.settings.unhighlight)
              for (t = 0; e[t]; t++)
                this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ''),
                  this.findByName(e[t].name).removeClass(this.settings.validClass);
            else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
          },
          numberOfInvalids: function () {
            return this.objectLength(this.invalid);
          },
          objectLength: function (e) {
            var t,
              a = 0;
            for (t in e) e[t] && a++;
            return a;
          },
          hideErrors: function () {
            this.hideThese(this.toHide);
          },
          hideThese: function (e) {
            e.not(this.containers).text(''), this.addWrapper(e).hide();
          },
          valid: function () {
            return 0 === this.size();
          },
          size: function () {
            return this.errorList.length;
          },
          focusInvalid: function () {
            if (this.settings.focusInvalid)
              try {
                e(this.findLastActive() || (this.errorList.length && this.errorList[0].element) || [])
                  .filter(':visible')
                  .focus()
                  .trigger('focusin');
              } catch (t) {}
          },
          findLastActive: function () {
            var t = this.lastActive;
            return (
              t &&
              1 ===
                e.grep(this.errorList, function (e) {
                  return e.element.name === t.name;
                }).length &&
              t
            );
          },
          elements: function () {
            var t = this,
              i = {};
            return e(this.currentForm)
              .find('input, select, textarea, [contenteditable]')
              .not(':submit, :reset, :image, :disabled')
              .not(this.settings.ignore)
              .filter(function () {
                var a = this.name || e(this).attr('name');
                return (
                  (!a && t.settings.debug && window.console && console.error('%o has no name assigned', this),
                  this.hasAttribute('contenteditable') && (this.form = e(this).closest('form')[0]),
                  !(a in i) && t.objectLength(e(this).rules())) && ((i[a] = !0), !0)
                );
              });
          },
          clean: function (t) {
            return e(t)[0];
          },
          errors: function () {
            var t = this.settings.errorClass.split(' ').join('.');
            return e(this.settings.errorElement + '.' + t, this.errorContext);
          },
          resetInternals: function () {
            (this.successList = []),
              (this.errorList = []),
              (this.errorMap = {}),
              (this.toShow = e([])),
              (this.toHide = e([]));
          },
          reset: function () {
            this.resetInternals(), (this.currentElements = e([]));
          },
          prepareForm: function () {
            this.reset(), (this.toHide = this.errors().add(this.containers));
          },
          prepareElement: function (e) {
            this.reset(), (this.toHide = this.errorsFor(e));
          },
          elementValue: function (t) {
            var i,
              a,
              s = e(t),
              o = t.type;
            return 'radio' === o || 'checkbox' === o
              ? this.findByName(t.name).filter(':checked').val()
              : 'number' === o && 'undefined' != typeof t.validity
              ? t.validity.badInput
                ? 'NaN'
                : s.val()
              : ((i = t.hasAttribute('contenteditable') ? s.text() : s.val()), 'file' === o)
              ? 'C:\\fakepath\\' === i.substr(0, 12)
                ? i.substr(12)
                : ((a = i.lastIndexOf('/')), 0 <= a)
                ? i.substr(a + 1)
                : ((a = i.lastIndexOf('\\')), 0 <= a ? i.substr(a + 1) : i)
              : 'string' == typeof i
              ? i.replace(/\r/g, '')
              : i;
          },
          check: function (t) {
            t = this.validationTargetFor(this.clean(t));
            var i,
              a,
              s,
              o = e(t).rules(),
              n = e.map(o, function (e, t) {
                return t;
              }).length,
              r = !1,
              d = this.elementValue(t);
            if ('function' == typeof o.normalizer) {
              if (((d = o.normalizer.call(t, d)), 'string' != typeof d))
                throw new TypeError('The normalizer should return a string value.');
              delete o.normalizer;
            }
            for (a in o) {
              s = {
                method: a,
                parameters: o[a],
              };
              try {
                if (
                  ((i = e.validator.methods[a].call(this, d, t, s.parameters)), 'dependency-mismatch' === i && 1 === n)
                ) {
                  r = !0;
                  continue;
                }
                if (((r = !1), 'pending' === i)) return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                if (!i) return this.formatAndAdd(t, s), !1;
              } catch (i) {
                throw (
                  (this.settings.debug &&
                    window.console &&
                    console.log(
                      'Exception occurred when checking element ' + t.id + ", check the '" + s.method + "' method.",
                      i
                    ),
                  i instanceof TypeError &&
                    (i.message +=
                      '.  Exception occurred when checking element ' + t.id + ", check the '" + s.method + "' method."),
                  i)
                );
              }
            }
            if (!r) return this.objectLength(o) && this.successList.push(t), !0;
          },
          customDataMessage: function (t, i) {
            return e(t).data('msg' + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || e(t).data('msg');
          },
          customMessage: function (e, t) {
            var i = this.settings.messages[e];
            return i && (i.constructor === String ? i : i[t]);
          },
          findDefined: function () {
            for (var e = 0; e < arguments.length; e++) if (void 0 !== arguments[e]) return arguments[e];
          },
          defaultMessage: function (t, i) {
            'string' == typeof i &&
              (i = {
                method: i,
              });
            var a = this.findDefined(
                this.customMessage(t.name, i.method),
                this.customDataMessage(t, i.method),
                (!this.settings.ignoreTitle && t.title) || void 0,
                e.validator.messages[i.method],
                '<strong>Warning: No message defined for ' + t.name + '</strong>'
              ),
              s = /\$?\{(\d+)\}/g;
            return (
              'function' == typeof a
                ? (a = a.call(this, i.parameters, t))
                : s.test(a) && (a = e.validator.format(a.replace(s, '{$1}'), i.parameters)),
              a
            );
          },
          formatAndAdd: function (e, t) {
            var i = this.defaultMessage(e, t);
            this.errorList.push({
              message: i,
              element: e,
              method: t.method,
            }),
              (this.errorMap[e.name] = i),
              (this.submitted[e.name] = i);
          },
          addWrapper: function (e) {
            return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e;
          },
          defaultShowErrors: function () {
            var e, t, a;
            for (e = 0; this.errorList[e]; e++)
              (a = this.errorList[e]),
                this.settings.highlight &&
                  this.settings.highlight.call(this, a.element, this.settings.errorClass, this.settings.validClass),
                this.showLabel(a.element, a.message);
            if ((this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success))
              for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
            if (this.settings.unhighlight)
              for (e = 0, t = this.validElements(); t[e]; e++)
                this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
            (this.toHide = this.toHide.not(this.toShow)), this.hideErrors(), this.addWrapper(this.toShow).show();
          },
          validElements: function () {
            return this.currentElements.not(this.invalidElements());
          },
          invalidElements: function () {
            return e(this.errorList).map(function () {
              return this.element;
            });
          },
          showLabel: function (t, i) {
            var a,
              s,
              o,
              n,
              r = this.errorsFor(t),
              d = this.idOrName(t),
              l = e(t).attr('aria-describedby');
            r.length
              ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i))
              : ((r = e('<' + this.settings.errorElement + '>')
                  .attr('id', d + '-error')
                  .addClass(this.settings.errorClass)
                  .html(i || '')),
                (a = r),
                this.settings.wrapper &&
                  (a = r
                    .hide()
                    .show()
                    .wrap('<' + this.settings.wrapper + '/>')
                    .parent()),
                this.labelContainer.length
                  ? this.labelContainer.append(a)
                  : this.settings.errorPlacement
                  ? this.settings.errorPlacement.call(this, a, e(t))
                  : a.insertAfter(t),
                r.is('label')
                  ? r.attr('for', d)
                  : 0 === r.parents("label[for='" + this.escapeCssMeta(d) + "']").length &&
                    ((o = r.attr('id')),
                    l ? !l.match(new RegExp('\\b' + this.escapeCssMeta(o) + '\\b')) && (l += ' ' + o) : (l = o),
                    e(t).attr('aria-describedby', l),
                    (s = this.groups[t.name]),
                    s &&
                      ((n = this),
                      e.each(n.groups, function (t, i) {
                        i === s &&
                          e("[name='" + n.escapeCssMeta(t) + "']", n.currentForm).attr(
                            'aria-describedby',
                            r.attr('id')
                          );
                      })))),
              !i &&
                this.settings.success &&
                (r.text(''),
                'string' == typeof this.settings.success
                  ? r.addClass(this.settings.success)
                  : this.settings.success(r, t)),
              (this.toShow = this.toShow.add(r));
          },
          errorsFor: function (t) {
            var i = this.escapeCssMeta(this.idOrName(t)),
              a = e(t).attr('aria-describedby'),
              s = "label[for='" + i + "'], label[for='" + i + "'] *";
            return a && (s = s + ', #' + this.escapeCssMeta(a).replace(/\s+/g, ', #')), this.errors().filter(s);
          },
          escapeCssMeta: function (e) {
            return e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, '\\$1');
          },
          idOrName: function (e) {
            return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name);
          },
          validationTargetFor: function (t) {
            return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0];
          },
          checkable: function (e) {
            return /radio|checkbox/i.test(e.type);
          },
          findByName: function (t) {
            return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']");
          },
          getLength: function (t, i) {
            switch (i.nodeName.toLowerCase()) {
              case 'select':
                return e('option:selected', i).length;
              case 'input':
                if (this.checkable(i)) return this.findByName(i.name).filter(':checked').length;
            }
            return t.length;
          },
          depend: function (e, t) {
            return !this.dependTypes[_typeof(e)] || this.dependTypes[_typeof(e)](e, t);
          },
          dependTypes: {
            boolean: function (e) {
              return e;
            },
            string: function (t, i) {
              return !!e(t, i.form).length;
            },
            function: function (e, t) {
              return e(t);
            },
          },
          optional: function (t) {
            var i = this.elementValue(t);
            return !e.validator.methods.required.call(this, i, t) && 'dependency-mismatch';
          },
          startRequest: function (t) {
            this.pending[t.name] ||
              (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), (this.pending[t.name] = !0));
          },
          stopRequest: function (t, i) {
            this.pendingRequest--,
              0 > this.pendingRequest && (this.pendingRequest = 0),
              delete this.pending[t.name],
              e(t).removeClass(this.settings.pendingClass),
              i && 0 === this.pendingRequest && this.formSubmitted && this.form()
                ? (e(this.currentForm).submit(), (this.formSubmitted = !1))
                : !i &&
                  0 === this.pendingRequest &&
                  this.formSubmitted &&
                  (e(this.currentForm).triggerHandler('invalid-form', [this]), (this.formSubmitted = !1));
          },
          previousValue: function (t, i) {
            return (
              (i = ('string' == typeof i && i) || 'remote'),
              e.data(t, 'previousValue') ||
                e.data(t, 'previousValue', {
                  old: null,
                  valid: !0,
                  message: this.defaultMessage(t, {
                    method: i,
                  }),
                })
            );
          },
          destroy: function () {
            this.resetForm(),
              e(this.currentForm)
                .off('.validate')
                .removeData('validator')
                .find('.validate-equalTo-blur')
                .off('.validate-equalTo')
                .removeClass('validate-equalTo-blur');
          },
        },
        classRuleSettings: {
          required: {
            required: !0,
          },
          email: {
            email: !0,
          },
          url: {
            url: !0,
          },
          date: {
            date: !0,
          },
          dateISO: {
            dateISO: !0,
          },
          number: {
            number: !0,
          },
          digits: {
            digits: !0,
          },
          creditcard: {
            creditcard: !0,
          },
        },
        addClassRules: function (t, i) {
          t.constructor === String ? (this.classRuleSettings[t] = i) : e.extend(this.classRuleSettings, t);
        },
        classRules: function (t) {
          var i = {},
            a = e(t).attr('class');
          return (
            a &&
              e.each(a.split(' '), function () {
                this in e.validator.classRuleSettings && e.extend(i, e.validator.classRuleSettings[this]);
              }),
            i
          );
        },
        normalizeAttributeRule: function (e, t, i, a) {
          /min|max|step/.test(i) && (null === t || /number|range|text/.test(t)) && ((a = +a), isNaN(a) && (a = void 0)),
            a || 0 === a ? (e[i] = a) : t === i && 'range' !== t && (e[i] = !0);
        },
        attributeRules: function (t) {
          var i,
            a,
            s = {},
            o = e(t),
            n = t.getAttribute('type');
          for (i in e.validator.methods)
            'required' === i ? ((a = t.getAttribute(i)), '' === a && (a = !0), (a = !!a)) : (a = o.attr(i)),
              this.normalizeAttributeRule(s, n, i, a);
          return s.maxlength && /-1|2147483647|524288/.test(s.maxlength) && delete s.maxlength, s;
        },
        dataRules: function (t) {
          var i,
            a,
            s = {},
            o = e(t),
            n = t.getAttribute('type');
          for (i in e.validator.methods)
            (a = o.data('rule' + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase())),
              this.normalizeAttributeRule(s, n, i, a);
          return s;
        },
        staticRules: function (t) {
          var i = {},
            a = e.data(t.form, 'validator');
          return a.settings.rules && (i = e.validator.normalizeRule(a.settings.rules[t.name]) || {}), i;
        },
        normalizeRules: function (t, i) {
          return (
            e.each(t, function (a, s) {
              if (!1 === s) return void delete t[a];
              if (s.param || s.depends) {
                var o = !0;
                switch (_typeof(s.depends)) {
                  case 'string':
                    o = !!e(s.depends, i.form).length;
                    break;
                  case 'function':
                    o = s.depends.call(i, i);
                }
                o
                  ? (t[a] = void 0 === s.param || s.param)
                  : (e.data(i.form, 'validator').resetElements(e(i)), delete t[a]);
              }
            }),
            e.each(t, function (a, s) {
              t[a] = e.isFunction(s) && 'normalizer' !== a ? s(i) : s;
            }),
            e.each(['minlength', 'maxlength'], function () {
              t[this] && (t[this] = +t[this]);
            }),
            e.each(['rangelength', 'range'], function () {
              var i;
              t[this] &&
                (e.isArray(t[this])
                  ? (t[this] = [+t[this][0], +t[this][1]])
                  : 'string' == typeof t[this] &&
                    ((i = t[this].replace(/[\[\]]/g, '').split(/[\s,]+/)), (t[this] = [+i[0], +i[1]])));
            }),
            e.validator.autoCreateRanges &&
              (null != t.min && null != t.max && ((t.range = [t.min, t.max]), delete t.min, delete t.max),
              null != t.minlength &&
                null != t.maxlength &&
                ((t.rangelength = [t.minlength, t.maxlength]), delete t.minlength, delete t.maxlength)),
            t
          );
        },
        normalizeRule: function (t) {
          if ('string' == typeof t) {
            var i = {};
            e.each(t.split(/\s/), function () {
              i[this] = !0;
            }),
              (t = i);
          }
          return t;
        },
        addMethod: function (t, i, a) {
          (e.validator.methods[t] = i),
            (e.validator.messages[t] = void 0 === a ? e.validator.messages[t] : a),
            3 > i.length && e.validator.addClassRules(t, e.validator.normalizeRule(t));
        },
        methods: {
          required: function (t, i, a) {
            if (!this.depend(a, i)) return 'dependency-mismatch';
            if ('select' === i.nodeName.toLowerCase()) {
              var s = e(i).val();
              return s && 0 < s.length;
            }
            return this.checkable(i) ? 0 < this.getLength(t, i) : 0 < t.length;
          },
          email: function (e, t) {
            return (
              this.optional(t) ||
              /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                e
              )
            );
          },
          url: function (e, t) {
            return (
              this.optional(t) ||
              /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
                e
              )
            );
          },
          date: function (e, t) {
            return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString());
          },
          dateISO: function (e, t) {
            return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
          },
          number: function (e, t) {
            return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
          },
          digits: function (e, t) {
            return this.optional(t) || /^\d+$/.test(e);
          },
          minlength: function (t, i, a) {
            var s = e.isArray(t) ? t.length : this.getLength(t, i);
            return this.optional(i) || s >= a;
          },
          maxlength: function (t, i, a) {
            var s = e.isArray(t) ? t.length : this.getLength(t, i);
            return this.optional(i) || s <= a;
          },
          rangelength: function (t, i, a) {
            var s = e.isArray(t) ? t.length : this.getLength(t, i);
            return this.optional(i) || (s >= a[0] && s <= a[1]);
          },
          min: function (e, t, i) {
            return this.optional(t) || e >= i;
          },
          max: function (e, t, i) {
            return this.optional(t) || e <= i;
          },
          range: function (e, t, i) {
            return this.optional(t) || (e >= i[0] && e <= i[1]);
          },
          step: function (a, s, o) {
            var n,
              r = e(s).attr('type'),
              d = new RegExp('\\b' + r + '\\b'),
              l = r && !d.test(['text', 'number', 'range'].join()),
              c = function (e) {
                var t = ('' + e).match(/(?:\.(\d+))?$/);
                return t ? (t[1] ? t[1].length : 0) : 0;
              },
              p = function (e) {
                return i(e * t(10, n));
              },
              u = !0;
            if (l) throw new Error('Step attribute on input type ' + r + ' is not supported.');
            return (n = c(o)), (c(a) > n || 0 != p(a) % p(o)) && (u = !1), this.optional(s) || u;
          },
          equalTo: function (t, i, a) {
            var s = e(a);
            return (
              this.settings.onfocusout &&
                s.not('.validate-equalTo-blur').length &&
                s.addClass('validate-equalTo-blur').on('blur.validate-equalTo', function () {
                  e(i).valid();
                }),
              t === s.val()
            );
          },
          remote: function (t, i, a, s) {
            if (this.optional(i)) return 'dependency-mismatch';
            s = ('string' == typeof s && s) || 'remote';
            var o,
              n,
              r,
              d = this.previousValue(i, s);
            return (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
            (d.originalMessage = d.originalMessage || this.settings.messages[i.name][s]),
            (this.settings.messages[i.name][s] = d.message),
            (a =
              ('string' == typeof a && {
                url: a,
              }) ||
              a),
            (r = e.param(
              e.extend(
                {
                  data: t,
                },
                a.data
              )
            )),
            d.old === r)
              ? d.valid
              : ((d.old = r),
                (o = this),
                this.startRequest(i),
                (n = {}),
                (n[i.name] = t),
                e.ajax(
                  e.extend(
                    !0,
                    {
                      mode: 'abort',
                      port: 'validate' + i.name,
                      dataType: 'json',
                      data: n,
                      context: o.currentForm,
                      success: function (e) {
                        var a,
                          n,
                          r,
                          l = !0 === e || 'true' === e;
                        (o.settings.messages[i.name][s] = d.originalMessage),
                          l
                            ? ((r = o.formSubmitted),
                              o.resetInternals(),
                              (o.toHide = o.errorsFor(i)),
                              (o.formSubmitted = r),
                              o.successList.push(i),
                              (o.invalid[i.name] = !1),
                              o.showErrors())
                            : ((a = {}),
                              (n =
                                e ||
                                o.defaultMessage(i, {
                                  method: s,
                                  parameters: t,
                                })),
                              (a[i.name] = d.message = n),
                              (o.invalid[i.name] = !0),
                              o.showErrors(a)),
                          (d.valid = l),
                          o.stopRequest(i, l);
                      },
                    },
                    a
                  )
                ),
                'pending');
          },
        },
      });
    var a,
      s = {};
    return (
      e.ajaxPrefilter
        ? e.ajaxPrefilter(function (e, t, i) {
            var a = e.port;
            'abort' === e.mode && (s[a] && s[a].abort(), (s[a] = i));
          })
        : ((a = e.ajax),
          (e.ajax = function (t) {
            var i = ('mode' in t ? t : e.ajaxSettings).mode,
              o = ('port' in t ? t : e.ajaxSettings).port;
            return 'abort' === i
              ? (s[o] && s[o].abort(), (s[o] = a.apply(this, arguments)), s[o])
              : a.apply(this, arguments);
          })),
      e
    );
  }),
  (function (t) {
    'function' == typeof define && define.amd ? define(['jquery'], t) : t(jQuery);
  })(function (p) {
    var d = Math.floor,
      k = Math.min,
      w = Math.max,
      T = Math.round,
      S = Math.abs;

    function t(e, t) {
      var s,
        d,
        l,
        c = e.nodeName.toLowerCase();
      return 'area' === c
        ? ((s = e.parentNode),
          (d = s.name),
          !!(e.href && d && 'map' === s.nodeName.toLowerCase()) &&
            ((l = p("img[usemap='#" + d + "']")[0]), !!l && i(l)))
        : (/^(input|select|textarea|button|object)$/.test(c) ? !e.disabled : 'a' === c ? e.href || t : t) && i(e);
    }

    function i(e) {
      return (
        p.expr.filters.visible(e) &&
        !p(e)
          .parents()
          .addBack()
          .filter(function () {
            return 'hidden' === p.css(this, 'visibility');
          }).length
      );
    }

    function s(a) {
      for (var s, o; a.length && a[0] !== document; ) {
        if (
          ((s = a.css('position')),
          ('absolute' === s || 'relative' === s || 'fixed' === s) &&
            ((o = parseInt(a.css('zIndex'), 10)), !isNaN(o) && 0 !== o))
        )
          return o;
        a = a.parent();
      }
      return 0;
    }

    function a() {
      (this._curInst = null),
        (this._keyEvent = !1),
        (this._disabledInputs = []),
        (this._datepickerShowing = !1),
        (this._inDialog = !1),
        (this._mainDivId = 'ui-datepicker-div'),
        (this._inlineClass = 'ui-datepicker-inline'),
        (this._appendClass = 'ui-datepicker-append'),
        (this._triggerClass = 'ui-datepicker-trigger'),
        (this._dialogClass = 'ui-datepicker-dialog'),
        (this._disableClass = 'ui-datepicker-disabled'),
        (this._unselectableClass = 'ui-datepicker-unselectable'),
        (this._currentClass = 'ui-datepicker-current-day'),
        (this._dayOverClass = 'ui-datepicker-days-cell-over'),
        (this.regional = []),
        (this.regional[''] = {
          closeText: 'Done',
          prevText: 'Prev',
          nextText: 'Next',
          currentText: 'Today',
          monthNames: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          weekHeader: 'Wk',
          dateFormat: 'mm/dd/yy',
          firstDay: 0,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: '',
        }),
        (this._defaults = {
          showOn: 'focus',
          showAnim: 'fadeIn',
          showOptions: {},
          defaultDate: null,
          appendText: '',
          buttonText: '...',
          buttonImage: '',
          buttonImageOnly: !1,
          hideIfNoPrevNext: !1,
          navigationAsDateFormat: !1,
          gotoCurrent: !1,
          changeMonth: !1,
          changeYear: !1,
          yearRange: 'c-10:c+10',
          showOtherMonths: !1,
          selectOtherMonths: !1,
          showWeek: !1,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: '+10',
          minDate: null,
          maxDate: null,
          duration: 'fast',
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: '',
          altFormat: '',
          constrainInput: !0,
          showButtonPanel: !1,
          autoSize: !1,
          disabled: !1,
        }),
        p.extend(this._defaults, this.regional['']),
        (this.regional.en = p.extend(!0, {}, this.regional[''])),
        (this.regional['en-US'] = p.extend(!0, {}, this.regional.en)),
        (this.dpDiv = n(
          p(
            "<div id='" +
              this._mainDivId +
              "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
          )
        ));
    }

    function n(e) {
      return e
        .delegate(
          'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a',
          'mouseout',
          function () {
            p(this).removeClass('ui-state-hover'),
              -1 !== this.className.indexOf('ui-datepicker-prev') && p(this).removeClass('ui-datepicker-prev-hover'),
              -1 !== this.className.indexOf('ui-datepicker-next') && p(this).removeClass('ui-datepicker-next-hover');
          }
        )
        .delegate('button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a', 'mouseover', r);
    }

    function r() {
      p.datepicker._isDisabledDatepicker(C.inline ? C.dpDiv.parent()[0] : C.input[0]) ||
        (p(this).parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover'),
        p(this).addClass('ui-state-hover'),
        -1 !== this.className.indexOf('ui-datepicker-prev') && p(this).addClass('ui-datepicker-prev-hover'),
        -1 !== this.className.indexOf('ui-datepicker-next') && p(this).addClass('ui-datepicker-next-hover'));
    }

    function o(e, t) {
      for (var i in (p.extend(e, t), t)) null == t[i] && (e[i] = t[i]);
      return e;
    }
    (p.ui = p.ui || {}),
      p.extend(p.ui, {
        version: '1.11.4',
        keyCode: {
          BACKSPACE: 8,
          COMMA: 188,
          DELETE: 46,
          DOWN: 40,
          END: 35,
          ENTER: 13,
          ESCAPE: 27,
          HOME: 36,
          LEFT: 37,
          PAGE_DOWN: 34,
          PAGE_UP: 33,
          PERIOD: 190,
          RIGHT: 39,
          SPACE: 32,
          TAB: 9,
          UP: 38,
        },
      }),
      p.fn.extend({
        scrollParent: function (e) {
          var s = this.css('position'),
            i = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            t = this.parents()
              .filter(function () {
                var e = p(this);
                return (
                  !('absolute' === s && 'static' === e.css('position')) &&
                  i.test(e.css('overflow') + e.css('overflow-y') + e.css('overflow-x'))
                );
              })
              .eq(0);
          return 'fixed' !== s && t.length ? t : p(this[0].ownerDocument || document);
        },
        uniqueId: (function () {
          var t = 0;
          return function () {
            return this.each(function () {
              this.id || (this.id = 'ui-id-' + ++t);
            });
          };
        })(),
        removeUniqueId: function () {
          return this.each(function () {
            /^ui-id-\d+$/.test(this.id) && p(this).removeAttr('id');
          });
        },
      }),
      p.extend(p.expr[':'], {
        data: p.expr.createPseudo
          ? p.expr.createPseudo(function (e) {
              return function (t) {
                return !!p.data(t, e);
              };
            })
          : function (e, t, i) {
              return !!p.data(e, i[3]);
            },
        focusable: function (e) {
          return t(e, !isNaN(p.attr(e, 'tabindex')));
        },
        tabbable: function (e) {
          var i = p.attr(e, 'tabindex'),
            s = isNaN(i);
          return (s || 0 <= i) && t(e, !s);
        },
      }),
      p('<a>').outerWidth(1).jquery ||
        p.each(['Width', 'Height'], function (e, o) {
          function s(e, t, a, s) {
            return (
              p.each(d, function () {
                (t -= parseFloat(p.css(e, 'padding' + this)) || 0),
                  a && (t -= parseFloat(p.css(e, 'border' + this + 'Width')) || 0),
                  s && (t -= parseFloat(p.css(e, 'margin' + this)) || 0);
              }),
              t
            );
          }
          var d = 'Width' === o ? ['Left', 'Right'] : ['Top', 'Bottom'],
            i = o.toLowerCase(),
            n = {
              innerWidth: p.fn.innerWidth,
              innerHeight: p.fn.innerHeight,
              outerWidth: p.fn.outerWidth,
              outerHeight: p.fn.outerHeight,
            };
          (p.fn['inner' + o] = function (e) {
            return void 0 === e
              ? n['inner' + o].call(this)
              : this.each(function () {
                  p(this).css(i, s(this, e) + 'px');
                });
          }),
            (p.fn['outer' + o] = function (e, t) {
              return 'number' == typeof e
                ? this.each(function () {
                    p(this).css(i, s(this, e, !0, t) + 'px');
                  })
                : n['outer' + o].call(this, e);
            });
        }),
      p.fn.addBack ||
        (p.fn.addBack = function (t) {
          return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
        }),
      p('<a>').data('a-b', 'a').removeData('a-b').data('a-b') &&
        (p.fn.removeData = (function (e) {
          return function (t) {
            return arguments.length ? e.call(this, p.camelCase(t)) : e.call(this);
          };
        })(p.fn.removeData)),
      (p.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
      p.fn.extend({
        focus: (function (e) {
          return function (a, i) {
            return 'number' == typeof a
              ? this.each(function () {
                  var e = this;
                  setTimeout(function () {
                    p(e).focus(), i && i.call(e);
                  }, a);
                })
              : e.apply(this, arguments);
          };
        })(p.fn.focus),
        disableSelection: (function () {
          var t = 'onselectstart' in document.createElement('div') ? 'selectstart' : 'mousedown';
          return function () {
            return this.bind(t + '.ui-disableSelection', function (t) {
              t.preventDefault();
            });
          };
        })(),
        enableSelection: function () {
          return this.unbind('.ui-disableSelection');
        },
        zIndex: function (e) {
          if (void 0 !== e) return this.css('zIndex', e);
          if (this.length)
            for (var t, o, n = p(this[0]); n.length && n[0] !== document; ) {
              if (
                ((t = n.css('position')),
                ('absolute' === t || 'relative' === t || 'fixed' === t) &&
                  ((o = parseInt(n.css('zIndex'), 10)), !isNaN(o) && 0 !== o))
              )
                return o;
              n = n.parent();
            }
          return 0;
        },
      }),
      (p.ui.plugin = {
        add: function (e, t, i) {
          var s,
            o = p.ui[e].prototype;
          for (s in i) (o.plugins[s] = o.plugins[s] || []), o.plugins[s].push([t, i[s]]);
        },
        call: function (o, e, t, i) {
          var s,
            r = o.plugins[e];
          if (r && (i || (o.element[0].parentNode && 11 !== o.element[0].parentNode.nodeType)))
            for (s = 0; r.length > s; s++) o.options[r[s][0]] && r[s][1].apply(o.element, t);
        },
      }),
      p.extend(p.ui, {
        datepicker: {
          version: '1.11.4',
        },
      });
    var C;
    p.extend(a.prototype, {
      markerClassName: 'hasDatepicker',
      maxRows: 4,
      _widgetDatepicker: function () {
        return this.dpDiv;
      },
      setDefaults: function (t) {
        return o(this._defaults, t || {}), this;
      },
      _attachDatepicker: function (e, t) {
        var i, o, r;
        (i = e.nodeName.toLowerCase()),
          (o = 'div' === i || 'span' === i),
          e.id || ((this.uuid += 1), (e.id = 'dp' + this.uuid)),
          (r = this._newInst(p(e), o)),
          (r.settings = p.extend({}, t || {})),
          'input' === i ? this._connectDatepicker(e, r) : o && this._inlineDatepicker(e, r);
      },
      _newInst: function (e, t) {
        var i = e[0].id.replace(/([^A-Za-z0-9_\-])/g, '\\\\$1');
        return {
          id: i,
          input: e,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: t,
          dpDiv: t
            ? n(
                p(
                  "<div class='" +
                    this._inlineClass +
                    " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                )
              )
            : this.dpDiv,
        };
      },
      _connectDatepicker: function (e, t) {
        var i = p(e);
        (t.append = p([])),
          (t.trigger = p([])),
          i.hasClass(this.markerClassName) ||
            (this._attachments(i, t),
            i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),
            this._autoSize(t),
            p.data(e, 'datepicker', t),
            t.settings.disabled && this._disableDatepicker(e));
      },
      _attachments: function (e, t) {
        var i,
          d,
          l,
          c = this._get(t, 'appendText'),
          r = this._get(t, 'isRTL');
        t.append && t.append.remove(),
          c &&
            ((t.append = p("<span class='" + this._appendClass + "'>" + c + '</span>')),
            e[r ? 'before' : 'after'](t.append)),
          e.unbind('focus', this._showDatepicker),
          t.trigger && t.trigger.remove(),
          (i = this._get(t, 'showOn')),
          ('focus' === i || 'both' === i) && e.focus(this._showDatepicker),
          ('button' === i || 'both' === i) &&
            ((d = this._get(t, 'buttonText')),
            (l = this._get(t, 'buttonImage')),
            (t.trigger = p(
              this._get(t, 'buttonImageOnly')
                ? p('<img/>').addClass(this._triggerClass).attr({
                    src: l,
                    alt: d,
                    title: d,
                  })
                : p("<button type='button'></button>")
                    .addClass(this._triggerClass)
                    .html(
                      l
                        ? p('<img/>').attr({
                            src: l,
                            alt: d,
                            title: d,
                          })
                        : d
                    )
            )),
            e[r ? 'before' : 'after'](t.trigger),
            t.trigger.click(function () {
              return (
                p.datepicker._datepickerShowing && p.datepicker._lastInput === e[0]
                  ? p.datepicker._hideDatepicker()
                  : p.datepicker._datepickerShowing && p.datepicker._lastInput !== e[0]
                  ? (p.datepicker._hideDatepicker(), p.datepicker._showDatepicker(e[0]))
                  : p.datepicker._showDatepicker(e[0]),
                !1
              );
            }));
      },
      _autoSize: function (o) {
        if (this._get(o, 'autoSize') && !o.inline) {
          var e,
            d,
            l,
            c,
            p = new Date(2009, 11, 20),
            n = this._get(o, 'dateFormat');
          n.match(/[DM]/) &&
            ((e = function (t) {
              for (d = 0, l = 0, c = 0; t.length > c; c++) t[c].length > d && ((d = t[c].length), (l = c));
              return l;
            }),
            p.setMonth(e(this._get(o, n.match(/MM/) ? 'monthNames' : 'monthNamesShort'))),
            p.setDate(e(this._get(o, n.match(/DD/) ? 'dayNames' : 'dayNamesShort')) + 20 - p.getDay())),
            o.input.attr('size', this._formatDate(o, p).length);
        }
      },
      _inlineDatepicker: function (e, t) {
        var i = p(e);
        i.hasClass(this.markerClassName) ||
          (i.addClass(this.markerClassName).append(t.dpDiv),
          p.data(e, 'datepicker', t),
          this._setDate(t, this._getDefaultDate(t), !0),
          this._updateDatepicker(t),
          this._updateAlternate(t),
          t.settings.disabled && this._disableDatepicker(e),
          t.dpDiv.css('display', 'block'));
      },
      _dialogDatepicker: function (e, t, g, s, a) {
        var n,
          m,
          f,
          y,
          v,
          b = this._dialogInst;
        return (
          b ||
            ((this.uuid += 1),
            (n = 'dp' + this.uuid),
            (this._dialogInput = p(
              "<input type='text' id='" + n + "' style='position: absolute; top: -100px; width: 0px;'/>"
            )),
            this._dialogInput.keydown(this._doKeyDown),
            p('body').append(this._dialogInput),
            (b = this._dialogInst = this._newInst(this._dialogInput, !1)),
            (b.settings = {}),
            p.data(this._dialogInput[0], 'datepicker', b)),
          o(b.settings, s || {}),
          (t = t && t.constructor === Date ? this._formatDate(b, t) : t),
          this._dialogInput.val(t),
          (this._pos = a ? (a.length ? a : [a.pageX, a.pageY]) : null),
          this._pos ||
            ((m = document.documentElement.clientWidth),
            (f = document.documentElement.clientHeight),
            (y = document.documentElement.scrollLeft || document.body.scrollLeft),
            (v = document.documentElement.scrollTop || document.body.scrollTop),
            (this._pos = [m / 2 - 100 + y, f / 2 - 150 + v])),
          this._dialogInput.css('left', this._pos[0] + 20 + 'px').css('top', this._pos[1] + 'px'),
          (b.settings.onSelect = g),
          (this._inDialog = !0),
          this.dpDiv.addClass(this._dialogClass),
          this._showDatepicker(this._dialogInput[0]),
          p.blockUI && p.blockUI(this.dpDiv),
          p.data(this._dialogInput[0], 'datepicker', b),
          this
        );
      },
      _destroyDatepicker: function (e) {
        var t,
          o = p(e),
          s = p.data(e, 'datepicker');
        o.hasClass(this.markerClassName) &&
          ((t = e.nodeName.toLowerCase()),
          p.removeData(e, 'datepicker'),
          'input' === t
            ? (s.append.remove(),
              s.trigger.remove(),
              o
                .removeClass(this.markerClassName)
                .unbind('focus', this._showDatepicker)
                .unbind('keydown', this._doKeyDown)
                .unbind('keypress', this._doKeyPress)
                .unbind('keyup', this._doKeyUp))
            : ('div' === t || 'span' === t) && o.removeClass(this.markerClassName).empty(),
          C === s && (C = null));
      },
      _enableDatepicker: function (o) {
        var e,
          t,
          r = p(o),
          a = p.data(o, 'datepicker');
        r.hasClass(this.markerClassName) &&
          ((e = o.nodeName.toLowerCase()),
          'input' === e
            ? ((o.disabled = !1),
              a.trigger
                .filter('button')
                .each(function () {
                  this.disabled = !1;
                })
                .end()
                .filter('img')
                .css({
                  opacity: '1.0',
                  cursor: '',
                }))
            : ('div' === e || 'span' === e) &&
              ((t = r.children('.' + this._inlineClass)),
              t.children().removeClass('ui-state-disabled'),
              t.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled', !1)),
          (this._disabledInputs = p.map(this._disabledInputs, function (t) {
            return t === o ? null : t;
          })));
      },
      _disableDatepicker: function (o) {
        var e,
          t,
          r = p(o),
          a = p.data(o, 'datepicker');
        r.hasClass(this.markerClassName) &&
          ((e = o.nodeName.toLowerCase()),
          'input' === e
            ? ((o.disabled = !0),
              a.trigger
                .filter('button')
                .each(function () {
                  this.disabled = !0;
                })
                .end()
                .filter('img')
                .css({
                  opacity: '0.5',
                  cursor: 'default',
                }))
            : ('div' === e || 'span' === e) &&
              ((t = r.children('.' + this._inlineClass)),
              t.children().addClass('ui-state-disabled'),
              t.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled', !0)),
          (this._disabledInputs = p.map(this._disabledInputs, function (t) {
            return t === o ? null : t;
          })),
          (this._disabledInputs[this._disabledInputs.length] = o));
      },
      _isDisabledDatepicker: function (i) {
        if (!i) return !1;
        for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] === i) return !0;
        return !1;
      },
      _getInst: function (e) {
        try {
          return p.data(e, 'datepicker');
        } catch (e) {
          throw 'Missing instance data for this datepicker';
        }
      },
      _optionDatepicker: function (e, t, i) {
        var s,
          d,
          c,
          u,
          g = this._getInst(e);
        return 2 === arguments.length && 'string' == typeof t
          ? 'defaults' === t
            ? p.extend({}, p.datepicker._defaults)
            : g
            ? 'all' === t
              ? p.extend({}, g.settings)
              : this._get(g, t)
            : null
          : ((s = t || {}),
            'string' == typeof t && ((s = {}), (s[t] = i)),
            g &&
              (this._curInst === g && this._hideDatepicker(),
              (d = this._getDateDatepicker(e, !0)),
              (c = this._getMinMaxDate(g, 'min')),
              (u = this._getMinMaxDate(g, 'max')),
              o(g.settings, s),
              null !== c &&
                void 0 !== s.dateFormat &&
                void 0 === s.minDate &&
                (g.settings.minDate = this._formatDate(g, c)),
              null !== u &&
                void 0 !== s.dateFormat &&
                void 0 === s.maxDate &&
                (g.settings.maxDate = this._formatDate(g, u)),
              'disabled' in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)),
              this._attachments(p(e), g),
              this._autoSize(g),
              this._setDate(g, d),
              this._updateAlternate(g),
              this._updateDatepicker(g)),
            void 0);
      },
      _changeDatepicker: function (a, e, t) {
        this._optionDatepicker(a, e, t);
      },
      _refreshDatepicker: function (i) {
        var e = this._getInst(i);
        e && this._updateDatepicker(e);
      },
      _setDateDatepicker: function (a, e) {
        var t = this._getInst(a);
        t && (this._setDate(t, e), this._updateDatepicker(t), this._updateAlternate(t));
      },
      _getDateDatepicker: function (a, e) {
        var t = this._getInst(a);
        return t && !t.inline && this._setDateFromField(t, e), t ? this._getDate(t) : null;
      },
      _doKeyDown: function (e) {
        var t,
          d,
          l,
          c = p.datepicker._getInst(e.target),
          n = !0,
          u = c.dpDiv.is('.ui-datepicker-rtl');
        if (((c._keyEvent = !0), p.datepicker._datepickerShowing))
          switch (e.keyCode) {
            case 9:
              p.datepicker._hideDatepicker(), (n = !1);
              break;
            case 13:
              return (
                (l = p('td.' + p.datepicker._dayOverClass + ':not(.' + p.datepicker._currentClass + ')', c.dpDiv)),
                l[0] && p.datepicker._selectDay(e.target, c.selectedMonth, c.selectedYear, l[0]),
                (t = p.datepicker._get(c, 'onSelect')),
                t
                  ? ((d = p.datepicker._formatDate(c)), t.apply(c.input ? c.input[0] : null, [d, c]))
                  : p.datepicker._hideDatepicker(),
                !1
              );
            case 27:
              p.datepicker._hideDatepicker();
              break;
            case 33:
              p.datepicker._adjustDate(
                e.target,
                e.ctrlKey ? -p.datepicker._get(c, 'stepBigMonths') : -p.datepicker._get(c, 'stepMonths'),
                'M'
              );
              break;
            case 34:
              p.datepicker._adjustDate(
                e.target,
                e.ctrlKey ? +p.datepicker._get(c, 'stepBigMonths') : +p.datepicker._get(c, 'stepMonths'),
                'M'
              );
              break;
            case 35:
              (e.ctrlKey || e.metaKey) && p.datepicker._clearDate(e.target), (n = e.ctrlKey || e.metaKey);
              break;
            case 36:
              (e.ctrlKey || e.metaKey) && p.datepicker._gotoToday(e.target), (n = e.ctrlKey || e.metaKey);
              break;
            case 37:
              (e.ctrlKey || e.metaKey) && p.datepicker._adjustDate(e.target, u ? 1 : -1, 'D'),
                (n = e.ctrlKey || e.metaKey),
                e.originalEvent.altKey &&
                  p.datepicker._adjustDate(
                    e.target,
                    e.ctrlKey ? -p.datepicker._get(c, 'stepBigMonths') : -p.datepicker._get(c, 'stepMonths'),
                    'M'
                  );
              break;
            case 38:
              (e.ctrlKey || e.metaKey) && p.datepicker._adjustDate(e.target, -7, 'D'), (n = e.ctrlKey || e.metaKey);
              break;
            case 39:
              (e.ctrlKey || e.metaKey) && p.datepicker._adjustDate(e.target, u ? -1 : 1, 'D'),
                (n = e.ctrlKey || e.metaKey),
                e.originalEvent.altKey &&
                  p.datepicker._adjustDate(
                    e.target,
                    e.ctrlKey ? +p.datepicker._get(c, 'stepBigMonths') : +p.datepicker._get(c, 'stepMonths'),
                    'M'
                  );
              break;
            case 40:
              (e.ctrlKey || e.metaKey) && p.datepicker._adjustDate(e.target, 7, 'D'), (n = e.ctrlKey || e.metaKey);
              break;
            default:
              n = !1;
          }
        else 36 === e.keyCode && e.ctrlKey ? p.datepicker._showDatepicker(this) : (n = !1);
        n && (e.preventDefault(), e.stopPropagation());
      },
      _doKeyPress: function (e) {
        var t,
          o,
          n = p.datepicker._getInst(e.target);
        return p.datepicker._get(n, 'constrainInput')
          ? ((t = p.datepicker._possibleChars(p.datepicker._get(n, 'dateFormat'))),
            (o = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode)),
            e.ctrlKey || e.metaKey || ' ' > o || !t || -1 < t.indexOf(o))
          : void 0;
      },
      _doKeyUp: function (e) {
        var t,
          a = p.datepicker._getInst(e.target);
        if (a.input.val() !== a.lastVal)
          try {
            (t = p.datepicker.parseDate(
              p.datepicker._get(a, 'dateFormat'),
              a.input ? a.input.val() : null,
              p.datepicker._getFormatConfig(a)
            )),
              t &&
                (p.datepicker._setDateFromField(a),
                p.datepicker._updateAlternate(a),
                p.datepicker._updateDatepicker(a));
          } catch (e) {}
        return !0;
      },
      _showDatepicker: function (e) {
        if (
          ((e = e.target || e),
          'input' !== e.nodeName.toLowerCase() && (e = p('input', e.parentNode)[0]),
          !p.datepicker._isDisabledDatepicker(e) && p.datepicker._lastInput !== e)
        ) {
          var d, c, g, m, f, y, v;
          (d = p.datepicker._getInst(e)),
            p.datepicker._curInst &&
              p.datepicker._curInst !== d &&
              (p.datepicker._curInst.dpDiv.stop(!0, !0),
              d && p.datepicker._datepickerShowing && p.datepicker._hideDatepicker(p.datepicker._curInst.input[0])),
            (c = p.datepicker._get(d, 'beforeShow')),
            (g = c ? c.apply(e, [e, d]) : {}),
            !1 !== g &&
              (o(d.settings, g),
              (d.lastVal = null),
              (p.datepicker._lastInput = e),
              p.datepicker._setDateFromField(d),
              p.datepicker._inDialog && (e.value = ''),
              p.datepicker._pos ||
                ((p.datepicker._pos = p.datepicker._findPos(e)), (p.datepicker._pos[1] += e.offsetHeight)),
              (m = !1),
              p(e)
                .parents()
                .each(function () {
                  return (m |= 'fixed' === p(this).css('position')), !m;
                }),
              (f = {
                left: p.datepicker._pos[0],
                top: p.datepicker._pos[1],
              }),
              (p.datepicker._pos = null),
              d.dpDiv.empty(),
              d.dpDiv.css({
                position: 'absolute',
                display: 'block',
                top: '-1000px',
              }),
              p.datepicker._updateDatepicker(d),
              (f = p.datepicker._checkOffset(d, f, m)),
              d.dpDiv.css({
                position: p.datepicker._inDialog && p.blockUI ? 'static' : m ? 'fixed' : 'absolute',
                display: 'none',
                left: f.left + 'px',
                top: f.top + 'px',
              }),
              d.inline ||
                ((y = p.datepicker._get(d, 'showAnim')),
                (v = p.datepicker._get(d, 'duration')),
                d.dpDiv.css('z-index', s(p(e)) + 1),
                (p.datepicker._datepickerShowing = !0),
                p.effects && p.effects.effect[y]
                  ? d.dpDiv.show(y, p.datepicker._get(d, 'showOptions'), v)
                  : d.dpDiv[y || 'show'](y ? v : null),
                p.datepicker._shouldFocusInput(d) && d.input.focus(),
                (p.datepicker._curInst = d)));
        }
      },
      _updateDatepicker: function (e) {
        (this.maxRows = 4), (C = e), e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
        var t,
          n = this._getNumberOfMonths(e),
          s = n[1],
          a = e.dpDiv.find('.' + this._dayOverClass + ' a');
        0 < a.length && r.apply(a.get(0)),
          e.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width(''),
          1 < s && e.dpDiv.addClass('ui-datepicker-multi-' + s).css('width', 17 * s + 'em'),
          e.dpDiv[(1 !== n[0] || 1 !== n[1] ? 'add' : 'remove') + 'Class']('ui-datepicker-multi'),
          e.dpDiv[(this._get(e, 'isRTL') ? 'add' : 'remove') + 'Class']('ui-datepicker-rtl'),
          e === p.datepicker._curInst &&
            p.datepicker._datepickerShowing &&
            p.datepicker._shouldFocusInput(e) &&
            e.input.focus(),
          e.yearshtml &&
            ((t = e.yearshtml),
            setTimeout(function () {
              t === e.yearshtml &&
                e.yearshtml &&
                e.dpDiv.find('select.ui-datepicker-year:first').replaceWith(e.yearshtml),
                (t = e.yearshtml = null);
            }, 0));
      },
      _shouldFocusInput: function (t) {
        return t.input && t.input.is(':visible') && !t.input.is(':disabled') && !t.input.is(':focus');
      },
      _checkOffset: function (e, t, i) {
        var s = e.dpDiv.outerWidth(),
          a = e.dpDiv.outerHeight(),
          n = e.input ? e.input.outerWidth() : 0,
          r = e.input ? e.input.outerHeight() : 0,
          o = document.documentElement.clientWidth + (i ? 0 : p(document).scrollLeft()),
          d = document.documentElement.clientHeight + (i ? 0 : p(document).scrollTop());
        return (
          (t.left -= this._get(e, 'isRTL') ? s - n : 0),
          (t.left -= i && t.left === e.input.offset().left ? p(document).scrollLeft() : 0),
          (t.top -= i && t.top === e.input.offset().top + r ? p(document).scrollTop() : 0),
          (t.left -= k(t.left, t.left + s > o && o > s ? S(t.left + s - o) : 0)),
          (t.top -= k(t.top, t.top + a > d && d > a ? S(a + r) : 0)),
          t
        );
      },
      _findPos: function (e) {
        for (
          var o, n = this._getInst(e), s = this._get(n, 'isRTL');
          e && ('hidden' === e.type || 1 !== e.nodeType || p.expr.filters.hidden(e));

        )
          e = e[s ? 'previousSibling' : 'nextSibling'];
        return (o = p(e).offset()), [o.left, o.top];
      },
      _hideDatepicker: function (e) {
        var t,
          o,
          d,
          l,
          c = this._curInst;
        !c ||
          (e && c !== p.data(e, 'datepicker')) ||
          (this._datepickerShowing &&
            ((t = this._get(c, 'showAnim')),
            (o = this._get(c, 'duration')),
            (d = function () {
              p.datepicker._tidyDialog(c);
            }),
            p.effects && (p.effects.effect[t] || p.effects[t])
              ? c.dpDiv.hide(t, p.datepicker._get(c, 'showOptions'), o, d)
              : c.dpDiv['slideDown' === t ? 'slideUp' : 'fadeIn' === t ? 'fadeOut' : 'hide'](t ? o : null, d),
            t || d(),
            (this._datepickerShowing = !1),
            (l = this._get(c, 'onClose')),
            l && l.apply(c.input ? c.input[0] : null, [c.input ? c.input.val() : '', c]),
            (this._lastInput = null),
            this._inDialog &&
              (this._dialogInput.css({
                position: 'absolute',
                left: '0',
                top: '-100px',
              }),
              p.blockUI && (p.unblockUI(), p('body').append(this.dpDiv))),
            (this._inDialog = !1)));
      },
      _tidyDialog: function (t) {
        t.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');
      },
      _checkExternalClick: function (e) {
        if (p.datepicker._curInst) {
          var t = p(e.target),
            i = p.datepicker._getInst(t[0]);
          ((t[0].id === p.datepicker._mainDivId ||
            0 !== t.parents('#' + p.datepicker._mainDivId).length ||
            t.hasClass(p.datepicker.markerClassName) ||
            t.closest('.' + p.datepicker._triggerClass).length ||
            !p.datepicker._datepickerShowing ||
            (p.datepicker._inDialog && p.blockUI)) &&
            (!t.hasClass(p.datepicker.markerClassName) || p.datepicker._curInst === i)) ||
            p.datepicker._hideDatepicker();
        }
      },
      _adjustDate: function (e, t, i) {
        var s = p(e),
          a = this._getInst(s[0]);
        this._isDisabledDatepicker(s[0]) ||
          (this._adjustInstDate(a, t + ('M' === i ? this._get(a, 'showCurrentAtPos') : 0), i),
          this._updateDatepicker(a));
      },
      _gotoToday: function (e) {
        var t,
          o = p(e),
          s = this._getInst(o[0]);
        this._get(s, 'gotoCurrent') && s.currentDay
          ? ((s.selectedDay = s.currentDay),
            (s.drawMonth = s.selectedMonth = s.currentMonth),
            (s.drawYear = s.selectedYear = s.currentYear))
          : ((t = new Date()),
            (s.selectedDay = t.getDate()),
            (s.drawMonth = s.selectedMonth = t.getMonth()),
            (s.drawYear = s.selectedYear = t.getFullYear())),
          this._notifyChange(s),
          this._adjustDate(o);
      },
      _selectMonthYear: function (e, t, i) {
        var s = p(e),
          a = this._getInst(s[0]);
        (a['selected' + ('M' === i ? 'Month' : 'Year')] = a['draw' + ('M' === i ? 'Month' : 'Year')] = parseInt(
          t.options[t.selectedIndex].value,
          10
        )),
          this._notifyChange(a),
          this._adjustDate(s);
      },
      _selectDay: function (e, t, i, s) {
        var a,
          o = p(e);
        p(s).hasClass(this._unselectableClass) ||
          this._isDisabledDatepicker(o[0]) ||
          ((a = this._getInst(o[0])),
          (a.selectedDay = a.currentDay = p('a', s).html()),
          (a.selectedMonth = a.currentMonth = t),
          (a.selectedYear = a.currentYear = i),
          this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)));
      },
      _clearDate: function (e) {
        var t = p(e);
        this._selectDate(t, '');
      },
      _selectDate: function (e, t) {
        var o,
          r = p(e),
          a = this._getInst(r[0]);
        (t = null == t ? this._formatDate(a) : t),
          a.input && a.input.val(t),
          this._updateAlternate(a),
          (o = this._get(a, 'onSelect')),
          o ? o.apply(a.input ? a.input[0] : null, [t, a]) : a.input && a.input.trigger('change'),
          a.inline
            ? this._updateDatepicker(a)
            : (this._hideDatepicker(),
              (this._lastInput = a.input[0]),
              'object' != _typeof(a.input[0]) && a.input.focus(),
              (this._lastInput = null));
      },
      _updateAlternate: function (e) {
        var t,
          o,
          r,
          d = this._get(e, 'altField');
        d &&
          ((t = this._get(e, 'altFormat') || this._get(e, 'dateFormat')),
          (o = this._getDate(e)),
          (r = this.formatDate(t, o, this._getFormatConfig(e))),
          p(d).each(function () {
            p(this).val(r);
          }));
      },
      noWeekends: function (i) {
        var e = i.getDay();
        return [0 < e && 6 > e, ''];
      },
      iso8601Week: function (a) {
        var e,
          s = new Date(a.getTime());
        return (
          s.setDate(s.getDate() + 4 - (s.getDay() || 7)),
          (e = s.getTime()),
          s.setMonth(0),
          s.setDate(1),
          d(T((e - s) / 864e5) / 7) + 1
        );
      },
      parseDate: function (T, S, e) {
        if (null == T || null == S) throw 'Invalid arguments';
        if (((S = 'object' == _typeof(S) ? '' + S : S + ''), '' === S)) return null;
        var t,
          s,
          C,
          D,
          $ = 0,
          L = (e ? e.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          l = 'string' == typeof L ? (new Date().getFullYear() % 100) + parseInt(L, 10) : L,
          u = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort,
          d = (e ? e.dayNames : null) || this._defaults.dayNames,
          c = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
          A = (e ? e.monthNames : null) || this._defaults.monthNames,
          f = -1,
          M = -1,
          I = -1,
          E = -1,
          O = !1,
          N = function (a) {
            var e = T.length > t + 1 && T.charAt(t + 1) === a;
            return e && t++, e;
          },
          _ = function (i) {
            var e = N(i),
              t = '@' === i ? 14 : '!' === i ? 20 : 'y' === i && e ? 4 : 'o' === i ? 3 : 2,
              s = 'y' === i ? t : 1,
              a = RegExp('^\\d{' + s + ',' + t + '}'),
              o = S.substring($).match(a);
            if (!o) throw 'Missing number at position ' + $;
            return ($ += o[0].length), parseInt(o[0], 10);
          },
          x = function (e, t, i) {
            var a = -1,
              s = p
                .map(N(e) ? i : t, function (i, e) {
                  return [[e, i]];
                })
                .sort(function (i, e) {
                  return -(i[1].length - e[1].length);
                });
            if (
              (p.each(s, function (i, e) {
                var t = e[1];
                return S.substr($, t.length).toLowerCase() === t.toLowerCase()
                  ? ((a = e[0]), ($ += t.length), !1)
                  : void 0;
              }),
              -1 !== a)
            )
              return a + 1;
            throw 'Unknown name at position ' + $;
          },
          w = function () {
            if (S.charAt($) !== T.charAt(t)) throw 'Unexpected literal at position ' + $;
            $++;
          };
        for (t = 0; T.length > t; t++)
          if (O) "'" !== T.charAt(t) || N("'") ? w() : (O = !1);
          else
            switch (T.charAt(t)) {
              case 'd':
                I = _('d');
                break;
              case 'D':
                x('D', u, d);
                break;
              case 'o':
                E = _('o');
                break;
              case 'm':
                M = _('m');
                break;
              case 'M':
                M = x('M', c, A);
                break;
              case 'y':
                f = _('y');
                break;
              case '@':
                (D = new Date(_('@'))), (f = D.getFullYear()), (M = D.getMonth() + 1), (I = D.getDate());
                break;
              case '!':
                (D = new Date((_('!') - this._ticksTo1970) / 1e4)),
                  (f = D.getFullYear()),
                  (M = D.getMonth() + 1),
                  (I = D.getDate());
                break;
              case "'":
                N("'") ? w() : (O = !0);
                break;
              default:
                w();
            }
        if (S.length > $ && ((C = S.substr($)), !/^\s+/.test(C))) throw 'Extra/unparsed characters found in date: ' + C;
        if (
          (-1 === f
            ? (f = new Date().getFullYear())
            : 100 > f && (f += new Date().getFullYear() - (new Date().getFullYear() % 100) + (l >= f ? 0 : -100)),
          -1 < E)
        )
          for (M = 1, I = E; ; ) {
            if (((s = this._getDaysInMonth(f, M - 1)), s >= I)) break;
            M++, (I -= s);
          }
        if (
          ((D = this._daylightSavingAdjust(new Date(f, M - 1, I))),
          D.getFullYear() !== f || D.getMonth() + 1 !== M || D.getDate() !== I)
        )
          throw 'Invalid date';
        return D;
      },
      ATOM: 'yy-mm-dd',
      COOKIE: 'D, dd M yy',
      ISO_8601: 'yy-mm-dd',
      RFC_822: 'D, d M y',
      RFC_850: 'DD, dd-M-y',
      RFC_1036: 'D, d M y',
      RFC_1123: 'D, d M yy',
      RFC_2822: 'D, d M yy',
      RSS: 'D, d M y',
      TICKS: '!',
      TIMESTAMP: '@',
      W3C: 'yy-mm-dd',
      _ticksTo1970: 864000000000 * (718685 + d(492.5) - d(19.7) + d(4.925)),
      formatDate: function (p, e, t) {
        if (!e) return '';
        var g,
          i = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort,
          a = (t ? t.dayNames : null) || this._defaults.dayNames,
          n = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort,
          r = (t ? t.monthNames : null) || this._defaults.monthNames,
          o = function (e) {
            var t = p.length > g + 1 && p.charAt(g + 1) === e;
            return t && g++, t;
          },
          m = function (a, e, t) {
            var i = '' + e;
            if (o(a)) for (; t > i.length; ) i = '0' + i;
            return i;
          },
          l = function (a, e, t, i) {
            return o(a) ? i[e] : t[e];
          },
          u = '',
          h = !1;
        if (e)
          for (g = 0; p.length > g; g++)
            if (h) "'" !== p.charAt(g) || o("'") ? (u += p.charAt(g)) : (h = !1);
            else
              switch (p.charAt(g)) {
                case 'd':
                  u += m('d', e.getDate(), 2);
                  break;
                case 'D':
                  u += l('D', e.getDay(), i, a);
                  break;
                case 'o':
                  u += m(
                    'o',
                    T(
                      (new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() -
                        new Date(e.getFullYear(), 0, 0).getTime()) /
                        864e5
                    ),
                    3
                  );
                  break;
                case 'm':
                  u += m('m', e.getMonth() + 1, 2);
                  break;
                case 'M':
                  u += l('M', e.getMonth(), n, r);
                  break;
                case 'y':
                  u += o('y') ? e.getFullYear() : (10 > e.getYear() % 100 ? '0' : '') + (e.getYear() % 100);
                  break;
                case '@':
                  u += e.getTime();
                  break;
                case '!':
                  u += 1e4 * e.getTime() + this._ticksTo1970;
                  break;
                case "'":
                  o("'") ? (u += "'") : (h = !0);
                  break;
                default:
                  u += p.charAt(g);
              }
        return u;
      },
      _possibleChars: function (o) {
        var e,
          n = '',
          r = !1,
          d = function (t) {
            var i = o.length > e + 1 && o.charAt(e + 1) === t;
            return i && e++, i;
          };
        for (e = 0; o.length > e; e++)
          if (r) "'" !== o.charAt(e) || d("'") ? (n += o.charAt(e)) : (r = !1);
          else
            switch (o.charAt(e)) {
              case 'd':
              case 'm':
              case 'y':
              case '@':
                n += '0123456789';
                break;
              case 'D':
              case 'M':
                return null;
              case "'":
                d("'") ? (n += "'") : (r = !0);
                break;
              default:
                n += o.charAt(e);
            }
        return n;
      },
      _get: function (i, e) {
        return void 0 === i.settings[e] ? this._defaults[e] : i.settings[e];
      },
      _setDateFromField: function (o, e) {
        if (o.input.val() !== o.lastVal) {
          var t = this._get(o, 'dateFormat'),
            i = (o.lastVal = o.input ? o.input.val() : null),
            d = this._getDefaultDate(o),
            a = d,
            l = this._getFormatConfig(o);
          try {
            a = this.parseDate(t, i, l) || d;
          } catch (t) {
            i = e ? '' : i;
          }
          (o.selectedDay = a.getDate()),
            (o.drawMonth = o.selectedMonth = a.getMonth()),
            (o.drawYear = o.selectedYear = a.getFullYear()),
            (o.currentDay = i ? a.getDate() : 0),
            (o.currentMonth = i ? a.getMonth() : 0),
            (o.currentYear = i ? a.getFullYear() : 0),
            this._adjustInstDate(o);
        }
      },
      _getDefaultDate: function (t) {
        return this._restrictMinMax(t, this._determineDate(t, this._get(t, 'defaultDate'), new Date()));
      },
      _determineDate: function (e, t, i) {
        var a = function n(t) {
            try {
              return p.datepicker.parseDate(p.datepicker._get(e, 'dateFormat'), t, p.datepicker._getFormatConfig(e));
            } catch (e) {}
            for (
              var i = (t.toLowerCase().match(/^c/) ? p.datepicker._getDate(e) : null) || new Date(),
                n = i.getFullYear(),
                a = i.getMonth(),
                s = i.getDate(),
                d = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                c = d.exec(t);
              c;

            ) {
              switch (c[2] || 'd') {
                case 'd':
                case 'D':
                  s += parseInt(c[1], 10);
                  break;
                case 'w':
                case 'W':
                  s += 7 * parseInt(c[1], 10);
                  break;
                case 'm':
                case 'M':
                  (a += parseInt(c[1], 10)), (s = k(s, p.datepicker._getDaysInMonth(n, a)));
                  break;
                case 'y':
                case 'Y':
                  (n += parseInt(c[1], 10)), (s = k(s, p.datepicker._getDaysInMonth(n, a)));
              }
              c = d.exec(t);
            }
            return new Date(n, a, s);
          },
          s =
            null == t || '' === t
              ? i
              : 'string' == typeof t
              ? a(t)
              : 'number' == typeof t
              ? isNaN(t)
                ? i
                : (function (i) {
                    var e = new Date();
                    return e.setDate(e.getDate() + i), e;
                  })(t)
              : new Date(t.getTime());
        return (
          (s = s && 'Invalid Date' == '' + s ? i : s),
          s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)),
          this._daylightSavingAdjust(s)
        );
      },
      _daylightSavingAdjust: function (t) {
        return t ? (t.setHours(12 < t.getHours() ? t.getHours() + 2 : 0), t) : null;
      },
      _setDate: function (s, e, t) {
        var i = s.selectedMonth,
          a = s.selectedYear,
          o = this._restrictMinMax(s, this._determineDate(s, e, new Date()));
        (s.selectedDay = s.currentDay = o.getDate()),
          (s.drawMonth = s.selectedMonth = s.currentMonth = o.getMonth()),
          (s.drawYear = s.selectedYear = s.currentYear = o.getFullYear()),
          (i === s.selectedMonth && a === s.selectedYear) || t || this._notifyChange(s),
          this._adjustInstDate(s),
          s.input && s.input.val(!e ? '' : this._formatDate(s));
      },
      _getDate: function (i) {
        var e =
          !i.currentYear || (i.input && '' === i.input.val())
            ? null
            : this._daylightSavingAdjust(new Date(i.currentYear, i.currentMonth, i.currentDay));
        return e;
      },
      _attachHandlers: function (e) {
        var t = this._get(e, 'stepMonths'),
          i = '#' + e.id.replace(/\\\\/g, '\\');
        e.dpDiv.find('[data-handler]').map(function () {
          p(this).bind(
            this.getAttribute('data-event'),
            {
              prev: function () {
                p.datepicker._adjustDate(i, -t, 'M');
              },
              next: function () {
                p.datepicker._adjustDate(i, +t, 'M');
              },
              hide: function () {
                p.datepicker._hideDatepicker();
              },
              today: function () {
                p.datepicker._gotoToday(i);
              },
              selectDay: function () {
                return (
                  p.datepicker._selectDay(i, +this.getAttribute('data-month'), +this.getAttribute('data-year'), this),
                  !1
                );
              },
              selectMonth: function () {
                return p.datepicker._selectMonthYear(i, this, 'M'), !1;
              },
              selectYear: function () {
                return p.datepicker._selectMonthYear(i, this, 'Y'), !1;
              },
            }[this.getAttribute('data-handler')]
          );
        });
      },
      _generateHTML: function (ee) {
        var e,
          te,
          ie,
          ae,
          se,
          oe,
          ne,
          re,
          de,
          le,
          ce,
          pe,
          ue,
          ge,
          me,
          he,
          fe,
          ye,
          ve,
          be,
          ke,
          we,
          Te,
          Se,
          Ce,
          De,
          _e,
          $e,
          xe,
          Le,
          Ae,
          Me,
          Ie,
          Ee,
          Oe,
          Ne,
          Fe,
          Pe,
          He,
          Re = new Date(),
          L = this._daylightSavingAdjust(new Date(Re.getFullYear(), Re.getMonth(), Re.getDate())),
          R = this._get(ee, 'isRTL'),
          Y = this._get(ee, 'showButtonPanel'),
          J = this._get(ee, 'hideIfNoPrevNext'),
          B = this._get(ee, 'navigationAsDateFormat'),
          K = this._getNumberOfMonths(ee),
          V = this._get(ee, 'showCurrentAtPos'),
          U = this._get(ee, 'stepMonths'),
          q = 1 !== K[0] || 1 !== K[1],
          Q = this._daylightSavingAdjust(
            ee.currentDay ? new Date(ee.currentYear, ee.currentMonth, ee.currentDay) : new Date(9999, 9, 9)
          ),
          G = this._getMinMaxDate(ee, 'min'),
          $ = this._getMinMaxDate(ee, 'max'),
          X = ee.drawMonth - V,
          je = ee.drawYear;
        if ((0 > X && ((X += 12), je--), $))
          for (
            e = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - K[0] * K[1] + 1, $.getDate())),
              e = G && G > e ? G : e;
            this._daylightSavingAdjust(new Date(je, X, 1)) > e;

          )
            X--, 0 > X && ((X = 11), je--);
        for (
          ee.drawMonth = X,
            ee.drawYear = je,
            te = this._get(ee, 'prevText'),
            te = B
              ? this.formatDate(te, this._daylightSavingAdjust(new Date(je, X - U, 1)), this._getFormatConfig(ee))
              : te,
            ie = this._canAdjustMonth(ee, -1, je, X)
              ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                te +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (R ? 'e' : 'w') +
                "'>" +
                te +
                '</span></a>'
              : J
              ? ''
              : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                te +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (R ? 'e' : 'w') +
                "'>" +
                te +
                '</span></a>',
            ae = this._get(ee, 'nextText'),
            ae = B
              ? this.formatDate(ae, this._daylightSavingAdjust(new Date(je, X + U, 1)), this._getFormatConfig(ee))
              : ae,
            se = this._canAdjustMonth(ee, 1, je, X)
              ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                ae +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (R ? 'w' : 'e') +
                "'>" +
                ae +
                '</span></a>'
              : J
              ? ''
              : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                ae +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (R ? 'w' : 'e') +
                "'>" +
                ae +
                '</span></a>',
            oe = this._get(ee, 'currentText'),
            ne = this._get(ee, 'gotoCurrent') && ee.currentDay ? Q : L,
            oe = B ? this.formatDate(oe, ne, this._getFormatConfig(ee)) : oe,
            re = ee.inline
              ? ''
              : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                this._get(ee, 'closeText') +
                '</button>',
            de = Y
              ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                (R ? re : '') +
                (this._isInRange(ee, ne)
                  ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                    oe +
                    '</button>'
                  : '') +
                (R ? '' : re) +
                '</div>'
              : '',
            le = parseInt(this._get(ee, 'firstDay'), 10),
            le = isNaN(le) ? 0 : le,
            ce = this._get(ee, 'showWeek'),
            pe = this._get(ee, 'dayNames'),
            ue = this._get(ee, 'dayNamesMin'),
            ge = this._get(ee, 'monthNames'),
            me = this._get(ee, 'monthNamesShort'),
            he = this._get(ee, 'beforeShowDay'),
            fe = this._get(ee, 'showOtherMonths'),
            ye = this._get(ee, 'selectOtherMonths'),
            ve = this._getDefaultDate(ee),
            be = '',
            we = 0;
          K[0] > we;
          we++
        ) {
          for (Te = '', this.maxRows = 4, Se = 0; K[1] > Se; Se++) {
            for (
              ((Ce = this._daylightSavingAdjust(new Date(je, X, ee.selectedDay))),
              (De = ' ui-corner-all'),
              (_e = ''),
              q) &&
                (((_e += "<div class='ui-datepicker-group"), 1 < K[1]) &&
                  (0 === Se
                    ? ((_e += ' ui-datepicker-group-first'), (De = ' ui-corner-' + (R ? 'right' : 'left')))
                    : Se === K[1] - 1
                    ? ((_e += ' ui-datepicker-group-last'), (De = ' ui-corner-' + (R ? 'left' : 'right')))
                    : ((_e += ' ui-datepicker-group-middle'), (De = ''))),
                (_e += "'>")),
                _e +=
                  "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                  De +
                  "'>" +
                  (/all|left/.test(De) && 0 === we ? (R ? se : ie) : '') +
                  (/all|right/.test(De) && 0 === we ? (R ? ie : se) : '') +
                  this._generateMonthYearHeader(ee, X, je, G, $, 0 < we || 0 < Se, ge, me) +
                  "</div><table class='ui-datepicker-calendar'><thead><tr>",
                $e = ce ? "<th class='ui-datepicker-week-col'>" + this._get(ee, 'weekHeader') + '</th>' : '',
                ke = 0;
              7 > ke;
              ke++
            )
              (xe = (ke + le) % 7),
                ($e +=
                  "<th scope='col'" +
                  (5 <= (ke + le + 6) % 7 ? " class='ui-datepicker-week-end'" : '') +
                  "><span title='" +
                  pe[xe] +
                  "'>" +
                  ue[xe] +
                  '</span></th>');
            for (
              _e += $e + '</tr></thead><tbody>',
                Le = this._getDaysInMonth(je, X),
                je === ee.selectedYear && X === ee.selectedMonth && (ee.selectedDay = k(ee.selectedDay, Le)),
                Ae = (this._getFirstDayOfMonth(je, X) - le + 7) % 7,
                Me = Math.ceil((Ae + Le) / 7),
                Ie = q ? (this.maxRows > Me ? this.maxRows : Me) : Me,
                this.maxRows = Ie,
                Ee = this._daylightSavingAdjust(new Date(je, X, 1 - Ae)),
                Oe = 0;
              Ie > Oe;
              Oe++
            ) {
              for (
                _e += '<tr>',
                  Ne = ce ? "<td class='ui-datepicker-week-col'>" + this._get(ee, 'calculateWeek')(Ee) + '</td>' : '',
                  ke = 0;
                7 > ke;
                ke++
              )
                (Fe = he ? he.apply(ee.input ? ee.input[0] : null, [Ee]) : [!0, '']),
                  (Pe = Ee.getMonth() !== X),
                  (He = (Pe && !ye) || !Fe[0] || (G && G > Ee) || ($ && Ee > $)),
                  (Ne +=
                    "<td class='" +
                    (5 <= (ke + le + 6) % 7 ? ' ui-datepicker-week-end' : '') +
                    (Pe ? ' ui-datepicker-other-month' : '') +
                    ((Ee.getTime() === Ce.getTime() && X === ee.selectedMonth && ee._keyEvent) ||
                    (ve.getTime() === Ee.getTime() && ve.getTime() === Ce.getTime())
                      ? ' ' + this._dayOverClass
                      : '') +
                    (He ? ' ' + this._unselectableClass + ' ui-state-disabled' : '') +
                    (Pe && !fe
                      ? ''
                      : ' ' +
                        Fe[1] +
                        (Ee.getTime() === Q.getTime() ? ' ' + this._currentClass : '') +
                        (Ee.getTime() === L.getTime() ? ' ui-datepicker-today' : '')) +
                    "'" +
                    ((!Pe || fe) && Fe[2] ? " title='" + Fe[2].replace(/'/g, '&#39;') + "'" : '') +
                    (He
                      ? ''
                      : " data-handler='selectDay' data-event='click' data-month='" +
                        Ee.getMonth() +
                        "' data-year='" +
                        Ee.getFullYear() +
                        "'") +
                    '>' +
                    (Pe && !fe
                      ? '&#xa0;'
                      : He
                      ? "<span class='ui-state-default'>" + Ee.getDate() + '</span>'
                      : "<a class='ui-state-default" +
                        (Ee.getTime() === L.getTime() ? ' ui-state-highlight' : '') +
                        (Ee.getTime() === Q.getTime() ? ' ui-state-active' : '') +
                        (Pe ? ' ui-priority-secondary' : '') +
                        "' href='#'>" +
                        Ee.getDate() +
                        '</a>') +
                    '</td>'),
                  Ee.setDate(Ee.getDate() + 1),
                  (Ee = this._daylightSavingAdjust(Ee));
              _e += Ne + '</tr>';
            }
            X++,
              11 < X && ((X = 0), je++),
              (_e +=
                '</tbody></table>' +
                (q
                  ? '</div>' + (0 < K[0] && Se === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : '')
                  : '')),
              (Te += _e);
          }
          be += Te;
        }
        return (be += de), (ee._keyEvent = !1), be;
      },
      _generateMonthYearHeader: function (T, e, S, t, i, a, s, n) {
        var o,
          r,
          C,
          D,
          $,
          x,
          L,
          A,
          M = this._get(T, 'changeMonth'),
          g = this._get(T, 'changeYear'),
          v = this._get(T, 'showMonthAfterYear'),
          y = "<div class='ui-datepicker-title'>",
          I = '';
        if (a || !M) I += "<span class='ui-datepicker-month'>" + s[e] + '</span>';
        else {
          for (
            o = t && t.getFullYear() === S,
              r = i && i.getFullYear() === S,
              I += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
              C = 0;
            12 > C;
            C++
          )
            (!o || C >= t.getMonth()) &&
              (!r || i.getMonth() >= C) &&
              (I += "<option value='" + C + "'" + (C === e ? " selected='selected'" : '') + '>' + n[C] + '</option>');
          I += '</select>';
        }
        if ((v || (y += I + (!a && M && g ? '' : '&#xa0;')), !T.yearshtml))
          if (((T.yearshtml = ''), a || !g)) y += "<span class='ui-datepicker-year'>" + S + '</span>';
          else {
            for (
              D = this._get(T, 'yearRange').split(':'),
                $ = new Date().getFullYear(),
                x = function (i) {
                  var e = i.match(/c[+\-].*/)
                    ? S + parseInt(i.substring(1), 10)
                    : i.match(/[+\-].*/)
                    ? $ + parseInt(i, 10)
                    : parseInt(i, 10);
                  return isNaN(e) ? $ : e;
                },
                L = x(D[0]),
                A = w(L, x(D[1] || '')),
                L = t ? w(L, t.getFullYear()) : L,
                A = i ? k(A, i.getFullYear()) : A,
                T.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
              A >= L;
              L++
            )
              T.yearshtml +=
                "<option value='" + L + "'" + (L === S ? " selected='selected'" : '') + '>' + L + '</option>';
            (T.yearshtml += '</select>'), (y += T.yearshtml), (T.yearshtml = null);
          }
        return (y += this._get(T, 'yearSuffix')), v && (y += (!a && M && g ? '' : '&#xa0;') + I), (y += '</div>');
      },
      _adjustInstDate: function (o, e, t) {
        var i = o.drawYear + ('Y' === t ? e : 0),
          s = o.drawMonth + ('M' === t ? e : 0),
          a = k(o.selectedDay, this._getDaysInMonth(i, s)) + ('D' === t ? e : 0),
          n = this._restrictMinMax(o, this._daylightSavingAdjust(new Date(i, s, a)));
        (o.selectedDay = n.getDate()),
          (o.drawMonth = o.selectedMonth = n.getMonth()),
          (o.drawYear = o.selectedYear = n.getFullYear()),
          ('M' === t || 'Y' === t) && this._notifyChange(o);
      },
      _restrictMinMax: function (o, e) {
        var t = this._getMinMaxDate(o, 'min'),
          i = this._getMinMaxDate(o, 'max'),
          s = t && t > e ? t : e;
        return i && s > i ? i : s;
      },
      _notifyChange: function (i) {
        var e = this._get(i, 'onChangeMonthYear');
        e && e.apply(i.input ? i.input[0] : null, [i.selectedYear, i.selectedMonth + 1, i]);
      },
      _getNumberOfMonths: function (i) {
        var e = this._get(i, 'numberOfMonths');
        return null == e ? [1, 1] : 'number' == typeof e ? [1, e] : e;
      },
      _getMinMaxDate: function (i, e) {
        return this._determineDate(i, this._get(i, e + 'Date'), null);
      },
      _getDaysInMonth: function (i, e) {
        return 32 - this._daylightSavingAdjust(new Date(i, e, 32)).getDate();
      },
      _getFirstDayOfMonth: function (i, e) {
        return new Date(i, e, 1).getDay();
      },
      _canAdjustMonth: function (o, e, t, i) {
        var s = this._getNumberOfMonths(o),
          a = this._daylightSavingAdjust(new Date(t, i + (0 > e ? e : s[0] * s[1]), 1));
        return 0 > e && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(o, a);
      },
      _isInRange: function (d, e) {
        var t,
          l,
          c = this._getMinMaxDate(d, 'min'),
          a = this._getMinMaxDate(d, 'max'),
          n = null,
          p = null,
          u = this._get(d, 'yearRange');
        return (
          u &&
            ((t = u.split(':')),
            (l = new Date().getFullYear()),
            (n = parseInt(t[0], 10)),
            (p = parseInt(t[1], 10)),
            t[0].match(/[+\-].*/) && (n += l),
            t[1].match(/[+\-].*/) && (p += l)),
          (!c || e.getTime() >= c.getTime()) &&
            (!a || e.getTime() <= a.getTime()) &&
            (!n || e.getFullYear() >= n) &&
            (!p || p >= e.getFullYear())
        );
      },
      _getFormatConfig: function (i) {
        var e = this._get(i, 'shortYearCutoff');
        return (
          (e = 'string' == typeof e ? (new Date().getFullYear() % 100) + parseInt(e, 10) : e),
          {
            shortYearCutoff: e,
            dayNamesShort: this._get(i, 'dayNamesShort'),
            dayNames: this._get(i, 'dayNames'),
            monthNamesShort: this._get(i, 'monthNamesShort'),
            monthNames: this._get(i, 'monthNames'),
          }
        );
      },
      _formatDate: function (o, e, t, i) {
        e || ((o.currentDay = o.selectedDay), (o.currentMonth = o.selectedMonth), (o.currentYear = o.selectedYear));
        var s = e
          ? 'object' == _typeof(e)
            ? e
            : this._daylightSavingAdjust(new Date(i, t, e))
          : this._daylightSavingAdjust(new Date(o.currentYear, o.currentMonth, o.currentDay));
        return this.formatDate(this._get(o, 'dateFormat'), s, this._getFormatConfig(o));
      },
    }),
      (p.fn.datepicker = function (e) {
        if (!this.length) return this;
        p.datepicker.initialized ||
          (p(document).mousedown(p.datepicker._checkExternalClick), (p.datepicker.initialized = !0)),
          0 === p('#' + p.datepicker._mainDivId).length && p('body').append(p.datepicker.dpDiv);
        var t = Array.prototype.slice.call(arguments, 1);
        return 'string' != typeof e || ('isDisabled' !== e && 'getDate' !== e && 'widget' !== e)
          ? 'option' === e && 2 === arguments.length && 'string' == typeof arguments[1]
            ? p.datepicker['_' + e + 'Datepicker'].apply(p.datepicker, [this[0]].concat(t))
            : this.each(function () {
                'string' == typeof e
                  ? p.datepicker['_' + e + 'Datepicker'].apply(p.datepicker, [this].concat(t))
                  : p.datepicker._attachDatepicker(this, e);
              })
          : p.datepicker['_' + e + 'Datepicker'].apply(p.datepicker, [this[0]].concat(t));
      }),
      (p.datepicker = new a()),
      (p.datepicker.initialized = !1),
      (p.datepicker.uuid = new Date().getTime()),
      (p.datepicker.version = '1.11.4'),
      p.datepicker;
  }),
  !(function (e) {
    'use strict';
    'function' == typeof define && define.amd
      ? define(['jquery'], e)
      : 'undefined' == typeof exports
      ? e(jQuery)
      : (module.exports = e(require('jquery')));
  })(function (t) {
    'use strict';
    var s = Math.ceil,
      o = Math.floor,
      n = Math.min,
      r = Math.pow,
      l = Math.round,
      p = Math.abs,
      u = window.Slick || {};
    (u = (function () {
      function c(a, s) {
        var o,
          n = this;
        (n.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: t(a),
          appendDots: t(a),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
          nextArrow:
            '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: '50px',
          cssEase: 'ease',
          customPaging: function (e, i) {
            return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
          },
          dots: !1,
          dotsClass: 'slick-dots',
          draggable: !0,
          easing: 'linear',
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: 'ondemand',
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: 'window',
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: '',
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (n.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          t.extend(n, n.initials),
          (n.activeBreakpoint = null),
          (n.animType = null),
          (n.animProp = null),
          (n.breakpoints = []),
          (n.breakpointSettings = []),
          (n.cssTransitions = !1),
          (n.focussed = !1),
          (n.interrupted = !1),
          (n.hidden = 'hidden'),
          (n.paused = !0),
          (n.positionProp = null),
          (n.respondTo = null),
          (n.rowCount = 1),
          (n.shouldClick = !0),
          (n.$slider = t(a)),
          (n.$slidesCache = null),
          (n.transformType = null),
          (n.transitionType = null),
          (n.visibilityChange = 'visibilitychange'),
          (n.windowWidth = 0),
          (n.windowTimer = null),
          (o = t(a).data('slick') || {}),
          (n.options = t.extend({}, n.defaults, s, o)),
          (n.currentSlide = n.options.initialSlide),
          (n.originalSettings = n.options),
          'undefined' == typeof document.mozHidden
            ? 'undefined' != typeof document.webkitHidden &&
              ((n.hidden = 'webkitHidden'), (n.visibilityChange = 'webkitvisibilitychange'))
            : ((n.hidden = 'mozHidden'), (n.visibilityChange = 'mozvisibilitychange')),
          (n.autoPlay = t.proxy(n.autoPlay, n)),
          (n.autoPlayClear = t.proxy(n.autoPlayClear, n)),
          (n.autoPlayIterator = t.proxy(n.autoPlayIterator, n)),
          (n.changeSlide = t.proxy(n.changeSlide, n)),
          (n.clickHandler = t.proxy(n.clickHandler, n)),
          (n.selectHandler = t.proxy(n.selectHandler, n)),
          (n.setPosition = t.proxy(n.setPosition, n)),
          (n.swipeHandler = t.proxy(n.swipeHandler, n)),
          (n.dragHandler = t.proxy(n.dragHandler, n)),
          (n.keyHandler = t.proxy(n.keyHandler, n)),
          (n.instanceUid = i++),
          (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          n.registerBreakpoints(),
          n.init(!0);
      }
      var i = 0;
      return c;
    })()),
      (u.prototype.activateADA = function () {
        var e = this;
        e.$slideTrack
          .find('.slick-active')
          .attr({
            'aria-hidden': 'false',
          })
          .find('a, input, button, select')
          .attr({
            tabindex: '0',
          });
      }),
      (u.prototype.addSlide = u.prototype.slickAdd = function (i, a, s) {
        var o = this;
        if ('boolean' == typeof a) (s = a), (a = null);
        else if (0 > a || a >= o.slideCount) return !1;
        o.unload(),
          'number' == typeof a
            ? 0 === a && 0 === o.$slides.length
              ? t(i).appendTo(o.$slideTrack)
              : s
              ? t(i).insertBefore(o.$slides.eq(a))
              : t(i).insertAfter(o.$slides.eq(a))
            : !0 === s
            ? t(i).prependTo(o.$slideTrack)
            : t(i).appendTo(o.$slideTrack),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          o.$slides.each(function (e, i) {
            t(i).attr('data-slick-index', e);
          }),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
      (u.prototype.animateHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate(
            {
              height: t,
            },
            e.options.speed
          );
        }
      }),
      (u.prototype.animateSlide = function (i, a) {
        var o = {},
          n = this;
        n.animateHeight(),
          !0 === n.options.rtl && !1 === n.options.vertical && (i = -i),
          !1 === n.transformsEnabled
            ? !1 === n.options.vertical
              ? n.$slideTrack.animate(
                  {
                    left: i,
                  },
                  n.options.speed,
                  n.options.easing,
                  a
                )
              : n.$slideTrack.animate(
                  {
                    top: i,
                  },
                  n.options.speed,
                  n.options.easing,
                  a
                )
            : !1 === n.cssTransitions
            ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft),
              t({
                animStart: n.currentLeft,
              }).animate(
                {
                  animStart: i,
                },
                {
                  duration: n.options.speed,
                  easing: n.options.easing,
                  step: function (e) {
                    (e = s(e)),
                      !1 === n.options.vertical
                        ? ((o[n.animType] = 'translate(' + e + 'px, 0px)'), n.$slideTrack.css(o))
                        : ((o[n.animType] = 'translate(0px,' + e + 'px)'), n.$slideTrack.css(o));
                  },
                  complete: function () {
                    a && a.call();
                  },
                }
              ))
            : (n.applyTransition(),
              (i = s(i)),
              (o[n.animType] =
                !1 === n.options.vertical ? 'translate3d(' + i + 'px, 0px, 0px)' : 'translate3d(0px,' + i + 'px, 0px)'),
              n.$slideTrack.css(o),
              a &&
                setTimeout(function () {
                  n.disableTransition(), a.call();
                }, n.options.speed));
      }),
      (u.prototype.getNavTarget = function () {
        var e = this,
          i = e.options.asNavFor;
        return i && null !== i && (i = t(i).not(e.$slider)), i;
      }),
      (u.prototype.asNavFor = function (e) {
        var i = this,
          a = i.getNavTarget();
        null !== a &&
          'object' == _typeof(a) &&
          a.each(function () {
            var i = t(this).slick('getSlick');
            i.unslicked || i.slideHandler(e, !0);
          });
      }),
      (u.prototype.applyTransition = function (e) {
        var t = this,
          i = {};
        (i[t.transitionType] =
          !1 === t.options.fade
            ? t.transformType + ' ' + t.options.speed + 'ms ' + t.options.cssEase
            : 'opacity ' + t.options.speed + 'ms ' + t.options.cssEase),
          !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i);
      }),
      (u.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(),
          e.slideCount > e.options.slidesToShow &&
            (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
      }),
      (u.prototype.autoPlayClear = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer);
      }),
      (u.prototype.autoPlayIterator = function () {
        var e = this,
          t = e.currentSlide + e.options.slidesToScroll;
        e.paused ||
          e.interrupted ||
          e.focussed ||
          (!1 === e.options.infinite &&
            (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
              ? (e.direction = 0)
              : 0 === e.direction &&
                ((t = e.currentSlide - e.options.slidesToScroll), 0 == e.currentSlide - 1 && (e.direction = 1))),
          e.slideHandler(t));
      }),
      (u.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows &&
          ((e.$prevArrow = t(e.options.prevArrow).addClass('slick-arrow')),
          (e.$nextArrow = t(e.options.nextArrow).addClass('slick-arrow')),
          e.slideCount > e.options.slidesToShow
            ? (e.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex'),
              e.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex'),
              e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
              e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
              !0 !== e.options.infinite && e.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true'))
            : e.$prevArrow.add(e.$nextArrow).addClass('slick-hidden').attr({
                'aria-disabled': 'true',
                tabindex: '-1',
              }));
      }),
      (u.prototype.buildDots = function () {
        var e,
          i,
          a = this;
        if (!0 === a.options.dots && a.slideCount > a.options.slidesToShow) {
          for (
            a.$slider.addClass('slick-dotted'), i = t('<ul />').addClass(a.options.dotsClass), e = 0;
            e <= a.getDotCount();
            e += 1
          )
            i.append(t('<li />').append(a.options.customPaging.call(this, a, e)));
          (a.$dots = i.appendTo(a.options.appendDots)),
            a.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
        }
      }),
      (u.prototype.buildOut = function () {
        var e = this;
        (e.$slides = e.$slider.children(e.options.slide + ':not(.slick-cloned)').addClass('slick-slide')),
          (e.slideCount = e.$slides.length),
          e.$slides.each(function (e, i) {
            t(i)
              .attr('data-slick-index', e)
              .data('originalStyling', t(i).attr('style') || '');
          }),
          e.$slider.addClass('slick-slider'),
          (e.$slideTrack =
            0 === e.slideCount
              ? t('<div class="slick-track"/>').appendTo(e.$slider)
              : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent()),
          e.$slideTrack.css('opacity', 0),
          (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1),
          t('img[data-lazy]', e.$slider).not('[src]').addClass('slick-loading'),
          e.setupInfinite(),
          e.buildArrows(),
          e.buildDots(),
          e.updateDots(),
          e.setSlideClasses('number' == typeof e.currentSlide ? e.currentSlide : 0),
          !0 === e.options.draggable && e.$list.addClass('draggable');
      }),
      (u.prototype.buildRows = function () {
        var t,
          o,
          n,
          r,
          l,
          p,
          u,
          m = this;
        if (((r = document.createDocumentFragment()), (p = m.$slider.children()), 1 < m.options.rows)) {
          for (u = m.options.slidesPerRow * m.options.rows, l = s(p.length / u), t = 0; l > t; t++) {
            var a = document.createElement('div');
            for (o = 0; o < m.options.rows; o++) {
              var i = document.createElement('div');
              for (n = 0; n < m.options.slidesPerRow; n++) {
                var y = t * u + (o * m.options.slidesPerRow + n);
                p.get(y) && i.appendChild(p.get(y));
              }
              a.appendChild(i);
            }
            r.appendChild(a);
          }
          m.$slider.empty().append(r),
            m.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / m.options.slidesPerRow + '%',
                display: 'inline-block',
              });
        }
      }),
      (u.prototype.checkResponsive = function (a, s) {
        var o,
          r,
          l,
          c = this,
          d = !1,
          p = c.$slider.width(),
          i = window.innerWidth || t(window).width();
        if (
          ('window' === c.respondTo
            ? (l = i)
            : 'slider' === c.respondTo
            ? (l = p)
            : 'min' === c.respondTo && (l = n(i, p)),
          c.options.responsive && c.options.responsive.length && null !== c.options.responsive)
        ) {
          for (o in ((r = null), c.breakpoints))
            c.breakpoints.hasOwnProperty(o) &&
              (!1 === c.originalSettings.mobileFirst
                ? l < c.breakpoints[o] && (r = c.breakpoints[o])
                : l > c.breakpoints[o] && (r = c.breakpoints[o]));
          null === r
            ? null !== c.activeBreakpoint &&
              ((c.activeBreakpoint = null),
              (c.options = c.originalSettings),
              !0 === a && (c.currentSlide = c.options.initialSlide),
              c.refresh(a),
              (d = r))
            : null === c.activeBreakpoint
            ? ((c.activeBreakpoint = r),
              'unslick' === c.breakpointSettings[r]
                ? c.unslick(r)
                : ((c.options = t.extend({}, c.originalSettings, c.breakpointSettings[r])),
                  !0 === a && (c.currentSlide = c.options.initialSlide),
                  c.refresh(a)),
              (d = r))
            : (r !== c.activeBreakpoint || s) &&
              ((c.activeBreakpoint = r),
              'unslick' === c.breakpointSettings[r]
                ? c.unslick(r)
                : ((c.options = t.extend({}, c.originalSettings, c.breakpointSettings[r])),
                  !0 === a && (c.currentSlide = c.options.initialSlide),
                  c.refresh(a)),
              (d = r)),
            a || !1 === d || c.$slider.trigger('breakpoint', [c, d]);
        }
      }),
      (u.prototype.changeSlide = function (a, s) {
        var o,
          n,
          r,
          l = this,
          d = t(a.currentTarget);
        switch (
          (d.is('a') && a.preventDefault(),
          d.is('li') || (d = d.closest('li')),
          (r = 0 != l.slideCount % l.options.slidesToScroll),
          (o = r ? 0 : (l.slideCount - l.currentSlide) % l.options.slidesToScroll),
          a.data.message)
        ) {
          case 'previous':
            (n = 0 === o ? l.options.slidesToScroll : l.options.slidesToShow - o),
              l.slideCount > l.options.slidesToShow && l.slideHandler(l.currentSlide - n, !1, s);
            break;
          case 'next':
            (n = 0 === o ? l.options.slidesToScroll : o),
              l.slideCount > l.options.slidesToShow && l.slideHandler(l.currentSlide + n, !1, s);
            break;
          case 'index':
            var c = 0 === a.data.index ? 0 : a.data.index || d.index() * l.options.slidesToScroll;
            l.slideHandler(l.checkNavigable(c), !1, s), d.children().trigger('focus');
            break;
          default:
        }
      }),
      (u.prototype.checkNavigable = function (t) {
        var i,
          s,
          o = this;
        if (((i = o.getNavigableIndexes()), (s = 0), t > i[i.length - 1])) t = i[i.length - 1];
        else
          for (var n in i) {
            if (t < i[n]) {
              t = s;
              break;
            }
            s = i[n];
          }
        return t;
      }),
      (u.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots &&
          null !== e.$dots &&
          t('li', e.$dots)
            .off('click.slick', e.changeSlide)
            .off('mouseenter.slick', t.proxy(e.interrupt, e, !0))
            .off('mouseleave.slick', t.proxy(e.interrupt, e, !1)),
          e.$slider.off('focus.slick blur.slick'),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            (e.$prevArrow && e.$prevArrow.off('click.slick', e.changeSlide),
            e.$nextArrow && e.$nextArrow.off('click.slick', e.changeSlide)),
          e.$list.off('touchstart.slick mousedown.slick', e.swipeHandler),
          e.$list.off('touchmove.slick mousemove.slick', e.swipeHandler),
          e.$list.off('touchend.slick mouseup.slick', e.swipeHandler),
          e.$list.off('touchcancel.slick mouseleave.slick', e.swipeHandler),
          e.$list.off('click.slick', e.clickHandler),
          t(document).off(e.visibilityChange, e.visibility),
          e.cleanUpSlideEvents(),
          !0 === e.options.accessibility && e.$list.off('keydown.slick', e.keyHandler),
          !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off('click.slick', e.selectHandler),
          t(window).off('orientationchange.slick.slick-' + e.instanceUid, e.orientationChange),
          t(window).off('resize.slick.slick-' + e.instanceUid, e.resize),
          t('[draggable!=true]', e.$slideTrack).off('dragstart', e.preventDefault),
          t(window).off('load.slick.slick-' + e.instanceUid, e.setPosition),
          t(document).off('ready.slick.slick-' + e.instanceUid, e.setPosition);
      }),
      (u.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off('mouseenter.slick', t.proxy(e.interrupt, e, !0)),
          e.$list.off('mouseleave.slick', t.proxy(e.interrupt, e, !1));
      }),
      (u.prototype.cleanUpRows = function () {
        var e,
          t = this;
        1 < t.options.rows &&
          ((e = t.$slides.children().children()), e.removeAttr('style'), t.$slider.empty().append(e));
      }),
      (u.prototype.clickHandler = function (e) {
        var t = this;
        !1 === t.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
      }),
      (u.prototype.destroy = function (e) {
        var i = this;
        i.autoPlayClear(),
          (i.touchObject = {}),
          i.cleanUpEvents(),
          t('.slick-cloned', i.$slider).detach(),
          i.$dots && i.$dots.remove(),
          i.$prevArrow &&
            i.$prevArrow.length &&
            (i.$prevArrow
              .removeClass('slick-disabled slick-arrow slick-hidden')
              .removeAttr('aria-hidden aria-disabled tabindex')
              .css('display', ''),
            i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
          i.$nextArrow &&
            i.$nextArrow.length &&
            (i.$nextArrow
              .removeClass('slick-disabled slick-arrow slick-hidden')
              .removeAttr('aria-hidden aria-disabled tabindex')
              .css('display', ''),
            i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
          i.$slides &&
            (i.$slides
              .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
              .removeAttr('aria-hidden')
              .removeAttr('data-slick-index')
              .each(function () {
                t(this).attr('style', t(this).data('originalStyling'));
              }),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.detach(),
            i.$list.detach(),
            i.$slider.append(i.$slides)),
          i.cleanUpRows(),
          i.$slider.removeClass('slick-slider'),
          i.$slider.removeClass('slick-initialized'),
          i.$slider.removeClass('slick-dotted'),
          (i.unslicked = !0),
          e || i.$slider.trigger('destroy', [i]);
      }),
      (u.prototype.disableTransition = function (e) {
        var t = this,
          i = {};
        (i[t.transitionType] = ''), !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i);
      }),
      (u.prototype.fadeSlide = function (e, t) {
        var i = this;
        !1 === i.cssTransitions
          ? (i.$slides.eq(e).css({
              zIndex: i.options.zIndex,
            }),
            i.$slides.eq(e).animate(
              {
                opacity: 1,
              },
              i.options.speed,
              i.options.easing,
              t
            ))
          : (i.applyTransition(e),
            i.$slides.eq(e).css({
              opacity: 1,
              zIndex: i.options.zIndex,
            }),
            t &&
              setTimeout(function () {
                i.disableTransition(e), t.call();
              }, i.options.speed));
      }),
      (u.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions
          ? t.$slides.eq(e).animate(
              {
                opacity: 0,
                zIndex: t.options.zIndex - 2,
              },
              t.options.speed,
              t.options.easing
            )
          : (t.applyTransition(e),
            t.$slides.eq(e).css({
              opacity: 0,
              zIndex: t.options.zIndex - 2,
            }));
      }),
      (u.prototype.filterSlides = u.prototype.slickFilter = function (e) {
        var t = this;
        null !== e &&
          ((t.$slidesCache = t.$slides),
          t.unload(),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slidesCache.filter(e).appendTo(t.$slideTrack),
          t.reinit());
      }),
      (u.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*:not(.slick-arrow)', function (i) {
          i.stopImmediatePropagation();
          var a = t(this);
          setTimeout(function () {
            e.options.pauseOnFocus && ((e.focussed = a.is(':focus')), e.autoPlay());
          }, 0);
        });
      }),
      (u.prototype.getCurrent = u.prototype.slickCurrentSlide = function () {
        var e = this;
        return e.currentSlide;
      }),
      (u.prototype.getDotCount = function () {
        var e = this,
          t = 0,
          i = 0,
          a = 0;
        if (!0 === e.options.infinite)
          for (; t < e.slideCount; )
            ++a,
              (t = i + e.options.slidesToScroll),
              (i +=
                e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
        else if (!0 === e.options.centerMode) a = e.slideCount;
        else if (e.options.asNavFor)
          for (; t < e.slideCount; )
            ++a,
              (t = i + e.options.slidesToScroll),
              (i +=
                e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
        else a = 1 + s((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return a - 1;
      }),
      (u.prototype.getLeft = function (t) {
        var i,
          a,
          s,
          n = this,
          r = 0;
        return (
          (n.slideOffset = 0),
          (a = n.$slides.first().outerHeight(!0)),
          !0 === n.options.infinite
            ? (n.slideCount > n.options.slidesToShow &&
                ((n.slideOffset = -1 * (n.slideWidth * n.options.slidesToShow)),
                (r = -1 * (a * n.options.slidesToShow))),
              0 != n.slideCount % n.options.slidesToScroll &&
                t + n.options.slidesToScroll > n.slideCount &&
                n.slideCount > n.options.slidesToShow &&
                (t > n.slideCount
                  ? ((n.slideOffset = -1 * ((n.options.slidesToShow - (t - n.slideCount)) * n.slideWidth)),
                    (r = -1 * ((n.options.slidesToShow - (t - n.slideCount)) * a)))
                  : ((n.slideOffset = -1 * ((n.slideCount % n.options.slidesToScroll) * n.slideWidth)),
                    (r = -1 * ((n.slideCount % n.options.slidesToScroll) * a)))))
            : t + n.options.slidesToShow > n.slideCount &&
              ((n.slideOffset = (t + n.options.slidesToShow - n.slideCount) * n.slideWidth),
              (r = (t + n.options.slidesToShow - n.slideCount) * a)),
          n.slideCount <= n.options.slidesToShow && ((n.slideOffset = 0), (r = 0)),
          !0 === n.options.centerMode && !0 === n.options.infinite
            ? (n.slideOffset += n.slideWidth * o(n.options.slidesToShow / 2) - n.slideWidth)
            : !0 === n.options.centerMode &&
              ((n.slideOffset = 0), (n.slideOffset += n.slideWidth * o(n.options.slidesToShow / 2))),
          (i = !1 === n.options.vertical ? -1 * (t * n.slideWidth) + n.slideOffset : -1 * (t * a) + r),
          !0 === n.options.variableWidth &&
            ((s =
              n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
                ? n.$slideTrack.children('.slick-slide').eq(t)
                : n.$slideTrack.children('.slick-slide').eq(t + n.options.slidesToShow)),
            (i =
              !0 === n.options.rtl
                ? s[0]
                  ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width())
                  : 0
                : s[0]
                ? -1 * s[0].offsetLeft
                : 0),
            !0 === n.options.centerMode &&
              ((s =
                n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
                  ? n.$slideTrack.children('.slick-slide').eq(t)
                  : n.$slideTrack.children('.slick-slide').eq(t + n.options.slidesToShow + 1)),
              (i =
                !0 === n.options.rtl
                  ? s[0]
                    ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width())
                    : 0
                  : s[0]
                  ? -1 * s[0].offsetLeft
                  : 0),
              (i += (n.$list.width() - s.outerWidth()) / 2))),
          i
        );
      }),
      (u.prototype.getOption = u.prototype.slickGetOption = function (e) {
        var t = this;
        return t.options[e];
      }),
      (u.prototype.getNavigableIndexes = function () {
        var t,
          i = this,
          a = 0,
          s = 0,
          o = [];
        for (
          !1 === i.options.infinite
            ? (t = i.slideCount)
            : ((a = -1 * i.options.slidesToScroll), (s = -1 * i.options.slidesToScroll), (t = 2 * i.slideCount));
          t > a;

        )
          o.push(a),
            (a = s + i.options.slidesToScroll),
            (s +=
              i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
        return o;
      }),
      (u.prototype.getSlick = function () {
        return this;
      }),
      (u.prototype.getSlideCount = function () {
        var i,
          a,
          s,
          n = this;
        return (
          (s = !0 === n.options.centerMode ? n.slideWidth * o(n.options.slidesToShow / 2) : 0),
          !0 === n.options.swipeToSlide
            ? (n.$slideTrack.find('.slick-slide').each(function (e, i) {
                return i.offsetLeft - s + t(i).outerWidth() / 2 > -1 * n.swipeLeft ? ((a = i), !1) : void 0;
              }),
              (i = p(t(a).attr('data-slick-index') - n.currentSlide) || 1))
            : n.options.slidesToScroll
        );
      }),
      (u.prototype.goTo = u.prototype.slickGoTo = function (e, t) {
        var i = this;
        i.changeSlide(
          {
            data: {
              message: 'index',
              index: parseInt(e),
            },
          },
          t
        );
      }),
      (u.prototype.init = function (e) {
        var i = this;
        t(i.$slider).hasClass('slick-initialized') ||
          (t(i.$slider).addClass('slick-initialized'),
          i.buildRows(),
          i.buildOut(),
          i.setProps(),
          i.startLoad(),
          i.loadSlider(),
          i.initializeEvents(),
          i.updateArrows(),
          i.updateDots(),
          i.checkResponsive(!0),
          i.focusHandler()),
          e && i.$slider.trigger('init', [i]),
          !0 === i.options.accessibility && i.initADA(),
          i.options.autoplay && ((i.paused = !1), i.autoPlay());
      }),
      (u.prototype.initADA = function () {
        var e = this;
        e.$slides
          .add(e.$slideTrack.find('.slick-cloned'))
          .attr({
            'aria-hidden': 'true',
            tabindex: '-1',
          })
          .find('a, input, button, select')
          .attr({
            tabindex: '-1',
          }),
          e.$slideTrack.attr('role', 'listbox'),
          e.$slides.not(e.$slideTrack.find('.slick-cloned')).each(function (i) {
            t(this).attr({
              role: 'option',
              'aria-describedby': 'slick-slide' + e.instanceUid + i,
            });
          }),
          null !== e.$dots &&
            e.$dots
              .attr('role', 'tablist')
              .find('li')
              .each(function (i) {
                t(this).attr({
                  role: 'presentation',
                  'aria-selected': 'false',
                  'aria-controls': 'navigation' + e.instanceUid + i,
                  id: 'slick-slide' + e.instanceUid + i,
                });
              })
              .first()
              .attr('aria-selected', 'true')
              .end()
              .find('button')
              .attr('role', 'button')
              .end()
              .closest('div')
              .attr('role', 'toolbar'),
          e.activateADA();
      }),
      (u.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.off('click.slick').on(
            'click.slick',
            {
              message: 'previous',
            },
            e.changeSlide
          ),
          e.$nextArrow.off('click.slick').on(
            'click.slick',
            {
              message: 'next',
            },
            e.changeSlide
          ));
      }),
      (u.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots &&
          e.slideCount > e.options.slidesToShow &&
          t('li', e.$dots).on(
            'click.slick',
            {
              message: 'index',
            },
            e.changeSlide
          ),
          !0 === e.options.dots &&
            !0 === e.options.pauseOnDotsHover &&
            t('li', e.$dots)
              .on('mouseenter.slick', t.proxy(e.interrupt, e, !0))
              .on('mouseleave.slick', t.proxy(e.interrupt, e, !1));
      }),
      (u.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover &&
          (e.$list.on('mouseenter.slick', t.proxy(e.interrupt, e, !0)),
          e.$list.on('mouseleave.slick', t.proxy(e.interrupt, e, !1)));
      }),
      (u.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(),
          e.initDotEvents(),
          e.initSlideEvents(),
          e.$list.on(
            'touchstart.slick mousedown.slick',
            {
              action: 'start',
            },
            e.swipeHandler
          ),
          e.$list.on(
            'touchmove.slick mousemove.slick',
            {
              action: 'move',
            },
            e.swipeHandler
          ),
          e.$list.on(
            'touchend.slick mouseup.slick',
            {
              action: 'end',
            },
            e.swipeHandler
          ),
          e.$list.on(
            'touchcancel.slick mouseleave.slick',
            {
              action: 'end',
            },
            e.swipeHandler
          ),
          e.$list.on('click.slick', e.clickHandler),
          t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
          !0 === e.options.accessibility && e.$list.on('keydown.slick', e.keyHandler),
          !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on('click.slick', e.selectHandler),
          t(window).on('orientationchange.slick.slick-' + e.instanceUid, t.proxy(e.orientationChange, e)),
          t(window).on('resize.slick.slick-' + e.instanceUid, t.proxy(e.resize, e)),
          t('[draggable!=true]', e.$slideTrack).on('dragstart', e.preventDefault),
          t(window).on('load.slick.slick-' + e.instanceUid, e.setPosition),
          t(document).on('ready.slick.slick-' + e.instanceUid, e.setPosition);
      }),
      (u.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()),
          !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
      }),
      (u.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match('TEXTAREA|INPUT|SELECT') ||
          (37 === e.keyCode && !0 === t.options.accessibility
            ? t.changeSlide({
                data: {
                  message: !0 === t.options.rtl ? 'next' : 'previous',
                },
              })
            : 39 === e.keyCode &&
              !0 === t.options.accessibility &&
              t.changeSlide({
                data: {
                  message: !0 === t.options.rtl ? 'previous' : 'next',
                },
              }));
      }),
      (u.prototype.lazyLoad = function () {
        function g(e) {
          t('img[data-lazy]', e).each(function () {
            var i = t(this),
              a = t(this).attr('data-lazy'),
              s = document.createElement('img');
            (s.onload = function () {
              i.animate(
                {
                  opacity: 0,
                },
                100,
                function () {
                  i.attr('src', a).animate(
                    {
                      opacity: 1,
                    },
                    200,
                    function () {
                      i.removeAttr('data-lazy').removeClass('slick-loading');
                    }
                  ),
                    r.$slider.trigger('lazyLoaded', [r, i, a]);
                }
              );
            }),
              (s.onerror = function () {
                i.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error'),
                  r.$slider.trigger('lazyLoadError', [r, i, a]);
              }),
              (s.src = a);
          });
        }
        var i,
          a,
          o,
          n,
          r = this;
        !0 === r.options.centerMode
          ? !0 === r.options.infinite
            ? ((o = r.currentSlide + (r.options.slidesToShow / 2 + 1)), (n = o + r.options.slidesToShow + 2))
            : ((o = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1))),
              (n = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide))
          : ((o = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide),
            (n = s(o + r.options.slidesToShow)),
            !0 === r.options.fade && (0 < o && o--, n <= r.slideCount && n++)),
          (i = r.$slider.find('.slick-slide').slice(o, n)),
          g(i),
          r.slideCount <= r.options.slidesToShow
            ? ((a = r.$slider.find('.slick-slide')), g(a))
            : r.currentSlide >= r.slideCount - r.options.slidesToShow
            ? ((a = r.$slider.find('.slick-cloned').slice(0, r.options.slidesToShow)), g(a))
            : 0 === r.currentSlide && ((a = r.$slider.find('.slick-cloned').slice(-1 * r.options.slidesToShow)), g(a));
      }),
      (u.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(),
          e.$slideTrack.css({
            opacity: 1,
          }),
          e.$slider.removeClass('slick-loading'),
          e.initUI(),
          'progressive' === e.options.lazyLoad && e.progressiveLazyLoad();
      }),
      (u.prototype.next = u.prototype.slickNext = function () {
        var e = this;
        e.changeSlide({
          data: {
            message: 'next',
          },
        });
      }),
      (u.prototype.orientationChange = function () {
        var e = this;
        e.checkResponsive(), e.setPosition();
      }),
      (u.prototype.pause = u.prototype.slickPause = function () {
        var e = this;
        e.autoPlayClear(), (e.paused = !0);
      }),
      (u.prototype.play = u.prototype.slickPlay = function () {
        var e = this;
        e.autoPlay(), (e.options.autoplay = !0), (e.paused = !1), (e.focussed = !1), (e.interrupted = !1);
      }),
      (u.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked ||
          (t.$slider.trigger('afterChange', [t, e]),
          (t.animating = !1),
          t.setPosition(),
          (t.swipeLeft = null),
          t.options.autoplay && t.autoPlay(),
          !0 === t.options.accessibility && t.initADA());
      }),
      (u.prototype.prev = u.prototype.slickPrev = function () {
        var e = this;
        e.changeSlide({
          data: {
            message: 'previous',
          },
        });
      }),
      (u.prototype.preventDefault = function (e) {
        e.preventDefault();
      }),
      (u.prototype.progressiveLazyLoad = function (i) {
        i = i || 1;
        var a,
          s,
          o,
          n = this,
          r = t('img[data-lazy]', n.$slider);
        r.length
          ? ((a = r.first()),
            (s = a.attr('data-lazy')),
            (o = document.createElement('img')),
            (o.onload = function () {
              a.attr('src', s).removeAttr('data-lazy').removeClass('slick-loading'),
                !0 === n.options.adaptiveHeight && n.setPosition(),
                n.$slider.trigger('lazyLoaded', [n, a, s]),
                n.progressiveLazyLoad();
            }),
            (o.onerror = function () {
              3 > i
                ? setTimeout(function () {
                    n.progressiveLazyLoad(i + 1);
                  }, 500)
                : (a.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error'),
                  n.$slider.trigger('lazyLoadError', [n, a, s]),
                  n.progressiveLazyLoad());
            }),
            (o.src = s))
          : n.$slider.trigger('allImagesLoaded', [n]);
      }),
      (u.prototype.refresh = function (i) {
        var a,
          s,
          o = this;
        (s = o.slideCount - o.options.slidesToShow),
          !o.options.infinite && o.currentSlide > s && (o.currentSlide = s),
          o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
          (a = o.currentSlide),
          o.destroy(!0),
          t.extend(o, o.initials, {
            currentSlide: a,
          }),
          o.init(),
          i ||
            o.changeSlide(
              {
                data: {
                  message: 'index',
                  index: a,
                },
              },
              !1
            );
      }),
      (u.prototype.registerBreakpoints = function () {
        var i,
          a,
          s,
          o = this,
          n = o.options.responsive || null;
        if ('array' === t.type(n) && n.length) {
          for (i in ((o.respondTo = o.options.respondTo || 'window'), n))
            if (((s = o.breakpoints.length - 1), (a = n[i].breakpoint), n.hasOwnProperty(i))) {
              for (; 0 <= s; ) o.breakpoints[s] && o.breakpoints[s] === a && o.breakpoints.splice(s, 1), s--;
              o.breakpoints.push(a), (o.breakpointSettings[a] = n[i].settings);
            }
          o.breakpoints.sort(function (e, t) {
            return o.options.mobileFirst ? e - t : t - e;
          });
        }
      }),
      (u.prototype.reinit = function () {
        var e = this;
        (e.$slides = e.$slideTrack.children(e.options.slide).addClass('slick-slide')),
          (e.slideCount = e.$slides.length),
          e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide -= e.options.slidesToScroll),
          e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
          e.registerBreakpoints(),
          e.setProps(),
          e.setupInfinite(),
          e.buildArrows(),
          e.updateArrows(),
          e.initArrowEvents(),
          e.buildDots(),
          e.updateDots(),
          e.initDotEvents(),
          e.cleanUpSlideEvents(),
          e.initSlideEvents(),
          e.checkResponsive(!1, !0),
          !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on('click.slick', e.selectHandler),
          e.setSlideClasses('number' == typeof e.currentSlide ? e.currentSlide : 0),
          e.setPosition(),
          e.focusHandler(),
          (e.paused = !e.options.autoplay),
          e.autoPlay(),
          e.$slider.trigger('reInit', [e]);
      }),
      (u.prototype.resize = function () {
        var e = this;
        t(window).width() !== e.windowWidth &&
          (clearTimeout(e.windowDelay),
          (e.windowDelay = window.setTimeout(function () {
            (e.windowWidth = t(window).width()), e.checkResponsive(), e.unslicked || e.setPosition();
          }, 50)));
      }),
      (u.prototype.removeSlide = u.prototype.slickRemove = function (e, t, i) {
        var s = this;
        return (
          'boolean' == typeof e ? ((t = e), (e = !0 === t ? 0 : s.slideCount - 1)) : (e = !0 === t ? --e : e),
          !(1 > s.slideCount || 0 > e || e > s.slideCount - 1) &&
            (s.unload(),
            !0 === i ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(e).remove(),
            (s.$slides = s.$slideTrack.children(this.options.slide)),
            s.$slideTrack.children(this.options.slide).detach(),
            s.$slideTrack.append(s.$slides),
            (s.$slidesCache = s.$slides),
            void s.reinit())
        );
      }),
      (u.prototype.setCSS = function (t) {
        var i,
          o,
          n = this,
          r = {};
        !0 === n.options.rtl && (t = -t),
          (i = 'left' == n.positionProp ? s(t) + 'px' : '0px'),
          (o = 'top' == n.positionProp ? s(t) + 'px' : '0px'),
          (r[n.positionProp] = t),
          !1 === n.transformsEnabled
            ? n.$slideTrack.css(r)
            : ((r = {}),
              !1 === n.cssTransitions
                ? ((r[n.animType] = 'translate(' + i + ', ' + o + ')'), n.$slideTrack.css(r))
                : ((r[n.animType] = 'translate3d(' + i + ', ' + o + ', 0px)'), n.$slideTrack.css(r)));
      }),
      (u.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical
          ? !0 === e.options.centerMode &&
            e.$list.css({
              padding: '0px ' + e.options.centerPadding,
            })
          : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
            !0 === e.options.centerMode &&
              e.$list.css({
                padding: e.options.centerPadding + ' 0px',
              })),
          (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          !1 === e.options.vertical && !1 === e.options.variableWidth
            ? ((e.slideWidth = s(e.listWidth / e.options.slidesToShow)),
              e.$slideTrack.width(s(e.slideWidth * e.$slideTrack.children('.slick-slide').length)))
            : !0 === e.options.variableWidth
            ? e.$slideTrack.width(5e3 * e.slideCount)
            : ((e.slideWidth = s(e.listWidth)),
              e.$slideTrack.height(
                s(e.$slides.first().outerHeight(!0) * e.$slideTrack.children('.slick-slide').length)
              ));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children('.slick-slide').width(e.slideWidth - t);
      }),
      (u.prototype.setFade = function () {
        var i,
          a = this;
        a.$slides.each(function (s, o) {
          (i = -1 * (a.slideWidth * s)),
            !0 === a.options.rtl
              ? t(o).css({
                  position: 'relative',
                  right: i,
                  top: 0,
                  zIndex: a.options.zIndex - 2,
                  opacity: 0,
                })
              : t(o).css({
                  position: 'relative',
                  left: i,
                  top: 0,
                  zIndex: a.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          a.$slides.eq(a.currentSlide).css({
            zIndex: a.options.zIndex - 1,
            opacity: 1,
          });
      }),
      (u.prototype.setHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css('height', t);
        }
      }),
      (u.prototype.setOption = u.prototype.slickSetOption = function () {
        var i,
          a,
          s,
          o,
          n,
          r = this,
          l = !1;
        if (
          ('object' === t.type(arguments[0])
            ? ((s = arguments[0]), (l = arguments[1]), (n = 'multiple'))
            : 'string' === t.type(arguments[0]) &&
              ((s = arguments[0]),
              (o = arguments[1]),
              (l = arguments[2]),
              'responsive' === arguments[0] && 'array' === t.type(arguments[1])
                ? (n = 'responsive')
                : 'undefined' != typeof arguments[1] && (n = 'single')),
          'single' === n)
        )
          r.options[s] = o;
        else if ('multiple' === n)
          t.each(s, function (e, t) {
            r.options[e] = t;
          });
        else if ('responsive' === n)
          for (a in o)
            if ('array' !== t.type(r.options.responsive)) r.options.responsive = [o[a]];
            else {
              for (i = r.options.responsive.length - 1; 0 <= i; )
                r.options.responsive[i].breakpoint === o[a].breakpoint && r.options.responsive.splice(i, 1), i--;
              r.options.responsive.push(o[a]);
            }
        l && (r.unload(), r.reinit());
      }),
      (u.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(),
          e.setHeight(),
          !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
          e.$slider.trigger('setPosition', [e]);
      }),
      (u.prototype.setProps = function () {
        var e = this,
          t = document.body.style;
        (e.positionProp = !0 === e.options.vertical ? 'top' : 'left'),
          'top' === e.positionProp ? e.$slider.addClass('slick-vertical') : e.$slider.removeClass('slick-vertical'),
          (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) &&
            !0 === e.options.useCSS &&
            (e.cssTransitions = !0),
          e.options.fade &&
            ('number' == typeof e.options.zIndex
              ? 3 > e.options.zIndex && (e.options.zIndex = 3)
              : (e.options.zIndex = e.defaults.zIndex)),
          void 0 !== t.OTransform &&
            ((e.animType = 'OTransform'),
            (e.transformType = '-o-transform'),
            (e.transitionType = 'OTransition'),
            void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
          void 0 !== t.MozTransform &&
            ((e.animType = 'MozTransform'),
            (e.transformType = '-moz-transform'),
            (e.transitionType = 'MozTransition'),
            void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
          void 0 !== t.webkitTransform &&
            ((e.animType = 'webkitTransform'),
            (e.transformType = '-webkit-transform'),
            (e.transitionType = 'webkitTransition'),
            void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
          void 0 !== t.msTransform &&
            ((e.animType = 'msTransform'),
            (e.transformType = '-ms-transform'),
            (e.transitionType = 'msTransition'),
            void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform &&
            !1 !== e.animType &&
            ((e.animType = 'transform'), (e.transformType = 'transform'), (e.transitionType = 'transition')),
          (e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType);
      }),
      (u.prototype.setSlideClasses = function (t) {
        var i,
          a,
          s,
          n,
          r = this;
        (a = r.$slider
          .find('.slick-slide')
          .removeClass('slick-active slick-center slick-current')
          .attr('aria-hidden', 'true')),
          r.$slides.eq(t).addClass('slick-current'),
          !0 === r.options.centerMode
            ? ((i = o(r.options.slidesToShow / 2)),
              !0 === r.options.infinite &&
                (t >= i && t <= r.slideCount - 1 - i
                  ? r.$slides
                      .slice(t - i, t + i + 1)
                      .addClass('slick-active')
                      .attr('aria-hidden', 'false')
                  : ((s = r.options.slidesToShow + t),
                    a
                      .slice(s - i + 1, s + i + 2)
                      .addClass('slick-active')
                      .attr('aria-hidden', 'false')),
                0 === t
                  ? a.eq(a.length - 1 - r.options.slidesToShow).addClass('slick-center')
                  : t == r.slideCount - 1 && a.eq(r.options.slidesToShow).addClass('slick-center')),
              r.$slides.eq(t).addClass('slick-center'))
            : 0 <= t && t <= r.slideCount - r.options.slidesToShow
            ? r.$slides
                .slice(t, t + r.options.slidesToShow)
                .addClass('slick-active')
                .attr('aria-hidden', 'false')
            : a.length <= r.options.slidesToShow
            ? a.addClass('slick-active').attr('aria-hidden', 'false')
            : ((n = r.slideCount % r.options.slidesToShow),
              (s = !0 === r.options.infinite ? r.options.slidesToShow + t : t),
              r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - t < r.options.slidesToShow
                ? a
                    .slice(s - (r.options.slidesToShow - n), s + n)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false')
                : a
                    .slice(s, s + r.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false')),
          'ondemand' === r.options.lazyLoad && r.lazyLoad();
      }),
      (u.prototype.setupInfinite = function () {
        var i,
          a,
          s,
          o = this;
        if (
          (!0 === o.options.fade && (o.options.centerMode = !1),
          !0 === o.options.infinite && !1 === o.options.fade && ((a = null), o.slideCount > o.options.slidesToShow))
        ) {
          for (
            s = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, i = o.slideCount;
            i > o.slideCount - s;
            i -= 1
          )
            (a = i - 1),
              t(o.$slides[a])
                .clone(!0)
                .attr('id', '')
                .attr('data-slick-index', a - o.slideCount)
                .prependTo(o.$slideTrack)
                .addClass('slick-cloned');
          for (i = 0; s > i; i += 1)
            (a = i),
              t(o.$slides[a])
                .clone(!0)
                .attr('id', '')
                .attr('data-slick-index', a + o.slideCount)
                .appendTo(o.$slideTrack)
                .addClass('slick-cloned');
          o.$slideTrack
            .find('.slick-cloned')
            .find('[id]')
            .each(function () {
              t(this).attr('id', '');
            });
        }
      }),
      (u.prototype.interrupt = function (e) {
        var t = this;
        e || t.autoPlay(), (t.interrupted = e);
      }),
      (u.prototype.selectHandler = function (i) {
        var a = this,
          s = t(i.target).is('.slick-slide') ? t(i.target) : t(i.target).parents('.slick-slide'),
          o = parseInt(s.attr('data-slick-index'));
        return (
          o || (o = 0),
          a.slideCount <= a.options.slidesToShow ? (a.setSlideClasses(o), void a.asNavFor(o)) : void a.slideHandler(o)
        );
      }),
      (u.prototype.slideHandler = function (t, a, s) {
        var o,
          n,
          r,
          l,
          c,
          p = null,
          u = this;
        return (
          (a = a || !1),
          (!0 === u.animating && !0 === u.options.waitForAnimate) ||
          (!0 === u.options.fade && u.currentSlide === t) ||
          u.slideCount <= u.options.slidesToShow
            ? void 0
            : (!1 === a && u.asNavFor(t),
              (o = t),
              (p = u.getLeft(o)),
              (l = u.getLeft(u.currentSlide)),
              (u.currentLeft = null === u.swipeLeft ? l : u.swipeLeft),
              !1 === u.options.infinite &&
              !1 === u.options.centerMode &&
              (0 > t || t > u.getDotCount() * u.options.slidesToScroll)
                ? void (
                    !1 === u.options.fade &&
                    ((o = u.currentSlide),
                    !0 === s
                      ? u.postSlide(o)
                      : u.animateSlide(l, function () {
                          u.postSlide(o);
                        }))
                  )
                : !1 === u.options.infinite &&
                  !0 === u.options.centerMode &&
                  (0 > t || t > u.slideCount - u.options.slidesToScroll)
                ? void (
                    !1 === u.options.fade &&
                    ((o = u.currentSlide),
                    !0 === s
                      ? u.postSlide(o)
                      : u.animateSlide(l, function () {
                          u.postSlide(o);
                        }))
                  )
                : (u.options.autoplay && clearInterval(u.autoPlayTimer),
                  (n =
                    0 > o
                      ? 0 == u.slideCount % u.options.slidesToScroll
                        ? u.slideCount + o
                        : u.slideCount - (u.slideCount % u.options.slidesToScroll)
                      : o >= u.slideCount
                      ? 0 == u.slideCount % u.options.slidesToScroll
                        ? o - u.slideCount
                        : 0
                      : o),
                  (u.animating = !0),
                  u.$slider.trigger('beforeChange', [u, u.currentSlide, n]),
                  (r = u.currentSlide),
                  (u.currentSlide = n),
                  u.setSlideClasses(u.currentSlide),
                  u.options.asNavFor &&
                    ((c = u.getNavTarget()),
                    (c = c.slick('getSlick')),
                    c.slideCount <= c.options.slidesToShow && c.setSlideClasses(u.currentSlide)),
                  u.updateDots(),
                  u.updateArrows(),
                  !0 === u.options.fade
                    ? (!0 === s
                        ? u.postSlide(n)
                        : (u.fadeSlideOut(r),
                          u.fadeSlide(n, function () {
                            u.postSlide(n);
                          })),
                      void u.animateHeight())
                    : void (!0 === s
                        ? u.postSlide(n)
                        : u.animateSlide(p, function () {
                            u.postSlide(n);
                          }))))
        );
      }),
      (u.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()),
          !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
          e.$slider.addClass('slick-loading');
      }),
      (u.prototype.swipeDirection = function () {
        var t,
          i,
          s,
          o,
          n = this;
        return (
          (t = n.touchObject.startX - n.touchObject.curX),
          (i = n.touchObject.startY - n.touchObject.curY),
          (s = Math.atan2(i, t)),
          (o = l((180 * s) / Math.PI)),
          0 > o && (o = 360 - p(o)),
          45 >= o && 0 <= o
            ? !1 === n.options.rtl
              ? 'left'
              : 'right'
            : 360 >= o && 315 <= o
            ? !1 === n.options.rtl
              ? 'left'
              : 'right'
            : 135 <= o && 225 >= o
            ? !1 === n.options.rtl
              ? 'right'
              : 'left'
            : !0 === n.options.verticalSwiping
            ? 35 <= o && 135 >= o
              ? 'down'
              : 'up'
            : 'vertical'
        );
      }),
      (u.prototype.swipeEnd = function () {
        var e,
          t,
          i = this;
        if (
          ((i.dragging = !1),
          (i.interrupted = !1),
          (i.shouldClick = !(10 < i.touchObject.swipeLength)),
          void 0 === i.touchObject.curX)
        )
          return !1;
        if (
          (!0 === i.touchObject.edgeHit && i.$slider.trigger('edge', [i, i.swipeDirection()]),
          i.touchObject.swipeLength >= i.touchObject.minSwipe)
        ) {
          switch ((t = i.swipeDirection())) {
            case 'left':
            case 'down':
              (e = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide + i.getSlideCount())
                : i.currentSlide + i.getSlideCount()),
                (i.currentDirection = 0);
              break;
            case 'right':
            case 'up':
              (e = i.options.swipeToSlide
                ? i.checkNavigable(i.currentSlide - i.getSlideCount())
                : i.currentSlide - i.getSlideCount()),
                (i.currentDirection = 1);
          }
          'vertical' != t && (i.slideHandler(e), (i.touchObject = {}), i.$slider.trigger('swipe', [i, t]));
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), (i.touchObject = {}));
      }),
      (u.prototype.swipeHandler = function (e) {
        var t = this;
        if (
          !(
            !1 === t.options.swipe ||
            ('ontouchend' in document && !1 === t.options.swipe) ||
            (!1 === t.options.draggable && -1 !== e.type.indexOf('mouse'))
          )
        )
          switch (
            ((t.touchObject.fingerCount =
              e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
            e.data.action)
          ) {
            case 'start':
              t.swipeStart(e);
              break;
            case 'move':
              t.swipeMove(e);
              break;
            case 'end':
              t.swipeEnd(e);
          }
      }),
      (u.prototype.swipeMove = function (t) {
        var a,
          s,
          o,
          n,
          c,
          i = Math.sqrt,
          p = this;
        return (
          (c = void 0 === t.originalEvent ? null : t.originalEvent.touches),
          p.dragging &&
            (!c || 1 === c.length) &&
            ((a = p.getLeft(p.currentSlide)),
            (p.touchObject.curX = void 0 === c ? t.clientX : c[0].pageX),
            (p.touchObject.curY = void 0 === c ? t.clientY : c[0].pageY),
            (p.touchObject.swipeLength = l(i(r(p.touchObject.curX - p.touchObject.startX, 2)))),
            !0 === p.options.verticalSwiping &&
              (p.touchObject.swipeLength = l(i(r(p.touchObject.curY - p.touchObject.startY, 2)))),
            (s = p.swipeDirection()),
            'vertical' === s
              ? void 0
              : (void 0 !== t.originalEvent && 4 < p.touchObject.swipeLength && t.preventDefault(),
                (n = (!1 === p.options.rtl ? 1 : -1) * (p.touchObject.curX > p.touchObject.startX ? 1 : -1)),
                !0 === p.options.verticalSwiping && (n = p.touchObject.curY > p.touchObject.startY ? 1 : -1),
                (o = p.touchObject.swipeLength),
                (p.touchObject.edgeHit = !1),
                !1 === p.options.infinite &&
                  ((0 === p.currentSlide && 'right' === s) || (p.currentSlide >= p.getDotCount() && 'left' === s)) &&
                  ((o = p.touchObject.swipeLength * p.options.edgeFriction), (p.touchObject.edgeHit = !0)),
                (p.swipeLeft = !1 === p.options.vertical ? a + o * n : a + o * (p.$list.height() / p.listWidth) * n),
                !0 === p.options.verticalSwiping && (p.swipeLeft = a + o * n),
                !0 !== p.options.fade &&
                  !1 !== p.options.touchMove &&
                  (!0 === p.animating ? ((p.swipeLeft = null), !1) : void p.setCSS(p.swipeLeft))))
        );
      }),
      (u.prototype.swipeStart = function (e) {
        var t,
          i = this;
        return (
          (i.interrupted = !0),
          1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow
            ? ((i.touchObject = {}), !1)
            : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
              (i.touchObject.startX = i.touchObject.curX = void 0 === t ? e.clientX : t.pageX),
              (i.touchObject.startY = i.touchObject.curY = void 0 === t ? e.clientY : t.pageY),
              void (i.dragging = !0))
        );
      }),
      (u.prototype.unfilterSlides = u.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache &&
          (e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.appendTo(e.$slideTrack),
          e.reinit());
      }),
      (u.prototype.unload = function () {
        var e = this;
        t('.slick-cloned', e.$slider).remove(),
          e.$dots && e.$dots.remove(),
          e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
          e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
          e.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');
      }),
      (u.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger('unslick', [t, e]), t.destroy();
      }),
      (u.prototype.updateArrows = function () {
        var e,
          t = this;
        (e = o(t.options.slidesToShow / 2)),
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            !t.options.infinite &&
            (t.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'),
            t.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'),
            0 === t.currentSlide
              ? (t.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true'),
                t.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'))
              : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode
              ? (t.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true'),
                t.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false'))
              : t.currentSlide >= t.slideCount - 1 &&
                !0 === t.options.centerMode &&
                (t.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true'),
                t.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')));
      }),
      (u.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots &&
          (e.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true'),
          e.$dots
            .find('li')
            .eq(o(e.currentSlide / e.options.slidesToScroll))
            .addClass('slick-active')
            .attr('aria-hidden', 'false'));
      }),
      (u.prototype.visibility = function () {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
      }),
      (t.fn.slick = function () {
        var t,
          i,
          s = this,
          a = arguments[0],
          o = Array.prototype.slice.call(arguments, 1),
          n = s.length;
        for (t = 0; n > t; t++)
          if (
            ('object' == _typeof(a) || 'undefined' == typeof a
              ? (s[t].slick = new u(s[t], a))
              : (i = s[t].slick[a].apply(s[t].slick, o)),
            'undefined' != typeof i)
          )
            return i;
        return s;
      });
  }); /*! flipclock 2015-08-31 */
var Base = function () {};
(Base.extend = function (t, i) {
  'use strict';
  var a = Base.prototype.extend;
  Base._prototyping = !0;
  var s = new this();
  a.call(s, t), (s.base = function () {}), delete Base._prototyping;
  var o = s.constructor,
    e = (s.constructor = function () {
      if (!Base._prototyping)
        if (this._constructing || this.constructor == e)
          (this._constructing = !0), o.apply(this, arguments), delete this._constructing;
        else if (null !== arguments[0]) return (arguments[0].extend || a).call(arguments[0], s);
    });
  return (
    (e.ancestor = this),
    (e.extend = this.extend),
    (e.forEach = this.forEach),
    (e.implement = this.implement),
    (e.prototype = s),
    (e.toString = this.toString),
    (e.valueOf = function (t) {
      return 'object' == t ? e : o.valueOf();
    }),
    a.call(e, i),
    'function' == typeof e.init && e.init(),
    e
  );
}),
  (Base.prototype = {
    extend: function (t, s) {
      if (1 < arguments.length) {
        var o = this[t];
        if (o && 'function' == typeof s && (!o.valueOf || o.valueOf() != s.valueOf()) && /\bbase\b/.test(s)) {
          var n = s.valueOf();
          (s = function b() {
            var e = this.base || Base.prototype.base;
            this.base = o;
            var b = n.apply(this, arguments);
            return (this.base = e), b;
          }),
            (s.valueOf = function (e) {
              return 'object' == e ? s : n;
            }),
            (s.toString = Base.toString);
        }
        this[t] = s;
      } else if (t) {
        var a = Base.prototype.extend;
        Base._prototyping || 'function' == typeof this || (a = this.extend || a);
        for (
          var r = {
              toSource: null,
            },
            d = ['constructor', 'toString', 'valueOf'],
            l = Base._prototyping ? 0 : 1;
          (c = d[l++]);

        )
          t[c] != r[c] && a.call(this, c, t[c]);
        for (var c in t) r[c] || a.call(this, c, t[c]);
      }
      return this;
    },
  }),
  (Base = Base.extend(
    {
      constructor: function () {
        this.extend(arguments[0]);
      },
    },
    {
      ancestor: Object,
      version: '1.1',
      forEach: function (e, t, i) {
        for (var a in e) void 0 === this.prototype[a] && t.call(i, e[a], a, e);
      },
      implement: function () {
        for (var e = 0; e < arguments.length; e++)
          'function' == typeof arguments[e] ? arguments[e](this.prototype) : this.prototype.extend(arguments[e]);
        return this;
      },
      toString: function () {
        return this.valueOf() + '';
      },
    }
  ));
var _FlipClock;
!(function (e) {
  'use strict';
  (_FlipClock = function (e, t, i) {
    return t instanceof Object && !1 == t instanceof Date && ((i = t), (t = 0)), new _FlipClock.Factory(e, t, i);
  }),
    (_FlipClock.Lang = {}),
    (_FlipClock.Base = Base.extend({
      buildDate: '2014-12-12',
      version: '0.7.7',
      constructor: function (t, i) {
        'object' != _typeof(t) && (t = {}), 'object' != _typeof(i) && (i = {}), this.setOptions(e.extend(!0, {}, t, i));
      },
      callback: function (e) {
        if ('function' == typeof e) {
          for (var t = [], i = 1; i <= arguments.length; i++) arguments[i] && t.push(arguments[i]);
          e.apply(this, t);
        }
      },
      log: function (e) {
        window.console && console.log && console.log(e);
      },
      getOption: function (e) {
        return !!this[e] && this[e];
      },
      getOptions: function () {
        return this;
      },
      setOption: function (e, t) {
        this[e] = t;
      },
      setOptions: function (e) {
        for (var t in e) 'undefined' != typeof e[t] && this.setOption(t, e[t]);
      },
    }));
})(jQuery),
  (function (t) {
    'use strict';
    _FlipClock.Face = _FlipClock.Base.extend({
      autoStart: !0,
      dividers: [],
      factory: !1,
      lists: [],
      constructor: function (e, t) {
        (this.dividers = []), (this.lists = []), this.base(t), (this.factory = e);
      },
      build: function () {
        this.autoStart && this.start();
      },
      createDivider: function (i, a, s) {
        ('boolean' != typeof a && a) || ((s = a), (a = i));
        var o = [
          '<span class="' + this.factory.classes.dot + ' top"></span>',
          '<span class="' + this.factory.classes.dot + ' bottom"></span>',
        ].join('');
        s && (o = ''), (i = this.factory.localize(i));
        var n = [
            '<span class="' + this.factory.classes.divider + ' ' + (a ? a : '').toLowerCase() + '">',
            '<span class="' + this.factory.classes.label + '">' + (i ? i : '') + '</span>',
            o,
            '</span>',
          ],
          r = t(n.join(''));
        return this.dividers.push(r), r;
      },
      createList: function (e, t) {
        'object' == _typeof(e) && ((t = e), (e = 0));
        var i = new _FlipClock.List(this.factory, e, t);
        return this.lists.push(i), i;
      },
      reset: function () {
        (this.factory.time = new _FlipClock.Time(
          this.factory,
          this.factory.original ? Math.round(this.factory.original) : 0,
          {
            minimumDigits: this.factory.minimumDigits,
          }
        )),
          this.flip(this.factory.original, !1);
      },
      appendDigitToClock: function (e) {
        e.$el.append(!1);
      },
      addDigit: function (e) {
        var t = this.createList(e, {
          classes: {
            active: this.factory.classes.active,
            before: this.factory.classes.before,
            flip: this.factory.classes.flip,
          },
        });
        this.appendDigitToClock(t);
      },
      start: function () {},
      stop: function () {},
      autoIncrement: function () {
        this.factory.countdown ? this.decrement() : this.increment();
      },
      increment: function () {
        this.factory.time.addSecond();
      },
      decrement: function () {
        0 == this.factory.time.getTimeSeconds() ? this.factory.stop() : this.factory.time.subSecond();
      },
      flip: function (e, i) {
        var s = this;
        t.each(e, function (t, a) {
          var o = s.lists[t];
          o ? (i || a == o.digit || o.play(), o.select(a)) : s.addDigit(a);
        });
      },
    });
  })(jQuery),
  (function (e) {
    'use strict';
    _FlipClock.Factory = _FlipClock.Base.extend({
      animationRate: 1e3,
      autoStart: !0,
      callbacks: {
        destroy: !1,
        create: !1,
        init: !1,
        interval: !1,
        start: !1,
        stop: !1,
        reset: !1,
      },
      classes: {
        active: 'flip-clock-active',
        before: 'flip-clock-before',
        divider: 'flip-clock-divider',
        dot: 'flip-clock-dot',
        label: 'flip-clock-label',
        flip: 'flip',
        play: 'play',
        wrapper: 'flip-clock-wrapper',
      },
      clockFace: 'HourlyCounter',
      countdown: !1,
      defaultClockFace: 'HourlyCounter',
      defaultLanguage: 'english',
      $el: !1,
      face: !0,
      lang: !1,
      language: 'english',
      minimumDigits: 0,
      original: !1,
      running: !1,
      time: !1,
      timer: !1,
      $wrapper: !1,
      constructor: function (t, i, a) {
        a || (a = {}),
          (this.lists = []),
          (this.running = !1),
          this.base(a),
          (this.$el = e(t).addClass(this.classes.wrapper)),
          (this.$wrapper = this.$el),
          (this.original = i instanceof Date ? i : i ? Math.round(i) : 0),
          (this.time = new _FlipClock.Time(this, this.original, {
            minimumDigits: this.minimumDigits,
            animationRate: this.animationRate,
          })),
          (this.timer = new _FlipClock.Timer(this, a)),
          this.loadLanguage(this.language),
          this.loadClockFace(this.clockFace, a),
          this.autoStart && this.start();
      },
      loadClockFace: function (t, i) {
        var s,
          o = !1;
        return (
          (t = t.ucfirst() + 'Face'),
          this.face.stop && (this.stop(), (o = !0)),
          this.$el.html(''),
          (this.time.minimumDigits = this.minimumDigits),
          (s = _FlipClock[t] ? new _FlipClock[t](this, i) : new _FlipClock[this.defaultClockFace + 'Face'](this, i)),
          s.build(),
          (this.face = s),
          o && this.start(),
          this.face
        );
      },
      loadLanguage: function (e) {
        var t;
        return (
          (t = _FlipClock.Lang[e.ucfirst()]
            ? _FlipClock.Lang[e.ucfirst()]
            : _FlipClock.Lang[e]
            ? _FlipClock.Lang[e]
            : _FlipClock.Lang[this.defaultLanguage]),
          (this.lang = t)
        );
      },
      localize: function (e, t) {
        var i = this.lang;
        if (!e) return null;
        var a = e.toLowerCase();
        return 'object' == _typeof(t) && (i = t), i && i[a] ? i[a] : e;
      },
      start: function (e) {
        var t = this;
        t.running || (t.countdown && !(t.countdown && 0 < t.time.time))
          ? t.log('Trying to start timer when countdown already at 0')
          : (t.face.start(t.time),
            t.timer.start(function () {
              t.flip(), 'function' == typeof e && e();
            }));
      },
      stop: function (e) {
        for (var t in (this.face.stop(), this.timer.stop(e), this.lists))
          this.lists.hasOwnProperty(t) && this.lists[t].stop();
      },
      reset: function (e) {
        this.timer.reset(e), this.face.reset();
      },
      setTime: function (e) {
        (this.time.time = e), this.flip(!0);
      },
      getTime: function () {
        return this.time;
      },
      setCountdown: function (e) {
        var t = this.running;
        (this.countdown = !!e), t && (this.stop(), this.start());
      },
      flip: function (e) {
        this.face.flip(!1, e);
      },
    });
  })(jQuery),
  (function (e) {
    'use strict';
    _FlipClock.List = _FlipClock.Base.extend({
      digit: 0,
      classes: {
        active: 'flip-clock-active',
        before: 'flip-clock-before',
        flip: 'flip',
      },
      factory: !1,
      $el: !1,
      $obj: !1,
      items: [],
      lastDigit: 0,
      constructor: function (e, t) {
        (this.factory = e),
          (this.digit = t),
          (this.lastDigit = t),
          (this.$el = this.createList()),
          (this.$obj = this.$el),
          0 < t && this.select(t),
          this.factory.$el.append(this.$el);
      },
      select: function (e) {
        if (('undefined' == typeof e ? (e = this.digit) : (this.digit = e), this.digit != this.lastDigit)) {
          var t = this.$el.find('.' + this.classes.before).removeClass(this.classes.before);
          this.$el
            .find('.' + this.classes.active)
            .removeClass(this.classes.active)
            .addClass(this.classes.before),
            this.appendListItem(this.classes.active, this.digit),
            t.remove(),
            (this.lastDigit = this.digit);
        }
      },
      play: function () {
        this.$el.addClass(this.factory.classes.play);
      },
      stop: function () {
        var e = this;
        setTimeout(function () {
          e.$el.removeClass(e.factory.classes.play);
        }, this.factory.timer.interval);
      },
      createListItem: function (e, t) {
        return [
          '<li class="' + (e ? e : '') + '">',
          '<a href="#">',
          '<div class="up">',
          '<div class="shadow"></div>',
          '<div class="inn">' + (t ? t : '') + '</div>',
          '</div>',
          '<div class="down">',
          '<div class="shadow"></div>',
          '<div class="inn">' + (t ? t : '') + '</div>',
          '</div>',
          '</a>',
          '</li>',
        ].join('');
      },
      appendListItem: function (e, t) {
        var i = this.createListItem(e, t);
        this.$el.append(i);
      },
      createList: function () {
        var t = this.getPrevDigit() ? this.getPrevDigit() : this.digit,
          i = e(
            [
              '<ul class="' + this.classes.flip + ' ' + (this.factory.running ? this.factory.classes.play : '') + '">',
              this.createListItem(this.classes.before, t),
              this.createListItem(this.classes.active, this.digit),
              '</ul>',
            ].join('')
          );
        return i;
      },
      getNextDigit: function () {
        return 9 == this.digit ? 0 : this.digit + 1;
      },
      getPrevDigit: function () {
        return 0 == this.digit ? 9 : this.digit - 1;
      },
    });
  })(jQuery),
  (function (e) {
    'use strict';
    (String.prototype.ucfirst = function () {
      return this.substr(0, 1).toUpperCase() + this.substr(1);
    }),
      (e.fn.FlipClock = function (t, i) {
        return new _FlipClock(e(this), t, i);
      }),
      (e.fn.flipClock = function (t, i) {
        return e.fn.FlipClock(t, i);
      });
  })(jQuery),
  (function (t) {
    'use strict';
    var e = Math.floor;
    _FlipClock.Time = _FlipClock.Base.extend({
      time: 0,
      factory: !1,
      minimumDigits: 0,
      constructor: function (e, t, i) {
        'object' != _typeof(i) && (i = {}),
          i.minimumDigits || (i.minimumDigits = e.minimumDigits),
          this.base(i),
          (this.factory = e),
          t && (this.time = t);
      },
      convertDigitsToArray: function (e) {
        var t = [];
        e = e.toString();
        for (var i = 0; i < e.length; i++) e[i].match(/^\d*$/g) && t.push(e[i]);
        return t;
      },
      digit: function (e) {
        var t = this.toString(),
          i = t.length;
        return !!t[i - e] && t[i - e];
      },
      digitize: function (e) {
        var i = [];
        if (
          (t.each(e, function (e, t) {
            (t = t.toString()), 1 == t.length && (t = '0' + t);
            for (var a = 0; a < t.length; a++) i.push(t.charAt(a));
          }),
          i.length > this.minimumDigits && (this.minimumDigits = i.length),
          this.minimumDigits > i.length)
        )
          for (var a = i.length; a < this.minimumDigits; a++) i.unshift('0');
        return i;
      },
      getDateObject: function () {
        return this.time instanceof Date ? this.time : new Date(new Date().getTime() + 1e3 * this.getTimeSeconds());
      },
      getDayCounter: function (e) {
        var t = [this.getDays(), this.getHours(!0), this.getMinutes(!0)];
        return e && t.push(this.getSeconds(!0)), this.digitize(t);
      },
      getDays: function (t) {
        var i = this.getTimeSeconds() / 60 / 60 / 24;
        return t && (i %= 7), e(i);
      },
      getHourCounter: function () {
        var e = this.digitize([this.getHours(), this.getMinutes(!0), this.getSeconds(!0)]);
        return e;
      },
      getHourly: function () {
        return this.getHourCounter();
      },
      getHours: function (t) {
        var i = this.getTimeSeconds() / 60 / 60;
        return t && (i %= 24), e(i);
      },
      getMilitaryTime: function (e, t) {
        'undefined' == typeof t && (t = !0), e || (e = this.getDateObject());
        var i = [e.getHours(), e.getMinutes()];
        return !0 === t && i.push(e.getSeconds()), this.digitize(i);
      },
      getMinutes: function (t) {
        var i = this.getTimeSeconds() / 60;
        return t && (i %= 60), e(i);
      },
      getMinuteCounter: function () {
        var e = this.digitize([this.getMinutes(), this.getSeconds(!0)]);
        return e;
      },
      getTimeSeconds: function (e) {
        return (
          e || (e = new Date()),
          this.time instanceof Date
            ? this.factory.countdown
              ? Math.max(this.time.getTime() / 1e3 - e.getTime() / 1e3, 0)
              : e.getTime() / 1e3 - this.time.getTime() / 1e3
            : this.time
        );
      },
      getTime: function (e, t) {
        'undefined' == typeof t && (t = !0), e || (e = this.getDateObject()), console.log(e);
        var i = e.getHours(),
          s = [12 < i ? i - 12 : 0 === i ? 12 : i, e.getMinutes()];
        return !0 === t && s.push(e.getSeconds()), this.digitize(s);
      },
      getSeconds: function (e) {
        var t = this.getTimeSeconds();
        return e && (60 == t ? (t = 0) : (t %= 60)), Math.ceil(t);
      },
      getWeeks: function (t) {
        var i = this.getTimeSeconds() / 60 / 60 / 24 / 7;
        return t && (i %= 52), e(i);
      },
      removeLeadingZeros: function (i, s) {
        var o = 0,
          n = [];
        return (
          t.each(s, function (e) {
            i > e ? (o += parseInt(s[e], 10)) : n.push(s[e]);
          }),
          0 === o ? n : s
        );
      },
      addSeconds: function (e) {
        this.time instanceof Date ? this.time.setSeconds(this.time.getSeconds() + e) : (this.time += e);
      },
      addSecond: function () {
        this.addSeconds(1);
      },
      subSeconds: function (e) {
        this.time instanceof Date ? this.time.setSeconds(this.time.getSeconds() - e) : (this.time -= e);
      },
      subSecond: function () {
        this.subSeconds(1);
      },
      toString: function () {
        return this.getTimeSeconds().toString();
      },
    });
  })(jQuery),
  (function () {
    'use strict';
    _FlipClock.Timer = _FlipClock.Base.extend({
      callbacks: {
        destroy: !1,
        create: !1,
        init: !1,
        interval: !1,
        start: !1,
        stop: !1,
        reset: !1,
      },
      count: 0,
      factory: !1,
      interval: 1e3,
      animationRate: 1e3,
      constructor: function (e, t) {
        this.base(t), (this.factory = e), this.callback(this.callbacks.init), this.callback(this.callbacks.create);
      },
      getElapsed: function () {
        return this.count * this.interval;
      },
      getElapsedTime: function () {
        return new Date(this.time + this.getElapsed());
      },
      reset: function (e) {
        clearInterval(this.timer), (this.count = 0), this._setInterval(e), this.callback(this.callbacks.reset);
      },
      start: function (e) {
        (this.factory.running = !0), this._createTimer(e), this.callback(this.callbacks.start);
      },
      stop: function (e) {
        (this.factory.running = !1), this._clearInterval(e), this.callback(this.callbacks.stop), this.callback(e);
      },
      _clearInterval: function () {
        clearInterval(this.timer);
      },
      _createTimer: function (e) {
        this._setInterval(e);
      },
      _destroyTimer: function (e) {
        this._clearInterval(), (this.timer = !1), this.callback(e), this.callback(this.callbacks.destroy);
      },
      _interval: function (e) {
        this.callback(this.callbacks.interval), this.callback(e), this.count++;
      },
      _setInterval: function (e) {
        var t = this;
        t._interval(e),
          (t.timer = setInterval(function () {
            t._interval(e);
          }, this.interval));
      },
    });
  })(jQuery),
  (function (e) {
    _FlipClock.TwentyFourHourClockFace = _FlipClock.Face.extend({
      constructor: function (e, t) {
        this.base(e, t);
      },
      build: function (t) {
        var i = this,
          a = this.factory.$el.find('ul');
        this.factory.time.time ||
          ((this.factory.original = new Date()),
          (this.factory.time = new _FlipClock.Time(this.factory, this.factory.original)));
        var t = t ? t : this.factory.time.getMilitaryTime(!1, this.showSeconds);
        t.length > a.length &&
          e.each(t, function (e, t) {
            i.createList(t);
          }),
          this.createDivider(),
          this.createDivider(),
          e(this.dividers[0]).insertBefore(this.lists[this.lists.length - 2].$el),
          e(this.dividers[1]).insertBefore(this.lists[this.lists.length - 4].$el),
          this.base();
      },
      flip: function (e, t) {
        this.autoIncrement(), (e = e ? e : this.factory.time.getMilitaryTime(!1, this.showSeconds)), this.base(e, t);
      },
    });
  })(jQuery),
  (function (e) {
    _FlipClock.CounterFace = _FlipClock.Face.extend({
      shouldAutoIncrement: !1,
      constructor: function (e, t) {
        'object' != _typeof(t) && (t = {}),
          (e.autoStart = !!t.autoStart),
          t.autoStart && (this.shouldAutoIncrement = !0),
          (e.increment = function () {
            (e.countdown = !1), e.setTime(e.getTime().getTimeSeconds() + 1);
          }),
          (e.decrement = function () {
            e.countdown = !0;
            var t = e.getTime().getTimeSeconds();
            0 < t && e.setTime(t - 1);
          }),
          (e.setValue = function (t) {
            e.setTime(t);
          }),
          (e.setCounter = function (t) {
            e.setTime(t);
          }),
          this.base(e, t);
      },
      build: function () {
        var t = this,
          i = this.factory.$el.find('ul'),
          a = this.factory.getTime().digitize([this.factory.getTime().time]);
        a.length > i.length &&
          e.each(a, function (e, i) {
            var a = t.createList(i);
            a.select(i);
          }),
          e.each(this.lists, function (e, t) {
            t.play();
          }),
          this.base();
      },
      flip: function (e, t) {
        this.shouldAutoIncrement && this.autoIncrement(),
          e || (e = this.factory.getTime().digitize([this.factory.getTime().time])),
          this.base(e, t);
      },
      reset: function () {
        (this.factory.time = new _FlipClock.Time(
          this.factory,
          this.factory.original ? Math.round(this.factory.original) : 0
        )),
          this.flip();
      },
    });
  })(jQuery),
  (function (t) {
    _FlipClock.DailyCounterFace = _FlipClock.Face.extend({
      showSeconds: !0,
      constructor: function (e, t) {
        this.base(e, t);
      },
      build: function (i) {
        var s = this,
          a = this.factory.$el.find('ul'),
          o = 0;
        (i = i ? i : this.factory.time.getDayCounter(this.showSeconds)),
          i.length > a.length &&
            t.each(i, function (e, t) {
              s.createList(t);
            }),
          this.showSeconds
            ? t(this.createDivider('Seconds')).insertBefore(this.lists[this.lists.length - 2].$el)
            : (o = 2),
          t(this.createDivider('Minutes')).insertBefore(this.lists[this.lists.length - 4 + o].$el),
          t(this.createDivider('Hours')).insertBefore(this.lists[this.lists.length - 6 + o].$el),
          t(this.createDivider('Days', !0)).insertBefore(this.lists[0].$el),
          this.base();
      },
      flip: function (e, t) {
        e || (e = this.factory.time.getDayCounter(this.showSeconds)), this.autoIncrement(), this.base(e, t);
      },
    });
  })(jQuery),
  (function (t) {
    _FlipClock.HourlyCounterFace = _FlipClock.Face.extend({
      constructor: function (e, t) {
        this.base(e, t);
      },
      build: function (i, a) {
        var s = this,
          o = this.factory.$el.find('ul');
        (a = a ? a : this.factory.time.getHourCounter()),
          a.length > o.length &&
            t.each(a, function (e, t) {
              s.createList(t);
            }),
          t(this.createDivider('Seconds')).insertBefore(this.lists[this.lists.length - 2].$el),
          t(this.createDivider('Minutes')).insertBefore(this.lists[this.lists.length - 4].$el),
          i || t(this.createDivider('Hours', !0)).insertBefore(this.lists[0].$el),
          this.base();
      },
      flip: function (e, t) {
        e || (e = this.factory.time.getHourCounter()), this.autoIncrement(), this.base(e, t);
      },
      appendDigitToClock: function (e) {
        this.base(e), this.dividers[0].insertAfter(this.dividers[0].next());
      },
    });
  })(jQuery),
  (function () {
    _FlipClock.MinuteCounterFace = _FlipClock.HourlyCounterFace.extend({
      clearExcessDigits: !1,
      constructor: function (e, t) {
        this.base(e, t);
      },
      build: function () {
        this.base(!0, this.factory.time.getMinuteCounter());
      },
      flip: function (e, t) {
        e || (e = this.factory.time.getMinuteCounter()), this.base(e, t);
      },
    });
  })(jQuery),
  (function (e) {
    _FlipClock.TwelveHourClockFace = _FlipClock.TwentyFourHourClockFace.extend({
      meridium: !1,
      meridiumText: 'AM',
      build: function () {
        var t = this.factory.time.getTime(!1, this.showSeconds);
        this.base(t),
          (this.meridiumText = this.getMeridium()),
          (this.meridium = e(
            [
              '<ul class="flip-clock-meridium">',
              '<li>',
              '<a href="#">' + this.meridiumText + '</a>',
              '</li>',
              '</ul>',
            ].join('')
          )),
          this.meridium.insertAfter(this.lists[this.lists.length - 1].$el);
      },
      flip: function (e, t) {
        this.meridiumText != this.getMeridium() &&
          ((this.meridiumText = this.getMeridium()), this.meridium.find('a').html(this.meridiumText)),
          this.base(this.factory.time.getTime(!1, this.showSeconds), t);
      },
      getMeridium: function () {
        return 12 <= new Date().getHours() ? 'PM' : 'AM';
      },
      isPM: function () {
        return !('PM' != this.getMeridium());
      },
      isAM: function () {
        return !('AM' != this.getMeridium());
      },
    });
  })(jQuery),
  (function () {
    (_FlipClock.Lang.Arabic = {
      years: '\u0633\u0646\u0648\u0627\u062A',
      months: '\u0634\u0647\u0648\u0631',
      days: '\u0623\u064A\u0627\u0645',
      hours: '\u0633\u0627\u0639\u0627\u062A',
      minutes: '\u062F\u0642\u0627\u0626\u0642',
      seconds: '\u062B\u0648\u0627\u0646\u064A',
    }),
      (_FlipClock.Lang.ar = _FlipClock.Lang.Arabic),
      (_FlipClock.Lang['ar-ar'] = _FlipClock.Lang.Arabic),
      (_FlipClock.Lang.arabic = _FlipClock.Lang.Arabic);
  })(jQuery),
  (function () {
    (_FlipClock.Lang.Danish = {
      years: '\xC5r',
      months: 'M\xE5neder',
      days: 'Dage',
      hours: 'Timer',
      minutes: 'Minutter',
      seconds: 'Sekunder',
    }),
      (_FlipClock.Lang.da = _FlipClock.Lang.Danish),
      (_FlipClock.Lang['da-dk'] = _FlipClock.Lang.Danish),
      (_FlipClock.Lang.danish = _FlipClock.Lang.Danish);
  })(jQuery),
  (function () {
    (_FlipClock.Lang.German = {
      years: 'Jahre',
      months: 'Monate',
      days: 'Tage',
      hours: 'Stunden',
      minutes: 'Minuten',
      seconds: 'Sekunden',
    }),
      (_FlipClock.Lang.de = _FlipClock.Lang.German),
      (_FlipClock.Lang['de-de'] = _FlipClock.Lang.German),
      (_FlipClock.Lang.german = _FlipClock.Lang.German);
  })(jQuery),
  (function () {
    (_FlipClock.Lang.English = {
      years: 'Years',
      months: 'Months',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
    }),
      (_FlipClock.Lang.en = _FlipClock.Lang.English),
      (_FlipClock.Lang['en-us'] = _FlipClock.Lang.English),
      (_FlipClock.Lang.english = _FlipClock.Lang.English);
  })(jQuery),
  (function () {
    (_FlipClock.Lang.Spanish = {
      years: 'A\xF1os',
      months: 'Meses',
      days: 'D\xEDas',
      hours: 'Horas',
      minutes: 'Minutos',
      seconds: 'Segundos',
    }),
      (_FlipClock.Lang.es = _FlipClock.Lang.Spanish),
      (_FlipClock.Lang['es-es'] = _FlipClock.Lang.Spanish),
      (_FlipClock.Lang.spanish = _FlipClock.Lang.Spanish);
  })(jQuery),
  (function () {
    (_FlipClock.Lang.Finnish = {
      years: 'Vuotta',
      months: 'Kuukautta',
      days: 'P\xE4iv\xE4\xE4',
      hours: 'Tuntia',
      minutes: 'Minuuttia',
      seconds: 'Sekuntia',
    }),
      (_FlipClock.Lang.fi = _FlipClock.Lang.Finnish),
      (_FlipClock.Lang['fi-fi'] = _FlipClock.Lang.Finnish),
      (_FlipClock.Lang.finnish = _FlipClock.Lang.Finnish);
  })(jQuery),
  (function () {
    (_FlipClock.Lang.French = {
      years: 'Ans',
      months: 'Mois',
      days: 'Jours',
      hours: 'Heures',
      minutes: 'Minutes',
      seconds: 'Secondes',
    }),
      (_FlipClock.Lang.fr = _FlipClock.Lang.French),
      (_FlipClock.Lang['fr-ca'] = _FlipClock.Lang.French),
      (_FlipClock.Lang.french = _FlipClock.Lang.French);
  })(jQuery),
  (function () {
    (_FlipClock.Lang.Italian = {
      years: 'Anni',
      months: 'Mesi',
      days: 'Giorni',
      hours: 'Ore',
      minutes: 'Minuti',
      seconds: 'Secondi',
    }),
      (_FlipClock.Lang.it = _FlipClock.Lang.Italian),
      (_FlipClock.Lang['it-it'] = _FlipClock.Lang.Italian),
      (_FlipClock.Lang.italian = _FlipClock.Lang.Italian);
  })(jQuery),
  (function () {
    (_FlipClock.Lang.Latvian = {
      years: 'Gadi',
      months: 'M\u0113ne\u0161i',
      days: 'Dienas',
      hours: 'Stundas',
      minutes: 'Min\u016Btes',
      seconds: 'Sekundes',
    }),
      (_FlipClock.Lang.lv = _FlipClock.Lang.Latvian),
      (_FlipClock.Lang['lv-lv'] = _FlipClock.Lang.Latvian),
      (_FlipClock.Lang.latvian = _FlipClock.Lang.Latvian);
  })(jQuery),
  (function () {
    (_FlipClock.Lang.Dutch = {
      years: 'Jaren',
      months: 'Maanden',
      days: 'Dagen',
      hours: 'Uren',
      minutes: 'Minuten',
      seconds: 'Seconden',
    }),
      (_FlipClock.Lang.nl = _FlipClock.Lang.Dutch),
      (_FlipClock.Lang['nl-be'] = _FlipClock.Lang.Dutch),
      (_FlipClock.Lang.dutch = _FlipClock.Lang.Dutch);
  })(jQuery),
  (function () {
    (_FlipClock.Lang.Norwegian = {
      years: '\xC5r',
      months: 'M\xE5neder',
      days: 'Dager',
      hours: 'Timer',
      minutes: 'Minutter',
      seconds: 'Sekunder',
    }),
      (_FlipClock.Lang.no = _FlipClock.Lang.Norwegian),
      (_FlipClock.Lang.nb = _FlipClock.Lang.Norwegian),
      (_FlipClock.Lang['no-nb'] = _FlipClock.Lang.Norwegian),
      (_FlipClock.Lang.norwegian = _FlipClock.Lang.Norwegian);
  })(jQuery),
  (function () {
    (_FlipClock.Lang.Portuguese = {
      years: 'Anos',
      months: 'Meses',
      days: 'Dias',
      hours: 'Horas',
      minutes: 'Minutos',
      seconds: 'Segundos',
    }),
      (_FlipClock.Lang.pt = _FlipClock.Lang.Portuguese),
      (_FlipClock.Lang['pt-br'] = _FlipClock.Lang.Portuguese),
      (_FlipClock.Lang.portuguese = _FlipClock.Lang.Portuguese);
  })(jQuery),
  (function () {
    (_FlipClock.Lang.Russian = {
      years: '\u043B\u0435\u0442',
      months: '\u043C\u0435\u0441\u044F\u0446\u0435\u0432',
      days: '\u0434\u043D\u0435\u0439',
      hours: '\u0447\u0430\u0441\u043E\u0432',
      minutes: '\u043C\u0438\u043D\u0443\u0442',
      seconds: '\u0441\u0435\u043A\u0443\u043D\u0434',
    }),
      (_FlipClock.Lang.ru = _FlipClock.Lang.Russian),
      (_FlipClock.Lang['ru-ru'] = _FlipClock.Lang.Russian),
      (_FlipClock.Lang.russian = _FlipClock.Lang.Russian);
  })(jQuery),
  (function () {
    (_FlipClock.Lang.Swedish = {
      years: '\xC5r',
      months: 'M\xE5nader',
      days: 'Dagar',
      hours: 'Timmar',
      minutes: 'Minuter',
      seconds: 'Sekunder',
    }),
      (_FlipClock.Lang.sv = _FlipClock.Lang.Swedish),
      (_FlipClock.Lang['sv-se'] = _FlipClock.Lang.Swedish),
      (_FlipClock.Lang.swedish = _FlipClock.Lang.Swedish);
  })(jQuery),
  (function () {
    (_FlipClock.Lang.Chinese = {
      years: '\u5E74',
      months: '\u6708',
      days: '\u65E5',
      hours: '\u65F6',
      minutes: '\u5206',
      seconds: '\u79D2',
    }),
      (_FlipClock.Lang.zh = _FlipClock.Lang.Chinese),
      (_FlipClock.Lang['zh-cn'] = _FlipClock.Lang.Chinese),
      (_FlipClock.Lang.chinese = _FlipClock.Lang.Chinese);
  })(jQuery);
