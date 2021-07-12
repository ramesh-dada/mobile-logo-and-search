import {extend} from 'flarum/common/extend';
import app from 'flarum/forum/app';

import Search from 'flarum/components/Search';

/* RameshDADA Ultra PREMIUM */

app.initializers.add('ramesh-dada-mobile-logo', () => {
extend(HeaderPrimary.prototype, 'view', (component) => {
    items.add('mobilelogo', <a onclick={home()}><img src={app.forum.attribute('logoUrl')} alt={app.forum.attribute('forum_title')} /></a>, -100);
items.add('search', Search.component({
            state: app.search,
        }), -100);

    });
    function home() {
        document.querySelector('#home-link').click();
    }
});
