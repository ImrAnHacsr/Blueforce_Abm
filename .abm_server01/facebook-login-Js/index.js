<html>

<script>
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
</script>

<body>

    <!-- https://developers.facebook.com/apps/0982653607/fb-login/quickstart/ -->
    <!-- https://developers.facebook.com/blog/post/2018/06/08/enforce-https-facebook-login/ -->
    <!-- https://developers.facebook.com/tools/debug -->
    <!-- https://www.facebook.com/settings?tab=applications&section=active -->

    <!-- <fb:login-button scope="public_profile,email" onlogin="checkLoginState();"> -->
    <fb:login-button scope="email" onlogin="checkLoginState();">
    </fb:login-button>
    <!-- https://www.facebook.com/v7.0/dialog/oauth?app_id=0982653607&auth_type=&cbt=1589531811685&channel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D46%23cb%3Df189a29290dd64%26domain%3Dsource.org%26origin%3Dhttps%253A%252F%252Fsource.org%252Ffbd4c0593da73c%26relation%3Dopener&client_id=0982653607&display=popup&domain=source.org&e2e=%7B%7D&fallback_redirect_uri=https%3A%2F%2Fsource.org%2Ffacebooklogin%2Findex.html&id=f223db31aeaecbc&locale=en_US&logger_id=73b278a7-31e6-4fb4-ad1b-3f7d237f357c&origin=1&plugin_prepare=true&redirect_uri=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D46%23cb%3Df2e21771706a338%26domain%3Dsource.org%26origin%3Dhttps%253A%252F%252Fsource.org%252Ffbd4c0593da73c%26relation%3Dopener.parent%26frame%3Df223db31aeaecbc&ref=LoginButton&response_type=signed_request%2Ctoken%2Cgraph_domain&scope=email&sdk=joey&size=%7B%22width%22%3A600%2C%22height%22%3A679%7D&url=dialog%2Foauth&version=v7.0 -->

    <div id="status"></div>
    <script>
        function statusChangeCallback(response) {
            console.log('statusChangeCallback');
            console.log(response);
            // The response object is returned with a status field that lets the
            // app know the current login status of the person.
            // Full docs on the response object can be found in the documentation
            // for FB.getLoginStatus().
            if (response.status === 'connected') {
                // Logged into your app and Facebook.
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function (response) {
                    console.log('Successful login for: ' + response.name);
                    document.getElementById('status').innerHTML =
                        'Thanks for logging in, ' + response.name + '!';
                });
            } else {
                // The person is not logged into your app or we are unable to tell.
                document.getElementById('status').innerHTML = 'Please log ' +
                    'into this app.';
            }
        }

        function main() {

            FB.getLoginStatus(function (response) {
                console.log(response);
                statusChangeCallback(response);

                /*
                //not logged in
                {
                    "authResponse": null,
                    "status": "unknown"
                }
                //logged in
                {
                    status: 'connected',
                    authResponse: {
                        accessToken: '...',
                        expiresIn:'...',
                        signedRequest:'...',
                        userID:'...'
                    }
                }
                */
            });
        }


        function checkLoginState() {
            FB.getLoginStatus(function (response) {
                statusChangeCallback(response);
            });
        }

        document.addEventListener('DOMContentLoaded', function (event) {
            console.log(event);

            window.fbAsyncInit = function () {
                FB.init({
                    appId: '0982653607',
                    cookie: true,
                    xfbml: true,
                    version: 'v7.0'
                });

                FB.AppEvents.logPageView();

                setTimeout(function () {
                    main();
                }, 750);

            };
        }, false);
    </script>
</body>

</html>
