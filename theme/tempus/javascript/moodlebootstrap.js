
require(['core/first'], function() {
    require(['theme_tempus/bootstrap', 'core/log'], function(bootstrap, log) {
        log.debug('Bootstrap initialised');
    });
});
