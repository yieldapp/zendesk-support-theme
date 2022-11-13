# zendesk-support-theme
Zendesk theme of support.yield.app 

### Setting up the GitHub integration with your Guide theme
https://support.zendesk.com/hc/en-us/articles/4408832476698-Setting-up-the-GitHub-integration-with-your-Guide-theme

### Guide of set up thee on local env
https://support.zendesk.com/hc/en-us/articles/4408822095642

### After installing ZAT run
`zat theme preview` 

### use account credentials with token
Enter your Zendesk subdomain or full URL (including protocol): yield
Enter your username: accounts@yield.app/token
Enter your password: _token_

### use link to show local build
http://yield.zendesk.com/hc/admin/local_preview/start

### and stop showing by
https://yield.zendesk.com/hc/admin/local_preview/stop

P.S. If static will not load because of browser security reason try to load some file directly
Such as http://localhost:4567/guide/settings/logo.png 

P.P.S To avoide "http->http**s**" redirect use "Delete domain security policies" from chrome://net-internals/#hsts. You can add "localhost" here.

### Also this page can help to fix local dev issues 
https://www.technipages.com/chrome-enabledisable-not-secure-warning

### zendesk api documentation 
https://developer.zendesk.com/api-reference/

### hbs syntax
https://handlebarsjs.com/guide/builtin-helpers.html#each