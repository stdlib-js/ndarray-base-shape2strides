<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# shape2strides

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Generate a stride array from an array shape.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import shape2strides from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@deno/mod.js';
```

#### shape2strides( shape, order )

Generates a stride array from an array shape.

```javascript
var strides = shape2strides( [ 3, 2 ], 'row-major' );
// returns [ 2, 1 ]
```

The `order` parameter specifies whether an array is `row-major` (C-style) or `column-major` (Fortran-style).

```javascript
var strides = shape2strides( [ 3, 2 ], 'column-major' );
// returns [ 1, 3 ]
```

#### shape2strides.assign( shape, order, out )

Generates a stride array from an array shape and assigns results to a provided output array.

```javascript
var shape = [ 3, 2 ];
var strides = [ 0, 0 ];

var out = shape2strides.assign( shape, 'row-major', strides );
// returns [ 2, 1 ]

var bool = ( strides === out );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@deno/mod.js';
import shape2strides from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@deno/mod.js';

var strides;
var shape;
var i;

shape = [ 0, 0, 0 ];
for ( i = 0; i < 100; i++ ) {
    shape[ 0 ] = discreteUniform( 1, 10 );
    shape[ 1 ] = discreteUniform( 1, 10 );
    shape[ 2 ] = discreteUniform( 1, 10 );
    strides = shape2strides( shape, 'row-major' );
    console.log( 'shape: %s. strides: %s.', shape.join( 'x' ), strides.join( ', ' ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-shape2strides.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-shape2strides

[test-image]: https://github.com/stdlib-js/ndarray-base-shape2strides/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-shape2strides/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-shape2strides/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-shape2strides?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-shape2strides.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-shape2strides/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-shape2strides/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-base-shape2strides/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-base-shape2strides/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-shape2strides/main/LICENSE

</section>

<!-- /.links -->
