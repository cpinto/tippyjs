(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    295: function(e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, '_frontmatter', function() {
          return m;
        }),
        t.d(a, 'default', function() {
          return y;
        });
      t(4), t(5), t(3), t(7), t(115), t(116), t(10), t(0);
      var n = t(51),
        s = t(276),
        c = t(47),
        b = t(151),
        o = t(152),
        p = t(154),
        i = t(155);
      var m = {},
        j = function(e) {
          return function(a) {
            return (
              console.warn(
                'Component ' +
                  e +
                  ' was not imported, exported, or provided by MDXProvider as global scope',
              ),
              Object(n.b)('div', a)
            );
          };
        },
        O = j('Emoji'),
        l = j('Demo'),
        r = j('Tippy'),
        N = j('Button'),
        g = j('Row'),
        u = j('Col'),
        d = {_frontmatter: m},
        k = s.a;
      function y(e) {
        var a,
          t = e.components,
          s = (function(e, a) {
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
          k,
          Object.assign({}, d, s, {components: t, mdxType: 'MDXLayout'}),
          Object(n.b)(
            'p',
            null,
            'Tippy.js is a highly customizable tooltip and popover library powered by\n',
            Object(n.b)(
              'a',
              Object.assign({parentName: 'p'}, {href: 'https://popper.js.org'}),
              'Popper.js',
            ),
            '.',
          ),
          Object(n.b)(
            'ul',
            null,
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              Object(n.b)(O, {emoji: '🍀', mdxType: 'Emoji'}),
              ' ',
              Object(n.b)('strong', null, 'Versatile:'),
              ' Create anything from static text tooltips to complex interactive HTML popovers',
            ),
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              Object(n.b)(O, {emoji: '⚡', mdxType: 'Emoji'}),
              ' ',
              Object(n.b)('strong', null, 'Fast:'),
              ' Optimized positioning engine for flipping and overflow prevention',
            ),
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              Object(n.b)(O, {emoji: '🖱️', mdxType: 'Emoji'}),
              ' ',
              Object(n.b)('strong', null, 'Universal:'),
              ' Compatible with mouse, keyboard, and touch inputs',
            ),
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              Object(n.b)(O, {emoji: '♿', mdxType: 'Emoji'}),
              ' ',
              Object(n.b)('strong', null, 'Accessible:'),
              ' Focus and ARIA attributes taken care of by default',
            ),
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              Object(n.b)(O, {emoji: '🖌', mdxType: 'Emoji'}),
              ' ',
              Object(n.b)('strong', null, 'Themeable:'),
              ' Style via custom CSS, includes extra themes and animations',
            ),
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              Object(n.b)(O, {emoji: '🌳', mdxType: 'Emoji'}),
              ' ',
              Object(n.b)('strong', null, 'Tree shakeable:'),
              ' Code is split into separate pieces via addons and plugins',
            ),
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              Object(n.b)(O, {emoji: '🌐', mdxType: 'Emoji'}),
              ' ',
              Object(n.b)('strong', null, 'Supports IE11+:'),
              ' About 99% of desktop users and 97% of mobile users',
            ),
          ),
          Object(n.b)('h3', null, "Exploring Tippy's features"),
          Object(n.b)('p', null, 'Given an element on the document...'),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'html'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-html'}),
              Object(n.b)(
                'code',
                Object.assign(
                  {parentName: 'pre'},
                  {className: 'language-html'},
                ),
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'button',
                  ),
                  ' ',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'id',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'myButton',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                'My Button',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'button',
                  ),
                  Object(n.b)(
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
          Object(n.b)(
            'p',
            null,
            "We can give it many different types of tippy tooltips. Let's explore some of\nthem below!",
          ),
          Object(n.b)('h3', null, 'Default'),
          Object(n.b)(
            'p',
            null,
            'The default tippy tooltip looks like this: a background color of ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '#333',
            ),
            ' and an\narrow:',
          ),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            Object(n.b)(
              r,
              {mdxType: 'Tippy'},
              Object(n.b)(N, {mdxType: 'Button'}, 'My Button'),
            ),
          ),
          Object(n.b)('p', null, "Here's how you initialize it:"),
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
                  '#myButton',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'content',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
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
                    '"',
                  ),
                  "I'm a Tippy tooltip!",
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '"',
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
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
              ),
            ),
          ),
          Object(n.b)(
            'p',
            null,
            'By default, a tippy is triggered by either ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'mouseenter',
            ),
            ' or ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'focus',
            ),
            ' events so\nthey appear when hovered, focused via keyboard navigation, or tapped when using\na touch device.',
          ),
          Object(n.b)('h3', null, 'Placement'),
          Object(n.b)(
            'p',
            null,
            'Tooltips can be placed in four base ways in relation to the reference element.\nAdditionally, the tooltip can be shifted along the axis using the suffix\n',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '-start',
            ),
            ' or ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '-end',
            ),
            '.',
          ),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            Object(n.b)(
              g,
              {mdxType: 'Row'},
              c.a.map(function(e, a) {
                return Object(
                  n.b,
                )(u, {key: e, base: 12, xs: 6, md: 4, lg: 6, xl: 4, mdxType: 'Col'}, Object(n.b)(r, {key: e, content: 'Tooltip', placement: e, flip: !1, arrow: !1, mdxType: 'Tippy'}, Object(n.b)(N, {style: {display: 'inline-block', width: '100%', height: 50, margin: '0.5rem 0'}, mdxType: 'Button'}, e)));
              }),
            ),
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
                  '#myButton',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'placement',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
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
                  'bottom',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'arrow',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token boolean'},
                  ),
                  'false',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
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
              ),
            ),
          ),
          Object(n.b)(
            'p',
            null,
            'If a tippy cannot fit within its desired placement, it will flip to the opposite\nplacement if there is not enough space. In the above examples, flipping has been\ndisabled to demonstrate each placement properly.',
          ),
          Object(n.b)('h3', null, 'Arrows'),
          Object(n.b)(
            'p',
            null,
            'Tooltips can have an arrow that points toward the reference element. The size\nand proportion can also be modified with CSS. Getting even more advanced, you\ncan use any type of SVG shape as the arrow, like a speech bubble shape.',
          ),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            Object(n.b)(
              r,
              {arrow: !0, animation: 'fade', mdxType: 'Tippy'},
              Object(n.b)(N, {mdxType: 'Button'}, 'Default'),
            ),
            Object(n.b)(
              r,
              (((a = {arrow: 'round', animation: 'fade'}).animation = 'fade'),
              (a.mdxType = 'Tippy'),
              a),
              Object(n.b)(N, {mdxType: 'Button'}, 'Round'),
            ),
            Object(n.b)(
              r,
              {
                animation: 'fade',
                theme: 'large-arrow',
                distance: 16,
                mdxType: 'Tippy',
              },
              Object(n.b)(N, {mdxType: 'Button'}, 'Large'),
            ),
            Object(n.b)(
              r,
              {
                animation: 'fade',
                theme: 'small-arrow',
                distance: 8,
                mdxType: 'Tippy',
              },
              Object(n.b)(N, {mdxType: 'Button'}, 'Small'),
            ),
            Object(n.b)(
              r,
              {animation: 'fade', theme: 'wide-arrow', mdxType: 'Tippy'},
              Object(n.b)(N, {mdxType: 'Button'}, 'Wide'),
            ),
            Object(n.b)(
              r,
              {animation: 'fade', theme: 'narrow-arrow', mdxType: 'Tippy'},
              Object(n.b)(N, {mdxType: 'Button'}, 'Narrow'),
            ),
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
                  '#myButton',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// Default CSS arrow',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'arrow',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token boolean'},
                  ),
                  'true',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// Built-in SVG shape',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'arrow',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
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
                  'round',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// Your own element',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'arrow',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token class class-name'},
                  ),
                  'String',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '|',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token class class-name'},
                  ),
                  'SVGElement',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
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
              ),
            ),
          ),
          Object(n.b)('h3', null, 'Animations'),
          Object(n.b)(
            'p',
            null,
            "Tooltips can have different types of transition animations. By default, it's a\nsimple ",
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'fade',
            ),
            ' (opacity transition).',
          ),
          Object(n.b)('h4', null, 'Extra included animations'),
          Object(n.b)(
            'p',
            null,
            'These animations are included in the package and can be imported separately.',
          ),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            Object(n.b)(
              g,
              {mdxType: 'Row'},
              c.b.map(function(e) {
                return Object(
                  n.b,
                )(u, {key: e, base: 12, md: 4, lg: 6, xl: 4, mdxType: 'Col'}, Object(n.b)(r, {animation: e, animateFill: !1, mdxType: 'Tippy'}, Object(n.b)(N, {style: {width: '100%', margin: '0.5rem 0', height: 50}, mdxType: 'Button'}, e)));
              }),
            ),
          ),
          Object(n.b)('h4', null, 'Material filling effect'),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            Object(n.b)(
              r,
              {animateFill: !0, animation: 'shift-away', mdxType: 'Tippy'},
              Object(n.b)(N, {mdxType: 'Button'}, 'Text'),
            ),
          ),
          Object(n.b)('h4', null, 'Inertia / slingshot elastic effect'),
          Object(n.b)(
            'p',
            null,
            "The CSS transition-timing-function can be modified, by default it's subtle and\nlooks like this:",
          ),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            c.b
              .filter(function(e) {
                return e.includes('scale');
              })
              .map(function(e) {
                return Object(
                  n.b,
                )(r, {key: e, animation: e, animateFill: !1, inertia: !0, duration: [450, 175], mdxType: 'Tippy'}, Object(n.b)(N, {mdxType: 'Button'}, e));
              }),
          ),
          Object(n.b)('h4', null, 'CSS keyframe animations'),
          Object(n.b)(
            'p',
            null,
            'Getting more advanced, you can use actual CSS animations (',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '@keyframes',
            ),
            ' rules),\nfor example using the ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'animate.css',
            ),
            ' package:',
          ),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            Object(n.b)(
              r,
              {
                animation: 'fade',
                animateFill: !1,
                duration: [500, 200],
                onMount: function(e) {
                  requestAnimationFrame(function() {
                    e.popperChildren.tooltip.classList.add(
                      'rubberBand',
                      'animated',
                    );
                  });
                },
                onHidden: function(e) {
                  e.popperChildren.tooltip.classList.remove(
                    'rubberBand',
                    'animated',
                  );
                },
                mdxType: 'Tippy',
              },
              Object(n.b)(N, {mdxType: 'Button'}, 'rubberBand'),
            ),
            Object(n.b)(
              r,
              {
                animation: 'fade',
                animateFill: !1,
                duration: [500, 200],
                onMount: function(e) {
                  requestAnimationFrame(function() {
                    e.popperChildren.tooltip.classList.add('tada', 'animated');
                  });
                },
                onHidden: function(e) {
                  e.popperChildren.tooltip.classList.remove('tada', 'animated');
                },
                mdxType: 'Tippy',
              },
              Object(n.b)(N, {mdxType: 'Button'}, 'tada'),
            ),
          ),
          Object(n.b)('h4', null, 'JavaScript spring animations'),
          Object(n.b)(
            'p',
            null,
            'Animation libraries like ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'animejs',
            ),
            ' can also be integrated.',
          ),
          Object(n.b)('h3', null, 'Themes'),
          Object(n.b)('p', null, 'Tooltips can have custom styling.'),
          Object(n.b)('h4', null, 'Included themes'),
          Object(n.b)(
            'p',
            null,
            'These themes are included in the package and can be imported separately.',
          ),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            ['light', 'light-border', 'material', 'translucent'].map(function(
              e,
            ) {
              return Object(n.b)(
                r,
                {key: e, theme: e, animateFill: !1, mdxType: 'Tippy'},
                Object(n.b)(N, {mdxType: 'Button'}, e),
              );
            }),
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
                  '#myButton',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'theme',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
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
                  'light',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
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
              ),
            ),
          ),
          Object(n.b)('h4', null, 'Custom themes'),
          Object(n.b)(
            'p',
            null,
            'You can apply any CSS to a tippy via a theme.',
          ),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            ['gradient', 'retro', 'forest'].map(function(e) {
              return Object(
                n.b,
              )(r, {key: e, theme: e, animateFill: !1, arrow: !1, mdxType: 'Tippy'}, Object(n.b)(N, {mdxType: 'Button'}, e));
            }),
          ),
          Object(n.b)('h3', null, 'Triggers'),
          Object(n.b)(
            'p',
            null,
            'Tooltips can also be triggered by ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'click',
            ),
            ' or ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'focus',
            ),
            ' events.',
          ),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            Object(n.b)(
              r,
              {trigger: 'click', mdxType: 'Tippy'},
              Object(n.b)(N, {mdxType: 'Button'}, 'Click'),
            ),
            Object(n.b)(
              r,
              {trigger: 'focus', hideOnClick: !1, mdxType: 'Tippy'},
              Object(n.b)(N, {mdxType: 'Button'}, 'Focus'),
            ),
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
                  '#myButton',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'trigger',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
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
                  'click',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  "// or 'focus'",
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
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
              ),
            ),
          ),
          Object(n.b)('h3', null, 'Interactivity'),
          Object(n.b)(
            'p',
            null,
            'Tooltips can be interactive, allowing you to hover over and click inside them.',
          ),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            Object(n.b)(
              r,
              {
                interactive: !0,
                content: 'You can select the text inside here.',
                mdxType: 'Tippy',
              },
              Object(n.b)(N, {mdxType: 'Button'}, 'Interactive'),
            ),
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
                  '#myButton',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'content',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
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
                  'You can select the text inside here.',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'interactive',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token boolean'},
                  ),
                  'true',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
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
              ),
            ),
          ),
          Object(n.b)('h3', null, 'HTML Content'),
          Object(n.b)('p', null, 'Tooltips can contain HTML.'),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            Object(n.b)(
              r,
              {
                content: Object(n.b)(
                  'strong',
                  null,
                  'Bolded ',
                  Object(n.b)('span', {style: {color: 'aqua'}}, 'content'),
                ),
                mdxType: 'Tippy',
              },
              Object(n.b)(N, {mdxType: 'Button'}, 'HTML Content'),
            ),
            Object(n.b)(b.a, {mdxType: 'Dropdown'}),
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
                  '#myButton',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'content',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
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
                  '<strong>Bolded <span style="color: aqua;">content</span></strong>',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
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
              ),
            ),
          ),
          Object(n.b)('h3', null, 'Duration'),
          Object(n.b)(
            'p',
            null,
            'Tooltips can have different animation durations.',
          ),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            Object(n.b)(
              r,
              {duration: 0, mdxType: 'Tippy'},
              Object(n.b)(N, {mdxType: 'Button'}, '0'),
            ),
            Object(n.b)(
              r,
              {duration: 1e3, mdxType: 'Tippy'},
              Object(n.b)(N, {mdxType: 'Button'}, '1000'),
            ),
            Object(n.b)(
              r,
              {duration: [800, 100], mdxType: 'Tippy'},
              Object(n.b)(N, {mdxType: 'Button'}, '[800, 100]'),
            ),
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
                  '#myButton',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// number: show and hide durations are the same',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'duration',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '0',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// [number, number]: [show, hide] duration',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'duration',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '[',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '800',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '100',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ']',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
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
              ),
            ),
          ),
          Object(n.b)('h3', null, 'Delay'),
          Object(n.b)(
            'p',
            null,
            'Tooltips can delay hiding or showing after a trigger.',
          ),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            Object(n.b)(
              r,
              {delay: 500, mdxType: 'Tippy'},
              Object(n.b)(N, {mdxType: 'Button'}, '500'),
            ),
            Object(n.b)(
              r,
              {delay: [800, 0], mdxType: 'Tippy'},
              Object(n.b)(N, {mdxType: 'Button'}, '[800, 0]'),
            ),
            Object(n.b)(
              r,
              {delay: [0, 800], mdxType: 'Tippy'},
              Object(n.b)(N, {mdxType: 'Button'}, '[0, 800]'),
            ),
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
                  '#myButton',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// number: show and hide delay are the same',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'delay',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '500',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// [number, number]: [show, hide] delay',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'delay',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '[',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '500',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '0',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ']',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
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
              ),
            ),
          ),
          Object(n.b)('h3', null, 'Follow Cursor'),
          Object(n.b)(
            'p',
            null,
            'Tooltips can follow the mouse cursor and abide by a certain axis. Additionally,\nthe tooltip can follow the cursor until it shows, at which point it will stop\nfollowing (initial).',
          ),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            Object(n.b)(
              r,
              {
                followCursor: !0,
                animateFill: !1,
                duration: 200,
                animation: 'fade',
                mdxType: 'Tippy',
              },
              Object(n.b)(N, {mdxType: 'Button'}, 'Default'),
            ),
            Object(n.b)(
              r,
              {
                followCursor: 'horizontal',
                animateFill: !1,
                duration: 200,
                animation: 'fade',
                mdxType: 'Tippy',
              },
              Object(n.b)(N, {mdxType: 'Button'}, 'Horizontal'),
            ),
            Object(n.b)(
              r,
              {
                followCursor: 'vertical',
                animateFill: !1,
                duration: 200,
                animation: 'fade',
                mdxType: 'Tippy',
              },
              Object(n.b)(N, {mdxType: 'Button'}, 'Vertical'),
            ),
            Object(n.b)(
              r,
              {
                followCursor: 'initial',
                animateFill: !1,
                delay: 200,
                duration: 200,
                animation: 'fade',
                mdxType: 'Tippy',
              },
              Object(n.b)(N, {mdxType: 'Button'}, 'Initial'),
            ),
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
                  '#myButton',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// Follow both x and y axes',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'followCursor',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token boolean'},
                  ),
                  'true',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// Follow x-axis',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'followCursor',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
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
                  'horizontal',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// Follow y-axis',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'followCursor',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
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
                  'vertical',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// Follow initial cursor without listening',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'followCursor',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
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
                  'initial',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
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
              ),
            ),
          ),
          Object(n.b)('h3', null, 'SVGs'),
          Object(n.b)(
            'p',
            null,
            'Tooltips can be placed on SVG nodes, where ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              "followCursor: 'initial'",
            ),
            ' becomes\nvery useful, since it can be placed directly on the line.',
          ),
          Object(n.b)(
            'svg',
            {height: '150', width: '150'},
            Object(n.b)(
              r,
              {
                followCursor: 'initial',
                animation: 'fade',
                delay: 100,
                mdxType: 'Tippy',
              },
              Object(n.b)('line', {
                x1: '0',
                y1: '0',
                x2: '150',
                y2: '150',
                style: {stroke: 'tomato', strokeWidth: 5},
              }),
            ),
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
                  'line',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'followCursor',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
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
                  'initial',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'delay',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '200',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
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
              ),
            ),
          ),
          Object(n.b)('h3', null, 'Singleton'),
          Object(n.b)(
            'p',
            null,
            'Use a single tooltip for many different reference elements. This allows you to\n"group" tooltips with a shared timer to improve UX when elements near each other\nhave tooltips with a ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'delay',
            ),
            ' prop.',
          ),
          Object(n.b)(
            'p',
            null,
            'Non-singleton tippy with ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'delay: 500',
            ),
            ':',
          ),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            Object(n.b)(o.a, {mdxType: 'Singleton'}),
          ),
          Object(n.b)(
            'p',
            null,
            "Singleton tippy to group each tippy's ",
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'delay: 500',
            ),
            ':',
          ),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            Object(n.b)(o.a, {group: !0, mdxType: 'Singleton'}),
          ),
          Object(n.b)('p', null, 'Singleton tippy with a transition:'),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            Object(n.b)(o.a, {group: !0, transition: !0, mdxType: 'Singleton'}),
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
                    {className: 'token module keyword'},
                  ),
                  'import',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                'createSingleton',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token module keyword'},
                  ),
                  'from',
                ),
                ' ',
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
                  'tippy.js',
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
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n\n',
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
                    {className: 'token block'},
                  ),
                  '[',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ']',
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
                  'buttons',
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
                  'querySelectorAll',
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
                '\n\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token keyword'},
                  ),
                  'for',
                ),
                ' ',
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
                    {className: 'token keyword'},
                  ),
                  'let',
                ),
                ' i ',
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
                    {className: 'token number'},
                  ),
                  '0',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                ' i ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '<',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'buttons',
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
                  'length',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                ' i',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '++',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'instances',
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
                  'push',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                '\n    ',
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
                'buttons',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '[',
                ),
                'i',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ']',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'content',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token template-string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token template-punctuation string'},
                    ),
                    '`',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token string'},
                    ),
                    'Tooltip ',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token interpolation'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {
                          className:
                            'token interpolation-punctuation punctuation',
                        },
                      ),
                      '${',
                    ),
                    'i ',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token operator'},
                      ),
                      '+',
                    ),
                    ' ',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token number'},
                      ),
                      '1',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {
                          className:
                            'token interpolation-punctuation punctuation',
                        },
                      ),
                      '}',
                    ),
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token template-punctuation string'},
                    ),
                    '`',
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'updateDuration',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '400',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
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
                  ',',
                ),
                '\n  ',
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
                    {className: 'token block'},
                  ),
                  '}',
                ),
                '\n\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'createSingleton',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'instances',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'delay',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '[',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '300',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '600',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ']',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
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
              ),
            ),
          ),
          Object(n.b)('h3', null, 'Nesting'),
          Object(n.b)('p', null, 'Tippys can be nested within other ones.'),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            Object(n.b)(p.a, {mdxType: 'Nesting'}),
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
                  'content',
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
                  'createElement',
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
                  'div',
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
                '\n\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token keyword'},
                  ),
                  'for',
                ),
                ' ',
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
                    {className: 'token keyword'},
                  ),
                  'let',
                ),
                ' i ',
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
                    {className: 'token number'},
                  ),
                  '0',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                ' i ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '<',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token number'},
                  ),
                  '3',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                ' i',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token operator'},
                  ),
                  '++',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
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
                  'createElement',
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
                '\n  ',
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
                  'textContent',
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
                  'Text',
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
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'content',
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
                  'appendChild',
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
                '\n\n  ',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'content',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
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
                    '"',
                  ),
                  "I'm a Tippy tooltip!",
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '"',
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'arrow',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token boolean'},
                  ),
                  'true',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'animation',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
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
                  'fade',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
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
                    {className: 'token block'},
                  ),
                  '}',
                ),
                '\n\n',
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
                  '#myButton',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  content',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'arrow',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token boolean'},
                  ),
                  'true',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'theme',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
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
                  'light-border',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
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
                '\n\n',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// Note: Some extra logic is required to handle some other edge cases',
                ),
              ),
            ),
          ),
          Object(n.b)('h3', null, 'Multiple'),
          Object(n.b)('p', null, 'Attach many tippys to a single element.'),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            Object(n.b)(i.a, {mdxType: 'Multiple'}),
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
                  'placements',
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
                    {className: 'token block'},
                  ),
                  '[',
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
                  'top',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
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
                  'bottom',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
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
                  'left',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
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
                  'right',
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
                  ']',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                '\n\nplacements\n  ',
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
                  'reduce',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                '\n    ',
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
                    {className: 'token parameter'},
                  ),
                  'acc',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    ',',
                  ),
                  ' basePlacement',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token arrow operator'},
                  ),
                  '=>',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token object'},
                  ),
                  'acc',
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
                  'concat',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                '\n        basePlacement',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n        ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token template-string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token template-punctuation string'},
                    ),
                    '`',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token interpolation'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {
                          className:
                            'token interpolation-punctuation punctuation',
                        },
                      ),
                      '${',
                    ),
                    'basePlacement',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {
                          className:
                            'token interpolation-punctuation punctuation',
                        },
                      ),
                      '}',
                    ),
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token string'},
                    ),
                    '-start',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token template-punctuation string'},
                    ),
                    '`',
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n        ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token template-string'},
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token template-punctuation string'},
                    ),
                    '`',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token interpolation'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {
                          className:
                            'token interpolation-punctuation punctuation',
                        },
                      ),
                      '${',
                    ),
                    'basePlacement',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {
                          className:
                            'token interpolation-punctuation punctuation',
                        },
                      ),
                      '}',
                    ),
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token string'},
                    ),
                    '-end',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token template-punctuation string'},
                    ),
                    '`',
                  ),
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n      ',
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
                  ',',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '[',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ']',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                '\n  ',
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
                  'forEach',
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
                    {className: 'token parameter'},
                  ),
                  'placement',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token arrow operator'},
                  ),
                  '=>',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n    ',
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
                  '#square',
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
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'content',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' placement',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n      placement',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n      ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token definition property'},
                  ),
                  'multiple',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ':',
                ),
                ' ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token boolean'},
                  ),
                  'true',
                ),
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
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
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
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
              ),
            ),
          ),
          Object(n.b)('h3', null, 'Miscellaneous'),
          Object(n.b)(
            l,
            {mdxType: 'Demo'},
            Object(n.b)(
              r,
              {offset: 50, mdxType: 'Tippy'},
              Object(n.b)(N, {mdxType: 'Button'}, 'Offset'),
            ),
            Object(n.b)(
              r,
              {distance: 20, mdxType: 'Tippy'},
              Object(n.b)(N, {mdxType: 'Button'}, 'Distance'),
            ),
            Object(n.b)(
              r,
              {maxWidth: 100, mdxType: 'Tippy'},
              Object(n.b)(N, {mdxType: 'Button'}, 'Max width'),
            ),
          ),
          Object(n.b)('br', null),
          Object(n.b)(
            'p',
            null,
            'The above is not a complete list of features. There are plenty more!',
          ),
        );
      }
      y.isMDXComponent = !0;
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-mdx-4c01229743c9d1d6f28b.js.map
