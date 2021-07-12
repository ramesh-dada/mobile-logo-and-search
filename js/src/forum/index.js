import {extend} from 'flarum/common/extend';
import app from 'flarum/forum/app';
import Button from 'flarum/common/components/Button';
import Search from 'flarum/components/Search';

/* RameshDADA Ultra PREMIUM */

app.initializers.add('ramesh-dada-mobile-flarum-newdiscuss', () => {
extend(HeaderPrimary.prototype, 'view', (component) => {
items.add('mobilelogo', <a onclick: () => {document.querySelector('#home-link').click();}><img src={app.forum.attribute('logoUrl')} alt={app.forum.attribute('forum_title')} /></a>, -100);
items.add('search', Search.component({
            state: app.search,
        }), -100);

    });
});
