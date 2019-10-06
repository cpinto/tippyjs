(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    295: function(e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, '_frontmatter', function() {
          return c;
        }),
        t.d(a, 'default', function() {
          return p;
        });
      t(4), t(5), t(3), t(7), t(10), t(0);
      var n = t(51),
        s = t(183);
      var c = {},
        b = {_frontmatter: c},
        o = s.default;
      function p(e) {
        var a = e.components,
          t = (function(e, a) {
            if (null == e) return {};
            var t,
              n,
              s = {},
              c = Object.keys(e);
            for (n = 0; n < c.length; n++)
              (t = c[n]), a.indexOf(t) >= 0 || (s[t] = e[t]);
            return s;
          })(e, ['components']);
        return Object(n.b)(
          o,
          Object.assign({}, b, t, {components: a, mdxType: 'MDXLayout'}),
          Object(n.b)(
            'p',
            null,
            'A tippy instance is an individual tippy object. It has a bunch of properties and\nmethods that contain information and functionality to manipulate the tippy\nprogrammatically.',
          ),
          Object(n.b)('h3', null, 'Accessing an instance'),
          Object(n.b)(
            'p',
            null,
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'tippy()',
            ),
            ' is a generic constructor to ',
            Object(n.b)('strong', {parentName: 'p'}, 'create'),
            ' tippy instances. It either\nreturns the tippy instance directly, or returns an array of them.',
          ),
          Object(n.b)('h4', null, 'Element'),
          Object(n.b)(
            'p',
            null,
            'If passing an element directly, the instance is directly returned:',
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token keyword'},
                  ),
                  'const',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token constant'},
                  ),
                  'button',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token dom variable'},
                  ),
                  'document',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token func method'},
                  ),
                  'querySelector',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'button',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token keyword'},
                  ),
                  'const',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token constant'},
                  ),
                  'instance',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'button',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// type Instance',
                ),
              ),
            ),
          ),
          Object(n.b)('h4', null, 'String, NodeList, Element[]'),
          Object(n.b)(
            'p',
            null,
            'If passing a CSS selector ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'String',
            ),
            ', ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'NodeList',
            ),
            ', or an array of ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'Element',
            ),
            's, then\nan array of instances get returned (since potentially many instances can be\ncreated):',
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token keyword'},
                  ),
                  'const',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token constant'},
                  ),
                  'instances',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'button',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// type Instance[] (array)',
                ),
              ),
            ),
          ),
          Object(n.b)(
            'h4',
            null,
            Object(n.b)(
              'code',
              Object.assign({parentName: 'h4'}, {className: 'language-text'}),
              '_tippy',
            ),
            ' property',
          ),
          Object(n.b)(
            'p',
            null,
            "If you need to access the instance later, this property can be useful if you\ndidn't assign the instance(s) to a variable. Both the reference element and the\npopper element have the instance attached as the ",
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '_tippy',
            ),
            ' property.',
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token keyword'},
                  ),
                  'const',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token constant'},
                  ),
                  'button',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token dom variable'},
                  ),
                  'document',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token func method'},
                  ),
                  'querySelector',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'button',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'button',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token keyword'},
                  ),
                  'const',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token constant'},
                  ),
                  'instance',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '=',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'button',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  '_tippy',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
          Object(n.b)('h3', null, 'Shape and properties'),
          Object(n.b)(
            'p',
            null,
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'instance',
            ),
            " is a plain object. It's best to log it out yourself and investigate\nin DevTools:",
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(n.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token console'},
                  ),
                  'console',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token func method'},
                  ),
                  'log',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'instance',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
//# sourceMappingURL=component---src-pages-tippy-instance-mdx-4a8142dd6ab65a5866cc.js.map
