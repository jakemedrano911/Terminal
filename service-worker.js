const CACHE_VERSION = 'terminal-offline-v3';
const PRECACHE_URLS = [
  './',
  'index.html',
  'builder.html',
  'config.json',
  'Hacking Words.txt',
  'builder-utils.js',
  'fonts/FSEX300.ttf',
  'manifest.webmanifest',
  'icons/terminal.svg',
  'Pip/Boot/Boot1.wav',
  'Pip/Boot/Boot2.wav',
  'Pip/Boot/Boot3.wav',
  'Pip/Burst Static/BurstStatic01.wav',
  'Pip/Burst Static/BurstStatic02.wav',
  'Pip/Burst Static/BurstStatic03.wav',
  'Pip/Burst Static/BurstStatic04.wav',
  'Pip/Burst Static/BurstStatic05.wav',
  'Pip/Burst Static/BurstStatic06.wav',
  'Pip/Burst Static/BurstStatic07.wav',
  'Pip/Burst Static/BurstStatic08.wav',
  'Pip/Burst Static/BurstStatic09.wav',
  'Pip/Burst Static/BurstStatic10.wav',
  'Pip/Burst Static/BurstStatic11.wav',
  'Pip/Burst Static/BurstStatic12.wav',
  'Pip/Burst Static/BurstStatic13.wav',
  'Pip/Burst Static/BurstStatic14.wav',
  'Pip/Burst Static/BurstStatic15.wav',
  'Pip/Burst Static/BurstStatic16.wav',
  'Pip/Burst Static/BurstStatic17.wav',
  'Pip/FavoriteMenuDown01.wav',
  'Pip/FavoriteMenuDpad01.wav',
  'Pip/FavoriteOff.wav',
  'Pip/FavoriteOn.wav',
  'Pip/Highlight4.wav',
  'Pip/HolotapeInsert01.wav',
  'Pip/LightOff.wav',
  'Pip/LightOn.wav',
  'Pip/RotaryHorizontal01.wav',
  'Pip/RotaryHorizontal02.wav',
  'Pip/RotaryVertical01.wav',
  'Pip/RotaryVertical03.wav',
  'Pip/Select.wav',
  'Pip/holotapestart3.wav',
  'Pip/holotapestop3.wav',
  'Pip/mode3.wav',
  'Pip/mousescroll.wav',
  'Pip/scroll3.wav',
  'Pip/select3.wav',
  'Pip/tab3.wav',
  'Pip/tuner3.wav',
  'Terminal 3/charscroll.wav',
  'Terminal 3/charscroll_lp.wav',
  'Terminal 3/enter/charenter_01.wav',
  'Terminal 3/enter/charenter_02.wav',
  'Terminal 3/enter/charenter_03.wav',
  'Terminal 3/fanhum_lp.wav',
  'Terminal 3/menu/menu_cancel.wav',
  'Terminal 3/menu/menu_focus.wav',
  'Terminal 3/menu/menu_ok.wav',
  'Terminal 3/menu/menu_prevnext.wav',
  'Terminal 3/multiple/charmultiple_01.wav',
  'Terminal 3/multiple/charmultiple_02.wav',
  'Terminal 3/multiple/charmultiple_03.wav',
  'Terminal 3/multiple/charmultiple_04.wav',
  'Terminal 3/passbad.wav',
  'Terminal 3/passgood.wav',
  'Terminal 3/poweroff.mp3',
  'Terminal 3/poweron.mp3',
  'Terminal 3/single/charsingle_01.wav',
  'Terminal 3/single/charsingle_02.wav',
  'Terminal 3/single/charsingle_03.wav',
  'Terminal 3/single/charsingle_04.wav',
  'Terminal 3/single/charsingle_05.wav',
  'Terminal 3/single/charsingle_06.wav',
  'Terminal 4/Boot1.wav',
  'Terminal 4/Boot2.wav',
  'Terminal 4/Boot3.wav',
  'Terminal 4/CharScroll_LP.wav',
  'Terminal 4/Deploy Terminal.wav',
  'Terminal 4/Eject.wav',
  'Terminal 4/Enter key/CharEnter_01.wav',
  'Terminal 4/Enter key/CharEnter_02.wav',
  'Terminal 4/Enter key/CharEnter_03.wav',
  'Terminal 4/FanHum.wav',
  'Terminal 4/FanHum_LP.wav',
  'Terminal 4/HDD/HDD1/HDD101.wav',
  'Terminal 4/HDD/HDD1/HDD102.wav',
  'Terminal 4/HDD/HDD1/HDD103.wav',
  'Terminal 4/HDD/HDD1/HDD104.wav',
  'Terminal 4/HDD/HDD1/HDD105.wav',
  'Terminal 4/HDD/HDD1/HDD106.wav',
  'Terminal 4/HDD/HDD1/HDD107.wav',
  'Terminal 4/HDD/HDD1/HDD108.wav',
  'Terminal 4/HDD/HDD1/HDD109.wav',
  'Terminal 4/HDD/HDD1/HDD110.wav',
  'Terminal 4/HDD/HDD1/HDD111.wav',
  'Terminal 4/HDD/HDD1/HDD112.wav',
  'Terminal 4/HDD/HDD1/HDD113.wav',
  'Terminal 4/HDD/HDD1/HDD114.wav',
  'Terminal 4/HDD/HDD1/HDD115.wav',
  'Terminal 4/HDD/HDD2/HDD201.wav',
  'Terminal 4/HDD/HDD2/HDD202.wav',
  'Terminal 4/HDD/HDD2/HDD203.wav',
  'Terminal 4/HDD/HDD2/HDD204.wav',
  'Terminal 4/HDD/HDD2/HDD205.wav',
  'Terminal 4/HDD/HDD2/HDD206.wav',
  'Terminal 4/HDD/HDD2/HDD207.wav',
  'Terminal 4/HDD/HDD2/HDD208.wav',
  'Terminal 4/HDD/HDD2/HDD209.wav',
  'Terminal 4/HDD/HDD2/HDD210.wav',
  'Terminal 4/HDD/HDD2/HDD211.wav',
  'Terminal 4/HDD/HDD2/HDD212.wav',
  'Terminal 4/HDD/HDD2/HDD213.wav',
  'Terminal 4/HDD/HDD2/HDD214.wav',
  'Terminal 4/Insert.wav',
  'Terminal 4/Multiple Keys/CharMultiple_01.wav',
  'Terminal 4/Multiple Keys/CharMultiple_02.wav',
  'Terminal 4/Multiple Keys/CharMultiple_03.wav',
  'Terminal 4/Multiple Keys/CharMultiple_04.wav',
  'Terminal 4/PassBad.wav',
  'Terminal 4/PassGood.wav',
  'Terminal 4/PasswordHelpAttempts.wav',
  'Terminal 4/PasswordHelpDud.wav',
  'Terminal 4/PortableFanHum.wav',
  'Terminal 4/Program End/ProgramQuit_01.wav',
  'Terminal 4/Program End/ProgramQuit_02.wav',
  'Terminal 4/Program End/ProgramQuit_03.wav',
  'Terminal 4/Program Start/ProgramLoad_01.wav',
  'Terminal 4/Program Start/ProgramLoad_02.wav',
  'Terminal 4/Program Start/ProgramLoad_03.wav',
  'Terminal 4/Put up Terminal.wav',
  'Terminal 4/Single Key/CharSingle_01.wav',
  'Terminal 4/Single Key/CharSingle_02.wav',
  'Terminal 4/Single Key/CharSingle_03.wav',
  'Terminal 4/Single Key/CharSingle_04.wav',
  'Terminal 4/Single Key/CharSingle_05.wav',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/vue@3/dist/vue.global.prod.js'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_VERSION);
    for (const url of PRECACHE_URLS) {
      try {
        await cache.add(new Request(url, { cache: 'reload' }));
      } catch (err) {
        console.warn('Failed to precache', url, err);
      }
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key !== CACHE_VERSION).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if(request.method !== 'GET') return;

  // Allow the network to handle byte range and other special requests.
  if(request.headers.has('range')) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_VERSION);
    const cached = await cache.match(request);
    if(cached) {
      return cached;
    }
    try {
      const response = await fetch(request);
      if(request.url.startsWith(self.location.origin) && response && response.ok && response.status !== 206){
        try{
          await cache.put(request, response.clone());
        }catch(cacheErr){
          // Some responses (e.g., opaque or binary streams) cannot be cached; ignore those failures.
          console.debug('Cache put skipped for', request.url, cacheErr);
        }
      }
      return response;
    } catch (err) {
      if(request.mode === 'navigate'){
        const fallback = await cache.match('index.html');
        if(fallback) return fallback;
      }
      throw err;
    }
  })());
});
