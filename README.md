# DomMan

DomMan is a very light weight JavaScript DOM manipulation library.
I wrote this code as a way to learn how jQuery works and as a way to understand vanilla JavaScript a lot better.

I add methods as I see fit, for example when I am working on a project that requires something that this library currently does not support then I will add it.

The idea is to have a light weight library that can be used for minimal DOM manipulation work. I will not add anymore methods than I need, this is not an attempt to create a 'full' DOM manipulation library like jQuery, but instead I am trying to create it such that it has the minimal amount of required features for any project but not more than that.

## Testing:
Assuming you have JEST installed globally just run: ```jest```
Otherwise run: 
```
npm install --save-dev jest
npm test
```

## Usage:
Simply include the file into your html <script src="DomMan.js"></script>
Then somewhere else: var $ = DomManipulate();
#### OR
```JavaScript
var $ = require('./DomMan');
```

I recommend you use:
```JavaScript
DM = require('./DomMan');
```

In the event that another library is using the character $
