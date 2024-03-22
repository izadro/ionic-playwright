exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    hostname: 'uscloud.experitest.com',
    protocol: 'https',
    port: 443,
    path: '/wd/hub',
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called.
    specs: [
        './test/specs/**/AndroidNative.js'
    ],
    // ============
    // Capabilities
    // ============
    capabilities: [{
        platformName: 'ANDROID',
        'experitest:testName': "Quick Start Android NATIVE Demo",
        'experitest:accessKey': "eyJhbGciOiJIUzI1NiJ9.eyJ4cC51IjoxMzAzOTg2MCwieHAucCI6MTE3OTY5ODAsInhwLm0iOjE3MDQ5ODUxNTQ2NjAsImV4cCI6MjAyMDM0NTE1NCwiaXNzIjoiY29tLmV4cGVyaXRlc3QifQ.FKAu1x1v2owzxrcKMePAOnTKFCzl83y8uKSVnf_MEDA",
        'appium:appiumVersion': "2.1.3",
        'appium:appPackage':  "com.experitest.ExperiBank",
        'appium:app': 'cloud:com.experitest.ExperiBank/.LoginActivity',
        'appium:deviceQuery': "@os='android' and @category='PHONE'",
    }],
    mochaOpts: {
        ui: 'bdd',
        timeout: 180000
    },

}