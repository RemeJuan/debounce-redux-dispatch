<!-- TITLE/ -->

<h1>Debounce Redux Dispatch</h1>

<!-- /TITLE -->


<!-- DESCRIPTION/ -->

Debounce Redux Dispatch

<!-- /DESCRIPTION -->


<!-- BADGES/ -->

<span class="badge-nodeico"><a href="https://www.npmjs.com/package/debounce-redux-dispatch" title="Nodei.co badge"><img src="https://nodei.co/npm/debounce-redux-dispatch.png" alt="Nodei.co badge" /></a></span>
<br class="badge-separator" />
<span class="badge-travisci"><a href="http://travis-ci.org/RemeJuan/debounce-redux-dispatch" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/RemeJuan/debounce-redux-dispatch/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/debounce-redux-dispatch" title="View this project on NPM"><img src="https://img.shields.io/npm/v/debounce-redux-dispatch.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/debounce-redux-dispatch" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/debounce-redux-dispatch.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/RemeJuan/debounce-redux-dispatch" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/RemeJuan/debounce-redux-dispatch.svg" alt="Dependency Status" /></a></span>

<!-- /BADGES -->


## Instalation

**Note:** Designed for use with [React Redux](https://github.com/reactjs/react-redux)

```
yarn add debounce-redux-dispatch

or

npm install debounce-redux-dispatch
```

## Usage

```javascript
import { connect } from 'react-redux';
import { search } from './thunks';

import asyncDebounced from 'debounce-redux-dispatch';

...

const mapDispatchToProps - dispatch -=> ({
  triggerSearch(query) {
    dispatch(asyncDebounced(search, 1000, query));
  }
});

...
```

<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/RemeJuan/debounce-redux-dispatch/releases">Discover the release history by heading on over to the releases page.</a>

<!-- /HISTORY -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2018+ <a href="reme.lehane@gmail.com) (https://www.remelehane.me">Reme Le Hane</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
