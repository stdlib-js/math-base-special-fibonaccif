# CHANGELOG

> Package changelog.

<section class="release" id="v0.1.0">

## 0.1.0 (2026-01-29)

<section class="features">

### Features

-   [`8297683`](https://github.com/stdlib-js/stdlib/commit/82976838f1d49e5439f658f19c6bc2b9c21c771e) - add `math/base/special/fibonaccif` [(#6257)](https://github.com/stdlib-js/stdlib/pull/6257)

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`709c1ab`](https://github.com/stdlib-js/stdlib/commit/709c1abf833a21997dd32edb395649e0a9e925df): update signature to accept floats

    -   User code should behave similarly in the primary case of providing integer-valued input values. However, no longer will real-values truncate. Now, real-valued inputs will result in `NaN`, which is, arguably, better behavior, as real-to-integer truncation can be a source of silent bugs.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`b3a435a`](https://github.com/stdlib-js/stdlib/commit/b3a435afb17da31f50ae31759df07b15dfae2cbd) - **chore:** add structured package data for `math/base/special/fibonaccif` [(#8405)](https://github.com/stdlib-js/stdlib/pull/8405) _(by Manvith M, Athan Reines)_
-   [`709c1ab`](https://github.com/stdlib-js/stdlib/commit/709c1abf833a21997dd32edb395649e0a9e925df) - **refactor:** modify C implementation to accept `float` instead of `int32` in `math/base/special/fibonaccif` [(#7938)](https://github.com/stdlib-js/stdlib/pull/7938) _(by Gunj Joshi)_
-   [`6471b8e`](https://github.com/stdlib-js/stdlib/commit/6471b8e01fdce8657278f83e0921faef23e6622e) - **docs:** minor clean-up _(by Philipp Burckhardt)_
-   [`8297683`](https://github.com/stdlib-js/stdlib/commit/82976838f1d49e5439f658f19c6bc2b9c21c771e) - **feat:** add `math/base/special/fibonaccif` [(#6257)](https://github.com/stdlib-js/stdlib/pull/6257) _(by Karan Anand, stdlib-bot)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 5 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gunj Joshi
-   Karan Anand
-   Manvith M
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

