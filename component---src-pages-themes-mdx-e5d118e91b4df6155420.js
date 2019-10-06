(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    294: function(e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, '_frontmatter', function() {
          return c;
        }),
        t.d(a, 'default', function() {
          return N;
        });
      t(4), t(5), t(3), t(7), t(10), t(0);
      var s = t(51),
        n = t(183);
      var c = {},
        p = function(e) {
          return function(a) {
            return (
              console.warn(
                'Component ' +
                  e +
                  ' was not imported, exported, or provided by MDXProvider as global scope',
              ),
              Object(s.b)('div', a)
            );
          };
        },
        b = p('Image'),
        o = p('Demo'),
        m = p('Tippy'),
        i = p('Button'),
        j = {_frontmatter: c},
        O = n.default;
      function N(e) {
        var a = e.components,
          t = (function(e, a) {
            if (null == e) return {};
            var t,
              s,
              n = {},
              c = Object.keys(e);
            for (s = 0; s < c.length; s++)
              (t = c[s]), a.indexOf(t) >= 0 || (n[t] = e[t]);
            return n;
          })(e, ['components']);
        return Object(s.b)(
          O,
          Object.assign({}, j, t, {components: a, mdxType: 'MDXLayout'}),
          Object(s.b)(
            'p',
            null,
            'Tippy is highly themeable through CSS. The sky is the limit when it comes to\ntheir appearance!',
          ),
          Object(s.b)('h3', null, 'Included themes'),
          Object(s.b)(
            'p',
            null,
            'To use the ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'light',
            ),
            ', ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'light-border',
            ),
            ', or ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'material',
            ),
            ' themes shown in the demo, you\nmust import them since they are separate from the main CSS file.',
          ),
          Object(s.b)(
            'p',
            null,
            'Only import the themes you actually use to conserve size and/or HTTP requests.',
          ),
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(s.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js/themes/light.css',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js/themes/light-border.css',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js/themes/material.css',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js/themes/translucent.css',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(s.b)(
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
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(s.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'button',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'theme',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'light',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(s.b)(
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
          Object(s.b)('h3', null, 'Tippy elements'),
          Object(s.b)(
            'p',
            null,
            "To learn how to create a theme, it's helpful to understand the basic structure\nof a tippy element:",
          ),
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'html'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-html'}),
              Object(s.b)(
                'code',
                Object.assign(
                  {parentName: 'pre'},
                  {className: 'language-html'},
                ),
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'div',
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'class',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'tippy-popper',
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n  ',
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'div',
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'class',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'tippy-tooltip',
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'data-placement',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'top',
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n    ',
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'div',
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'class',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'tippy-content',
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n      My content\n    ',
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'div',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n  ',
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'div',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'div',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
              ),
            ),
          ),
          Object(s.b)(
            'p',
            null,
            'A tippy is essentially three nested ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'div',
            ),
            's.',
          ),
          Object(s.b)(
            'ul',
            null,
            Object(s.b)(
              'li',
              {parentName: 'ul'},
              Object(s.b)(
                'code',
                Object.assign({parentName: 'li'}, {className: 'language-text'}),
                'tippy-popper',
              ),
              " is the outermost node. It is what Popper.js uses to position\nthe tippy. You don't need to apply any styles to this element.",
            ),
            Object(s.b)(
              'li',
              {parentName: 'ul'},
              Object(s.b)(
                'code',
                Object.assign({parentName: 'li'}, {className: 'language-text'}),
                'tippy-tooltip',
              ),
              ' is the actual tooltip node.',
            ),
            Object(s.b)(
              'li',
              {parentName: 'ul'},
              Object(s.b)(
                'code',
                Object.assign({parentName: 'li'}, {className: 'language-text'}),
                'tippy-content',
              ),
              ' is the content node.',
            ),
          ),
          Object(s.b)(
            'p',
            null,
            'Depending on the props supplied, there will exist other elements inside it:',
          ),
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'html'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-html'}),
              Object(s.b)(
                'code',
                Object.assign(
                  {parentName: 'pre'},
                  {className: 'language-html'},
                ),
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'div',
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'class',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'tippy-popper',
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n  ',
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'div',
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'class',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'tippy-tooltip',
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'data-placement',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'top',
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n    ',
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'div',
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'class',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'tippy-backdrop',
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'div',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '\x3c!-- animateFill: true --\x3e',
                ),
                '\n    ',
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'div',
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'class',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'tippy-arrow',
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'div',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '\x3c!-- arrow: true --\x3e',
                ),
                '\n    ',
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'div',
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'class',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'tippy-content',
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n      My content\n    ',
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'div',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n  ',
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'div',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'div',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
              ),
            ),
          ),
          Object(s.b)('h4', null, 'Browser DevTools'),
          Object(s.b)(
            'p',
            null,
            "It's highly recommended you inspect a tippy element via your browser's DevTools.\nAn easy way to do this is to give it ",
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'hideOnClick: false',
            ),
            ' and ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              "trigger: 'click'",
            ),
            '\nprops so that it stays visible when focus is switched to the DevTools window.',
          ),
          Object(s.b)(
            'p',
            null,
            'The tippy element by default gets appended to the very end of the ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '<body>',
            ),
            ', so\nyou should scroll down the elements panel.',
          ),
          Object(s.b)(b, {
            name: 'browser-devtools-tippy-element.jpg',
            mdxType: 'Image',
          }),
          Object(s.b)('h3', null, 'Creating a theme'),
          Object(s.b)(
            'p',
            null,
            'Themes are created by including a class on the ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'tippy-tooltip',
            ),
            ' element as part\nof a selector in the form ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '.tippy-tooltip.x-theme',
            ),
            ". Let's demonstrate\nthis by creating our own theme called ",
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'tomato',
            ),
            '.',
          ),
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'css'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-css'}),
              Object(s.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-css'}),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token selector'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token class'},
                    ),
                    '.tippy-tooltip.tomato-theme',
                  ),
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token property'},
                  ),
                  'background-color',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' tomato',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n  ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token property'},
                  ),
                  'color',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' yellow',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '}',
                ),
              ),
            ),
          ),
          Object(s.b)(
            'p',
            null,
            'To apply the theme, specify a ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'theme',
            ),
            ' prop without the ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '-theme',
            ),
            ' suffix:',
          ),
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(s.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'button',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'theme',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tomato',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(s.b)(
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
          Object(s.b)(
            o,
            {mdxType: 'Demo'},
            Object(s.b)(
              m,
              {theme: 'tomato', mdxType: 'Tippy'},
              Object(s.b)(i, {mdxType: 'Button'}, 'Tomato theme'),
            ),
          ),
          Object(s.b)('h3', null, 'Styling the arrow'),
          Object(s.b)(
            'p',
            null,
            'There are two types of arrows available: traditional CSS arrows (using the\n',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'border',
            ),
            ' trick), and a custom round SVG arrow.',
          ),
          Object(s.b)('h4', null, 'CSS arrow'),
          Object(s.b)(
            'p',
            null,
            "To style the default (sharp) CSS arrow, you'll need to target each different\nbase placement (using the ",
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'data-placement',
            ),
            ' attribute on ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '.tippy-tooltip',
            ),
            '\nelement) and apply it to the ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '.tippy-arrow',
            ),
            ' element:',
          ),
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'css'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-css'}),
              Object(s.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-css'}),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token selector'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token class'},
                    ),
                    '.tippy-tooltip.tomato-theme',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attribute'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '[',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token attribute'},
                      ),
                      'data-placement',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token operator'},
                      ),
                      '^=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token value'},
                      ),
                      "'top'",
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      ']',
                    ),
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token class'},
                    ),
                    '.tippy-arrow',
                  ),
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token property'},
                  ),
                  'border-top-color',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' tomato',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '}',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token selector'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token class'},
                    ),
                    '.tippy-tooltip.tomato-theme',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attribute'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '[',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token attribute'},
                      ),
                      'data-placement',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token operator'},
                      ),
                      '^=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token value'},
                      ),
                      "'bottom'",
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      ']',
                    ),
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token class'},
                    ),
                    '.tippy-arrow',
                  ),
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token property'},
                  ),
                  'border-bottom-color',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' tomato',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '}',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token selector'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token class'},
                    ),
                    '.tippy-tooltip.tomato-theme',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attribute'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '[',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token attribute'},
                      ),
                      'data-placement',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token operator'},
                      ),
                      '^=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token value'},
                      ),
                      "'left'",
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      ']',
                    ),
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token class'},
                    ),
                    '.tippy-arrow',
                  ),
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token property'},
                  ),
                  'border-left-color',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' tomato',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '}',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token selector'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token class'},
                    ),
                    '.tippy-tooltip.tomato-theme',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attribute'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '[',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token attribute'},
                      ),
                      'data-placement',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token operator'},
                      ),
                      '^=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token value'},
                      ),
                      "'right'",
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      ']',
                    ),
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token class'},
                    ),
                    '.tippy-arrow',
                  ),
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token property'},
                  ),
                  'border-right-color',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' tomato',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '}',
                ),
              ),
            ),
          ),
          Object(s.b)('h4', null, 'SVG arrow'),
          Object(s.b)(
            'p',
            null,
            'First import the ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'svg-arrow.css',
            ),
            ' stylesheet for SVG arrow styling:',
          ),
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(s.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js/dist/svg-arrow.css',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(s.b)(
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
          Object(s.b)(
            'p',
            null,
            "To color an SVG arrow, it's as simple as specifying the ",
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'fill',
            ),
            ' and targeting\n',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '.tippy-svg-arrow',
            ),
            ':',
          ),
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'css'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-css'}),
              Object(s.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-css'}),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token selector'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token class'},
                    ),
                    '.tippy-tooltip.tomato-theme',
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token class'},
                    ),
                    '.tippy-svg-arrow',
                  ),
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token property'},
                  ),
                  'fill',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' tomato',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '}',
                ),
              ),
            ),
          ),
          Object(s.b)(
            'p',
            null,
            'There is a default round arrow SVG shape exported from the package for you to\nuse (seen on the demo).',
          ),
          Object(s.b)('p', null, 'Node:'),
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(s.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                'roundArrow',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'from',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token string'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                  'tippy.js',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    "'",
                  ),
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'reference',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'arrow',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' roundArrow',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(s.b)(
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
          Object(s.b)('p', null, 'Browser:'),
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(s.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'reference',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'arrow',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'tippy',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '.',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token access property'},
                  ),
                  'roundArrow',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(s.b)(
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
          Object(s.b)(
            o,
            {mdxType: 'Demo'},
            Object(s.b)(
              m,
              {theme: 'tomato', mdxType: 'Tippy'},
              Object(s.b)(i, {mdxType: 'Button'}, 'CSS arrow'),
            ),
            Object(s.b)(
              m,
              {theme: 'tomato', arrow: 'round', mdxType: 'Tippy'},
              Object(s.b)(i, {mdxType: 'Button'}, 'SVG arrow'),
            ),
          ),
          Object(s.b)('h3', null, 'Changing the arrow size'),
          Object(s.b)(
            'h4',
            null,
            'Option 1: ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'h4'}, {className: 'language-text'}),
              'transform: scale()',
            ),
          ),
          Object(s.b)(
            'p',
            null,
            'This is the easiest technique and works for most cases:',
          ),
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'css'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-css'}),
              Object(s.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-css'}),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token selector'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token class'},
                    ),
                    '.tippy-tooltip.tomato-theme',
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token class'},
                    ),
                    '.tippy-arrow',
                  ),
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token property'},
                  ),
                  'transform',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'scale',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '(',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '1.5',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ')',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '}',
                ),
              ),
            ),
          ),
          Object(s.b)('h4', null, 'Option 2: Pixel increase'),
          Object(s.b)(
            'p',
            null,
            'If your tippy theme has a ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'border',
            ),
            ' (e.g. the included ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'light-border',
            ),
            ' theme),\nthen the ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'transform: scale()',
            ),
            ' technique distorts the border width of the arrow.\nInstead, you will need to change the size of the arrow in pixels directly.',
          ),
          Object(s.b)(
            'p',
            null,
            'You will also need to change the size of the border pesudo-elements (',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '::before',
            ),
            '\nand ',
            Object(s.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '::after',
            ),
            ") as well. It's recommended to investigate the CSS of the arrow via\nDevTools.",
          ),
          Object(s.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'css'},
            Object(s.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-css'}),
              Object(s.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-css'}),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token selector'},
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token class'},
                    ),
                    '.tippy-tooltip.tomato-theme',
                  ),
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attribute'},
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '[',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token attribute'},
                      ),
                      'data-placement',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token operator'},
                      ),
                      '^=',
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token value'},
                      ),
                      "'top'",
                    ),
                    Object(s.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      ']',
                    ),
                  ),
                  ' ',
                  Object(s.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token class'},
                    ),
                    '.tippy-arrow',
                  ),
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token property'},
                  ),
                  'border-width',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '12',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token unit'},
                  ),
                  'px',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '12',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token unit'},
                  ),
                  'px',
                ),
                ' ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '0',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n  ',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token property'},
                  ),
                  'border-top-color',
                ),
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' tomato',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  '}',
                ),
                '\n\n',
                Object(s.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '/* And so on for each placement... */',
                ),
              ),
            ),
          ),
          Object(s.b)(
            o,
            {mdxType: 'Demo'},
            Object(s.b)(
              m,
              {theme: 'tomato scaled-arrow', arrow: !0, mdxType: 'Tippy'},
              Object(s.b)(i, {mdxType: 'Button'}, 'Scaled arrow'),
            ),
          ),
        );
      }
      N.isMDXComponent = !0;
    },
  },
]);
//# sourceMappingURL=component---src-pages-themes-mdx-e5d118e91b4df6155420.js.map
