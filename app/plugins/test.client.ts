export default defineNuxtPlugin({
    async setup(nuxtApp) {
        nuxtApp.hook('app:mounted', async () => {
            console.log('Test plugin mounted');
            loadGliaTag();
        });
    },
});

function loadGliaTag(): void {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://api.glia.com/salemove_integration.js';
    s.type = 'text/javascript';
    s.addEventListener('load', () => {
        onLoaded();
    });
    s.addEventListener('error', (e) => {
        const dateTime = new Date().toJSON();
        console.error(`Glia Initialize Error - Unexpected error while loading glia SDK ${JSON.stringify(e)} dateTime: ${dateTime}`)
    })
    document.head.appendChild(s);
}

function onLoaded() {
    window?.addEventListener('pageshow', _onPageShow);
}

// on page load, reload the page if it is cahced and has an active glia engagement
// this is necessary for chat continuation across domains
async function _onPageShow(e: PageTransitionEvent): Promise<void> {
    // const glia = await getGliaAPI();
    if (e.persisted /* && glia?.isInEngagement?.() */) {
        console.log('_onPageShow')
        // window.location.reload();
    }
}