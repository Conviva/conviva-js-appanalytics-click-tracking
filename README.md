# conviva-js-appanalytics-click-tracking
Adds Link clicks and button clicks tracking capabilities to your Conviva Application Analytics Library.

## Installation
```bash
npm install @convivainc/conviva-js-appanalytics-click-tracking
```

## Usage

Initialize your tracker with the LinkClickTrackingPlugin and ButtonClickTrackingPlugin:
```js
import { LinkClickTrackingPlugin, ButtonClickTrackingPlugin } from '@convivainc/conviva-js-appanalytics-click-tracking';
```

Then use the available functions from this package to track to all trackers which have been initialized with this plugin:
```js
import { enableLinkClickTracking, enableButtonClickTracking } from '@convivainc/conviva-js-appanalytics-click-tracking';

enableLinkClickTracking();

enableButtonClickTracking();
```
