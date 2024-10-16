(function e(t, n, r) {
  function s(o, u) {
      if (!n[o]) {
          if (!t[o]) {
              var a = typeof require == "function" && require;
              if (!u && a) return a(o, !0);
              if (i) return i(o, !0);
              var f = new Error("Cannot find module '" + o + "'");
              throw ((f.code = "MODULE_NOT_FOUND"), f);
          }
          var l = (n[o] = { exports: {} });
          t[o][0].call(
              l.exports,
              function (e) {
                  var n = t[o][1][e];
                  return s(n ? n : e);
              },
              l,
              l.exports,
              e,
              t,
              n,
              r
          );
      }
      return n[o].exports;
  }
  var i = typeof require == "function" && require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
})(
  {
      1: [
          function (require, module, exports) {
              !(function (e, t) {
                  "object" == typeof module && "object" == typeof module.exports
                      ? (module.exports = e.document
                            ? t(e, !0)
                            : function (e) {
                                  if (!e.document) throw new Error("jQuery requires a window with a document");
                                  return t(e);
                              })
                      : t(e);
              })("undefined" != typeof window ? window : this, function (e, t) {
                  function n(e) {
                      var t = !!e && "length" in e && e.length,
                          n = oe.type(e);
                      return "function" !== n && !oe.isWindow(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
                  }
                  function r(e, t, n) {
                      if (oe.isFunction(t))
                          return oe.grep(e, function (e, r) {
                              return !!t.call(e, r, e) !== n;
                          });
                      if (t.nodeType)
                          return oe.grep(e, function (e) {
                              return (e === t) !== n;
                          });
                      if ("string" == typeof t) {
                          if (ge.test(t)) return oe.filter(t, e, n);
                          t = oe.filter(t, e);
                      }
                      return oe.grep(e, function (e) {
                          return Z.call(t, e) > -1 !== n;
                      });
                  }
                  function i(e, t) {
                      for (; (e = e[t]) && 1 !== e.nodeType; );
                      return e;
                  }
                  function o(e) {
                      var t = {};
                      return (
                          oe.each(e.match(we) || [], function (e, n) {
                              t[n] = !0;
                          }),
                          t
                      );
                  }
                  function s() {
                      G.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), oe.ready();
                  }
                  function a() {
                      this.expando = oe.expando + a.uid++;
                  }
                  function u(e, t, n) {
                      var r;
                      if (void 0 === n && 1 === e.nodeType)
                          if (((r = "data-" + t.replace(je, "-$&").toLowerCase()), (n = e.getAttribute(r)), "string" == typeof n)) {
                              try {
                                  n = "true" === n || ("false" !== n && ("null" === n ? null : +n + "" === n ? +n : Se.test(n) ? oe.parseJSON(n) : n));
                              } catch (e) {}
                              Ne.set(e, t, n);
                          } else n = void 0;
                      return n;
                  }
                  function l(e, t, n, r) {
                      var i,
                          o = 1,
                          s = 20,
                          a = r
                              ? function () {
                                    return r.cur();
                                }
                              : function () {
                                    return oe.css(e, t, "");
                                },
                          u = a(),
                          l = (n && n[3]) || (oe.cssNumber[t] ? "" : "px"),
                          c = (oe.cssNumber[t] || ("px" !== l && +u)) && Ae.exec(oe.css(e, t));
                      if (c && c[3] !== l) {
                          (l = l || c[3]), (n = n || []), (c = +u || 1);
                          do (o = o || ".5"), (c /= o), oe.style(e, t, c + l);
                          while (o !== (o = a() / u) && 1 !== o && --s);
                      }
                      return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
                  }
                  function c(e, t) {
                      var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
                      return void 0 === t || (t && oe.nodeName(e, t)) ? oe.merge([e], n) : n;
                  }
                  function f(e, t) {
                      for (var n = 0, r = e.length; n < r; n++) Ee.set(e[n], "globalEval", !t || Ee.get(t[n], "globalEval"));
                  }
                  function p(e, t, n, r, i) {
                      for (var o, s, a, u, l, p, d = t.createDocumentFragment(), h = [], g = 0, v = e.length; g < v; g++)
                          if (((o = e[g]), o || 0 === o))
                              if ("object" === oe.type(o)) oe.merge(h, o.nodeType ? [o] : o);
                              else if (Re.test(o)) {
                                  for (s = s || d.appendChild(t.createElement("div")), a = (Oe.exec(o) || ["", ""])[1].toLowerCase(), u = Pe[a] || Pe._default, s.innerHTML = u[1] + oe.htmlPrefilter(o) + u[2], p = u[0]; p--; )
                                      s = s.lastChild;
                                  oe.merge(h, s.childNodes), (s = d.firstChild), (s.textContent = "");
                              } else h.push(t.createTextNode(o));
                      for (d.textContent = "", g = 0; (o = h[g++]); )
                          if (r && oe.inArray(o, r) > -1) i && i.push(o);
                          else if (((l = oe.contains(o.ownerDocument, o)), (s = c(d.appendChild(o), "script")), l && f(s), n)) for (p = 0; (o = s[p++]); ) Fe.test(o.type || "") && n.push(o);
                      return d;
                  }
                  function d() {
                      return !0;
                  }
                  function h() {
                      return !1;
                  }
                  function g() {
                      try {
                          return G.activeElement;
                      } catch (e) {}
                  }
                  function v(e, t, n, r, i, o) {
                      var s, a;
                      if ("object" == typeof t) {
                          "string" != typeof n && ((r = r || n), (n = void 0));
                          for (a in t) v(e, a, n, r, t[a], o);
                          return e;
                      }
                      if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), i === !1)) i = h;
                      else if (!i) return e;
                      return (
                          1 === o &&
                              ((s = i),
                              (i = function (e) {
                                  return oe().off(e), s.apply(this, arguments);
                              }),
                              (i.guid = s.guid || (s.guid = oe.guid++))),
                          e.each(function () {
                              oe.event.add(this, t, i, r, n);
                          })
                      );
                  }
                  function m(e, t) {
                      return oe.nodeName(e, "table") && oe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
                  }
                  function y(e) {
                      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
                  }
                  function x(e) {
                      var t = Xe.exec(e.type);
                      return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
                  }
                  function b(e, t) {
                      var n, r, i, o, s, a, u, l;
                      if (1 === t.nodeType) {
                          if (Ee.hasData(e) && ((o = Ee.access(e)), (s = Ee.set(t, o)), (l = o.events))) {
                              delete s.handle, (s.events = {});
                              for (i in l) for (n = 0, r = l[i].length; n < r; n++) oe.event.add(t, i, l[i][n]);
                          }
                          Ne.hasData(e) && ((a = Ne.access(e)), (u = oe.extend({}, a)), Ne.set(t, u));
                      }
                  }
                  function w(e, t) {
                      var n = t.nodeName.toLowerCase();
                      "input" === n && He.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
                  }
                  function T(e, t, n, r) {
                      t = J.apply([], t);
                      var i,
                          o,
                          s,
                          a,
                          u,
                          l,
                          f = 0,
                          d = e.length,
                          h = d - 1,
                          g = t[0],
                          v = oe.isFunction(g);
                      if (v || (d > 1 && "string" == typeof g && !re.checkClone && _e.test(g)))
                          return e.each(function (i) {
                              var o = e.eq(i);
                              v && (t[0] = g.call(this, i, o.html())), T(o, t, n, r);
                          });
                      if (d && ((i = p(t, e[0].ownerDocument, !1, e, r)), (o = i.firstChild), 1 === i.childNodes.length && (i = o), o || r)) {
                          for (s = oe.map(c(i, "script"), y), a = s.length; f < d; f++) (u = i), f !== h && ((u = oe.clone(u, !0, !0)), a && oe.merge(s, c(u, "script"))), n.call(e[f], u, f);
                          if (a)
                              for (l = s[s.length - 1].ownerDocument, oe.map(s, x), f = 0; f < a; f++)
                                  (u = s[f]), Fe.test(u.type || "") && !Ee.access(u, "globalEval") && oe.contains(l, u) && (u.src ? oe._evalUrl && oe._evalUrl(u.src) : oe.globalEval(u.textContent.replace(ze, "")));
                      }
                      return e;
                  }
                  function C(e, t, n) {
                      for (var r, i = t ? oe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                          n || 1 !== r.nodeType || oe.cleanData(c(r)), r.parentNode && (n && oe.contains(r.ownerDocument, r) && f(c(r, "script")), r.parentNode.removeChild(r));
                      return e;
                  }
                  function k(e, t) {
                      var n = oe(t.createElement(e)).appendTo(t.body),
                          r = oe.css(n[0], "display");
                      return n.detach(), r;
                  }
                  function E(e) {
                      var t = G,
                          n = Ve[e];
                      return (
                          n ||
                              ((n = k(e, t)),
                              ("none" !== n && n) || ((Ue = (Ue || oe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement)), (t = Ue[0].contentDocument), t.write(), t.close(), (n = k(e, t)), Ue.detach()),
                              (Ve[e] = n)),
                          n
                      );
                  }
                  function N(e, t, n) {
                      var r,
                          i,
                          o,
                          s,
                          a = e.style;
                      return (
                          (n = n || Qe(e)),
                          (s = n ? n.getPropertyValue(t) || n[t] : void 0),
                          ("" !== s && void 0 !== s) || oe.contains(e.ownerDocument, e) || (s = oe.style(e, t)),
                          n &&
                              !re.pixelMarginRight() &&
                              Ge.test(s) &&
                              Ye.test(t) &&
                              ((r = a.width), (i = a.minWidth), (o = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = r), (a.minWidth = i), (a.maxWidth = o)),
                          void 0 !== s ? s + "" : s
                      );
                  }
                  function S(e, t) {
                      return {
                          get: function () {
                              return e() ? void delete this.get : (this.get = t).apply(this, arguments);
                          },
                      };
                  }
                  function j(e) {
                      if (e in rt) return e;
                      for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--; ) if (((e = nt[n] + t), e in rt)) return e;
                  }
                  function D(e, t, n) {
                      var r = Ae.exec(t);
                      return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
                  }
                  function A(e, t, n, r, i) {
                      for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2)
                          "margin" === n && (s += oe.css(e, n + qe[o], !0, i)),
                              r
                                  ? ("content" === n && (s -= oe.css(e, "padding" + qe[o], !0, i)), "margin" !== n && (s -= oe.css(e, "border" + qe[o] + "Width", !0, i)))
                                  : ((s += oe.css(e, "padding" + qe[o], !0, i)), "padding" !== n && (s += oe.css(e, "border" + qe[o] + "Width", !0, i)));
                      return s;
                  }
                  function q(e, t, n) {
                      var r = !0,
                          i = "width" === t ? e.offsetWidth : e.offsetHeight,
                          o = Qe(e),
                          s = "border-box" === oe.css(e, "boxSizing", !1, o);
                      if (i <= 0 || null == i) {
                          if (((i = N(e, t, o)), (i < 0 || null == i) && (i = e.style[t]), Ge.test(i))) return i;
                          (r = s && (re.boxSizingReliable() || i === e.style[t])), (i = parseFloat(i) || 0);
                      }
                      return i + A(e, t, n || (s ? "border" : "content"), r, o) + "px";
                  }
                  function L(e, t) {
                      for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)
                          (r = e[s]),
                              r.style &&
                                  ((o[s] = Ee.get(r, "olddisplay")),
                                  (n = r.style.display),
                                  t
                                      ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Le(r) && (o[s] = Ee.access(r, "olddisplay", E(r.nodeName))))
                                      : ((i = Le(r)), ("none" === n && i) || Ee.set(r, "olddisplay", i ? n : oe.css(r, "display"))));
                      for (s = 0; s < a; s++) (r = e[s]), r.style && ((t && "none" !== r.style.display && "" !== r.style.display) || (r.style.display = t ? o[s] || "" : "none"));
                      return e;
                  }
                  function H(e, t, n, r, i) {
                      return new H.prototype.init(e, t, n, r, i);
                  }
                  function O() {
                      return (
                          e.setTimeout(function () {
                              it = void 0;
                          }),
                          (it = oe.now())
                      );
                  }
                  function F(e, t) {
                      var n,
                          r = 0,
                          i = { height: e };
                      for (t = t ? 1 : 0; r < 4; r += 2 - t) (n = qe[r]), (i["margin" + n] = i["padding" + n] = e);
                      return t && (i.opacity = i.width = e), i;
                  }
                  function P(e, t, n) {
                      for (var r, i = (I.tweeners[t] || []).concat(I.tweeners["*"]), o = 0, s = i.length; o < s; o++) if ((r = i[o].call(n, t, e))) return r;
                  }
                  function R(e, t, n) {
                      var r,
                          i,
                          o,
                          s,
                          a,
                          u,
                          l,
                          c,
                          f = this,
                          p = {},
                          d = e.style,
                          h = e.nodeType && Le(e),
                          g = Ee.get(e, "fxshow");
                      n.queue ||
                          ((a = oe._queueHooks(e, "fx")),
                          null == a.unqueued &&
                              ((a.unqueued = 0),
                              (u = a.empty.fire),
                              (a.empty.fire = function () {
                                  a.unqueued || u();
                              })),
                          a.unqueued++,
                          f.always(function () {
                              f.always(function () {
                                  a.unqueued--, oe.queue(e, "fx").length || a.empty.fire();
                              });
                          })),
                          1 === e.nodeType &&
                              ("height" in t || "width" in t) &&
                              ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
                              (l = oe.css(e, "display")),
                              (c = "none" === l ? Ee.get(e, "olddisplay") || E(e.nodeName) : l),
                              "inline" === c && "none" === oe.css(e, "float") && (d.display = "inline-block")),
                          n.overflow &&
                              ((d.overflow = "hidden"),
                              f.always(function () {
                                  (d.overflow = n.overflow[0]), (d.overflowX = n.overflow[1]), (d.overflowY = n.overflow[2]);
                              }));
                      for (r in t)
                          if (((i = t[r]), st.exec(i))) {
                              if ((delete t[r], (o = o || "toggle" === i), i === (h ? "hide" : "show"))) {
                                  if ("show" !== i || !g || void 0 === g[r]) continue;
                                  h = !0;
                              }
                              p[r] = (g && g[r]) || oe.style(e, r);
                          } else l = void 0;
                      if (oe.isEmptyObject(p)) "inline" === ("none" === l ? E(e.nodeName) : l) && (d.display = l);
                      else {
                          g ? "hidden" in g && (h = g.hidden) : (g = Ee.access(e, "fxshow", {})),
                              o && (g.hidden = !h),
                              h
                                  ? oe(e).show()
                                  : f.done(function () {
                                        oe(e).hide();
                                    }),
                              f.done(function () {
                                  var t;
                                  Ee.remove(e, "fxshow");
                                  for (t in p) oe.style(e, t, p[t]);
                              });
                          for (r in p) (s = P(h ? g[r] : 0, r, f)), r in g || ((g[r] = s.start), h && ((s.end = s.start), (s.start = "width" === r || "height" === r ? 1 : 0)));
                      }
                  }
                  function M(e, t) {
                      var n, r, i, o, s;
                      for (n in e)
                          if (((r = oe.camelCase(n)), (i = t[r]), (o = e[n]), oe.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (s = oe.cssHooks[r]), s && "expand" in s)) {
                              (o = s.expand(o)), delete e[r];
                              for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
                          } else t[r] = i;
                  }
                  function I(e, t, n) {
                      var r,
                          i,
                          o = 0,
                          s = I.prefilters.length,
                          a = oe.Deferred().always(function () {
                              delete u.elem;
                          }),
                          u = function () {
                              if (i) return !1;
                              for (var t = it || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; s < u; s++) l.tweens[s].run(o);
                              return a.notifyWith(e, [l, o, n]), o < 1 && u ? n : (a.resolveWith(e, [l]), !1);
                          },
                          l = a.promise({
                              elem: e,
                              props: oe.extend({}, t),
                              opts: oe.extend(!0, { specialEasing: {}, easing: oe.easing._default }, n),
                              originalProperties: t,
                              originalOptions: n,
                              startTime: it || O(),
                              duration: n.duration,
                              tweens: [],
                              createTween: function (t, n) {
                                  var r = oe.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                                  return l.tweens.push(r), r;
                              },
                              stop: function (t) {
                                  var n = 0,
                                      r = t ? l.tweens.length : 0;
                                  if (i) return this;
                                  for (i = !0; n < r; n++) l.tweens[n].run(1);
                                  return t ? (a.notifyWith(e, [l, 1, 0]), a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]), this;
                              },
                          }),
                          c = l.props;
                      for (M(c, l.opts.specialEasing); o < s; o++) if ((r = I.prefilters[o].call(l, e, c, l.opts))) return oe.isFunction(r.stop) && (oe._queueHooks(l.elem, l.opts.queue).stop = oe.proxy(r.stop, r)), r;
                      return (
                          oe.map(c, P, l),
                          oe.isFunction(l.opts.start) && l.opts.start.call(e, l),
                          oe.fx.timer(oe.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
                          l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
                      );
                  }
                  function W(e) {
                      return (e.getAttribute && e.getAttribute("class")) || "";
                  }
                  function $(e) {
                      return function (t, n) {
                          "string" != typeof t && ((n = t), (t = "*"));
                          var r,
                              i = 0,
                              o = t.toLowerCase().match(we) || [];
                          if (oe.isFunction(n)) for (; (r = o[i++]); ) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
                      };
                  }
                  function B(e, t, n, r) {
                      function i(a) {
                          var u;
                          return (
                              (o[a] = !0),
                              oe.each(e[a] || [], function (e, a) {
                                  var l = a(t, n, r);
                                  return "string" != typeof l || s || o[l] ? (s ? !(u = l) : void 0) : (t.dataTypes.unshift(l), i(l), !1);
                              }),
                              u
                          );
                      }
                      var o = {},
                          s = e === Nt;
                      return i(t.dataTypes[0]) || (!o["*"] && i("*"));
                  }
                  function _(e, t) {
                      var n,
                          r,
                          i = oe.ajaxSettings.flatOptions || {};
                      for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                      return r && oe.extend(!0, e, r), e;
                  }
                  function X(e, t, n) {
                      for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                      if (r)
                          for (i in a)
                              if (a[i] && a[i].test(r)) {
                                  u.unshift(i);
                                  break;
                              }
                      if (u[0] in n) o = u[0];
                      else {
                          for (i in n) {
                              if (!u[0] || e.converters[i + " " + u[0]]) {
                                  o = i;
                                  break;
                              }
                              s || (s = i);
                          }
                          o = o || s;
                      }
                      if (o) return o !== u[0] && u.unshift(o), n[o];
                  }
                  function z(e, t, n, r) {
                      var i,
                          o,
                          s,
                          a,
                          u,
                          l = {},
                          c = e.dataTypes.slice();
                      if (c[1]) for (s in e.converters) l[s.toLowerCase()] = e.converters[s];
                      for (o = c.shift(); o; )
                          if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
                              if ("*" === o) o = u;
                              else if ("*" !== u && u !== o) {
                                  if (((s = l[u + " " + o] || l["* " + o]), !s))
                                      for (i in l)
                                          if (((a = i.split(" ")), a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]]))) {
                                              s === !0 ? (s = l[i]) : l[i] !== !0 && ((o = a[0]), c.unshift(a[1]));
                                              break;
                                          }
                                  if (s !== !0)
                                      if (s && e.throws) t = s(t);
                                      else
                                          try {
                                              t = s(t);
                                          } catch (e) {
                                              return { state: "parsererror", error: s ? e : "No conversion from " + u + " to " + o };
                                          }
                              }
                      return { state: "success", data: t };
                  }
                  function U(e, t, n, r) {
                      var i;
                      if (oe.isArray(t))
                          oe.each(t, function (t, i) {
                              n || At.test(e) ? r(e, i) : U(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
                          });
                      else if (n || "object" !== oe.type(t)) r(e, t);
                      else for (i in t) U(e + "[" + i + "]", t[i], n, r);
                  }
                  function V(e) {
                      return oe.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
                  }
                  var Y = [],
                      G = e.document,
                      Q = Y.slice,
                      J = Y.concat,
                      K = Y.push,
                      Z = Y.indexOf,
                      ee = {},
                      te = ee.toString,
                      ne = ee.hasOwnProperty,
                      re = {},
                      ie = "2.2.4",
                      oe = function (e, t) {
                          return new oe.fn.init(e, t);
                      },
                      se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                      ae = /^-ms-/,
                      ue = /-([\da-z])/gi,
                      le = function (e, t) {
                          return t.toUpperCase();
                      };
                  (oe.fn = oe.prototype = {
                      jquery: ie,
                      constructor: oe,
                      selector: "",
                      length: 0,
                      toArray: function () {
                          return Q.call(this);
                      },
                      get: function (e) {
                          return null != e ? (e < 0 ? this[e + this.length] : this[e]) : Q.call(this);
                      },
                      pushStack: function (e) {
                          var t = oe.merge(this.constructor(), e);
                          return (t.prevObject = this), (t.context = this.context), t;
                      },
                      each: function (e) {
                          return oe.each(this, e);
                      },
                      map: function (e) {
                          return this.pushStack(
                              oe.map(this, function (t, n) {
                                  return e.call(t, n, t);
                              })
                          );
                      },
                      slice: function () {
                          return this.pushStack(Q.apply(this, arguments));
                      },
                      first: function () {
                          return this.eq(0);
                      },
                      last: function () {
                          return this.eq(-1);
                      },
                      eq: function (e) {
                          var t = this.length,
                              n = +e + (e < 0 ? t : 0);
                          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                      },
                      end: function () {
                          return this.prevObject || this.constructor();
                      },
                      push: K,
                      sort: Y.sort,
                      splice: Y.splice,
                  }),
                      (oe.extend = oe.fn.extend = function () {
                          var e,
                              t,
                              n,
                              r,
                              i,
                              o,
                              s = arguments[0] || {},
                              a = 1,
                              u = arguments.length,
                              l = !1;
                          for ("boolean" == typeof s && ((l = s), (s = arguments[a] || {}), a++), "object" == typeof s || oe.isFunction(s) || (s = {}), a === u && ((s = this), a--); a < u; a++)
                              if (null != (e = arguments[a]))
                                  for (t in e)
                                      (n = s[t]),
                                          (r = e[t]),
                                          s !== r &&
                                              (l && r && (oe.isPlainObject(r) || (i = oe.isArray(r)))
                                                  ? (i ? ((i = !1), (o = n && oe.isArray(n) ? n : [])) : (o = n && oe.isPlainObject(n) ? n : {}), (s[t] = oe.extend(l, o, r)))
                                                  : void 0 !== r && (s[t] = r));
                          return s;
                      }),
                      oe.extend({
                          expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
                          isReady: !0,
                          error: function (e) {
                              throw new Error(e);
                          },
                          noop: function () {},
                          isFunction: function (e) {
                              return "function" === oe.type(e);
                          },
                          isArray: Array.isArray,
                          isWindow: function (e) {
                              return null != e && e === e.window;
                          },
                          isNumeric: function (e) {
                              var t = e && e.toString();
                              return !oe.isArray(e) && t - parseFloat(t) + 1 >= 0;
                          },
                          isPlainObject: function (e) {
                              var t;
                              if ("object" !== oe.type(e) || e.nodeType || oe.isWindow(e)) return !1;
                              if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
                              for (t in e);
                              return void 0 === t || ne.call(e, t);
                          },
                          isEmptyObject: function (e) {
                              var t;
                              for (t in e) return !1;
                              return !0;
                          },
                          type: function (e) {
                              return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e;
                          },
                          globalEval: function (e) {
                              var t,
                                  n = eval;
                              (e = oe.trim(e)), e && (1 === e.indexOf("use strict") ? ((t = G.createElement("script")), (t.text = e), G.head.appendChild(t).parentNode.removeChild(t)) : n(e));
                          },
                          camelCase: function (e) {
                              return e.replace(ae, "ms-").replace(ue, le);
                          },
                          nodeName: function (e, t) {
                              return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                          },
                          each: function (e, t) {
                              var r,
                                  i = 0;
                              if (n(e)) for (r = e.length; i < r && t.call(e[i], i, e[i]) !== !1; i++);
                              else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
                              return e;
                          },
                          trim: function (e) {
                              return null == e ? "" : (e + "").replace(se, "");
                          },
                          makeArray: function (e, t) {
                              var r = t || [];
                              return null != e && (n(Object(e)) ? oe.merge(r, "string" == typeof e ? [e] : e) : K.call(r, e)), r;
                          },
                          inArray: function (e, t, n) {
                              return null == t ? -1 : Z.call(t, e, n);
                          },
                          merge: function (e, t) {
                              for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                              return (e.length = i), e;
                          },
                          grep: function (e, t, n) {
                              for (var r, i = [], o = 0, s = e.length, a = !n; o < s; o++) (r = !t(e[o], o)), r !== a && i.push(e[o]);
                              return i;
                          },
                          map: function (e, t, r) {
                              var i,
                                  o,
                                  s = 0,
                                  a = [];
                              if (n(e)) for (i = e.length; s < i; s++) (o = t(e[s], s, r)), null != o && a.push(o);
                              else for (s in e) (o = t(e[s], s, r)), null != o && a.push(o);
                              return J.apply([], a);
                          },
                          guid: 1,
                          proxy: function (e, t) {
                              var n, r, i;
                              if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), oe.isFunction(e)))
                                  return (
                                      (r = Q.call(arguments, 2)),
                                      (i = function () {
                                          return e.apply(t || this, r.concat(Q.call(arguments)));
                                      }),
                                      (i.guid = e.guid = e.guid || oe.guid++),
                                      i
                                  );
                          },
                          now: Date.now,
                          support: re,
                      }),
                      "function" == typeof Symbol && (oe.fn[Symbol.iterator] = Y[Symbol.iterator]),
                      oe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                          ee["[object " + t + "]"] = t.toLowerCase();
                      });
                  var ce = (function (e) {
                      function t(e, t, n, r) {
                          var i,
                              o,
                              s,
                              a,
                              u,
                              l,
                              f,
                              d,
                              h = t && t.ownerDocument,
                              g = t ? t.nodeType : 9;
                          if (((n = n || []), "string" != typeof e || !e || (1 !== g && 9 !== g && 11 !== g))) return n;
                          if (!r && ((t ? t.ownerDocument || t : W) !== L && q(t), (t = t || L), O)) {
                              if (11 !== g && (l = me.exec(e)))
                                  if ((i = l[1])) {
                                      if (9 === g) {
                                          if (!(s = t.getElementById(i))) return n;
                                          if (s.id === i) return n.push(s), n;
                                      } else if (h && (s = h.getElementById(i)) && M(t, s) && s.id === i) return n.push(s), n;
                                  } else {
                                      if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                                      if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)), n;
                                  }
                              if (w.qsa && !z[e + " "] && (!F || !F.test(e))) {
                                  if (1 !== g) (h = t), (d = e);
                                  else if ("object" !== t.nodeName.toLowerCase()) {
                                      for ((a = t.getAttribute("id")) ? (a = a.replace(xe, "\\$&")) : t.setAttribute("id", (a = I)), f = E(e), o = f.length, u = pe.test(a) ? "#" + a : "[id='" + a + "']"; o--; ) f[o] = u + " " + p(f[o]);
                                      (d = f.join(",")), (h = (ye.test(e) && c(t.parentNode)) || t);
                                  }
                                  if (d)
                                      try {
                                          return K.apply(n, h.querySelectorAll(d)), n;
                                      } catch (e) {
                                      } finally {
                                          a === I && t.removeAttribute("id");
                                      }
                              }
                          }
                          return S(e.replace(ae, "$1"), t, n, r);
                      }
                      function n() {
                          function e(n, r) {
                              return t.push(n + " ") > T.cacheLength && delete e[t.shift()], (e[n + " "] = r);
                          }
                          var t = [];
                          return e;
                      }
                      function r(e) {
                          return (e[I] = !0), e;
                      }
                      function i(e) {
                          var t = L.createElement("div");
                          try {
                              return !!e(t);
                          } catch (e) {
                              return !1;
                          } finally {
                              t.parentNode && t.parentNode.removeChild(t), (t = null);
                          }
                      }
                      function o(e, t) {
                          for (var n = e.split("|"), r = n.length; r--; ) T.attrHandle[n[r]] = t;
                      }
                      function s(e, t) {
                          var n = t && e,
                              r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
                          if (r) return r;
                          if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                          return e ? 1 : -1;
                      }
                      function a(e) {
                          return function (t) {
                              var n = t.nodeName.toLowerCase();
                              return "input" === n && t.type === e;
                          };
                      }
                      function u(e) {
                          return function (t) {
                              var n = t.nodeName.toLowerCase();
                              return ("input" === n || "button" === n) && t.type === e;
                          };
                      }
                      function l(e) {
                          return r(function (t) {
                              return (
                                  (t = +t),
                                  r(function (n, r) {
                                      for (var i, o = e([], n.length, t), s = o.length; s--; ) n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                                  })
                              );
                          });
                      }
                      function c(e) {
                          return e && "undefined" != typeof e.getElementsByTagName && e;
                      }
                      function f() {}
                      function p(e) {
                          for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                          return r;
                      }
                      function d(e, t, n) {
                          var r = t.dir,
                              i = n && "parentNode" === r,
                              o = B++;
                          return t.first
                              ? function (t, n, o) {
                                    for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, o);
                                }
                              : function (t, n, s) {
                                    var a,
                                        u,
                                        l,
                                        c = [$, o];
                                    if (s) {
                                        for (; (t = t[r]); ) if ((1 === t.nodeType || i) && e(t, n, s)) return !0;
                                    } else
                                        for (; (t = t[r]); )
                                            if (1 === t.nodeType || i) {
                                                if (((l = t[I] || (t[I] = {})), (u = l[t.uniqueID] || (l[t.uniqueID] = {})), (a = u[r]) && a[0] === $ && a[1] === o)) return (c[2] = a[2]);
                                                if (((u[r] = c), (c[2] = e(t, n, s)))) return !0;
                                            }
                                };
                      }
                      function h(e) {
                          return e.length > 1
                              ? function (t, n, r) {
                                    for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                                    return !0;
                                }
                              : e[0];
                      }
                      function g(e, n, r) {
                          for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
                          return r;
                      }
                      function v(e, t, n, r, i) {
                          for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++) (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), l && t.push(a)));
                          return s;
                      }
                      function m(e, t, n, i, o, s) {
                          return (
                              i && !i[I] && (i = m(i)),
                              o && !o[I] && (o = m(o, s)),
                              r(function (r, s, a, u) {
                                  var l,
                                      c,
                                      f,
                                      p = [],
                                      d = [],
                                      h = s.length,
                                      m = r || g(t || "*", a.nodeType ? [a] : a, []),
                                      y = !e || (!r && t) ? m : v(m, p, e, a, u),
                                      x = n ? (o || (r ? e : h || i) ? [] : s) : y;
                                  if ((n && n(y, x, a, u), i)) for (l = v(x, d), i(l, [], a, u), c = l.length; c--; ) (f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                                  if (r) {
                                      if (o || e) {
                                          if (o) {
                                              for (l = [], c = x.length; c--; ) (f = x[c]) && l.push((y[c] = f));
                                              o(null, (x = []), l, u);
                                          }
                                          for (c = x.length; c--; ) (f = x[c]) && (l = o ? ee(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f));
                                      }
                                  } else (x = v(x === s ? x.splice(h, x.length) : x)), o ? o(null, s, x, u) : K.apply(s, x);
                              })
                          );
                      }
                      function y(e) {
                          for (
                              var t,
                                  n,
                                  r,
                                  i = e.length,
                                  o = T.relative[e[0].type],
                                  s = o || T.relative[" "],
                                  a = o ? 1 : 0,
                                  u = d(
                                      function (e) {
                                          return e === t;
                                      },
                                      s,
                                      !0
                                  ),
                                  l = d(
                                      function (e) {
                                          return ee(t, e) > -1;
                                      },
                                      s,
                                      !0
                                  ),
                                  c = [
                                      function (e, n, r) {
                                          var i = (!o && (r || n !== j)) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                                          return (t = null), i;
                                      },
                                  ];
                              a < i;
                              a++
                          )
                              if ((n = T.relative[e[a].type])) c = [d(h(c), n)];
                              else {
                                  if (((n = T.filter[e[a].type].apply(null, e[a].matches)), n[I])) {
                                      for (r = ++a; r < i && !T.relative[e[r].type]; r++);
                                      return m(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(ae, "$1"), n, a < r && y(e.slice(a, r)), r < i && y((e = e.slice(r))), r < i && p(e));
                                  }
                                  c.push(n);
                              }
                          return h(c);
                      }
                      function x(e, n) {
                          var i = n.length > 0,
                              o = e.length > 0,
                              s = function (r, s, a, u, l) {
                                  var c,
                                      f,
                                      p,
                                      d = 0,
                                      h = "0",
                                      g = r && [],
                                      m = [],
                                      y = j,
                                      x = r || (o && T.find.TAG("*", l)),
                                      b = ($ += null == y ? 1 : Math.random() || 0.1),
                                      w = x.length;
                                  for (l && (j = s === L || s || l); h !== w && null != (c = x[h]); h++) {
                                      if (o && c) {
                                          for (f = 0, s || c.ownerDocument === L || (q(c), (a = !O)); (p = e[f++]); )
                                              if (p(c, s || L, a)) {
                                                  u.push(c);
                                                  break;
                                              }
                                          l && ($ = b);
                                      }
                                      i && ((c = !p && c) && d--, r && g.push(c));
                                  }
                                  if (((d += h), i && h !== d)) {
                                      for (f = 0; (p = n[f++]); ) p(g, m, s, a);
                                      if (r) {
                                          if (d > 0) for (; h--; ) g[h] || m[h] || (m[h] = Q.call(u));
                                          m = v(m);
                                      }
                                      K.apply(u, m), l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u);
                                  }
                                  return l && (($ = b), (j = y)), g;
                              };
                          return i ? r(s) : s;
                      }
                      var b,
                          w,
                          T,
                          C,
                          k,
                          E,
                          N,
                          S,
                          j,
                          D,
                          A,
                          q,
                          L,
                          H,
                          O,
                          F,
                          P,
                          R,
                          M,
                          I = "sizzle" + 1 * new Date(),
                          W = e.document,
                          $ = 0,
                          B = 0,
                          _ = n(),
                          X = n(),
                          z = n(),
                          U = function (e, t) {
                              return e === t && (A = !0), 0;
                          },
                          V = 1 << 31,
                          Y = {}.hasOwnProperty,
                          G = [],
                          Q = G.pop,
                          J = G.push,
                          K = G.push,
                          Z = G.slice,
                          ee = function (e, t) {
                              for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                              return -1;
                          },
                          te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                          ne = "[\\x20\\t\\r\\n\\f]",
                          re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                          ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
                          oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
                          se = new RegExp(ne + "+", "g"),
                          ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                          ue = new RegExp("^" + ne + "*," + ne + "*"),
                          le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                          ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                          fe = new RegExp(oe),
                          pe = new RegExp("^" + re + "$"),
                          de = {
                              ID: new RegExp("^#(" + re + ")"),
                              CLASS: new RegExp("^\\.(" + re + ")"),
                              TAG: new RegExp("^(" + re + "|[*])"),
                              ATTR: new RegExp("^" + ie),
                              PSEUDO: new RegExp("^" + oe),
                              CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                              bool: new RegExp("^(?:" + te + ")$", "i"),
                              needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i"),
                          },
                          he = /^(?:input|select|textarea|button)$/i,
                          ge = /^h\d$/i,
                          ve = /^[^{]+\{\s*\[native \w/,
                          me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                          ye = /[+~]/,
                          xe = /'|\\/g,
                          be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                          we = function (e, t, n) {
                              var r = "0x" + t - 65536;
                              return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
                          },
                          Te = function () {
                              q();
                          };
                      try {
                          K.apply((G = Z.call(W.childNodes)), W.childNodes), G[W.childNodes.length].nodeType;
                      } catch (e) {
                          K = {
                              apply: G.length
                                  ? function (e, t) {
                                        J.apply(e, Z.call(t));
                                    }
                                  : function (e, t) {
                                        for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                                        e.length = n - 1;
                                    },
                          };
                      }
                      (w = t.support = {}),
                          (k = t.isXML = function (e) {
                              var t = e && (e.ownerDocument || e).documentElement;
                              return !!t && "HTML" !== t.nodeName;
                          }),
                          (q = t.setDocument = function (e) {
                              var t,
                                  n,
                                  r = e ? e.ownerDocument || e : W;
                              return r !== L && 9 === r.nodeType && r.documentElement
                                  ? ((L = r),
                                    (H = L.documentElement),
                                    (O = !k(L)),
                                    (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)),
                                    (w.attributes = i(function (e) {
                                        return (e.className = "i"), !e.getAttribute("className");
                                    })),
                                    (w.getElementsByTagName = i(function (e) {
                                        return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length;
                                    })),
                                    (w.getElementsByClassName = ve.test(L.getElementsByClassName)),
                                    (w.getById = i(function (e) {
                                        return (H.appendChild(e).id = I), !L.getElementsByName || !L.getElementsByName(I).length;
                                    })),
                                    w.getById
                                        ? ((T.find.ID = function (e, t) {
                                              if ("undefined" != typeof t.getElementById && O) {
                                                  var n = t.getElementById(e);
                                                  return n ? [n] : [];
                                              }
                                          }),
                                          (T.filter.ID = function (e) {
                                              var t = e.replace(be, we);
                                              return function (e) {
                                                  return e.getAttribute("id") === t;
                                              };
                                          }))
                                        : (delete T.find.ID,
                                          (T.filter.ID = function (e) {
                                              var t = e.replace(be, we);
                                              return function (e) {
                                                  var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                                  return n && n.value === t;
                                              };
                                          })),
                                    (T.find.TAG = w.getElementsByTagName
                                        ? function (e, t) {
                                              return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0;
                                          }
                                        : function (e, t) {
                                              var n,
                                                  r = [],
                                                  i = 0,
                                                  o = t.getElementsByTagName(e);
                                              if ("*" === e) {
                                                  for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                                                  return r;
                                              }
                                              return o;
                                          }),
                                    (T.find.CLASS =
                                        w.getElementsByClassName &&
                                        function (e, t) {
                                            if ("undefined" != typeof t.getElementsByClassName && O) return t.getElementsByClassName(e);
                                        }),
                                    (P = []),
                                    (F = []),
                                    (w.qsa = ve.test(L.querySelectorAll)) &&
                                        (i(function (e) {
                                            (H.appendChild(e).innerHTML = "<a id='" + I + "'></a><select id='" + I + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                                e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"),
                                                e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"),
                                                e.querySelectorAll("[id~=" + I + "-]").length || F.push("~="),
                                                e.querySelectorAll(":checked").length || F.push(":checked"),
                                                e.querySelectorAll("a#" + I + "+*").length || F.push(".#.+[+~]");
                                        }),
                                        i(function (e) {
                                            var t = L.createElement("input");
                                            t.setAttribute("type", "hidden"),
                                                e.appendChild(t).setAttribute("name", "D"),
                                                e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="),
                                                e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                                                e.querySelectorAll("*,:x"),
                                                F.push(",.*:");
                                        })),
                                    (w.matchesSelector = ve.test((R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector))) &&
                                        i(function (e) {
                                            (w.disconnectedMatch = R.call(e, "div")), R.call(e, "[s!='']:x"), P.push("!=", oe);
                                        }),
                                    (F = F.length && new RegExp(F.join("|"))),
                                    (P = P.length && new RegExp(P.join("|"))),
                                    (t = ve.test(H.compareDocumentPosition)),
                                    (M =
                                        t || ve.test(H.contains)
                                            ? function (e, t) {
                                                  var n = 9 === e.nodeType ? e.documentElement : e,
                                                      r = t && t.parentNode;
                                                  return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                                              }
                                            : function (e, t) {
                                                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                                  return !1;
                                              }),
                                    (U = t
                                        ? function (e, t) {
                                              if (e === t) return (A = !0), 0;
                                              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                              return n
                                                  ? n
                                                  : ((n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1),
                                                    1 & n || (!w.sortDetached && t.compareDocumentPosition(e) === n)
                                                        ? e === L || (e.ownerDocument === W && M(W, e))
                                                            ? -1
                                                            : t === L || (t.ownerDocument === W && M(W, t))
                                                            ? 1
                                                            : D
                                                            ? ee(D, e) - ee(D, t)
                                                            : 0
                                                        : 4 & n
                                                        ? -1
                                                        : 1);
                                          }
                                        : function (e, t) {
                                              if (e === t) return (A = !0), 0;
                                              var n,
                                                  r = 0,
                                                  i = e.parentNode,
                                                  o = t.parentNode,
                                                  a = [e],
                                                  u = [t];
                                              if (!i || !o) return e === L ? -1 : t === L ? 1 : i ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                                              if (i === o) return s(e, t);
                                              for (n = e; (n = n.parentNode); ) a.unshift(n);
                                              for (n = t; (n = n.parentNode); ) u.unshift(n);
                                              for (; a[r] === u[r]; ) r++;
                                              return r ? s(a[r], u[r]) : a[r] === W ? -1 : u[r] === W ? 1 : 0;
                                          }),
                                    L)
                                  : L;
                          }),
                          (t.matches = function (e, n) {
                              return t(e, null, null, n);
                          }),
                          (t.matchesSelector = function (e, n) {
                              if (((e.ownerDocument || e) !== L && q(e), (n = n.replace(ce, "='$1']")), w.matchesSelector && O && !z[n + " "] && (!P || !P.test(n)) && (!F || !F.test(n))))
                                  try {
                                      var r = R.call(e, n);
                                      if (r || w.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                                  } catch (e) {}
                              return t(n, L, null, [e]).length > 0;
                          }),
                          (t.contains = function (e, t) {
                              return (e.ownerDocument || e) !== L && q(e), M(e, t);
                          }),
                          (t.attr = function (e, t) {
                              (e.ownerDocument || e) !== L && q(e);
                              var n = T.attrHandle[t.toLowerCase()],
                                  r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
                              return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                          }),
                          (t.error = function (e) {
                              throw new Error("Syntax error, unrecognized expression: " + e);
                          }),
                          (t.uniqueSort = function (e) {
                              var t,
                                  n = [],
                                  r = 0,
                                  i = 0;
                              if (((A = !w.detectDuplicates), (D = !w.sortStable && e.slice(0)), e.sort(U), A)) {
                                  for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
                                  for (; r--; ) e.splice(n[r], 1);
                              }
                              return (D = null), e;
                          }),
                          (C = t.getText = function (e) {
                              var t,
                                  n = "",
                                  r = 0,
                                  i = e.nodeType;
                              if (i) {
                                  if (1 === i || 9 === i || 11 === i) {
                                      if ("string" == typeof e.textContent) return e.textContent;
                                      for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
                                  } else if (3 === i || 4 === i) return e.nodeValue;
                              } else for (; (t = e[r++]); ) n += C(t);
                              return n;
                          }),
                          (T = t.selectors = {
                              cacheLength: 50,
                              createPseudo: r,
                              match: de,
                              attrHandle: {},
                              find: {},
                              relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                              preFilter: {
                                  ATTR: function (e) {
                                      return (e[1] = e[1].replace(be, we)), (e[3] = (e[3] || e[4] || e[5] || "").replace(be, we)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                                  },
                                  CHILD: function (e) {
                                      return (
                                          (e[1] = e[1].toLowerCase()),
                                          "nth" === e[1].slice(0, 3)
                                              ? (e[3] || t.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                              : e[3] && t.error(e[0]),
                                          e
                                      );
                                  },
                                  PSEUDO: function (e) {
                                      var t,
                                          n = !e[6] && e[2];
                                      return de.CHILD.test(e[0])
                                          ? null
                                          : (e[3] ? (e[2] = e[4] || e[5] || "") : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                                  },
                              },
                              filter: {
                                  TAG: function (e) {
                                      var t = e.replace(be, we).toLowerCase();
                                      return "*" === e
                                          ? function () {
                                                return !0;
                                            }
                                          : function (e) {
                                                return e.nodeName && e.nodeName.toLowerCase() === t;
                                            };
                                  },
                                  CLASS: function (e) {
                                      var t = _[e + " "];
                                      return (
                                          t ||
                                          ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                                              _(e, function (e) {
                                                  return t.test(("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || "");
                                              }))
                                      );
                                  },
                                  ATTR: function (e, n, r) {
                                      return function (i) {
                                          var o = t.attr(i, e);
                                          return null == o
                                              ? "!=" === n
                                              : !n ||
                                                    ((o += ""),
                                                    "=" === n
                                                        ? o === r
                                                        : "!=" === n
                                                        ? o !== r
                                                        : "^=" === n
                                                        ? r && 0 === o.indexOf(r)
                                                        : "*=" === n
                                                        ? r && o.indexOf(r) > -1
                                                        : "$=" === n
                                                        ? r && o.slice(-r.length) === r
                                                        : "~=" === n
                                                        ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1
                                                        : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"));
                                      };
                                  },
                                  CHILD: function (e, t, n, r, i) {
                                      var o = "nth" !== e.slice(0, 3),
                                          s = "last" !== e.slice(-4),
                                          a = "of-type" === t;
                                      return 1 === r && 0 === i
                                          ? function (e) {
                                                return !!e.parentNode;
                                            }
                                          : function (t, n, u) {
                                                var l,
                                                    c,
                                                    f,
                                                    p,
                                                    d,
                                                    h,
                                                    g = o !== s ? "nextSibling" : "previousSibling",
                                                    v = t.parentNode,
                                                    m = a && t.nodeName.toLowerCase(),
                                                    y = !u && !a,
                                                    x = !1;
                                                if (v) {
                                                    if (o) {
                                                        for (; g; ) {
                                                            for (p = t; (p = p[g]); ) if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                                            h = g = "only" === e && !h && "nextSibling";
                                                        }
                                                        return !0;
                                                    }
                                                    if (((h = [s ? v.firstChild : v.lastChild]), s && y)) {
                                                        for (
                                                            p = v, f = p[I] || (p[I] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === $ && l[1], x = d && l[2], p = d && v.childNodes[d];
                                                            (p = (++d && p && p[g]) || (x = d = 0) || h.pop());

                                                        )
                                                            if (1 === p.nodeType && ++x && p === t) {
                                                                c[e] = [$, d, x];
                                                                break;
                                                            }
                                                    } else if ((y && ((p = t), (f = p[I] || (p[I] = {})), (c = f[p.uniqueID] || (f[p.uniqueID] = {})), (l = c[e] || []), (d = l[0] === $ && l[1]), (x = d)), x === !1))
                                                        for (
                                                            ;
                                                            (p = (++d && p && p[g]) || (x = d = 0) || h.pop()) &&
                                                            ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && ((f = p[I] || (p[I] = {})), (c = f[p.uniqueID] || (f[p.uniqueID] = {})), (c[e] = [$, x])), p !== t));

                                                        );
                                                    return (x -= i), x === r || (x % r === 0 && x / r >= 0);
                                                }
                                            };
                                  },
                                  PSEUDO: function (e, n) {
                                      var i,
                                          o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                                      return o[I]
                                          ? o(n)
                                          : o.length > 1
                                          ? ((i = [e, e, "", n]),
                                            T.setFilters.hasOwnProperty(e.toLowerCase())
                                                ? r(function (e, t) {
                                                      for (var r, i = o(e, n), s = i.length; s--; ) (r = ee(e, i[s])), (e[r] = !(t[r] = i[s]));
                                                  })
                                                : function (e) {
                                                      return o(e, 0, i);
                                                  })
                                          : o;
                                  },
                              },
                              pseudos: {
                                  not: r(function (e) {
                                      var t = [],
                                          n = [],
                                          i = N(e.replace(ae, "$1"));
                                      return i[I]
                                          ? r(function (e, t, n, r) {
                                                for (var o, s = i(e, null, r, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
                                            })
                                          : function (e, r, o) {
                                                return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                                            };
                                  }),
                                  has: r(function (e) {
                                      return function (n) {
                                          return t(e, n).length > 0;
                                      };
                                  }),
                                  contains: r(function (e) {
                                      return (
                                          (e = e.replace(be, we)),
                                          function (t) {
                                              return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
                                          }
                                      );
                                  }),
                                  lang: r(function (e) {
                                      return (
                                          pe.test(e || "") || t.error("unsupported lang: " + e),
                                          (e = e.replace(be, we).toLowerCase()),
                                          function (t) {
                                              var n;
                                              do if ((n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()), n === e || 0 === n.indexOf(e + "-");
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
                                      return e === H;
                                  },
                                  focus: function (e) {
                                      return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                                  },
                                  enabled: function (e) {
                                      return e.disabled === !1;
                                  },
                                  disabled: function (e) {
                                      return e.disabled === !0;
                                  },
                                  checked: function (e) {
                                      var t = e.nodeName.toLowerCase();
                                      return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                                  },
                                  selected: function (e) {
                                      return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                                  },
                                  empty: function (e) {
                                      for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                      return !0;
                                  },
                                  parent: function (e) {
                                      return !T.pseudos.empty(e);
                                  },
                                  header: function (e) {
                                      return ge.test(e.nodeName);
                                  },
                                  input: function (e) {
                                      return he.test(e.nodeName);
                                  },
                                  button: function (e) {
                                      var t = e.nodeName.toLowerCase();
                                      return ("input" === t && "button" === e.type) || "button" === t;
                                  },
                                  text: function (e) {
                                      var t;
                                      return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                                  },
                                  first: l(function () {
                                      return [0];
                                  }),
                                  last: l(function (e, t) {
                                      return [t - 1];
                                  }),
                                  eq: l(function (e, t, n) {
                                      return [n < 0 ? n + t : n];
                                  }),
                                  even: l(function (e, t) {
                                      for (var n = 0; n < t; n += 2) e.push(n);
                                      return e;
                                  }),
                                  odd: l(function (e, t) {
                                      for (var n = 1; n < t; n += 2) e.push(n);
                                      return e;
                                  }),
                                  lt: l(function (e, t, n) {
                                      for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                                      return e;
                                  }),
                                  gt: l(function (e, t, n) {
                                      for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                                      return e;
                                  }),
                              },
                          }),
                          (T.pseudos.nth = T.pseudos.eq);
                      for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) T.pseudos[b] = a(b);
                      for (b in { submit: !0, reset: !0 }) T.pseudos[b] = u(b);
                      return (
                          (f.prototype = T.filters = T.pseudos),
                          (T.setFilters = new f()),
                          (E = t.tokenize = function (e, n) {
                              var r,
                                  i,
                                  o,
                                  s,
                                  a,
                                  u,
                                  l,
                                  c = X[e + " "];
                              if (c) return n ? 0 : c.slice(0);
                              for (a = e, u = [], l = T.preFilter; a; ) {
                                  (r && !(i = ue.exec(a))) || (i && (a = a.slice(i[0].length) || a), u.push((o = []))),
                                      (r = !1),
                                      (i = le.exec(a)) && ((r = i.shift()), o.push({ value: r, type: i[0].replace(ae, " ") }), (a = a.slice(r.length)));
                                  for (s in T.filter) !(i = de[s].exec(a)) || (l[s] && !(i = l[s](i))) || ((r = i.shift()), o.push({ value: r, type: s, matches: i }), (a = a.slice(r.length)));
                                  if (!r) break;
                              }
                              return n ? a.length : a ? t.error(e) : X(e, u).slice(0);
                          }),
                          (N = t.compile = function (e, t) {
                              var n,
                                  r = [],
                                  i = [],
                                  o = z[e + " "];
                              if (!o) {
                                  for (t || (t = E(e)), n = t.length; n--; ) (o = y(t[n])), o[I] ? r.push(o) : i.push(o);
                                  (o = z(e, x(i, r))), (o.selector = e);
                              }
                              return o;
                          }),
                          (S = t.select = function (e, t, n, r) {
                              var i,
                                  o,
                                  s,
                                  a,
                                  u,
                                  l = "function" == typeof e && e,
                                  f = !r && E((e = l.selector || e));
                              if (((n = n || []), 1 === f.length)) {
                                  if (((o = f[0] = f[0].slice(0)), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type])) {
                                      if (((t = (T.find.ID(s.matches[0].replace(be, we), t) || [])[0]), !t)) return n;
                                      l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                                  }
                                  for (i = de.needsContext.test(e) ? 0 : o.length; i-- && ((s = o[i]), !T.relative[(a = s.type)]); )
                                      if ((u = T.find[a]) && (r = u(s.matches[0].replace(be, we), (ye.test(o[0].type) && c(t.parentNode)) || t))) {
                                          if ((o.splice(i, 1), (e = r.length && p(o)), !e)) return K.apply(n, r), n;
                                          break;
                                      }
                              }
                              return (l || N(e, f))(r, t, !O, n, !t || (ye.test(e) && c(t.parentNode)) || t), n;
                          }),
                          (w.sortStable = I.split("").sort(U).join("") === I),
                          (w.detectDuplicates = !!A),
                          q(),
                          (w.sortDetached = i(function (e) {
                              return 1 & e.compareDocumentPosition(L.createElement("div"));
                          })),
                          i(function (e) {
                              return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                          }) ||
                              o("type|href|height|width", function (e, t, n) {
                                  if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                              }),
                          (w.attributes &&
                              i(function (e) {
                                  return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                              })) ||
                              o("value", function (e, t, n) {
                                  if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                              }),
                          i(function (e) {
                              return null == e.getAttribute("disabled");
                          }) ||
                              o(te, function (e, t, n) {
                                  var r;
                                  if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                              }),
                          t
                      );
                  })(e);
                  (oe.find = ce), (oe.expr = ce.selectors), (oe.expr[":"] = oe.expr.pseudos), (oe.uniqueSort = oe.unique = ce.uniqueSort), (oe.text = ce.getText), (oe.isXMLDoc = ce.isXML), (oe.contains = ce.contains);
                  var fe = function (e, t, n) {
                          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                              if (1 === e.nodeType) {
                                  if (i && oe(e).is(n)) break;
                                  r.push(e);
                              }
                          return r;
                      },
                      pe = function (e, t) {
                          for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                          return n;
                      },
                      de = oe.expr.match.needsContext,
                      he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
                      ge = /^.[^:#\[\.,]*$/;
                  (oe.filter = function (e, t, n) {
                      var r = t[0];
                      return (
                          n && (e = ":not(" + e + ")"),
                          1 === t.length && 1 === r.nodeType
                              ? oe.find.matchesSelector(r, e)
                                  ? [r]
                                  : []
                              : oe.find.matches(
                                    e,
                                    oe.grep(t, function (e) {
                                        return 1 === e.nodeType;
                                    })
                                )
                      );
                  }),
                      oe.fn.extend({
                          find: function (e) {
                              var t,
                                  n = this.length,
                                  r = [],
                                  i = this;
                              if ("string" != typeof e)
                                  return this.pushStack(
                                      oe(e).filter(function () {
                                          for (t = 0; t < n; t++) if (oe.contains(i[t], this)) return !0;
                                      })
                                  );
                              for (t = 0; t < n; t++) oe.find(e, i[t], r);
                              return (r = this.pushStack(n > 1 ? oe.unique(r) : r)), (r.selector = this.selector ? this.selector + " " + e : e), r;
                          },
                          filter: function (e) {
                              return this.pushStack(r(this, e || [], !1));
                          },
                          not: function (e) {
                              return this.pushStack(r(this, e || [], !0));
                          },
                          is: function (e) {
                              return !!r(this, "string" == typeof e && de.test(e) ? oe(e) : e || [], !1).length;
                          },
                      });
                  var ve,
                      me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                      ye = (oe.fn.init = function (e, t, n) {
                          var r, i;
                          if (!e) return this;
                          if (((n = n || ve), "string" == typeof e)) {
                              if (((r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : me.exec(e)), !r || (!r[1] && t))) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                              if (r[1]) {
                                  if (((t = t instanceof oe ? t[0] : t), oe.merge(this, oe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), he.test(r[1]) && oe.isPlainObject(t)))
                                      for (r in t) oe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                                  return this;
                              }
                              return (i = G.getElementById(r[2])), i && i.parentNode && ((this.length = 1), (this[0] = i)), (this.context = G), (this.selector = e), this;
                          }
                          return e.nodeType
                              ? ((this.context = this[0] = e), (this.length = 1), this)
                              : oe.isFunction(e)
                              ? void 0 !== n.ready
                                  ? n.ready(e)
                                  : e(oe)
                              : (void 0 !== e.selector && ((this.selector = e.selector), (this.context = e.context)), oe.makeArray(e, this));
                      });
                  (ye.prototype = oe.fn), (ve = oe(G));
                  var xe = /^(?:parents|prev(?:Until|All))/,
                      be = { children: !0, contents: !0, next: !0, prev: !0 };
                  oe.fn.extend({
                      has: function (e) {
                          var t = oe(e, this),
                              n = t.length;
                          return this.filter(function () {
                              for (var e = 0; e < n; e++) if (oe.contains(this, t[e])) return !0;
                          });
                      },
                      closest: function (e, t) {
                          for (var n, r = 0, i = this.length, o = [], s = de.test(e) || "string" != typeof e ? oe(e, t || this.context) : 0; r < i; r++)
                              for (n = this[r]; n && n !== t; n = n.parentNode)
                                  if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && oe.find.matchesSelector(n, e))) {
                                      o.push(n);
                                      break;
                                  }
                          return this.pushStack(o.length > 1 ? oe.uniqueSort(o) : o);
                      },
                      index: function (e) {
                          return e ? ("string" == typeof e ? Z.call(oe(e), this[0]) : Z.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                      },
                      add: function (e, t) {
                          return this.pushStack(oe.uniqueSort(oe.merge(this.get(), oe(e, t))));
                      },
                      addBack: function (e) {
                          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                      },
                  }),
                      oe.each(
                          {
                              parent: function (e) {
                                  var t = e.parentNode;
                                  return t && 11 !== t.nodeType ? t : null;
                              },
                              parents: function (e) {
                                  return fe(e, "parentNode");
                              },
                              parentsUntil: function (e, t, n) {
                                  return fe(e, "parentNode", n);
                              },
                              next: function (e) {
                                  return i(e, "nextSibling");
                              },
                              prev: function (e) {
                                  return i(e, "previousSibling");
                              },
                              nextAll: function (e) {
                                  return fe(e, "nextSibling");
                              },
                              prevAll: function (e) {
                                  return fe(e, "previousSibling");
                              },
                              nextUntil: function (e, t, n) {
                                  return fe(e, "nextSibling", n);
                              },
                              prevUntil: function (e, t, n) {
                                  return fe(e, "previousSibling", n);
                              },
                              siblings: function (e) {
                                  return pe((e.parentNode || {}).firstChild, e);
                              },
                              children: function (e) {
                                  return pe(e.firstChild);
                              },
                              contents: function (e) {
                                  return e.contentDocument || oe.merge([], e.childNodes);
                              },
                          },
                          function (e, t) {
                              oe.fn[e] = function (n, r) {
                                  var i = oe.map(this, t, n);
                                  return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = oe.filter(r, i)), this.length > 1 && (be[e] || oe.uniqueSort(i), xe.test(e) && i.reverse()), this.pushStack(i);
                              };
                          }
                      );
                  var we = /\S+/g;
                  (oe.Callbacks = function (e) {
                      e = "string" == typeof e ? o(e) : oe.extend({}, e);
                      var t,
                          n,
                          r,
                          i,
                          s = [],
                          a = [],
                          u = -1,
                          l = function () {
                              for (i = e.once, r = t = !0; a.length; u = -1) for (n = a.shift(); ++u < s.length; ) s[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && ((u = s.length), (n = !1));
                              e.memory || (n = !1), (t = !1), i && (s = n ? [] : "");
                          },
                          c = {
                              add: function () {
                                  return (
                                      s &&
                                          (n && !t && ((u = s.length - 1), a.push(n)),
                                          (function t(n) {
                                              oe.each(n, function (n, r) {
                                                  oe.isFunction(r) ? (e.unique && c.has(r)) || s.push(r) : r && r.length && "string" !== oe.type(r) && t(r);
                                              });
                                          })(arguments),
                                          n && !t && l()),
                                      this
                                  );
                              },
                              remove: function () {
                                  return (
                                      oe.each(arguments, function (e, t) {
                                          for (var n; (n = oe.inArray(t, s, n)) > -1; ) s.splice(n, 1), n <= u && u--;
                                      }),
                                      this
                                  );
                              },
                              has: function (e) {
                                  return e ? oe.inArray(e, s) > -1 : s.length > 0;
                              },
                              empty: function () {
                                  return s && (s = []), this;
                              },
                              disable: function () {
                                  return (i = a = []), (s = n = ""), this;
                              },
                              disabled: function () {
                                  return !s;
                              },
                              lock: function () {
                                  return (i = a = []), n || (s = n = ""), this;
                              },
                              locked: function () {
                                  return !!i;
                              },
                              fireWith: function (e, n) {
                                  return i || ((n = n || []), (n = [e, n.slice ? n.slice() : n]), a.push(n), t || l()), this;
                              },
                              fire: function () {
                                  return c.fireWith(this, arguments), this;
                              },
                              fired: function () {
                                  return !!r;
                              },
                          };
                      return c;
                  }),
                      oe.extend({
                          Deferred: function (e) {
                              var t = [
                                      ["resolve", "done", oe.Callbacks("once memory"), "resolved"],
                                      ["reject", "fail", oe.Callbacks("once memory"), "rejected"],
                                      ["notify", "progress", oe.Callbacks("memory")],
                                  ],
                                  n = "pending",
                                  r = {
                                      state: function () {
                                          return n;
                                      },
                                      always: function () {
                                          return i.done(arguments).fail(arguments), this;
                                      },
                                      then: function () {
                                          var e = arguments;
                                          return oe
                                              .Deferred(function (n) {
                                                  oe.each(t, function (t, o) {
                                                      var s = oe.isFunction(e[t]) && e[t];
                                                      i[o[1]](function () {
                                                          var e = s && s.apply(this, arguments);
                                                          e && oe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments);
                                                      });
                                                  }),
                                                      (e = null);
                                              })
                                              .promise();
                                      },
                                      promise: function (e) {
                                          return null != e ? oe.extend(e, r) : r;
                                      },
                                  },
                                  i = {};
                              return (
                                  (r.pipe = r.then),
                                  oe.each(t, function (e, o) {
                                      var s = o[2],
                                          a = o[3];
                                      (r[o[1]] = s.add),
                                          a &&
                                              s.add(
                                                  function () {
                                                      n = a;
                                                  },
                                                  t[1 ^ e][2].disable,
                                                  t[2][2].lock
                                              ),
                                          (i[o[0]] = function () {
                                              return i[o[0] + "With"](this === i ? r : this, arguments), this;
                                          }),
                                          (i[o[0] + "With"] = s.fireWith);
                                  }),
                                  r.promise(i),
                                  e && e.call(i, i),
                                  i
                              );
                          },
                          when: function (e) {
                              var t,
                                  n,
                                  r,
                                  i = 0,
                                  o = Q.call(arguments),
                                  s = o.length,
                                  a = 1 !== s || (e && oe.isFunction(e.promise)) ? s : 0,
                                  u = 1 === a ? e : oe.Deferred(),
                                  l = function (e, n, r) {
                                      return function (i) {
                                          (n[e] = this), (r[e] = arguments.length > 1 ? Q.call(arguments) : i), r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r);
                                      };
                                  };
                              if (s > 1) for (t = new Array(s), n = new Array(s), r = new Array(s); i < s; i++) o[i] && oe.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --a;
                              return a || u.resolveWith(r, o), u.promise();
                          },
                      });
                  var Te;
                  (oe.fn.ready = function (e) {
                      return oe.ready.promise().done(e), this;
                  }),
                      oe.extend({
                          isReady: !1,
                          readyWait: 1,
                          holdReady: function (e) {
                              e ? oe.readyWait++ : oe.ready(!0);
                          },
                          ready: function (e) {
                              (e === !0 ? --oe.readyWait : oe.isReady) || ((oe.isReady = !0), (e !== !0 && --oe.readyWait > 0) || (Te.resolveWith(G, [oe]), oe.fn.triggerHandler && (oe(G).triggerHandler("ready"), oe(G).off("ready"))));
                          },
                      }),
                      (oe.ready.promise = function (t) {
                          return (
                              Te ||
                                  ((Te = oe.Deferred()),
                                  "complete" === G.readyState || ("loading" !== G.readyState && !G.documentElement.doScroll) ? e.setTimeout(oe.ready) : (G.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))),
                              Te.promise(t)
                          );
                      }),
                      oe.ready.promise();
                  var Ce = function (e, t, n, r, i, o, s) {
                          var a = 0,
                              u = e.length,
                              l = null == n;
                          if ("object" === oe.type(n)) {
                              i = !0;
                              for (a in n) Ce(e, t, a, n[a], !0, o, s);
                          } else if (
                              void 0 !== r &&
                              ((i = !0),
                              oe.isFunction(r) || (s = !0),
                              l &&
                                  (s
                                      ? (t.call(e, r), (t = null))
                                      : ((l = t),
                                        (t = function (e, t, n) {
                                            return l.call(oe(e), n);
                                        }))),
                              t)
                          )
                              for (; a < u; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
                          return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
                      },
                      ke = function (e) {
                          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                      };
                  (a.uid = 1),
                      (a.prototype = {
                          register: function (e, t) {
                              var n = t || {};
                              return e.nodeType ? (e[this.expando] = n) : Object.defineProperty(e, this.expando, { value: n, writable: !0, configurable: !0 }), e[this.expando];
                          },
                          cache: function (e) {
                              if (!ke(e)) return {};
                              var t = e[this.expando];
                              return t || ((t = {}), ke(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                          },
                          set: function (e, t, n) {
                              var r,
                                  i = this.cache(e);
                              if ("string" == typeof t) i[t] = n;
                              else for (r in t) i[r] = t[r];
                              return i;
                          },
                          get: function (e, t) {
                              return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t];
                          },
                          access: function (e, t, n) {
                              var r;
                              return void 0 === t || (t && "string" == typeof t && void 0 === n) ? ((r = this.get(e, t)), void 0 !== r ? r : this.get(e, oe.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t);
                          },
                          remove: function (e, t) {
                              var n,
                                  r,
                                  i,
                                  o = e[this.expando];
                              if (void 0 !== o) {
                                  if (void 0 === t) this.register(e);
                                  else {
                                      oe.isArray(t) ? (r = t.concat(t.map(oe.camelCase))) : ((i = oe.camelCase(t)), t in o ? (r = [t, i]) : ((r = i), (r = r in o ? [r] : r.match(we) || []))), (n = r.length);
                                      for (; n--; ) delete o[r[n]];
                                  }
                                  (void 0 === t || oe.isEmptyObject(o)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                              }
                          },
                          hasData: function (e) {
                              var t = e[this.expando];
                              return void 0 !== t && !oe.isEmptyObject(t);
                          },
                      });
                  var Ee = new a(),
                      Ne = new a(),
                      Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                      je = /[A-Z]/g;
                  oe.extend({
                      hasData: function (e) {
                          return Ne.hasData(e) || Ee.hasData(e);
                      },
                      data: function (e, t, n) {
                          return Ne.access(e, t, n);
                      },
                      removeData: function (e, t) {
                          Ne.remove(e, t);
                      },
                      _data: function (e, t, n) {
                          return Ee.access(e, t, n);
                      },
                      _removeData: function (e, t) {
                          Ee.remove(e, t);
                      },
                  }),
                      oe.fn.extend({
                          data: function (e, t) {
                              var n,
                                  r,
                                  i,
                                  o = this[0],
                                  s = o && o.attributes;
                              if (void 0 === e) {
                                  if (this.length && ((i = Ne.get(o)), 1 === o.nodeType && !Ee.get(o, "hasDataAttrs"))) {
                                      for (n = s.length; n--; ) s[n] && ((r = s[n].name), 0 === r.indexOf("data-") && ((r = oe.camelCase(r.slice(5))), u(o, r, i[r])));
                                      Ee.set(o, "hasDataAttrs", !0);
                                  }
                                  return i;
                              }
                              return "object" == typeof e
                                  ? this.each(function () {
                                        Ne.set(this, e);
                                    })
                                  : Ce(
                                        this,
                                        function (t) {
                                            var n, r;
                                            if (o && void 0 === t) {
                                                if (((n = Ne.get(o, e) || Ne.get(o, e.replace(je, "-$&").toLowerCase())), void 0 !== n)) return n;
                                                if (((r = oe.camelCase(e)), (n = Ne.get(o, r)), void 0 !== n)) return n;
                                                if (((n = u(o, r, void 0)), void 0 !== n)) return n;
                                            } else
                                                (r = oe.camelCase(e)),
                                                    this.each(function () {
                                                        var n = Ne.get(this, r);
                                                        Ne.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && Ne.set(this, e, t);
                                                    });
                                        },
                                        null,
                                        t,
                                        arguments.length > 1,
                                        null,
                                        !0
                                    );
                          },
                          removeData: function (e) {
                              return this.each(function () {
                                  Ne.remove(this, e);
                              });
                          },
                      }),
                      oe.extend({
                          queue: function (e, t, n) {
                              var r;
                              if (e) return (t = (t || "fx") + "queue"), (r = Ee.get(e, t)), n && (!r || oe.isArray(n) ? (r = Ee.access(e, t, oe.makeArray(n))) : r.push(n)), r || [];
                          },
                          dequeue: function (e, t) {
                              t = t || "fx";
                              var n = oe.queue(e, t),
                                  r = n.length,
                                  i = n.shift(),
                                  o = oe._queueHooks(e, t),
                                  s = function () {
                                      oe.dequeue(e, t);
                                  };
                              "inprogress" === i && ((i = n.shift()), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire();
                          },
                          _queueHooks: function (e, t) {
                              var n = t + "queueHooks";
                              return (
                                  Ee.get(e, n) ||
                                  Ee.access(e, n, {
                                      empty: oe.Callbacks("once memory").add(function () {
                                          Ee.remove(e, [t + "queue", n]);
                                      }),
                                  })
                              );
                          },
                      }),
                      oe.fn.extend({
                          queue: function (e, t) {
                              var n = 2;
                              return (
                                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                                  arguments.length < n
                                      ? oe.queue(this[0], e)
                                      : void 0 === t
                                      ? this
                                      : this.each(function () {
                                            var n = oe.queue(this, e, t);
                                            oe._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && oe.dequeue(this, e);
                                        })
                              );
                          },
                          dequeue: function (e) {
                              return this.each(function () {
                                  oe.dequeue(this, e);
                              });
                          },
                          clearQueue: function (e) {
                              return this.queue(e || "fx", []);
                          },
                          promise: function (e, t) {
                              var n,
                                  r = 1,
                                  i = oe.Deferred(),
                                  o = this,
                                  s = this.length,
                                  a = function () {
                                      --r || i.resolveWith(o, [o]);
                                  };
                              for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (n = Ee.get(o[s], e + "queueHooks")), n && n.empty && (r++, n.empty.add(a));
                              return a(), i.promise(t);
                          },
                      });
                  var De = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                      Ae = new RegExp("^(?:([+-])=|)(" + De + ")([a-z%]*)$", "i"),
                      qe = ["Top", "Right", "Bottom", "Left"],
                      Le = function (e, t) {
                          return (e = t || e), "none" === oe.css(e, "display") || !oe.contains(e.ownerDocument, e);
                      },
                      He = /^(?:checkbox|radio)$/i,
                      Oe = /<([\w:-]+)/,
                      Fe = /^$|\/(?:java|ecma)script/i,
                      Pe = {
                          option: [1, "<select multiple='multiple'>", "</select>"],
                          thead: [1, "<table>", "</table>"],
                          col: [2, "<table><colgroup>", "</colgroup></table>"],
                          tr: [2, "<table><tbody>", "</tbody></table>"],
                          td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                          _default: [0, "", ""],
                      };
                  (Pe.optgroup = Pe.option), (Pe.tbody = Pe.tfoot = Pe.colgroup = Pe.caption = Pe.thead), (Pe.th = Pe.td);
                  var Re = /<|&#?\w+;/;
                  !(function () {
                      var e = G.createDocumentFragment(),
                          t = e.appendChild(G.createElement("div")),
                          n = G.createElement("input");
                      n.setAttribute("type", "radio"),
                          n.setAttribute("checked", "checked"),
                          n.setAttribute("name", "t"),
                          t.appendChild(n),
                          (re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
                          (t.innerHTML = "<textarea>x</textarea>"),
                          (re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
                  })();
                  var Me = /^key/,
                      Ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                      We = /^([^.]*)(?:\.(.+)|)/;
                  (oe.event = {
                      global: {},
                      add: function (e, t, n, r, i) {
                          var o,
                              s,
                              a,
                              u,
                              l,
                              c,
                              f,
                              p,
                              d,
                              h,
                              g,
                              v = Ee.get(e);
                          if (v)
                              for (
                                  n.handler && ((o = n), (n = o.handler), (i = o.selector)),
                                      n.guid || (n.guid = oe.guid++),
                                      (u = v.events) || (u = v.events = {}),
                                      (s = v.handle) ||
                                          (s = v.handle = function (t) {
                                              return "undefined" != typeof oe && oe.event.triggered !== t.type ? oe.event.dispatch.apply(e, arguments) : void 0;
                                          }),
                                      t = (t || "").match(we) || [""],
                                      l = t.length;
                                  l--;

                              )
                                  (a = We.exec(t[l]) || []),
                                      (d = g = a[1]),
                                      (h = (a[2] || "").split(".").sort()),
                                      d &&
                                          ((f = oe.event.special[d] || {}),
                                          (d = (i ? f.delegateType : f.bindType) || d),
                                          (f = oe.event.special[d] || {}),
                                          (c = oe.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && oe.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                                          (p = u[d]) || ((p = u[d] = []), (p.delegateCount = 0), (f.setup && f.setup.call(e, r, h, s) !== !1) || (e.addEventListener && e.addEventListener(d, s))),
                                          f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                                          i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                                          (oe.event.global[d] = !0));
                      },
                      remove: function (e, t, n, r, i) {
                          var o,
                              s,
                              a,
                              u,
                              l,
                              c,
                              f,
                              p,
                              d,
                              h,
                              g,
                              v = Ee.hasData(e) && Ee.get(e);
                          if (v && (u = v.events)) {
                              for (t = (t || "").match(we) || [""], l = t.length; l--; )
                                  if (((a = We.exec(t[l]) || []), (d = g = a[1]), (h = (a[2] || "").split(".").sort()), d)) {
                                      for (f = oe.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--; )
                                          (c = p[o]),
                                              (!i && g !== c.origType) ||
                                                  (n && n.guid !== c.guid) ||
                                                  (a && !a.test(c.namespace)) ||
                                                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                                                  (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                                      s && !p.length && ((f.teardown && f.teardown.call(e, h, v.handle) !== !1) || oe.removeEvent(e, d, v.handle), delete u[d]);
                                  } else for (d in u) oe.event.remove(e, d + t[l], n, r, !0);
                              oe.isEmptyObject(u) && Ee.remove(e, "handle events");
                          }
                      },
                      dispatch: function (e) {
                          e = oe.event.fix(e);
                          var t,
                              n,
                              r,
                              i,
                              o,
                              s = [],
                              a = Q.call(arguments),
                              u = (Ee.get(this, "events") || {})[e.type] || [],
                              l = oe.event.special[e.type] || {};
                          if (((a[0] = e), (e.delegateTarget = this), !l.preDispatch || l.preDispatch.call(this, e) !== !1)) {
                              for (s = oe.event.handlers.call(this, e, u), t = 0; (i = s[t++]) && !e.isPropagationStopped(); )
                                  for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                                      (e.rnamespace && !e.rnamespace.test(o.namespace)) ||
                                          ((e.handleObj = o),
                                          (e.data = o.data),
                                          (r = ((oe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)),
                                          void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                              return l.postDispatch && l.postDispatch.call(this, e), e.result;
                          }
                      },
                      handlers: function (e, t) {
                          var n,
                              r,
                              i,
                              o,
                              s = [],
                              a = t.delegateCount,
                              u = e.target;
                          if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                              for (; u !== this; u = u.parentNode || this)
                                  if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                                      for (r = [], n = 0; n < a; n++) (o = t[n]), (i = o.selector + " "), void 0 === r[i] && (r[i] = o.needsContext ? oe(i, this).index(u) > -1 : oe.find(i, this, null, [u]).length), r[i] && r.push(o);
                                      r.length && s.push({ elem: u, handlers: r });
                                  }
                          return a < t.length && s.push({ elem: this, handlers: t.slice(a) }), s;
                      },
                      props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                      fixHooks: {},
                      keyHooks: {
                          props: "char charCode key keyCode".split(" "),
                          filter: function (e, t) {
                              return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
                          },
                      },
                      mouseHooks: {
                          props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                          filter: function (e, t) {
                              var n,
                                  r,
                                  i,
                                  o = t.button;
                              return (
                                  null == e.pageX &&
                                      null != t.clientX &&
                                      ((n = e.target.ownerDocument || G),
                                      (r = n.documentElement),
                                      (i = n.body),
                                      (e.pageX = t.clientX + ((r && r.scrollLeft) || (i && i.scrollLeft) || 0) - ((r && r.clientLeft) || (i && i.clientLeft) || 0)),
                                      (e.pageY = t.clientY + ((r && r.scrollTop) || (i && i.scrollTop) || 0) - ((r && r.clientTop) || (i && i.clientTop) || 0))),
                                  e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                                  e
                              );
                          },
                      },
                      fix: function (e) {
                          if (e[oe.expando]) return e;
                          var t,
                              n,
                              r,
                              i = e.type,
                              o = e,
                              s = this.fixHooks[i];
                          for (s || (this.fixHooks[i] = s = Ie.test(i) ? this.mouseHooks : Me.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new oe.Event(o), t = r.length; t--; )
                              (n = r[t]), (e[n] = o[n]);
                          return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e;
                      },
                      special: {
                          load: { noBubble: !0 },
                          focus: {
                              trigger: function () {
                                  if (this !== g() && this.focus) return this.focus(), !1;
                              },
                              delegateType: "focusin",
                          },
                          blur: {
                              trigger: function () {
                                  if (this === g() && this.blur) return this.blur(), !1;
                              },
                              delegateType: "focusout",
                          },
                          click: {
                              trigger: function () {
                                  if ("checkbox" === this.type && this.click && oe.nodeName(this, "input")) return this.click(), !1;
                              },
                              _default: function (e) {
                                  return oe.nodeName(e.target, "a");
                              },
                          },
                          beforeunload: {
                              postDispatch: function (e) {
                                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                              },
                          },
                      },
                  }),
                      (oe.removeEvent = function (e, t, n) {
                          e.removeEventListener && e.removeEventListener(t, n);
                      }),
                      (oe.Event = function (e, t) {
                          return this instanceof oe.Event
                              ? (e && e.type ? ((this.originalEvent = e), (this.type = e.type), (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && e.returnValue === !1) ? d : h)) : (this.type = e),
                                t && oe.extend(this, t),
                                (this.timeStamp = (e && e.timeStamp) || oe.now()),
                                void (this[oe.expando] = !0))
                              : new oe.Event(e, t);
                      }),
                      (oe.Event.prototype = {
                          constructor: oe.Event,
                          isDefaultPrevented: h,
                          isPropagationStopped: h,
                          isImmediatePropagationStopped: h,
                          isSimulated: !1,
                          preventDefault: function () {
                              var e = this.originalEvent;
                              (this.isDefaultPrevented = d), e && !this.isSimulated && e.preventDefault();
                          },
                          stopPropagation: function () {
                              var e = this.originalEvent;
                              (this.isPropagationStopped = d), e && !this.isSimulated && e.stopPropagation();
                          },
                          stopImmediatePropagation: function () {
                              var e = this.originalEvent;
                              (this.isImmediatePropagationStopped = d), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                          },
                      }),
                      oe.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                          oe.event.special[e] = {
                              delegateType: t,
                              bindType: t,
                              handle: function (e) {
                                  var n,
                                      r = this,
                                      i = e.relatedTarget,
                                      o = e.handleObj;
                                  return (i && (i === r || oe.contains(r, i))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
                              },
                          };
                      }),
                      oe.fn.extend({
                          on: function (e, t, n, r) {
                              return v(this, e, t, n, r);
                          },
                          one: function (e, t, n, r) {
                              return v(this, e, t, n, r, 1);
                          },
                          off: function (e, t, n) {
                              var r, i;
                              if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), oe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                              if ("object" == typeof e) {
                                  for (i in e) this.off(i, t, e[i]);
                                  return this;
                              }
                              return (
                                  (t !== !1 && "function" != typeof t) || ((n = t), (t = void 0)),
                                  n === !1 && (n = h),
                                  this.each(function () {
                                      oe.event.remove(this, e, n, t);
                                  })
                              );
                          },
                      });
                  var $e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                      Be = /<script|<style|<link/i,
                      _e = /checked\s*(?:[^=]|=\s*.checked.)/i,
                      Xe = /^true\/(.*)/,
                      ze = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                  oe.extend({
                      htmlPrefilter: function (e) {
                          return e.replace($e, "<$1></$2>");
                      },
                      clone: function (e, t, n) {
                          var r,
                              i,
                              o,
                              s,
                              a = e.cloneNode(!0),
                              u = oe.contains(e.ownerDocument, e);
                          if (!(re.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || oe.isXMLDoc(e))) for (s = c(a), o = c(e), r = 0, i = o.length; r < i; r++) w(o[r], s[r]);
                          if (t)
                              if (n) for (o = o || c(e), s = s || c(a), r = 0, i = o.length; r < i; r++) b(o[r], s[r]);
                              else b(e, a);
                          return (s = c(a, "script")), s.length > 0 && f(s, !u && c(e, "script")), a;
                      },
                      cleanData: function (e) {
                          for (var t, n, r, i = oe.event.special, o = 0; void 0 !== (n = e[o]); o++)
                              if (ke(n)) {
                                  if ((t = n[Ee.expando])) {
                                      if (t.events) for (r in t.events) i[r] ? oe.event.remove(n, r) : oe.removeEvent(n, r, t.handle);
                                      n[Ee.expando] = void 0;
                                  }
                                  n[Ne.expando] && (n[Ne.expando] = void 0);
                              }
                      },
                  }),
                      oe.fn.extend({
                          domManip: T,
                          detach: function (e) {
                              return C(this, e, !0);
                          },
                          remove: function (e) {
                              return C(this, e);
                          },
                          text: function (e) {
                              return Ce(
                                  this,
                                  function (e) {
                                      return void 0 === e
                                          ? oe.text(this)
                                          : this.empty().each(function () {
                                                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                            });
                                  },
                                  null,
                                  e,
                                  arguments.length
                              );
                          },
                          append: function () {
                              return T(this, arguments, function (e) {
                                  if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                      var t = m(this, e);
                                      t.appendChild(e);
                                  }
                              });
                          },
                          prepend: function () {
                              return T(this, arguments, function (e) {
                                  if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                      var t = m(this, e);
                                      t.insertBefore(e, t.firstChild);
                                  }
                              });
                          },
                          before: function () {
                              return T(this, arguments, function (e) {
                                  this.parentNode && this.parentNode.insertBefore(e, this);
                              });
                          },
                          after: function () {
                              return T(this, arguments, function (e) {
                                  this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                              });
                          },
                          empty: function () {
                              for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (oe.cleanData(c(e, !1)), (e.textContent = ""));
                              return this;
                          },
                          clone: function (e, t) {
                              return (
                                  (e = null != e && e),
                                  (t = null == t ? e : t),
                                  this.map(function () {
                                      return oe.clone(this, e, t);
                                  })
                              );
                          },
                          html: function (e) {
                              return Ce(
                                  this,
                                  function (e) {
                                      var t = this[0] || {},
                                          n = 0,
                                          r = this.length;
                                      if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                      if ("string" == typeof e && !Be.test(e) && !Pe[(Oe.exec(e) || ["", ""])[1].toLowerCase()]) {
                                          e = oe.htmlPrefilter(e);
                                          try {
                                              for (; n < r; n++) (t = this[n] || {}), 1 === t.nodeType && (oe.cleanData(c(t, !1)), (t.innerHTML = e));
                                              t = 0;
                                          } catch (e) {}
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
                              return T(
                                  this,
                                  arguments,
                                  function (t) {
                                      var n = this.parentNode;
                                      oe.inArray(this, e) < 0 && (oe.cleanData(c(this)), n && n.replaceChild(t, this));
                                  },
                                  e
                              );
                          },
                      }),
                      oe.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                          oe.fn[e] = function (e) {
                              for (var n, r = [], i = oe(e), o = i.length - 1, s = 0; s <= o; s++) (n = s === o ? this : this.clone(!0)), oe(i[s])[t](n), K.apply(r, n.get());
                              return this.pushStack(r);
                          };
                      });
                  var Ue,
                      Ve = { HTML: "block", BODY: "block" },
                      Ye = /^margin/,
                      Ge = new RegExp("^(" + De + ")(?!px)[a-z%]+$", "i"),
                      Qe = function (t) {
                          var n = t.ownerDocument.defaultView;
                          return (n && n.opener) || (n = e), n.getComputedStyle(t);
                      },
                      Je = function (e, t, n, r) {
                          var i,
                              o,
                              s = {};
                          for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
                          i = n.apply(e, r || []);
                          for (o in t) e.style[o] = s[o];
                          return i;
                      },
                      Ke = G.documentElement;
                  !(function () {
                      function t() {
                          (a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
                              (a.innerHTML = ""),
                              Ke.appendChild(s);
                          var t = e.getComputedStyle(a);
                          (n = "1%" !== t.top), (o = "2px" === t.marginLeft), (r = "4px" === t.width), (a.style.marginRight = "50%"), (i = "4px" === t.marginRight), Ke.removeChild(s);
                      }
                      var n,
                          r,
                          i,
                          o,
                          s = G.createElement("div"),
                          a = G.createElement("div");
                      a.style &&
                          ((a.style.backgroundClip = "content-box"),
                          (a.cloneNode(!0).style.backgroundClip = ""),
                          (re.clearCloneStyle = "content-box" === a.style.backgroundClip),
                          (s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
                          s.appendChild(a),
                          oe.extend(re, {
                              pixelPosition: function () {
                                  return t(), n;
                              },
                              boxSizingReliable: function () {
                                  return null == r && t(), r;
                              },
                              pixelMarginRight: function () {
                                  return null == r && t(), i;
                              },
                              reliableMarginLeft: function () {
                                  return null == r && t(), o;
                              },
                              reliableMarginRight: function () {
                                  var t,
                                      n = a.appendChild(G.createElement("div"));
                                  return (
                                      (n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                                      (n.style.marginRight = n.style.width = "0"),
                                      (a.style.width = "1px"),
                                      Ke.appendChild(s),
                                      (t = !parseFloat(e.getComputedStyle(n).marginRight)),
                                      Ke.removeChild(s),
                                      a.removeChild(n),
                                      t
                                  );
                              },
                          }));
                  })();
                  var Ze = /^(none|table(?!-c[ea]).+)/,
                      et = { position: "absolute", visibility: "hidden", display: "block" },
                      tt = { letterSpacing: "0", fontWeight: "400" },
                      nt = ["Webkit", "O", "Moz", "ms"],
                      rt = G.createElement("div").style;
                  oe.extend({
                      cssHooks: {
                          opacity: {
                              get: function (e, t) {
                                  if (t) {
                                      var n = N(e, "opacity");
                                      return "" === n ? "1" : n;
                                  }
                              },
                          },
                      },
                      cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
                      cssProps: { float: "cssFloat" },
                      style: function (e, t, n, r) {
                          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                              var i,
                                  o,
                                  s,
                                  a = oe.camelCase(t),
                                  u = e.style;
                              return (
                                  (t = oe.cssProps[a] || (oe.cssProps[a] = j(a) || a)),
                                  (s = oe.cssHooks[t] || oe.cssHooks[a]),
                                  void 0 === n
                                      ? s && "get" in s && void 0 !== (i = s.get(e, !1, r))
                                          ? i
                                          : u[t]
                                      : ((o = typeof n),
                                        "string" === o && (i = Ae.exec(n)) && i[1] && ((n = l(e, t, i)), (o = "number")),
                                        null != n &&
                                            n === n &&
                                            ("number" === o && (n += (i && i[3]) || (oe.cssNumber[a] ? "" : "px")),
                                            re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                                            (s && "set" in s && void 0 === (n = s.set(e, n, r))) || (u[t] = n)),
                                        void 0)
                              );
                          }
                      },
                      css: function (e, t, n, r) {
                          var i,
                              o,
                              s,
                              a = oe.camelCase(t);
                          return (
                              (t = oe.cssProps[a] || (oe.cssProps[a] = j(a) || a)),
                              (s = oe.cssHooks[t] || oe.cssHooks[a]),
                              s && "get" in s && (i = s.get(e, !0, n)),
                              void 0 === i && (i = N(e, t, r)),
                              "normal" === i && t in tt && (i = tt[t]),
                              "" === n || n ? ((o = parseFloat(i)), n === !0 || isFinite(o) ? o || 0 : i) : i
                          );
                      },
                  }),
                      oe.each(["height", "width"], function (e, t) {
                          oe.cssHooks[t] = {
                              get: function (e, n, r) {
                                  if (n)
                                      return Ze.test(oe.css(e, "display")) && 0 === e.offsetWidth
                                          ? Je(e, et, function () {
                                                return q(e, t, r);
                                            })
                                          : q(e, t, r);
                              },
                              set: function (e, n, r) {
                                  var i,
                                      o = r && Qe(e),
                                      s = r && A(e, t, r, "border-box" === oe.css(e, "boxSizing", !1, o), o);
                                  return s && (i = Ae.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = oe.css(e, t))), D(e, n, s);
                              },
                          };
                      }),
                      (oe.cssHooks.marginLeft = S(re.reliableMarginLeft, function (e, t) {
                          if (t)
                              return (
                                  (parseFloat(N(e, "marginLeft")) ||
                                      e.getBoundingClientRect().left -
                                          Je(e, { marginLeft: 0 }, function () {
                                              return e.getBoundingClientRect().left;
                                          })) + "px"
                              );
                      })),
                      (oe.cssHooks.marginRight = S(re.reliableMarginRight, function (e, t) {
                          if (t) return Je(e, { display: "inline-block" }, N, [e, "marginRight"]);
                      })),
                      oe.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                          (oe.cssHooks[e + t] = {
                              expand: function (n) {
                                  for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + qe[r] + t] = o[r] || o[r - 2] || o[0];
                                  return i;
                              },
                          }),
                              Ye.test(e) || (oe.cssHooks[e + t].set = D);
                      }),
                      oe.fn.extend({
                          css: function (e, t) {
                              return Ce(
                                  this,
                                  function (e, t, n) {
                                      var r,
                                          i,
                                          o = {},
                                          s = 0;
                                      if (oe.isArray(t)) {
                                          for (r = Qe(e), i = t.length; s < i; s++) o[t[s]] = oe.css(e, t[s], !1, r);
                                          return o;
                                      }
                                      return void 0 !== n ? oe.style(e, t, n) : oe.css(e, t);
                                  },
                                  e,
                                  t,
                                  arguments.length > 1
                              );
                          },
                          show: function () {
                              return L(this, !0);
                          },
                          hide: function () {
                              return L(this);
                          },
                          toggle: function (e) {
                              return "boolean" == typeof e
                                  ? e
                                      ? this.show()
                                      : this.hide()
                                  : this.each(function () {
                                        Le(this) ? oe(this).show() : oe(this).hide();
                                    });
                          },
                      }),
                      (oe.Tween = H),
                      (H.prototype = {
                          constructor: H,
                          init: function (e, t, n, r, i, o) {
                              (this.elem = e), (this.prop = n), (this.easing = i || oe.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (oe.cssNumber[n] ? "" : "px"));
                          },
                          cur: function () {
                              var e = H.propHooks[this.prop];
                              return e && e.get ? e.get(this) : H.propHooks._default.get(this);
                          },
                          run: function (e) {
                              var t,
                                  n = H.propHooks[this.prop];
                              return (
                                  this.options.duration ? (this.pos = t = oe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                                  (this.now = (this.end - this.start) * t + this.start),
                                  this.options.step && this.options.step.call(this.elem, this.now, this),
                                  n && n.set ? n.set(this) : H.propHooks._default.set(this),
                                  this
                              );
                          },
                      }),
                      (H.prototype.init.prototype = H.prototype),
                      (H.propHooks = {
                          _default: {
                              get: function (e) {
                                  var t;
                                  return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : ((t = oe.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
                              },
                              set: function (e) {
                                  oe.fx.step[e.prop]
                                      ? oe.fx.step[e.prop](e)
                                      : 1 !== e.elem.nodeType || (null == e.elem.style[oe.cssProps[e.prop]] && !oe.cssHooks[e.prop])
                                      ? (e.elem[e.prop] = e.now)
                                      : oe.style(e.elem, e.prop, e.now + e.unit);
                              },
                          },
                      }),
                      (H.propHooks.scrollTop = H.propHooks.scrollLeft = {
                          set: function (e) {
                              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                          },
                      }),
                      (oe.easing = {
                          linear: function (e) {
                              return e;
                          },
                          swing: function (e) {
                              return 0.5 - Math.cos(e * Math.PI) / 2;
                          },
                          _default: "swing",
                      }),
                      (oe.fx = H.prototype.init),
                      (oe.fx.step = {});
                  var it,
                      ot,
                      st = /^(?:toggle|show|hide)$/,
                      at = /queueHooks$/;
                  (oe.Animation = oe.extend(I, {
                      tweeners: {
                          "*": [
                              function (e, t) {
                                  var n = this.createTween(e, t);
                                  return l(n.elem, e, Ae.exec(t), n), n;
                              },
                          ],
                      },
                      tweener: function (e, t) {
                          oe.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(we));
                          for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (I.tweeners[n] = I.tweeners[n] || []), I.tweeners[n].unshift(t);
                      },
                      prefilters: [R],
                      prefilter: function (e, t) {
                          t ? I.prefilters.unshift(e) : I.prefilters.push(e);
                      },
                  })),
                      (oe.speed = function (e, t, n) {
                          var r = e && "object" == typeof e ? oe.extend({}, e) : { complete: n || (!n && t) || (oe.isFunction(e) && e), duration: e, easing: (n && t) || (t && !oe.isFunction(t) && t) };
                          return (
                              (r.duration = oe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in oe.fx.speeds ? oe.fx.speeds[r.duration] : oe.fx.speeds._default),
                              (null != r.queue && r.queue !== !0) || (r.queue = "fx"),
                              (r.old = r.complete),
                              (r.complete = function () {
                                  oe.isFunction(r.old) && r.old.call(this), r.queue && oe.dequeue(this, r.queue);
                              }),
                              r
                          );
                      }),
                      oe.fn.extend({
                          fadeTo: function (e, t, n, r) {
                              return this.filter(Le).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
                          },
                          animate: function (e, t, n, r) {
                              var i = oe.isEmptyObject(e),
                                  o = oe.speed(t, n, r),
                                  s = function () {
                                      var t = I(this, oe.extend({}, e), o);
                                      (i || Ee.get(this, "finish")) && t.stop(!0);
                                  };
                              return (s.finish = s), i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s);
                          },
                          stop: function (e, t, n) {
                              var r = function (e) {
                                  var t = e.stop;
                                  delete e.stop, t(n);
                              };
                              return (
                                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                                  t && e !== !1 && this.queue(e || "fx", []),
                                  this.each(function () {
                                      var t = !0,
                                          i = null != e && e + "queueHooks",
                                          o = oe.timers,
                                          s = Ee.get(this);
                                      if (i) s[i] && s[i].stop && r(s[i]);
                                      else for (i in s) s[i] && s[i].stop && at.test(i) && r(s[i]);
                                      for (i = o.length; i--; ) o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                                      (!t && n) || oe.dequeue(this, e);
                                  })
                              );
                          },
                          finish: function (e) {
                              return (
                                  e !== !1 && (e = e || "fx"),
                                  this.each(function () {
                                      var t,
                                          n = Ee.get(this),
                                          r = n[e + "queue"],
                                          i = n[e + "queueHooks"],
                                          o = oe.timers,
                                          s = r ? r.length : 0;
                                      for (n.finish = !0, oe.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                      for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                                      delete n.finish;
                                  })
                              );
                          },
                      }),
                      oe.each(["toggle", "show", "hide"], function (e, t) {
                          var n = oe.fn[t];
                          oe.fn[t] = function (e, r, i) {
                              return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, r, i);
                          };
                      }),
                      oe.each({ slideDown: F("show"), slideUp: F("hide"), slideToggle: F("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                          oe.fn[e] = function (e, n, r) {
                              return this.animate(t, e, n, r);
                          };
                      }),
                      (oe.timers = []),
                      (oe.fx.tick = function () {
                          var e,
                              t = 0,
                              n = oe.timers;
                          for (it = oe.now(); t < n.length; t++) (e = n[t]), e() || n[t] !== e || n.splice(t--, 1);
                          n.length || oe.fx.stop(), (it = void 0);
                      }),
                      (oe.fx.timer = function (e) {
                          oe.timers.push(e), e() ? oe.fx.start() : oe.timers.pop();
                      }),
                      (oe.fx.interval = 13),
                      (oe.fx.start = function () {
                          ot || (ot = e.setInterval(oe.fx.tick, oe.fx.interval));
                      }),
                      (oe.fx.stop = function () {
                          e.clearInterval(ot), (ot = null);
                      }),
                      (oe.fx.speeds = { slow: 600, fast: 600, _default: 600 }),
                      (oe.fn.delay = function (t, n) {
                          return (
                              (t = oe.fx ? oe.fx.speeds[t] || t : t),
                              (n = n || "fx"),
                              this.queue(n, function (n, r) {
                                  var i = e.setTimeout(n, t);
                                  r.stop = function () {
                                      e.clearTimeout(i);
                                  };
                              })
                          );
                      }),
                      (function () {
                          var e = G.createElement("input"),
                              t = G.createElement("select"),
                              n = t.appendChild(G.createElement("option"));
                          (e.type = "checkbox"),
                              (re.checkOn = "" !== e.value),
                              (re.optSelected = n.selected),
                              (t.disabled = !0),
                              (re.optDisabled = !n.disabled),
                              (e = G.createElement("input")),
                              (e.value = "t"),
                              (e.type = "radio"),
                              (re.radioValue = "t" === e.value);
                      })();
                  var ut,
                      lt = oe.expr.attrHandle;
                  oe.fn.extend({
                      attr: function (e, t) {
                          return Ce(this, oe.attr, e, t, arguments.length > 1);
                      },
                      removeAttr: function (e) {
                          return this.each(function () {
                              oe.removeAttr(this, e);
                          });
                      },
                  }),
                      oe.extend({
                          attr: function (e, t, n) {
                              var r,
                                  i,
                                  o = e.nodeType;
                              if (3 !== o && 8 !== o && 2 !== o)
                                  return "undefined" == typeof e.getAttribute
                                      ? oe.prop(e, t, n)
                                      : ((1 === o && oe.isXMLDoc(e)) || ((t = t.toLowerCase()), (i = oe.attrHooks[t] || (oe.expr.match.bool.test(t) ? ut : void 0))),
                                        void 0 !== n
                                            ? null === n
                                                ? void oe.removeAttr(e, t)
                                                : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                                ? r
                                                : (e.setAttribute(t, n + ""), n)
                                            : i && "get" in i && null !== (r = i.get(e, t))
                                            ? r
                                            : ((r = oe.find.attr(e, t)), null == r ? void 0 : r));
                          },
                          attrHooks: {
                              type: {
                                  set: function (e, t) {
                                      if (!re.radioValue && "radio" === t && oe.nodeName(e, "input")) {
                                          var n = e.value;
                                          return e.setAttribute("type", t), n && (e.value = n), t;
                                      }
                                  },
                              },
                          },
                          removeAttr: function (e, t) {
                              var n,
                                  r,
                                  i = 0,
                                  o = t && t.match(we);
                              if (o && 1 === e.nodeType) for (; (n = o[i++]); ) (r = oe.propFix[n] || n), oe.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
                          },
                      }),
                      (ut = {
                          set: function (e, t, n) {
                              return t === !1 ? oe.removeAttr(e, n) : e.setAttribute(n, n), n;
                          },
                      }),
                      oe.each(oe.expr.match.bool.source.match(/\w+/g), function (e, t) {
                          var n = lt[t] || oe.find.attr;
                          lt[t] = function (e, t, r) {
                              var i, o;
                              return r || ((o = lt[t]), (lt[t] = i), (i = null != n(e, t, r) ? t.toLowerCase() : null), (lt[t] = o)), i;
                          };
                      });
                  var ct = /^(?:input|select|textarea|button)$/i,
                      ft = /^(?:a|area)$/i;
                  oe.fn.extend({
                      prop: function (e, t) {
                          return Ce(this, oe.prop, e, t, arguments.length > 1);
                      },
                      removeProp: function (e) {
                          return this.each(function () {
                              delete this[oe.propFix[e] || e];
                          });
                      },
                  }),
                      oe.extend({
                          prop: function (e, t, n) {
                              var r,
                                  i,
                                  o = e.nodeType;
                              if (3 !== o && 8 !== o && 2 !== o)
                                  return (
                                      (1 === o && oe.isXMLDoc(e)) || ((t = oe.propFix[t] || t), (i = oe.propHooks[t])),
                                      void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                                  );
                          },
                          propHooks: {
                              tabIndex: {
                                  get: function (e) {
                                      var t = oe.find.attr(e, "tabindex");
                                      return t ? parseInt(t, 10) : ct.test(e.nodeName) || (ft.test(e.nodeName) && e.href) ? 0 : -1;
                                  },
                              },
                          },
                          propFix: { for: "htmlFor", class: "className" },
                      }),
                      re.optSelected ||
                          (oe.propHooks.selected = {
                              get: function (e) {
                                  var t = e.parentNode;
                                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                              },
                              set: function (e) {
                                  var t = e.parentNode;
                                  t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                              },
                          }),
                      oe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                          oe.propFix[this.toLowerCase()] = this;
                      });
                  var pt = /[\t\r\n\f]/g;
                  oe.fn.extend({
                      addClass: function (e) {
                          var t,
                              n,
                              r,
                              i,
                              o,
                              s,
                              a,
                              u = 0;
                          if (oe.isFunction(e))
                              return this.each(function (t) {
                                  oe(this).addClass(e.call(this, t, W(this)));
                              });
                          if ("string" == typeof e && e)
                              for (t = e.match(we) || []; (n = this[u++]); )
                                  if (((i = W(n)), (r = 1 === n.nodeType && (" " + i + " ").replace(pt, " ")))) {
                                      for (s = 0; (o = t[s++]); ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                      (a = oe.trim(r)), i !== a && n.setAttribute("class", a);
                                  }
                          return this;
                      },
                      removeClass: function (e) {
                          var t,
                              n,
                              r,
                              i,
                              o,
                              s,
                              a,
                              u = 0;
                          if (oe.isFunction(e))
                              return this.each(function (t) {
                                  oe(this).removeClass(e.call(this, t, W(this)));
                              });
                          if (!arguments.length) return this.attr("class", "");
                          if ("string" == typeof e && e)
                              for (t = e.match(we) || []; (n = this[u++]); )
                                  if (((i = W(n)), (r = 1 === n.nodeType && (" " + i + " ").replace(pt, " ")))) {
                                      for (s = 0; (o = t[s++]); ) for (; r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
                                      (a = oe.trim(r)), i !== a && n.setAttribute("class", a);
                                  }
                          return this;
                      },
                      toggleClass: function (e, t) {
                          var n = typeof e;
                          return "boolean" == typeof t && "string" === n
                              ? t
                                  ? this.addClass(e)
                                  : this.removeClass(e)
                              : oe.isFunction(e)
                              ? this.each(function (n) {
                                    oe(this).toggleClass(e.call(this, n, W(this), t), t);
                                })
                              : this.each(function () {
                                    var t, r, i, o;
                                    if ("string" === n) for (r = 0, i = oe(this), o = e.match(we) || []; (t = o[r++]); ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                                    else
                                        (void 0 !== e && "boolean" !== n) ||
                                            ((t = W(this)), t && Ee.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ee.get(this, "__className__") || ""));
                                });
                      },
                      hasClass: function (e) {
                          var t,
                              n,
                              r = 0;
                          for (t = " " + e + " "; (n = this[r++]); ) if (1 === n.nodeType && (" " + W(n) + " ").replace(pt, " ").indexOf(t) > -1) return !0;
                          return !1;
                      },
                  });
                  var dt = /\r/g,
                      ht = /[\x20\t\r\n\f]+/g;
                  oe.fn.extend({
                      val: function (e) {
                          var t,
                              n,
                              r,
                              i = this[0];
                          {
                              if (arguments.length)
                                  return (
                                      (r = oe.isFunction(e)),
                                      this.each(function (n) {
                                          var i;
                                          1 === this.nodeType &&
                                              ((i = r ? e.call(this, n, oe(this).val()) : e),
                                              null == i
                                                  ? (i = "")
                                                  : "number" == typeof i
                                                  ? (i += "")
                                                  : oe.isArray(i) &&
                                                    (i = oe.map(i, function (e) {
                                                        return null == e ? "" : e + "";
                                                    })),
                                              (t = oe.valHooks[this.type] || oe.valHooks[this.nodeName.toLowerCase()]),
                                              (t && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                                      })
                                  );
                              if (i)
                                  return (
                                      (t = oe.valHooks[i.type] || oe.valHooks[i.nodeName.toLowerCase()]),
                                      t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : ((n = i.value), "string" == typeof n ? n.replace(dt, "") : null == n ? "" : n)
                                  );
                          }
                      },
                  }),
                      oe.extend({
                          valHooks: {
                              option: {
                                  get: function (e) {
                                      var t = oe.find.attr(e, "value");
                                      return null != t ? t : oe.trim(oe.text(e)).replace(ht, " ");
                                  },
                              },
                              select: {
                                  get: function (e) {
                                      for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
                                          if (((n = r[u]), (n.selected || u === i) && (re.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !oe.nodeName(n.parentNode, "optgroup")))) {
                                              if (((t = oe(n).val()), o)) return t;
                                              s.push(t);
                                          }
                                      return s;
                                  },
                                  set: function (e, t) {
                                      for (var n, r, i = e.options, o = oe.makeArray(t), s = i.length; s--; ) (r = i[s]), (r.selected = oe.inArray(oe.valHooks.option.get(r), o) > -1) && (n = !0);
                                      return n || (e.selectedIndex = -1), o;
                                  },
                              },
                          },
                      }),
                      oe.each(["radio", "checkbox"], function () {
                          (oe.valHooks[this] = {
                              set: function (e, t) {
                                  if (oe.isArray(t)) return (e.checked = oe.inArray(oe(e).val(), t) > -1);
                              },
                          }),
                              re.checkOn ||
                                  (oe.valHooks[this].get = function (e) {
                                      return null === e.getAttribute("value") ? "on" : e.value;
                                  });
                      });
                  var gt = /^(?:focusinfocus|focusoutblur)$/;
                  oe.extend(oe.event, {
                      trigger: function (t, n, r, i) {
                          var o,
                              s,
                              a,
                              u,
                              l,
                              c,
                              f,
                              p = [r || G],
                              d = ne.call(t, "type") ? t.type : t,
                              h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
                          if (
                              ((s = a = r = r || G),
                              3 !== r.nodeType &&
                                  8 !== r.nodeType &&
                                  !gt.test(d + oe.event.triggered) &&
                                  (d.indexOf(".") > -1 && ((h = d.split(".")), (d = h.shift()), h.sort()),
                                  (l = d.indexOf(":") < 0 && "on" + d),
                                  (t = t[oe.expando] ? t : new oe.Event(d, "object" == typeof t && t)),
                                  (t.isTrigger = i ? 2 : 3),
                                  (t.namespace = h.join(".")),
                                  (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                                  (t.result = void 0),
                                  t.target || (t.target = r),
                                  (n = null == n ? [t] : oe.makeArray(n, [t])),
                                  (f = oe.event.special[d] || {}),
                                  i || !f.trigger || f.trigger.apply(r, n) !== !1))
                          ) {
                              if (!i && !f.noBubble && !oe.isWindow(r)) {
                                  for (u = f.delegateType || d, gt.test(u + d) || (s = s.parentNode); s; s = s.parentNode) p.push(s), (a = s);
                                  a === (r.ownerDocument || G) && p.push(a.defaultView || a.parentWindow || e);
                              }
                              for (o = 0; (s = p[o++]) && !t.isPropagationStopped(); )
                                  (t.type = o > 1 ? u : f.bindType || d),
                                      (c = (Ee.get(s, "events") || {})[t.type] && Ee.get(s, "handle")),
                                      c && c.apply(s, n),
                                      (c = l && s[l]),
                                      c && c.apply && ke(s) && ((t.result = c.apply(s, n)), t.result === !1 && t.preventDefault());
                              return (
                                  (t.type = d),
                                  i ||
                                      t.isDefaultPrevented() ||
                                      (f._default && f._default.apply(p.pop(), n) !== !1) ||
                                      !ke(r) ||
                                      (l && oe.isFunction(r[d]) && !oe.isWindow(r) && ((a = r[l]), a && (r[l] = null), (oe.event.triggered = d), r[d](), (oe.event.triggered = void 0), a && (r[l] = a))),
                                  t.result
                              );
                          }
                      },
                      simulate: function (e, t, n) {
                          var r = oe.extend(new oe.Event(), n, { type: e, isSimulated: !0 });
                          oe.event.trigger(r, null, t);
                      },
                  }),
                      oe.fn.extend({
                          trigger: function (e, t) {
                              return this.each(function () {
                                  oe.event.trigger(e, t, this);
                              });
                          },
                          triggerHandler: function (e, t) {
                              var n = this[0];
                              if (n) return oe.event.trigger(e, t, n, !0);
                          },
                      }),
                      oe.each(
                          "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
                              " "
                          ),
                          function (e, t) {
                              oe.fn[t] = function (e, n) {
                                  return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                              };
                          }
                      ),
                      oe.fn.extend({
                          hover: function (e, t) {
                              return this.mouseenter(e).mouseleave(t || e);
                          },
                      }),
                      (re.focusin = "onfocusin" in e),
                      re.focusin ||
                          oe.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                              var n = function (e) {
                                  oe.event.simulate(t, e.target, oe.event.fix(e));
                              };
                              oe.event.special[t] = {
                                  setup: function () {
                                      var r = this.ownerDocument || this,
                                          i = Ee.access(r, t);
                                      i || r.addEventListener(e, n, !0), Ee.access(r, t, (i || 0) + 1);
                                  },
                                  teardown: function () {
                                      var r = this.ownerDocument || this,
                                          i = Ee.access(r, t) - 1;
                                      i ? Ee.access(r, t, i) : (r.removeEventListener(e, n, !0), Ee.remove(r, t));
                                  },
                              };
                          });
                  var vt = e.location,
                      mt = oe.now(),
                      yt = /\?/;
                  (oe.parseJSON = function (e) {
                      return JSON.parse(e + "");
                  }),
                      (oe.parseXML = function (t) {
                          var n;
                          if (!t || "string" != typeof t) return null;
                          try {
                              n = new e.DOMParser().parseFromString(t, "text/xml");
                          } catch (e) {
                              n = void 0;
                          }
                          return (n && !n.getElementsByTagName("parsererror").length) || oe.error("Invalid XML: " + t), n;
                      });
                  var xt = /#.*$/,
                      bt = /([?&])_=[^&]*/,
                      wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                      Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                      Ct = /^(?:GET|HEAD)$/,
                      kt = /^\/\//,
                      Et = {},
                      Nt = {},
                      St = "*/".concat("*"),
                      jt = G.createElement("a");
                  (jt.href = vt.href),
                      oe.extend({
                          active: 0,
                          lastModified: {},
                          etag: {},
                          ajaxSettings: {
                              url: vt.href,
                              type: "GET",
                              isLocal: Tt.test(vt.protocol),
                              global: !0,
                              processData: !0,
                              async: !0,
                              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                              accepts: { "*": St, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                              responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                              converters: { "* text": String, "text html": !0, "text json": oe.parseJSON, "text xml": oe.parseXML },
                              flatOptions: { url: !0, context: !0 },
                          },
                          ajaxSetup: function (e, t) {
                              return t ? _(_(e, oe.ajaxSettings), t) : _(oe.ajaxSettings, e);
                          },
                          ajaxPrefilter: $(Et),
                          ajaxTransport: $(Nt),
                          ajax: function (t, n) {
                              function r(t, n, r, a) {
                                  var l,
                                      f,
                                      y,
                                      x,
                                      w,
                                      C = n;
                                  2 !== b &&
                                      ((b = 2),
                                      u && e.clearTimeout(u),
                                      (i = void 0),
                                      (s = a || ""),
                                      (T.readyState = t > 0 ? 4 : 0),
                                      (l = (t >= 200 && t < 300) || 304 === t),
                                      r && (x = X(p, T, r)),
                                      (x = z(p, x, T, l)),
                                      l
                                          ? (p.ifModified && ((w = T.getResponseHeader("Last-Modified")), w && (oe.lastModified[o] = w), (w = T.getResponseHeader("etag")), w && (oe.etag[o] = w)),
                                            204 === t || "HEAD" === p.type ? (C = "nocontent") : 304 === t ? (C = "notmodified") : ((C = x.state), (f = x.data), (y = x.error), (l = !y)))
                                          : ((y = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
                                      (T.status = t),
                                      (T.statusText = (n || C) + ""),
                                      l ? g.resolveWith(d, [f, C, T]) : g.rejectWith(d, [T, C, y]),
                                      T.statusCode(m),
                                      (m = void 0),
                                      c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [T, p, l ? f : y]),
                                      v.fireWith(d, [T, C]),
                                      c && (h.trigger("ajaxComplete", [T, p]), --oe.active || oe.event.trigger("ajaxStop")));
                              }
                              "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                              var i,
                                  o,
                                  s,
                                  a,
                                  u,
                                  l,
                                  c,
                                  f,
                                  p = oe.ajaxSetup({}, n),
                                  d = p.context || p,
                                  h = p.context && (d.nodeType || d.jquery) ? oe(d) : oe.event,
                                  g = oe.Deferred(),
                                  v = oe.Callbacks("once memory"),
                                  m = p.statusCode || {},
                                  y = {},
                                  x = {},
                                  b = 0,
                                  w = "canceled",
                                  T = {
                                      readyState: 0,
                                      getResponseHeader: function (e) {
                                          var t;
                                          if (2 === b) {
                                              if (!a) for (a = {}; (t = wt.exec(s)); ) a[t[1].toLowerCase()] = t[2];
                                              t = a[e.toLowerCase()];
                                          }
                                          return null == t ? null : t;
                                      },
                                      getAllResponseHeaders: function () {
                                          return 2 === b ? s : null;
                                      },
                                      setRequestHeader: function (e, t) {
                                          var n = e.toLowerCase();
                                          return b || ((e = x[n] = x[n] || e), (y[e] = t)), this;
                                      },
                                      overrideMimeType: function (e) {
                                          return b || (p.mimeType = e), this;
                                      },
                                      statusCode: function (e) {
                                          var t;
                                          if (e)
                                              if (b < 2) for (t in e) m[t] = [m[t], e[t]];
                                              else T.always(e[T.status]);
                                          return this;
                                      },
                                      abort: function (e) {
                                          var t = e || w;
                                          return i && i.abort(t), r(0, t), this;
                                      },
                                  };
                              if (
                                  ((g.promise(T).complete = v.add),
                                  (T.success = T.done),
                                  (T.error = T.fail),
                                  (p.url = ((t || p.url || vt.href) + "").replace(xt, "").replace(kt, vt.protocol + "//")),
                                  (p.type = n.method || n.type || p.method || p.type),
                                  (p.dataTypes = oe
                                      .trim(p.dataType || "*")
                                      .toLowerCase()
                                      .match(we) || [""]),
                                  null == p.crossDomain)
                              ) {
                                  l = G.createElement("a");
                                  try {
                                      (l.href = p.url), (l.href = l.href), (p.crossDomain = jt.protocol + "//" + jt.host != l.protocol + "//" + l.host);
                                  } catch (e) {
                                      p.crossDomain = !0;
                                  }
                              }
                              if ((p.data && p.processData && "string" != typeof p.data && (p.data = oe.param(p.data, p.traditional)), B(Et, p, n, T), 2 === b)) return T;
                              (c = oe.event && p.global),
                                  c && 0 === oe.active++ && oe.event.trigger("ajaxStart"),
                                  (p.type = p.type.toUpperCase()),
                                  (p.hasContent = !Ct.test(p.type)),
                                  (o = p.url),
                                  p.hasContent ||
                                      (p.data && ((o = p.url += (yt.test(o) ? "&" : "?") + p.data), delete p.data), p.cache === !1 && (p.url = bt.test(o) ? o.replace(bt, "$1_=" + mt++) : o + (yt.test(o) ? "&" : "?") + "_=" + mt++)),
                                  p.ifModified && (oe.lastModified[o] && T.setRequestHeader("If-Modified-Since", oe.lastModified[o]), oe.etag[o] && T.setRequestHeader("If-None-Match", oe.etag[o])),
                                  ((p.data && p.hasContent && p.contentType !== !1) || n.contentType) && T.setRequestHeader("Content-Type", p.contentType),
                                  T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + St + "; q=0.01" : "") : p.accepts["*"]);
                              for (f in p.headers) T.setRequestHeader(f, p.headers[f]);
                              if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === b)) return T.abort();
                              w = "abort";
                              for (f in { success: 1, error: 1, complete: 1 }) T[f](p[f]);
                              if ((i = B(Nt, p, n, T))) {
                                  if (((T.readyState = 1), c && h.trigger("ajaxSend", [T, p]), 2 === b)) return T;
                                  p.async &&
                                      p.timeout > 0 &&
                                      (u = e.setTimeout(function () {
                                          T.abort("timeout");
                                      }, p.timeout));
                                  try {
                                      (b = 1), i.send(y, r);
                                  } catch (e) {
                                      if (!(b < 2)) throw e;
                                      r(-1, e);
                                  }
                              } else r(-1, "No Transport");
                              return T;
                          },
                          getJSON: function (e, t, n) {
                              return oe.get(e, t, n, "json");
                          },
                          getScript: function (e, t) {
                              return oe.get(e, void 0, t, "script");
                          },
                      }),
                      oe.each(["get", "post"], function (e, t) {
                          oe[t] = function (e, n, r, i) {
                              return oe.isFunction(n) && ((i = i || r), (r = n), (n = void 0)), oe.ajax(oe.extend({ url: e, type: t, dataType: i, data: n, success: r }, oe.isPlainObject(e) && e));
                          };
                      }),
                      (oe._evalUrl = function (e) {
                          return oe.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
                      }),
                      oe.fn.extend({
                          wrapAll: function (e) {
                              var t;
                              return oe.isFunction(e)
                                  ? this.each(function (t) {
                                        oe(this).wrapAll(e.call(this, t));
                                    })
                                  : (this[0] &&
                                        ((t = oe(e, this[0].ownerDocument).eq(0).clone(!0)),
                                        this[0].parentNode && t.insertBefore(this[0]),
                                        t
                                            .map(function () {
                                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                                return e;
                                            })
                                            .append(this)),
                                    this);
                          },
                          wrapInner: function (e) {
                              return oe.isFunction(e)
                                  ? this.each(function (t) {
                                        oe(this).wrapInner(e.call(this, t));
                                    })
                                  : this.each(function () {
                                        var t = oe(this),
                                            n = t.contents();
                                        n.length ? n.wrapAll(e) : t.append(e);
                                    });
                          },
                          wrap: function (e) {
                              var t = oe.isFunction(e);
                              return this.each(function (n) {
                                  oe(this).wrapAll(t ? e.call(this, n) : e);
                              });
                          },
                          unwrap: function () {
                              return this.parent()
                                  .each(function () {
                                      oe.nodeName(this, "body") || oe(this).replaceWith(this.childNodes);
                                  })
                                  .end();
                          },
                      }),
                      (oe.expr.filters.hidden = function (e) {
                          return !oe.expr.filters.visible(e);
                      }),
                      (oe.expr.filters.visible = function (e) {
                          return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0;
                      });
                  var Dt = /%20/g,
                      At = /\[\]$/,
                      qt = /\r?\n/g,
                      Lt = /^(?:submit|button|image|reset|file)$/i,
                      Ht = /^(?:input|select|textarea|keygen)/i;
                  (oe.param = function (e, t) {
                      var n,
                          r = [],
                          i = function (e, t) {
                              (t = oe.isFunction(t) ? t() : null == t ? "" : t), (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
                          };
                      if ((void 0 === t && (t = oe.ajaxSettings && oe.ajaxSettings.traditional), oe.isArray(e) || (e.jquery && !oe.isPlainObject(e))))
                          oe.each(e, function () {
                              i(this.name, this.value);
                          });
                      else for (n in e) U(n, e[n], t, i);
                      return r.join("&").replace(Dt, "+");
                  }),
                      oe.fn.extend({
                          serialize: function () {
                              return oe.param(this.serializeArray());
                          },
                          serializeArray: function () {
                              return this.map(function () {
                                  var e = oe.prop(this, "elements");
                                  return e ? oe.makeArray(e) : this;
                              })
                                  .filter(function () {
                                      var e = this.type;
                                      return this.name && !oe(this).is(":disabled") && Ht.test(this.nodeName) && !Lt.test(e) && (this.checked || !He.test(e));
                                  })
                                  .map(function (e, t) {
                                      var n = oe(this).val();
                                      return null == n
                                          ? null
                                          : oe.isArray(n)
                                          ? oe.map(n, function (e) {
                                                return { name: t.name, value: e.replace(qt, "\r\n") };
                                            })
                                          : { name: t.name, value: n.replace(qt, "\r\n") };
                                  })
                                  .get();
                          },
                      }),
                      (oe.ajaxSettings.xhr = function () {
                          try {
                              return new e.XMLHttpRequest();
                          } catch (e) {}
                      });
                  var Ot = { 0: 200, 1223: 204 },
                      Ft = oe.ajaxSettings.xhr();
                  (re.cors = !!Ft && "withCredentials" in Ft),
                      (re.ajax = Ft = !!Ft),
                      oe.ajaxTransport(function (t) {
                          var n, r;
                          if (re.cors || (Ft && !t.crossDomain))
                              return {
                                  send: function (i, o) {
                                      var s,
                                          a = t.xhr();
                                      if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                                      t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                                      for (s in i) a.setRequestHeader(s, i[s]);
                                      (n = function (e) {
                                          return function () {
                                              n &&
                                                  ((n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null),
                                                  "abort" === e
                                                      ? a.abort()
                                                      : "error" === e
                                                      ? "number" != typeof a.status
                                                          ? o(0, "error")
                                                          : o(a.status, a.statusText)
                                                      : o(
                                                            Ot[a.status] || a.status,
                                                            a.statusText,
                                                            "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText },
                                                            a.getAllResponseHeaders()
                                                        ));
                                          };
                                      }),
                                          (a.onload = n()),
                                          (r = a.onerror = n("error")),
                                          void 0 !== a.onabort
                                              ? (a.onabort = r)
                                              : (a.onreadystatechange = function () {
                                                    4 === a.readyState &&
                                                        e.setTimeout(function () {
                                                            n && r();
                                                        });
                                                }),
                                          (n = n("abort"));
                                      try {
                                          a.send((t.hasContent && t.data) || null);
                                      } catch (e) {
                                          if (n) throw e;
                                      }
                                  },
                                  abort: function () {
                                      n && n();
                                  },
                              };
                      }),
                      oe.ajaxSetup({
                          accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                          contents: { script: /\b(?:java|ecma)script\b/ },
                          converters: {
                              "text script": function (e) {
                                  return oe.globalEval(e), e;
                              },
                          },
                      }),
                      oe.ajaxPrefilter("script", function (e) {
                          void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                      }),
                      oe.ajaxTransport("script", function (e) {
                          if (e.crossDomain) {
                              var t, n;
                              return {
                                  send: function (r, i) {
                                      (t = oe("<script>")
                                          .prop({ charset: e.scriptCharset, src: e.url })
                                          .on(
                                              "load error",
                                              (n = function (e) {
                                                  t.remove(), (n = null), e && i("error" === e.type ? 404 : 200, e.type);
                                              })
                                          )),
                                          G.head.appendChild(t[0]);
                                  },
                                  abort: function () {
                                      n && n();
                                  },
                              };
                          }
                      });
                  var Pt = [],
                      Rt = /(=)\?(?=&|$)|\?\?/;
                  oe.ajaxSetup({
                      jsonp: "callback",
                      jsonpCallback: function () {
                          var e = Pt.pop() || oe.expando + "_" + mt++;
                          return (this[e] = !0), e;
                      },
                  }),
                      oe.ajaxPrefilter("json jsonp", function (t, n, r) {
                          var i,
                              o,
                              s,
                              a = t.jsonp !== !1 && (Rt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(t.data) && "data");
                          if (a || "jsonp" === t.dataTypes[0])
                              return (
                                  (i = t.jsonpCallback = oe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                                  a ? (t[a] = t[a].replace(Rt, "$1" + i)) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                                  (t.converters["script json"] = function () {
                                      return s || oe.error(i + " was not called"), s[0];
                                  }),
                                  (t.dataTypes[0] = "json"),
                                  (o = e[i]),
                                  (e[i] = function () {
                                      s = arguments;
                                  }),
                                  r.always(function () {
                                      void 0 === o ? oe(e).removeProp(i) : (e[i] = o), t[i] && ((t.jsonpCallback = n.jsonpCallback), Pt.push(i)), s && oe.isFunction(o) && o(s[0]), (s = o = void 0);
                                  }),
                                  "script"
                              );
                      }),
                      (oe.parseHTML = function (e, t, n) {
                          if (!e || "string" != typeof e) return null;
                          "boolean" == typeof t && ((n = t), (t = !1)), (t = t || G);
                          var r = he.exec(e),
                              i = !n && [];
                          return r ? [t.createElement(r[1])] : ((r = p([e], t, i)), i && i.length && oe(i).remove(), oe.merge([], r.childNodes));
                      });
                  var Mt = oe.fn.load;
                  (oe.fn.load = function (e, t, n) {
                      if ("string" != typeof e && Mt) return Mt.apply(this, arguments);
                      var r,
                          i,
                          o,
                          s = this,
                          a = e.indexOf(" ");
                      return (
                          a > -1 && ((r = oe.trim(e.slice(a))), (e = e.slice(0, a))),
                          oe.isFunction(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                          s.length > 0 &&
                              oe
                                  .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                                  .done(function (e) {
                                      (o = arguments), s.html(r ? oe("<div>").append(oe.parseHTML(e)).find(r) : e);
                                  })
                                  .always(
                                      n &&
                                          function (e, t) {
                                              s.each(function () {
                                                  n.apply(this, o || [e.responseText, t, e]);
                                              });
                                          }
                                  ),
                          this
                      );
                  }),
                      oe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                          oe.fn[t] = function (e) {
                              return this.on(t, e);
                          };
                      }),
                      (oe.expr.filters.animated = function (e) {
                          return oe.grep(oe.timers, function (t) {
                              return e === t.elem;
                          }).length;
                      }),
                      (oe.offset = {
                          setOffset: function (e, t, n) {
                              var r,
                                  i,
                                  o,
                                  s,
                                  a,
                                  u,
                                  l,
                                  c = oe.css(e, "position"),
                                  f = oe(e),
                                  p = {};
                              "static" === c && (e.style.position = "relative"),
                                  (a = f.offset()),
                                  (o = oe.css(e, "top")),
                                  (u = oe.css(e, "left")),
                                  (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1),
                                  l ? ((r = f.position()), (s = r.top), (i = r.left)) : ((s = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                                  oe.isFunction(t) && (t = t.call(e, n, oe.extend({}, a))),
                                  null != t.top && (p.top = t.top - a.top + s),
                                  null != t.left && (p.left = t.left - a.left + i),
                                  "using" in t ? t.using.call(e, p) : f.css(p);
                          },
                      }),
                      oe.fn.extend({
                          offset: function (e) {
                              if (arguments.length)
                                  return void 0 === e
                                      ? this
                                      : this.each(function (t) {
                                            oe.offset.setOffset(this, e, t);
                                        });
                              var t,
                                  n,
                                  r = this[0],
                                  i = { top: 0, left: 0 },
                                  o = r && r.ownerDocument;
                              if (o) return (t = o.documentElement), oe.contains(t, r) ? ((i = r.getBoundingClientRect()), (n = V(o)), { top: i.top + n.pageYOffset - t.clientTop, left: i.left + n.pageXOffset - t.clientLeft }) : i;
                          },
                          position: function () {
                              if (this[0]) {
                                  var e,
                                      t,
                                      n = this[0],
                                      r = { top: 0, left: 0 };
                                  return (
                                      "fixed" === oe.css(n, "position")
                                          ? (t = n.getBoundingClientRect())
                                          : ((e = this.offsetParent()), (t = this.offset()), oe.nodeName(e[0], "html") || (r = e.offset()), (r.top += oe.css(e[0], "borderTopWidth", !0)), (r.left += oe.css(e[0], "borderLeftWidth", !0))),
                                      { top: t.top - r.top - oe.css(n, "marginTop", !0), left: t.left - r.left - oe.css(n, "marginLeft", !0) }
                                  );
                              }
                          },
                          offsetParent: function () {
                              return this.map(function () {
                                  for (var e = this.offsetParent; e && "static" === oe.css(e, "position"); ) e = e.offsetParent;
                                  return e || Ke;
                              });
                          },
                      }),
                      oe.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                          var n = "pageYOffset" === t;
                          oe.fn[e] = function (r) {
                              return Ce(
                                  this,
                                  function (e, r, i) {
                                      var o = V(e);
                                      return void 0 === i ? (o ? o[t] : e[r]) : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i));
                                  },
                                  e,
                                  r,
                                  arguments.length
                              );
                          };
                      }),
                      oe.each(["top", "left"], function (e, t) {
                          oe.cssHooks[t] = S(re.pixelPosition, function (e, n) {
                              if (n) return (n = N(e, t)), Ge.test(n) ? oe(e).position()[t] + "px" : n;
                          });
                      }),
                      oe.each({ Height: "height", Width: "width" }, function (e, t) {
                          oe.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                              oe.fn[r] = function (r, i) {
                                  var o = arguments.length && (n || "boolean" != typeof r),
                                      s = n || (r === !0 || i === !0 ? "margin" : "border");
                                  return Ce(
                                      this,
                                      function (t, n, r) {
                                          var i;
                                          return oe.isWindow(t)
                                              ? t.document.documentElement["client" + e]
                                              : 9 === t.nodeType
                                              ? ((i = t.documentElement), Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e]))
                                              : void 0 === r
                                              ? oe.css(t, n, s)
                                              : oe.style(t, n, r, s);
                                      },
                                      t,
                                      o ? r : void 0,
                                      o,
                                      null
                                  );
                              };
                          });
                      }),
                      oe.fn.extend({
                          bind: function (e, t, n) {
                              return this.on(e, null, t, n);
                          },
                          unbind: function (e, t) {
                              return this.off(e, null, t);
                          },
                          delegate: function (e, t, n, r) {
                              return this.on(t, e, n, r);
                          },
                          undelegate: function (e, t, n) {
                              return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                          },
                          size: function () {
                              return this.length;
                          },
                      }),
                      (oe.fn.andSelf = oe.fn.addBack),
                      "function" == typeof define &&
                          define.amd &&
                          define("jquery", [], function () {
                              return oe;
                          });
                  var It = e.jQuery,
                      Wt = e.$;
                  return (
                      (oe.noConflict = function (t) {
                          return e.$ === oe && (e.$ = Wt), t && e.jQuery === oe && (e.jQuery = It), oe;
                      }),
                      t || (e.jQuery = e.$ = oe),
                      oe
                  );
              });
          },
          {},
      ],
      2: [
          function (require, module, exports) {
              var LZString = (function () {
                  function o(o, r) {
                      if (!t[o]) {
                          t[o] = {};
                          for (var n = 0; n < o.length; n++) t[o][o.charAt(n)] = n;
                      }
                      return t[o][r];
                  }
                  var r = String.fromCharCode,
                      n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                      e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
                      t = {},
                      i = {
                          compressToBase64: function (o) {
                              if (null == o) return "";
                              var r = i._compress(o, 6, function (o) {
                                  return n.charAt(o);
                              });
                              switch (r.length % 4) {
                                  default:
                                  case 0:
                                      return r;
                                  case 1:
                                      return r + "===";
                                  case 2:
                                      return r + "==";
                                  case 3:
                                      return r + "=";
                              }
                          },
                          decompressFromBase64: function (r) {
                              return null == r
                                  ? ""
                                  : "" == r
                                  ? null
                                  : i._decompress(r.length, 32, function (e) {
                                        return o(n, r.charAt(e));
                                    });
                          },
                          compressToUTF16: function (o) {
                              return null == o
                                  ? ""
                                  : i._compress(o, 15, function (o) {
                                        return r(o + 32);
                                    }) + " ";
                          },
                          decompressFromUTF16: function (o) {
                              return null == o
                                  ? ""
                                  : "" == o
                                  ? null
                                  : i._decompress(o.length, 16384, function (r) {
                                        return o.charCodeAt(r) - 32;
                                    });
                          },
                          compressToUint8Array: function (o) {
                              for (var r = i.compress(o), n = new Uint8Array(2 * r.length), e = 0, t = r.length; e < t; e++) {
                                  var s = r.charCodeAt(e);
                                  (n[2 * e] = s >>> 8), (n[2 * e + 1] = s % 256);
                              }
                              return n;
                          },
                          decompressFromUint8Array: function (o) {
                              if (null === o || void 0 === o) return i.decompress(o);
                              for (var n = new Array(o.length / 2), e = 0, t = n.length; e < t; e++) n[e] = 256 * o[2 * e] + o[2 * e + 1];
                              var s = [];
                              return (
                                  n.forEach(function (o) {
                                      s.push(r(o));
                                  }),
                                  i.decompress(s.join(""))
                              );
                          },
                          compressToEncodedURIComponent: function (o) {
                              return null == o
                                  ? ""
                                  : i._compress(o, 6, function (o) {
                                        return e.charAt(o);
                                    });
                          },
                          decompressFromEncodedURIComponent: function (r) {
                              return null == r
                                  ? ""
                                  : "" == r
                                  ? null
                                  : ((r = r.replace(/ /g, "+")),
                                    i._decompress(r.length, 32, function (n) {
                                        return o(e, r.charAt(n));
                                    }));
                          },
                          compress: function (o) {
                              return i._compress(o, 16, function (o) {
                                  return r(o);
                              });
                          },
                          _compress: function (o, r, n) {
                              if (null == o) return "";
                              var e,
                                  t,
                                  i,
                                  s = {},
                                  p = {},
                                  u = "",
                                  c = "",
                                  a = "",
                                  l = 2,
                                  f = 3,
                                  h = 2,
                                  d = [],
                                  m = 0,
                                  v = 0;
                              for (i = 0; i < o.length; i += 1)
                                  if (((u = o.charAt(i)), Object.prototype.hasOwnProperty.call(s, u) || ((s[u] = f++), (p[u] = !0)), (c = a + u), Object.prototype.hasOwnProperty.call(s, c))) a = c;
                                  else {
                                      if (Object.prototype.hasOwnProperty.call(p, a)) {
                                          if (a.charCodeAt(0) < 256) {
                                              for (e = 0; e < h; e++) (m <<= 1), v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++;
                                              for (t = a.charCodeAt(0), e = 0; e < 8; e++) (m = (m << 1) | (1 & t)), v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++, (t >>= 1);
                                          } else {
                                              for (t = 1, e = 0; e < h; e++) (m = (m << 1) | t), v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++, (t = 0);
                                              for (t = a.charCodeAt(0), e = 0; e < 16; e++) (m = (m << 1) | (1 & t)), v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++, (t >>= 1);
                                          }
                                          l--, 0 == l && ((l = Math.pow(2, h)), h++), delete p[a];
                                      } else for (t = s[a], e = 0; e < h; e++) (m = (m << 1) | (1 & t)), v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++, (t >>= 1);
                                      l--, 0 == l && ((l = Math.pow(2, h)), h++), (s[c] = f++), (a = String(u));
                                  }
                              if ("" !== a) {
                                  if (Object.prototype.hasOwnProperty.call(p, a)) {
                                      if (a.charCodeAt(0) < 256) {
                                          for (e = 0; e < h; e++) (m <<= 1), v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++;
                                          for (t = a.charCodeAt(0), e = 0; e < 8; e++) (m = (m << 1) | (1 & t)), v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++, (t >>= 1);
                                      } else {
                                          for (t = 1, e = 0; e < h; e++) (m = (m << 1) | t), v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++, (t = 0);
                                          for (t = a.charCodeAt(0), e = 0; e < 16; e++) (m = (m << 1) | (1 & t)), v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++, (t >>= 1);
                                      }
                                      l--, 0 == l && ((l = Math.pow(2, h)), h++), delete p[a];
                                  } else for (t = s[a], e = 0; e < h; e++) (m = (m << 1) | (1 & t)), v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++, (t >>= 1);
                                  l--, 0 == l && ((l = Math.pow(2, h)), h++);
                              }
                              for (t = 2, e = 0; e < h; e++) (m = (m << 1) | (1 & t)), v == r - 1 ? ((v = 0), d.push(n(m)), (m = 0)) : v++, (t >>= 1);
                              for (;;) {
                                  if (((m <<= 1), v == r - 1)) {
                                      d.push(n(m));
                                      break;
                                  }
                                  v++;
                              }
                              return d.join("");
                          },
                          decompress: function (o) {
                              return null == o
                                  ? ""
                                  : "" == o
                                  ? null
                                  : i._decompress(o.length, 32768, function (r) {
                                        return o.charCodeAt(r);
                                    });
                          },
                          _decompress: function (o, n, e) {
                              var t,
                                  i,
                                  s,
                                  p,
                                  u,
                                  c,
                                  a,
                                  l,
                                  f = [],
                                  h = 4,
                                  d = 4,
                                  m = 3,
                                  v = "",
                                  w = [],
                                  A = { val: e(0), position: n, index: 1 };
                              for (i = 0; i < 3; i += 1) f[i] = i;
                              for (p = 0, c = Math.pow(2, 2), a = 1; a != c; ) (u = A.val & A.position), (A.position >>= 1), 0 == A.position && ((A.position = n), (A.val = e(A.index++))), (p |= (u > 0 ? 1 : 0) * a), (a <<= 1);
                              switch ((t = p)) {
                                  case 0:
                                      for (p = 0, c = Math.pow(2, 8), a = 1; a != c; ) (u = A.val & A.position), (A.position >>= 1), 0 == A.position && ((A.position = n), (A.val = e(A.index++))), (p |= (u > 0 ? 1 : 0) * a), (a <<= 1);
                                      l = r(p);
                                      break;
                                  case 1:
                                      for (p = 0, c = Math.pow(2, 16), a = 1; a != c; ) (u = A.val & A.position), (A.position >>= 1), 0 == A.position && ((A.position = n), (A.val = e(A.index++))), (p |= (u > 0 ? 1 : 0) * a), (a <<= 1);
                                      l = r(p);
                                      break;
                                  case 2:
                                      return "";
                              }
                              for (f[3] = l, s = l, w.push(l); ; ) {
                                  if (A.index > o) return "";
                                  for (p = 0, c = Math.pow(2, m), a = 1; a != c; ) (u = A.val & A.position), (A.position >>= 1), 0 == A.position && ((A.position = n), (A.val = e(A.index++))), (p |= (u > 0 ? 1 : 0) * a), (a <<= 1);
                                  switch ((l = p)) {
                                      case 0:
                                          for (p = 0, c = Math.pow(2, 8), a = 1; a != c; ) (u = A.val & A.position), (A.position >>= 1), 0 == A.position && ((A.position = n), (A.val = e(A.index++))), (p |= (u > 0 ? 1 : 0) * a), (a <<= 1);
                                          (f[d++] = r(p)), (l = d - 1), h--;
                                          break;
                                      case 1:
                                          for (p = 0, c = Math.pow(2, 16), a = 1; a != c; )
                                              (u = A.val & A.position), (A.position >>= 1), 0 == A.position && ((A.position = n), (A.val = e(A.index++))), (p |= (u > 0 ? 1 : 0) * a), (a <<= 1);
                                          (f[d++] = r(p)), (l = d - 1), h--;
                                          break;
                                      case 2:
                                          return w.join("");
                                  }
                                  if ((0 == h && ((h = Math.pow(2, m)), m++), f[l])) v = f[l];
                                  else {
                                      if (l !== d) return null;
                                      v = s + s.charAt(0);
                                  }
                                  w.push(v), (f[d++] = s + v.charAt(0)), h--, (s = v), 0 == h && ((h = Math.pow(2, m)), m++);
                              }
                          },
                      };
                  return i;
              })();
              "function" == typeof define && define.amd
                  ? define(function () {
                        return LZString;
                    })
                  : "undefined" != typeof module && null != module && (module.exports = LZString);
          },
          {},
      ],
      3: [
          function (require, module, exports) {
              (function () {
                  function e(e) {
                      (this.tokens = []), (this.tokens.links = {}), (this.options = e || a.defaults), (this.rules = p.normal), this.options.gfm && (this.options.tables ? (this.rules = p.tables) : (this.rules = p.gfm));
                  }
                  function t(e, t) {
                      if (((this.options = t || a.defaults), (this.links = e), (this.rules = u.normal), (this.renderer = this.options.renderer || new n()), (this.renderer.options = this.options), !this.links))
                          throw new Error("Tokens array requires a `links` property.");
                      this.options.gfm ? (this.options.breaks ? (this.rules = u.breaks) : (this.rules = u.gfm)) : this.options.pedantic && (this.rules = u.pedantic);
                  }
                  function n(e) {
                      this.options = e || {};
                  }
                  function r(e) {
                      (this.tokens = []), (this.token = null), (this.options = e || a.defaults), (this.options.renderer = this.options.renderer || new n()), (this.renderer = this.options.renderer), (this.renderer.options = this.options);
                  }
                  function s(e, t) {
                      return e
                          .replace(t ? /&/g : /&(?!#?\w+;)/g, "&amp;")
                          .replace(/</g, "&lt;")
                          .replace(/>/g, "&gt;")
                          .replace(/"/g, "&quot;")
                          .replace(/'/g, "&#39;");
                  }
                  function i(e) {
                      return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function (e, t) {
                          return (t = t.toLowerCase()), "colon" === t ? ":" : "#" === t.charAt(0) ? ("x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1))) : "";
                      });
                  }
                  function l(e, t) {
                      return (
                          (e = e.source),
                          (t = t || ""),
                          function n(r, s) {
                              return r ? ((s = s.source || s), (s = s.replace(/(^|[^\[])\^/g, "$1")), (e = e.replace(r, s)), n) : new RegExp(e, t);
                          }
                      );
                  }
                  function o() {}
                  function h(e) {
                      for (var t, n, r = 1; r < arguments.length; r++) {
                          t = arguments[r];
                          for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                      }
                      return e;
                  }
                  function a(t, n, i) {
                      if (i || "function" == typeof n) {
                          i || ((i = n), (n = null)), (n = h({}, a.defaults, n || {}));
                          var l,
                              o,
                              p = n.highlight,
                              u = 0;
                          try {
                              l = e.lex(t, n);
                          } catch (e) {
                              return i(e);
                          }
                          o = l.length;
                          var c = function (e) {
                              if (e) return (n.highlight = p), i(e);
                              var t;
                              try {
                                  t = r.parse(l, n);
                              } catch (t) {
                                  e = t;
                              }
                              return (n.highlight = p), e ? i(e) : i(null, t);
                          };
                          if (!p || p.length < 3) return c();
                          if ((delete n.highlight, !o)) return c();
                          for (; u < l.length; u++)
                              !(function (e) {
                                  return "code" !== e.type
                                      ? --o || c()
                                      : p(e.text, e.lang, function (t, n) {
                                            return t ? c(t) : null == n || n === e.text ? --o || c() : ((e.text = n), (e.escaped = !0), void (--o || c()));
                                        });
                              })(l[u]);
                      } else
                          try {
                              return n && (n = h({}, a.defaults, n)), r.parse(e.lex(t, n), n);
                          } catch (e) {
                              if (((e.message += "\nPlease report this to https://github.com/chjj/marked."), (n || a.defaults).silent)) return "<p>An error occured:</p><pre>" + s(e.message + "", !0) + "</pre>";
                              throw e;
                          }
                  }
                  var p = {
                      newline: /^\n+/,
                      code: /^( {4}[^\n]+\n*)+/,
                      fences: o,
                      hr: /^( *[-*_]){3,} *(?:\n+|$)/,
                      heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
                      nptable: o,
                      lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
                      blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
                      list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                      html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
                      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
                      table: o,
                      paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
                      text: /^[^\n]+/,
                  };
                  (p.bullet = /(?:[*+-]|\d+\.)/),
                      (p.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/),
                      (p.item = l(p.item, "gm")(/bull/g, p.bullet)()),
                      (p.list = l(p.list)(/bull/g, p.bullet)("hr", "\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def", "\\n+(?=" + p.def.source + ")")()),
                      (p.blockquote = l(p.blockquote)("def", p.def)()),
                      (p._tag = "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b"),
                      (p.html = l(p.html)("comment", /<!--[\s\S]*?-->/)("closed", /<(tag)[\s\S]+?<\/\1>/)("closing", /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g, p._tag)()),
                      (p.paragraph = l(p.paragraph)("hr", p.hr)("heading", p.heading)("lheading", p.lheading)("blockquote", p.blockquote)("tag", "<" + p._tag)("def", p.def)()),
                      (p.normal = h({}, p)),
                      (p.gfm = h({}, p.normal, { fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/, paragraph: /^/, heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/ })),
                      (p.gfm.paragraph = l(p.paragraph)("(?!", "(?!" + p.gfm.fences.source.replace("\\1", "\\2") + "|" + p.list.source.replace("\\1", "\\3") + "|")()),
                      (p.tables = h({}, p.gfm, { nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/, table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/ })),
                      (e.rules = p),
                      (e.lex = function (t, n) {
                          var r = new e(n);
                          return r.lex(t);
                      }),
                      (e.prototype.lex = function (e) {
                          return (
                              (e = e
                                  .replace(/\r\n|\r/g, "\n")
                                  .replace(/\t/g, "    ")
                                  .replace(/\u00a0/g, " ")
                                  .replace(/\u2424/g, "\n")),
                              this.token(e, !0)
                          );
                      }),
                      (e.prototype.token = function (e, t, n) {
                          for (var r, s, i, l, o, h, a, u, c, e = e.replace(/^ +$/gm, ""); e; )
                              if (((i = this.rules.newline.exec(e)) && ((e = e.substring(i[0].length)), i[0].length > 1 && this.tokens.push({ type: "space" })), (i = this.rules.code.exec(e))))
                                  (e = e.substring(i[0].length)), (i = i[0].replace(/^ {4}/gm, "")), this.tokens.push({ type: "code", text: this.options.pedantic ? i : i.replace(/\n+$/, "") });
                              else if ((i = this.rules.fences.exec(e))) (e = e.substring(i[0].length)), this.tokens.push({ type: "code", lang: i[2], text: i[3] || "" });
                              else if ((i = this.rules.heading.exec(e))) (e = e.substring(i[0].length)), this.tokens.push({ type: "heading", depth: i[1].length, text: i[2] });
                              else if (t && (i = this.rules.nptable.exec(e))) {
                                  for (
                                      e = e.substring(i[0].length),
                                          h = { type: "table", header: i[1].replace(/^ *| *\| *$/g, "").split(/ *\| */), align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: i[3].replace(/\n$/, "").split("\n") },
                                          u = 0;
                                      u < h.align.length;
                                      u++
                                  )
                                      /^ *-+: *$/.test(h.align[u]) ? (h.align[u] = "right") : /^ *:-+: *$/.test(h.align[u]) ? (h.align[u] = "center") : /^ *:-+ *$/.test(h.align[u]) ? (h.align[u] = "left") : (h.align[u] = null);
                                  for (u = 0; u < h.cells.length; u++) h.cells[u] = h.cells[u].split(/ *\| */);
                                  this.tokens.push(h);
                              } else if ((i = this.rules.lheading.exec(e))) (e = e.substring(i[0].length)), this.tokens.push({ type: "heading", depth: "=" === i[2] ? 1 : 2, text: i[1] });
                              else if ((i = this.rules.hr.exec(e))) (e = e.substring(i[0].length)), this.tokens.push({ type: "hr" });
                              else if ((i = this.rules.blockquote.exec(e)))
                                  (e = e.substring(i[0].length)), this.tokens.push({ type: "blockquote_start" }), (i = i[0].replace(/^ *> ?/gm, "")), this.token(i, t, !0), this.tokens.push({ type: "blockquote_end" });
                              else if ((i = this.rules.list.exec(e))) {
                                  for (e = e.substring(i[0].length), l = i[2], this.tokens.push({ type: "list_start", ordered: l.length > 1 }), i = i[0].match(this.rules.item), r = !1, c = i.length, u = 0; u < c; u++)
                                      (h = i[u]),
                                          (a = h.length),
                                          (h = h.replace(/^ *([*+-]|\d+\.) +/, "")),
                                          ~h.indexOf("\n ") && ((a -= h.length), (h = this.options.pedantic ? h.replace(/^ {1,4}/gm, "") : h.replace(new RegExp("^ {1," + a + "}", "gm"), ""))),
                                          this.options.smartLists && u !== c - 1 && ((o = p.bullet.exec(i[u + 1])[0]), l === o || (l.length > 1 && o.length > 1) || ((e = i.slice(u + 1).join("\n") + e), (u = c - 1))),
                                          (s = r || /\n\n(?!\s*$)/.test(h)),
                                          u !== c - 1 && ((r = "\n" === h.charAt(h.length - 1)), s || (s = r)),
                                          this.tokens.push({ type: s ? "loose_item_start" : "list_item_start" }),
                                          this.token(h, !1, n),
                                          this.tokens.push({ type: "list_item_end" });
                                  this.tokens.push({ type: "list_end" });
                              } else if ((i = this.rules.html.exec(e)))
                                  (e = e.substring(i[0].length)),
                                      this.tokens.push({ type: this.options.sanitize ? "paragraph" : "html", pre: !this.options.sanitizer && ("pre" === i[1] || "script" === i[1] || "style" === i[1]), text: i[0] });
                              else if (!n && t && (i = this.rules.def.exec(e))) (e = e.substring(i[0].length)), (this.tokens.links[i[1].toLowerCase()] = { href: i[2], title: i[3] });
                              else if (t && (i = this.rules.table.exec(e))) {
                                  for (
                                      e = e.substring(i[0].length),
                                          h = { type: "table", header: i[1].replace(/^ *| *\| *$/g, "").split(/ *\| */), align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */), cells: i[3].replace(/(?: *\| *)?\n$/, "").split("\n") },
                                          u = 0;
                                      u < h.align.length;
                                      u++
                                  )
                                      /^ *-+: *$/.test(h.align[u]) ? (h.align[u] = "right") : /^ *:-+: *$/.test(h.align[u]) ? (h.align[u] = "center") : /^ *:-+ *$/.test(h.align[u]) ? (h.align[u] = "left") : (h.align[u] = null);
                                  for (u = 0; u < h.cells.length; u++) h.cells[u] = h.cells[u].replace(/^ *\| *| *\| *$/g, "").split(/ *\| */);
                                  this.tokens.push(h);
                              } else if (t && (i = this.rules.paragraph.exec(e))) (e = e.substring(i[0].length)), this.tokens.push({ type: "paragraph", text: "\n" === i[1].charAt(i[1].length - 1) ? i[1].slice(0, -1) : i[1] });
                              else if ((i = this.rules.text.exec(e))) (e = e.substring(i[0].length)), this.tokens.push({ type: "text", text: i[0] });
                              else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
                          return this.tokens;
                      });
                  var u = {
                      escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
                      autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
                      url: o,
                      tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
                      link: /^!?\[(inside)\]\(href\)/,
                      reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
                      nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
                      strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
                      em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
                      code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
                      br: /^ {2,}\n(?!\s*$)/,
                      del: o,
                      text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/,
                  };
                  (u._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/),
                      (u._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/),
                      (u.link = l(u.link)("inside", u._inside)("href", u._href)()),
                      (u.reflink = l(u.reflink)("inside", u._inside)()),
                      (u.normal = h({}, u)),
                      (u.pedantic = h({}, u.normal, { strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/ })),
                      (u.gfm = h({}, u.normal, { escape: l(u.escape)("])", "~|])")(), url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, del: /^~~(?=\S)([\s\S]*?\S)~~/, text: l(u.text)("]|", "~]|")("|", "|https?://|")() })),
                      (u.breaks = h({}, u.gfm, { br: l(u.br)("{2,}", "*")(), text: l(u.gfm.text)("{2,}", "*")() })),
                      (t.rules = u),
                      (t.output = function (e, n, r) {
                          var s = new t(n, r);
                          return s.output(e);
                      }),
                      (t.prototype.output = function (e) {
                          for (var t, n, r, i, l = ""; e; )
                              if ((i = this.rules.escape.exec(e))) (e = e.substring(i[0].length)), (l += i[1]);
                              else if ((i = this.rules.autolink.exec(e)))
                                  (e = e.substring(i[0].length)),
                                      "@" === i[2] ? ((n = ":" === i[1].charAt(6) ? this.mangle(i[1].substring(7)) : this.mangle(i[1])), (r = this.mangle("mailto:") + n)) : ((n = s(i[1])), (r = n)),
                                      (l += this.renderer.link(r, null, n));
                              else if (this.inLink || !(i = this.rules.url.exec(e))) {
                                  if ((i = this.rules.tag.exec(e)))
                                      !this.inLink && /^<a /i.test(i[0]) ? (this.inLink = !0) : this.inLink && /^<\/a>/i.test(i[0]) && (this.inLink = !1),
                                          (e = e.substring(i[0].length)),
                                          (l += this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(i[0]) : s(i[0])) : i[0]);
                                  else if ((i = this.rules.link.exec(e))) (e = e.substring(i[0].length)), (this.inLink = !0), (l += this.outputLink(i, { href: i[2], title: i[3] })), (this.inLink = !1);
                                  else if ((i = this.rules.reflink.exec(e)) || (i = this.rules.nolink.exec(e))) {
                                      if (((e = e.substring(i[0].length)), (t = (i[2] || i[1]).replace(/\s+/g, " ")), (t = this.links[t.toLowerCase()]), !t || !t.href)) {
                                          (l += i[0].charAt(0)), (e = i[0].substring(1) + e);
                                          continue;
                                      }
                                      (this.inLink = !0), (l += this.outputLink(i, t)), (this.inLink = !1);
                                  } else if ((i = this.rules.strong.exec(e))) (e = e.substring(i[0].length)), (l += this.renderer.strong(this.output(i[2] || i[1])));
                                  else if ((i = this.rules.em.exec(e))) (e = e.substring(i[0].length)), (l += this.renderer.em(this.output(i[2] || i[1])));
                                  else if ((i = this.rules.code.exec(e))) (e = e.substring(i[0].length)), (l += this.renderer.codespan(s(i[2], !0)));
                                  else if ((i = this.rules.br.exec(e))) (e = e.substring(i[0].length)), (l += this.renderer.br());
                                  else if ((i = this.rules.del.exec(e))) (e = e.substring(i[0].length)), (l += this.renderer.del(this.output(i[1])));
                                  else if ((i = this.rules.text.exec(e))) (e = e.substring(i[0].length)), (l += this.renderer.text(s(this.smartypants(i[0]))));
                                  else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
                              } else (e = e.substring(i[0].length)), (n = s(i[1])), (r = n), (l += this.renderer.link(r, null, n));
                          return l;
                      }),
                      (t.prototype.outputLink = function (e, t) {
                          var n = s(t.href),
                              r = t.title ? s(t.title) : null;
                          return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, s(e[1]));
                      }),
                      (t.prototype.smartypants = function (e) {
                          return this.options.smartypants
                              ? e
                                    .replace(/---/g, "—")
                                    .replace(/--/g, "–")
                                    .replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘")
                                    .replace(/'/g, "’")
                                    .replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“")
                                    .replace(/"/g, "”")
                                    .replace(/\.{3}/g, "…")
                              : e;
                      }),
                      (t.prototype.mangle = function (e) {
                          if (!this.options.mangle) return e;
                          for (var t, n = "", r = e.length, s = 0; s < r; s++) (t = e.charCodeAt(s)), Math.random() > 0.5 && (t = "x" + t.toString(16)), (n += "&#" + t + ";");
                          return n;
                      }),
                      (n.prototype.code = function (e, t, n) {
                          if (this.options.highlight) {
                              var r = this.options.highlight(e, t);
                              null != r && r !== e && ((n = !0), (e = r));
                          }
                          return t ? '<pre><code class="' + this.options.langPrefix + s(t, !0) + '">' + (n ? e : s(e, !0)) + "\n</code></pre>\n" : "<pre><code>" + (n ? e : s(e, !0)) + "\n</code></pre>";
                      }),
                      (n.prototype.blockquote = function (e) {
                          return "<blockquote>\n" + e + "</blockquote>\n";
                      }),
                      (n.prototype.html = function (e) {
                          return e;
                      }),
                      (n.prototype.heading = function (e, t, n) {
                          return "<h" + t + ' id="' + this.options.headerPrefix + n.toLowerCase().replace(/[^\w]+/g, "-") + '">' + e + "</h" + t + ">\n";
                      }),
                      (n.prototype.hr = function () {
                          return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
                      }),
                      (n.prototype.list = function (e, t) {
                          var n = t ? "ol" : "ul";
                          return "<" + n + ">\n" + e + "</" + n + ">\n";
                      }),
                      (n.prototype.listitem = function (e) {
                          return "<li>" + e + "</li>\n";
                      }),
                      (n.prototype.paragraph = function (e) {
                          return "<p>" + e + "</p>\n";
                      }),
                      (n.prototype.table = function (e, t) {
                          return "<table>\n<thead>\n" + e + "</thead>\n<tbody>\n" + t + "</tbody>\n</table>\n";
                      }),
                      (n.prototype.tablerow = function (e) {
                          return "<tr>\n" + e + "</tr>\n";
                      }),
                      (n.prototype.tablecell = function (e, t) {
                          var n = t.header ? "th" : "td",
                              r = t.align ? "<" + n + ' style="text-align:' + t.align + '">' : "<" + n + ">";
                          return r + e + "</" + n + ">\n";
                      }),
                      (n.prototype.strong = function (e) {
                          return "<strong>" + e + "</strong>";
                      }),
                      (n.prototype.em = function (e) {
                          return "<em>" + e + "</em>";
                      }),
                      (n.prototype.codespan = function (e) {
                          return "<code>" + e + "</code>";
                      }),
                      (n.prototype.br = function () {
                          return this.options.xhtml ? "<br/>" : "<br>";
                      }),
                      (n.prototype.del = function (e) {
                          return "<del>" + e + "</del>";
                      }),
                      (n.prototype.link = function (e, t, n) {
                          if (this.options.sanitize) {
                              try {
                                  var r = decodeURIComponent(i(e))
                                      .replace(/[^\w:]/g, "")
                                      .toLowerCase();
                              } catch (e) {
                                  return "";
                              }
                              if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:")) return "";
                          }
                          var s = '<a href="' + e + '"';
                          return t && (s += ' title="' + t + '"'), (s += ">" + n + "</a>");
                      }),
                      (n.prototype.image = function (e, t, n) {
                          var r = '<img src="' + e + '" alt="' + n + '"';
                          return t && (r += ' title="' + t + '"'), (r += this.options.xhtml ? "/>" : ">");
                      }),
                      (n.prototype.text = function (e) {
                          return e;
                      }),
                      (r.parse = function (e, t, n) {
                          var s = new r(t, n);
                          return s.parse(e);
                      }),
                      (r.prototype.parse = function (e) {
                          (this.inline = new t(e.links, this.options, this.renderer)), (this.tokens = e.reverse());
                          for (var n = ""; this.next(); ) n += this.tok();
                          return n;
                      }),
                      (r.prototype.next = function () {
                          return (this.token = this.tokens.pop());
                      }),
                      (r.prototype.peek = function () {
                          return this.tokens[this.tokens.length - 1] || 0;
                      }),
                      (r.prototype.parseText = function () {
                          for (var e = this.token.text; "text" === this.peek().type; ) e += "\n" + this.next().text;
                          return this.inline.output(e);
                      }),
                      (r.prototype.tok = function () {
                          switch (this.token.type) {
                              case "space":
                                  return "";
                              case "hr":
                                  return this.renderer.hr();
                              case "heading":
                                  return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, this.token.text);
                              case "code":
                                  return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                              case "table":
                                  var e,
                                      t,
                                      n,
                                      r,
                                      s,
                                      i = "",
                                      l = "";
                                  for (n = "", e = 0; e < this.token.header.length; e++)
                                      (r = { header: !0, align: this.token.align[e] }), (n += this.renderer.tablecell(this.inline.output(this.token.header[e]), { header: !0, align: this.token.align[e] }));
                                  for (i += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
                                      for (t = this.token.cells[e], n = "", s = 0; s < t.length; s++) n += this.renderer.tablecell(this.inline.output(t[s]), { header: !1, align: this.token.align[s] });
                                      l += this.renderer.tablerow(n);
                                  }
                                  return this.renderer.table(i, l);
                              case "blockquote_start":
                                  for (var l = ""; "blockquote_end" !== this.next().type; ) l += this.tok();
                                  return this.renderer.blockquote(l);
                              case "list_start":
                                  for (var l = "", o = this.token.ordered; "list_end" !== this.next().type; ) l += this.tok();
                                  return this.renderer.list(l, o);
                              case "list_item_start":
                                  for (var l = ""; "list_item_end" !== this.next().type; ) l += "text" === this.token.type ? this.parseText() : this.tok();
                                  return this.renderer.listitem(l);
                              case "loose_item_start":
                                  for (var l = ""; "list_item_end" !== this.next().type; ) l += this.tok();
                                  return this.renderer.listitem(l);
                              case "html":
                                  var h = this.token.pre || this.options.pedantic ? this.token.text : this.inline.output(this.token.text);
                                  return this.renderer.html(h);
                              case "paragraph":
                                  return this.renderer.paragraph(this.inline.output(this.token.text));
                              case "text":
                                  return this.renderer.paragraph(this.parseText());
                          }
                      }),
                      (o.exec = o),
                      (a.options = a.setOptions = function (e) {
                          return h(a.defaults, e), a;
                      }),
                      (a.defaults = {
                          gfm: !0,
                          tables: !0,
                          breaks: !1,
                          pedantic: !1,
                          sanitize: !1,
                          sanitizer: null,
                          mangle: !0,
                          smartLists: !1,
                          silent: !1,
                          highlight: null,
                          langPrefix: "lang-",
                          smartypants: !1,
                          headerPrefix: "",
                          renderer: new n(),
                          xhtml: !1,
                      }),
                      (a.Parser = r),
                      (a.parser = r.parse),
                      (a.Renderer = n),
                      (a.Lexer = e),
                      (a.lexer = e.lex),
                      (a.InlineLexer = t),
                      (a.inlineLexer = t.output),
                      (a.parse = a),
                      "undefined" != typeof module && "object" == typeof exports
                          ? (module.exports = a)
                          : "function" == typeof define && define.amd
                          ? define(function () {
                                return a;
                            })
                          : (this.marked = a);
              }.call(
                  (function () {
                      return this || ("undefined" != typeof window ? window : global);
                  })()
              ));
          },
          {},
      ],
      4: [
          function (require, module, exports) {
              (function () {
                  function n(n) {
                      function t(t, r, e, u, i, o) {
                          for (; i >= 0 && i < o; i += n) {
                              var a = u ? u[i] : i;
                              e = r(e, t[a], a, t);
                          }
                          return e;
                      }
                      return function (r, e, u, i) {
                          e = b(e, i, 4);
                          var o = !k(r) && m.keys(r),
                              a = (o || r).length,
                              c = n > 0 ? 0 : a - 1;
                          return arguments.length < 3 && ((u = r[o ? o[c] : c]), (c += n)), t(r, e, u, o, c, a);
                      };
                  }
                  function t(n) {
                      return function (t, r, e) {
                          r = x(r, e);
                          for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && i < u; i += n) if (r(t[i], i, t)) return i;
                          return -1;
                      };
                  }
                  function r(n, t, r) {
                      return function (e, u, i) {
                          var o = 0,
                              a = O(e);
                          if ("number" == typeof i) n > 0 ? (o = i >= 0 ? i : Math.max(i + a, o)) : (a = i >= 0 ? Math.min(i + 1, a) : i + a + 1);
                          else if (r && i && a) return (i = r(e, u)), e[i] === u ? i : -1;
                          if (u !== u) return (i = t(l.call(e, o, a), m.isNaN)), i >= 0 ? i + o : -1;
                          for (i = n > 0 ? o : a - 1; i >= 0 && i < a; i += n) if (e[i] === u) return i;
                          return -1;
                      };
                  }
                  function e(n, t) {
                      var r = I.length,
                          e = n.constructor,
                          u = (m.isFunction(e) && e.prototype) || a,
                          i = "constructor";
                      for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--; ) (i = I[r]), i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i);
                  }
                  var u = this,
                      i = u._,
                      o = Array.prototype,
                      a = Object.prototype,
                      c = Function.prototype,
                      f = o.push,
                      l = o.slice,
                      s = a.toString,
                      p = a.hasOwnProperty,
                      h = Array.isArray,
                      v = Object.keys,
                      y = c.bind,
                      d = Object.create,
                      g = function () {},
                      m = function (n) {
                          return n instanceof m ? n : this instanceof m ? void (this._wrapped = n) : new m(n);
                      };
                  "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), (exports._ = m)) : (u._ = m), (m.VERSION = "1.8.3");
                  var b = function (n, t, r) {
                          if (void 0 === t) return n;
                          switch (null == r ? 3 : r) {
                              case 1:
                                  return function (r) {
                                      return n.call(t, r);
                                  };
                              case 2:
                                  return function (r, e) {
                                      return n.call(t, r, e);
                                  };
                              case 3:
                                  return function (r, e, u) {
                                      return n.call(t, r, e, u);
                                  };
                              case 4:
                                  return function (r, e, u, i) {
                                      return n.call(t, r, e, u, i);
                                  };
                          }
                          return function () {
                              return n.apply(t, arguments);
                          };
                      },
                      x = function (n, t, r) {
                          return null == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n);
                      };
                  m.iteratee = function (n, t) {
                      return x(n, t, 1 / 0);
                  };
                  var _ = function (n, t) {
                          return function (r) {
                              var e = arguments.length;
                              if (e < 2 || null == r) return r;
                              for (var u = 1; u < e; u++)
                                  for (var i = arguments[u], o = n(i), a = o.length, c = 0; c < a; c++) {
                                      var f = o[c];
                                      (t && void 0 !== r[f]) || (r[f] = i[f]);
                                  }
                              return r;
                          };
                      },
                      j = function (n) {
                          if (!m.isObject(n)) return {};
                          if (d) return d(n);
                          g.prototype = n;
                          var t = new g();
                          return (g.prototype = null), t;
                      },
                      w = function (n) {
                          return function (t) {
                              return null == t ? void 0 : t[n];
                          };
                      },
                      A = Math.pow(2, 53) - 1,
                      O = w("length"),
                      k = function (n) {
                          var t = O(n);
                          return "number" == typeof t && t >= 0 && t <= A;
                      };
                  (m.each = m.forEach = function (n, t, r) {
                      t = b(t, r);
                      var e, u;
                      if (k(n)) for (e = 0, u = n.length; e < u; e++) t(n[e], e, n);
                      else {
                          var i = m.keys(n);
                          for (e = 0, u = i.length; e < u; e++) t(n[i[e]], i[e], n);
                      }
                      return n;
                  }),
                      (m.map = m.collect = function (n, t, r) {
                          t = x(t, r);
                          for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; o < u; o++) {
                              var a = e ? e[o] : o;
                              i[o] = t(n[a], a, n);
                          }
                          return i;
                      }),
                      (m.reduce = m.foldl = m.inject = n(1)),
                      (m.reduceRight = m.foldr = n(-1)),
                      (m.find = m.detect = function (n, t, r) {
                          var e;
                          if (((e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r)), void 0 !== e && e !== -1)) return n[e];
                      }),
                      (m.filter = m.select = function (n, t, r) {
                          var e = [];
                          return (
                              (t = x(t, r)),
                              m.each(n, function (n, r, u) {
                                  t(n, r, u) && e.push(n);
                              }),
                              e
                          );
                      }),
                      (m.reject = function (n, t, r) {
                          return m.filter(n, m.negate(x(t)), r);
                      }),
                      (m.every = m.all = function (n, t, r) {
                          t = x(t, r);
                          for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; i < u; i++) {
                              var o = e ? e[i] : i;
                              if (!t(n[o], o, n)) return !1;
                          }
                          return !0;
                      }),
                      (m.some = m.any = function (n, t, r) {
                          t = x(t, r);
                          for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; i < u; i++) {
                              var o = e ? e[i] : i;
                              if (t(n[o], o, n)) return !0;
                          }
                          return !1;
                      }),
                      (m.contains = m.includes = m.include = function (n, t, r, e) {
                          return k(n) || (n = m.values(n)), ("number" != typeof r || e) && (r = 0), m.indexOf(n, t, r) >= 0;
                      }),
                      (m.invoke = function (n, t) {
                          var r = l.call(arguments, 2),
                              e = m.isFunction(t);
                          return m.map(n, function (n) {
                              var u = e ? t : n[t];
                              return null == u ? u : u.apply(n, r);
                          });
                      }),
                      (m.pluck = function (n, t) {
                          return m.map(n, m.property(t));
                      }),
                      (m.where = function (n, t) {
                          return m.filter(n, m.matcher(t));
                      }),
                      (m.findWhere = function (n, t) {
                          return m.find(n, m.matcher(t));
                      }),
                      (m.max = function (n, t, r) {
                          var e,
                              u,
                              i = -(1 / 0),
                              o = -(1 / 0);
                          if (null == t && null != n) {
                              n = k(n) ? n : m.values(n);
                              for (var a = 0, c = n.length; a < c; a++) (e = n[a]), e > i && (i = e);
                          } else
                              (t = x(t, r)),
                                  m.each(n, function (n, r, e) {
                                      (u = t(n, r, e)), (u > o || (u === -(1 / 0) && i === -(1 / 0))) && ((i = n), (o = u));
                                  });
                          return i;
                      }),
                      (m.min = function (n, t, r) {
                          var e,
                              u,
                              i = 1 / 0,
                              o = 1 / 0;
                          if (null == t && null != n) {
                              n = k(n) ? n : m.values(n);
                              for (var a = 0, c = n.length; a < c; a++) (e = n[a]), e < i && (i = e);
                          } else
                              (t = x(t, r)),
                                  m.each(n, function (n, r, e) {
                                      (u = t(n, r, e)), (u < o || (u === 1 / 0 && i === 1 / 0)) && ((i = n), (o = u));
                                  });
                          return i;
                      }),
                      (m.shuffle = function (n) {
                          for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; i < e; i++) (t = m.random(0, i)), t !== i && (u[i] = u[t]), (u[t] = r[i]);
                          return u;
                      }),
                      (m.sample = function (n, t, r) {
                          return null == t || r ? (k(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t));
                      }),
                      (m.sortBy = function (n, t, r) {
                          return (
                              (t = x(t, r)),
                              m.pluck(
                                  m
                                      .map(n, function (n, r, e) {
                                          return { value: n, index: r, criteria: t(n, r, e) };
                                      })
                                      .sort(function (n, t) {
                                          var r = n.criteria,
                                              e = t.criteria;
                                          if (r !== e) {
                                              if (r > e || void 0 === r) return 1;
                                              if (r < e || void 0 === e) return -1;
                                          }
                                          return n.index - t.index;
                                      }),
                                  "value"
                              )
                          );
                      });
                  var F = function (n) {
                      return function (t, r, e) {
                          var u = {};
                          return (
                              (r = x(r, e)),
                              m.each(t, function (e, i) {
                                  var o = r(e, i, t);
                                  n(u, e, o);
                              }),
                              u
                          );
                      };
                  };
                  (m.groupBy = F(function (n, t, r) {
                      m.has(n, r) ? n[r].push(t) : (n[r] = [t]);
                  })),
                      (m.indexBy = F(function (n, t, r) {
                          n[r] = t;
                      })),
                      (m.countBy = F(function (n, t, r) {
                          m.has(n, r) ? n[r]++ : (n[r] = 1);
                      })),
                      (m.toArray = function (n) {
                          return n ? (m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n)) : [];
                      }),
                      (m.size = function (n) {
                          return null == n ? 0 : k(n) ? n.length : m.keys(n).length;
                      }),
                      (m.partition = function (n, t, r) {
                          t = x(t, r);
                          var e = [],
                              u = [];
                          return (
                              m.each(n, function (n, r, i) {
                                  (t(n, r, i) ? e : u).push(n);
                              }),
                              [e, u]
                          );
                      }),
                      (m.first = m.head = m.take = function (n, t, r) {
                          if (null != n) return null == t || r ? n[0] : m.initial(n, n.length - t);
                      }),
                      (m.initial = function (n, t, r) {
                          return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)));
                      }),
                      (m.last = function (n, t, r) {
                          if (null != n) return null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t));
                      }),
                      (m.rest = m.tail = m.drop = function (n, t, r) {
                          return l.call(n, null == t || r ? 1 : t);
                      }),
                      (m.compact = function (n) {
                          return m.filter(n, m.identity);
                      });
                  var S = function (n, t, r, e) {
                      for (var u = [], i = 0, o = e || 0, a = O(n); o < a; o++) {
                          var c = n[o];
                          if (k(c) && (m.isArray(c) || m.isArguments(c))) {
                              t || (c = S(c, t, r));
                              var f = 0,
                                  l = c.length;
                              for (u.length += l; f < l; ) u[i++] = c[f++];
                          } else r || (u[i++] = c);
                      }
                      return u;
                  };
                  (m.flatten = function (n, t) {
                      return S(n, t, !1);
                  }),
                      (m.without = function (n) {
                          return m.difference(n, l.call(arguments, 1));
                      }),
                      (m.uniq = m.unique = function (n, t, r, e) {
                          m.isBoolean(t) || ((e = r), (r = t), (t = !1)), null != r && (r = x(r, e));
                          for (var u = [], i = [], o = 0, a = O(n); o < a; o++) {
                              var c = n[o],
                                  f = r ? r(c, o, n) : c;
                              t ? ((o && i === f) || u.push(c), (i = f)) : r ? m.contains(i, f) || (i.push(f), u.push(c)) : m.contains(u, c) || u.push(c);
                          }
                          return u;
                      }),
                      (m.union = function () {
                          return m.uniq(S(arguments, !0, !0));
                      }),
                      (m.intersection = function (n) {
                          for (var t = [], r = arguments.length, e = 0, u = O(n); e < u; e++) {
                              var i = n[e];
                              if (!m.contains(t, i)) {
                                  for (var o = 1; o < r && m.contains(arguments[o], i); o++);
                                  o === r && t.push(i);
                              }
                          }
                          return t;
                      }),
                      (m.difference = function (n) {
                          var t = S(arguments, !0, !0, 1);
                          return m.filter(n, function (n) {
                              return !m.contains(t, n);
                          });
                      }),
                      (m.zip = function () {
                          return m.unzip(arguments);
                      }),
                      (m.unzip = function (n) {
                          for (var t = (n && m.max(n, O).length) || 0, r = Array(t), e = 0; e < t; e++) r[e] = m.pluck(n, e);
                          return r;
                      }),
                      (m.object = function (n, t) {
                          for (var r = {}, e = 0, u = O(n); e < u; e++) t ? (r[n[e]] = t[e]) : (r[n[e][0]] = n[e][1]);
                          return r;
                      }),
                      (m.findIndex = t(1)),
                      (m.findLastIndex = t(-1)),
                      (m.sortedIndex = function (n, t, r, e) {
                          r = x(r, e, 1);
                          for (var u = r(t), i = 0, o = O(n); i < o; ) {
                              var a = Math.floor((i + o) / 2);
                              r(n[a]) < u ? (i = a + 1) : (o = a);
                          }
                          return i;
                      }),
                      (m.indexOf = r(1, m.findIndex, m.sortedIndex)),
                      (m.lastIndexOf = r(-1, m.findLastIndex)),
                      (m.range = function (n, t, r) {
                          null == t && ((t = n || 0), (n = 0)), (r = r || 1);
                          for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; i < e; i++, n += r) u[i] = n;
                          return u;
                      });
                  var E = function (n, t, r, e, u) {
                      if (!(e instanceof t)) return n.apply(r, u);
                      var i = j(n.prototype),
                          o = n.apply(i, u);
                      return m.isObject(o) ? o : i;
                  };
                  (m.bind = function (n, t) {
                      if (y && n.bind === y) return y.apply(n, l.call(arguments, 1));
                      if (!m.isFunction(n)) throw new TypeError("Bind must be called on a function");
                      var r = l.call(arguments, 2),
                          e = function () {
                              return E(n, e, t, this, r.concat(l.call(arguments)));
                          };
                      return e;
                  }),
                      (m.partial = function (n) {
                          var t = l.call(arguments, 1),
                              r = function () {
                                  for (var e = 0, u = t.length, i = Array(u), o = 0; o < u; o++) i[o] = t[o] === m ? arguments[e++] : t[o];
                                  for (; e < arguments.length; ) i.push(arguments[e++]);
                                  return E(n, r, this, this, i);
                              };
                          return r;
                      }),
                      (m.bindAll = function (n) {
                          var t,
                              r,
                              e = arguments.length;
                          if (e <= 1) throw new Error("bindAll must be passed function names");
                          for (t = 1; t < e; t++) (r = arguments[t]), (n[r] = m.bind(n[r], n));
                          return n;
                      }),
                      (m.memoize = function (n, t) {
                          var r = function (e) {
                              var u = r.cache,
                                  i = "" + (t ? t.apply(this, arguments) : e);
                              return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i];
                          };
                          return (r.cache = {}), r;
                      }),
                      (m.delay = function (n, t) {
                          var r = l.call(arguments, 2);
                          return setTimeout(function () {
                              return n.apply(null, r);
                          }, t);
                      }),
                      (m.defer = m.partial(m.delay, m, 1)),
                      (m.throttle = function (n, t, r) {
                          var e,
                              u,
                              i,
                              o = null,
                              a = 0;
                          r || (r = {});
                          var c = function () {
                              (a = r.leading === !1 ? 0 : m.now()), (o = null), (i = n.apply(e, u)), o || (e = u = null);
                          };
                          return function () {
                              var f = m.now();
                              a || r.leading !== !1 || (a = f);
                              var l = t - (f - a);
                              return (e = this), (u = arguments), l <= 0 || l > t ? (o && (clearTimeout(o), (o = null)), (a = f), (i = n.apply(e, u)), o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, l)), i;
                          };
                      }),
                      (m.debounce = function (n, t, r) {
                          var e,
                              u,
                              i,
                              o,
                              a,
                              c = function () {
                                  var f = m.now() - o;
                                  f < t && f >= 0 ? (e = setTimeout(c, t - f)) : ((e = null), r || ((a = n.apply(i, u)), e || (i = u = null)));
                              };
                          return function () {
                              (i = this), (u = arguments), (o = m.now());
                              var f = r && !e;
                              return e || (e = setTimeout(c, t)), f && ((a = n.apply(i, u)), (i = u = null)), a;
                          };
                      }),
                      (m.wrap = function (n, t) {
                          return m.partial(t, n);
                      }),
                      (m.negate = function (n) {
                          return function () {
                              return !n.apply(this, arguments);
                          };
                      }),
                      (m.compose = function () {
                          var n = arguments,
                              t = n.length - 1;
                          return function () {
                              for (var r = t, e = n[t].apply(this, arguments); r--; ) e = n[r].call(this, e);
                              return e;
                          };
                      }),
                      (m.after = function (n, t) {
                          return function () {
                              if (--n < 1) return t.apply(this, arguments);
                          };
                      }),
                      (m.before = function (n, t) {
                          var r;
                          return function () {
                              return --n > 0 && (r = t.apply(this, arguments)), n <= 1 && (t = null), r;
                          };
                      }),
                      (m.once = m.partial(m.before, 2));
                  var M = !{ toString: null }.propertyIsEnumerable("toString"),
                      I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
                  (m.keys = function (n) {
                      if (!m.isObject(n)) return [];
                      if (v) return v(n);
                      var t = [];
                      for (var r in n) m.has(n, r) && t.push(r);
                      return M && e(n, t), t;
                  }),
                      (m.allKeys = function (n) {
                          if (!m.isObject(n)) return [];
                          var t = [];
                          for (var r in n) t.push(r);
                          return M && e(n, t), t;
                      }),
                      (m.values = function (n) {
                          for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; u < r; u++) e[u] = n[t[u]];
                          return e;
                      }),
                      (m.mapObject = function (n, t, r) {
                          t = x(t, r);
                          for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; a < i; a++) (e = u[a]), (o[e] = t(n[e], e, n));
                          return o;
                      }),
                      (m.pairs = function (n) {
                          for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; u < r; u++) e[u] = [t[u], n[t[u]]];
                          return e;
                      }),
                      (m.invert = function (n) {
                          for (var t = {}, r = m.keys(n), e = 0, u = r.length; e < u; e++) t[n[r[e]]] = r[e];
                          return t;
                      }),
                      (m.functions = m.methods = function (n) {
                          var t = [];
                          for (var r in n) m.isFunction(n[r]) && t.push(r);
                          return t.sort();
                      }),
                      (m.extend = _(m.allKeys)),
                      (m.extendOwn = m.assign = _(m.keys)),
                      (m.findKey = function (n, t, r) {
                          t = x(t, r);
                          for (var e, u = m.keys(n), i = 0, o = u.length; i < o; i++) if (((e = u[i]), t(n[e], e, n))) return e;
                      }),
                      (m.pick = function (n, t, r) {
                          var e,
                              u,
                              i = {},
                              o = n;
                          if (null == o) return i;
                          m.isFunction(t)
                              ? ((u = m.allKeys(o)), (e = b(t, r)))
                              : ((u = S(arguments, !1, !1, 1)),
                                (e = function (n, t, r) {
                                    return t in r;
                                }),
                                (o = Object(o)));
                          for (var a = 0, c = u.length; a < c; a++) {
                              var f = u[a],
                                  l = o[f];
                              e(l, f, o) && (i[f] = l);
                          }
                          return i;
                      }),
                      (m.omit = function (n, t, r) {
                          if (m.isFunction(t)) t = m.negate(t);
                          else {
                              var e = m.map(S(arguments, !1, !1, 1), String);
                              t = function (n, t) {
                                  return !m.contains(e, t);
                              };
                          }
                          return m.pick(n, t, r);
                      }),
                      (m.defaults = _(m.allKeys, !0)),
                      (m.create = function (n, t) {
                          var r = j(n);
                          return t && m.extendOwn(r, t), r;
                      }),
                      (m.clone = function (n) {
                          return m.isObject(n) ? (m.isArray(n) ? n.slice() : m.extend({}, n)) : n;
                      }),
                      (m.tap = function (n, t) {
                          return t(n), n;
                      }),
                      (m.isMatch = function (n, t) {
                          var r = m.keys(t),
                              e = r.length;
                          if (null == n) return !e;
                          for (var u = Object(n), i = 0; i < e; i++) {
                              var o = r[i];
                              if (t[o] !== u[o] || !(o in u)) return !1;
                          }
                          return !0;
                      });
                  var N = function (n, t, r, e) {
                      if (n === t) return 0 !== n || 1 / n === 1 / t;
                      if (null == n || null == t) return n === t;
                      n instanceof m && (n = n._wrapped), t instanceof m && (t = t._wrapped);
                      var u = s.call(n);
                      if (u !== s.call(t)) return !1;
                      switch (u) {
                          case "[object RegExp]":
                          case "[object String]":
                              return "" + n == "" + t;
                          case "[object Number]":
                              return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
                          case "[object Date]":
                          case "[object Boolean]":
                              return +n === +t;
                      }
                      var i = "[object Array]" === u;
                      if (!i) {
                          if ("object" != typeof n || "object" != typeof t) return !1;
                          var o = n.constructor,
                              a = t.constructor;
                          if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t) return !1;
                      }
                      (r = r || []), (e = e || []);
                      for (var c = r.length; c--; ) if (r[c] === n) return e[c] === t;
                      if ((r.push(n), e.push(t), i)) {
                          if (((c = n.length), c !== t.length)) return !1;
                          for (; c--; ) if (!N(n[c], t[c], r, e)) return !1;
                      } else {
                          var f,
                              l = m.keys(n);
                          if (((c = l.length), m.keys(t).length !== c)) return !1;
                          for (; c--; ) if (((f = l[c]), !m.has(t, f) || !N(n[f], t[f], r, e))) return !1;
                      }
                      return r.pop(), e.pop(), !0;
                  };
                  (m.isEqual = function (n, t) {
                      return N(n, t);
                  }),
                      (m.isEmpty = function (n) {
                          return null == n || (k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length);
                      }),
                      (m.isElement = function (n) {
                          return !(!n || 1 !== n.nodeType);
                      }),
                      (m.isArray =
                          h ||
                          function (n) {
                              return "[object Array]" === s.call(n);
                          }),
                      (m.isObject = function (n) {
                          var t = typeof n;
                          return "function" === t || ("object" === t && !!n);
                      }),
                      m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (n) {
                          m["is" + n] = function (t) {
                              return s.call(t) === "[object " + n + "]";
                          };
                      }),
                      m.isArguments(arguments) ||
                          (m.isArguments = function (n) {
                              return m.has(n, "callee");
                          }),
                      "function" != typeof /./ &&
                          "object" != typeof Int8Array &&
                          (m.isFunction = function (n) {
                              return "function" == typeof n || !1;
                          }),
                      (m.isFinite = function (n) {
                          return isFinite(n) && !isNaN(parseFloat(n));
                      }),
                      (m.isNaN = function (n) {
                          return m.isNumber(n) && n !== +n;
                      }),
                      (m.isBoolean = function (n) {
                          return n === !0 || n === !1 || "[object Boolean]" === s.call(n);
                      }),
                      (m.isNull = function (n) {
                          return null === n;
                      }),
                      (m.isUndefined = function (n) {
                          return void 0 === n;
                      }),
                      (m.has = function (n, t) {
                          return null != n && p.call(n, t);
                      }),
                      (m.noConflict = function () {
                          return (u._ = i), this;
                      }),
                      (m.identity = function (n) {
                          return n;
                      }),
                      (m.constant = function (n) {
                          return function () {
                              return n;
                          };
                      }),
                      (m.noop = function () {}),
                      (m.property = w),
                      (m.propertyOf = function (n) {
                          return null == n
                              ? function () {}
                              : function (t) {
                                    return n[t];
                                };
                      }),
                      (m.matcher = m.matches = function (n) {
                          return (
                              (n = m.extendOwn({}, n)),
                              function (t) {
                                  return m.isMatch(t, n);
                              }
                          );
                      }),
                      (m.times = function (n, t, r) {
                          var e = Array(Math.max(0, n));
                          t = b(t, r, 1);
                          for (var u = 0; u < n; u++) e[u] = t(u);
                          return e;
                      }),
                      (m.random = function (n, t) {
                          return null == t && ((t = n), (n = 0)), n + Math.floor(Math.random() * (t - n + 1));
                      }),
                      (m.now =
                          Date.now ||
                          function () {
                              return new Date().getTime();
                          });
                  var B = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                      T = m.invert(B),
                      R = function (n) {
                          var t = function (t) {
                                  return n[t];
                              },
                              r = "(?:" + m.keys(n).join("|") + ")",
                              e = RegExp(r),
                              u = RegExp(r, "g");
                          return function (n) {
                              return (n = null == n ? "" : "" + n), e.test(n) ? n.replace(u, t) : n;
                          };
                      };
                  (m.escape = R(B)),
                      (m.unescape = R(T)),
                      (m.result = function (n, t, r) {
                          var e = null == n ? void 0 : n[t];
                          return void 0 === e && (e = r), m.isFunction(e) ? e.call(n) : e;
                      });
                  var q = 0;
                  (m.uniqueId = function (n) {
                      var t = ++q + "";
                      return n ? n + t : t;
                  }),
                      (m.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g });
                  var K = /(.)^/,
                      z = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                      D = /\\|'|\r|\n|\u2028|\u2029/g,
                      L = function (n) {
                          return "\\" + z[n];
                      };
                  (m.template = function (n, t, r) {
                      !t && r && (t = r), (t = m.defaults({}, t, m.templateSettings));
                      var e = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g"),
                          u = 0,
                          i = "__p+='";
                      n.replace(e, function (t, r, e, o, a) {
                          return (
                              (i += n.slice(u, a).replace(D, L)),
                              (u = a + t.length),
                              r ? (i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'") : e ? (i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'") : o && (i += "';\n" + o + "\n__p+='"),
                              t
                          );
                      }),
                          (i += "';\n"),
                          t.variable || (i = "with(obj||{}){\n" + i + "}\n"),
                          (i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n");
                      try {
                          var o = new Function(t.variable || "obj", "_", i);
                      } catch (n) {
                          throw ((n.source = i), n);
                      }
                      var a = function (n) {
                              return o.call(this, n, m);
                          },
                          c = t.variable || "obj";
                      return (a.source = "function(" + c + "){\n" + i + "}"), a;
                  }),
                      (m.chain = function (n) {
                          var t = m(n);
                          return (t._chain = !0), t;
                      });
                  var P = function (n, t) {
                      return n._chain ? m(t).chain() : t;
                  };
                  (m.mixin = function (n) {
                      m.each(m.functions(n), function (t) {
                          var r = (m[t] = n[t]);
                          m.prototype[t] = function () {
                              var n = [this._wrapped];
                              return f.apply(n, arguments), P(this, r.apply(m, n));
                          };
                      });
                  }),
                      m.mixin(m),
                      m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (n) {
                          var t = o[n];
                          m.prototype[n] = function () {
                              var r = this._wrapped;
                              return t.apply(r, arguments), ("shift" !== n && "splice" !== n) || 0 !== r.length || delete r[0], P(this, r);
                          };
                      }),
                      m.each(["concat", "join", "slice"], function (n) {
                          var t = o[n];
                          m.prototype[n] = function () {
                              return P(this, t.apply(this._wrapped, arguments));
                          };
                      }),
                      (m.prototype.value = function () {
                          return this._wrapped;
                      }),
                      (m.prototype.valueOf = m.prototype.toJSON = m.prototype.value),
                      (m.prototype.toString = function () {
                          return "" + this._wrapped;
                      }),
                      "function" == typeof define &&
                          define.amd &&
                          define("underscore", [], function () {
                              return m;
                          });
              }.call(this));
          },
          {},
      ],
      5: [
          function (require, module, exports) {
              "use strict";
              var $ = (window.$ = window.jQuery = require("jquery")),
                  _ = (window._ = require("underscore")),
                  marked = (window.marked = require("marked")),
                  Story = (window.Story = require("./story")),
                  Passage = (window.Passage = require("./passage"));
              $(function () {
                  (window.story = new Story()), window.story.start();
              });
          },
          { "./passage": 6, "./story": 7, jquery: 1, marked: 3, underscore: 4 },
      ],
      6: [
          function (require, module, exports) {
              "use strict";
              function render(e) {
                  var r = _.template(e)({ s: window.story.state, $: readyFunc });
                  (r = r.replace(/\/\*.*\*\//g, "")), (r = r.replace(/^\/\/.*(\r\n?|\n)/g, ""));
                  for (
                      var n = /\[([\r\n+])([^\]]*?)([\r\n+])\]\{(.*?)\}/g,
                          s = function (e, r, n, s, t) {
                              return renderEl("div", r + n + s, t);
                          };
                      n.test(r);

                  )
                      r = r.replace(n, s);
                  for (
                      var t = /\[(.*?)\]\{(.*?)\}/g,
                          a = function (e, r, n) {
                              return renderEl("span", r, n);
                          };
                      t.test(r);

                  )
                      r = r.replace(t, a);
                  return (
                      (r = r.replace(/\[\[(.*?)\]\]/g, function (e, r) {
                          var n = r,
                              s = r.indexOf("|");
                          if (s != -1) (n = r.substr(0, s)), (r = r.substr(s + 1));
                          else {
                              var t = r.indexOf("->");
                              if (t != -1) (n = r.substr(0, t)), (r = r.substr(t + 2));
                              else {
                                  var a = r.indexOf("<-");
                                  a != -1 && ((n = r.substr(a + 2)), (r = r.substr(0, a)));
                              }
                          }
                          return /^\w+:\/\/\/?\w/i.test(r) ? '<a href="' + r + '">' + n + "</a>" : (passage.links.push({ display: n, target: r }), "");
                      })),
                      marked(r)
                  );
              }
              function renderEl(e, r, n) {
                  var s = "<" + e;
                  if (n) {
                      "-" == n[0] && (s += ' style="display:none"');
                      for (var t = [], a = null, u = /([#\.])([^#\.]+)/g, i = u.exec(n); null !== i; ) {
                          switch (i[1]) {
                              case "#":
                                  a = i[2];
                                  break;
                              case ".":
                                  t.push(i[2]);
                                  break;
                              default:
                                  throw new Error("Don't know how to apply selector " + i[0]);
                          }
                          i = u.exec(n);
                      }
                      null !== a && (s += ' id="' + a + '"'), t.length > 0 && (s += ' class="' + t.join(" ") + '"');
                  }
                  return (s += ">"), null !== r && (s += render(r)), s + "</" + e + ">";
              }
              function readyFunc() {
                  return 1 == arguments.length && "function" == typeof arguments[0] ? jQuery(window).one("showpassage:after", _.bind(arguments[0], jQuery("#passage"))) : jQuery.apply(window, arguments);
              }
              var _ = require("underscore"),
                  marked = require("marked"),
                  jQuery = require("jquery"),
                  Passage = function (e, r, n, s) {
                      (this.id = e), (this.name = r), (this.tags = n), (this.source = _.unescape(s)), (this.links = []);
                  };
              (Passage.render = render),
                  _.extend(Passage.prototype, {
                      render: function () {
                          return render(_.unescape(this.source));
                      },
                  }),
                  (module.exports = Passage);
          },
          { jquery: 1, marked: 3, underscore: 4 },
      ],
      7: [
          function (require, module, exports) {
            'use strict';
            var $ = require('jquery');
            var _ = require('underscore');
            var LZString = require('lz-string');
            
            var Story = function() {
              this.initialize();
            };
            
            Story.prototype.initialize = function() {
              //Find the story and infer the Twine version.
            
              var el, twVersion, selectorAuthor, selectorCSS, selectorScript, selectorSubtitle;
            
              if ($('tw-storydata').length > 0) {
                el = $('tw-storydata');
                twVersion = 2;
                selectorAuthor = 'tw-passagedata[name=StoryAuthor]';
                selectorCSS = '*[type="text/twine-css"]';
                selectorScript = '*[type="text/twine-javascript"]';
                selectorSubtitle = 'tw-passagedata[name=StorySubtitle]';
              } else {
                el = $('#storeArea');
                twVersion = 1;
                selectorAuthor = 'div[tiddler=StoryAuthor]';
                selectorCSS = '*[tags*="stylesheet"]';
                selectorScript = '*[tags*="script"]';
                selectorSubtitle = 'div[tiddler=StorySubtitle]';
              }
            
              // set up basic properties
            
              this.el = el;
            
              /**
               The name of the story.
               @property name
               @type String
               @readonly
              **/
            
              this.name = twVersion == 2 ? el.attr('name') : el.find("div[tiddler=StoryTitle]").text();
            
              /**
               The subtitle of the story.
               @property subtitle
               @type String
               @readonly
              **/
            
              this.subtitle = el.find(selectorSubtitle).html();
            
              /**
               The name of the author.
               @property author
               @type String
               @readonly
              **/
            
              this.author = el.find(selectorAuthor).text();
            
              /**
               The ID of the first passage to be displayed.
               @property startPassage
               @type Number
               @readonly
              **/
            
              this.startPassage = twVersion == 2 ? parseInt(el.attr('startnode')) : $('[tiddler=Start]').index();
            
              /**
               The program that created this story.
            
               @property creator
               @type String
               @readonly
              **/
            
              this.creator = el.attr('creator');
            
              /**
               The version of the program used to create this story.
            
               @property creatorVersion
               @type String
               @readOnly
              **/
            
              this.creatorVersion = el.attr('creator-version');
              
              // initialize history and state
            
              /**
               An array of passage IDs, one for each passage viewed during the current
               session.
            
               @property history
               @type Array
               @readOnly
              **/
            
              this.history = [];
            
              /**
               An array of passages as jq objects, one for each passage viewed 
               during the current
               session.
            
               @property history_dom
               @type Array
               @readOnly
              **/
            
              this.history_dom = [];
            
              /**
               An array of passages (jQ objects), one for each passage viewed 
               since the last response.
            
               @property recent_dom
               @type Array
              **/
            
              this.recent_dom = [];
            
              /**
               An array of passage IDs, one for each passage viewed since 
               the last response.
            
               @property recent
               @type Array
              **/
            
              this.recent = [];
            
              /**
               An object that stores data that persists across a single user session.
               Any other variables will not survive the user pressing back or forward.
            
               @property state
               @type Object
              **/
            
              this.state = {};
            
              /**
               An array of {history, history_dom, state} pairs for use in the
               undo history.
            
               @property undoHistory
               @type Array
              **/
            
              this.undoHistory = [];
            
              /**
               If set to true, then any JavaScript errors are ignored -- normally, play
               would end with a message shown to the user. 
            
               @property ignoreErrors
               @type Boolean
              **/
            
              this.ignoreErrors = false;
            
              /**
               The message shown to users when there is an error and ignoreErrors is not
               true. Any %s in the message will be interpolated as the actual error
               messsage.
            
               @property errorMessage
               @type String
              **/
            
              this.errorMessage = '\u26a0 %s';
            
              // create passage objects
            
              /**
               An array of all passages, indexed by ID.
            
               @property passages
               @type Array
              **/
            
              //this.passages = [];

              // Initialize window.customTrialogueData if it is not already defined
              window.customTrialogueData = window.customTrialogueData || {};

              window.customTrialogueData.passages = [];
            
              /**
               A number representing the ID of the setTimeout() timer for a
               typing event.
            
               @property delayedTypingEvent
               @type Number
              **/
            
              this.delayedTypingEvent = null;
            
              /**
               A number representing the ID of the setTimeout() timer for
               a passage display event.
            
               @property delayedPassageEvent
               @type Number
              **/
            
              this.delayedPassageEvent = null;
            
              /**
               The maximum amount of time in milliseconds that a passage will be delayed
            
               @property maxPassageDelay
               @type Number
              **/
            
              this.maxPassageDelay = 2600;
            
              var p = window.customTrialogueData.passages;
            
              if (twVersion == 2) {
                el.children('tw-passagedata').each(function(el) {
                  var $t = $(this);
                  var id = parseInt($t.attr('pid'));
                  var tags = $t.attr('tags');
                  
                  p[id] = new Passage(
                    id,
                    $t.attr('name'),
                    (tags !== '' && tags !== undefined) ? tags.split(' ') : [],
                    $t.html()
                  );
                });
              } else {
                el.children('*[tiddler]').each(function (index,el) {
                  var $t = $(el);
                  var id = index;
                  var tags = $.trim($t.attr('tags'));
            
                  p[id] = new Passage(
                    id,
                    $t.attr('tiddler'),
                    (tags !== '' && tags !== undefined) ? tags.split(' ') : [],
                    $t.html().replace(/\\n/g, '\n')
                  );
            
                });
            
                $('title').html(this.name);
                $('#ptitle').html(this.name);
            
              }
            
              /**
               An array of user-specific scripts to run when the story is begun.
            
               @property userScripts
               @type Array
              **/
            
              this.userScripts = _.map(
                el.children(selectorScript),
                function(el) {
                  return $(el).html();
                }
              );
            
              /**
               An array of user-specific style declarations to add when the story is begun.
            
               @property userStyles
               @type Array
              **/
            
              this.userStyles = _.map(
                el.children(selectorCSS),
                function(el) {
                  return $(el).html();
                }
              );
            };

            Story.prototype.reset = function() {
              this.initialize();
            };
            
            _.extend(Story.prototype, {
              /**
               Begins playing this story.
            
               @method start
              **/
            
              start: function() {
                // Initialize special passages.
                $('#psubtitle').html(this.subtitle);
                if (this.author)
                  $('#pauthor').html(' by ' + this.author);
            
                // set up history event handler
            
                $('#nav-link-undo').on('click', function(event) {
                  var undoState = this.undoHistory.pop();
            
                  if (undoState) {
                    this.state = undoState.state;
                    this.history_dom = undoState.history_dom;
                    this.history = undoState.history;
            
                    /* undoHistory is only pushed to after a 
                     * user response. To undo the visual history,
                     * we need to remove elements not in
                     * history_dom, then remove the previous 
                     * element and show it again, to update the 
                     * internal state and display user responses.
                     */
            
                    this.clearUserResponses();
                    if (this.delayedTypingEvent !== null) {
                      clearTimeout(this.delayedTypingEvent);
                      this.delayedTypingEvent = null;
                    }
                    this.hideTyping();
                    if (this.delayedPassageEvent !== null) {
                      clearTimeout(this.delayedPassageEvent);
                      this.delayedPassageEvent = null;
                    }
                    $('#phistory').children()
                      .not(this.history_dom)
                      .remove();
                    $('#passage').children()
                      .not(this.history_dom)
                      .remove();
                    $('#phistory').children().last().remove();
                    this.show(this.history[this.history.length-1]);
            
                    if (this.undoHistory.length == 0) {
                      $('#nav-link-undo').css({'visibility': 'hidden'});
                    }
                  }
                }.bind(this));
            
                // set up passage link handler; don't handle historical links
            
                // Store references to event handlers in global variables
                window.customTrialogueClickHandler = function (e) {
                  var closestElement = $(e.target).closest('[data-passage]');
                  if (closestElement.length === 0) {
                    console.error('No element with data-passage found');
                    return;
                  }
                
                  var targetName = closestElement.attr('data-passage');
                  if (!targetName) {
                    console.error('targetName is undefined');
                    // Provide a fallback or handle the error
                    return;
                  }
                
                  console.log('targetName:', targetName); // Log the targetName
                
                  if ($(e.target).closest('#phistory').length == 0) {
                    this.movePassageToHistory();
                    this.clearUserResponses();
                    this.showUserPassage($(e.target).text());
                
                    // Show new passage, without moving the current passage into history, as that has been done already
                    var passageDelay = this.getPassageDelay(targetName);
                    this.showDelayed(targetName, false, true);
                  }
                }.bind(this);
                
                window.customTrialogueHashChangeHandler = function () {
                  this.restore(window.location.hash.replace('#', ''));
                }.bind(this);
                
                // Set up passage link handler; don't handle historical links
                $('body').on('click', 'a[data-passage]', window.customTrialogueClickHandler);
                
                // Set up hash change handler for save/restore
                $(window).on('hashchange', window.customTrialogueHashChangeHandler);
            
                // set up error handler
            
                window.onerror = function(message, url, line) {
                  if (! this.errorMessage || typeof(this.errorMessage) != 'string') {
                    this.errorMessage = Story.prototype.errorMessage;
                  }
            
                  if (!this.ignoreErrors) {
                    if (url) {
                      message += ' (' + url;
            
                      if (line) {
                        message += ': ' + line;
                      }
            
                      message += ')';
                    }
            
                    $('#passage').html(this.errorMessage.replace('%s', message));
                  }
                }.bind(this);
            
                // activate user styles
            
                _.each(this.userStyles, function(style) {
                  $('body').append('<style>' + style + '</style>');
                });
            
                // run user scripts
            
                _.each(this.userScripts, function(script) {
                  eval(script);
                });
            
                /**
                 Triggered when the story is finished loading, and right before
                 the first passage is displayed. The story property of this event
                 contains the story.
            
                 @event startstory
                **/
            
                $.event.trigger('startstory', { story: this });
            
                // try to restore based on the window hash if possible	
            
                if (window.location.hash === '' ||
                  !this.restore(window.location.hash.replace('#', ''))) {
            
                  this.show(this.startPassage);
                }
              },
            
              /**
               Returns the Passage object corresponding to either an ID or name.
               If none exists, then it returns null.
            
               @method passage
               @param idOrName {String or Number} ID or name of the passage
               @return Passage object or null
              **/
            
              passage: function(idOrName) {
                if (_.isNumber(idOrName)) {
                  return window.customTrialogueData.passages[idOrName];
                }
                else if (_.isString(idOrName)) {
                  return _.findWhere(window.customTrialogueData.passages, { name: idOrName });
                }
              },
            
              /**
               Displays a passage on the page, replacing the current one. If
               there is no passage by the name or ID passed, an exception is raised.
            
               Calling this immediately inside a passage (i.e. in its source code) will
               *not* display the other passage. Use Story.render() instead.
            
               @method show
               @param idOrName {String or Number} ID or name of the passage
               @param noHistory {Boolean} if true, then this will not be recorded in the story history
              **/
            
              show: function(idOrName, noHistory, noMove) {
                var passage = this.passage(idOrName);
            
                if (!passage) {
                  throw new Error(
                    'There is no passage with the ID or name "' + idOrName + '"'
                  );
                }
            
                /**
                 Triggered whenever a passage is about to be replaced onscreen with another.
                 The passage being hidden is stored in the passage property of the event.
            
                 @event hidepassage
                **/
            
                $.event.trigger('hidepassage', { passage: window.passage });
            
                /**
                 Triggered whenever a passage is about to be shown onscreen.
                 The passage being displayed is stored in the passage property of the event.
            
                 @event showpassage
                **/
            
                $.event.trigger('showpassage', { passage: passage });
            
                /**
                 Save the old passage html to the passage history.
                 **/
            
                if (!noMove) {
                  this.movePassageToHistory();
                }
            
                /**
                 Create passage element
                 **/
            
                window.passage = passage;
            
                var speaker = this.getPassageSpeaker(passage);
            
                var passageElem;
                if (speaker == 'undefined') {
                  passageElem = $('<div class="meta-passage">' + passage.render() + '</div>');
                } else {
                  passageElem = $(
                    '<div data-speaker="' + speaker + '" class="chat-passage-wrapper ' + passage.tags.join(' ') + '">' + 
                        '<div data-speaker="' + speaker + '" class="chat-passage">' + 
                        passage.render() + 
                      '</div>' +
                    '</div>'
                  );  
                }
                
                if (!noHistory) {
                  this.recent.push(passage.id);
                  this.recent_dom.push(passageElem[0]);
                }
            
                /**
                 Add passage element to passage container element
                 **/
            
                if (window.isScriptActive) {
                  $('#passage')
                    .append(passageElem)
                    .fadeIn('slow');
                } else {
                  //console.log('Script has been unloaded, stopping passage append.');
                }
                
                this.showUserResponses();
                
                this.scrollChatIntoView();
            
                this.pcolophon();
            
                /**
                 Triggered after a passage has been shown onscreen, and is now
                 displayed in the div with id passage. The passage being displayed is
                 stored in the passage property of the event.
            
                 @event showpassage:after
                 **/
            
                $.event.trigger('showpassage:after', { passage: passage });
              },
            
              /**
               move current passage to history
               **/
              movePassageToHistory: function () {
                // $('#passage').hide();
                
                this.emptyPassageLinks();
            
                this.pcopy();
              },
              
              /**
               render passage links as UserResponses in UserResponsePanel
               **/
              showUserResponses: function () {
                _.each(passage.links, function (link) {
                  // check if link already exists
                  // if ($('a[data-passage="' + _.escape(link.target) + '"]').length > 0) {
                  //   return;
                  // }
                  $('#user-response-panel').append(
                    '<a ' + 
                      'href="javascript:void(0)"' +
                      'class="user-response"' +
                      'data-passage="' + _.escape(link.target) + '"' +
                    '>' + 
                      link.display + 
                    '</a>'
                  ).fadeIn('slow')
                });
              },
            
              /**
               remove UserResponses from UserResponsePanel
               **/
            
              clearUserResponses: function () {
                // remove UserResponse links
                $('#user-response-panel').empty();
              },
            
              /**
               render chosen UserResponse as passage in pHistory
               **/
            
              showUserPassage: function (text) {
                this.history = this.history.concat(this.recent);
                this.history_dom = this.history_dom.concat(this.recent_dom);
                this.recent = [];
                this.recent_dom = [];
            
                this.undoHistory.push(
                  {
                    state: this.state,
                    history_dom: this.history_dom,
                    history: this.history
                  }
                );
                $('#nav-link-undo').css({'visibility': 'visible'});
            
                // render clicked link as UserPassage
                var user_passage = $('<div class="chat-passage-wrapper" data-speaker="you"><div class="chat-passage phistory" data-speaker="you" data-upassage="' + window.passage.id + '">' + text + '</div></div>');
                $('#phistory').append(user_passage);
                this.recent_dom.push(user_passage[0]);
                this.scrollChatIntoView();
              },
            
              /**
               scroll bottom of chat-panel into view to ensure recently 
               added passages can be read
               **/
            
              scrollChatIntoView: function () {
                var d = document.documentElement;
                var offset = d.scrollTop + window.innerHeight;
                var height = d.offsetHeight;

                var scrollingNow = false;
            
                if (!scrollingNow && height - offset > 40) {
                  scrollingNow = true;
                  setTimeout(function() {
                    $('html, body').animate({scrollTop: $('.chat-panel').height()}, 1000);
                    scrollingNow = false;
                  }, 1000); // Delay by 1 second (1000 milliseconds)
                }
              },
            
              /**
               Copies the colophon into an end passage.
            
               @method pcolophon
              **/
              
              pcolophon: function() {
                if ($.inArray('End', window.passage.tags) > -1 && this.passage('StoryColophon') != null) {
                  $(this.passage('StoryColophon').render()).hide().appendTo("#passage").fadeIn('slow');
                }
              },
              
              /**
               Copies the current passage text into the passage history div.
            
               @method pcopy
              **/
              
              pcopy: function() {
                if (parseInt(window.passage.id,10)){
                  // (I used .remove() here to remove any event handlers, which shouldn't persist.)
                  var removed = $('#passage').children().remove();
                  $('#phistory').append(removed);
                }
              },
              
              /**
               Empties the current passage object links attribute,
               making space for the next passage's data
            
               @method emptyPassageLinks
              **/
              
              emptyPassageLinks: function() {
                passage.links = [];
              },
            
            
              /**
               Retrieves the speaker from the passage tags
            
               @method getPassageSpeaker
               @param passage {Passage} current window.passage object
               @return {String} Speaker name of passage
              **/
              
              getPassageSpeaker: function(passage) {
                if (!String.prototype.startsWith) {
                  String.prototype.startsWith = function(search, pos) {
                    return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
                  };
                }
                var speakerTag = _.find(passage.tags, function(tag){ return tag.startsWith('speaker-'); });
                if (typeof speakerTag === 'undefined') {
                  return 'undefined';
                }
                return speakerTag.substring(8);
              },
              
              /**
               Returns the HTML source for a passage. This is most often used when
               embedding one passage inside another. In this instance, make sure to
               use <%= %> instead of <%- %> to avoid incorrectly encoding HTML entities.
            
               @method render
               @param idOrName {String or Number} ID or name of the passage
               @return {String} HTML source code
              **/
            
              render: function(idOrName) {
                var passage = this.passage(idOrName);
            
                if (!passage) {
                  throw new Error('There is no passage with the ID or name ' + idOrName);
                }
            
                return passage.render();
              },
            
              /**
               Jump from one passage to another, 
               delayed based on the length of the target passage
            
               @method showDelayed
               @param idOrName {String or Number} ID or name of the passage
              **/
            
              showDelayed: function (idOrName, noHistory, noMove) {
                var typingDelayRatio = 0.3;
                var delayMS = this.getPassageDelay(idOrName);
            
                var speaker = this.getPassageSpeaker(this.passage(idOrName));
            
                // show animation
                if (speaker != 'undefined') {
                  this.delayedTypingEvent = _.delay(
                    function(){
                      story.showTyping(idOrName);
                    },
                    delayMS * typingDelayRatio
                  );
                } else {
                  delayMS = 1000;
                }
                
                this.delayedPassageEvent = _.delay(
                  function(){
                    story.hideTyping();
                    story.show(idOrName, noHistory, noMove);
                  },
                  delayMS
                );
            
              },
            
              /**
               get number of milliseconds to wait based on target passage text length
            
               @method getPassageDelay
               @param idOrName {String or Number} ID or name of the passage
              **/
            
              getPassageDelay: function (idOrName) {
                var target = this.passage(idOrName);
                var targetSourceTextLength = $('<div></div>').html(target.source).text().length;
                var targetUserResponseLength = _.reduce(
                  target.links, 
                  function(memo, link){ 
                    return memo + link.display.length + 4; // + 4 for '[['+']]'
                  }, 
                  0
                );
                var targetTextLength = targetSourceTextLength - targetUserResponseLength;
                var msPerChar = 10;
                var delayMS = targetTextLength * msPerChar;
                var delayThresholded = !window.isScriptActive ? 0 : Math.min(delayMS, this.maxPassageDelay);
                return delayThresholded;
              },
            
              /**
               turn typing animation on
            
               @method toggleTyping
               @param idOrName {String or Number} ID or name of the passage
              **/
            
              showTyping: function (idOrName) {
                var speaker = this.getPassageSpeaker(this.passage(idOrName));
                $('#animation-container .chat-passage-wrapper').attr('data-speaker', speaker);
                $('#animation-container .chat-passage-wrapper .chat-passage').attr('data-speaker', speaker);
                $('#animation-container').fadeIn('slow');
                this.scrollChatIntoView();
              },
            
              /**
               turn typing animation off
            
               @method toggleTyping
               @param idOrName {String or Number} ID or name of the passage
              **/
            
              hideTyping: function (idOrName) {
                $('#animation-container').hide();
              },
            
              /**
               Returns a hash value representing the current state of the story.
            
               @method saveHash
               @return String hash
              **/
            
              saveHash: function()
              {	
                return LZString.compressToBase64(JSON.stringify({ state: this.state, history: this.history }));
              },
            
              /**
               Sets the URL's hash property to the hash value created by saveHash().
            
               @method save
               @return String hash
              **/
            
              save: function()
              {
                /**
                 Triggered whenever story progress is saved.
            
                 @event save
                **/
            
                $.event.trigger('save');
                window.location.hash = this.saveHash();
              },
              restore: function (hash)
              {
                /**
                 Triggered before trying to restore from a hash.

                @event restore
                **/

                $.event.trigger('restore');

                try
                {
                  var save = JSON.parse(LZString.decompressFromBase64(hash));
                  this.state = save.state;
                  this.history = save.history;
                  this.show(this.history[this.history.length - 1], true);
                }
                catch (e)
                {
                  // swallow the error

                  /**
                   Triggered if there was an error with restoring from a hash.

                  @event restorefailed
                  **/

                  $.event.trigger('restorefailed', { error: e });
                  return false;
                };

                /**
                 Triggered after completing a restore from a hash.

                @event restore:after
                **/

                $.event.trigger('restore:after');
                return true;
              },
              }),
                  (module.exports = Story);
          },
          { jquery: 1, "lz-string": 2, underscore: 4 },
      ],
  },
  {},
  [5]
);
