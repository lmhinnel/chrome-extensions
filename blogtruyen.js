document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "loaded") {
        const ads = document.getElementsByClassName('qc-css');
        for (let i = 0; i < ads.length; i++) {
            const parent = ads[i].parentElement;
            parent.removeChild(ads[i]);
        }

        const adss = document.getElementsByClassName('BT-Ads');
        for (let i = 0; i < adss.length; i++) {
            const parent = adss[i].parentElement;
            parent.removeChild(adss[i]);
        }

        setTimeout(() => {
            const adsss = document.getElementsByClassName('qc-css');
            for (let i = 0; i < adsss.length; i++) {
                const parent = adsss[i].parentElement;
                parent.removeChild(adsss[i]);
            }
        }, 500);

        const content = document.getElementById('content');
        if (content) {
            const a = content.getElementsByTagName('a')[0];
            if (a) a.parentElement.removeChild(a);
        }
    }
});