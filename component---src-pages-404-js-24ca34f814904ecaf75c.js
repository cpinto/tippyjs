(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    278: function(e, t, r) {
      'use strict';
      r.r(t);
      r(29), r(9), r(4), r(5), r(3), r(7);
      var n = r(0),
        o = r.n(n),
        a = r(183),
        c = r(162);
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function u(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      t.default = function(e) {
        var t = (function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? i(r, !0).forEach(function(t) {
                  u(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : i(r).forEach(function(t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
          }
          return e;
        })({}, e.pageContext, {frontmatter: {title: '404: Not Found'}});
        return o.a.createElement(
          a.default,
          {pageContext: t},
          o.a.createElement(c.a, {title: '404: Not found', pageContext: t}),
          o.a.createElement(
            'p',
            null,
            'Unfortunately, the page you were looking for does not exist.',
          ),
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-404-js-24ca34f814904ecaf75c.js.map
