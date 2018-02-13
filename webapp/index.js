// Copyright (c) 2017-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import PostTypeTest from './components/post_type_test';

class PluginClass {
    initialize(registerComponents, store) {
        registerComponents({}, {custom_test: PostTypeTest});
    }
}

global.window.plugins['posttest'] = new PluginClass();
