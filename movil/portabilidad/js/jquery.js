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
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */
/* @preserve
 * The MIT License (MIT)
 *
 * Copyright (c) 2013-2017 Petka Antonov
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
(function (e, t) {
  'object' === ('undefined' == typeof module ? 'undefined' : _typeof(module)) && 'object' === _typeof(module.exports)
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document) throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' == typeof window ? void 0 : window, function (t, n) {
  var o = String.fromCharCode,
    a = Math.max;

  function isArrayLike(e) {
    var t = !!e && 'length' in e && e.length,
      n = g.type(e);
    return (
      !('function' === n || g.isWindow(e)) &&
      ('array' === n || 0 === t || ('number' == typeof t && 0 < t && t - 1 in e))
    );
  }

  function winnow(e, t, n) {
    if (g.isFunction(t))
      return g.grep(e, function (e, o) {
        return !!t.call(e, o, e) !== n;
      });
    if (t.nodeType)
      return g.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ('string' == typeof t) {
      if (E.test(t)) return g.filter(t, e, n);
      t = g.filter(t, e);
    }
    return g.grep(e, function (e) {
      return -1 < g.inArray(e, t) !== n;
    });
  }

  function sibling(e, t) {
    do e = e[t];
    while (e && 1 !== e.nodeType);
    return e;
  }

  function createOptions(e) {
    var t = {};
    return (
      g.each(e.match(D) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }

  function detach() {
    l.addEventListener
      ? (l.removeEventListener('DOMContentLoaded', completed), t.removeEventListener('load', completed))
      : (l.detachEvent('onreadystatechange', completed), t.detachEvent('onload', completed));
  }

  function completed() {
    (l.addEventListener || 'load' === t.event.type || 'complete' === l.readyState) && (detach(), g.ready());
  }

  function dataAttr(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var o = 'data-' + t.replace(O, '-$1').toLowerCase();
      if (((n = e.getAttribute(o)), 'string' == typeof n)) {
        try {
          n =
            'true' === n ||
            ('false' !== n && ('null' === n ? null : +n + '' === n ? +n : i.test(n) ? g.parseJSON(n) : n));
        } catch (t) {}
        g.data(e, t, n);
      } else n = void 0;
    }
    return n;
  }

  function isEmptyDataObject(e) {
    for (var t in e) if (!('data' === t && g.isEmptyObject(e[t])) && 'toJSON' !== t) return !1;
    return !0;
  }

  function internalData(t, n, o, a) {
    if (e(t)) {
      var i = g.expando,
        l = t.nodeType,
        s = l ? g.cache : t,
        d = l ? t[i] : t[i] && i,
        p,
        c;
      if ((d && s[d] && (a || s[d].data)) || void 0 !== o || 'string' != typeof n)
        return (
          d || (l ? (d = t[i] = r.pop() || g.guid++) : (d = i)),
          s[d] ||
            (s[d] = l
              ? {}
              : {
                  toJSON: g.noop,
                }),
          ('object' === _typeof(n) || 'function' == typeof n) &&
            (a ? (s[d] = g.extend(s[d], n)) : (s[d].data = g.extend(s[d].data, n))),
          (c = s[d]),
          a || (!c.data && (c.data = {}), (c = c.data)),
          void 0 !== o && (c[g.camelCase(n)] = o),
          'string' == typeof n ? ((p = c[n]), null == p && (p = c[g.camelCase(n)])) : (p = c),
          p
        );
    }
  }

  function internalRemoveData(t, n, o) {
    if (e(t)) {
      var a = t.nodeType,
        r = a ? g.cache : t,
        l = a ? t[g.expando] : g.expando,
        s,
        d;
      if (r[l]) {
        if (n && ((s = o ? r[l] : r[l].data), s)) {
          for (
            g.isArray(n)
              ? (n = n.concat(g.map(n, g.camelCase)))
              : (n in s)
              ? (n = [n])
              : ((n = g.camelCase(n)), (n = (n in s) ? [n] : n.split(' '))),
              d = n.length;
            d--;

          )
            delete s[n[d]];
          if (o ? !isEmptyDataObject(s) : !g.isEmptyObject(s)) return;
        }
        (!o && (delete r[l].data, !isEmptyDataObject(r[l]))) ||
          (a ? g.cleanData([t], !0) : y.deleteExpando || r != r.window ? delete r[l] : (r[l] = void 0));
      }
    }
  }

  function adjustCSS(e, t, n, o) {
    var a = 1,
      r = 20,
      i = o
        ? function () {
            return o.cur();
          }
        : function () {
            return g.css(e, t, '');
          },
      l = i(),
      s = (n && n[3]) || (g.cssNumber[t] ? '' : 'px'),
      d = (g.cssNumber[t] || ('px' !== s && +l)) && B.exec(g.css(e, t)),
      p;
    if (d && d[3] !== s) {
      (s = s || d[3]), (n = n || []), (d = +l || 1);
      do (a = a || '.5'), (d /= a), g.style(e, t, d + s);
      while (a !== (a = i() / l) && 1 !== a && --r);
    }
    return (
      n &&
        ((d = +d || +l || 0),
        (p = n[1] ? d + (n[1] + 1) * n[2] : +n[2]),
        o && ((o.unit = s), (o.start = d), (o.end = p))),
      p
    );
  }

  function createSafeFragment(e) {
    var t = [
        'abbr',
        'article',
        'aside',
        'audio',
        'bdi',
        'canvas',
        'data',
        'datalist',
        'details',
        'dialog',
        'figcaption',
        'figure',
        'footer',
        'header',
        'hgroup',
        'main',
        'mark',
        'meter',
        'nav',
        'output',
        'picture',
        'progress',
        'section',
        'summary',
        'template',
        'time',
        'video',
      ],
      n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n;
  }

  function getAll(e, t) {
    var n = 0,
      o =
        'undefined' == typeof e.getElementsByTagName
          ? 'undefined' == typeof e.querySelectorAll
            ? void 0
            : e.querySelectorAll(t || '*')
          : e.getElementsByTagName(t || '*'),
      a,
      r;
    if (!o)
      for (o = [], a = e.childNodes || e; null != (r = a[n]); n++)
        !t || g.nodeName(r, t) ? o.push(r) : g.merge(o, getAll(r, t));
    return void 0 === t || (t && g.nodeName(e, t)) ? g.merge([e], o) : o;
  }

  function setGlobalEval(e, t) {
    for (var n = 0, o; null != (o = e[n]); n++) g._data(o, 'globalEval', !t || g._data(t[n], 'globalEval'));
  }

  function fixDefaultChecked(e) {
    U.test(e.type) && (e.defaultChecked = e.checked);
  }

  function buildFragment(e, t, n, o, a) {
    for (var r = e.length, l = createSafeFragment(t), s = [], d = 0, p, c, u, m, h, f, _; d < r; d++)
      if (((c = e[d]), c || 0 === c))
        if ('object' === g.type(c)) g.merge(s, c.nodeType ? [c] : c);
        else if (!$.test(c)) s.push(t.createTextNode(c));
        else {
          for (
            m = m || l.appendChild(t.createElement('div')),
              h = (V.exec(c) || ['', ''])[1].toLowerCase(),
              _ = X[h] || X._default,
              m.innerHTML = _[1] + g.htmlPrefilter(c) + _[2],
              p = _[0];
            p--;

          )
            m = m.lastChild;
          if ((!y.leadingWhitespace && z.test(c) && s.push(t.createTextNode(z.exec(c)[0])), !y.tbody))
            for (
              c = 'table' !== h || Q.test(c) ? ('<table>' !== _[1] || Q.test(c) ? 0 : m) : m.firstChild,
                p = c && c.childNodes.length;
              p--;

            )
              g.nodeName((f = c.childNodes[p]), 'tbody') && !f.childNodes.length && c.removeChild(f);
          for (g.merge(s, m.childNodes), m.textContent = ''; m.firstChild; ) m.removeChild(m.firstChild);
          m = l.lastChild;
        }
    for (
      m && l.removeChild(m), y.appendChecked || g.grep(getAll(s, 'input'), fixDefaultChecked), d = 0;
      (c = s[d++]);

    ) {
      if (o && -1 < g.inArray(c, o)) {
        a && a.push(c);
        continue;
      }
      if (((u = g.contains(c.ownerDocument, c)), (m = getAll(l.appendChild(c), 'script')), u && setGlobalEval(m), n))
        for (p = 0; (c = m[p++]); ) W.test(c.type || '') && n.push(c);
    }
    return (m = null), l;
  }

  function returnTrue() {
    return !0;
  }

  function returnFalse() {
    return !1;
  }

  function safeActiveElement() {
    try {
      return l.activeElement;
    } catch (e) {}
  }

  function _on(e, t, n, o, a, r) {
    var i, l;
    if ('object' === _typeof(t)) {
      for (l in ('string' != typeof n && ((o = o || n), (n = void 0)), t)) _on(e, l, n, o, t[l], r);
      return e;
    }
    if (
      (null == o && null == a
        ? ((a = n), (o = n = void 0))
        : null == a && ('string' == typeof n ? ((a = o), (o = void 0)) : ((a = o), (o = n), (n = void 0))),
      !1 === a)
    )
      a = returnFalse;
    else if (!a) return e;
    return (
      1 === r &&
        ((i = a),
        (a = function (e) {
          return g().off(e), i.apply(this, arguments);
        }),
        (a.guid = i.guid || (i.guid = g.guid++))),
      e.each(function () {
        g.event.add(this, t, a, o, n);
      })
    );
  }

  function manipulationTarget(e, t) {
    return g.nodeName(e, 'table') && g.nodeName(11 === t.nodeType ? t.firstChild : t, 'tr')
      ? e.getElementsByTagName('tbody')[0] || e.appendChild(e.ownerDocument.createElement('tbody'))
      : e;
  }

  function disableScript(e) {
    return (e.type = (null !== g.find.attr(e, 'type')) + '/' + e.type), e;
  }

  function restoreScript(e) {
    var t = re.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute('type'), e;
  }

  function cloneCopyEvent(e, t) {
    if (1 === t.nodeType && g.hasData(e)) {
      var n = g._data(e),
        o = g._data(t, n),
        a = n.events,
        r,
        s,
        d;
      if (a)
        for (r in (delete o.handle, (o.events = {}), a))
          for (s = 0, d = a[r].length; s < d; s++) g.event.add(t, r, a[r][s]);
      o.data && (o.data = g.extend({}, o.data));
    }
  }

  function fixCloneNodeIssues(t, n) {
    var o, a, r;
    if (1 === n.nodeType) {
      if (((o = n.nodeName.toLowerCase()), !y.noCloneEvent && n[g.expando])) {
        for (a in ((r = g._data(n)), r.events)) g.removeEvent(n, a, r.handle);
        n.removeAttribute(g.expando);
      }
      'script' === o && n.text !== t.text
        ? ((disableScript(n).text = t.text), restoreScript(n))
        : 'object' === o
        ? (n.parentNode && (n.outerHTML = t.outerHTML),
          y.html5Clone && t.innerHTML && !g.trim(n.innerHTML) && (n.innerHTML = t.innerHTML))
        : 'input' === o && U.test(t.type)
        ? ((n.defaultChecked = n.checked = t.checked), n.value !== t.value && (n.value = t.value))
        : 'option' === o
        ? (n.defaultSelected = n.selected = t.defaultSelected)
        : ('input' === o || 'textarea' === o) && (n.defaultValue = t.defaultValue);
    }
  }

  function domManip(e, t, n, o) {
    t = d.apply([], t);
    var a = 0,
      r = e.length,
      l = t[0],
      s = g.isFunction(l),
      p,
      c,
      u,
      m,
      h,
      f;
    if (s || (1 < r && 'string' == typeof l && !y.checkClone && ae.test(l)))
      return e.each(function (a) {
        var r = e.eq(a);
        s && (t[0] = l.call(this, a, r.html())), domManip(r, t, n, o);
      });
    if (
      r &&
      ((f = buildFragment(t, e[0].ownerDocument, !1, e, o)),
      (p = f.firstChild),
      1 === f.childNodes.length && (f = p),
      p || o)
    ) {
      for (m = g.map(getAll(f, 'script'), disableScript), u = m.length; a < r; a++)
        (c = f), a !== r - 1 && ((c = g.clone(c, !0, !0)), u && g.merge(m, getAll(c, 'script'))), n.call(e[a], c, a);
      if (u)
        for (h = m[m.length - 1].ownerDocument, g.map(m, restoreScript), a = 0; a < u; a++)
          (c = m[a]),
            W.test(c.type || '') &&
              !g._data(c, 'globalEval') &&
              g.contains(h, c) &&
              (c.src
                ? g._evalUrl && g._evalUrl(c.src)
                : g.globalEval((c.text || c.textContent || c.innerHTML || '').replace(ie, '')));
      f = p = null;
    }
    return e;
  }

  function _remove(e, t, n) {
    for (var o = t ? g.filter(t, e) : e, a = 0, r; null != (r = o[a]); a++)
      n || 1 !== r.nodeType || g.cleanData(getAll(r)),
        r.parentNode &&
          (n && g.contains(r.ownerDocument, r) && setGlobalEval(getAll(r, 'script')), r.parentNode.removeChild(r));
    return e;
  }

  function actualDisplay(e, t) {
    var n = g(t.createElement(e)).appendTo(t.body),
      o = g.css(n[0], 'display');
    return n.detach(), o;
  }

  function defaultDisplay(e) {
    var t = l,
      n = de[e];
    return (
      n ||
        ((n = actualDisplay(e, t)),
        ('none' === n || !n) &&
          ((he = (he || g("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement)),
          (t = (he[0].contentWindow || he[0].contentDocument).document),
          t.write(),
          t.close(),
          (n = actualDisplay(e, t)),
          he.detach()),
        (de[e] = n)),
      n
    );
  }

  function addGetHookIf(e, t) {
    return {
      get: function () {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
      },
    };
  }

  function vendorPropName(e) {
    if (e in je) return e;
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = ke.length; n--; ) if (((e = ke[n] + t), e in je)) return e;
  }

  function showHide(e, t) {
    for (var n = [], o = 0, a = e.length, r, i, l; o < a; o++)
      ((i = e[o]), !!i.style) &&
        ((n[o] = g._data(i, 'olddisplay')),
        (r = i.style.display),
        t
          ? (!n[o] && 'none' === r && (i.style.display = ''),
            '' === i.style.display && I(i) && (n[o] = g._data(i, 'olddisplay', defaultDisplay(i.nodeName))))
          : ((l = I(i)), ((r && 'none' !== r) || !l) && g._data(i, 'olddisplay', l ? r : g.css(i, 'display'))));
    for (o = 0; o < a; o++)
      ((i = e[o]), !!i.style) &&
        ((t && 'none' !== i.style.display && '' !== i.style.display) || (i.style.display = t ? n[o] || '' : 'none'));
    return e;
  }

  function setPositiveNumber(e, t, n) {
    var o = ve.exec(t);
    return o ? a(0, o[1] - (n || 0)) + (o[2] || 'px') : t;
  }

  function augmentWidthOrHeight(e, t, n, o, a) {
    for (var r = n === (o ? 'border' : 'content') ? 4 : 'width' === t ? 1 : 0, l = 0; 4 > r; r += 2)
      'margin' === n && (l += g.css(e, n + q[r], !0, a)),
        o
          ? ('content' === n && (l -= g.css(e, 'padding' + q[r], !0, a)),
            'margin' !== n && (l -= g.css(e, 'border' + q[r] + 'Width', !0, a)))
          : ((l += g.css(e, 'padding' + q[r], !0, a)),
            'padding' !== n && (l += g.css(e, 'border' + q[r] + 'Width', !0, a)));
    return l;
  }

  function getWidthOrHeight(e, t, n) {
    var o = !0,
      a = 'width' === t ? e.offsetWidth : e.offsetHeight,
      r = fe(e),
      i = y.boxSizing && 'border-box' === g.css(e, 'boxSizing', !1, r);
    if (0 >= a || null == a) {
      if (((a = ge(e, t, r)), (0 > a || null == a) && (a = e.style[t]), ce.test(a))) return a;
      (o = i && (y.boxSizingReliable() || a === e.style[t])), (a = parseFloat(a) || 0);
    }
    return a + augmentWidthOrHeight(e, t, n || (i ? 'border' : 'content'), o, r) + 'px';
  }

  function Tween(e, t, n, o, a) {
    return new Tween.prototype.init(e, t, n, o, a);
  }

  function createFxNow() {
    return (
      t.setTimeout(function () {
        Se = void 0;
      }),
      (Se = g.now())
    );
  }

  function genFx(e, t) {
    var n = {
        height: e,
      },
      o = 0,
      a;
    for (t = t ? 1 : 0; 4 > o; o += 2 - t) (a = q[o]), (n['margin' + a] = n['padding' + a] = e);
    return t && (n.opacity = n.width = e), n;
  }

  function createTween(e, t, n) {
    for (var o = (Animation.tweeners[t] || []).concat(Animation.tweeners['*']), a = 0, r = o.length, i; a < r; a++)
      if ((i = o[a].call(n, t, e))) return i;
  }

  function defaultPrefilter(e, t, n) {
    var o = this,
      a = {},
      r = e.style,
      i = e.nodeType && I(e),
      l = g._data(e, 'fxshow'),
      s,
      d,
      p,
      c,
      u,
      m,
      h,
      f;
    for (s in (n.queue ||
      ((u = g._queueHooks(e, 'fx')),
      null == u.unqueued &&
        ((u.unqueued = 0),
        (m = u.empty.fire),
        (u.empty.fire = function () {
          u.unqueued || m();
        })),
      u.unqueued++,
      o.always(function () {
        o.always(function () {
          u.unqueued--, g.queue(e, 'fx').length || u.empty.fire();
        });
      })),
    1 === e.nodeType &&
      ('height' in t || 'width' in t) &&
      ((n.overflow = [r.overflow, r.overflowX, r.overflowY]),
      (h = g.css(e, 'display')),
      (f = 'none' === h ? g._data(e, 'olddisplay') || defaultDisplay(e.nodeName) : h),
      'inline' === f &&
        'none' === g.css(e, 'float') &&
        (y.inlineBlockNeedsLayout && 'inline' !== defaultDisplay(e.nodeName)
          ? (r.zoom = 1)
          : (r.display = 'inline-block'))),
    n.overflow &&
      ((r.overflow = 'hidden'),
      !y.shrinkWrapBlocks() &&
        o.always(function () {
          (r.overflow = n.overflow[0]), (r.overflowX = n.overflow[1]), (r.overflowY = n.overflow[2]);
        })),
    t))
      if (((d = t[s]), we.exec(d))) {
        if ((delete t[s], (p = p || 'toggle' === d), d === (i ? 'hide' : 'show')))
          if ('show' === d && l && void 0 !== l[s]) i = !0;
          else continue;
        a[s] = (l && l[s]) || g.style(e, s);
      } else h = void 0;
    if (!g.isEmptyObject(a))
      for (s in (l ? 'hidden' in l && (i = l.hidden) : (l = g._data(e, 'fxshow', {})),
      p && (l.hidden = !i),
      i
        ? g(e).show()
        : o.done(function () {
            g(e).hide();
          }),
      o.done(function () {
        for (var t in (g._removeData(e, 'fxshow'), a)) g.style(e, t, a[t]);
      }),
      a))
        (c = createTween(i ? l[s] : 0, s, o)),
          s in l || ((l[s] = c.start), i && ((c.end = c.start), (c.start = 'width' === s || 'height' === s ? 1 : 0)));
    else 'inline' === ('none' === h ? defaultDisplay(e.nodeName) : h) && (r.display = h);
  }

  function propFilter(e, t) {
    var n, o, a, r, i;
    for (n in e)
      if (
        ((o = g.camelCase(n)),
        (a = t[o]),
        (r = e[n]),
        g.isArray(r) && ((a = r[1]), (r = e[n] = r[0])),
        n !== o && ((e[o] = r), delete e[n]),
        (i = g.cssHooks[o]),
        i && 'expand' in i)
      )
        for (n in ((r = i.expand(r)), delete e[o], r)) n in e || ((e[n] = r[n]), (t[n] = a));
      else t[o] = a;
  }

  function Animation(e, t, n) {
    var o = 0,
      r = Animation.prefilters.length,
      i = g.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (c) return !1;
        for (
          var t = Se || createFxNow(),
            n = a(0, s.startTime + s.duration - t),
            o = n / s.duration || 0,
            r = 1 - o,
            l = 0,
            d = s.tweens.length;
          l < d;
          l++
        )
          s.tweens[l].run(r);
        return i.notifyWith(e, [s, r, n]), 1 > r && d ? n : (i.resolveWith(e, [s]), !1);
      },
      s = i.promise({
        elem: e,
        props: g.extend({}, t),
        opts: g.extend(
          !0,
          {
            specialEasing: {},
            easing: g.easing._default,
          },
          n
        ),
        originalProperties: t,
        originalOptions: n,
        startTime: Se || createFxNow(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var o = g.Tween(e, s.opts, t, n, s.opts.specialEasing[t] || s.opts.easing);
          return s.tweens.push(o), o;
        },
        stop: function (t) {
          var n = 0,
            o = t ? s.tweens.length : 0;
          if (c) return this;
          for (c = !0; n < o; n++) s.tweens[n].run(1);
          return t ? (i.notifyWith(e, [s, 1, 0]), i.resolveWith(e, [s, t])) : i.rejectWith(e, [s, t]), this;
        },
      }),
      d = s.props,
      p,
      c;
    for (propFilter(d, s.opts.specialEasing); o < r; o++)
      if (((p = Animation.prefilters[o].call(s, e, d, s.opts)), p))
        return g.isFunction(p.stop) && (g._queueHooks(s.elem, s.opts.queue).stop = g.proxy(p.stop, p)), p;
    return (
      g.map(d, createTween, s),
      g.isFunction(s.opts.start) && s.opts.start.call(e, s),
      g.fx.timer(
        g.extend(l, {
          elem: e,
          anim: s,
          queue: s.opts.queue,
        })
      ),
      s.progress(s.opts.progress).done(s.opts.done, s.opts.complete).fail(s.opts.fail).always(s.opts.always)
    );
  }

  function getClass(e) {
    return g.attr(e, 'class') || '';
  }

  function addToPrefiltersOrTransports(e) {
    return function (t, n) {
      'string' != typeof t && ((n = t), (t = '*'));
      var o = 0,
        a = t.toLowerCase().match(D) || [],
        r;
      if (g.isFunction(n))
        for (; (r = a[o++]); )
          '+' === r.charAt(0) ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
    };
  }

  function inspectPrefiltersOrTransports(e, t, n, o) {
    function inspect(i) {
      var l;
      return (
        (a[i] = !0),
        g.each(e[i] || [], function (e, i) {
          var s = i(t, n, o);
          return 'string' != typeof s || r || a[s] ? (r ? !(l = s) : void 0) : (t.dataTypes.unshift(s), inspect(s), !1);
        }),
        l
      );
    }
    var a = {},
      r = e === Ze;
    return inspect(t.dataTypes[0]) || (!a['*'] && inspect('*'));
  }

  function ajaxExtend(e, t) {
    var n = g.ajaxSettings.flatOptions || {},
      o,
      a;
    for (a in t) void 0 !== t[a] && ((n[a] ? e : o || (o = {}))[a] = t[a]);
    return o && g.extend(!0, e, o), e;
  }

  function ajaxHandleResponses(e, t, n) {
    for (var o = e.contents, a = e.dataTypes, r, i, l, s; '*' === a[0]; )
      a.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader('Content-Type'));
    if (i)
      for (s in o)
        if (o[s] && o[s].test(i)) {
          a.unshift(s);
          break;
        }
    if (a[0] in n) l = a[0];
    else {
      for (s in n) {
        if (!a[0] || e.converters[s + ' ' + a[0]]) {
          l = s;
          break;
        }
        r || (r = s);
      }
      l = l || r;
    }
    return l ? (l !== a[0] && a.unshift(l), n[l]) : void 0;
  }

  function ajaxConvert(e, t, n, o) {
    var a = {},
      r = e.dataTypes.slice(),
      i,
      l,
      s,
      d,
      p;
    if (r[1]) for (s in e.converters) a[s.toLowerCase()] = e.converters[s];
    for (l = r.shift(); l; )
      if (
        (e.responseFields[l] && (n[e.responseFields[l]] = t),
        !p && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (p = l),
        (l = r.shift()),
        l)
      )
        if ('*' === l) l = p;
        else if ('*' !== p && p !== l) {
          if (((s = a[p + ' ' + l] || a['* ' + l]), !s))
            for (i in a)
              if (((d = i.split(' ')), d[1] === l && ((s = a[p + ' ' + d[0]] || a['* ' + d[0]]), s))) {
                !0 === s ? (s = a[i]) : !0 !== a[i] && ((l = d[0]), r.unshift(d[1]));
                break;
              }
          if (!0 !== s)
            if (s && e.throws) t = s(t);
            else
              try {
                t = s(t);
              } catch (t) {
                return {
                  state: 'parsererror',
                  error: s ? t : 'No conversion from ' + p + ' to ' + l,
                };
              }
        }
    return {
      state: 'success',
      data: t,
    };
  }

  function getDisplay(e) {
    return (e.style && e.style.display) || g.css(e, 'display');
  }

  function filterHidden(e) {
    if (!g.contains(e.ownerDocument || l, e)) return !0;
    for (; e && 1 === e.nodeType; ) {
      if ('none' === getDisplay(e) || 'hidden' === e.type) return !0;
      e = e.parentNode;
    }
    return !1;
  }

  function buildParams(e, t, n, o) {
    if (g.isArray(t))
      g.each(t, function (t, a) {
        n || at.test(e)
          ? o(e, a)
          : buildParams(e + '[' + ('object' === _typeof(a) && null != a ? t : '') + ']', a, n, o);
      });
    else if (!n && 'object' === g.type(t)) for (var a in t) buildParams(e + '[' + a + ']', t[a], n, o);
    else o(e, t);
  }

  function createStandardXHR() {
    try {
      return new t.XMLHttpRequest();
    } catch (t) {}
  }

  function createActiveXHR() {
    try {
      return new t.ActiveXObject('Microsoft.XMLHTTP');
    } catch (t) {}
  }

  function getWindow(e) {
    return g.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }
  var r = [],
    l = t.document,
    s = r.slice,
    d = r.concat,
    p = r.push,
    c = r.indexOf,
    u = {},
    m = u.toString,
    h = u.hasOwnProperty,
    y = {},
    f = '1.12.4',
    g = function jQuery(e, t) {
      return new jQuery.fn.init(e, t);
    },
    _ = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    b = /^-ms-/,
    x = /-([\da-z])/gi,
    v = function (e, t) {
      return t.toUpperCase();
    };
  (g.fn = g.prototype = {
    jquery: f,
    constructor: g,
    selector: '',
    length: 0,
    toArray: function () {
      return s.call(this);
    },
    get: function (e) {
      return null == e ? s.call(this) : 0 > e ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = g.merge(this.constructor(), e);
      return (t.prevObject = this), (t.context = this.context), t;
    },
    each: function (e) {
      return g.each(this, e);
    },
    map: function (e) {
      return this.pushStack(
        g.map(this, function (t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function () {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (0 > e ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: p,
    sort: r.sort,
    splice: r.splice,
  }),
    (g.extend = g.fn.extend = function () {
      var e = arguments[0] || {},
        t = 1,
        n = arguments.length,
        o = !1,
        a,
        r,
        l,
        s,
        d,
        p;
      for (
        'boolean' == typeof e && ((o = e), (e = arguments[t] || {}), t++),
          'object' === _typeof(e) || g.isFunction(e) || (e = {}),
          t === n && ((e = this), t--);
        t < n;
        t++
      )
        if (null != (d = arguments[t]))
          for (s in d)
            ((a = e[s]), (l = d[s]), e !== l) &&
              (o && l && (g.isPlainObject(l) || (r = g.isArray(l)))
                ? (r ? ((r = !1), (p = a && g.isArray(a) ? a : [])) : (p = a && g.isPlainObject(a) ? a : {}),
                  (e[s] = g.extend(o, p, l)))
                : void 0 !== l && (e[s] = l));
      return e;
    }),
    g.extend({
      expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return 'function' === g.type(e);
      },
      isArray:
        Array.isArray ||
        function (e) {
          return 'array' === g.type(e);
        },
      isWindow: function (e) {
        return null != e && e == e.window;
      },
      isNumeric: function (e) {
        var t = e && e.toString();
        return !g.isArray(e) && 0 <= t - parseFloat(t) + 1;
      },
      isEmptyObject: function (e) {
        for (var t in e) return !1;
        return !0;
      },
      isPlainObject: function (e) {
        if (!e || 'object' !== g.type(e) || e.nodeType || g.isWindow(e)) return !1;
        try {
          if (e.constructor && !h.call(e, 'constructor') && !h.call(e.constructor.prototype, 'isPrototypeOf'))
            return !1;
        } catch (t) {
          return !1;
        }
        if (!y.ownFirst) for (var t in e) return h.call(e, t);
        for (t in e);
        return void 0 === t || h.call(e, t);
      },
      type: function (e) {
        return null == e
          ? e + ''
          : 'object' === _typeof(e) || 'function' == typeof e
          ? u[m.call(e)] || 'object'
          : _typeof(e);
      },
      globalEval: function (e) {
        e &&
          g.trim(e) &&
          (
            t.execScript ||
            function (e) {
              t.eval.call(t, e);
            }
          )(e);
      },
      camelCase: function (e) {
        return e.replace(b, 'ms-').replace(x, v);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t) {
        var n = 0,
          o;
        if (isArrayLike(e)) for (o = e.length; n < o && !1 !== t.call(e[n], n, e[n]); n++);
        else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? '' : (e + '').replace(_, '');
      },
      makeArray: function (e, t) {
        var n = t || [];
        return null != e && (isArrayLike(Object(e)) ? g.merge(n, 'string' == typeof e ? [e] : e) : p.call(n, e)), n;
      },
      inArray: function (e, t, n) {
        var o;
        if (t) {
          if (c) return c.call(t, e, n);
          for (o = t.length, n = n ? (0 > n ? a(0, o + n) : n) : 0; n < o; n++) if (n in t && t[n] === e) return n;
        }
        return -1;
      },
      merge: function (e, t) {
        for (var n = +t.length, o = 0, a = e.length; o < n; ) e[a++] = t[o++];
        if (n !== n) for (; void 0 !== t[o]; ) e[a++] = t[o++];
        return (e.length = a), e;
      },
      grep: function (e, t, n) {
        for (var o = [], a = 0, r = e.length, l; a < r; a++) (l = !t(e[a], a)), l !== !n && o.push(e[a]);
        return o;
      },
      map: function (e, t, n) {
        var o = 0,
          a = [],
          r,
          l;
        if (isArrayLike(e)) for (r = e.length; o < r; o++) (l = t(e[o], o, n)), null != l && a.push(l);
        else for (o in e) (l = t(e[o], o, n)), null != l && a.push(l);
        return d.apply([], a);
      },
      guid: 1,
      proxy: function proxy(e, t) {
        var n, proxy, o;
        if (('string' == typeof t && ((o = e[t]), (t = e), (e = o)), !!g.isFunction(e)))
          return (
            (n = s.call(arguments, 2)),
            (proxy = function () {
              return e.apply(t || this, n.concat(s.call(arguments)));
            }),
            (proxy.guid = e.guid = e.guid || g.guid++),
            proxy
          );
      },
      now: function () {
        return +new Date();
      },
      support: y,
    }),
    'function' == typeof Symbol && (g.fn[Symbol.iterator] = r[Symbol.iterator]),
    g.each(
      ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Object', 'Error', 'Symbol'],
      function (e, t) {
        u['[object ' + t + ']'] = t.toLowerCase();
      }
    );
  var C =
    /*!
     * Sizzle CSS Selector Engine v2.2.1
     * http://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2015-10-17
     */
    (function (e) {
      function Sizzle(e, o, a, r) {
        var l = o && o.ownerDocument,
          s = o ? o.nodeType : 9,
          p,
          c,
          u,
          h,
          f,
          g,
          _,
          x;
        if (((a = a || []), 'string' != typeof e || !e || (1 !== s && 9 !== s && 11 !== s))) return a;
        if (!r && ((o ? o.ownerDocument || o : n) !== $ && X(o), (o = o || $), G)) {
          if (11 !== s && (g = F.exec(e)))
            if (!(p = g[1])) {
              if (g[2]) return y.apply(a, o.getElementsByTagName(e)), a;
              if ((p = g[3]) && O.getElementsByClassName && o.getElementsByClassName)
                return y.apply(a, o.getElementsByClassName(p)), a;
            } else if (9 === s) {
              if (!(u = o.getElementById(p))) return a;
              if (u.id === p) return a.push(u), a;
            } else if (l && (u = l.getElementById(p)) && Z(o, u) && u.id === p) return a.push(u), a;
          if (O.qsa && !d[e + ' '] && (!K || !K.test(e))) {
            if (1 !== s) (l = o), (x = e);
            else if ('object' !== o.nodeName.toLowerCase()) {
              for (
                (h = o.getAttribute('id')) ? (h = h.replace(A, '\\$&')) : o.setAttribute('id', (h = t)),
                  _ = I(e),
                  c = _.length,
                  f = k.test(h) ? '#' + h : "[id='" + h + "']";
                c--;

              )
                _[c] = f + ' ' + toSelector(_[c]);
              (x = _.join(',')), (l = (N.test(e) && testContext(o.parentNode)) || o);
            }
            if (x)
              try {
                return y.apply(a, l.querySelectorAll(x)), a;
              } catch (e) {
              } finally {
                h === t && o.removeAttribute('id');
              }
          }
        }
        return U(e.replace(b, '$1'), o, a, r);
      }

      function createCache() {
        function cache(t, n) {
          return e.push(t + ' ') > H.cacheLength && delete cache[e.shift()], (cache[t + ' '] = n);
        }
        var e = [];
        return cache;
      }

      function markFunction(e) {
        return (e[t] = !0), e;
      }

      function assert(e) {
        var t = $.createElement('div');
        try {
          return !!e(t);
        } catch (t) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }

      function addHandle(e, t) {
        for (var n = e.split('|'), o = n.length; o--; ) H.attrHandle[n[o]] = t;
      }

      function siblingCheck(e, t) {
        var n = t && e,
          o =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            (~t.sourceIndex || -2147483648) - (~e.sourceIndex || -2147483648);
        if (o) return o;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }

      function createInputPseudo(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return 'input' === n && t.type === e;
        };
      }

      function createButtonPseudo(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ('input' === n || 'button' === n) && t.type === e;
        };
      }

      function createPositionalPseudo(e) {
        return markFunction(function (t) {
          return (
            (t = +t),
            markFunction(function (n, o) {
              for (var a = e([], n.length, t), r = a.length, l; r--; ) n[(l = a[r])] && (n[l] = !(o[l] = n[l]));
            })
          );
        });
      }

      function testContext(e) {
        return e && 'undefined' != typeof e.getElementsByTagName && e;
      }

      function setFilters() {}

      function toSelector(e) {
        for (var t = 0, n = e.length, o = ''; t < n; t++) o += e[t].value;
        return o;
      }

      function addCombinator(e, n, o) {
        var i = n.dir,
          l = o && 'parentNode' === i,
          s = r++;
        return n.first
          ? function (t, n, o) {
              for (; (t = t[i]); ) if (1 === t.nodeType || l) return e(t, n, o);
            }
          : function (n, o, r) {
              var d = [a, s],
                p,
                c,
                u;
              if (r) {
                for (; (n = n[i]); ) if ((1 === n.nodeType || l) && e(n, o, r)) return !0;
              } else
                for (; (n = n[i]); )
                  if (1 === n.nodeType || l) {
                    if (
                      ((u = n[t] || (n[t] = {})),
                      (c = u[n.uniqueID] || (u[n.uniqueID] = {})),
                      (p = c[i]) && p[0] === a && p[1] === s)
                    )
                      return (d[2] = p[2]);
                    if (((c[i] = d), (d[2] = e(n, o, r)))) return !0;
                  }
            };
      }

      function elementMatcher(e) {
        return 1 < e.length
          ? function (t, n, o) {
              for (var a = e.length; a--; ) if (!e[a](t, n, o)) return !1;
              return !0;
            }
          : e[0];
      }

      function multipleContexts(e, t, n) {
        for (var o = 0, a = t.length; o < a; o++) Sizzle(e, t[o], n);
        return n;
      }

      function condense(e, t, n, o, a) {
        for (var r = [], l = 0, s = e.length, d; l < s; l++)
          (d = e[l]) && (!n || n(d, o, a)) && (r.push(d), null != t && t.push(l));
        return r;
      }

      function setMatcher(e, n, o, a, r, i) {
        return (
          a && !a[t] && (a = setMatcher(a)),
          r && !r[t] && (r = setMatcher(r, i)),
          markFunction(function (t, l, s, d) {
            var p = [],
              c = [],
              u = l.length,
              m = t || multipleContexts(n || '*', s.nodeType ? [s] : s, []),
              h = e && (t || !n) ? condense(m, p, e, s, d) : m,
              f = o ? (r || (t ? e : u || a) ? [] : l) : h,
              _,
              b,
              x;
            if ((o && o(h, f, s, d), a))
              for (_ = condense(f, c), a(_, [], s, d), b = _.length; b--; ) (x = _[b]) && (f[c[b]] = !(h[c[b]] = x));
            if (!t) (f = condense(f === l ? f.splice(u, f.length) : f)), r ? r(null, l, f, d) : y.apply(l, f);
            else if (r || e) {
              if (r) {
                for (_ = [], b = f.length; b--; ) (x = f[b]) && _.push((h[b] = x));
                r(null, (f = []), _, d);
              }
              for (b = f.length; b--; ) (x = f[b]) && -1 < (_ = r ? g(t, x) : p[b]) && (t[_] = !(l[_] = x));
            }
          })
        );
      }

      function matcherFromTokens(e) {
        for (
          var n = e.length,
            o = H.relative[e[0].type],
            a = o || H.relative[' '],
            r = o ? 1 : 0,
            l = addCombinator(
              function (e) {
                return e === p;
              },
              a,
              !0
            ),
            s = addCombinator(
              function (e) {
                return -1 < g(p, e);
              },
              a,
              !0
            ),
            d = [
              function (e, t, n) {
                var a = (!o && (n || t !== V)) || ((p = t).nodeType ? l(e, t, n) : s(e, t, n));
                return (p = null), a;
              },
            ],
            p,
            c,
            u;
          r < n;
          r++
        )
          if ((c = H.relative[e[r].type])) d = [addCombinator(elementMatcher(d), c)];
          else {
            if (((c = H.filter[e[r].type].apply(null, e[r].matches)), c[t])) {
              for (u = ++r; u < n && !H.relative[e[u].type]; u++);
              return setMatcher(
                1 < r && elementMatcher(d),
                1 < r &&
                  toSelector(
                    e.slice(0, r - 1).concat({
                      value: ' ' === e[r - 2].type ? '*' : '',
                    })
                  ).replace(b, '$1'),
                c,
                r < u && matcherFromTokens(e.slice(r, u)),
                u < n && matcherFromTokens((e = e.slice(u))),
                u < n && toSelector(e)
              );
            }
            d.push(c);
          }
        return elementMatcher(d);
      }

      function matcherFromGroupMatchers(e, t) {
        var n = 0 < t.length,
          o = 0 < e.length,
          r = function (r, l, s, d, p) {
            var c = 0,
              u = '0',
              h = r && [],
              f = [],
              g = V,
              _ = r || (o && H.find.TAG('*', p)),
              b = (a += null == g ? 1 : Math.random() || 0.1),
              x = _.length,
              v,
              C,
              T;
            for (p && (V = l === $ || l || p); u !== x && null != (v = _[u]); u++) {
              if (o && v) {
                for (C = 0, l || v.ownerDocument === $ || (X(v), (s = !G)); (T = e[C++]); )
                  if (T(v, l || $, s)) {
                    d.push(v);
                    break;
                  }
                p && (a = b);
              }
              n && ((v = !T && v) && c--, r && h.push(v));
            }
            if (((c += u), n && u !== c)) {
              for (C = 0; (T = t[C++]); ) T(h, f, l, s);
              if (r) {
                if (0 < c) for (; u--; ) h[u] || f[u] || (f[u] = m.call(d));
                f = condense(f);
              }
              y.apply(d, f), p && !r && 0 < f.length && 1 < c + t.length && Sizzle.uniqueSort(d);
            }
            return p && ((a = b), (V = g)), h;
          };
        return n ? markFunction(r) : r;
      }
      var t = 'sizzle' + 1 * new Date(),
        n = e.document,
        a = 0,
        r = 0,
        l = createCache(),
        s = createCache(),
        d = createCache(),
        p = function (e, t) {
          return e === t && (z = !0), 0;
        },
        c = {}.hasOwnProperty,
        u = [],
        m = u.pop,
        h = u.push,
        y = u.push,
        f = u.slice,
        g = function (e, t) {
          for (var n = 0, o = e.length; n < o; n++) if (e[n] === t) return n;
          return -1;
        },
        _ = /[\x20\t\r\n\f]+/g,
        b = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        x = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        v = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
        C = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
        T = /:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
        k = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
        j = {
          ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
          CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
          TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
          ATTR: /^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\]/,
          PSEUDO: /^:((?:\\.|[\w-]|[^\x00-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\x00-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\x00-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,
          CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
          bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
          needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
        },
        w = /^(?:input|select|textarea|button)$/i,
        E = /^h\d$/i,
        S = /^[^{]+\{\s*\[native \w/,
        F = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        N = /[+~]/,
        A = /'|\\/g,
        P = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/gi,
        D = function (e, t, n) {
          var a = '0x' + t - 65536;
          return a != a || n ? t : 0 > a ? o(a + 65536) : o(55296 | (a >> 10), 56320 | (1023 & a));
        },
        L = function () {
          X();
        },
        R,
        O,
        H,
        B,
        q,
        I,
        M,
        U,
        V,
        W,
        z,
        X,
        $,
        Q,
        G,
        K,
        Y,
        J,
        Z;
      try {
        y.apply((u = f.call(n.childNodes)), n.childNodes), u[n.childNodes.length].nodeType;
      } catch (t) {
        y = {
          apply: u.length
            ? function (e, t) {
                h.apply(e, f.call(t));
              }
            : function (e, t) {
                for (var n = e.length, o = 0; (e[n++] = t[o++]); );
                e.length = n - 1;
              },
        };
      }
      for (R in ((O = Sizzle.support = {}),
      (q = Sizzle.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && 'HTML' !== t.nodeName;
      }),
      (X = Sizzle.setDocument = function (e) {
        var o = e ? e.ownerDocument || e : n,
          a,
          r;
        return o !== $ && 9 === o.nodeType && o.documentElement
          ? (($ = o),
            (Q = $.documentElement),
            (G = !q($)),
            (r = $.defaultView) &&
              r.top !== r &&
              (r.addEventListener
                ? r.addEventListener('unload', L, !1)
                : r.attachEvent && r.attachEvent('onunload', L)),
            (O.attributes = assert(function (e) {
              return (e.className = 'i'), !e.getAttribute('className');
            })),
            (O.getElementsByTagName = assert(function (e) {
              return e.appendChild($.createComment('')), !e.getElementsByTagName('*').length;
            })),
            (O.getElementsByClassName = S.test($.getElementsByClassName)),
            (O.getById = assert(function (e) {
              return (Q.appendChild(e).id = t), !$.getElementsByName || !$.getElementsByName(t).length;
            })),
            O.getById
              ? ((H.find.ID = function (e, t) {
                  if ('undefined' != typeof t.getElementById && G) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }),
                (H.filter.ID = function (e) {
                  var t = e.replace(P, D);
                  return function (e) {
                    return e.getAttribute('id') === t;
                  };
                }))
              : (delete H.find.ID,
                (H.filter.ID = function (e) {
                  var t = e.replace(P, D);
                  return function (e) {
                    var n = 'undefined' != typeof e.getAttributeNode && e.getAttributeNode('id');
                    return n && n.value === t;
                  };
                })),
            (H.find.TAG = O.getElementsByTagName
              ? function (e, t) {
                  return 'undefined' == typeof t.getElementsByTagName
                    ? O.qsa
                      ? t.querySelectorAll(e)
                      : void 0
                    : t.getElementsByTagName(e);
                }
              : function (e, t) {
                  var n = [],
                    o = 0,
                    a = t.getElementsByTagName(e),
                    r;
                  if ('*' === e) {
                    for (; (r = a[o++]); ) 1 === r.nodeType && n.push(r);
                    return n;
                  }
                  return a;
                }),
            (H.find.CLASS =
              O.getElementsByClassName &&
              function (e, t) {
                if ('undefined' != typeof t.getElementsByClassName && G) return t.getElementsByClassName(e);
              }),
            (Y = []),
            (K = []),
            (O.qsa = S.test($.querySelectorAll)) &&
              (assert(function (e) {
                (Q.appendChild(e).innerHTML =
                  "<a id='" +
                  t +
                  "'></a><select id='" +
                  t +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length && K.push('[*^$]=[\\x20\\t\\r\\n\\f]*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length ||
                    K.push(
                      '\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)'
                    ),
                  e.querySelectorAll('[id~=' + t + '-]').length || K.push('~='),
                  e.querySelectorAll(':checked').length || K.push(':checked'),
                  e.querySelectorAll('a#' + t + '+*').length || K.push('.#.+[+~]');
              }),
              assert(function (e) {
                var t = $.createElement('input');
                t.setAttribute('type', 'hidden'),
                  e.appendChild(t).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length && K.push('name[\\x20\\t\\r\\n\\f]*[*^$|!~]?='),
                  e.querySelectorAll(':enabled').length || K.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  K.push(',.*:');
              })),
            (O.matchesSelector = S.test(
              (J =
                Q.matches ||
                Q.webkitMatchesSelector ||
                Q.mozMatchesSelector ||
                Q.oMatchesSelector ||
                Q.msMatchesSelector)
            )) &&
              assert(function (e) {
                (O.disconnectedMatch = J.call(e, 'div')),
                  J.call(e, "[s!='']:x"),
                  Y.push(
                    '!=',
                    ':((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)'
                  );
              }),
            (K = K.length && new RegExp(K.join('|'))),
            (Y = Y.length && new RegExp(Y.join('|'))),
            (a = S.test(Q.compareDocumentPosition)),
            (Z =
              a || S.test(Q.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      o = t && t.parentNode;
                    return (
                      e === o ||
                      !!(
                        o &&
                        1 === o.nodeType &&
                        (n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (p = a
              ? function (e, t) {
                  if (e === t) return (z = !0), 0;
                  var o = !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return o
                    ? o
                    : ((o = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1),
                      1 & o || (!O.sortDetached && t.compareDocumentPosition(e) === o)
                        ? e === $ || (e.ownerDocument === n && Z(n, e))
                          ? -1
                          : t === $ || (t.ownerDocument === n && Z(n, t))
                          ? 1
                          : W
                          ? g(W, e) - g(W, t)
                          : 0
                        : 4 & o
                        ? -1
                        : 1);
                }
              : function (e, t) {
                  if (e === t) return (z = !0), 0;
                  var o = 0,
                    a = e.parentNode,
                    r = t.parentNode,
                    l = [e],
                    s = [t],
                    d;
                  if (!a || !r) return e === $ ? -1 : t === $ ? 1 : a ? -1 : r ? 1 : W ? g(W, e) - g(W, t) : 0;
                  if (a === r) return siblingCheck(e, t);
                  for (d = e; (d = d.parentNode); ) l.unshift(d);
                  for (d = t; (d = d.parentNode); ) s.unshift(d);
                  for (; l[o] === s[o]; ) o++;
                  return o ? siblingCheck(l[o], s[o]) : l[o] === n ? -1 : s[o] === n ? 1 : 0;
                }),
            $)
          : $;
      }),
      (Sizzle.matches = function (e, t) {
        return Sizzle(e, null, null, t);
      }),
      (Sizzle.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== $ && X(e),
          (t = t.replace(C, "='$1']")),
          O.matchesSelector && G && !d[t + ' '] && (!Y || !Y.test(t)) && (!K || !K.test(t)))
        )
          try {
            var n = J.call(e, t);
            if (n || O.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
          } catch (t) {}
        return 0 < Sizzle(t, $, null, [e]).length;
      }),
      (Sizzle.contains = function (e, t) {
        return (e.ownerDocument || e) !== $ && X(e), Z(e, t);
      }),
      (Sizzle.attr = function (e, t) {
        (e.ownerDocument || e) !== $ && X(e);
        var n = H.attrHandle[t.toLowerCase()],
          o = n && c.call(H.attrHandle, t.toLowerCase()) ? n(e, t, !G) : void 0;
        return void 0 === o
          ? O.attributes || !G
            ? e.getAttribute(t)
            : (o = e.getAttributeNode(t)) && o.specified
            ? o.value
            : null
          : o;
      }),
      (Sizzle.error = function (e) {
        throw new Error('Syntax error, unrecognized expression: ' + e);
      }),
      (Sizzle.uniqueSort = function (e) {
        var t = [],
          n = 0,
          o = 0,
          a;
        if (((z = !O.detectDuplicates), (W = !O.sortStable && e.slice(0)), e.sort(p), z)) {
          for (; (a = e[o++]); ) a === e[o] && (n = t.push(o));
          for (; n--; ) e.splice(t[n], 1);
        }
        return (W = null), e;
      }),
      (B = Sizzle.getText = function (e) {
        var t = '',
          n = 0,
          o = e.nodeType,
          a;
        if (!o) for (; (a = e[n++]); ) t += B(a);
        else if (1 === o || 9 === o || 11 === o) {
          if ('string' == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) t += B(e);
        } else if (3 === o || 4 === o) return e.nodeValue;
        return t;
      }),
      (H = Sizzle.selectors = {
        cacheLength: 50,
        createPseudo: markFunction,
        match: j,
        attrHandle: {},
        find: {},
        relative: {
          '>': {
            dir: 'parentNode',
            first: !0,
          },
          ' ': {
            dir: 'parentNode',
          },
          '+': {
            dir: 'previousSibling',
            first: !0,
          },
          '~': {
            dir: 'previousSibling',
          },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(P, D)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(P, D)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (!e[3] && Sizzle.error(e[0]),
                  (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && Sizzle.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t = !e[6] && e[2],
              n;
            return j.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : t &&
                    T.test(t) &&
                    (n = I(t, !0)) &&
                    (n = t.indexOf(')', t.length - n) - t.length) &&
                    ((e[0] = e[0].slice(0, n)), (e[2] = t.slice(0, n))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(P, D).toLowerCase();
            return '*' === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = l[e + ' '];
            return (
              t ||
              ((t = new RegExp('(^|[\\x20\\t\\r\\n\\f])' + e + '([\\x20\\t\\r\\n\\f]|$)')) &&
                l(e, function (e) {
                  return t.test(
                    ('string' == typeof e.className && e.className) ||
                      ('undefined' != typeof e.getAttribute && e.getAttribute('class')) ||
                      ''
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (o) {
              var a = Sizzle.attr(o, e);
              return null == a
                ? '!=' === t
                : !t ||
                    ((a += ''),
                    '=' === t
                      ? a === n
                      : '!=' === t
                      ? a !== n
                      : '^=' === t
                      ? n && 0 === a.indexOf(n)
                      : '*=' === t
                      ? n && -1 < a.indexOf(n)
                      : '$=' === t
                      ? n && a.slice(-n.length) === n
                      : '~=' === t
                      ? -1 < (' ' + a.replace(_, ' ') + ' ').indexOf(n)
                      : '|=' == t && (a === n || a.slice(0, n.length + 1) === n + '-'));
            };
          },
          CHILD: function (e, n, o, r, i) {
            var l = 'nth' !== e.slice(0, 3),
              s = 'last' !== e.slice(-4),
              d = 'of-type' === n;
            return 1 === r && 0 === i
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (n, o, p) {
                  var c = l === s ? 'previousSibling' : 'nextSibling',
                    u = n.parentNode,
                    m = d && n.nodeName.toLowerCase(),
                    h = !p && !d,
                    y = !1,
                    f,
                    g,
                    _,
                    b,
                    x,
                    v;
                  if (u) {
                    if (l) {
                      for (; c; ) {
                        for (b = n; (b = b[c]); ) if (d ? b.nodeName.toLowerCase() === m : 1 === b.nodeType) return !1;
                        v = c = 'only' === e && !v && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((v = [s ? u.firstChild : u.lastChild]), s && h)) {
                      for (
                        b = u,
                          _ = b[t] || (b[t] = {}),
                          g = _[b.uniqueID] || (_[b.uniqueID] = {}),
                          f = g[e] || [],
                          x = f[0] === a && f[1],
                          y = x && f[2],
                          b = x && u.childNodes[x];
                        (b = (++x && b && b[c]) || (y = x = 0) || v.pop());

                      )
                        if (1 === b.nodeType && ++y && b === n) {
                          g[e] = [a, x, y];
                          break;
                        }
                    } else if (
                      (h &&
                        ((b = n),
                        (_ = b[t] || (b[t] = {})),
                        (g = _[b.uniqueID] || (_[b.uniqueID] = {})),
                        (f = g[e] || []),
                        (x = f[0] === a && f[1]),
                        (y = x)),
                      !1 === y)
                    )
                      for (
                        ;
                        (b = (++x && b && b[c]) || (y = x = 0) || v.pop()) &&
                        !(
                          (d ? b.nodeName.toLowerCase() === m : 1 === b.nodeType) &&
                          ++y &&
                          (h &&
                            ((_ = b[t] || (b[t] = {})), (g = _[b.uniqueID] || (_[b.uniqueID] = {})), (g[e] = [a, y])),
                          b === n)
                        );

                      );
                    return (y -= i), y === r || (0 == y % r && 0 <= y / r);
                  }
                };
          },
          PSEUDO: function (e, n) {
            var o = H.pseudos[e] || H.setFilters[e.toLowerCase()] || Sizzle.error('unsupported pseudo: ' + e),
              a;
            return o[t]
              ? o(n)
              : 1 < o.length
              ? ((a = [e, e, '', n]),
                H.setFilters.hasOwnProperty(e.toLowerCase())
                  ? markFunction(function (e, t) {
                      for (var a = o(e, n), r = a.length, l; r--; ) (l = g(e, a[r])), (e[l] = !(t[l] = a[r]));
                    })
                  : function (e) {
                      return o(e, 0, a);
                    })
              : o;
          },
        },
        pseudos: {
          not: markFunction(function (e) {
            var n = [],
              o = [],
              a = M(e.replace(b, '$1'));
            return a[t]
              ? markFunction(function (e, t, n, o) {
                  for (var r = a(e, null, o, []), l = e.length, s; l--; ) (s = r[l]) && (e[l] = !(t[l] = s));
                })
              : function (e, t, r) {
                  return (n[0] = e), a(n, null, r, o), (n[0] = null), !o.pop();
                };
          }),
          has: markFunction(function (e) {
            return function (t) {
              return 0 < Sizzle(e, t).length;
            };
          }),
          contains: markFunction(function (e) {
            return (
              (e = e.replace(P, D)),
              function (t) {
                return -1 < (t.textContent || t.innerText || B(t)).indexOf(e);
              }
            );
          }),
          lang: markFunction(function (e) {
            return (
              k.test(e || '') || Sizzle.error('unsupported lang: ' + e),
              (e = e.replace(P, D).toLowerCase()),
              function (t) {
                var n;
                do
                  if ((n = G ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')))
                    return (n = n.toLowerCase()), n === e || 0 === n.indexOf(e + '-');
                while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === Q;
          },
          focus: function (e) {
            return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: function (e) {
            return !1 === e.disabled;
          },
          disabled: function (e) {
            return !0 === e.disabled;
          },
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (6 > e.nodeType) return !1;
            return !0;
          },
          parent: function (e) {
            return !H.pseudos.empty(e);
          },
          header: function (e) {
            return E.test(e.nodeName);
          },
          input: function (e) {
            return w.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && 'button' === e.type) || 'button' === t;
          },
          text: function (e) {
            var t;
            return (
              'input' === e.nodeName.toLowerCase() &&
              'text' === e.type &&
              (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
            );
          },
          first: createPositionalPseudo(function () {
            return [0];
          }),
          last: createPositionalPseudo(function (e, t) {
            return [t - 1];
          }),
          eq: createPositionalPseudo(function (e, t, n) {
            return [0 > n ? n + t : n];
          }),
          even: createPositionalPseudo(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: createPositionalPseudo(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: createPositionalPseudo(function (e, t, n) {
            for (var o = 0 > n ? n + t : n; 0 <= --o; ) e.push(o);
            return e;
          }),
          gt: createPositionalPseudo(function (e, t, n) {
            for (var o = 0 > n ? n + t : n; ++o < t; ) e.push(o);
            return e;
          }),
        },
      }),
      (H.pseudos.nth = H.pseudos.eq),
      {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0,
      }))
        H.pseudos[R] = createInputPseudo(R);
      for (R in {
        submit: !0,
        reset: !0,
      })
        H.pseudos[R] = createButtonPseudo(R);
      return (
        (setFilters.prototype = H.filters = H.pseudos),
        (H.setFilters = new setFilters()),
        (I = Sizzle.tokenize = function (e, t) {
          var n = s[e + ' '],
            o,
            a,
            r,
            i,
            l,
            d,
            p;
          if (n) return t ? 0 : n.slice(0);
          for (l = e, d = [], p = H.preFilter; l; ) {
            for (i in ((!o || (a = x.exec(l))) && (a && (l = l.slice(a[0].length) || l), d.push((r = []))),
            (o = !1),
            (a = v.exec(l)) &&
              ((o = a.shift()),
              r.push({
                value: o,
                type: a[0].replace(b, ' '),
              }),
              (l = l.slice(o.length))),
            H.filter))
              (a = j[i].exec(l)) &&
                (!p[i] || (a = p[i](a))) &&
                ((o = a.shift()),
                r.push({
                  value: o,
                  type: i,
                  matches: a,
                }),
                (l = l.slice(o.length)));
            if (!o) break;
          }
          return t ? l.length : l ? Sizzle.error(e) : s(e, d).slice(0);
        }),
        (M = Sizzle.compile = function (e, n) {
          var o = [],
            a = [],
            r = d[e + ' '],
            l;
          if (!r) {
            for (n || (n = I(e)), l = n.length; l--; ) (r = matcherFromTokens(n[l])), r[t] ? o.push(r) : a.push(r);
            (r = d(e, matcherFromGroupMatchers(a, o))), (r.selector = e);
          }
          return r;
        }),
        (U = Sizzle.select = function (e, t, n, o) {
          var a = 'function' == typeof e && e,
            r = !o && I((e = a.selector || e)),
            l,
            s,
            d,
            p,
            c;
          if (((n = n || []), 1 === r.length)) {
            if (
              ((s = r[0] = r[0].slice(0)),
              2 < s.length && 'ID' === (d = s[0]).type && O.getById && 9 === t.nodeType && G && H.relative[s[1].type])
            ) {
              if (((t = (H.find.ID(d.matches[0].replace(P, D), t) || [])[0]), !t)) return n;
              a && (t = t.parentNode), (e = e.slice(s.shift().value.length));
            }
            for (l = j.needsContext.test(e) ? 0 : s.length; l-- && ((d = s[l]), !H.relative[(p = d.type)]); )
              if (
                (c = H.find[p]) &&
                (o = c(d.matches[0].replace(P, D), (N.test(s[0].type) && testContext(t.parentNode)) || t))
              ) {
                if ((s.splice(l, 1), (e = o.length && toSelector(s)), !e)) return y.apply(n, o), n;
                break;
              }
          }
          return (a || M(e, r))(o, t, !G, n, !t || (N.test(e) && testContext(t.parentNode)) || t), n;
        }),
        (O.sortStable = t.split('').sort(p).join('') === t),
        (O.detectDuplicates = !!z),
        X(),
        (O.sortDetached = assert(function (e) {
          return 1 & e.compareDocumentPosition($.createElement('div'));
        })),
        assert(function (e) {
          return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
        }) ||
          addHandle('type|href|height|width', function (e, t, n) {
            if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
          }),
        (O.attributes &&
          assert(function (e) {
            return (
              (e.innerHTML = '<input/>'),
              e.firstChild.setAttribute('value', ''),
              '' === e.firstChild.getAttribute('value')
            );
          })) ||
          addHandle('value', function (e, t, n) {
            if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
          }),
        assert(function (e) {
          return null == e.getAttribute('disabled');
        }) ||
          addHandle(
            'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
            function (e, t, n) {
              var o;
              if (!n)
                return !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
            }
          ),
        Sizzle
      );
    })(t);
  (g.find = C),
    (g.expr = C.selectors),
    (g.expr[':'] = g.expr.pseudos),
    (g.uniqueSort = g.unique = C.uniqueSort),
    (g.text = C.getText),
    (g.isXMLDoc = C.isXML),
    (g.contains = C.contains);
  var T = function (e, t, n) {
      for (var o = []; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (void 0 !== n && g(e).is(n)) break;
          o.push(e);
        }
      return o;
    },
    k = function (e, t) {
      for (var o = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && o.push(e);
      return o;
    },
    j = g.expr.match.needsContext,
    w = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    E = /^.[^:#\[\.,]*$/;
  (g.filter = function (e, t, n) {
    var o = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === o.nodeType
        ? g.find.matchesSelector(o, e)
          ? [o]
          : []
        : g.find.matches(
            e,
            g.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    g.fn.extend({
      find: function (e) {
        var t = [],
          n = this,
          o = n.length,
          a;
        if ('string' != typeof e)
          return this.pushStack(
            g(e).filter(function () {
              for (a = 0; a < o; a++) if (g.contains(n[a], this)) return !0;
            })
          );
        for (a = 0; a < o; a++) g.find(e, n[a], t);
        return (
          (t = this.pushStack(1 < o ? g.unique(t) : t)), (t.selector = this.selector ? this.selector + ' ' + e : e), t
        );
      },
      filter: function (e) {
        return this.pushStack(winnow(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(winnow(this, e || [], !0));
      },
      is: function (e) {
        return !!winnow(this, 'string' == typeof e && j.test(e) ? g(e) : e || [], !1).length;
      },
    });
  var S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    F = (g.fn.init = function (e, t, n) {
      var o, a;
      if (!e) return this;
      if (((n = n || N), 'string' == typeof e)) {
        if (
          ((o = '<' === e.charAt(0) && '>' === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : S.exec(e)),
          o && (o[1] || !t))
        ) {
          if (o[1]) {
            if (
              ((t = t instanceof g ? t[0] : t),
              g.merge(this, g.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : l, !0)),
              w.test(o[1]) && g.isPlainObject(t))
            )
              for (o in t) g.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
            return this;
          }
          if (((a = l.getElementById(o[2])), a && a.parentNode)) {
            if (a.id !== o[2]) return N.find(e);
            (this.length = 1), (this[0] = a);
          }
          return (this.context = l), (this.selector = e), this;
        }
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      }
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : g.isFunction(e)
        ? 'undefined' == typeof n.ready
          ? e(g)
          : n.ready(e)
        : (void 0 !== e.selector && ((this.selector = e.selector), (this.context = e.context)), g.makeArray(e, this));
    }),
    N;
  (F.prototype = g.fn), (N = g(l));
  var A = /^(?:parents|prev(?:Until|All))/,
    P = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0,
    };
  g.fn.extend({
    has: function (e) {
      var t = g(e, this),
        n = t.length,
        o;
      return this.filter(function () {
        for (o = 0; o < n; o++) if (g.contains(this, t[o])) return !0;
      });
    },
    closest: function (e, t) {
      for (
        var n = 0, o = this.length, a = [], r = j.test(e) || 'string' != typeof e ? g(e, t || this.context) : 0, l;
        n < o;
        n++
      )
        for (l = this[n]; l && l !== t; l = l.parentNode)
          if (11 > l.nodeType && (r ? -1 < r.index(l) : 1 === l.nodeType && g.find.matchesSelector(l, e))) {
            a.push(l);
            break;
          }
      return this.pushStack(1 < a.length ? g.uniqueSort(a) : a);
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? g.inArray(this[0], g(e))
          : g.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(g.uniqueSort(g.merge(this.get(), g(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    g.each(
      {
        parent: function parent(e) {
          var parent = e.parentNode;
          return parent && 11 !== parent.nodeType ? parent : null;
        },
        parents: function (e) {
          return T(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return T(e, 'parentNode', n);
        },
        next: function (e) {
          return sibling(e, 'nextSibling');
        },
        prev: function (e) {
          return sibling(e, 'previousSibling');
        },
        nextAll: function (e) {
          return T(e, 'nextSibling');
        },
        prevAll: function (e) {
          return T(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return T(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return T(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return k((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return k(e.firstChild);
        },
        contents: function (e) {
          return g.nodeName(e, 'iframe') ? e.contentDocument || e.contentWindow.document : g.merge([], e.childNodes);
        },
      },
      function (e, t) {
        g.fn[e] = function (n, o) {
          var a = g.map(this, t, n);
          return (
            'Until' !== e.slice(-5) && (o = n),
            o && 'string' == typeof o && (a = g.filter(o, a)),
            1 < this.length && (!P[e] && (a = g.uniqueSort(a)), A.test(e) && (a = a.reverse())),
            this.pushStack(a)
          );
        };
      }
    );
  var D = /\S+/g;
  (g.Callbacks = function (e) {
    e = 'string' == typeof e ? createOptions(e) : g.extend({}, e);
    var t = [],
      n = [],
      o = -1,
      a = function () {
        for (d = e.once, s = i = !0; n.length; o = -1)
          for (l = n.shift(); ++o < t.length; )
            !1 === t[o].apply(l[0], l[1]) && e.stopOnFalse && ((o = t.length), (l = !1));
        e.memory || (l = !1), (i = !1), d && (l ? (t = []) : (t = ''));
      },
      r = {
        add: function () {
          return (
            t &&
              (l && !i && ((o = t.length - 1), n.push(l)),
              (function add(n) {
                g.each(n, function (n, o) {
                  g.isFunction(o)
                    ? (!e.unique || !r.has(o)) && t.push(o)
                    : o && o.length && 'string' !== g.type(o) && add(o);
                });
              })(arguments),
              l && !i && a()),
            this
          );
        },
        remove: function () {
          return (
            g.each(arguments, function (e, n) {
              for (var a; -1 < (a = g.inArray(n, t, a)); ) t.splice(a, 1), a <= o && o--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < g.inArray(e, t) : 0 < t.length;
        },
        empty: function () {
          return t && (t = []), this;
        },
        disable: function () {
          return (d = n = []), (t = l = ''), this;
        },
        disabled: function () {
          return !t;
        },
        lock: function () {
          return (d = !0), l || r.disable(), this;
        },
        locked: function () {
          return !!d;
        },
        fireWith: function (e, t) {
          return d || ((t = t || []), (t = [e, t.slice ? t.slice() : t]), n.push(t), !i && a()), this;
        },
        fire: function () {
          return r.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!s;
        },
      },
      i,
      l,
      s,
      d;
    return r;
  }),
    g.extend({
      Deferred: function (e) {
        var t = [
            ['resolve', 'done', g.Callbacks('once memory'), 'resolved'],
            ['reject', 'fail', g.Callbacks('once memory'), 'rejected'],
            ['notify', 'progress', g.Callbacks('memory')],
          ],
          n = 'pending',
          o = {
            state: function () {
              return n;
            },
            always: function () {
              return a.done(arguments).fail(arguments), this;
            },
            then: function () {
              var e = arguments;
              return g
                .Deferred(function (n) {
                  g.each(t, function (t, r) {
                    var i = g.isFunction(e[t]) && e[t];
                    a[r[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && g.isFunction(e.promise)
                        ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject)
                        : n[r[0] + 'With'](this === o ? n.promise() : this, i ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            promise: function (e) {
              return null == e ? o : g.extend(e, o);
            },
          },
          a = {};
        return (
          (o.pipe = o.then),
          g.each(t, function (e, r) {
            var i = r[2],
              l = r[3];
            (o[r[1]] = i.add),
              l &&
                i.add(
                  function () {
                    n = l;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (a[r[0]] = function () {
                return a[r[0] + 'With'](this === a ? o : this, arguments), this;
              }),
              (a[r[0] + 'With'] = i.fireWith);
          }),
          o.promise(a),
          e && e.call(a, a),
          a
        );
      },
      when: function (e) {
        var t = 0,
          n = s.call(arguments),
          o = n.length,
          a = 1 !== o || (e && g.isFunction(e.promise)) ? o : 0,
          r = 1 === a ? e : g.Deferred(),
          l = function (e, t, n) {
            return function (o) {
              (t[e] = this),
                (n[e] = 1 < arguments.length ? s.call(arguments) : o),
                n === d ? r.notifyWith(t, n) : !--a && r.resolveWith(t, n);
            };
          },
          d,
          p,
          c;
        if (1 < o)
          for (d = Array(o), p = Array(o), c = Array(o); t < o; t++)
            n[t] && g.isFunction(n[t].promise)
              ? n[t].promise().progress(l(t, p, d)).done(l(t, c, n)).fail(r.reject)
              : --a;
        return a || r.resolveWith(c, n), r.promise();
      },
    });
  var L;
  (g.fn.ready = function (e) {
    return g.ready.promise().done(e), this;
  }),
    g.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? g.readyWait++ : g.ready(!0);
      },
      ready: function (e) {
        (!0 === e ? !--g.readyWait : !g.isReady) &&
          ((g.isReady = !0),
          (!0 !== e && 0 < --g.readyWait) ||
            (L.resolveWith(l, [g]), g.fn.triggerHandler && (g(l).triggerHandler('ready'), g(l).off('ready'))));
      },
    }),
    (g.ready.promise = function (e) {
      if (!L)
        if (
          ((L = g.Deferred()),
          'complete' === l.readyState || ('loading' !== l.readyState && !l.documentElement.doScroll))
        )
          t.setTimeout(g.ready);
        else if (l.addEventListener)
          l.addEventListener('DOMContentLoaded', completed), t.addEventListener('load', completed);
        else {
          l.attachEvent('onreadystatechange', completed), t.attachEvent('onload', completed);
          var n = !1;
          try {
            n = null == t.frameElement && l.documentElement;
          } catch (t) {}
          n &&
            n.doScroll &&
            (function doScrollCheck() {
              if (!g.isReady) {
                try {
                  n.doScroll('left');
                } catch (n) {
                  return t.setTimeout(doScrollCheck, 50);
                }
                detach(), g.ready();
              }
            })();
        }
      return L.promise(e);
    }),
    g.ready.promise();
  for (var R in g(y)) break;
  (y.ownFirst = '0' === R),
    (y.inlineBlockNeedsLayout = !1),
    g(function () {
      var e, t, n, o;
      (n = l.getElementsByTagName('body')[0]),
        n &&
          n.style &&
          ((t = l.createElement('div')),
          (o = l.createElement('div')),
          (o.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px'),
          n.appendChild(o).appendChild(t),
          'undefined' != typeof t.style.zoom &&
            ((t.style.cssText = 'display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1'),
            (y.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
            e && (n.style.zoom = 1)),
          n.removeChild(o));
    }),
    (function () {
      var e = l.createElement('div');
      y.deleteExpando = !0;
      try {
        delete e.test;
      } catch (t) {
        y.deleteExpando = !1;
      }
      e = null;
    })();
  var e = function (e) {
      var t = g.noData[(e.nodeName + ' ').toLowerCase()],
        n = +e.nodeType || 1;
      return (1 == n || 9 === n) && (!t || (!0 !== t && e.getAttribute('classid') === t));
    },
    i = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    O = /([A-Z])/g;
  g.extend({
    cache: {},
    noData: {
      'applet ': !0,
      'embed ': !0,
      'object ': 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
    },
    hasData: function (e) {
      return (e = e.nodeType ? g.cache[e[g.expando]] : e[g.expando]), !!e && !isEmptyDataObject(e);
    },
    data: function (e, t, n) {
      return internalData(e, t, n);
    },
    removeData: function (e, t) {
      return internalRemoveData(e, t);
    },
    _data: function (e, t, n) {
      return internalData(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return internalRemoveData(e, t, !0);
    },
  }),
    g.fn.extend({
      data: function data(e, t) {
        var n = this[0],
          o = n && n.attributes,
          a,
          r,
          data;
        if (void 0 === e) {
          if (this.length && ((data = g.data(n)), 1 === n.nodeType && !g._data(n, 'parsedAttrs'))) {
            for (a = o.length; a--; )
              o[a] &&
                ((r = o[a].name), 0 === r.indexOf('data-') && ((r = g.camelCase(r.slice(5))), dataAttr(n, r, data[r])));
            g._data(n, 'parsedAttrs', !0);
          }
          return data;
        }
        return 'object' === _typeof(e)
          ? this.each(function () {
              g.data(this, e);
            })
          : 1 < arguments.length
          ? this.each(function () {
              g.data(this, e, t);
            })
          : n
          ? dataAttr(n, e, g.data(n, e))
          : void 0;
      },
      removeData: function (e) {
        return this.each(function () {
          g.removeData(this, e);
        });
      },
    }),
    g.extend({
      queue: function queue(e, t, n) {
        var queue;
        if (e)
          return (
            (t = (t || 'fx') + 'queue'),
            (queue = g._data(e, t)),
            n && (!queue || g.isArray(n) ? (queue = g._data(e, t, g.makeArray(n))) : queue.push(n)),
            queue || []
          );
      },
      dequeue: function (e, t) {
        t = t || 'fx';
        var n = g.queue(e, t),
          o = n.length,
          a = n.shift(),
          r = g._queueHooks(e, t),
          i = function () {
            g.dequeue(e, t);
          };
        'inprogress' === a && ((a = n.shift()), o--),
          a && ('fx' === t && n.unshift('inprogress'), delete r.stop, a.call(e, i, r)),
          !o && r && r.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          g._data(e, n) ||
          g._data(e, n, {
            empty: g.Callbacks('once memory').add(function () {
              g._removeData(e, t + 'queue'), g._removeData(e, n);
            }),
          })
        );
      },
    }),
    g.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          'string' != typeof e && ((t = e), (e = 'fx'), n--),
          arguments.length < n
            ? g.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = g.queue(this, e, t);
                g._queueHooks(this, e), 'fx' === e && 'inprogress' !== n[0] && g.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          g.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        var n = 1,
          o = g.Deferred(),
          a = this,
          r = this.length,
          l = function () {
            --n || o.resolveWith(a, [a]);
          },
          s;
        for ('string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx'; r--; )
          (s = g._data(a[r], e + 'queueHooks')), s && s.empty && (n++, s.empty.add(l));
        return l(), o.promise(t);
      },
    }),
    (function () {
      var e;
      y.shrinkWrapBlocks = function () {
        if (null != e) return e;
        e = !1;
        var t, n, o;
        if (((n = l.getElementsByTagName('body')[0]), n && n.style))
          return (
            (t = l.createElement('div')),
            (o = l.createElement('div')),
            (o.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px'),
            n.appendChild(o).appendChild(t),
            'undefined' != typeof t.style.zoom &&
              ((t.style.cssText =
                '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1'),
              (t.appendChild(l.createElement('div')).style.width = '5px'),
              (e = 3 !== t.offsetWidth)),
            n.removeChild(o),
            e
          );
      };
    })();
  var H = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    B = new RegExp('^(?:([+-])=|)(' + H + ')([a-z%]*)$', 'i'),
    q = ['Top', 'Right', 'Bottom', 'Left'],
    I = function (e, t) {
      return (e = t || e), 'none' === g.css(e, 'display') || !g.contains(e.ownerDocument, e);
    },
    M = function access(e, t, n, o, a, r, l) {
      var s = 0,
        d = e.length,
        p = null == n;
      if ('object' === g.type(n)) for (s in ((a = !0), n)) access(e, t, s, n[s], !0, r, l);
      else if (
        void 0 !== o &&
        ((a = !0),
        g.isFunction(o) || (l = !0),
        p &&
          (l
            ? (t.call(e, o), (t = null))
            : ((p = t),
              (t = function (e, t, n) {
                return p.call(g(e), n);
              }))),
        t)
      )
        for (; s < d; s++) t(e[s], n, l ? o : o.call(e[s], s, t(e[s], n)));
      return a ? e : p ? t.call(e) : d ? t(e[0], n) : r;
    },
    U = /^(?:checkbox|radio)$/i,
    V = /<([\w:-]+)/,
    W = /^$|\/(?:java|ecma)script/i,
    z = /^\s+/;
  (function () {
    var e = l.createElement('div'),
      t = l.createDocumentFragment(),
      n = l.createElement('input');
    (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
      (y.leadingWhitespace = 3 === e.firstChild.nodeType),
      (y.tbody = !e.getElementsByTagName('tbody').length),
      (y.htmlSerialize = !!e.getElementsByTagName('link').length),
      (y.html5Clone = '<:nav></:nav>' !== l.createElement('nav').cloneNode(!0).outerHTML),
      (n.type = 'checkbox'),
      (n.checked = !0),
      t.appendChild(n),
      (y.appendChecked = n.checked),
      (e.innerHTML = '<textarea>x</textarea>'),
      (y.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
      t.appendChild(e),
      (n = l.createElement('input')),
      n.setAttribute('type', 'radio'),
      n.setAttribute('checked', 'checked'),
      n.setAttribute('name', 't'),
      e.appendChild(n),
      (y.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (y.noCloneEvent = !!e.addEventListener),
      (e[g.expando] = 1),
      (y.attributes = !e.getAttribute(g.expando));
  })();
  var X = {
    option: [1, "<select multiple='multiple'>", '</select>'],
    legend: [1, '<fieldset>', '</fieldset>'],
    area: [1, '<map>', '</map>'],
    param: [1, '<object>', '</object>'],
    thead: [1, '<table>', '</table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: y.htmlSerialize ? [0, '', ''] : [1, 'X<div>', '</div>'],
  };
  (X.optgroup = X.option), (X.tbody = X.tfoot = X.colgroup = X.caption = X.thead), (X.th = X.td);
  var $ = /<|&#?\w+;/,
    Q = /<tbody/i;
  (function () {
    var e = l.createElement('div'),
      n,
      o;
    for (n in {
      submit: !0,
      change: !0,
      focusin: !0,
    })
      (o = 'on' + n), (y[n] = o in t) || (e.setAttribute(o, 't'), (y[n] = !1 === e.attributes[o].expando));
    e = null;
  })();
  var G = /^(?:input|select|textarea)$/i,
    K = /^key/,
    Y = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    J = /^(?:focusinfocus|focusoutblur)$/,
    Z = /^([^.]*)(?:\.(.+)|)/;
  (g.event = {
    global: {},
    add: function (e, n, o, a, r) {
      var i = g._data(e),
        l,
        s,
        d,
        p,
        c,
        u,
        m,
        h,
        y,
        f,
        _;
      if (i) {
        for (
          o.handler && ((p = o), (o = p.handler), (r = p.selector)),
            o.guid || (o.guid = g.guid++),
            (s = i.events) || (s = i.events = {}),
            (u = i.handle) ||
              ((u = i.handle = function (t) {
                return 'undefined' == typeof g || (t && g.event.triggered === t.type)
                  ? void 0
                  : g.event.dispatch.apply(u.elem, arguments);
              }),
              (u.elem = e)),
            n = (n || '').match(D) || [''],
            d = n.length;
          d--;

        )
          ((l = Z.exec(n[d]) || []), (y = _ = l[1]), (f = (l[2] || '').split('.').sort()), !!y) &&
            ((c = g.event.special[y] || {}),
            (y = (r ? c.delegateType : c.bindType) || y),
            (c = g.event.special[y] || {}),
            (m = g.extend(
              {
                type: y,
                origType: _,
                data: a,
                handler: o,
                guid: o.guid,
                selector: r,
                needsContext: r && g.expr.match.needsContext.test(r),
                namespace: f.join('.'),
              },
              p
            )),
            (h = s[y]) ||
              ((h = s[y] = []),
              (h.delegateCount = 0),
              (!c.setup || !1 === c.setup.call(e, a, f, u)) &&
                (e.addEventListener ? e.addEventListener(y, u, !1) : e.attachEvent && e.attachEvent('on' + y, u))),
            c.add && (c.add.call(e, m), !m.handler.guid && (m.handler.guid = o.guid)),
            r ? h.splice(h.delegateCount++, 0, m) : h.push(m),
            (g.event.global[y] = !0));
        e = null;
      }
    },
    remove: function (e, n, o, a, r) {
      var i = g.hasData(e) && g._data(e),
        l,
        s,
        d,
        p,
        c,
        u,
        m,
        h,
        y,
        f,
        _;
      if (i && (u = i.events)) {
        for (n = (n || '').match(D) || [''], c = n.length; c--; ) {
          if (((d = Z.exec(n[c]) || []), (y = _ = d[1]), (f = (d[2] || '').split('.').sort()), !y)) {
            for (y in u) g.event.remove(e, y + n[c], o, a, !0);
            continue;
          }
          for (
            m = g.event.special[y] || {},
              y = (a ? m.delegateType : m.bindType) || y,
              h = u[y] || [],
              d = d[2] && new RegExp('(^|\\.)' + f.join('\\.(?:.*\\.|)') + '(\\.|$)'),
              p = l = h.length;
            l--;

          )
            (s = h[l]),
              (r || _ === s.origType) &&
                (!o || o.guid === s.guid) &&
                (!d || d.test(s.namespace)) &&
                (!a || a === s.selector || ('**' === a && s.selector)) &&
                (h.splice(l, 1), s.selector && h.delegateCount--, m.remove && m.remove.call(e, s));
          p &&
            !h.length &&
            ((!m.teardown || !1 === m.teardown.call(e, f, i.handle)) && g.removeEvent(e, y, i.handle), delete u[y]);
        }
        g.isEmptyObject(u) && (delete i.handle, g._removeData(e, 'events'));
      }
    },
    trigger: function (n, o, a, r) {
      var s = [a || l],
        d = h.call(n, 'type') ? n.type : n,
        p = h.call(n, 'namespace') ? n.namespace.split('.') : [],
        c,
        u,
        m,
        y,
        f,
        _,
        b;
      if (
        ((m = _ = a = a || l), 3 !== a.nodeType && 8 !== a.nodeType) &&
        !J.test(d + g.event.triggered) &&
        (-1 < d.indexOf('.') && ((p = d.split('.')), (d = p.shift()), p.sort()),
        (u = 0 > d.indexOf(':') && 'on' + d),
        (n = n[g.expando] ? n : new g.Event(d, 'object' === _typeof(n) && n)),
        (n.isTrigger = r ? 2 : 3),
        (n.namespace = p.join('.')),
        (n.rnamespace = n.namespace ? new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
        (n.result = void 0),
        n.target || (n.target = a),
        (o = null == o ? [n] : g.makeArray(o, [n])),
        (f = g.event.special[d] || {}),
        r || !f.trigger || !1 !== f.trigger.apply(a, o))
      ) {
        if (!r && !f.noBubble && !g.isWindow(a)) {
          for (y = f.delegateType || d, J.test(y + d) || (m = m.parentNode); m; m = m.parentNode) s.push(m), (_ = m);
          _ === (a.ownerDocument || l) && s.push(_.defaultView || _.parentWindow || t);
        }
        for (b = 0; (m = s[b++]) && !n.isPropagationStopped(); )
          (n.type = 1 < b ? y : f.bindType || d),
            (c = (g._data(m, 'events') || {})[n.type] && g._data(m, 'handle')),
            c && c.apply(m, o),
            (c = u && m[u]),
            c && c.apply && e(m) && ((n.result = c.apply(m, o)), !1 === n.result && n.preventDefault());
        if (
          ((n.type = d),
          !r &&
            !n.isDefaultPrevented() &&
            (!f._default || !1 === f._default.apply(s.pop(), o)) &&
            e(a) &&
            u &&
            a[d] &&
            !g.isWindow(a))
        ) {
          (_ = a[u]), _ && (a[u] = null), (g.event.triggered = d);
          try {
            a[d]();
          } catch (t) {}
          (g.event.triggered = void 0), _ && (a[u] = _);
        }
        return n.result;
      }
    },
    dispatch: function (e) {
      e = g.event.fix(e);
      var t = [],
        n = s.call(arguments),
        o = (g._data(this, 'events') || {})[e.type] || [],
        a = g.event.special[e.type] || {},
        r,
        l,
        d,
        p,
        c;
      if (((n[0] = e), (e.delegateTarget = this), !(a.preDispatch && !1 === a.preDispatch.call(this, e)))) {
        for (t = g.event.handlers.call(this, e, o), r = 0; (p = t[r++]) && !e.isPropagationStopped(); )
          for (e.currentTarget = p.elem, l = 0; (c = p.handlers[l++]) && !e.isImmediatePropagationStopped(); )
            (!e.rnamespace || e.rnamespace.test(c.namespace)) &&
              ((e.handleObj = c),
              (e.data = c.data),
              (d = ((g.event.special[c.origType] || {}).handle || c.handler).apply(p.elem, n)),
              void 0 !== d && !1 === (e.result = d) && (e.preventDefault(), e.stopPropagation()));
        return a.postDispatch && a.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n = [],
        o = t.delegateCount,
        a = e.target,
        r,
        l,
        s,
        d;
      if (o && a.nodeType && ('click' !== e.type || isNaN(e.button) || 1 > e.button))
        for (; a != this; a = a.parentNode || this)
          if (1 === a.nodeType && (!0 !== a.disabled || 'click' !== e.type)) {
            for (l = [], r = 0; r < o; r++)
              (d = t[r]),
                (s = d.selector + ' '),
                void 0 === l[s] &&
                  (l[s] = d.needsContext ? -1 < g(s, this).index(a) : g.find(s, this, null, [a]).length),
                l[s] && l.push(d);
            l.length &&
              n.push({
                elem: a,
                handlers: l,
              });
          }
      return (
        o < t.length &&
          n.push({
            elem: this,
            handlers: t.slice(o),
          }),
        n
      );
    },
    fix: function (e) {
      if (e[g.expando]) return e;
      var t = e.type,
        n = e,
        o = this.fixHooks[t],
        a,
        r,
        s;
      for (
        o || (this.fixHooks[t] = o = Y.test(t) ? this.mouseHooks : K.test(t) ? this.keyHooks : {}),
          s = o.props ? this.props.concat(o.props) : this.props,
          e = new g.Event(n),
          a = s.length;
        a--;

      )
        (r = s[a]), (e[r] = n[r]);
      return (
        e.target || (e.target = n.srcElement || l),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        o.filter ? o.filter(e, n) : e
      );
    },
    props: [
      'altKey',
      'bubbles',
      'cancelable',
      'ctrlKey',
      'currentTarget',
      'detail',
      'eventPhase',
      'metaKey',
      'relatedTarget',
      'shiftKey',
      'target',
      'timeStamp',
      'view',
      'which',
    ],
    fixHooks: {},
    keyHooks: {
      props: ['char', 'charCode', 'key', 'keyCode'],
      filter: function (e, t) {
        return null == e.which && (e.which = null == t.charCode ? t.keyCode : t.charCode), e;
      },
    },
    mouseHooks: {
      props: [
        'button',
        'buttons',
        'clientX',
        'clientY',
        'fromElement',
        'offsetX',
        'offsetY',
        'pageX',
        'pageY',
        'screenX',
        'screenY',
        'toElement',
      ],
      filter: function (e, t) {
        var n = t.button,
          o = t.fromElement,
          a,
          r,
          i;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((r = e.target.ownerDocument || l),
            (i = r.documentElement),
            (a = r.body),
            (e.pageX =
              t.clientX +
              ((i && i.scrollLeft) || (a && a.scrollLeft) || 0) -
              ((i && i.clientLeft) || (a && a.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((i && i.scrollTop) || (a && a.scrollTop) || 0) -
              ((i && i.clientTop) || (a && a.clientTop) || 0))),
          !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o),
          e.which || void 0 === n || (e.which = 1 & n ? 1 : 2 & n ? 3 : 4 & n ? 2 : 0),
          e
        );
      },
    },
    special: {
      load: {
        noBubble: !0,
      },
      focus: {
        trigger: function () {
          if (this !== safeActiveElement() && this.focus)
            try {
              return this.focus(), !1;
            } catch (t) {}
        },
        delegateType: 'focusin',
      },
      blur: {
        trigger: function () {
          if (this === safeActiveElement() && this.blur) return this.blur(), !1;
        },
        delegateType: 'focusout',
      },
      click: {
        trigger: function () {
          if (g.nodeName(this, 'input') && 'checkbox' === this.type && this.click) return this.click(), !1;
        },
        _default: function (e) {
          return g.nodeName(e.target, 'a');
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (t, n, o) {
      var a = g.extend(new g.Event(), o, {
        type: t,
        isSimulated: !0,
      });
      g.event.trigger(a, null, n), a.isDefaultPrevented() && o.preventDefault();
    },
  }),
    (g.removeEvent = l.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }
      : function (e, t, n) {
          var o = 'on' + t;
          e.detachEvent && ('undefined' == typeof e[o] && (e[o] = null), e.detachEvent(o, n));
        }),
    (g.Event = function (e, t) {
      return this instanceof g.Event
        ? void (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? returnTrue
                  : returnFalse))
            : (this.type = e),
          t && g.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || g.now()),
          (this[g.expando] = !0))
        : new g.Event(e, t);
    }),
    (g.Event.prototype = {
      constructor: g.Event,
      isDefaultPrevented: returnFalse,
      isPropagationStopped: returnFalse,
      isImmediatePropagationStopped: returnFalse,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = returnTrue), t && (t.preventDefault ? t.preventDefault() : (t.returnValue = !1));
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = returnTrue),
          !t || this.isSimulated || (t.stopPropagation && t.stopPropagation(), (t.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = returnTrue),
          t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    g.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, t) {
        g.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n = this,
              o = e.relatedTarget,
              a = e.handleObj,
              r;
            return (
              (o && (o === n || g.contains(n, o))) ||
                ((e.type = a.origType), (r = a.handler.apply(this, arguments)), (e.type = t)),
              r
            );
          },
        };
      }
    ),
    y.submit ||
      (g.event.special.submit = {
        setup: function () {
          return (
            !g.nodeName(this, 'form') &&
            void g.event.add(this, 'click._submit keypress._submit', function (t) {
              var e = t.target,
                n = g.nodeName(e, 'input') || g.nodeName(e, 'button') ? g.prop(e, 'form') : void 0;
              n &&
                !g._data(n, 'submit') &&
                (g.event.add(n, 'submit._submit', function (e) {
                  e._submitBubble = !0;
                }),
                g._data(n, 'submit', !0));
            })
          );
        },
        postDispatch: function (e) {
          e._submitBubble &&
            (delete e._submitBubble, this.parentNode && !e.isTrigger && g.event.simulate('submit', this.parentNode, e));
        },
        teardown: function () {
          return !g.nodeName(this, 'form') && void g.event.remove(this, '._submit');
        },
      }),
    y.change ||
      (g.event.special.change = {
        setup: function () {
          return G.test(this.nodeName)
            ? (('checkbox' === this.type || 'radio' === this.type) &&
                (g.event.add(this, 'propertychange._change', function (e) {
                  'checked' === e.originalEvent.propertyName && (this._justChanged = !0);
                }),
                g.event.add(this, 'click._change', function (e) {
                  this._justChanged && !e.isTrigger && (this._justChanged = !1), g.event.simulate('change', this, e);
                })),
              !1)
            : void g.event.add(this, 'beforeactivate._change', function (t) {
                var e = t.target;
                G.test(e.nodeName) &&
                  !g._data(e, 'change') &&
                  (g.event.add(e, 'change._change', function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || g.event.simulate('change', this.parentNode, e);
                  }),
                  g._data(e, 'change', !0));
              });
        },
        handle: function (e) {
          var t = e.target;
          if (this !== t || e.isSimulated || e.isTrigger || ('radio' !== t.type && 'checkbox' !== t.type))
            return e.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          return g.event.remove(this, '._change'), !G.test(this.nodeName);
        },
      }),
    y.focusin ||
      g.each(
        {
          focus: 'focusin',
          blur: 'focusout',
        },
        function (e, t) {
          var n = function (e) {
            g.event.simulate(t, e.target, g.event.fix(e));
          };
          g.event.special[t] = {
            setup: function () {
              var o = this.ownerDocument || this,
                a = g._data(o, t);
              a || o.addEventListener(e, n, !0), g._data(o, t, (a || 0) + 1);
            },
            teardown: function () {
              var o = this.ownerDocument || this,
                a = g._data(o, t) - 1;
              a ? g._data(o, t, a) : (o.removeEventListener(e, n, !0), g._removeData(o, t));
            },
          };
        }
      ),
    g.fn.extend({
      on: function (e, t, n, o) {
        return _on(this, e, t, n, o);
      },
      one: function (e, t, n, o) {
        return _on(this, e, t, n, o, 1);
      },
      off: function (e, t, n) {
        var o, a;
        if (e && e.preventDefault && e.handleObj)
          return (
            (o = e.handleObj),
            g(e.delegateTarget).off(o.namespace ? o.origType + '.' + o.namespace : o.origType, o.selector, o.handler),
            this
          );
        if ('object' === _typeof(e)) {
          for (a in e) this.off(a, t, e[a]);
          return this;
        }
        return (
          (!1 === t || 'function' == typeof t) && ((n = t), (t = void 0)),
          !1 === n && (n = returnFalse),
          this.each(function () {
            g.event.remove(this, e, n, t);
          })
        );
      },
      trigger: function (e, t) {
        return this.each(function () {
          g.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return g.event.trigger(e, t, n, !0);
      },
    });
  var ee = / jQuery\d+="(?:null|\d+)"/g,
    te = new RegExp(
      '<(?:' +
        'abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video' +
        ')[\\s/>]',
      'i'
    ),
    ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    oe = /<script|<style|<link/i,
    ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    re = /^true\/(.*)/,
    ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    le = createSafeFragment(l),
    se = le.appendChild(l.createElement('div'));
  g.extend({
    htmlPrefilter: function (e) {
      return e.replace(ne, '<$1></$2>');
    },
    clone: function clone(e, t, n) {
      var o = g.contains(e.ownerDocument, e),
        a,
        r,
        clone,
        l,
        s;
      if (
        (y.html5Clone || g.isXMLDoc(e) || !te.test('<' + e.nodeName + '>')
          ? (clone = e.cloneNode(!0))
          : ((se.innerHTML = e.outerHTML), se.removeChild((clone = se.firstChild))),
        (!y.noCloneEvent || !y.noCloneChecked) && (1 === e.nodeType || 11 === e.nodeType) && !g.isXMLDoc(e))
      )
        for (a = getAll(clone), s = getAll(e), l = 0; null != (r = s[l]); ++l) a[l] && fixCloneNodeIssues(r, a[l]);
      if (t)
        if (n) for (s = s || getAll(e), a = a || getAll(clone), l = 0; null != (r = s[l]); l++) cloneCopyEvent(r, a[l]);
        else cloneCopyEvent(e, clone);
      return (
        (a = getAll(clone, 'script')),
        0 < a.length && setGlobalEval(a, !o && getAll(e, 'script')),
        (a = s = r = null),
        clone
      );
    },
    cleanData: function (t, n) {
      for (
        var o = 0, a = g.expando, l = g.cache, s = y.attributes, d = g.event.special, p, c, u, m;
        null != (p = t[o]);
        o++
      )
        if ((n || e(p)) && ((u = p[a]), (m = u && l[u]), m)) {
          if (m.events) for (c in m.events) d[c] ? g.event.remove(p, c) : g.removeEvent(p, c, m.handle);
          l[u] &&
            (delete l[u],
            s || 'undefined' == typeof p.removeAttribute ? (p[a] = void 0) : p.removeAttribute(a),
            r.push(u));
        }
    },
  }),
    g.fn.extend({
      domManip: domManip,
      detach: function (e) {
        return _remove(this, e, !0);
      },
      remove: function (e) {
        return _remove(this, e);
      },
      text: function (e) {
        return M(
          this,
          function (e) {
            return void 0 === e
              ? g.text(this)
              : this.empty().append(((this[0] && this[0].ownerDocument) || l).createTextNode(e));
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return domManip(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = manipulationTarget(this, e);
            t.appendChild(e);
          }
        });
      },
      prepend: function () {
        return domManip(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = manipulationTarget(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return domManip(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return domManip(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e = 0, t; null != (t = this[e]); e++) {
          for (1 === t.nodeType && g.cleanData(getAll(t, !1)); t.firstChild; ) t.removeChild(t.firstChild);
          t.options && g.nodeName(t, 'select') && (t.options.length = 0);
        }
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return g.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return M(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              o = this.length;
            if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ee, '') : void 0;
            if (
              'string' == typeof e &&
              !oe.test(e) &&
              (y.htmlSerialize || !te.test(e)) &&
              (y.leadingWhitespace || !z.test(e)) &&
              !X[(V.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = g.htmlPrefilter(e);
              try {
                for (; n < o; n++)
                  (t = this[n] || {}), 1 === t.nodeType && (g.cleanData(getAll(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (t) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return domManip(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            0 > g.inArray(this, e) && (g.cleanData(getAll(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    g.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, t) {
        g.fn[e] = function (e) {
          for (var n = 0, o = [], a = g(e), r = a.length - 1, l; n <= r; n++)
            (l = n === r ? this : this.clone(!0)), g(a[n])[t](l), p.apply(o, l.get());
          return this.pushStack(o);
        };
      }
    );
  var de = {
      HTML: 'block',
      BODY: 'block',
    },
    pe = /^margin/,
    ce = new RegExp('^(' + H + ')(?!px)[a-z%]+$', 'i'),
    ue = function (e, t, n, o) {
      var a = {},
        r,
        i;
      for (i in t) (a[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.apply(e, o || [])), t)) e.style[i] = a[i];
      return r;
    },
    me = l.documentElement,
    he;
  (function () {
    function computeStyleTests() {
      var p = l.documentElement,
        c,
        u;
      p.appendChild(e),
        (n.style.cssText =
          '-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%'),
        (o = r = d = !1),
        (a = s = !0),
        t.getComputedStyle &&
          ((u = t.getComputedStyle(n)),
          (o = '1%' !== (u || {}).top),
          (d = '2px' === (u || {}).marginLeft),
          (r =
            '4px' ===
            (
              u || {
                width: '4px',
              }
            ).width),
          (n.style.marginRight = '50%'),
          (a =
            '4px' ===
            (
              u || {
                marginRight: '4px',
              }
            ).marginRight),
          (c = n.appendChild(l.createElement('div'))),
          (c.style.cssText = n.style.cssText =
            '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0'),
          (c.style.marginRight = c.style.width = '0'),
          (n.style.width = '1px'),
          (s = !parseFloat((t.getComputedStyle(c) || {}).marginRight)),
          n.removeChild(c)),
        (n.style.display = 'none'),
        (i = 0 === n.getClientRects().length),
        i &&
          ((n.style.display = ''),
          (n.innerHTML = '<table><tr><td></td><td>t</td></tr></table>'),
          (n.childNodes[0].style.borderCollapse = 'separate'),
          (c = n.getElementsByTagName('td')),
          (c[0].style.cssText = 'margin:0;border:0;padding:0;display:none'),
          (i = 0 === c[0].offsetHeight),
          i && ((c[0].style.display = ''), (c[1].style.display = 'none'), (i = 0 === c[0].offsetHeight))),
        p.removeChild(e);
    }
    var e = l.createElement('div'),
      n = l.createElement('div'),
      o,
      a,
      r,
      i,
      s,
      d;
    n.style &&
      ((n.style.cssText = 'float:left;opacity:.5'),
      (y.opacity = '0.5' === n.style.opacity),
      (y.cssFloat = !!n.style.cssFloat),
      (n.style.backgroundClip = 'content-box'),
      (n.cloneNode(!0).style.backgroundClip = ''),
      (y.clearCloneStyle = 'content-box' === n.style.backgroundClip),
      (e = l.createElement('div')),
      (e.style.cssText = 'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute'),
      (n.innerHTML = ''),
      e.appendChild(n),
      (y.boxSizing = '' === n.style.boxSizing || '' === n.style.MozBoxSizing || '' === n.style.WebkitBoxSizing),
      g.extend(y, {
        reliableHiddenOffsets: function () {
          return null == o && computeStyleTests(), i;
        },
        boxSizingReliable: function () {
          return null == o && computeStyleTests(), r;
        },
        pixelMarginRight: function () {
          return null == o && computeStyleTests(), a;
        },
        pixelPosition: function () {
          return null == o && computeStyleTests(), o;
        },
        reliableMarginRight: function () {
          return null == o && computeStyleTests(), s;
        },
        reliableMarginLeft: function () {
          return null == o && computeStyleTests(), d;
        },
      }));
  })();
  var ye = /^(top|right|bottom|left)$/,
    fe,
    ge;
  t.getComputedStyle
    ? ((fe = function (e) {
        var n = e.ownerDocument.defaultView;
        return (n && n.opener) || (n = t), n.getComputedStyle(e);
      }),
      (ge = function (e, t, n) {
        var o = e.style,
          a,
          r,
          i,
          l;
        return (
          (n = n || fe(e)),
          (l = n ? n.getPropertyValue(t) || n[t] : void 0),
          ('' !== l && void 0 !== l) || g.contains(e.ownerDocument, e) || (l = g.style(e, t)),
          n &&
            !y.pixelMarginRight() &&
            ce.test(l) &&
            pe.test(t) &&
            ((a = o.width),
            (r = o.minWidth),
            (i = o.maxWidth),
            (o.minWidth = o.maxWidth = o.width = l),
            (l = n.width),
            (o.width = a),
            (o.minWidth = r),
            (o.maxWidth = i)),
          void 0 === l ? l : l + ''
        );
      }))
    : me.currentStyle &&
      ((fe = function (e) {
        return e.currentStyle;
      }),
      (ge = function (e, t, n) {
        var o = e.style,
          a,
          r,
          i,
          l;
        return (
          (n = n || fe(e)),
          (l = n ? n[t] : void 0),
          null == l && o && o[t] && (l = o[t]),
          ce.test(l) &&
            !ye.test(t) &&
            ((a = o.left),
            (r = e.runtimeStyle),
            (i = r && r.left),
            i && (r.left = e.currentStyle.left),
            (o.left = 'fontSize' === t ? '1em' : l),
            (l = o.pixelLeft + 'px'),
            (o.left = a),
            i && (r.left = i)),
          void 0 === l ? l : l + '' || 'auto'
        );
      }));
  var _e = /alpha\([^)]*\)/i,
    be = /opacity\s*=\s*([^)]*)/i,
    xe = /^(none|table(?!-c[ea]).+)/,
    ve = new RegExp('^(' + H + ')(.*)$', 'i'),
    Ce = {
      position: 'absolute',
      visibility: 'hidden',
      display: 'block',
    },
    Te = {
      letterSpacing: '0',
      fontWeight: '400',
    },
    ke = ['Webkit', 'O', 'Moz', 'ms'],
    je = l.createElement('div').style;
  g.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = ge(e, 'opacity');
            return '' === n ? '1' : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {
      float: y.cssFloat ? 'cssFloat' : 'styleFloat',
    },
    style: function style(e, t, n, o) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var a = g.camelCase(t),
          style = e.style,
          r,
          i,
          l;
        if (
          ((t = g.cssProps[a] || (g.cssProps[a] = vendorPropName(a) || a)),
          (l = g.cssHooks[t] || g.cssHooks[a]),
          void 0 !== n)
        ) {
          if (
            ((i = _typeof(n)),
            'string' === i && (r = B.exec(n)) && r[1] && ((n = adjustCSS(e, t, r)), (i = 'number')),
            null == n || n !== n)
          )
            return;
          if (
            ('number' === i && (n += (r && r[3]) || (g.cssNumber[a] ? '' : 'px')),
            y.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (style[t] = 'inherit'),
            !l || !('set' in l) || void 0 !== (n = l.set(e, n, o)))
          )
            try {
              style[t] = n;
            } catch (t) {}
        } else return l && 'get' in l && void 0 !== (r = l.get(e, !1, o)) ? r : style[t];
      }
    },
    css: function (e, t, n, o) {
      var a = g.camelCase(t),
        r,
        i,
        l;
      return (
        (t = g.cssProps[a] || (g.cssProps[a] = vendorPropName(a) || a)),
        (l = g.cssHooks[t] || g.cssHooks[a]),
        l && 'get' in l && (i = l.get(e, !0, n)),
        void 0 === i && (i = ge(e, t, o)),
        'normal' === i && t in Te && (i = Te[t]),
        '' === n || n ? ((r = parseFloat(i)), !0 === n || isFinite(r) ? r || 0 : i) : i
      );
    },
  }),
    g.each(['height', 'width'], function (e, t) {
      g.cssHooks[t] = {
        get: function (e, n, o) {
          if (n)
            return xe.test(g.css(e, 'display')) && 0 === e.offsetWidth
              ? ue(e, Ce, function () {
                  return getWidthOrHeight(e, t, o);
                })
              : getWidthOrHeight(e, t, o);
        },
        set: function (e, n, o) {
          var a = o && fe(e);
          return setPositiveNumber(
            e,
            n,
            o ? augmentWidthOrHeight(e, t, o, y.boxSizing && 'border-box' === g.css(e, 'boxSizing', !1, a), a) : 0
          );
        },
      };
    }),
    y.opacity ||
      (g.cssHooks.opacity = {
        get: function (e, t) {
          return be.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || '')
            ? 0.01 * parseFloat(RegExp.$1) + ''
            : t
            ? '1'
            : '';
        },
        set: function (e, t) {
          var n = e.style,
            o = e.currentStyle,
            a = g.isNumeric(t) ? 'alpha(opacity=' + 100 * t + ')' : '',
            r = (o && o.filter) || n.filter || '';
          (n.zoom = 1),
            ((1 <= t || '' === t) &&
              '' === g.trim(r.replace(_e, '')) &&
              n.removeAttribute &&
              (n.removeAttribute('filter'), '' === t || (o && !o.filter))) ||
              (n.filter = _e.test(r) ? r.replace(_e, a) : r + ' ' + a);
        },
      }),
    (g.cssHooks.marginRight = addGetHookIf(y.reliableMarginRight, function (e, t) {
      if (t)
        return ue(
          e,
          {
            display: 'inline-block',
          },
          ge,
          [e, 'marginRight']
        );
    })),
    (g.cssHooks.marginLeft = addGetHookIf(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(ge(e, 'marginLeft')) ||
            (g.contains(e.ownerDocument, e)
              ? e.getBoundingClientRect().left -
                ue(
                  e,
                  {
                    marginLeft: 0,
                  },
                  function () {
                    return e.getBoundingClientRect().left;
                  }
                )
              : 0)) + 'px'
        );
    })),
    g.each(
      {
        margin: '',
        padding: '',
        border: 'Width',
      },
      function (e, t) {
        (g.cssHooks[e + t] = {
          expand: function (n) {
            for (var o = 0, a = {}, r = 'string' == typeof n ? n.split(' ') : [n]; 4 > o; o++)
              a[e + q[o] + t] = r[o] || r[o - 2] || r[0];
            return a;
          },
        }),
          pe.test(e) || (g.cssHooks[e + t].set = setPositiveNumber);
      }
    ),
    g.fn.extend({
      css: function (e, t) {
        return M(
          this,
          function (e, t, n) {
            var o = {},
              a = 0,
              r,
              l;
            if (g.isArray(t)) {
              for (r = fe(e), l = t.length; a < l; a++) o[t[a]] = g.css(e, t[a], !1, r);
              return o;
            }
            return void 0 === n ? g.css(e, t) : g.style(e, t, n);
          },
          e,
          t,
          1 < arguments.length
        );
      },
      show: function () {
        return showHide(this, !0);
      },
      hide: function () {
        return showHide(this);
      },
      toggle: function (e) {
        return 'boolean' == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              I(this) ? g(this).show() : g(this).hide();
            });
      },
    }),
    (g.Tween = Tween),
    (Tween.prototype = {
      constructor: Tween,
      init: function (e, t, n, o, a, r) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = a || g.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = o),
          (this.unit = r || (g.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = Tween.propHooks[this.prop];
        return e && e.get ? e.get(this) : Tween.propHooks._default.get(this);
      },
      run: function (e) {
        var t = Tween.propHooks[this.prop],
          n;
        return (
          (this.pos = this.options.duration
            ? (n = g.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration))
            : (n = e)),
          (this.now = (this.end - this.start) * n + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          t && t.set ? t.set(this) : Tween.propHooks._default.set(this),
          this
        );
      },
    }),
    (Tween.prototype.init.prototype = Tween.prototype),
    (Tween.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : ((t = g.css(e.elem, e.prop, '')), t && 'auto' !== t ? t : 0);
        },
        set: function (e) {
          g.fx.step[e.prop]
            ? g.fx.step[e.prop](e)
            : 1 === e.elem.nodeType && (null != e.elem.style[g.cssProps[e.prop]] || g.cssHooks[e.prop])
            ? g.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      },
    }),
    (g.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        var t = Math.cos,
          n = Math.PI;
        return 0.5 - t(e * n) / 2;
      },
      _default: 'swing',
    }),
    (g.fx = Tween.prototype.init),
    (g.fx.step = {});
  var we = /^(?:toggle|show|hide)$/,
    Ee = /queueHooks$/,
    Se,
    Fe;
  (g.Animation = g.extend(Animation, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return adjustCSS(n.elem, e, B.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      g.isFunction(e) ? ((t = e), (e = ['*'])) : (e = e.match(D));
      for (var n = 0, o = e.length, a; n < o; n++)
        (a = e[n]), (Animation.tweeners[a] = Animation.tweeners[a] || []), Animation.tweeners[a].unshift(t);
    },
    prefilters: [defaultPrefilter],
    prefilter: function (e, t) {
      t ? Animation.prefilters.unshift(e) : Animation.prefilters.push(e);
    },
  })),
    (g.speed = function (e, t, n) {
      var o =
        e && 'object' === _typeof(e)
          ? g.extend({}, e)
          : {
              complete: n || (!n && t) || (g.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !g.isFunction(t) && t),
            };
      return (
        (o.duration = g.fx.off
          ? 0
          : 'number' == typeof o.duration
          ? o.duration
          : o.duration in g.fx.speeds
          ? g.fx.speeds[o.duration]
          : g.fx.speeds._default),
        (null == o.queue || !0 === o.queue) && (o.queue = 'fx'),
        (o.old = o.complete),
        (o.complete = function () {
          g.isFunction(o.old) && o.old.call(this), o.queue && g.dequeue(this, o.queue);
        }),
        o
      );
    }),
    g.fn.extend({
      fadeTo: function (e, t, n, o) {
        return this.filter(I).css('opacity', 0).show().end().animate(
          {
            opacity: t,
          },
          e,
          n,
          o
        );
      },
      animate: function (e, t, n, o) {
        var a = g.isEmptyObject(e),
          r = g.speed(t, n, o),
          i = function () {
            var t = Animation(this, g.extend({}, e), r);
            (a || g._data(this, 'finish')) && t.stop(!0);
          };
        return (i.finish = i), a || !1 === r.queue ? this.each(i) : this.queue(r.queue, i);
      },
      stop: function (e, t, n) {
        var o = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          'string' != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || 'fx', []),
          this.each(function () {
            var t = !0,
              a = null != e && e + 'queueHooks',
              r = g.timers,
              i = g._data(this);
            if (a) i[a] && i[a].stop && o(i[a]);
            else for (a in i) i[a] && i[a].stop && Ee.test(a) && o(i[a]);
            for (a = r.length; a--; )
              r[a].elem === this && (null == e || r[a].queue === e) && (r[a].anim.stop(n), (t = !1), r.splice(a, 1));
            (t || !n) && g.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || 'fx'),
          this.each(function () {
            var t = g._data(this),
              n = t[e + 'queue'],
              o = t[e + 'queueHooks'],
              a = g.timers,
              r = n ? n.length : 0,
              i;
            for (t.finish = !0, g.queue(this, e, []), o && o.stop && o.stop.call(this, !0), i = a.length; i--; )
              a[i].elem === this && a[i].queue === e && (a[i].anim.stop(!0), a.splice(i, 1));
            for (i = 0; i < r; i++) n[i] && n[i].finish && n[i].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    g.each(['toggle', 'show', 'hide'], function (e, t) {
      var n = g.fn[t];
      g.fn[t] = function (e, o, a) {
        return null == e || 'boolean' == typeof e ? n.apply(this, arguments) : this.animate(genFx(t, !0), e, o, a);
      };
    }),
    g.each(
      {
        slideDown: genFx('show'),
        slideUp: genFx('hide'),
        slideToggle: genFx('toggle'),
        fadeIn: {
          opacity: 'show',
        },
        fadeOut: {
          opacity: 'hide',
        },
        fadeToggle: {
          opacity: 'toggle',
        },
      },
      function (e, t) {
        g.fn[e] = function (e, n, o) {
          return this.animate(t, e, n, o);
        };
      }
    ),
    (g.timers = []),
    (g.fx.tick = function () {
      var e = g.timers,
        t = 0,
        n;
      for (Se = g.now(); t < e.length; t++) (n = e[t]), n() || e[t] !== n || e.splice(t--, 1);
      e.length || g.fx.stop(), (Se = void 0);
    }),
    (g.fx.timer = function (e) {
      g.timers.push(e), e() ? g.fx.start() : g.timers.pop();
    }),
    (g.fx.interval = 13),
    (g.fx.start = function () {
      Fe || (Fe = t.setInterval(g.fx.tick, g.fx.interval));
    }),
    (g.fx.stop = function () {
      t.clearInterval(Fe), (Fe = null);
    }),
    (g.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400,
    }),
    (g.fn.delay = function (e, n) {
      return (
        (e = g.fx ? g.fx.speeds[e] || e : e),
        (n = n || 'fx'),
        this.queue(n, function (n, o) {
          var a = t.setTimeout(n, e);
          o.stop = function () {
            t.clearTimeout(a);
          };
        })
      );
    }),
    (function () {
      var e = l.createElement('input'),
        t = l.createElement('div'),
        n = l.createElement('select'),
        o = n.appendChild(l.createElement('option')),
        r;
      (t = l.createElement('div')),
        t.setAttribute('className', 't'),
        (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (r = t.getElementsByTagName('a')[0]),
        e.setAttribute('type', 'checkbox'),
        t.appendChild(e),
        (r = t.getElementsByTagName('a')[0]),
        (r.style.cssText = 'top:1px'),
        (y.getSetAttribute = 't' !== t.className),
        (y.style = /top/.test(r.getAttribute('style'))),
        (y.hrefNormalized = '/a' === r.getAttribute('href')),
        (y.checkOn = !!e.value),
        (y.optSelected = o.selected),
        (y.enctype = !!l.createElement('form').enctype),
        (n.disabled = !0),
        (y.optDisabled = !o.disabled),
        (e = l.createElement('input')),
        e.setAttribute('value', ''),
        (y.input = '' === e.getAttribute('value')),
        (e.value = 't'),
        e.setAttribute('type', 'radio'),
        (y.radioValue = 't' === e.value);
    })();
  var Ne = /\r/g,
    Ae = /[\x20\t\r\n\f]+/g;
  g.fn.extend({
    val: function (e) {
      var t = this[0],
        n,
        o,
        a;
      return arguments.length
        ? ((a = g.isFunction(e)),
          this.each(function (t) {
            var o;
            1 !== this.nodeType ||
              ((o = a ? e.call(this, t, g(this).val()) : e),
              null == o
                ? (o = '')
                : 'number' == typeof o
                ? (o += '')
                : g.isArray(o) &&
                  (o = g.map(o, function (e) {
                    return null == e ? '' : e + '';
                  })),
              (n = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()]),
              (!n || !('set' in n) || void 0 === n.set(this, o, 'value')) && (this.value = o));
          }))
        : t
        ? ((n = g.valHooks[t.type] || g.valHooks[t.nodeName.toLowerCase()]),
          n && 'get' in n && void 0 !== (o = n.get(t, 'value')))
          ? o
          : ((o = t.value), 'string' == typeof o ? o.replace(Ne, '') : null == o ? '' : o)
        : void 0;
    },
  }),
    g.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = g.find.attr(e, 'value');
            return null == t ? g.trim(g.text(e)).replace(Ae, ' ') : t;
          },
        },
        select: {
          get: function (e) {
            for (
              var t = e.options,
                n = e.selectedIndex,
                o = 'select-one' === e.type || 0 > n,
                a = o ? null : [],
                r = o ? n + 1 : t.length,
                l = 0 > n ? r : o ? n : 0,
                s,
                d;
              l < r;
              l++
            )
              if (
                ((d = t[l]),
                (d.selected || l === n) &&
                  (y.optDisabled ? !d.disabled : null === d.getAttribute('disabled')) &&
                  (!d.parentNode.disabled || !g.nodeName(d.parentNode, 'optgroup')))
              ) {
                if (((s = g(d).val()), o)) return s;
                a.push(s);
              }
            return a;
          },
          set: function (e, t) {
            for (var n = e.options, o = g.makeArray(t), a = n.length, r, l; a--; )
              if (((l = n[a]), -1 < g.inArray(g.valHooks.option.get(l), o)))
                try {
                  l.selected = r = !0;
                } catch (e) {
                  l.scrollHeight;
                }
              else l.selected = !1;
            return r || (e.selectedIndex = -1), n;
          },
        },
      },
    }),
    g.each(['radio', 'checkbox'], function () {
      (g.valHooks[this] = {
        set: function (e, t) {
          if (g.isArray(t)) return (e.checked = -1 < g.inArray(g(e).val(), t));
        },
      }),
        y.checkOn ||
          (g.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    });
  var Pe = g.expr.attrHandle,
    De = /^(?:checked|selected)$/i,
    Le = y.getSetAttribute,
    Re = y.input,
    Oe,
    He;
  g.fn.extend({
    attr: function (e, t) {
      return M(this, g.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        g.removeAttr(this, e);
      });
    },
  }),
    g.extend({
      attr: function (e, t, n) {
        var o = e.nodeType,
          a,
          r;
        if (3 !== o && 8 !== o && 2 !== o)
          return 'undefined' == typeof e.getAttribute
            ? g.prop(e, t, n)
            : ((1 === o && g.isXMLDoc(e)) ||
                ((t = t.toLowerCase()), (r = g.attrHooks[t] || (g.expr.match.bool.test(t) ? He : Oe))),
              void 0 !== n)
            ? null === n
              ? void g.removeAttr(e, t)
              : r && 'set' in r && void 0 !== (a = r.set(e, n, t))
              ? a
              : (e.setAttribute(t, n + ''), n)
            : r && 'get' in r && null !== (a = r.get(e, t))
            ? a
            : ((a = g.find.attr(e, t)), null == a ? void 0 : a);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && 'radio' === t && g.nodeName(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n = 0,
          o = t && t.match(D),
          a,
          r;
        if (o && 1 === e.nodeType)
          for (; (a = o[n++]); )
            (r = g.propFix[a] || a),
              g.expr.match.bool.test(a)
                ? (Re && Le) || !De.test(a)
                  ? (e[r] = !1)
                  : (e[g.camelCase('default-' + a)] = e[r] = !1)
                : g.attr(e, a, ''),
              e.removeAttribute(Le ? a : r);
      },
    }),
    (He = {
      set: function (e, t, n) {
        return (
          !1 === t
            ? g.removeAttr(e, n)
            : (Re && Le) || !De.test(n)
            ? e.setAttribute((!Le && g.propFix[n]) || n, n)
            : (e[g.camelCase('default-' + n)] = e[n] = !0),
          n
        );
      },
    }),
    g.each(g.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = Pe[t] || g.find.attr;
      Pe[t] =
        (Re && Le) || !De.test(t)
          ? function (e, t, o) {
              var a, r;
              return o || ((r = Pe[t]), (Pe[t] = a), (a = null == n(e, t, o) ? null : t.toLowerCase()), (Pe[t] = r)), a;
            }
          : function (e, t, n) {
              if (!n) return e[g.camelCase('default-' + t)] ? t.toLowerCase() : null;
            };
    }),
    (Re && Le) ||
      (g.attrHooks.value = {
        set: function (e, t, n) {
          return g.nodeName(e, 'input') ? void (e.defaultValue = t) : Oe && Oe.set(e, t, n);
        },
      }),
    Le ||
      ((Oe = {
        set: function (e, t, n) {
          var o = e.getAttributeNode(n);
          if (
            (o || e.setAttributeNode((o = e.ownerDocument.createAttribute(n))),
            (o.value = t += ''),
            'value' === n || t === e.getAttribute(n))
          )
            return t;
        },
      }),
      (Pe.id = Pe.name = Pe.coords = function (e, t, n) {
        var o;
        if (!n) return (o = e.getAttributeNode(t)) && '' !== o.value ? o.value : null;
      }),
      (g.valHooks.button = {
        get: function (e, t) {
          var n = e.getAttributeNode(t);
          if (n && n.specified) return n.value;
        },
        set: Oe.set,
      }),
      (g.attrHooks.contenteditable = {
        set: function (e, t, n) {
          Oe.set(e, '' !== t && t, n);
        },
      }),
      g.each(['width', 'height'], function (e, t) {
        g.attrHooks[t] = {
          set: function (e, n) {
            if ('' === n) return e.setAttribute(t, 'auto'), n;
          },
        };
      })),
    y.style ||
      (g.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || void 0;
        },
        set: function (e, t) {
          return (e.style.cssText = t + '');
        },
      });
  var Be = /^(?:input|select|textarea|button|object)$/i,
    qe = /^(?:a|area)$/i;
  g.fn.extend({
    prop: function (e, t) {
      return M(this, g.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return (
        (e = g.propFix[e] || e),
        this.each(function () {
          try {
            (this[e] = void 0), delete this[e];
          } catch (t) {}
        })
      );
    },
  }),
    g.extend({
      prop: function (e, t, n) {
        var o = e.nodeType,
          a,
          r;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && g.isXMLDoc(e)) || ((t = g.propFix[t] || t), (r = g.propHooks[t])),
            void 0 === n
              ? r && 'get' in r && null !== (a = r.get(e, t))
                ? a
                : e[t]
              : r && 'set' in r && void 0 !== (a = r.set(e, n, t))
              ? a
              : (e[t] = n)
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = g.find.attr(e, 'tabindex');
            return t ? parseInt(t, 10) : Be.test(e.nodeName) || (qe.test(e.nodeName) && e.href) ? 0 : -1;
          },
        },
      },
      propFix: {
        for: 'htmlFor',
        class: 'className',
      },
    }),
    y.hrefNormalized ||
      g.each(['href', 'src'], function (e, t) {
        g.propHooks[t] = {
          get: function (e) {
            return e.getAttribute(t, 4);
          },
        };
      }),
    y.optSelected ||
      (g.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    g.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        g.propFix[this.toLowerCase()] = this;
      }
    ),
    y.enctype || (g.propFix.enctype = 'encoding');
  var Ie = /[\t\r\n\f]/g;
  g.fn.extend({
    addClass: function (e) {
      var t = 0,
        n,
        o,
        a,
        r,
        l,
        s,
        d;
      if (g.isFunction(e))
        return this.each(function (t) {
          g(this).addClass(e.call(this, t, getClass(this)));
        });
      if ('string' == typeof e && e)
        for (n = e.match(D) || []; (o = this[t++]); )
          if (((r = getClass(o)), (a = 1 === o.nodeType && (' ' + r + ' ').replace(Ie, ' ')), a)) {
            for (s = 0; (l = n[s++]); ) 0 > a.indexOf(' ' + l + ' ') && (a += l + ' ');
            (d = g.trim(a)), r !== d && g.attr(o, 'class', d);
          }
      return this;
    },
    removeClass: function (e) {
      var t = 0,
        n,
        o,
        a,
        r,
        l,
        s,
        d;
      if (g.isFunction(e))
        return this.each(function (t) {
          g(this).removeClass(e.call(this, t, getClass(this)));
        });
      if (!arguments.length) return this.attr('class', '');
      if ('string' == typeof e && e)
        for (n = e.match(D) || []; (o = this[t++]); )
          if (((r = getClass(o)), (a = 1 === o.nodeType && (' ' + r + ' ').replace(Ie, ' ')), a)) {
            for (s = 0; (l = n[s++]); ) for (; -1 < a.indexOf(' ' + l + ' '); ) a = a.replace(' ' + l + ' ', ' ');
            (d = g.trim(a)), r !== d && g.attr(o, 'class', d);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = _typeof(e);
      return 'boolean' == typeof t && 'string' === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : g.isFunction(e)
        ? this.each(function (n) {
            g(this).toggleClass(e.call(this, n, getClass(this), t), t);
          })
        : this.each(function () {
            var t, o, a, r;
            if ('string' === n)
              for (o = 0, a = g(this), r = e.match(D) || []; (t = r[o++]); )
                a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
            else
              (void 0 === e || 'boolean' === n) &&
                ((t = getClass(this)),
                t && g._data(this, '__className__', t),
                g.attr(this, 'class', t || !1 === e ? '' : g._data(this, '__className__') || ''));
          });
    },
    hasClass: function (e) {
      var t = 0,
        n,
        o;
      for (n = ' ' + e + ' '; (o = this[t++]); )
        if (1 === o.nodeType && -1 < (' ' + getClass(o) + ' ').replace(Ie, ' ').indexOf(n)) return !0;
      return !1;
    },
  }),
    g.each(
      [
        'blur',
        'focus',
        'focusin',
        'focusout',
        'load',
        'resize',
        'scroll',
        'unload',
        'click',
        'dblclick',
        'mousedown',
        'mouseup',
        'mousemove',
        'mouseover',
        'mouseout',
        'mouseenter',
        'mouseleave',
        'change',
        'select',
        'submit',
        'keydown',
        'keypress',
        'keyup',
        'error',
        'contextmenu',
      ],
      function (e, t) {
        g.fn[t] = function (e, n) {
          return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
        };
      }
    ),
    g.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    });
  var Me = t.location,
    Ue = g.now(),
    Ve = /\?/,
    We = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (g.parseJSON = function (e) {
    if (t.JSON && t.JSON.parse) return t.JSON.parse(e + '');
    var n = null,
      o = g.trim(e + ''),
      a;
    return o &&
      !g.trim(
        o.replace(We, function (e, t, o, r) {
          return (a && t && (n = 0), 0 === n) ? e : ((a = o || t), (n += !r - !o), '');
        })
      )
      ? Function('return ' + o)()
      : g.error('Invalid JSON: ' + e);
  }),
    (g.parseXML = function (e) {
      var n, o;
      if (!e || 'string' != typeof e) return null;
      try {
        t.DOMParser
          ? ((o = new t.DOMParser()), (n = o.parseFromString(e, 'text/xml')))
          : ((n = new t.ActiveXObject('Microsoft.XMLDOM')), (n.async = 'false'), n.loadXML(e));
      } catch (t) {
        n = void 0;
      }
      return (
        (n && n.documentElement && !n.getElementsByTagName('parsererror').length) || g.error('Invalid XML: ' + e), n
      );
    });
  var ze = /#.*$/,
    Xe = /([?&])_=[^&]*/,
    $e = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Qe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ge = /^(?:GET|HEAD)$/,
    Ke = /^\/\//,
    Ye = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Je = {},
    Ze = {},
    et = '*/'.concat('*'),
    tt = Me.href,
    nt = Ye.exec(tt.toLowerCase()) || [];
  g.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: tt,
      type: 'GET',
      isLocal: Qe.test(nt[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/,
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON',
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': g.parseJSON,
        'text xml': g.parseXML,
      },
      flatOptions: {
        url: !0,
        context: !0,
      },
    },
    ajaxSetup: function (e, t) {
      return t ? ajaxExtend(ajaxExtend(e, g.ajaxSettings), t) : ajaxExtend(g.ajaxSettings, e);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(Je),
    ajaxTransport: addToPrefiltersOrTransports(Ze),
    ajax: function (e, n) {
      function done(e, n, i, p) {
        var c = n,
          m,
          y,
          f,
          T,
          k;
        2 === u ||
          ((u = 2),
          x && t.clearTimeout(x),
          (C = void 0),
          (b = p || ''),
          (h.readyState = 0 < e ? 4 : 0),
          (m = (200 <= e && 300 > e) || 304 === e),
          i && (T = ajaxHandleResponses(o, h, i)),
          (T = ajaxConvert(o, T, h, m)),
          m
            ? (o.ifModified &&
                ((k = h.getResponseHeader('Last-Modified')),
                k && (g.lastModified[_] = k),
                (k = h.getResponseHeader('etag')),
                k && (g.etag[_] = k)),
              204 === e || 'HEAD' === o.type
                ? (c = 'nocontent')
                : 304 === e
                ? (c = 'notmodified')
                : ((c = T.state), (y = T.data), (f = T.error), (m = !f)))
            : ((f = c), (e || !c) && ((c = 'error'), 0 > e && (e = 0))),
          (h.status = e),
          (h.statusText = (n || c) + ''),
          m ? l.resolveWith(a, [y, c, h]) : l.rejectWith(a, [h, c, f]),
          h.statusCode(d),
          (d = void 0),
          v && r.trigger(m ? 'ajaxSuccess' : 'ajaxError', [h, o, m ? y : f]),
          s.fireWith(a, [h, c]),
          v && (r.trigger('ajaxComplete', [h, o]), !--g.active && g.event.trigger('ajaxStop')));
      }
      'object' === _typeof(e) && ((n = e), (e = void 0)), (n = n || {});
      var o = g.ajaxSetup({}, n),
        a = o.context || o,
        r = o.context && (a.nodeType || a.jquery) ? g(a) : g.event,
        l = g.Deferred(),
        s = g.Callbacks('once memory'),
        d = o.statusCode || {},
        p = {},
        c = {},
        u = 0,
        m = 'canceled',
        h = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === u) {
              if (!T) for (T = {}; (t = $e.exec(b)); ) T[t[1].toLowerCase()] = t[2];
              t = T[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === u ? b : null;
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return u || ((e = c[n] = c[n] || e), (p[e] = t)), this;
          },
          overrideMimeType: function (e) {
            return u || (o.mimeType = e), this;
          },
          statusCode: function (e) {
            if (e)
              if (2 > u) for (var t in e) d[t] = [d[t], e[t]];
              else h.always(e[h.status]);
            return this;
          },
          abort: function (e) {
            var t = e || m;
            return C && C.abort(t), done(0, t), this;
          },
        },
        y,
        f,
        _,
        b,
        x,
        v,
        C,
        T;
      if (
        ((l.promise(h).complete = s.add),
        (h.success = h.done),
        (h.error = h.fail),
        (o.url = ((e || o.url || tt) + '').replace(ze, '').replace(Ke, nt[1] + '//')),
        (o.type = n.method || n.type || o.method || o.type),
        (o.dataTypes = g
          .trim(o.dataType || '*')
          .toLowerCase()
          .match(D) || ['']),
        null == o.crossDomain &&
          ((y = Ye.exec(o.url.toLowerCase())),
          (o.crossDomain = !!(
            y &&
            (y[1] !== nt[1] ||
              y[2] !== nt[2] ||
              (y[3] || ('http:' === y[1] ? '80' : '443')) !== (nt[3] || ('http:' === nt[1] ? '80' : '443')))
          ))),
        o.data && o.processData && 'string' != typeof o.data && (o.data = g.param(o.data, o.traditional)),
        inspectPrefiltersOrTransports(Je, o, n, h),
        2 == u)
      )
        return h;
      for (f in ((v = g.event && o.global),
      v && 0 == g.active++ && g.event.trigger('ajaxStart'),
      (o.type = o.type.toUpperCase()),
      (o.hasContent = !Ge.test(o.type)),
      (_ = o.url),
      o.hasContent ||
        (o.data && ((_ = o.url += (Ve.test(_) ? '&' : '?') + o.data), delete o.data),
        !1 === o.cache &&
          (o.url = Xe.test(_) ? _.replace(Xe, '$1_=' + Ue++) : _ + (Ve.test(_) ? '&' : '?') + '_=' + Ue++)),
      o.ifModified &&
        (g.lastModified[_] && h.setRequestHeader('If-Modified-Since', g.lastModified[_]),
        g.etag[_] && h.setRequestHeader('If-None-Match', g.etag[_])),
      ((o.data && o.hasContent && !1 !== o.contentType) || n.contentType) &&
        h.setRequestHeader('Content-Type', o.contentType),
      h.setRequestHeader(
        'Accept',
        o.dataTypes[0] && o.accepts[o.dataTypes[0]]
          ? o.accepts[o.dataTypes[0]] + ('*' === o.dataTypes[0] ? '' : ', */*; q=0.01')
          : o.accepts['*']
      ),
      o.headers))
        h.setRequestHeader(f, o.headers[f]);
      if (o.beforeSend && (!1 === o.beforeSend.call(a, h, o) || 2 === u)) return h.abort();
      for (f in ((m = 'abort'),
      {
        success: 1,
        error: 1,
        complete: 1,
      }))
        h[f](o[f]);
      if (((C = inspectPrefiltersOrTransports(Ze, o, n, h)), !C)) done(-1, 'No Transport');
      else {
        if (((h.readyState = 1), v && r.trigger('ajaxSend', [h, o]), 2 === u)) return h;
        o.async &&
          0 < o.timeout &&
          (x = t.setTimeout(function () {
            h.abort('timeout');
          }, o.timeout));
        try {
          (u = 1), C.send(p, done);
        } catch (t) {
          if (2 > u) done(-1, t);
          else throw t;
        }
      }
      return h;
    },
    getJSON: function (e, t, n) {
      return g.get(e, t, n, 'json');
    },
    getScript: function (e, t) {
      return g.get(e, void 0, t, 'script');
    },
  }),
    g.each(['get', 'post'], function (e, t) {
      g[t] = function (e, n, o, a) {
        return (
          g.isFunction(n) && ((a = a || o), (o = n), (n = void 0)),
          g.ajax(
            g.extend(
              {
                url: e,
                type: t,
                dataType: a,
                data: n,
                success: o,
              },
              g.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (g._evalUrl = function (e) {
      return g.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    g.fn.extend({
      wrapAll: function (e) {
        if (g.isFunction(e))
          return this.each(function (t) {
            g(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = g(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        return g.isFunction(e)
          ? this.each(function (t) {
              g(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = g(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = g.isFunction(e);
        return this.each(function (n) {
          g(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            g.nodeName(this, 'body') || g(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (g.expr.filters.hidden = function (e) {
      return y.reliableHiddenOffsets()
        ? 0 >= e.offsetWidth && 0 >= e.offsetHeight && !e.getClientRects().length
        : filterHidden(e);
    }),
    (g.expr.filters.visible = function (e) {
      return !g.expr.filters.hidden(e);
    });
  var ot = /%20/g,
    at = /\[\]$/,
    rt = /\r?\n/g,
    it = /^(?:submit|button|image|reset|file)$/i,
    lt = /^(?:input|select|textarea|keygen)/i;
  (g.param = function (e, t) {
    var n = [],
      o = function (e, t) {
        (t = g.isFunction(t) ? t() : null == t ? '' : t),
          (n[n.length] = encodeURIComponent(e) + '=' + encodeURIComponent(t));
      },
      a;
    if (
      (void 0 === t && (t = g.ajaxSettings && g.ajaxSettings.traditional),
      g.isArray(e) || (e.jquery && !g.isPlainObject(e)))
    )
      g.each(e, function () {
        o(this.name, this.value);
      });
    else for (a in e) buildParams(a, e[a], t, o);
    return n.join('&').replace(ot, '+');
  }),
    g.fn.extend({
      serialize: function () {
        return g.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = g.prop(this, 'elements');
          return e ? g.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !g(this).is(':disabled') &&
              lt.test(this.nodeName) &&
              !it.test(e) &&
              (this.checked || !U.test(e))
            );
          })
          .map(function (e, t) {
            var n = g(this).val();
            return null == n
              ? null
              : g.isArray(n)
              ? g.map(n, function (e) {
                  return {
                    name: t.name,
                    value: e.replace(rt, '\r\n'),
                  };
                })
              : {
                  name: t.name,
                  value: n.replace(rt, '\r\n'),
                };
          })
          .get();
      },
    }),
    (g.ajaxSettings.xhr =
      void 0 === t.ActiveXObject
        ? createStandardXHR
        : function () {
            return this.isLocal
              ? createActiveXHR()
              : 8 < l.documentMode
              ? createStandardXHR()
              : (/^(get|post|head|put|delete|options)$/i.test(this.type) && createStandardXHR()) || createActiveXHR();
          });
  var st = 0,
    dt = {},
    pt = g.ajaxSettings.xhr();
  t.attachEvent &&
    t.attachEvent('onunload', function () {
      for (var e in dt) dt[e](void 0, !0);
    }),
    (y.cors = !!pt && 'withCredentials' in pt),
    (pt = y.ajax = !!pt),
    pt &&
      g.ajaxTransport(function (e) {
        if (!e.crossDomain || y.cors) {
          var n;
          return {
            send: function (o, a) {
              var r = e.xhr(),
                l = ++st,
                s;
              if ((r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields))
                for (s in e.xhrFields) r[s] = e.xhrFields[s];
              for (s in (e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType),
              e.crossDomain || o['X-Requested-With'] || (o['X-Requested-With'] = 'XMLHttpRequest'),
              o))
                void 0 !== o[s] && r.setRequestHeader(s, o[s] + '');
              r.send((e.hasContent && e.data) || null),
                (n = function (t, o) {
                  var i, s, d;
                  if (n && (o || 4 === r.readyState))
                    if ((delete dt[l], (n = void 0), (r.onreadystatechange = g.noop), o))
                      4 !== r.readyState && r.abort();
                    else {
                      (d = {}), (i = r.status), 'string' == typeof r.responseText && (d.text = r.responseText);
                      try {
                        s = r.statusText;
                      } catch (t) {
                        s = '';
                      }
                      i || !e.isLocal || e.crossDomain ? 1223 === i && (i = 204) : (i = d.text ? 200 : 404);
                    }
                  d && a(i, s, d, r.getAllResponseHeaders());
                }),
                e.async ? (4 === r.readyState ? t.setTimeout(n) : (r.onreadystatechange = dt[l] = n)) : n();
            },
            abort: function () {
              n && n(void 0, !0);
            },
          };
        }
      }),
    g.ajaxSetup({
      accepts: {
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: {
        script: /\b(?:java|ecma)script\b/,
      },
      converters: {
        'text script': function (e) {
          return g.globalEval(e), e;
        },
      },
    }),
    g.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && ((e.type = 'GET'), (e.global = !1));
    }),
    g.ajaxTransport('script', function (e) {
      if (e.crossDomain) {
        var t = l.head || g('head')[0] || l.documentElement,
          n;
        return {
          send: function (o, a) {
            (n = l.createElement('script')),
              (n.async = !0),
              e.scriptCharset && (n.charset = e.scriptCharset),
              (n.src = e.url),
              (n.onload = n.onreadystatechange = function (e, t) {
                (t || !n.readyState || /loaded|complete/.test(n.readyState)) &&
                  ((n.onload = n.onreadystatechange = null),
                  n.parentNode && n.parentNode.removeChild(n),
                  (n = null),
                  !t && a(200, 'success'));
              }),
              t.insertBefore(n, t.firstChild);
          },
          abort: function () {
            n && n.onload(void 0, !0);
          },
        };
      }
    });
  var ct = [],
    ut = /(=)\?(?=&|$)|\?\?/;
  g.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = ct.pop() || g.expando + '_' + Ue++;
      return (this[e] = !0), e;
    },
  }),
    g.ajaxPrefilter('json jsonp', function (e, n, o) {
      var a =
          !1 !== e.jsonp &&
          (ut.test(e.url)
            ? 'url'
            : 'string' == typeof e.data &&
              0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') &&
              ut.test(e.data) &&
              'data'),
        r,
        i,
        l;
      if (a || 'jsonp' === e.dataTypes[0])
        return (
          (r = e.jsonpCallback = g.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(ut, '$1' + r))
            : !1 !== e.jsonp && (e.url += (Ve.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
          (e.converters['script json'] = function () {
            return l || g.error(r + ' was not called'), l[0];
          }),
          (e.dataTypes[0] = 'json'),
          (i = t[r]),
          (t[r] = function () {
            l = arguments;
          }),
          o.always(function () {
            void 0 === i ? g(t).removeProp(r) : (t[r] = i),
              e[r] && ((e.jsonpCallback = n.jsonpCallback), ct.push(r)),
              l && g.isFunction(i) && i(l[0]),
              (l = i = void 0);
          }),
          'script'
        );
    }),
    (g.parseHTML = function (e, t, n) {
      if (!e || 'string' != typeof e) return null;
      'boolean' == typeof t && ((n = t), (t = !1)), (t = t || l);
      var o = w.exec(e),
        a = !n && [];
      return o
        ? [t.createElement(o[1])]
        : ((o = buildFragment([e], t, a)), a && a.length && g(a).remove(), g.merge([], o.childNodes));
    });
  var mt = g.fn.load;
  (g.fn.load = function (e, t, n) {
    if ('string' != typeof e && mt) return mt.apply(this, arguments);
    var o = this,
      a = e.indexOf(' '),
      r,
      i,
      l;
    return (
      -1 < a && ((r = g.trim(e.slice(a, e.length))), (e = e.slice(0, a))),
      g.isFunction(t) ? ((n = t), (t = void 0)) : t && 'object' === _typeof(t) && (i = 'POST'),
      0 < o.length &&
        g
          .ajax({
            url: e,
            type: i || 'GET',
            dataType: 'html',
            data: t,
          })
          .done(function (e) {
            (l = arguments), o.html(r ? g('<div>').append(g.parseHTML(e)).find(r) : e);
          })
          .always(
            n &&
              function (e, t) {
                o.each(function () {
                  n.apply(this, l || [e.responseText, t, e]);
                });
              }
          ),
      this
    );
  }),
    g.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) {
      g.fn[t] = function (e) {
        return this.on(t, e);
      };
    }),
    (g.expr.filters.animated = function (e) {
      return g.grep(g.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (g.offset = {
      setOffset: function (e, t, n) {
        var o = g.css(e, 'position'),
          a = g(e),
          r = {},
          i,
          l,
          s,
          d,
          p,
          c,
          u;
        'static' === o && (e.style.position = 'relative'),
          (p = a.offset()),
          (s = g.css(e, 'top')),
          (c = g.css(e, 'left')),
          (u = ('absolute' === o || 'fixed' === o) && -1 < g.inArray('auto', [s, c])),
          u ? ((i = a.position()), (d = i.top), (l = i.left)) : ((d = parseFloat(s) || 0), (l = parseFloat(c) || 0)),
          g.isFunction(t) && (t = t.call(e, n, g.extend({}, p))),
          null != t.top && (r.top = t.top - p.top + d),
          null != t.left && (r.left = t.left - p.left + l),
          'using' in t ? t.using.call(e, r) : a.css(r);
      },
    }),
    g.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                g.offset.setOffset(this, e, t);
              });
        var t = {
            top: 0,
            left: 0,
          },
          n = this[0],
          o = n && n.ownerDocument,
          a,
          r;
        if (o)
          return ((a = o.documentElement), !g.contains(a, n))
            ? t
            : ('undefined' != typeof n.getBoundingClientRect && (t = n.getBoundingClientRect()),
              (r = getWindow(o)),
              {
                top: t.top + (r.pageYOffset || a.scrollTop) - (a.clientTop || 0),
                left: t.left + (r.pageXOffset || a.scrollLeft) - (a.clientLeft || 0),
              });
      },
      position: function () {
        if (this[0]) {
          var e = {
              top: 0,
              left: 0,
            },
            t = this[0],
            n,
            o;
          return (
            'fixed' === g.css(t, 'position')
              ? (o = t.getBoundingClientRect())
              : ((n = this.offsetParent()),
                (o = this.offset()),
                !g.nodeName(n[0], 'html') && (e = n.offset()),
                (e.top += g.css(n[0], 'borderTopWidth', !0)),
                (e.left += g.css(n[0], 'borderLeftWidth', !0))),
            {
              top: o.top - e.top - g.css(t, 'marginTop', !0),
              left: o.left - e.left - g.css(t, 'marginLeft', !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && !g.nodeName(e, 'html') && 'static' === g.css(e, 'position'); )
            e = e.offsetParent;
          return e || me;
        });
      },
    }),
    g.each(
      {
        scrollLeft: 'pageXOffset',
        scrollTop: 'pageYOffset',
      },
      function (e, t) {
        var n = /Y/.test(t);
        g.fn[e] = function (o) {
          return M(
            this,
            function (e, o, a) {
              var r = getWindow(e);
              return void 0 === a
                ? r
                  ? t in r
                    ? r[t]
                    : r.document.documentElement[o]
                  : e[o]
                : void (r ? r.scrollTo(n ? g(r).scrollLeft() : a, n ? a : g(r).scrollTop()) : (e[o] = a));
            },
            e,
            o,
            arguments.length,
            null
          );
        };
      }
    ),
    g.each(['top', 'left'], function (e, t) {
      g.cssHooks[t] = addGetHookIf(y.pixelPosition, function (e, n) {
        if (n) return (n = ge(e, t)), ce.test(n) ? g(e).position()[t] + 'px' : n;
      });
    }),
    g.each(
      {
        Height: 'height',
        Width: 'width',
      },
      function (e, t) {
        g.each(
          {
            padding: 'inner' + e,
            content: t,
            '': 'outer' + e,
          },
          function (n, o) {
            g.fn[o] = function (o, r) {
              var i = arguments.length && (n || 'boolean' != typeof o),
                l = n || (!0 === o || !0 === r ? 'margin' : 'border');
              return M(
                this,
                function (t, n, o) {
                  var r;
                  return g.isWindow(t)
                    ? t.document.documentElement['client' + e]
                    : 9 === t.nodeType
                    ? ((r = t.documentElement),
                      a(t.body['scroll' + e], r['scroll' + e], t.body['offset' + e], r['offset' + e], r['client' + e]))
                    : void 0 === o
                    ? g.css(t, n, l)
                    : g.style(t, n, o, l);
                },
                t,
                i ? o : void 0,
                i,
                null
              );
            };
          }
        );
      }
    ),
    g.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, o) {
        return this.on(t, e, n, o);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
      },
    }),
    (g.fn.size = function () {
      return this.length;
    }),
    (g.fn.andSelf = g.fn.addBack),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return g;
      });
  var ht = t.jQuery,
    yt = t.$;
  return (
    (g.noConflict = function (e) {
      return t.$ === g && (t.$ = yt), e && t.jQuery === g && (t.jQuery = ht), g;
    }),
    n || (t.jQuery = t.$ = g),
    g
  );
}),
  !(function (n) {
    if ('object' == ('undefined' == typeof exports ? 'undefined' : _typeof(exports)) && 'undefined' != typeof module)
      module.exports = n();
    else if ('function' == typeof define && define.amd) define([], n);
    else {
      var t;
      'undefined' == typeof window
        ? 'undefined' == typeof global
          ? 'undefined' != typeof self && (t = self)
          : (t = global)
        : (t = window),
        (t.Promise = n());
    }
  })(function () {
    return (function r(d, t, e) {
      function i(o, s) {
        if (!t[o]) {
          if (!d[o]) {
            var a = 'function' == typeof _dereq_ && _dereq_;
            if (!s && a) return a(o, !0);
            if (n) return n(o, !0);
            var p = new Error("Cannot find module '" + o + "'");
            throw ((p.code = 'MODULE_NOT_FOUND'), p);
          }
          var l = (t[o] = {
            exports: {},
          });
          d[o][0].call(
            l.exports,
            function (t) {
              var e = d[o][1][t];
              return i(e ? e : t);
            },
            l,
            l.exports,
            r,
            d,
            t,
            e
          );
        }
        return t[o].exports;
      }
      for (var n = 'function' == typeof _dereq_ && _dereq_, o = 0; o < e.length; o++) i(e[o]);
      return i;
    })(
      {
        1: [
          function (n, t) {
            'use strict';
            t.exports = function (o) {
              function e(n) {
                var t = new a(n),
                  e = t.promise();
                return t.setHowMany(1), t.setUnwrap(), t.init(), e;
              }
              var a = o._SomePromiseArray;
              (o.any = function (n) {
                return e(n);
              }),
                (o.prototype.any = function () {
                  return e(this);
                });
            };
          },
          {},
        ],
        2: [
          function (n, t) {
            'use strict';

            function r() {
              (this._customScheduler = !1),
                (this._isTickUsed = !1),
                (this._lateQueue = new l(16)),
                (this._normalQueue = new l(16)),
                (this._haveDrainedQueues = !1),
                (this._trampolineEnabled = !0);
              var e = this;
              (this.drainQueues = function () {
                e._drainQueues();
              }),
                (this._schedule = d);
            }

            function i(o, t, e) {
              this._lateQueue.push(o, t, e), this._queueTick();
            }

            function o(o, t, e) {
              this._normalQueue.push(o, t, e), this._queueTick();
            }

            function s(e) {
              this._normalQueue._pushOne(e), this._queueTick();
            }
            var e;
            try {
              throw new Error();
            } catch (t) {
              e = t;
            }
            var d = n('./schedule'),
              l = n('./queue'),
              c = n('./util');
            (r.prototype.setScheduler = function (n) {
              var t = this._schedule;
              return (this._schedule = n), (this._customScheduler = !0), t;
            }),
              (r.prototype.hasCustomScheduler = function () {
                return this._customScheduler;
              }),
              (r.prototype.enableTrampoline = function () {
                this._trampolineEnabled = !0;
              }),
              (r.prototype.disableTrampolineIfNecessary = function () {
                c.hasDevTools && (this._trampolineEnabled = !1);
              }),
              (r.prototype.haveItemsQueued = function () {
                return this._isTickUsed || this._haveDrainedQueues;
              }),
              (r.prototype.fatalError = function (n, t) {
                t
                  ? (process.stderr.write('Fatal ' + (n instanceof Error ? n.stack : n) + '\n'), process.exit(2))
                  : this.throwLater(n);
              }),
              (r.prototype.throwLater = function (n, o) {
                if (
                  (1 === arguments.length &&
                    ((o = n),
                    (n = function () {
                      throw o;
                    })),
                  'undefined' != typeof setTimeout)
                )
                  setTimeout(function () {
                    n(o);
                  }, 0);
                else
                  try {
                    this._schedule(function () {
                      n(o);
                    });
                  } catch (e) {
                    throw new Error('No async scheduler available\n\n    See http://goo.gl/MqrFmX\n');
                  }
              }),
              c.hasDevTools
                ? ((r.prototype.invokeLater = function (o, t, e) {
                    this._trampolineEnabled
                      ? i.call(this, o, t, e)
                      : this._schedule(function () {
                          setTimeout(function () {
                            o.call(t, e);
                          }, 100);
                        });
                  }),
                  (r.prototype.invoke = function (a, t, e) {
                    this._trampolineEnabled
                      ? o.call(this, a, t, e)
                      : this._schedule(function () {
                          a.call(t, e);
                        });
                  }),
                  (r.prototype.settlePromises = function (e) {
                    this._trampolineEnabled
                      ? s.call(this, e)
                      : this._schedule(function () {
                          e._settlePromises();
                        });
                  }))
                : ((r.prototype.invokeLater = i), (r.prototype.invoke = o), (r.prototype.settlePromises = s)),
              (r.prototype._drainQueue = function (o) {
                for (; 0 < o.length(); ) {
                  var t = o.shift();
                  if ('function' == typeof t) {
                    var e = o.shift(),
                      n = o.shift();
                    t.call(e, n);
                  } else t._settlePromises();
                }
              }),
              (r.prototype._drainQueues = function () {
                this._drainQueue(this._normalQueue),
                  this._reset(),
                  (this._haveDrainedQueues = !0),
                  this._drainQueue(this._lateQueue);
              }),
              (r.prototype._queueTick = function () {
                this._isTickUsed || ((this._isTickUsed = !0), this._schedule(this.drainQueues));
              }),
              (r.prototype._reset = function () {
                this._isTickUsed = !1;
              }),
              (t.exports = r),
              (t.exports.firstLineError = e);
          },
          {
            './queue': 26,
            './schedule': 29,
            './util': 36,
          },
        ],
        3: [
          function (n, t) {
            'use strict';
            t.exports = function (d, t, e, n) {
              var r = !1,
                l = function (n, t) {
                  this._reject(t);
                },
                o = function (n, t) {
                  (t.promiseRejectionQueued = !0), t.bindingPromise._then(l, l, null, this, n);
                },
                s = function (n, t) {
                  0 == (50397184 & this._bitField) && this._resolveCallback(t.target);
                },
                a = function (n, t) {
                  t.promiseRejectionQueued || this._reject(n);
                };
              (d.prototype.bind = function (i) {
                r ||
                  ((r = !0),
                  (d.prototype._propagateFrom = n.propagateFromFunction()),
                  (d.prototype._boundValue = n.boundValueFunction()));
                var c = e(i),
                  l = new d(t);
                l._propagateFrom(this, 1);
                var u = this._target();
                if ((l._setBoundTo(c), c instanceof d)) {
                  var p = {
                    promiseRejectionQueued: !1,
                    promise: l,
                    target: u,
                    bindingPromise: c,
                  };
                  u._then(t, o, void 0, l, p), c._then(s, a, void 0, l, p), l._setOnCancel(c);
                } else l._resolveCallback(u);
                return l;
              }),
                (d.prototype._setBoundTo = function (e) {
                  void 0 === e
                    ? (this._bitField = -2097153 & this._bitField)
                    : ((this._bitField = 2097152 | this._bitField), (this._boundTo = e));
                }),
                (d.prototype._isBound = function () {
                  return 2097152 == (2097152 & this._bitField);
                }),
                (d.bind = function (t, e) {
                  return d.resolve(e).bind(t);
                });
            };
          },
          {},
        ],
        4: [
          function (n, t) {
            'use strict';

            function r() {
              try {
                Promise === a && (Promise = e);
              } catch (e) {}
              return a;
            }
            var e;
            'undefined' != typeof Promise && (e = Promise);
            var a = n('./promise')();
            (a.noConflict = r), (t.exports = a);
          },
          {
            './promise': 22,
          },
        ],
        5: [
          function (l, t) {
            'use strict';
            var e = Object.create;
            if (e) {
              var n = e(null),
                a = e(null);
              n[' size'] = a[' size'] = 0;
            }
            t.exports = function (d) {
              function n(o, t) {
                var n;
                if ((null != o && (n = o[t]), 'function' != typeof n)) {
                  var a = 'Object ' + e.classString(o) + " has no method '" + e.toString(t) + "'";
                  throw new d.TypeError(a);
                }
                return n;
              }

              function r(o) {
                var t = this.pop(),
                  e = n(o, t);
                return e.apply(o, this);
              }

              function i(e) {
                return e[this];
              }

              function o(n) {
                var t = +this;
                return 0 > t && (t = Math.max(0, t + n.length)), n[t];
              }
              var e = l('./util'),
                a = e.canEvaluate,
                p;
              e.isIdentifier,
                (d.prototype.call = function (n) {
                  var t = [].slice.call(arguments, 1);
                  return t.push(n), this._then(r, void 0, void 0, t, void 0);
                }),
                (d.prototype.get = function (n) {
                  var t;
                  if ('number' == typeof n) t = o;
                  else if (a) {
                    var l = p(n);
                    t = null === l ? i : l;
                  } else t = i;
                  return this._then(t, void 0, void 0, n, void 0);
                });
            };
          },
          {
            './util': 36,
          },
        ],
        6: [
          function (l, t) {
            'use strict';
            t.exports = function (t, e, n, r) {
              var i = l('./util'),
                o = i.tryCatch,
                s = i.errorObj,
                a = t._async;
              (t.prototype['break'] = t.prototype.cancel = function () {
                if (!r.cancellation()) return this._warn('cancellation is disabled');
                for (var o = this, a = o; o._isCancellable(); ) {
                  if (!o._cancelBy(a)) {
                    a._isFollowing() ? a._followee().cancel() : a._cancelBranched();
                    break;
                  }
                  var i = o._cancellationParent;
                  if (null == i || !i._isCancellable()) {
                    o._isFollowing() ? o._followee().cancel() : o._cancelBranched();
                    break;
                  }
                  o._isFollowing() && o._followee().cancel(), o._setWillBeCancelled(), (a = o), (o = i);
                }
              }),
                (t.prototype._branchHasCancelled = function () {
                  this._branchesRemainingToCancel--;
                }),
                (t.prototype._enoughBranchesHaveCancelled = function () {
                  return void 0 === this._branchesRemainingToCancel || 0 >= this._branchesRemainingToCancel;
                }),
                (t.prototype._cancelBy = function (e) {
                  return e === this
                    ? ((this._branchesRemainingToCancel = 0), this._invokeOnCancel(), !0)
                    : (this._branchHasCancelled(),
                      !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(), !0));
                }),
                (t.prototype._cancelBranched = function () {
                  this._enoughBranchesHaveCancelled() && this._cancel();
                }),
                (t.prototype._cancel = function () {
                  this._isCancellable() && (this._setCancelled(), a.invoke(this._cancelPromises, this, void 0));
                }),
                (t.prototype._cancelPromises = function () {
                  0 < this._length() && this._settlePromises();
                }),
                (t.prototype._unsetOnCancel = function () {
                  this._onCancelField = void 0;
                }),
                (t.prototype._isCancellable = function () {
                  return this.isPending() && !this._isCancelled();
                }),
                (t.prototype.isCancellable = function () {
                  return this.isPending() && !this.isCancelled();
                }),
                (t.prototype._doInvokeOnCancel = function (l, t) {
                  if (i.isArray(l)) for (var e = 0; e < l.length; ++e) this._doInvokeOnCancel(l[e], t);
                  else if (void 0 !== l)
                    if (!('function' == typeof l)) l._resultCancelled(this);
                    else if (!t) {
                      var d = o(l).call(this._boundValue());
                      d === s && (this._attachExtraTrace(d.e), a.throwLater(d.e));
                    }
                }),
                (t.prototype._invokeOnCancel = function () {
                  var e = this._onCancel();
                  this._unsetOnCancel(), a.invoke(this._doInvokeOnCancel, this, e);
                }),
                (t.prototype._invokeInternalOnCancel = function () {
                  this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel());
                }),
                (t.prototype._resultCancelled = function () {
                  this.cancel();
                });
            };
          },
          {
            './util': 36,
          },
        ],
        7: [
          function (a, t) {
            'use strict';
            t.exports = function (m) {
              function n(i, s, n) {
                return function (a) {
                  var c = n._boundValue();
                  t: for (var l = 0, y; l < i.length; ++l)
                    if (((y = i[l]), y === Error || (null != y && y.prototype instanceof Error))) {
                      if (a instanceof y) return r(s).call(c, a);
                    } else if ('function' == typeof y) {
                      var g = r(y).call(c, a);
                      if (g === o) return g;
                      if (g) return r(s).call(c, a);
                    } else if (e.isObject(a)) {
                      for (var h = t(y), f = 0, b; f < h.length; ++f) if (((b = h[f]), y[b] != a[b])) continue t;
                      return r(s).call(c, a);
                    }
                  return m;
                };
              }
              var e = a('./util'),
                t = a('./es5').keys,
                r = e.tryCatch,
                o = e.errorObj;
              return n;
            };
          },
          {
            './es5': 13,
            './util': 36,
          },
        ],
        8: [
          function (n, t) {
            'use strict';
            t.exports = function (l) {
              function e() {
                this._trace = new e.CapturedTrace(r());
              }

              function n() {
                return t ? new e() : void 0;
              }

              function r() {
                var e = a.length - 1;
                return 0 <= e ? a[e] : void 0;
              }
              var t = !1,
                a = [];
              return (
                (l.prototype._promiseCreated = function () {}),
                (l.prototype._pushContext = function () {}),
                (l.prototype._popContext = function () {
                  return null;
                }),
                (l._peekContext = l.prototype._peekContext = function () {}),
                (e.prototype._pushContext = function () {
                  void 0 !== this._trace && ((this._trace._promiseCreated = null), a.push(this._trace));
                }),
                (e.prototype._popContext = function () {
                  if (void 0 !== this._trace) {
                    var n = a.pop(),
                      t = n._promiseCreated;
                    return (n._promiseCreated = null), t;
                  }
                  return null;
                }),
                (e.CapturedTrace = null),
                (e.create = n),
                (e.deactivateLongStackTraces = function () {}),
                (e.activateLongStackTraces = function () {
                  var i = l.prototype._pushContext,
                    n = l.prototype._popContext,
                    o = l._peekContext,
                    s = l.prototype._peekContext,
                    a = l.prototype._promiseCreated;
                  (e.deactivateLongStackTraces = function () {
                    (l.prototype._pushContext = i),
                      (l.prototype._popContext = n),
                      (l._peekContext = o),
                      (l.prototype._peekContext = s),
                      (l.prototype._promiseCreated = a),
                      (t = !1);
                  }),
                    (t = !0),
                    (l.prototype._pushContext = e.prototype._pushContext),
                    (l.prototype._popContext = e.prototype._popContext),
                    (l._peekContext = l.prototype._peekContext = r),
                    (l.prototype._promiseCreated = function () {
                      var e = this._peekContext();
                      e && null == e._promiseCreated && (e._promiseCreated = this);
                    });
                }),
                e
              );
            };
          },
          {},
        ],
        9: [
          function (p, t) {
            'use strict';
            t.exports = function (v, e) {
              function r(n, t) {
                return {
                  promise: t,
                };
              }

              function i() {
                return !1;
              }

              function o(o, t, e) {
                var n = this;
                try {
                  o(t, e, function (e) {
                    if ('function' != typeof e)
                      throw new TypeError('onCancel must be a function, got: ' + L.toString(e));
                    n._attachCancellationCallback(e);
                  });
                } catch (e) {
                  return e;
                }
              }

              function s(n) {
                if (!this._isCancellable()) return this;
                var t = this._onCancel();
                void 0 === t ? this._setOnCancel(n) : L.isArray(t) ? t.push(n) : this._setOnCancel([t, n]);
              }

              function a() {
                return this._onCancelField;
              }

              function c(e) {
                this._onCancelField = e;
              }

              function l() {
                (this._cancellationParent = void 0), (this._onCancelField = void 0);
              }

              function u(o, t) {
                if (0 != (1 & t)) {
                  this._cancellationParent = o;
                  var e = o._branchesRemainingToCancel;
                  void 0 === e && (e = 0), (o._branchesRemainingToCancel = e + 1);
                }
                0 != (2 & t) && o._isBound() && this._setBoundTo(o._boundTo);
              }

              function h() {
                var e = this._boundTo;
                return void 0 !== e && e instanceof v ? (e.isFulfilled() ? e.value() : void 0) : e;
              }

              function f() {
                this._trace = new S(this._peekContext());
              }

              function _(o, t) {
                if (H(o)) {
                  var e = this._trace;
                  if ((void 0 !== e && t && (e = e._parent), void 0 !== e)) e.attachExtraTrace(o);
                  else if (!o.__stackCleaned__) {
                    var a = j(o);
                    L.notEnumerableProp(o, 'stack', a.message + '\n' + a.stack.join('\n')),
                      L.notEnumerableProp(o, '__stackCleaned__', !0);
                  }
                }
              }

              function d(d, m, e, y, r) {
                if (void 0 === d && null !== m && X) {
                  if (void 0 !== r && r._returnedNonUndefined()) return;
                  if (0 == (65535 & y._bitField)) return;
                  e && (e += ' ');
                  var i = '',
                    g = '';
                  if (m._trace) {
                    for (var _ = m._trace.stack.split('\n'), a = w(_), c = a.length - 1, b; 0 <= c; --c)
                      if (((b = a[c]), !t.test(b))) {
                        var x = b.match(B);
                        x && (i = 'at ' + x[1] + ':' + x[2] + ':' + x[3] + ' ');
                        break;
                      }
                    if (0 < a.length)
                      for (var p = a[0], c = 0; c < _.length; ++c)
                        if (_[c] === p) {
                          0 < c && (g = '\n' + _[c - 1]);
                          break;
                        }
                  }
                  var h =
                    'a promise was created in a ' +
                    e +
                    'handler ' +
                    i +
                    'but was not returned from it, see http://goo.gl/rRqMUw' +
                    g;
                  y._warn(h, !0, m);
                }
              }

              function y(e, t, n) {
                if (pe.warnings) {
                  var a = new I(e),
                    o;
                  if (t) n._attachExtraTrace(a);
                  else if (pe.longStackTraces && (o = v._peekContext())) o.attachExtraTrace(a);
                  else {
                    var r = j(a);
                    a.stack = r.message + '\n' + r.stack.join('\n');
                  }
                  Z('warning', a) || E(a, '', !0);
                }
              }

              function m(o, t) {
                for (var e = 0; e < t.length - 1; ++e) t[e].push('From previous event:'), (t[e] = t[e].join('\n'));
                return e < t.length && (t[e] = t[e].join('\n')), o + '\n' + t.join('\n');
              }

              function g(n) {
                for (var t = 0; t < n.length; ++t)
                  (0 === n[t].length || (t + 1 < n.length && n[t][0] === n[t + 1][0])) && (n.splice(t, 1), t--);
              }

              function b(l) {
                for (var t = l[0], d = 1; d < l.length; ++d) {
                  for (var p = l[d], r = t.length - 1, u = t[r], o = -1, m = p.length - 1; 0 <= m; --m)
                    if (p[m] === u) {
                      o = m;
                      break;
                    }
                  for (var m = o, h; 0 <= m && ((h = p[m]), t[r] === h); --m) t.pop(), r--;
                  t = p;
                }
              }

              function w(a) {
                for (var t = [], e = 0; e < a.length; ++e) {
                  var l = a[e],
                    s = '    (No stack trace)' === l || M.test(l),
                    i = s && le(l);
                  s && !i && (V && ' ' !== l.charAt(0) && (l = '    ' + l), t.push(l));
                }
                return t;
              }

              function C(o) {
                for (
                  var t = o.stack.replace(/\s+$/g, '').split('\n'), a = 0, i;
                  a < t.length && ((i = t[a]), !('    (No stack trace)' === i || M.test(i)));
                  ++a
                );
                return 0 < a && 'SyntaxError' != o.name && (t = t.slice(a)), t;
              }

              function j(o) {
                var t = o.stack,
                  a = o.toString();
                return (
                  (t = 'string' == typeof t && 0 < t.length ? C(o) : ['    (No stack trace)']),
                  {
                    message: a,
                    stack: 'SyntaxError' == o.name ? t : w(t),
                  }
                );
              }

              function E(o, t, e) {
                if ('undefined' != typeof console) {
                  var n;
                  if (L.isObject(o)) {
                    var a = o.stack;
                    n = t + U(a, o);
                  } else n = t + (o + '');
                  'function' == typeof oe
                    ? oe(n, e)
                    : ('function' == typeof console.log || 'object' == _typeof(console.log)) && console.log(n);
                }
              }

              function k(o, t, e, n) {
                var a = !1;
                try {
                  'function' == typeof t && ((a = !0), 'rejectionHandled' === o ? t(n) : t(e, n));
                } catch (e) {
                  R.throwLater(e);
                }
                'unhandledRejection' === o ? Z(o, e, n) || a || E(e, 'Unhandled rejection ') : Z(o, n);
              }

              function F(o) {
                var t;
                if ('function' == typeof o) t = '[function ' + (o.name || 'anonymous') + ']';
                else {
                  t = o && 'function' == typeof o.toString ? o.toString() : L.toString(o);
                  var a = /\[object [a-zA-Z0-9$_]+\]/;
                  if (a.test(t))
                    try {
                      var n = JSON.stringify(o);
                      t = n;
                    } catch (e) {}
                  0 === t.length && (t = '(empty array)');
                }
                return '(<' + x(t) + '>, no stack trace)';
              }

              function x(e) {
                return e.length < 41 ? e : e.substr(0, 38) + '...';
              }

              function T() {
                return 'function' == typeof de;
              }

              function P(n) {
                var t = n.match(se);
                return t
                  ? {
                      fileName: t[1],
                      line: parseInt(t[2], 10),
                    }
                  : void 0;
              }

              function S(n) {
                (this._parent = n), (this._promisesCreated = 0);
                var t = (this._length = 1 + (void 0 === n ? 0 : n._length));
                de(this, S), 32 < t && this.uncycle();
              }
              var n = v._getDomain,
                R = v._async,
                I = p('./errors').Warning,
                L = p('./util'),
                H = L.canAttachTrace,
                N = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,
                t = /\((?:timers\.js):\d+:\d+\)/,
                B = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,
                M = null,
                U = null,
                V = !1,
                ee = 0 != L.env('BLUEBIRD_DEBUG') && (L.env('BLUEBIRD_DEBUG') || 'development' === L.env('NODE_ENV')),
                G = 0 != L.env('BLUEBIRD_WARNINGS') && (ee || L.env('BLUEBIRD_WARNINGS')),
                z = 0 != L.env('BLUEBIRD_LONG_STACK_TRACES') && (ee || L.env('BLUEBIRD_LONG_STACK_TRACES')),
                X = 0 != L.env('BLUEBIRD_W_FORGOTTEN_RETURN') && (G || !!L.env('BLUEBIRD_W_FORGOTTEN_RETURN')),
                te,
                ne,
                oe;
              (v.prototype.suppressUnhandledRejections = function () {
                var e = this._target();
                e._bitField = 524288 | (-1048577 & e._bitField);
              }),
                (v.prototype._ensurePossibleRejectionHandled = function () {
                  0 == (524288 & this._bitField) &&
                    (this._setRejectionIsUnhandled(), R.invokeLater(this._notifyUnhandledRejection, this, void 0));
                }),
                (v.prototype._notifyUnhandledRejectionIsHandled = function () {
                  k('rejectionHandled', te, void 0, this);
                }),
                (v.prototype._setReturnedNonUndefined = function () {
                  this._bitField = 268435456 | this._bitField;
                }),
                (v.prototype._returnedNonUndefined = function () {
                  return 0 != (268435456 & this._bitField);
                }),
                (v.prototype._notifyUnhandledRejection = function () {
                  if (this._isRejectionUnhandled()) {
                    var e = this._settledValue();
                    this._setUnhandledRejectionIsNotified(), k('unhandledRejection', ne, e, this);
                  }
                }),
                (v.prototype._setUnhandledRejectionIsNotified = function () {
                  this._bitField = 262144 | this._bitField;
                }),
                (v.prototype._unsetUnhandledRejectionIsNotified = function () {
                  this._bitField = -262145 & this._bitField;
                }),
                (v.prototype._isUnhandledRejectionNotified = function () {
                  return 0 < (262144 & this._bitField);
                }),
                (v.prototype._setRejectionIsUnhandled = function () {
                  this._bitField = 1048576 | this._bitField;
                }),
                (v.prototype._unsetRejectionIsUnhandled = function () {
                  (this._bitField = -1048577 & this._bitField),
                    this._isUnhandledRejectionNotified() &&
                      (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled());
                }),
                (v.prototype._isRejectionUnhandled = function () {
                  return 0 < (1048576 & this._bitField);
                }),
                (v.prototype._warn = function (o, t, e) {
                  return y(o, t, e || this);
                }),
                (v.onPossiblyUnhandledRejection = function (o) {
                  var t = n();
                  ne = 'function' == typeof o ? (null === t ? o : L.domainBind(t, o)) : void 0;
                }),
                (v.onUnhandledRejectionHandled = function (o) {
                  var t = n();
                  te = 'function' == typeof o ? (null === t ? o : L.domainBind(t, o)) : void 0;
                });
              var ae = function () {};
              (v.longStackTraces = function () {
                if (R.haveItemsQueued() && !pe.longStackTraces)
                  throw new Error(
                    'cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n'
                  );
                if (!pe.longStackTraces && T()) {
                  var n = v.prototype._captureStackTrace,
                    t = v.prototype._attachExtraTrace;
                  (pe.longStackTraces = !0),
                    (ae = function () {
                      if (R.haveItemsQueued() && !pe.longStackTraces)
                        throw new Error(
                          'cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n'
                        );
                      (v.prototype._captureStackTrace = n),
                        (v.prototype._attachExtraTrace = t),
                        e.deactivateLongStackTraces(),
                        R.enableTrampoline(),
                        (pe.longStackTraces = !1);
                    }),
                    (v.prototype._captureStackTrace = f),
                    (v.prototype._attachExtraTrace = _),
                    e.activateLongStackTraces(),
                    R.disableTrampolineIfNecessary();
                }
              }),
                (v.hasLongStackTraces = function () {
                  return pe.longStackTraces && T();
                });
              var re = (function () {
                  try {
                    if ('function' == typeof CustomEvent) {
                      var e = new CustomEvent('CustomEvent');
                      return (
                        L.global.dispatchEvent(e),
                        function (o, t) {
                          var e = new CustomEvent(o.toLowerCase(), {
                            detail: t,
                            cancelable: !0,
                          });
                          return !L.global.dispatchEvent(e);
                        }
                      );
                    }
                    if ('function' == typeof Event) {
                      var e = new Event('CustomEvent');
                      return (
                        L.global.dispatchEvent(e),
                        function (o, t) {
                          var e = new Event(o.toLowerCase(), {
                            cancelable: !0,
                          });
                          return (e.detail = t), !L.global.dispatchEvent(e);
                        }
                      );
                    }
                    var e = document.createEvent('CustomEvent');
                    return (
                      e.initCustomEvent('testingtheevent', !1, !0, {}),
                      L.global.dispatchEvent(e),
                      function (o, t) {
                        var e = document.createEvent('CustomEvent');
                        return e.initCustomEvent(o.toLowerCase(), !1, !0, t), !L.global.dispatchEvent(e);
                      }
                    );
                  } catch (t) {}
                  return function () {
                    return !1;
                  };
                })(),
                J = (function () {
                  return L.isNode
                    ? function () {
                        return process.emit.apply(process, arguments);
                      }
                    : L.global
                    ? function (o) {
                        var t = 'on' + o.toLowerCase(),
                          e = L.global[t];
                        return !!e && (e.apply(L.global, [].slice.call(arguments, 1)), !0);
                      }
                    : function () {
                        return !1;
                      };
                })(),
                Y = {
                  promiseCreated: r,
                  promiseFulfilled: r,
                  promiseRejected: r,
                  promiseResolved: r,
                  promiseCancelled: r,
                  promiseChained: function (o, t, e) {
                    return {
                      promise: t,
                      child: e,
                    };
                  },
                  warning: function (n, t) {
                    return {
                      warning: t,
                    };
                  },
                  unhandledRejection: function (o, t, e) {
                    return {
                      reason: t,
                      promise: e,
                    };
                  },
                  rejectionHandled: r,
                },
                Z = function (n) {
                  var t = !1;
                  try {
                    t = J.apply(null, arguments);
                  } catch (e) {
                    R.throwLater(e), (t = !0);
                  }
                  var o = !1;
                  try {
                    o = re(n, Y[n].apply(null, arguments));
                  } catch (e) {
                    R.throwLater(e), (o = !0);
                  }
                  return o || t;
                };
              (v.config = function (e) {
                if (
                  ((e = Object(e)),
                  'longStackTraces' in e &&
                    (e.longStackTraces ? v.longStackTraces() : !e.longStackTraces && v.hasLongStackTraces() && ae()),
                  'warnings' in e)
                ) {
                  var r = e.warnings;
                  (pe.warnings = !!r),
                    (X = pe.warnings),
                    L.isObject(r) && 'wForgottenReturn' in r && (X = !!r.wForgottenReturn);
                }
                if ('cancellation' in e && e.cancellation && !pe.cancellation) {
                  if (R.haveItemsQueued()) throw new Error('cannot enable cancellation after promises are in use');
                  (v.prototype._clearCancellationData = l),
                    (v.prototype._propagateFrom = u),
                    (v.prototype._onCancel = a),
                    (v.prototype._setOnCancel = c),
                    (v.prototype._attachCancellationCallback = s),
                    (v.prototype._execute = o),
                    (ie = u),
                    (pe.cancellation = !0);
                }
                return (
                  'monitoring' in e &&
                    (e.monitoring && !pe.monitoring
                      ? ((pe.monitoring = !0), (v.prototype._fireEvent = Z))
                      : !e.monitoring && pe.monitoring && ((pe.monitoring = !1), (v.prototype._fireEvent = i))),
                  v
                );
              }),
                (v.prototype._fireEvent = i),
                (v.prototype._execute = function (o, t, e) {
                  try {
                    o(t, e);
                  } catch (e) {
                    return e;
                  }
                }),
                (v.prototype._onCancel = function () {}),
                (v.prototype._setOnCancel = function () {}),
                (v.prototype._attachCancellationCallback = function () {}),
                (v.prototype._captureStackTrace = function () {}),
                (v.prototype._attachExtraTrace = function () {}),
                (v.prototype._clearCancellationData = function () {}),
                (v.prototype._propagateFrom = function () {});
              var ie = function (n, t) {
                  0 != (2 & t) && n._isBound() && this._setBoundTo(n._boundTo);
                },
                le = function () {
                  return !1;
                },
                se = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
              L.inherits(S, Error),
                (e.CapturedTrace = S),
                (S.prototype.uncycle = function () {
                  var d = this._length;
                  if (!(2 > d)) {
                    for (var p = [], e = {}, n = 0, m = this; void 0 !== m; ++n) p.push(m), (m = m._parent);
                    d = this._length = n;
                    for (var n = d - 1, h; 0 <= n; --n) (h = p[n].stack), void 0 === e[h] && (e[h] = n);
                    for (var n = 0; d > n; ++n) {
                      var y = p[n].stack,
                        s = e[y];
                      if (void 0 !== s && s !== n) {
                        0 < s && ((p[s - 1]._parent = void 0), (p[s - 1]._length = 1)),
                          (p[n]._parent = void 0),
                          (p[n]._length = 1);
                        var a = 0 < n ? p[n - 1] : this;
                        d - 1 > s
                          ? ((a._parent = p[s + 1]), a._parent.uncycle(), (a._length = a._parent._length + 1))
                          : ((a._parent = void 0), (a._length = 1));
                        for (var c = a._length + 1, f = n - 2; 0 <= f; --f) (p[f]._length = c), c++;
                        return;
                      }
                    }
                  }
                }),
                (S.prototype.attachExtraTrace = function (o) {
                  if (!o.__stackCleaned__) {
                    this.uncycle();
                    for (var t = j(o), e = t.message, n = [t.stack], a = this; void 0 !== a; )
                      n.push(w(a.stack.split('\n'))), (a = a._parent);
                    b(n),
                      g(n),
                      L.notEnumerableProp(o, 'stack', m(e, n)),
                      L.notEnumerableProp(o, '__stackCleaned__', !0);
                  }
                });
              var de = (function () {
                var o = /^\s*at\s*/,
                  t = function (e, t) {
                    return 'string' == typeof e ? e : void 0 !== t.name && void 0 !== t.message ? t.toString() : F(t);
                  };
                if ('number' == typeof Error.stackTraceLimit && 'function' == typeof Error.captureStackTrace) {
                  (Error.stackTraceLimit += 6), (M = o), (U = t);
                  var a = Error.captureStackTrace;
                  return (
                    (le = function (e) {
                      return N.test(e);
                    }),
                    function (n, t) {
                      (Error.stackTraceLimit += 6), a(n, t), (Error.stackTraceLimit -= 6);
                    }
                  );
                }
                var e = new Error();
                if ('string' == typeof e.stack && 0 <= e.stack.split('\n')[0].indexOf('stackDetection@'))
                  return (
                    (M = /@/),
                    (U = t),
                    (V = !0),
                    function (e) {
                      e.stack = new Error().stack;
                    }
                  );
                var n;
                try {
                  throw new Error();
                } catch (e) {
                  n = 'stack' in e;
                }
                return 'stack' in e || !n || 'number' != typeof Error.stackTraceLimit
                  ? ((U = function (n, t) {
                      return 'string' == typeof n
                        ? n
                        : ('object' != _typeof(t) && 'function' != typeof t) ||
                          void 0 === t.name ||
                          void 0 === t.message
                        ? F(t)
                        : t.toString();
                    }),
                    null)
                  : ((M = o),
                    (U = t),
                    function (n) {
                      Error.stackTraceLimit += 6;
                      try {
                        throw new Error();
                      } catch (t) {
                        n.stack = t.stack;
                      }
                      Error.stackTraceLimit -= 6;
                    });
              })([]);
              'undefined' != typeof console &&
                'undefined' != typeof console.warn &&
                ((oe = function (e) {
                  console.warn(e);
                }),
                L.isNode && process.stderr.isTTY
                  ? (oe = function (o, t) {
                      var e = t ? '\x1B[33m' : '\x1B[31m';
                      console.warn(e + o + '\x1B[0m\n');
                    })
                  : L.isNode ||
                    'string' != typeof new Error().stack ||
                    (oe = function (n, t) {
                      console.warn('%c' + n, t ? 'color: darkorange' : 'color: red');
                    }));
              var pe = {
                warnings: G,
                longStackTraces: !1,
                cancellation: !1,
                monitoring: !1,
              };
              return (
                z && v.longStackTraces(),
                {
                  longStackTraces: function () {
                    return pe.longStackTraces;
                  },
                  warnings: function () {
                    return pe.warnings;
                  },
                  cancellation: function () {
                    return pe.cancellation;
                  },
                  monitoring: function () {
                    return pe.monitoring;
                  },
                  propagateFromFunction: function () {
                    return ie;
                  },
                  boundValueFunction: function () {
                    return h;
                  },
                  checkForgottenReturns: d,
                  setBounds: function (d, t) {
                    if (T()) {
                      for (
                        var e = d.stack.split('\n'), i = t.stack.split('\n'), o = -1, p = -1, u = 0, m, h, y;
                        u < e.length;
                        ++u
                      )
                        if (((y = P(e[u])), y)) {
                          (m = y.fileName), (o = y.line);
                          break;
                        }
                      for (var u = 0, y; u < i.length; ++u)
                        if (((y = P(i[u])), y)) {
                          (h = y.fileName), (p = y.line);
                          break;
                        }
                      0 > o ||
                        0 > p ||
                        !m ||
                        !h ||
                        m !== h ||
                        o >= p ||
                        (le = function (n) {
                          if (N.test(n)) return !0;
                          var t = P(n);
                          return !!(t && t.fileName === m && o <= t.line && t.line <= p);
                        });
                    }
                  },
                  warn: y,
                  deprecated: function (o, t) {
                    var e = o + ' is deprecated and will be removed in a future version.';
                    return t && (e += ' Use ' + t + ' instead.'), y(e);
                  },
                  CapturedTrace: S,
                  fireDomEvent: re,
                  fireGlobalEvent: J,
                }
              );
            };
          },
          {
            './errors': 12,
            './util': 36,
          },
        ],
        10: [
          function (n, t) {
            'use strict';
            t.exports = function (o) {
              function e() {
                return this.value;
              }

              function n() {
                throw this.reason;
              }
              (o.prototype['return'] = o.prototype.thenReturn = function (t) {
                return (
                  t instanceof o && t.suppressUnhandledRejections(),
                  this._then(
                    e,
                    void 0,
                    void 0,
                    {
                      value: t,
                    },
                    void 0
                  )
                );
              }),
                (o.prototype['throw'] = o.prototype.thenThrow = function (e) {
                  return this._then(
                    n,
                    void 0,
                    void 0,
                    {
                      reason: e,
                    },
                    void 0
                  );
                }),
                (o.prototype.catchThrow = function (o) {
                  if (1 >= arguments.length)
                    return this._then(
                      void 0,
                      n,
                      void 0,
                      {
                        reason: o,
                      },
                      void 0
                    );
                  var t = arguments[1];
                  return this.caught(o, function () {
                    throw t;
                  });
                }),
                (o.prototype.catchReturn = function (t) {
                  if (1 >= arguments.length)
                    return (
                      t instanceof o && t.suppressUnhandledRejections(),
                      this._then(
                        void 0,
                        e,
                        void 0,
                        {
                          value: t,
                        },
                        void 0
                      )
                    );
                  var n = arguments[1];
                  n instanceof o && n.suppressUnhandledRejections();
                  return this.caught(t, function () {
                    return n;
                  });
                });
            };
          },
          {},
        ],
        11: [
          function (n, t) {
            'use strict';
            t.exports = function (a, l) {
              function n() {
                return t(this);
              }
              var e = a.reduce,
                t = a.all;
              (a.prototype.each = function (o) {
                return e(this, o, l, 0)._then(n, void 0, void 0, this, void 0);
              }),
                (a.prototype.mapSeries = function (n) {
                  return e(this, n, l, l);
                }),
                (a.each = function (o, t) {
                  return e(o, t, l, 0)._then(n, void 0, void 0, o, void 0);
                }),
                (a.mapSeries = function (o, t) {
                  return e(o, t, l, l);
                });
            };
          },
          {},
        ],
        12: [
          function (n, t) {
            'use strict';

            function r(o, t) {
              function n(e) {
                return this instanceof n
                  ? (u(this, 'message', 'string' == typeof e ? e : t),
                    u(this, 'name', o),
                    void (Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this)))
                  : new n(e);
              }
              return l(n, Error), n;
            }

            function i(e) {
              return this instanceof i
                ? (u(this, 'name', 'OperationalError'),
                  u(this, 'message', e),
                  (this.cause = e),
                  (this.isOperational = !0),
                  void (e instanceof Error
                    ? (u(this, 'message', e.message), u(this, 'stack', e.stack))
                    : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor)))
                : new i(e);
            }
            var e = n('./es5'),
              a = e.freeze,
              c = n('./util'),
              l = c.inherits,
              u = c.notEnumerableProp,
              p = r('Warning', 'warning'),
              h = r('CancellationError', 'cancellation error'),
              f = r('TimeoutError', 'timeout error'),
              _ = r('AggregateError', 'aggregate error'),
              d,
              x;
            try {
              (d = TypeError), (x = RangeError);
            } catch (e) {
              (d = r('TypeError', 'type error')), (x = r('RangeError', 'range error'));
            }
            for (
              var v = [
                  'join',
                  'pop',
                  'push',
                  'shift',
                  'unshift',
                  'slice',
                  'filter',
                  'forEach',
                  'some',
                  'every',
                  'map',
                  'indexOf',
                  'lastIndexOf',
                  'reduce',
                  'reduceRight',
                  'sort',
                  'reverse',
                ],
                y = 0;
              y < v.length;
              ++y
            )
              'function' == typeof Array.prototype[v[y]] && (_.prototype[v[y]] = Array.prototype[v[y]]);
            e.defineProperty(_.prototype, 'length', {
              value: 0,
              configurable: !1,
              writable: !0,
              enumerable: !0,
            }),
              (_.prototype.isOperational = !0);
            var C = 0;
            (_.prototype.toString = function () {
              var a = Array(4 * C + 1).join(' '),
                l = '\n' + a + 'AggregateError of:\n';
              C++, (a = Array(4 * C + 1).join(' '));
              for (var s = 0; s < this.length; ++s) {
                for (
                  var d = this[s] === this ? '[Circular AggregateError]' : this[s] + '', p = d.split('\n'), i = 0;
                  i < p.length;
                  ++i
                )
                  p[i] = a + p[i];
                (d = p.join('\n')), (l += d + '\n');
              }
              return C--, l;
            }),
              l(i, Error);
            var T = Error.__BluebirdErrorTypes__;
            T ||
              ((T = a({
                CancellationError: h,
                TimeoutError: f,
                OperationalError: i,
                RejectionError: i,
                AggregateError: _,
              })),
              e.defineProperty(Error, '__BluebirdErrorTypes__', {
                value: T,
                writable: !1,
                enumerable: !1,
                configurable: !1,
              })),
              (t.exports = {
                Error: Error,
                TypeError: d,
                RangeError: x,
                CancellationError: T.CancellationError,
                OperationalError: T.OperationalError,
                TimeoutError: T.TimeoutError,
                AggregateError: T.AggregateError,
                Warning: p,
              });
          },
          {
            './es5': 13,
            './util': 36,
          },
        ],
        13: [
          function (n, t) {
            var e = (function () {
              'use strict';
              return void 0 === this;
            })();
            if (e)
              t.exports = {
                freeze: Object.freeze,
                defineProperty: Object.defineProperty,
                getDescriptor: Object.getOwnPropertyDescriptor,
                keys: Object.keys,
                names: Object.getOwnPropertyNames,
                getPrototypeOf: Object.getPrototypeOf,
                isArray: Array.isArray,
                isES5: e,
                propertyIsWritable: function (o, t) {
                  var e = Object.getOwnPropertyDescriptor(o, t);
                  return !e || e.writable || e.set;
                },
              };
            else {
              var r = {}.hasOwnProperty,
                i = {}.toString,
                o = {}.constructor.prototype,
                s = function (o) {
                  var t = [];
                  for (var e in o) r.call(o, e) && t.push(e);
                  return t;
                },
                a = function (n, t) {
                  return {
                    value: n[t],
                  };
                },
                d = function (o, t, e) {
                  return (o[t] = e.value), o;
                },
                l = function (e) {
                  return e;
                },
                c = function (e) {
                  try {
                    return Object(e).constructor.prototype;
                  } catch (t) {
                    return o;
                  }
                },
                p = function (e) {
                  try {
                    return '[object Array]' === i.call(e);
                  } catch (t) {
                    return !1;
                  }
                };
              t.exports = {
                isArray: p,
                keys: s,
                names: s,
                defineProperty: d,
                getDescriptor: a,
                freeze: l,
                getPrototypeOf: c,
                isES5: e,
                propertyIsWritable: function () {
                  return !0;
                },
              };
            }
          },
          {},
        ],
        14: [
          function (n, t) {
            'use strict';
            t.exports = function (o, a) {
              var e = o.map;
              (o.prototype.filter = function (n, t) {
                return e(this, n, t, a);
              }),
                (o.filter = function (n, t, o) {
                  return e(n, t, o, a);
                });
            };
          },
          {},
        ],
        15: [
          function (d, t) {
            'use strict';
            t.exports = function (t, e, n) {
              function i(o, t, e) {
                (this.promise = o),
                  (this.type = t),
                  (this.handler = e),
                  (this.called = !1),
                  (this.cancelPromise = null);
              }

              function o(e) {
                this.finallyHandler = e;
              }

              function s(n, t) {
                return (
                  null != n.cancelPromise &&
                  (1 < arguments.length ? n.cancelPromise._reject(t) : n.cancelPromise._cancel(),
                  (n.cancelPromise = null),
                  !0)
                );
              }

              function a() {
                return l.call(this, this.promise._target()._settledValue());
              }

              function c(e) {
                return s(this, e) ? void 0 : ((p.e = e), p);
              }

              function l(d) {
                var m = this.promise,
                  i = this.handler;
                if (!this.called) {
                  this.called = !0;
                  var l = this.isFinallyHandler() ? i.call(m._boundValue()) : i.call(m._boundValue(), d);
                  if (l === n) return l;
                  if (void 0 !== l) {
                    m._setReturnedNonUndefined();
                    var u = e(l, m);
                    if (u instanceof t) {
                      if (null != this.cancelPromise) {
                        if (u._isCancelled()) {
                          var h = new r('late cancellation observer');
                          return m._attachExtraTrace(h), (p.e = h), p;
                        }
                        u.isPending() && u._attachCancellationCallback(new o(this));
                      }
                      return u._then(a, c, void 0, this, void 0);
                    }
                  }
                }
                return m.isRejected() ? (s(this), (p.e = d), p) : (s(this), d);
              }
              var m = d('./util'),
                r = t.CancellationError,
                p = m.errorObj,
                u = d('./catch_filter')(n);
              return (
                (i.prototype.isFinallyHandler = function () {
                  return 0 === this.type;
                }),
                (o.prototype._resultCancelled = function () {
                  s(this.finallyHandler);
                }),
                (t.prototype._passThrough = function (o, t, e, n) {
                  return 'function' == typeof o ? this._then(e, n, void 0, new i(this, t, o), void 0) : this.then();
                }),
                (t.prototype.lastly = t.prototype['finally'] = function (e) {
                  return this._passThrough(e, 0, l, l);
                }),
                (t.prototype.tap = function (e) {
                  return this._passThrough(e, 1, l);
                }),
                (t.prototype.tapCatch = function (e) {
                  var d = arguments.length;
                  if (1 === d) return this._passThrough(e, 1, void 0, l);
                  var n = Array(d - 1),
                    i = 0,
                    p;
                  for (p = 0; d - 1 > p; ++p) {
                    var c = arguments[p];
                    if (!m.isObject(c))
                      return t.reject(
                        new TypeError('tapCatch statement predicate: expecting an object but got ' + m.classString(c))
                      );
                    n[i++] = c;
                  }
                  n.length = i;
                  var s = arguments[p];
                  return this._passThrough(u(n, s, this), 1, void 0, l);
                }),
                i
              );
            };
          },
          {
            './catch_filter': 7,
            './util': 36,
          },
        ],
        16: [
          function (d, t) {
            'use strict';
            t.exports = function (m, e, t, y, n, g) {
              function a(e, t, n) {
                for (var r = 0; r < t.length; ++r) {
                  n._pushContext();
                  var l = p(t[r])(e);
                  if ((n._popContext(), l === i)) {
                    n._pushContext();
                    var s = m.reject(i.e);
                    return n._popContext(), s;
                  }
                  var a = y(l, n);
                  if (a instanceof m) return a;
                }
                return null;
              }

              function c(e, r, n, i) {
                if (g.cancellation()) {
                  var o = new m(t),
                    a = (this._finallyPromise = new m(t));
                  (this._promise = o.lastly(function () {
                    return a;
                  })),
                    o._captureStackTrace(),
                    o._setOnCancel(this);
                } else {
                  var d = (this._promise = new m(t));
                  d._captureStackTrace();
                }
                (this._stack = i),
                  (this._generatorFunction = e),
                  (this._receiver = r),
                  (this._generator = void 0),
                  (this._yieldHandlers = 'function' == typeof n ? [n].concat(s) : s),
                  (this._yieldedPromise = null),
                  (this._cancellationPhase = !1);
              }
              var o = d('./errors'),
                l = o.TypeError,
                r = d('./util'),
                i = r.errorObj,
                p = r.tryCatch,
                s = [];
              r.inherits(c, n),
                (c.prototype._isResolved = function () {
                  return null === this._promise;
                }),
                (c.prototype._cleanup = function () {
                  (this._promise = this._generator = null),
                    g.cancellation() &&
                      null !== this._finallyPromise &&
                      (this._finallyPromise._fulfill(), (this._finallyPromise = null));
                }),
                (c.prototype._promiseCancelled = function () {
                  if (!this._isResolved()) {
                    var e = 'undefined' != typeof this._generator['return'],
                      n;
                    if (e)
                      this._promise._pushContext(),
                        (n = p(this._generator['return']).call(this._generator, void 0)),
                        this._promise._popContext();
                    else {
                      var o = new m.CancellationError('generator .return() sentinel');
                      (m.coroutine.returnSentinel = o),
                        this._promise._attachExtraTrace(o),
                        this._promise._pushContext(),
                        (n = p(this._generator['throw']).call(this._generator, o)),
                        this._promise._popContext();
                    }
                    (this._cancellationPhase = !0), (this._yieldedPromise = null), this._continue(n);
                  }
                }),
                (c.prototype._promiseFulfilled = function (n) {
                  (this._yieldedPromise = null), this._promise._pushContext();
                  var t = p(this._generator.next).call(this._generator, n);
                  this._promise._popContext(), this._continue(t);
                }),
                (c.prototype._promiseRejected = function (n) {
                  (this._yieldedPromise = null), this._promise._attachExtraTrace(n), this._promise._pushContext();
                  var t = p(this._generator['throw']).call(this._generator, n);
                  this._promise._popContext(), this._continue(t);
                }),
                (c.prototype._resultCancelled = function () {
                  if (this._yieldedPromise instanceof m) {
                    var e = this._yieldedPromise;
                    (this._yieldedPromise = null), e.cancel();
                  }
                }),
                (c.prototype.promise = function () {
                  return this._promise;
                }),
                (c.prototype._run = function () {
                  (this._generator = this._generatorFunction.call(this._receiver)),
                    (this._receiver = this._generatorFunction = void 0),
                    this._promiseFulfilled(void 0);
                }),
                (c.prototype._continue = function (e) {
                  var t = this._promise;
                  if (e === i)
                    return this._cleanup(), this._cancellationPhase ? t.cancel() : t._rejectCallback(e.e, !1);
                  var n = e.value;
                  if (!0 === e.done)
                    return this._cleanup(), this._cancellationPhase ? t.cancel() : t._resolveCallback(n);
                  var r = y(n, this._promise);
                  if (!(r instanceof m) && ((r = a(r, this._yieldHandlers, this._promise)), null === r))
                    return void this._promiseRejected(
                      new l(
                        'A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n'.replace(
                          '%s',
                          n + ''
                        ) +
                          'From coroutine:\n' +
                          this._stack.split('\n').slice(1, -7).join('\n')
                      )
                    );
                  r = r._target();
                  var d = r._bitField;
                  0 == (50397184 & d)
                    ? ((this._yieldedPromise = r), r._proxy(this, null))
                    : 0 == (33554432 & d)
                    ? 0 == (16777216 & d)
                      ? this._promiseCancelled()
                      : m._async.invoke(this._promiseRejected, this, r._reason())
                    : m._async.invoke(this._promiseFulfilled, this, r._value());
                }),
                (m.coroutine = function (a, t) {
                  if ('function' != typeof a)
                    throw new l('generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n');
                  var r = Object(t).yieldHandler,
                    n = new Error().stack;
                  return function () {
                    var t = a.apply(this, arguments),
                      e = new c(void 0, void 0, r, n),
                      o = e.promise();
                    return (e._generator = t), e._promiseFulfilled(void 0), o;
                  };
                }),
                (m.coroutine.addYieldHandler = function (e) {
                  if ('function' != typeof e) throw new l('expecting a function but got ' + r.classString(e));
                  s.push(e);
                }),
                (m.spawn = function (n) {
                  if ((g.deprecated('Promise.spawn()', 'Promise.coroutine()'), 'function' != typeof n))
                    return e('generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n');
                  var t = new c(n, this),
                    o = t.promise();
                  return t._run(m.spawn), o;
                });
            };
          },
          {
            './errors': 12,
            './util': 36,
          },
        ],
        17: [
          function (o, t) {
            'use strict';
            t.exports = function (t, l) {
              var e = o('./util');
              e.canEvaluate,
                e.tryCatch,
                e.errorObj,
                (t.join = function () {
                  var n = arguments.length - 1,
                    e;
                  if (0 < n && 'function' == typeof arguments[n]) {
                    e = arguments[n];
                    var o;
                  }
                  var a = [].slice.call(arguments);
                  e && a.pop();
                  var o = new l(a).promise();
                  return void 0 === e ? o : o.spread(e);
                });
            };
          },
          {
            './util': 36,
          },
        ],
        18: [
          function (d, t) {
            'use strict';
            t.exports = function (m, e, y, g, _, i) {
              function a(a, t, e, n) {
                this.constructor$(a), this._promise._captureStackTrace();
                var r = o();
                (this._callback = null === r ? t : l.domainBind(r, t)),
                  (this._preservedValues = n === _ ? Array(this.length()) : null),
                  (this._limit = e),
                  (this._inFlight = 0),
                  (this._queue = []),
                  u.invoke(this._asyncInit, this, void 0);
              }

              function c(e, t, n, r) {
                if ('function' != typeof t) return y('expecting a function but got ' + l.classString(t));
                var o = 0;
                if (void 0 !== n) {
                  if ('object' != _typeof(n) || null === n)
                    return m.reject(new TypeError('options argument must be an object but it is ' + l.classString(n)));
                  if ('number' != typeof n.concurrency)
                    return m.reject(
                      new TypeError("'concurrency' must be a number but it is " + l.classString(n.concurrency))
                    );
                  o = n.concurrency;
                }
                return (o = 'number' == typeof o && isFinite(o) && 1 <= o ? o : 0), new a(e, t, o, r).promise();
              }
              var o = m._getDomain,
                l = d('./util'),
                s = l.tryCatch,
                p = l.errorObj,
                u = m._async;
              l.inherits(a, e),
                (a.prototype._asyncInit = function () {
                  this._init$(void 0, -2);
                }),
                (a.prototype._init = function () {}),
                (a.prototype._promiseFulfilled = function (e, t) {
                  var h = this._values,
                    r = this.length(),
                    o = this._preservedValues,
                    a = this._limit;
                  if (!(0 > t)) {
                    if (1 <= a && this._inFlight >= a) return (h[t] = e), this._queue.push(t), !1;
                    null !== o && (o[t] = e);
                    var c = this._promise,
                      l = this._callback,
                      u = c._boundValue();
                    c._pushContext();
                    var f = s(l).call(u, e, t, r),
                      b = c._popContext();
                    if ((i.checkForgottenReturns(f, b, null === o ? 'Promise.map' : 'Promise.filter', c), f === p))
                      return this._reject(f.e), !0;
                    var d = g(f, this._promise);
                    if (d instanceof m) {
                      d = d._target();
                      var x = d._bitField;
                      if (0 == (50397184 & x))
                        return 1 <= a && this._inFlight++, (h[t] = d), d._proxy(this, -1 * (t + 1)), !1;
                      if (0 == (33554432 & x))
                        return 0 == (16777216 & x) ? (this._cancel(), !0) : (this._reject(d._reason()), !0);
                      f = d._value();
                    }
                    h[t] = f;
                  } else if (
                    ((t = -1 * t - 1), (h[t] = e), 1 <= a && (this._inFlight--, this._drainQueue(), this._isResolved()))
                  )
                    return !0;
                  var y = ++this._totalResolved;
                  return !!(y >= r) && (null === o ? this._resolve(h) : this._filter(h, o), !0);
                }),
                (a.prototype._drainQueue = function () {
                  for (var o = this._queue, t = this._limit, e = this._values; 0 < o.length && this._inFlight < t; ) {
                    if (this._isResolved()) return;
                    var n = o.pop();
                    this._promiseFulfilled(e[n], n);
                  }
                }),
                (a.prototype._filter = function (a, t) {
                  for (var e = t.length, n = Array(e), r = 0, l = 0; e > l; ++l) a[l] && (n[r++] = t[l]);
                  (n.length = r), this._resolve(n);
                }),
                (a.prototype.preservedValues = function () {
                  return this._preservedValues;
                }),
                (m.prototype.map = function (n, t) {
                  return c(this, n, t, null);
                }),
                (m.map = function (o, t, e, n) {
                  return c(o, t, e, n);
                });
            };
          },
          {
            './util': 36,
          },
        ],
        19: [
          function (l, t) {
            'use strict';
            t.exports = function (d, e, t, n, m) {
              var o = l('./util'),
                h = o.tryCatch;
              (d.method = function (n) {
                if ('function' != typeof n) throw new d.TypeError('expecting a function but got ' + o.classString(n));
                return function () {
                  var t = new d(e);
                  t._captureStackTrace(), t._pushContext();
                  var o = h(n).apply(this, arguments),
                    a = t._popContext();
                  return m.checkForgottenReturns(o, a, 'Promise.method', t), t._resolveFromSyncValue(o), t;
                };
              }),
                (d.attempt = d['try'] = function (a) {
                  if ('function' != typeof a) return n('expecting a function but got ' + o.classString(a));
                  var t = new d(e);
                  t._captureStackTrace(), t._pushContext();
                  var r;
                  if (1 < arguments.length) {
                    m.deprecated('calling Promise.try with more than 1 argument');
                    var i = arguments[1],
                      l = arguments[2];
                    r = o.isArray(i) ? h(a).apply(l, i) : h(a).call(l, i);
                  } else r = h(a)();
                  var s = t._popContext();
                  return m.checkForgottenReturns(r, s, 'Promise.try', t), t._resolveFromSyncValue(r), t;
                }),
                (d.prototype._resolveFromSyncValue = function (e) {
                  e === o.errorObj ? this._rejectCallback(e.e, !1) : this._resolveCallback(e, !0);
                });
            };
          },
          {
            './util': 36,
          },
        ],
        20: [
          function (n, t) {
            'use strict';

            function r(e) {
              return e instanceof Error && l.getPrototypeOf(e) === Error.prototype;
            }

            function i(p) {
              var t;
              if (r(p)) {
                (t = new a(p)), (t.name = p.name), (t.message = p.message), (t.stack = p.stack);
                for (var c = l.keys(p), n = 0, u; n < c.length; ++n) (u = c[n]), s.test(u) || (t[u] = p[u]);
                return t;
              }
              return d.markAsOriginatingFromRejection(p), p;
            }
            var d = n('./util'),
              e = d.maybeWrapAsError,
              o = n('./errors'),
              a = o.OperationalError,
              l = n('./es5'),
              s = /^(?:name|message|stack|cause)$/;
            t.exports = function (a, l) {
              return function (t, n) {
                if (null !== a) {
                  if (t) {
                    var r = i(e(t));
                    a._attachExtraTrace(r), a._reject(r);
                  } else if (l) {
                    var o = [].slice.call(arguments, 1);
                    a._fulfill(o);
                  } else a._fulfill(n);
                  a = null;
                }
              };
            };
          },
          {
            './errors': 12,
            './es5': 13,
            './util': 36,
          },
        ],
        21: [
          function (l, t) {
            'use strict';
            t.exports = function (t) {
              function n(l, t) {
                var e = this;
                if (!d.isArray(l)) return r.call(e, l, t);
                var n = s(t).apply(e._boundValue(), [null].concat(l));
                n === a && o.throwLater(n.e);
              }

              function r(l, t) {
                var e = this,
                  n = e._boundValue(),
                  r = void 0 === l ? s(t).call(n, null) : s(t).call(n, null, l);
                r === a && o.throwLater(r.e);
              }

              function i(l, d) {
                var e = this;
                if (!l) {
                  var n = new Error(l + '');
                  (n.cause = l), (l = n);
                }
                var r = s(d).call(e._boundValue(), l);
                r === a && o.throwLater(r.e);
              }
              var d = l('./util'),
                o = t._async,
                s = d.tryCatch,
                a = d.errorObj;
              t.prototype.asCallback = t.prototype.nodeify = function (a, t) {
                if ('function' == typeof a) {
                  var e = r;
                  void 0 !== t && Object(t).spread && (e = n), this._then(e, i, void 0, this, a);
                }
                return this;
              };
            };
          },
          {
            './util': 36,
          },
        ],
        22: [
          function (N, t) {
            'use strict';
            t.exports = function () {
              function n() {}

              function r(n, t) {
                if (null == n || n.constructor !== i)
                  throw new y('the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n');
                if ('function' != typeof t) throw new y('expecting a function but got ' + D.classString(t));
              }

              function i(e) {
                e !== g && r(this, e),
                  (this._bitField = 0),
                  (this._fulfillmentHandler0 = void 0),
                  (this._rejectionHandler0 = void 0),
                  (this._promise0 = void 0),
                  (this._receiver0 = void 0),
                  this._resolveFromExecutor(e),
                  this._promiseCreated(),
                  this._fireEvent('promiseCreated', this);
              }

              function o(e) {
                this.promise._resolveCallback(e);
              }

              function s(e) {
                this.promise._rejectCallback(e, !1);
              }

              function a(n) {
                var t = new i(g);
                (t._fulfillmentHandler0 = n), (t._rejectionHandler0 = n), (t._promise0 = n), (t._receiver0 = n);
              }
              var A = function () {
                  return new y('circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n');
                },
                l = function () {
                  return new i.PromiseInspection(this._target());
                },
                e = function (e) {
                  return i.reject(new y(e));
                },
                p = {},
                D = N('./util'),
                f;
              (f = D.isNode
                ? function () {
                    var e = process.domain;
                    return void 0 === e && (e = null), e;
                  }
                : function () {
                    return null;
                  }),
                D.notEnumerableProp(i, '_getDomain', f);
              var u = N('./es5'),
                h = N('./async'),
                L = new h();
              u.defineProperty(i, '_async', {
                value: L,
              });
              var d = N('./errors'),
                y = (i.TypeError = d.TypeError);
              i.RangeError = d.RangeError;
              var m = (i.CancellationError = d.CancellationError);
              (i.TimeoutError = d.TimeoutError),
                (i.OperationalError = d.OperationalError),
                (i.RejectionError = d.OperationalError),
                (i.AggregateError = d.AggregateError);
              var g = function () {},
                _ = {},
                b = {},
                v = N('./thenables')(i, g),
                C = N('./promise_array')(i, g, v, e, n),
                j = N('./context')(i),
                k = j.create,
                w = N('./debuggability')(i, j),
                x = (w.CapturedTrace, N('./finally')(i, v, b)),
                T = N('./catch_filter')(b),
                E = N('./nodeback'),
                F = D.errorObj,
                S = D.tryCatch;
              return (
                (i.prototype.toString = function () {
                  return '[object Promise]';
                }),
                (i.prototype.caught = i.prototype['catch'] = function (a) {
                  var l = arguments.length;
                  if (1 < l) {
                    var s = Array(l - 1),
                      r = 0,
                      d;
                    for (d = 0; l - 1 > d; ++d) {
                      var p = arguments[d];
                      if (!D.isObject(p))
                        return e('Catch statement predicate: expecting an object but got ' + D.classString(p));
                      s[r++] = p;
                    }
                    return (s.length = r), (a = arguments[d]), this.then(void 0, T(s, a, this));
                  }
                  return this.then(void 0, a);
                }),
                (i.prototype.reflect = function () {
                  return this._then(l, l, void 0, this, void 0);
                }),
                (i.prototype.then = function (o, t) {
                  if (w.warnings() && 0 < arguments.length && 'function' != typeof o && 'function' != typeof t) {
                    var e = '.then() only accepts functions but was passed: ' + D.classString(o);
                    1 < arguments.length && (e += ', ' + D.classString(t)), this._warn(e);
                  }
                  return this._then(o, t, void 0, void 0, void 0);
                }),
                (i.prototype.done = function (o, t) {
                  var e = this._then(o, t, void 0, void 0, void 0);
                  e._setIsFinal();
                }),
                (i.prototype.spread = function (n) {
                  return 'function' == typeof n
                    ? this.all()._then(n, void 0, void 0, _, void 0)
                    : e('expecting a function but got ' + D.classString(n));
                }),
                (i.prototype.toJSON = function () {
                  var e = {
                    isFulfilled: !1,
                    isRejected: !1,
                    fulfillmentValue: void 0,
                    rejectionReason: void 0,
                  };
                  return (
                    this.isFulfilled()
                      ? ((e.fulfillmentValue = this.value()), (e.isFulfilled = !0))
                      : this.isRejected() && ((e.rejectionReason = this.reason()), (e.isRejected = !0)),
                    e
                  );
                }),
                (i.prototype.all = function () {
                  return (
                    0 < arguments.length && this._warn('.all() was passed arguments but it does not take any'),
                    new C(this).promise()
                  );
                }),
                (i.prototype.error = function (e) {
                  return this.caught(D.originatesFromRejection, e);
                }),
                (i.getNewLibraryCopy = t.exports),
                (i.is = function (e) {
                  return e instanceof i;
                }),
                (i.fromNode = i.fromCallback = function (o) {
                  var t = new i(g);
                  t._captureStackTrace();
                  var e = !!(1 < arguments.length) && !!Object(arguments[1]).multiArgs,
                    n = S(o)(E(t, e));
                  return n === F && t._rejectCallback(n.e, !0), t._isFateSealed() || t._setAsyncGuaranteed(), t;
                }),
                (i.all = function (e) {
                  return new C(e).promise();
                }),
                (i.cast = function (n) {
                  var t = v(n);
                  return (
                    t instanceof i ||
                      ((t = new i(g)), t._captureStackTrace(), t._setFulfilled(), (t._rejectionHandler0 = n)),
                    t
                  );
                }),
                (i.resolve = i.fulfilled = i.cast),
                (i.reject = i.rejected = function (n) {
                  var t = new i(g);
                  return t._captureStackTrace(), t._rejectCallback(n, !0), t;
                }),
                (i.setScheduler = function (e) {
                  if ('function' != typeof e) throw new y('expecting a function but got ' + D.classString(e));
                  return L.setScheduler(e);
                }),
                (i.prototype._then = function (c, t, e, n, y) {
                  var o = void 0 !== y,
                    s = o ? y : new i(g),
                    a = this._target(),
                    l = a._bitField;
                  o ||
                    (s._propagateFrom(this, 3),
                    s._captureStackTrace(),
                    void 0 === n &&
                      0 != (2097152 & this._bitField) &&
                      (n = 0 == (50397184 & l) ? (a === this ? void 0 : this._boundTo) : this._boundValue()),
                    this._fireEvent('promiseChained', this, s));
                  var u = f();
                  if (0 != (50397184 & l)) {
                    var p = a._settlePromiseCtx,
                      b,
                      x;
                    0 == (33554432 & l)
                      ? 0 == (16777216 & l)
                        ? ((p = a._settlePromiseLateCancellationObserver),
                          (x = new m('late cancellation observer')),
                          a._attachExtraTrace(x),
                          (b = t))
                        : ((x = a._fulfillmentHandler0), (b = t), a._unsetRejectionIsUnhandled())
                      : ((x = a._rejectionHandler0), (b = c)),
                      L.invoke(p, a, {
                        handler: null === u ? b : 'function' == typeof b && D.domainBind(u, b),
                        promise: s,
                        receiver: n,
                        value: x,
                      });
                  } else a._addCallbacks(c, t, s, n, u);
                  return s;
                }),
                (i.prototype._length = function () {
                  return 65535 & this._bitField;
                }),
                (i.prototype._isFateSealed = function () {
                  return 0 != (117506048 & this._bitField);
                }),
                (i.prototype._isFollowing = function () {
                  return 67108864 == (67108864 & this._bitField);
                }),
                (i.prototype._setLength = function (e) {
                  this._bitField = (-65536 & this._bitField) | (65535 & e);
                }),
                (i.prototype._setFulfilled = function () {
                  (this._bitField = 33554432 | this._bitField), this._fireEvent('promiseFulfilled', this);
                }),
                (i.prototype._setRejected = function () {
                  (this._bitField = 16777216 | this._bitField), this._fireEvent('promiseRejected', this);
                }),
                (i.prototype._setFollowing = function () {
                  (this._bitField = 67108864 | this._bitField), this._fireEvent('promiseResolved', this);
                }),
                (i.prototype._setIsFinal = function () {
                  this._bitField = 4194304 | this._bitField;
                }),
                (i.prototype._isFinal = function () {
                  return 0 < (4194304 & this._bitField);
                }),
                (i.prototype._unsetCancelled = function () {
                  this._bitField = -65537 & this._bitField;
                }),
                (i.prototype._setCancelled = function () {
                  (this._bitField = 65536 | this._bitField), this._fireEvent('promiseCancelled', this);
                }),
                (i.prototype._setWillBeCancelled = function () {
                  this._bitField = 8388608 | this._bitField;
                }),
                (i.prototype._setAsyncGuaranteed = function () {
                  L.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField);
                }),
                (i.prototype._receiverAt = function (n) {
                  var t = 0 === n ? this._receiver0 : this[4 * n - 4 + 3];
                  return t === p ? void 0 : void 0 === t && this._isBound() ? this._boundValue() : t;
                }),
                (i.prototype._promiseAt = function (e) {
                  return this[4 * e - 4 + 2];
                }),
                (i.prototype._fulfillmentHandlerAt = function (e) {
                  return this[4 * e - 4 + 0];
                }),
                (i.prototype._rejectionHandlerAt = function (e) {
                  return this[4 * e - 4 + 1];
                }),
                (i.prototype._boundValue = function () {}),
                (i.prototype._migrateCallback0 = function (o) {
                  var t = (o._bitField, o._fulfillmentHandler0),
                    e = o._rejectionHandler0,
                    n = o._promise0,
                    a = o._receiverAt(0);
                  void 0 === a && (a = p), this._addCallbacks(t, e, n, a, null);
                }),
                (i.prototype._migrateCallbackAt = function (a, t) {
                  var e = a._fulfillmentHandlerAt(t),
                    n = a._rejectionHandlerAt(t),
                    r = a._promiseAt(t),
                    i = a._receiverAt(t);
                  void 0 === i && (i = p), this._addCallbacks(e, n, r, i, null);
                }),
                (i.prototype._addCallbacks = function (a, t, e, n, r) {
                  var i = this._length();
                  if ((65531 <= i && ((i = 0), this._setLength(0)), 0 === i))
                    (this._promise0 = e),
                      (this._receiver0 = n),
                      'function' == typeof a && (this._fulfillmentHandler0 = null === r ? a : D.domainBind(r, a)),
                      'function' == typeof t && (this._rejectionHandler0 = null === r ? t : D.domainBind(r, t));
                  else {
                    var l = 4 * i - 4;
                    (this[l + 2] = e),
                      (this[l + 3] = n),
                      'function' == typeof a && (this[l + 0] = null === r ? a : D.domainBind(r, a)),
                      'function' == typeof t && (this[l + 1] = null === r ? t : D.domainBind(r, t));
                  }
                  return this._setLength(i + 1), i;
                }),
                (i.prototype._proxy = function (n, t) {
                  this._addCallbacks(void 0, void 0, t, n, null);
                }),
                (i.prototype._resolveCallback = function (l, t) {
                  if (0 == (117506048 & this._bitField)) {
                    if (l === this) return this._rejectCallback(A(), !1);
                    var e = v(l, this);
                    if (!(e instanceof i)) return this._fulfill(l);
                    t && this._propagateFrom(e, 2);
                    var n = e._target();
                    if (n === this) return void this._reject(A());
                    var r = n._bitField;
                    if (0 == (50397184 & r)) {
                      var o = this._length();
                      0 < o && n._migrateCallback0(this);
                      for (var s = 1; o > s; ++s) n._migrateCallbackAt(this, s);
                      this._setFollowing(), this._setLength(0), this._setFollowee(n);
                    } else if (0 != (33554432 & r)) this._fulfill(n._value());
                    else if (0 != (16777216 & r)) this._reject(n._reason());
                    else {
                      var d = new m('late cancellation observer');
                      n._attachExtraTrace(d), this._reject(d);
                    }
                  }
                }),
                (i.prototype._rejectCallback = function (a, t, e) {
                  var n = D.ensureErrorObject(a),
                    r = n === a;
                  if (!r && !e && w.warnings()) {
                    var i = 'a promise was rejected with a non-error: ' + D.classString(a);
                    this._warn(i, !0);
                  }
                  this._attachExtraTrace(n, !!t && r), this._reject(a);
                }),
                (i.prototype._resolveFromExecutor = function (o) {
                  if (o !== g) {
                    var a = this;
                    this._captureStackTrace(), this._pushContext();
                    var e = !0,
                      t = this._execute(
                        o,
                        function (e) {
                          a._resolveCallback(e);
                        },
                        function (n) {
                          a._rejectCallback(n, e);
                        }
                      );
                    (e = !1), this._popContext(), void 0 !== t && a._rejectCallback(t, !0);
                  }
                }),
                (i.prototype._settlePromiseFromHandler = function (a, t, e, n) {
                  var r = n._bitField;
                  if (0 == (65536 & r)) {
                    n._pushContext();
                    var l;
                    t === _
                      ? e && 'number' == typeof e.length
                        ? (l = S(a).apply(this._boundValue(), e))
                        : ((l = F), (l.e = new y('cannot .spread() a non-array: ' + D.classString(e))))
                      : (l = S(a).call(t, e));
                    var d = n._popContext();
                    (r = n._bitField),
                      0 == (65536 & r) &&
                        (l === b
                          ? n._reject(e)
                          : l === F
                          ? n._rejectCallback(l.e, !1)
                          : (w.checkForgottenReturns(l, d, '', n, this), n._resolveCallback(l)));
                  }
                }),
                (i.prototype._target = function () {
                  for (var e = this; e._isFollowing(); ) e = e._followee();
                  return e;
                }),
                (i.prototype._followee = function () {
                  return this._rejectionHandler0;
                }),
                (i.prototype._setFollowee = function (e) {
                  this._rejectionHandler0 = e;
                }),
                (i.prototype._settlePromise = function (d, t, e, r) {
                  var o = d instanceof i,
                    s = this._bitField,
                    a = 0 != (134217728 & s);
                  0 == (65536 & s)
                    ? 'function' == typeof t
                      ? o
                        ? (a && d._setAsyncGuaranteed(), this._settlePromiseFromHandler(t, e, r, d))
                        : t.call(e, r, d)
                      : e instanceof n
                      ? e._isResolved() || (0 == (33554432 & s) ? e._promiseRejected(r, d) : e._promiseFulfilled(r, d))
                      : o && (a && d._setAsyncGuaranteed(), 0 == (33554432 & s) ? d._reject(r) : d._fulfill(r))
                    : (o && d._invokeInternalOnCancel(),
                      e instanceof x && e.isFinallyHandler()
                        ? ((e.cancelPromise = d), S(t).call(e, r) === F && d._reject(F.e))
                        : t === l
                        ? d._fulfill(l.call(e))
                        : e instanceof n
                        ? e._promiseCancelled(d)
                        : o || d instanceof C
                        ? d._cancel()
                        : e.cancel());
                }),
                (i.prototype._settlePromiseLateCancellationObserver = function (a) {
                  var t = a.handler,
                    e = a.promise,
                    n = a.receiver,
                    r = a.value;
                  'function' == typeof t
                    ? e instanceof i
                      ? this._settlePromiseFromHandler(t, n, r, e)
                      : t.call(n, r, e)
                    : e instanceof i && e._reject(r);
                }),
                (i.prototype._settlePromiseCtx = function (e) {
                  this._settlePromise(e.promise, e.handler, e.receiver, e.value);
                }),
                (i.prototype._settlePromise0 = function (n, t) {
                  var e = this._promise0,
                    o = this._receiverAt(0);
                  (this._promise0 = void 0), (this._receiver0 = void 0), this._settlePromise(e, n, o, t);
                }),
                (i.prototype._clearCallbackDataAtIndex = function (n) {
                  var t = 4 * n - 4;
                  this[t + 2] = this[t + 3] = this[t + 0] = this[t + 1] = void 0;
                }),
                (i.prototype._fulfill = function (o) {
                  var t = this._bitField;
                  if (!((117506048 & t) >>> 16)) {
                    if (o === this) {
                      var e = A();
                      return this._attachExtraTrace(e), this._reject(e);
                    }
                    this._setFulfilled(),
                      (this._rejectionHandler0 = o),
                      0 < (65535 & t) && (0 == (134217728 & t) ? L.settlePromises(this) : this._settlePromises());
                  }
                }),
                (i.prototype._reject = function (n) {
                  var t = this._bitField;
                  if (!((117506048 & t) >>> 16))
                    return (
                      this._setRejected(),
                      (this._fulfillmentHandler0 = n),
                      this._isFinal()
                        ? L.fatalError(n, D.isNode)
                        : void (0 < (65535 & t) ? L.settlePromises(this) : this._ensurePossibleRejectionHandled())
                    );
                }),
                (i.prototype._fulfillPromises = function (a, t) {
                  for (var e = 1; a > e; e++) {
                    var l = this._fulfillmentHandlerAt(e),
                      r = this._promiseAt(e),
                      i = this._receiverAt(e);
                    this._clearCallbackDataAtIndex(e), this._settlePromise(r, l, i, t);
                  }
                }),
                (i.prototype._rejectPromises = function (a, t) {
                  for (var e = 1; a > e; e++) {
                    var l = this._rejectionHandlerAt(e),
                      r = this._promiseAt(e),
                      i = this._receiverAt(e);
                    this._clearCallbackDataAtIndex(e), this._settlePromise(r, l, i, t);
                  }
                }),
                (i.prototype._settlePromises = function () {
                  var o = this._bitField,
                    t = 65535 & o;
                  if (0 < t) {
                    if (0 != (16842752 & o)) {
                      var e = this._fulfillmentHandler0;
                      this._settlePromise0(this._rejectionHandler0, e, o), this._rejectPromises(t, e);
                    } else {
                      var n = this._rejectionHandler0;
                      this._settlePromise0(this._fulfillmentHandler0, n, o), this._fulfillPromises(t, n);
                    }
                    this._setLength(0);
                  }
                  this._clearCancellationData();
                }),
                (i.prototype._settledValue = function () {
                  var e = this._bitField;
                  return 0 == (33554432 & e)
                    ? 0 == (16777216 & e)
                      ? void 0
                      : this._fulfillmentHandler0
                    : this._rejectionHandler0;
                }),
                (i.defer = i.pending = function () {
                  w.deprecated('Promise.defer', 'new Promise');
                  var e = new i(g);
                  return {
                    promise: e,
                    resolve: o,
                    reject: s,
                  };
                }),
                D.notEnumerableProp(i, '_makeSelfResolutionError', A),
                N('./method')(i, g, v, e, w),
                N('./bind')(i, g, v, w),
                N('./cancel')(i, C, e, w),
                N('./direct_resolve')(i),
                N('./synchronous_inspection')(i),
                N('./join')(i, C, v, g, L, f),
                (i.Promise = i),
                (i.version = '3.5.0'),
                N('./map.js')(i, C, e, v, g, w),
                N('./call_get.js')(i),
                N('./using.js')(i, e, v, k, g, w),
                N('./timers.js')(i, g, w),
                N('./generators.js')(i, e, g, v, n, w),
                N('./nodeify.js')(i),
                N('./promisify.js')(i, g),
                N('./props.js')(i, C, v, e),
                N('./race.js')(i, g, v, e),
                N('./reduce.js')(i, C, e, v, g, w),
                N('./settle.js')(i, C, w),
                N('./some.js')(i, C, e),
                N('./filter.js')(i, g),
                N('./each.js')(i, g),
                N('./any.js')(i),
                D.toFastProperties(i),
                D.toFastProperties(i.prototype),
                a({
                  a: 1,
                }),
                a({
                  b: 2,
                }),
                a({
                  c: 3,
                }),
                a(1),
                a(function () {}),
                a(void 0),
                a(!1),
                a(new i(g)),
                w.setBounds(h.firstLineError, D.lastLineError),
                i
              );
            };
          },
          {
            './any.js': 1,
            './async': 2,
            './bind': 3,
            './call_get.js': 5,
            './cancel': 6,
            './catch_filter': 7,
            './context': 8,
            './debuggability': 9,
            './direct_resolve': 10,
            './each.js': 11,
            './errors': 12,
            './es5': 13,
            './filter.js': 14,
            './finally': 15,
            './generators.js': 16,
            './join': 17,
            './map.js': 18,
            './method': 19,
            './nodeback': 20,
            './nodeify.js': 21,
            './promise_array': 23,
            './promisify.js': 24,
            './props.js': 25,
            './race.js': 27,
            './reduce.js': 28,
            './settle.js': 30,
            './some.js': 31,
            './synchronous_inspection': 32,
            './thenables': 33,
            './timers.js': 34,
            './using.js': 35,
            './util': 36,
          },
        ],
        23: [
          function (l, t) {
            'use strict';
            t.exports = function (d, e, p, t, n) {
              function s(e) {
                return -2 === e ? [] : -3 === e ? {} : -6 === e ? new Map() : void 0;
              }

              function a(n) {
                var t = (this._promise = new d(e));
                n instanceof d && t._propagateFrom(n, 3),
                  t._setOnCancel(this),
                  (this._values = n),
                  (this._length = 0),
                  (this._totalResolved = 0),
                  this._init(void 0, -2);
              }
              var r = l('./util');
              return (
                r.isArray,
                r.inherits(a, n),
                (a.prototype.length = function () {
                  return this._length;
                }),
                (a.prototype.promise = function () {
                  return this._promise;
                }),
                (a.prototype._init = function l(e, i) {
                  var n = p(this._values, this._promise);
                  if (n instanceof d) {
                    n = n._target();
                    var c = n._bitField;
                    if (((this._values = n), 0 == (50397184 & c)))
                      return this._promise._setAsyncGuaranteed(), n._then(l, this._reject, void 0, this, i);
                    if (0 == (33554432 & c)) return 0 == (16777216 & c) ? this._cancel() : this._reject(n._reason());
                    n = n._value();
                  }
                  if (((n = r.asArray(n)), null === n)) {
                    var a = t('expecting an array or an iterable object but got ' + r.classString(n)).reason();
                    return void this._promise._rejectCallback(a, !1);
                  }
                  return 0 === n.length
                    ? void (-5 === i ? this._resolveEmptyArray() : this._resolve(s(i)))
                    : void this._iterate(n);
                }),
                (a.prototype._iterate = function (e) {
                  var t = this.getActualLength(e.length);
                  (this._length = t), (this._values = this.shouldCopyValues() ? Array(t) : this._values);
                  for (var n = this._promise, r = !1, i = null, l = 0, u; t > l; ++l)
                    (u = p(e[l], n)),
                      u instanceof d ? ((u = u._target()), (i = u._bitField)) : (i = null),
                      r
                        ? null !== i && u.suppressUnhandledRejections()
                        : null === i
                        ? (r = this._promiseFulfilled(u, l))
                        : 0 == (50397184 & i)
                        ? (u._proxy(this, l), (this._values[l] = u))
                        : (r =
                            0 == (33554432 & i)
                              ? 0 == (16777216 & i)
                                ? this._promiseCancelled(l)
                                : this._promiseRejected(u._reason(), l)
                              : this._promiseFulfilled(u._value(), l));
                  r || n._setAsyncGuaranteed();
                }),
                (a.prototype._isResolved = function () {
                  return null === this._values;
                }),
                (a.prototype._resolve = function (e) {
                  (this._values = null), this._promise._fulfill(e);
                }),
                (a.prototype._cancel = function () {
                  !this._isResolved() &&
                    this._promise._isCancellable() &&
                    ((this._values = null), this._promise._cancel());
                }),
                (a.prototype._reject = function (e) {
                  (this._values = null), this._promise._rejectCallback(e, !1);
                }),
                (a.prototype._promiseFulfilled = function (o, t) {
                  this._values[t] = o;
                  var e = ++this._totalResolved;
                  return !!(e >= this._length) && (this._resolve(this._values), !0);
                }),
                (a.prototype._promiseCancelled = function () {
                  return this._cancel(), !0;
                }),
                (a.prototype._promiseRejected = function (e) {
                  return this._totalResolved++, this._reject(e), !0;
                }),
                (a.prototype._resultCancelled = function () {
                  if (!this._isResolved()) {
                    var e = this._values;
                    if ((this._cancel(), e instanceof d)) e.cancel();
                    else for (var t = 0; t < e.length; ++t) e[t] instanceof d && e[t].cancel();
                  }
                }),
                (a.prototype.shouldCopyValues = function () {
                  return !0;
                }),
                (a.prototype.getActualLength = function (e) {
                  return e;
                }),
                a
              );
            };
          },
          {
            './util': 36,
          },
        ],
        24: [
          function (g, t) {
            'use strict';
            t.exports = function (x, e) {
              function r(e) {
                return !f.test(e);
              }

              function i(e) {
                try {
                  return !0 === e.__isPromisified__;
                } catch (t) {
                  return !1;
                }
              }

              function o(o, t, e) {
                var n = w.getDataPropertyOrDefault(o, t + e, m);
                return !!n && i(n);
              }

              function s(a, t, e) {
                for (var n = 0, l; n < a.length; n += 2)
                  if (((l = a[n]), e.test(l)))
                    for (var d = l.replace(e, ''), o = 0; o < a.length; o += 2)
                      if (a[o] === d)
                        throw new y(
                          "Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace(
                            '%s',
                            t
                          )
                        );
              }

              function a(d, t, e, n) {
                for (var r = w.inheritedDataKeys(d), a = [], c = 0; c < r.length; ++c) {
                  var m = r[c],
                    u = d[m],
                    p = !(n !== _) || _(m, u, d);
                  'function' != typeof u || i(u) || o(d, m, t) || !n(m, u, d, p) || a.push(m, u);
                }
                return s(a, t, e), a;
              }

              function c(p, m, r, i, o, h) {
                function c() {
                  var r = m;
                  m === T && (r = this);
                  var u = new x(e);
                  u._captureStackTrace();
                  var o = 'string' == typeof l && this !== a ? this[l] : p,
                    s = n(u, h);
                  try {
                    o.apply(r, t(arguments, s));
                  } catch (e) {
                    u._rejectCallback(d(e), !0, !0);
                  }
                  return u._isFateSealed() || u._setAsyncGuaranteed(), u;
                }
                var a = (function () {
                    return this;
                  })(),
                  l = p;
                return 'string' == typeof l && (p = i), w.notEnumerableProp(c, '__isPromisified__', !0), c;
              }

              function l(m, t, e, n, r) {
                for (var i = new RegExp(b(t) + '$'), o = a(m, t, i, e), s = 0, h = o.length; h > s; s += 2) {
                  var l = o[s],
                    u = o[s + 1],
                    p = l + t;
                  if (n === v) m[p] = v(l, T, l, u, t, r);
                  else {
                    var y = n(u, function () {
                      return v(l, T, l, u, t, r);
                    });
                    w.notEnumerableProp(y, '__isPromisified__', !0), (m[p] = y);
                  }
                }
                return w.toFastProperties(m), m;
              }

              function u(o, t, e) {
                return v(o, t, void 0, o, null, e);
              }
              var T = {},
                w = g('./util'),
                n = g('./nodeback'),
                t = w.withAppended,
                d = w.maybeWrapAsError,
                h = w.canEvaluate,
                y = g('./errors').TypeError,
                m = {
                  __isPromisified__: !0,
                },
                f = new RegExp(
                  '^(?:' +
                    ['arity', 'length', 'name', 'arguments', 'caller', 'callee', 'prototype', '__isPromisified__'].join(
                      '|'
                    ) +
                    ')$'
                ),
                _ = function (e) {
                  return w.isIdentifier(e) && '_' !== e.charAt(0) && 'constructor' !== e;
                },
                b = function (e) {
                  return e.replace(/([$])/, '\\$');
                },
                v = h ? C : c,
                C;
              (x.promisify = function (a, t) {
                if ('function' != typeof a) throw new y('expecting a function but got ' + w.classString(a));
                if (i(a)) return a;
                t = Object(t);
                var l = void 0 === t.context ? T : t.context,
                  n = !!t.multiArgs,
                  o = u(a, l, n);
                return w.copyDescriptors(a, o, r), o;
              }),
                (x.promisifyAll = function (d, t) {
                  if ('function' != typeof d && 'object' != _typeof(d))
                    throw new y(
                      'the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n'
                    );
                  t = Object(t);
                  var p = !!t.multiArgs,
                    n = t.suffix;
                  'string' != typeof n && (n = 'Async');
                  var u = t.filter;
                  'function' != typeof u && (u = _);
                  var m = t.promisifier;
                  if (('function' != typeof m && (m = v), !w.isIdentifier(n)))
                    throw new RangeError('suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n');
                  for (var h = w.inheritedDataKeys(d), s = 0, f; s < h.length; ++s)
                    (f = d[h[s]]),
                      'constructor' !== h[s] && w.isClass(f) && (l(f.prototype, n, u, m, p), l(f, n, u, m, p));
                  return l(d, n, u, m, p);
                });
            };
          },
          {
            './errors': 12,
            './nodeback': 20,
            './util': 36,
          },
        ],
        25: [
          function (d, t) {
            'use strict';
            t.exports = function (m, e, y, r) {
              function o(a) {
                var t = !1,
                  d;
                if (void 0 !== l && a instanceof l) (d = c(a)), (t = !0);
                else {
                  var p = n.keys(a),
                    r = p.length;
                  d = Array(2 * r);
                  for (var i = 0, u; r > i; ++i) (u = p[i]), (d[i] = a[u]), (d[i + r] = u);
                }
                this.constructor$(d), (this._isMap = t), this._init$(void 0, t ? -6 : -3);
              }

              function s(e) {
                var t = y(e),
                  a;
                return i(t)
                  ? ((a = t instanceof m ? t._then(m.props, void 0, void 0, void 0, void 0) : new o(t).promise()),
                    t instanceof m && a._propagateFrom(t, 2),
                    a)
                  : r('cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n');
              }
              var t = d('./util'),
                i = t.isObject,
                n = d('./es5'),
                l;
              'function' == typeof Map && (l = Map);
              var c = (function () {
                  function t(e, t) {
                    (this[o] = e), (this[o + a] = t), o++;
                  }
                  var o = 0,
                    a = 0;
                  return function (e) {
                    (a = e.size), (o = 0);
                    var n = Array(2 * e.size);
                    return e.forEach(t, n), n;
                  };
                })(),
                p = function (a) {
                  for (var t = new l(), e = 0 | (a.length / 2), n = 0; e > n; ++n) {
                    var s = a[e + n],
                      i = a[n];
                    t.set(s, i);
                  }
                  return t;
                };
              t.inherits(o, e),
                (o.prototype._init = function () {}),
                (o.prototype._promiseFulfilled = function (a, t) {
                  this._values[t] = a;
                  var e = ++this._totalResolved;
                  if (e >= this._length) {
                    var n;
                    if (this._isMap) n = p(this._values);
                    else {
                      n = {};
                      for (var l = this.length(), i = 0, d = this.length(); d > i; ++i)
                        n[this._values[i + l]] = this._values[i];
                    }
                    return this._resolve(n), !0;
                  }
                  return !1;
                }),
                (o.prototype.shouldCopyValues = function () {
                  return !1;
                }),
                (o.prototype.getActualLength = function (e) {
                  return e >> 1;
                }),
                (m.prototype.props = function () {
                  return s(this);
                }),
                (m.props = function (e) {
                  return s(e);
                });
            };
          },
          {
            './es5': 13,
            './util': 36,
          },
        ],
        26: [
          function (n, t) {
            'use strict';

            function r(a, t, e, n, r) {
              for (var i = 0; r > i; ++i) (e[i + n] = a[i + t]), (a[i + t] = void 0);
            }

            function i(e) {
              (this._capacity = e), (this._length = 0), (this._front = 0);
            }
            (i.prototype._willBeOverCapacity = function (e) {
              return this._capacity < e;
            }),
              (i.prototype._pushOne = function (o) {
                var t = this.length();
                this._checkCapacity(t + 1);
                var e = (this._front + t) & (this._capacity - 1);
                (this[e] = o), (this._length = t + 1);
              }),
              (i.prototype.push = function (a, t, e) {
                var n = this.length() + 3;
                if (this._willBeOverCapacity(n)) return this._pushOne(a), this._pushOne(t), void this._pushOne(e);
                var r = this._front + n - 3;
                this._checkCapacity(n);
                var i = this._capacity - 1;
                (this[(r + 0) & i] = a), (this[(r + 1) & i] = t), (this[(r + 2) & i] = e), (this._length = n);
              }),
              (i.prototype.shift = function () {
                var n = this._front,
                  t = this[n];
                return (this[n] = void 0), (this._front = (n + 1) & (this._capacity - 1)), this._length--, t;
              }),
              (i.prototype.length = function () {
                return this._length;
              }),
              (i.prototype._checkCapacity = function (e) {
                this._capacity < e && this._resizeTo(this._capacity << 1);
              }),
              (i.prototype._resizeTo = function (o) {
                var t = this._capacity;
                this._capacity = o;
                var e = this._front,
                  n = this._length;
                r(this, 0, this, t, (e + n) & (t - 1));
              }),
              (t.exports = i);
          },
          {},
        ],
        27: [
          function (l, t) {
            'use strict';
            t.exports = function (d, e, n, r) {
              function o(a, m) {
                var o = n(a);
                if (o instanceof d) return s(o);
                if (((a = i.asArray(a)), null === a))
                  return r('expecting an array or an iterable object but got ' + i.classString(a));
                var c = new d(e);
                void 0 !== m && c._propagateFrom(m, 3);
                for (var l = c._fulfill, u = c._reject, p = 0, y = a.length, f; y > p; ++p)
                  (f = a[p]), (void 0 !== f || p in a) && d.cast(f)._then(l, u, void 0, c, null);
                return c;
              }
              var i = l('./util'),
                s = function (n) {
                  return n.then(function (t) {
                    return o(t, n);
                  });
                };
              (d.race = function (e) {
                return o(e, void 0);
              }),
                (d.prototype.race = function () {
                  return o(this, void 0);
                });
            };
          },
          {
            './util': 36,
          },
        ],
        28: [
          function (d, t) {
            'use strict';
            t.exports = function (m, e, y, r, g, b) {
              function a(e, t, n, a) {
                this.constructor$(e);
                var i = o();
                (this._fn = null === i ? t : h.domainBind(i, t)),
                  void 0 !== n && ((n = m.resolve(n)), n._attachCancellationCallback(this)),
                  (this._initialValue = n),
                  (this._currentCancellable = null),
                  (this._eachValues = a === g ? Array(this._length) : 0 === a ? null : void 0),
                  this._promise._captureStackTrace(),
                  this._init$(void 0, -5);
              }

              function c(n, t) {
                this.isFulfilled() ? t._resolve(n) : t._reject(n);
              }

              function l(r, t, e, n) {
                if ('function' != typeof t) return y('expecting a function but got ' + h.classString(t));
                var i = new a(r, t, e, n);
                return i.promise();
              }

              function u(e) {
                (this.accum = e), this.array._gotAccum(e);
                var t = r(this.value, this.array._promise);
                return t instanceof m
                  ? ((this.array._currentCancellable = t), t._then(p, void 0, void 0, this, void 0))
                  : p.call(this, t);
              }

              function p(e) {
                var t = this.array,
                  n = t._promise,
                  r = s(t._fn);
                n._pushContext();
                var i;
                (i =
                  void 0 === t._eachValues
                    ? r.call(n._boundValue(), this.accum, e, this.index, this.length)
                    : r.call(n._boundValue(), e, this.index, this.length)),
                  i instanceof m && (t._currentCancellable = i);
                var l = n._popContext();
                return (
                  b.checkForgottenReturns(i, l, void 0 === t._eachValues ? 'Promise.reduce' : 'Promise.each', n), i
                );
              }
              var o = m._getDomain,
                h = d('./util'),
                s = h.tryCatch;
              h.inherits(a, e),
                (a.prototype._gotAccum = function (e) {
                  void 0 !== this._eachValues && null !== this._eachValues && e !== g && this._eachValues.push(e);
                }),
                (a.prototype._eachComplete = function (e) {
                  return null !== this._eachValues && this._eachValues.push(e), this._eachValues;
                }),
                (a.prototype._init = function () {}),
                (a.prototype._resolveEmptyArray = function () {
                  this._resolve(void 0 === this._eachValues ? this._initialValue : this._eachValues);
                }),
                (a.prototype.shouldCopyValues = function () {
                  return !1;
                }),
                (a.prototype._resolve = function (e) {
                  this._promise._resolveCallback(e), (this._values = null);
                }),
                (a.prototype._resultCancelled = function (e) {
                  return e === this._initialValue
                    ? this._cancel()
                    : void (
                        this._isResolved() ||
                        (this._resultCancelled$(),
                        this._currentCancellable instanceof m && this._currentCancellable.cancel(),
                        this._initialValue instanceof m && this._initialValue.cancel())
                      );
                }),
                (a.prototype._iterate = function (e) {
                  this._values = e;
                  var t = e.length,
                    a,
                    i;
                  if (
                    (void 0 === this._initialValue
                      ? ((a = m.resolve(e[0])), (i = 1))
                      : ((a = this._initialValue), (i = 0)),
                    (this._currentCancellable = a),
                    !a.isRejected())
                  )
                    for (; t > i; ++i) {
                      var l = {
                        accum: null,
                        value: e[i],
                        index: i,
                        length: t,
                        array: this,
                      };
                      a = a._then(u, void 0, void 0, l, void 0);
                    }
                  void 0 !== this._eachValues && (a = a._then(this._eachComplete, void 0, void 0, this, void 0)),
                    a._then(c, c, void 0, a, this);
                }),
                (m.prototype.reduce = function (n, t) {
                  return l(this, n, t, null);
                }),
                (m.reduce = function (o, t, e, n) {
                  return l(o, t, e, n);
                });
            };
          },
          {
            './util': 36,
          },
        ],
        29: [
          function (n, t) {
            'use strict';
            var e = n('./util'),
              o = e.getNativePromise(),
              i;
            if (e.isNode && 'undefined' == typeof MutationObserver) {
              var s = global.setImmediate,
                a = process.nextTick;
              i = e.isRecentNode
                ? function (e) {
                    s.call(global, e);
                  }
                : function (e) {
                    a.call(process, e);
                  };
            } else if ('function' == typeof o && 'function' == typeof o.resolve) {
              var d = o.resolve();
              i = function (e) {
                d.then(e);
              };
            } else
              i =
                'undefined' == typeof MutationObserver ||
                ('undefined' != typeof window && window.navigator && (window.navigator.standalone || window.cordova))
                  ? 'undefined' == typeof setImmediate
                    ? 'undefined' == typeof setTimeout
                      ? function () {
                          throw new Error('No async scheduler available\n\n    See http://goo.gl/MqrFmX\n');
                        }
                      : function (e) {
                          setTimeout(e, 0);
                        }
                    : function (e) {
                        setImmediate(e);
                      }
                  : (function () {
                      var a = document.createElement('div'),
                        t = {
                          attributes: !0,
                        },
                        e = !1,
                        l = document.createElement('div'),
                        r = new MutationObserver(function () {
                          a.classList.toggle('foo'), (e = !1);
                        });
                      r.observe(l, t);
                      var i = function () {
                        e || ((e = !0), l.classList.toggle('foo'));
                      };
                      return function (e) {
                        var n = new MutationObserver(function () {
                          n.disconnect(), e();
                        });
                        n.observe(a, t), i();
                      };
                    })();
            t.exports = i;
          },
          {
            './util': 36,
          },
        ],
        30: [
          function (a, t) {
            'use strict';
            t.exports = function (t, e, n) {
              function i(e) {
                this.constructor$(e);
              }
              var r = t.PromiseInspection,
                o = a('./util');
              o.inherits(i, e),
                (i.prototype._promiseResolved = function (o, t) {
                  this._values[o] = t;
                  var e = ++this._totalResolved;
                  return !!(e >= this._length) && (this._resolve(this._values), !0);
                }),
                (i.prototype._promiseFulfilled = function (o, t) {
                  var e = new r();
                  return (e._bitField = 33554432), (e._settledValueField = o), this._promiseResolved(t, e);
                }),
                (i.prototype._promiseRejected = function (o, t) {
                  var e = new r();
                  return (e._bitField = 16777216), (e._settledValueField = o), this._promiseResolved(t, e);
                }),
                (t.settle = function (e) {
                  return n.deprecated('.settle()', '.reflect()'), new i(e).promise();
                }),
                (t.prototype.settle = function () {
                  return t.settle(this);
                });
            };
          },
          {
            './util': 36,
          },
        ],
        31: [
          function (d, t) {
            'use strict';
            t.exports = function (t, e, p) {
              function i(e) {
                this.constructor$(e), (this._howMany = 0), (this._unwrap = !1), (this._initialized = !1);
              }

              function o(a, t) {
                if ((0 | t) !== t || 0 > t) return p('expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n');
                var e = new i(a),
                  n = e.promise();
                return e.setHowMany(t), e.init(), n;
              }
              var n = d('./util'),
                r = d('./errors').RangeError,
                a = d('./errors').AggregateError,
                s = n.isArray,
                l = {};
              n.inherits(i, e),
                (i.prototype._init = function () {
                  if (this._initialized) {
                    if (0 === this._howMany) return void this._resolve([]);
                    this._init$(void 0, -5);
                    var e = s(this._values);
                    !this._isResolved() &&
                      e &&
                      this._howMany > this._canPossiblyFulfill() &&
                      this._reject(this._getRangeError(this.length()));
                  }
                }),
                (i.prototype.init = function () {
                  (this._initialized = !0), this._init();
                }),
                (i.prototype.setUnwrap = function () {
                  this._unwrap = !0;
                }),
                (i.prototype.howMany = function () {
                  return this._howMany;
                }),
                (i.prototype.setHowMany = function (e) {
                  this._howMany = e;
                }),
                (i.prototype._promiseFulfilled = function (e) {
                  return (
                    this._addFulfilled(e),
                    !(this._fulfilled() !== this.howMany()) &&
                      ((this._values.length = this.howMany()),
                      1 === this.howMany() && this._unwrap
                        ? this._resolve(this._values[0])
                        : this._resolve(this._values),
                      !0)
                  );
                }),
                (i.prototype._promiseRejected = function (e) {
                  return this._addRejected(e), this._checkOutcome();
                }),
                (i.prototype._promiseCancelled = function () {
                  return this._values instanceof t || null == this._values
                    ? this._cancel()
                    : (this._addRejected(l), this._checkOutcome());
                }),
                (i.prototype._checkOutcome = function () {
                  if (this.howMany() > this._canPossiblyFulfill()) {
                    for (var n = new a(), t = this.length(); t < this._values.length; ++t)
                      this._values[t] !== l && n.push(this._values[t]);
                    return 0 < n.length ? this._reject(n) : this._cancel(), !0;
                  }
                  return !1;
                }),
                (i.prototype._fulfilled = function () {
                  return this._totalResolved;
                }),
                (i.prototype._rejected = function () {
                  return this._values.length - this.length();
                }),
                (i.prototype._addRejected = function (e) {
                  this._values.push(e);
                }),
                (i.prototype._addFulfilled = function (e) {
                  this._values[this._totalResolved++] = e;
                }),
                (i.prototype._canPossiblyFulfill = function () {
                  return this.length() - this._rejected();
                }),
                (i.prototype._getRangeError = function (n) {
                  var t =
                    'Input array must contain at least ' + this._howMany + ' items but contains only ' + n + ' items';
                  return new r(t);
                }),
                (i.prototype._resolveEmptyArray = function () {
                  this._reject(this._getRangeError(0));
                }),
                (t.some = function (n, t) {
                  return o(n, t);
                }),
                (t.prototype.some = function (e) {
                  return o(this, e);
                }),
                (t._SomePromiseArray = i);
            };
          },
          {
            './errors': 12,
            './util': 36,
          },
        ],
        32: [
          function (n, t) {
            'use strict';
            t.exports = function (l) {
              function e(e) {
                void 0 === e
                  ? ((this._bitField = 0), (this._settledValueField = void 0))
                  : ((e = e._target()),
                    (this._bitField = e._bitField),
                    (this._settledValueField = e._isFateSealed() ? e._settledValue() : void 0));
              }
              e.prototype._settledValue = function () {
                return this._settledValueField;
              };
              var t = (e.prototype.value = function () {
                  if (!this.isFulfilled())
                    throw new TypeError(
                      'cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n'
                    );
                  return this._settledValue();
                }),
                n = (e.prototype.error = e.prototype.reason = function () {
                  if (!this.isRejected())
                    throw new TypeError(
                      'cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n'
                    );
                  return this._settledValue();
                }),
                r = (e.prototype.isFulfilled = function () {
                  return 0 != (33554432 & this._bitField);
                }),
                i = (e.prototype.isRejected = function () {
                  return 0 != (16777216 & this._bitField);
                }),
                o = (e.prototype.isPending = function () {
                  return 0 == (50397184 & this._bitField);
                }),
                s = (e.prototype.isResolved = function () {
                  return 0 != (50331648 & this._bitField);
                });
              (e.prototype.isCancelled = function () {
                return 0 != (8454144 & this._bitField);
              }),
                (l.prototype.__isCancelled = function () {
                  return 65536 == (65536 & this._bitField);
                }),
                (l.prototype._isCancelled = function () {
                  return this._target().__isCancelled();
                }),
                (l.prototype.isCancelled = function () {
                  return 0 != (8454144 & this._target()._bitField);
                }),
                (l.prototype.isPending = function () {
                  return o.call(this._target());
                }),
                (l.prototype.isRejected = function () {
                  return i.call(this._target());
                }),
                (l.prototype.isFulfilled = function () {
                  return r.call(this._target());
                }),
                (l.prototype.isResolved = function () {
                  return s.call(this._target());
                }),
                (l.prototype.value = function () {
                  return t.call(this._target());
                }),
                (l.prototype.reason = function () {
                  var e = this._target();
                  return e._unsetRejectionIsUnhandled(), n.call(e);
                }),
                (l.prototype._value = function () {
                  return this._settledValue();
                }),
                (l.prototype._reason = function () {
                  return this._unsetRejectionIsUnhandled(), this._settledValue();
                }),
                (l.PromiseInspection = e);
            };
          },
          {},
        ],
        33: [
          function (d, t) {
            'use strict';
            t.exports = function (m, e) {
              function r(n, t) {
                if (l(n)) {
                  if (n instanceof m) return n;
                  var r = o(n);
                  if (r === y) {
                    t && t._pushContext();
                    var i = m.reject(r.e);
                    return t && t._popContext(), i;
                  }
                  if ('function' == typeof r) {
                    if (s(n)) {
                      var i = new m(e);
                      return n._then(i._fulfill, i._reject, void 0, i, null), i;
                    }
                    return a(n, r, t);
                  }
                }
                return n;
              }

              function i(e) {
                return e.then;
              }

              function o(e) {
                try {
                  return i(e);
                } catch (t) {
                  return (y.e = t), y;
                }
              }

              function s(e) {
                try {
                  return c.call(e, '_promise0');
                } catch (t) {
                  return !1;
                }
              }

              function a(l, t, r) {
                function o(e) {
                  i && (i._resolveCallback(e), (i = null));
                }

                function s(e) {
                  i && (i._rejectCallback(e, c, !0), (i = null));
                }
                var i = new m(e),
                  d = i;
                r && r._pushContext(), i._captureStackTrace(), r && r._popContext();
                var c = !0,
                  u = n.tryCatch(t).call(l, o, s);
                return (c = !1), i && u === y && (i._rejectCallback(u.e, !0, !0), (i = null)), d;
              }
              var n = d('./util'),
                y = n.errorObj,
                l = n.isObject,
                c = {}.hasOwnProperty;
              return r;
            };
          },
          {
            './util': 36,
          },
        ],
        34: [
          function (d, t) {
            'use strict';
            t.exports = function (m, e, h) {
              function i(e) {
                this.handle = e;
              }

              function o(e) {
                return clearTimeout(this.handle), e;
              }

              function s(e) {
                throw (clearTimeout(this.handle), e);
              }
              var y = d('./util'),
                a = m.TimeoutError;
              i.prototype._resultCancelled = function () {
                clearTimeout(this.handle);
              };
              var n = function (e) {
                  return r(+this).thenReturn(e);
                },
                r = (m.delay = function (r, t) {
                  var o, l;
                  return (
                    void 0 === t
                      ? ((o = new m(e)),
                        (l = setTimeout(function () {
                          o._fulfill();
                        }, +r)),
                        h.cancellation() && o._setOnCancel(new i(l)),
                        o._captureStackTrace())
                      : ((o = m.resolve(t)._then(n, null, null, r, void 0)),
                        h.cancellation() && t instanceof m && o._setOnCancel(t)),
                    o._setAsyncGuaranteed(),
                    o
                  );
                });
              m.prototype.delay = function (e) {
                return r(e, this);
              };
              var t = function (o, t, e) {
                var n;
                (n = 'string' == typeof t ? new a(t) : t instanceof Error ? t : new a('operation timed out')),
                  y.markAsOriginatingFromRejection(n),
                  o._attachExtraTrace(n),
                  o._reject(n),
                  null != e && e.cancel();
              };
              m.prototype.timeout = function (r, l) {
                r = +r;
                var e = new i(
                    setTimeout(function () {
                      d.isPending() && t(d, l, p);
                    }, r)
                  ),
                  d,
                  p;
                return (
                  h.cancellation()
                    ? ((p = this.then()), (d = p._then(o, s, void 0, e, void 0)), d._setOnCancel(e))
                    : (d = this._then(o, s, void 0, e, void 0)),
                  d
                );
              };
            };
          },
          {
            './util': 36,
          },
        ],
        35: [
          function (b, t) {
            'use strict';
            t.exports = function (x, e, C, n, r, T) {
              function a(e) {
                setTimeout(function () {
                  throw e;
                }, 0);
              }

              function c(n) {
                var t = C(n);
                return (
                  t !== n &&
                    'function' == typeof n._isDisposable &&
                    'function' == typeof n._getDisposer &&
                    n._isDisposable() &&
                    t._setDisposable(n._getDisposer()),
                  t
                );
              }

              function l(e, t) {
                function i() {
                  if (n >= d) return l._fulfill();
                  var r = c(e[n++]);
                  if (r instanceof x && r._isDisposable()) {
                    try {
                      r = C(r._getDisposer().tryDispose(t), e.promise);
                    } catch (e) {
                      return a(e);
                    }
                    if (r instanceof x) return r._then(i, a, null, null, null);
                  }
                  i();
                }
                var n = 0,
                  d = e.length,
                  l = new x(r);
                return i(), l;
              }

              function u(o, t, e) {
                (this._data = o), (this._promise = t), (this._context = e);
              }

              function p(o, t, e) {
                this.constructor$(o, t, e);
              }

              function h(e) {
                return u.isDisposer(e) ? (this.resources[this.index]._setDisposable(e), e.promise()) : e;
              }

              function f(e) {
                (this.length = e), (this.promise = null), (this[e - 1] = null);
              }
              var s = b('./util'),
                o = b('./errors').TypeError,
                t = b('./util').inherits,
                i = s.errorObj,
                d = s.tryCatch,
                m = {};
              (u.prototype.data = function () {
                return this._data;
              }),
                (u.prototype.promise = function () {
                  return this._promise;
                }),
                (u.prototype.resource = function () {
                  return this.promise().isFulfilled() ? this.promise().value() : m;
                }),
                (u.prototype.tryDispose = function (o) {
                  var t = this.resource(),
                    e = this._context;
                  void 0 !== e && e._pushContext();
                  var n = t === m ? null : this.doDispose(t, o);
                  return void 0 !== e && e._popContext(), this._promise._unsetDisposable(), (this._data = null), n;
                }),
                (u.isDisposer = function (e) {
                  return null != e && 'function' == typeof e.resource && 'function' == typeof e.tryDispose;
                }),
                t(p, u),
                (p.prototype.doDispose = function (o, t) {
                  var e = this.data();
                  return e.call(o, o, t);
                }),
                (f.prototype._resultCancelled = function () {
                  for (var e = this.length, t = 0, o; e > t; ++t) (o = this[t]), o instanceof x && o.cancel();
                }),
                (x.using = function () {
                  var n = arguments.length;
                  if (2 > n) return e('you must pass at least 2 arguments to Promise.using');
                  var m = arguments[n - 1];
                  if ('function' != typeof m) return e('expecting a function but got ' + s.classString(m));
                  var y = !0,
                    r;
                  2 === n && Array.isArray(arguments[0])
                    ? ((r = arguments[0]), (n = r.length), (y = !1))
                    : ((r = arguments), n--);
                  for (var _ = new f(n), c = 0, k; n > c; ++c) {
                    if (((k = r[c]), u.isDisposer(k))) {
                      var j = k;
                      (k = k.promise()), k._setDisposable(j);
                    } else {
                      var v = C(k);
                      v instanceof x &&
                        (k = v._then(
                          h,
                          null,
                          null,
                          {
                            resources: _,
                            index: c,
                          },
                          void 0
                        ));
                    }
                    _[c] = k;
                  }
                  for (var g = Array(_.length), c = 0; c < g.length; ++c) g[c] = x.resolve(_[c]).reflect();
                  var b = x.all(g).then(function (a) {
                      for (var t = 0, l; t < a.length; ++t) {
                        if (((l = a[t]), l.isRejected())) return (i.e = l.error()), i;
                        if (!l.isFulfilled()) return void b.cancel();
                        a[t] = l.value();
                      }
                      w._pushContext(), (m = d(m));
                      var s = y ? m.apply(void 0, a) : m(a),
                        r = w._popContext();
                      return T.checkForgottenReturns(s, r, 'Promise.using', w), s;
                    }),
                    w = b.lastly(function () {
                      var e = new x.PromiseInspection(b);
                      return l(_, e);
                    });
                  return (_.promise = w), w._setOnCancel(_), w;
                }),
                (x.prototype._setDisposable = function (e) {
                  (this._bitField = 131072 | this._bitField), (this._disposer = e);
                }),
                (x.prototype._isDisposable = function () {
                  return 0 < (131072 & this._bitField);
                }),
                (x.prototype._getDisposer = function () {
                  return this._disposer;
                }),
                (x.prototype._unsetDisposable = function () {
                  (this._bitField = -131073 & this._bitField), (this._disposer = void 0);
                }),
                (x.prototype.disposer = function (e) {
                  if ('function' == typeof e) return new p(e, this, n());
                  throw new o();
                });
            };
          },
          {
            './errors': 12,
            './util': 36,
          },
        ],
        36: [
          function (n, t) {
            'use strict';

            function r() {
              try {
                var e = f;
                return (f = null), e.apply(this, arguments);
              } catch (t) {
                return (a.e = t), a;
              }
            }

            function o(e) {
              return null == e || !0 === e || !1 === e || 'string' == typeof e || 'number' == typeof e;
            }

            function s(e) {
              return 'function' == typeof e || ('object' == _typeof(e) && null !== e);
            }

            function u(a, t, e) {
              if (o(a)) return a;
              return (
                d.defineProperty(a, t, {
                  value: e,
                  configurable: !0,
                  enumerable: !1,
                  writable: !0,
                }),
                a
              );
            }

            function v(e) {
              try {
                return e + '';
              } catch (t) {
                return '[no string representation]';
              }
            }

            function y(e) {
              return null !== e && 'object' == _typeof(e) && 'string' == typeof e.message && 'string' == typeof e.name;
            }

            function b(e) {
              return y(e) && d.propertyIsWritable(e, 'stack');
            }

            function w(e) {
              return {}.toString.call(e);
            }
            var d = n('./es5'),
              e = 'undefined' == typeof navigator,
              a = {
                e: {},
              },
              i =
                'undefined' == typeof self
                  ? 'undefined' == typeof window
                    ? 'undefined' == typeof global
                      ? void 0 === this
                        ? null
                        : this
                      : global
                    : window
                  : self,
              l = (function () {
                var a = [Array.prototype, Object.prototype, Function.prototype],
                  p = function (e) {
                    for (var t = 0; t < a.length; ++t) if (a[t] === e) return !0;
                    return !1;
                  };
                if (d.isES5) {
                  var e = Object.getOwnPropertyNames;
                  return function (n) {
                    for (var u = [], r = Object.create(null); null != n && !p(n); ) {
                      var i;
                      try {
                        i = e(n);
                      } catch (e) {
                        return u;
                      }
                      for (var s = 0, m; s < i.length; ++s)
                        if (((m = i[s]), !r[m])) {
                          r[m] = !0;
                          var h = Object.getOwnPropertyDescriptor(n, m);
                          null != h && null == h.get && null == h.set && u.push(m);
                        }
                      n = d.getPrototypeOf(n);
                    }
                    return u;
                  };
                }
                var t = {}.hasOwnProperty;
                return function (e) {
                  if (p(e)) return [];
                  var n = [];
                  t: for (var r in e)
                    if (t.call(e, r)) n.push(r);
                    else {
                      for (var o = 0; o < a.length; ++o) if (t.call(a[o], r)) continue t;
                      n.push(r);
                    }
                  return n;
                };
              })(),
              p = /this\s*\.\s*\S+\s*=/,
              c = /^[a-z$_][a-z$_0-9]*$/i,
              m = (function () {
                return 'stack' in new Error()
                  ? function (e) {
                      return b(e) ? e : new Error(v(e));
                    }
                  : function (e) {
                      if (b(e)) return e;
                      try {
                        throw new Error(v(e));
                      } catch (t) {
                        return t;
                      }
                    };
              })(),
              h = function (e) {
                return d.isArray(e) ? e : null;
              },
              f;
            if ('undefined' != typeof Symbol && Symbol.iterator) {
              var g =
                'function' == typeof Array.from
                  ? function (e) {
                      return Array.from(e);
                    }
                  : function (o) {
                      for (var t = [], n = o[Symbol.iterator](), a; !(a = n.next()).done; ) t.push(a.value);
                      return t;
                    };
              h = function (e) {
                return d.isArray(e) ? e : null != e && 'function' == typeof e[Symbol.iterator] ? g(e) : null;
              };
            }
            var _ = 'undefined' != typeof process && '[object process]' === w(process).toLowerCase(),
              x = 'undefined' != typeof process && 'undefined' != typeof process.env,
              C = {
                isClass: function (o) {
                  try {
                    if ('function' == typeof o) {
                      var t = d.names(o.prototype),
                        e = d.isES5 && 1 < t.length,
                        n = 0 < t.length && (1 !== t.length || 'constructor' !== t[0]),
                        a = p.test(o + '') && 0 < d.names(o).length;
                      if (e || n || a) return !0;
                    }
                    return !1;
                  } catch (e) {
                    return !1;
                  }
                },
                isIdentifier: function (e) {
                  return c.test(e);
                },
                inheritedDataKeys: l,
                getDataPropertyOrDefault: function (o, t, e) {
                  if (!d.isES5) return {}.hasOwnProperty.call(o, t) ? o[t] : void 0;
                  var n = Object.getOwnPropertyDescriptor(o, t);
                  return null == n ? void 0 : null == n.get && null == n.set ? n.value : e;
                },
                thrower: function (e) {
                  throw e;
                },
                isArray: d.isArray,
                asArray: h,
                notEnumerableProp: u,
                isPrimitive: o,
                isObject: s,
                isError: y,
                canEvaluate: e,
                errorObj: a,
                tryCatch: function (e) {
                  return (f = e), r;
                },
                inherits: function (o, t) {
                  function n() {
                    for (var a in ((this.constructor = o), (this.constructor$ = t), t.prototype))
                      e.call(t.prototype, a) && '$' !== a.charAt(a.length - 1) && (this[a + '$'] = t.prototype[a]);
                  }
                  var e = {}.hasOwnProperty;
                  return (n.prototype = t.prototype), (o.prototype = new n()), o.prototype;
                },
                withAppended: function (o, t) {
                  var e = o.length,
                    a = Array(e + 1),
                    r;
                  for (r = 0; e > r; ++r) a[r] = o[r];
                  return (a[r] = t), a;
                },
                maybeWrapAsError: function (e) {
                  return o(e) ? new Error(v(e)) : e;
                },
                toFastProperties: function (o) {
                  function e() {}
                  e.prototype = o;
                  for (var t = 8; t--; ) new e();
                  return o;
                },
                filledRange: function (o, t, e) {
                  for (var n = Array(o), a = 0; o > a; ++a) n[a] = t + a + e;
                  return n;
                },
                toString: v,
                canAttachTrace: b,
                ensureErrorObject: m,
                originatesFromRejection: function (e) {
                  return (
                    null != e && (e instanceof Error.__BluebirdErrorTypes__.OperationalError || !0 === e.isOperational)
                  );
                },
                markAsOriginatingFromRejection: function (e) {
                  try {
                    u(e, 'isOperational', !0);
                  } catch (t) {}
                },
                classString: w,
                copyDescriptors: function (a, t, e) {
                  for (var n = d.names(a), r = 0, l; r < n.length; ++r)
                    if (((l = n[r]), e(l)))
                      try {
                        d.defineProperty(t, l, d.getDescriptor(a, l));
                      } catch (e) {}
                },
                hasDevTools: 'undefined' != typeof chrome && chrome && 'function' == typeof chrome.loadTimes,
                isNode: _,
                hasEnvVariables: x,
                env: function (e) {
                  return x ? process.env[e] : void 0;
                },
                global: i,
                getNativePromise: function () {
                  if ('function' == typeof Promise)
                    try {
                      var e = new Promise(function () {});
                      if ('[object Promise]' === {}.toString.call(e)) return Promise;
                    } catch (t) {}
                },
                domainBind: function (n, t) {
                  return n.bind(t);
                },
              };
            (C.isRecentNode =
              C.isNode &&
              (function () {
                var e = process.versions.node.split('.').map(Number);
                return (0 === e[0] && 10 < e[1]) || 0 < e[0];
              })()),
              C.isNode && C.toFastProperties(process);
            try {
              throw new Error();
            } catch (e) {
              C.lastLineError = e;
            }
            t.exports = C;
          },
          {
            './es5': 13,
          },
        ],
      },
      {},
      [4]
    )(4);
  }),
  'undefined' != typeof window && null !== window
    ? (window.P = window.Promise)
    : 'undefined' != typeof self && null !== self && (self.P = self.Promise),
  (function (e) {
    'use strict';

    function normalizeName(e) {
      if (('string' != typeof e && (e += ''), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)))
        throw new TypeError('Invalid character in header field name');
      return e.toLowerCase();
    }

    function normalizeValue(e) {
      return 'string' != typeof e && (e += ''), e;
    }

    function iteratorFor(e) {
      var n = {
        next: function () {
          var t = e.shift();
          return {
            done: void 0 === t,
            value: t,
          };
        },
      };
      return (
        t.iterable &&
          (n[Symbol.iterator] = function () {
            return n;
          }),
        n
      );
    }

    function Headers(e) {
      (this.map = {}),
        e instanceof Headers
          ? e.forEach(function (e, t) {
              this.append(t, e);
            }, this)
          : Array.isArray(e)
          ? e.forEach(function (e) {
              this.append(e[0], e[1]);
            }, this)
          : e &&
            Object.getOwnPropertyNames(e).forEach(function (t) {
              this.append(t, e[t]);
            }, this);
    }

    function consumed(e) {
      return e.bodyUsed ? Promise.reject(new TypeError('Already read')) : void (e.bodyUsed = !0);
    }

    function fileReaderReady(e) {
      return new Promise(function (t, n) {
        (e.onload = function () {
          t(e.result);
        }),
          (e.onerror = function () {
            n(e.error);
          });
      });
    }

    function readBlobAsArrayBuffer(e) {
      var t = new FileReader(),
        n = fileReaderReady(t);
      return t.readAsArrayBuffer(e), n;
    }

    function readBlobAsText(e) {
      var t = new FileReader(),
        n = fileReaderReady(t);
      return t.readAsText(e), n;
    }

    function readArrayBufferAsText(e) {
      for (var t = new Uint8Array(e), n = Array(t.length), o = 0; o < t.length; o++) n[o] = String.fromCharCode(t[o]);
      return n.join('');
    }

    function bufferClone(e) {
      if (e.slice) return e.slice(0);
      var t = new Uint8Array(e.byteLength);
      return t.set(new Uint8Array(e)), t.buffer;
    }

    function Body() {
      return (
        (this.bodyUsed = !1),
        (this._initBody = function (e) {
          if (((this._bodyInit = e), !e)) this._bodyText = '';
          else if ('string' == typeof e) this._bodyText = e;
          else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
          else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
          else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
          else if (t.arrayBuffer && t.blob && o(e))
            (this._bodyArrayBuffer = bufferClone(e.buffer)), (this._bodyInit = new Blob([this._bodyArrayBuffer]));
          else if (t.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || a(e)))
            this._bodyArrayBuffer = bufferClone(e);
          else throw new Error('unsupported BodyInit type');
          this.headers.get('content-type') ||
            ('string' == typeof e
              ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
              : this._bodyBlob && this._bodyBlob.type
              ? this.headers.set('content-type', this._bodyBlob.type)
              : t.searchParams &&
                URLSearchParams.prototype.isPrototypeOf(e) &&
                this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'));
        }),
        t.blob &&
          ((this.blob = function () {
            var e = consumed(this);
            if (e) return e;
            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            if (this._bodyFormData) throw new Error('could not read FormData body as blob');
            else return Promise.resolve(new Blob([this._bodyText]));
          }),
          (this.arrayBuffer = function () {
            return this._bodyArrayBuffer
              ? consumed(this) || Promise.resolve(this._bodyArrayBuffer)
              : this.blob().then(readBlobAsArrayBuffer);
          })),
        (this.text = function () {
          var e = consumed(this);
          if (e) return e;
          if (this._bodyBlob) return readBlobAsText(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          if (this._bodyFormData) throw new Error('could not read FormData body as text');
          else return Promise.resolve(this._bodyText);
        }),
        t.formData &&
          (this.formData = function () {
            return this.text().then(decode);
          }),
        (this.json = function () {
          return this.text().then(JSON.parse);
        }),
        this
      );
    }

    function normalizeMethod(e) {
      var t = e.toUpperCase();
      return -1 < r.indexOf(t) ? t : e;
    }

    function Request(e, t) {
      t = t || {};
      var n = t.body;
      if (e instanceof Request) {
        if (e.bodyUsed) throw new TypeError('Already read');
        (this.url = e.url),
          (this.credentials = e.credentials),
          t.headers || (this.headers = new Headers(e.headers)),
          (this.method = e.method),
          (this.mode = e.mode),
          n || null == e._bodyInit || ((n = e._bodyInit), (e.bodyUsed = !0));
      } else this.url = e + '';
      if (
        ((this.credentials = t.credentials || this.credentials || 'omit'),
        (t.headers || !this.headers) && (this.headers = new Headers(t.headers)),
        (this.method = normalizeMethod(t.method || this.method || 'GET')),
        (this.mode = t.mode || this.mode || null),
        (this.referrer = null),
        ('GET' === this.method || 'HEAD' === this.method) && n)
      )
        throw new TypeError('Body not allowed for GET or HEAD requests');
      this._initBody(n);
    }

    function decode(e) {
      var t = new FormData();
      return (
        e
          .trim()
          .split('&')
          .forEach(function (e) {
            if (e) {
              var n = e.split('='),
                o = n.shift().replace(/\+/g, ' '),
                a = n.join('=').replace(/\+/g, ' ');
              t.append(decodeURIComponent(o), decodeURIComponent(a));
            }
          }),
        t
      );
    }

    function parseHeaders(e) {
      var t = new Headers();
      return (
        e.split(/\r?\n/).forEach(function (e) {
          var n = e.split(':'),
            o = n.shift().trim();
          if (o) {
            var a = n.join(':').trim();
            t.append(o, a);
          }
        }),
        t
      );
    }

    function Response(e, t) {
      t || (t = {}),
        (this.type = 'default'),
        (this.status = 'status' in t ? t.status : 200),
        (this.ok = 200 <= this.status && 300 > this.status),
        (this.statusText = 'statusText' in t ? t.statusText : 'OK'),
        (this.headers = new Headers(t.headers)),
        (this.url = t.url || ''),
        this._initBody(e);
    }
    if (!e.fetch) {
      var t = {
        searchParams: 'URLSearchParams' in e,
        iterable: 'Symbol' in e && 'iterator' in Symbol,
        blob:
          'FileReader' in e &&
          'Blob' in e &&
          (function () {
            try {
              return new Blob(), !0;
            } catch (t) {
              return !1;
            }
          })(),
        formData: 'FormData' in e,
        arrayBuffer: 'ArrayBuffer' in e,
      };
      if (t.arrayBuffer)
        var n = [
            '[object Int8Array]',
            '[object Uint8Array]',
            '[object Uint8ClampedArray]',
            '[object Int16Array]',
            '[object Uint16Array]',
            '[object Int32Array]',
            '[object Uint32Array]',
            '[object Float32Array]',
            '[object Float64Array]',
          ],
          o = function (e) {
            return e && DataView.prototype.isPrototypeOf(e);
          },
          a =
            ArrayBuffer.isView ||
            function (e) {
              return e && -1 < n.indexOf(Object.prototype.toString.call(e));
            };
      (Headers.prototype.append = function (e, t) {
        (e = normalizeName(e)), (t = normalizeValue(t));
        var n = this.map[e];
        this.map[e] = n ? n + ',' + t : t;
      }),
        (Headers.prototype['delete'] = function (e) {
          delete this.map[normalizeName(e)];
        }),
        (Headers.prototype.get = function (e) {
          return (e = normalizeName(e)), this.has(e) ? this.map[e] : null;
        }),
        (Headers.prototype.has = function (e) {
          return this.map.hasOwnProperty(normalizeName(e));
        }),
        (Headers.prototype.set = function (e, t) {
          this.map[normalizeName(e)] = normalizeValue(t);
        }),
        (Headers.prototype.forEach = function (e, t) {
          for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
        }),
        (Headers.prototype.keys = function () {
          var e = [];
          return (
            this.forEach(function (t, n) {
              e.push(n);
            }),
            iteratorFor(e)
          );
        }),
        (Headers.prototype.values = function () {
          var e = [];
          return (
            this.forEach(function (t) {
              e.push(t);
            }),
            iteratorFor(e)
          );
        }),
        (Headers.prototype.entries = function () {
          var e = [];
          return (
            this.forEach(function (t, n) {
              e.push([n, t]);
            }),
            iteratorFor(e)
          );
        }),
        t.iterable && (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
      var r = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
      (Request.prototype.clone = function () {
        return new Request(this, {
          body: this._bodyInit,
        });
      }),
        Body.call(Request.prototype),
        Body.call(Response.prototype),
        (Response.prototype.clone = function () {
          return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url,
          });
        }),
        (Response.error = function () {
          var e = new Response(null, {
            status: 0,
            statusText: '',
          });
          return (e.type = 'error'), e;
        });
      var i = [301, 302, 303, 307, 308];
      (Response.redirect = function (e, t) {
        if (-1 === i.indexOf(t)) throw new RangeError('Invalid status code');
        return new Response(null, {
          status: t,
          headers: {
            location: e,
          },
        });
      }),
        (e.Headers = Headers),
        (e.Request = Request),
        (e.Response = Response),
        (e.fetch = function (e, n) {
          return new Promise(function (o, a) {
            var r = new Request(e, n),
              i = new XMLHttpRequest();
            (i.onload = function () {
              var e = {
                status: i.status,
                statusText: i.statusText,
                headers: parseHeaders(i.getAllResponseHeaders() || ''),
              };
              e.url = 'responseURL' in i ? i.responseURL : e.headers.get('X-Request-URL');
              var t = 'response' in i ? i.response : i.responseText;
              o(new Response(t, e));
            }),
              (i.onerror = function () {
                a(new TypeError('Network request failed'));
              }),
              (i.ontimeout = function () {
                a(new TypeError('Network request failed'));
              }),
              i.open(r.method, r.url, !0),
              'include' === r.credentials && (i.withCredentials = !0),
              'responseType' in i && t.blob && (i.responseType = 'blob'),
              r.headers.forEach(function (e, t) {
                i.setRequestHeader(t, e);
              }),
              i.send('undefined' == typeof r._bodyInit ? null : r._bodyInit);
          });
        }),
        (e.fetch.polyfill = !0);
    }
  })('undefined' == typeof self ? void 0 : self);
