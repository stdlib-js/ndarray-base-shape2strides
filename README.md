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

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Generate a stride array from an array shape.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-base-shape2strides
```

</section>

<section class="usage">

## Usage

```javascript
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );
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
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
var shape2strides = require( '@stdlib/ndarray-base-shape2strides' );

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

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-base-shape2strides
```

</section>

<section class="usage">

### Usage

```c
#include "stdlib/ndarray/base/shape2strides.h"
```

#### stdlib_ndarray_shape2strides( ndims, \*shape, order, \*out )

Generates a stride array from an array shape.

```c
#include "stdlib/ndarray/orders.h"

int64_t ndims = 3;
int64_t shape[] = { 2, 3, 10 };
int64_t out[ 3 ];

stdlib_ndarray_shape2strides( ndims, shape, STDLIB_NDARRAY_ROW_MAJOR, out );
```

The function accepts the following arguments:

-   **ndims**: `[in] int64_t` number of dimensions.
-   **shape**: `[in] int64_t*` array shape (dimensions).
-   **order**: `[in] enum STDLIB_NDARRAY_ORDER` specifies whether an array is row-major (C-style) or column-major (Fortran-style).
-   **out**: `[out] int64_t*` output strides array.

```c
int8_t stdlib_ndarray_shape2strides( int64_t ndims, int64_t *shape, enum STDLIB_NDARRAY_ORDER order, int64_t *out );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/ndarray/base/shape2strides.h"
#include "stdlib/ndarray/orders.h"
#include <stdio.h>

int main() {
    int64_t shape[] = { 2, 3, 10 };
    int64_t ndims = 3;
    int64_t out[ 3 ];

    stdlib_ndarray_shape2strides( ndims, shape, STDLIB_NDARRAY_ROW_MAJOR, out );

    int i;
    printf( "strides = { " );
    for ( i = 0; i < ndims; i++ ) {
        printf( "%lli", out[ i ] );
        if ( i < ndims-1 ) {
            printf( ", " );
        }
    }
    printf( " }\n" );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-shape2strides.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-shape2strides

[test-image]: https://github.com/stdlib-js/ndarray-base-shape2strides/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/ndarray-base-shape2strides/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-shape2strides/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-shape2strides?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-shape2strides.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-shape2strides/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-shape2strides/main/LICENSE

</section>

<!-- /.links -->
