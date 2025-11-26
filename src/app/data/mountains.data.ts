import { Mountain } from '../models/mountain.model';

// Free images from Unsplash
const IMAGES = {
  montBlanc: 'https://images.unsplash.com/photo-1516490981167-dc990a8df449?w=800&h=400&fit=crop',
  matterhorn: 'https://images.unsplash.com/photo-1529834477179-4e21e9f4c57c?w=800&h=400&fit=crop',
  eiger: 'https://images.unsplash.com/photo-1531928351158-2f736078e0a1?w=800&h=400&fit=crop',
  jungfrau: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=400&fit=crop',
  dufourspitze: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=400&fit=crop',
  grossglockner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
  zugspitze: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=400&fit=crop',
  musala: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop',
  triglav: 'https://images.unsplash.com/photo-1491904768633-2b7e3e7fede5?w=800&h=400&fit=crop',
  gerlach: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=400&fit=crop',
  rysy: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800&h=400&fit=crop',
  kebnekaise: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&h=400&fit=crop',
  galdhopiggen: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
  mulhacen: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=800&h=400&fit=crop',
  aneto: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&h=400&fit=crop',
  etna: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
  cornoGrande: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&h=400&fit=crop',
  moldoveanu: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800&h=400&fit=crop',
  olympus: 'https://images.unsplash.com/photo-1520962922320-2038eebab146?w=800&h=400&fit=crop',
  snezka: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?w=800&h=400&fit=crop',
  carrauntoohil: 'https://images.unsplash.com/photo-1533619239233-6280475a633a?w=800&h=400&fit=crop',
  benNevis: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=400&fit=crop',
  snowdon: 'https://images.unsplash.com/photo-1515696955266-4f67e13219e8?w=800&h=400&fit=crop',
  hoverla: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=800&h=400&fit=crop',
  bobotov: 'https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?w=800&h=400&fit=crop',
  korab: 'https://images.unsplash.com/photo-1486728297118-82a07bc48a28?w=800&h=400&fit=crop',
  jezerca: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=800&h=400&fit=crop',
  dinara: 'https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800&h=400&fit=crop'
};

export const CROWN_OF_EUROPE: Mountain[] = [
  {
    id: 1,
    name: 'Mont Blanc',
    height: 4808,
    region: 'French Alps',
    country: 'France/Italy',
    geoZone: 'Western Alps',
    difficulty: 'hard',
    climbed: false,
    details: {
      description: 'Mont Blanc is the highest peak in the Alps and Western Europe. Known as the "White Mountain," it stands on the border between France and Italy. The mountain is famous for its stunning glaciers, challenging climbing routes, and the scenic Mont Blanc Massif. First ascended in 1786, it remains one of the most sought-after summits for mountaineers worldwide.',
      imageUrl: IMAGES.montBlanc,
      imageAttribution: 'Unsplash - free',
      latitude: 45.8326,
      longitude: 6.8652,
      trails: [
        { name: 'Gouter Route (Normal Route)', distance: '14 km', duration: '2 days', difficulty: 'hard' },
        { name: 'Three Monts Route', distance: '16 km', duration: '2-3 days', difficulty: 'hard' },
        { name: 'Grands Mulets Route', distance: '12 km', duration: '2 days', difficulty: 'hard' }
      ]
    }
  },
  {
    id: 2,
    name: 'Matterhorn',
    height: 4478,
    region: 'Pennine Alps',
    country: 'Switzerland/Italy',
    geoZone: 'Western Alps',
    difficulty: 'hard',
    climbed: false,
    details: {
      description: 'The Matterhorn is one of the most iconic mountains in the world, with its distinctive pyramidal peak. Located on the border between Switzerland and Italy, it has become a symbol of the Swiss Alps. Despite its relatively modest height compared to other Alpine peaks, its near-vertical faces make it one of the most challenging and deadly mountains to climb.',
      imageUrl: IMAGES.matterhorn,
      imageAttribution: 'Unsplash - free',
      latitude: 45.9766,
      longitude: 7.6586,
      trails: [
        { name: 'Hornli Ridge (Northeast Ridge)', distance: '4 km', duration: '8-12 hours', difficulty: 'hard' },
        { name: 'Lion Ridge (Italian Route)', distance: '4 km', duration: '10-14 hours', difficulty: 'hard' },
        { name: 'Zmutt Ridge', distance: '5 km', duration: '12-16 hours', difficulty: 'hard' }
      ]
    }
  },
  {
    id: 3,
    name: 'Dufourspitze',
    height: 4634,
    region: 'Pennine Alps',
    country: 'Switzerland',
    geoZone: 'Western Alps',
    difficulty: 'hard',
    climbed: false,
    details: {
      description: 'Dufourspitze is the highest peak in Switzerland and the second-highest in the Alps after Mont Blanc. Part of the Monte Rosa massif, it was named after Guillaume-Henri Dufour, a Swiss general and cartographer. The mountain offers spectacular views of the surrounding Alps and is a popular destination for experienced mountaineers.',
      imageUrl: IMAGES.dufourspitze,
      imageAttribution: 'Unsplash - free',
      latitude: 45.9369,
      longitude: 7.8667,
      trails: [
        { name: 'Normal Route via Monte Rosa Hut', distance: '10 km', duration: '2 days', difficulty: 'hard' },
        { name: 'Marinelli Couloir', distance: '8 km', duration: '1-2 days', difficulty: 'hard' }
      ]
    }
  },
  {
    id: 4,
    name: 'Großglockner',
    height: 3798,
    region: 'Hohe Tauern',
    country: 'Austria',
    geoZone: 'Eastern Alps',
    difficulty: 'medium',
    climbed: false,
    details: {
      description: 'Großglockner is the highest mountain in Austria, located in the Hohe Tauern National Park. Its distinctive twin peaks and the Pasterze glacier at its base make it one of the most beautiful mountains in the Eastern Alps. The mountain has been climbed since 1800 and remains a popular destination for mountaineers.',
      imageUrl: IMAGES.grossglockner,
      imageAttribution: 'Unsplash - free',
      latitude: 47.0742,
      longitude: 12.6947,
      trails: [
        { name: 'Normal Route via Stüdlgrat', distance: '6 km', duration: '6-8 hours', difficulty: 'medium' },
        { name: 'Hofmannskees Route', distance: '5 km', duration: '5-7 hours', difficulty: 'medium' },
        { name: 'Pallavicinirinne', distance: '4 km', duration: '8-10 hours', difficulty: 'hard' }
      ]
    }
  },
  {
    id: 5,
    name: 'Zugspitze',
    height: 2962,
    region: 'Bavarian Alps',
    country: 'Germany',
    geoZone: 'Eastern Alps',
    difficulty: 'medium',
    climbed: false,
    details: {
      description: 'Zugspitze is the highest peak in Germany, located on the border with Austria. The summit can be reached by cable car, making it accessible to tourists, but traditional climbing routes offer a more challenging experience. The peak features a golden cross and offers panoramic views of over 400 peaks in four countries.',
      imageUrl: IMAGES.zugspitze,
      imageAttribution: 'Unsplash - free',
      latitude: 47.4211,
      longitude: 10.9854,
      trails: [
        { name: 'Höllental Route', distance: '21 km', duration: '7-9 hours', difficulty: 'hard' },
        { name: 'Reintal Valley Route', distance: '22 km', duration: '8-10 hours', difficulty: 'medium' },
        { name: 'Austrian Route via Ehrwald', distance: '10 km', duration: '5-6 hours', difficulty: 'medium' }
      ]
    }
  },
  {
    id: 6,
    name: 'Triglav',
    height: 2864,
    region: 'Julian Alps',
    country: 'Slovenia',
    geoZone: 'Eastern Alps',
    difficulty: 'medium',
    climbed: false,
    details: {
      description: 'Triglav is the highest mountain in Slovenia and a national symbol, featured on the country\'s flag and coat of arms. Its name means "Three Heads" in Slovenian. The mountain is the centerpiece of Triglav National Park and holds deep cultural significance for Slovenians, who consider climbing it a patriotic duty.',
      imageUrl: IMAGES.triglav,
      imageAttribution: 'Unsplash - free',
      latitude: 46.3786,
      longitude: 13.8364,
      trails: [
        { name: 'Via Prag Route', distance: '12 km', duration: '8-10 hours', difficulty: 'medium' },
        { name: 'Tominšek Route', distance: '10 km', duration: '7-9 hours', difficulty: 'medium' },
        { name: 'Via Bamberg Route', distance: '14 km', duration: '10-12 hours', difficulty: 'hard' }
      ]
    }
  },
  {
    id: 7,
    name: 'Gerlachovský štít',
    height: 2655,
    region: 'High Tatras',
    country: 'Slovakia',
    geoZone: 'Carpathians',
    difficulty: 'medium',
    climbed: false,
    details: {
      description: 'Gerlachovský štít is the highest peak in the Carpathian Mountains and Slovakia. Located in the High Tatras, it offers stunning alpine scenery despite being significantly lower than the Alps. Climbing is regulated and requires a licensed guide, which helps preserve the pristine mountain environment.',
      imageUrl: IMAGES.gerlach,
      imageAttribution: 'Unsplash - free',
      latitude: 49.1647,
      longitude: 20.1344,
      trails: [
        { name: 'Classic Route via Velická Valley', distance: '8 km', duration: '6-8 hours', difficulty: 'medium' },
        { name: 'Batizovská Valley Route', distance: '10 km', duration: '7-9 hours', difficulty: 'medium' }
      ]
    }
  },
  {
    id: 8,
    name: 'Rysy',
    height: 2499,
    region: 'High Tatras',
    country: 'Poland/Slovakia',
    geoZone: 'Carpathians',
    difficulty: 'medium',
    climbed: false,
    details: {
      description: 'Rysy is the highest peak in Poland, located on the Polish-Slovak border in the High Tatras. The mountain has three summits, with the middle one being the highest. It offers spectacular views of Morskie Oko (Sea Eye) lake and is the most popular high-altitude destination for Polish hikers.',
      imageUrl: IMAGES.rysy,
      imageAttribution: 'Unsplash - free',
      latitude: 49.1795,
      longitude: 20.0883,
      trails: [
        { name: 'Route from Morskie Oko', distance: '4.5 km', duration: '3-4 hours', difficulty: 'medium' },
        { name: 'Route from Popradské Pleso (Slovakia)', distance: '6 km', duration: '4-5 hours', difficulty: 'medium' }
      ]
    }
  },
  {
    id: 9,
    name: 'Musala',
    height: 2925,
    region: 'Rila Mountains',
    country: 'Bulgaria',
    geoZone: 'Balkans',
    difficulty: 'easy',
    climbed: false,
    details: {
      description: 'Musala is the highest peak in Bulgaria and the entire Balkan Peninsula. Located in the Rila Mountains, its name comes from Arabic meaning "close to God." The peak is accessible via cable car from Borovets ski resort, making it one of the more approachable high peaks in Europe.',
      imageUrl: IMAGES.musala,
      imageAttribution: 'Unsplash - free',
      latitude: 42.1794,
      longitude: 23.5856,
      trails: [
        { name: 'Route from Borovets via Cable Car', distance: '5 km', duration: '2-3 hours', difficulty: 'easy' },
        { name: 'Route from Malyovitsa', distance: '15 km', duration: '6-8 hours', difficulty: 'medium' },
        { name: 'Route from Granchar Hut', distance: '8 km', duration: '3-4 hours', difficulty: 'easy' }
      ]
    }
  },
  {
    id: 10,
    name: 'Mount Olympus (Mytikas)',
    height: 2918,
    region: 'Olympus Range',
    country: 'Greece',
    geoZone: 'Balkans',
    difficulty: 'medium',
    climbed: false,
    details: {
      description: 'Mount Olympus is the highest mountain in Greece and mythological home of the Greek gods. Mytikas, its highest peak, requires some scrambling to reach. The mountain is part of a UNESCO Biosphere Reserve and features diverse ecosystems from Mediterranean forests to alpine meadows.',
      imageUrl: IMAGES.olympus,
      imageAttribution: 'Unsplash - free',
      latitude: 40.0859,
      longitude: 22.3583,
      trails: [
        { name: 'E4 Trail via Prionia', distance: '16 km', duration: '2 days', difficulty: 'medium' },
        { name: 'Louki Couloir', distance: '12 km', duration: '8-10 hours', difficulty: 'hard' },
        { name: 'Route from Kokkinoplos', distance: '18 km', duration: '2 days', difficulty: 'medium' }
      ]
    }
  },
  {
    id: 11,
    name: 'Galdhøpiggen',
    height: 2469,
    region: 'Jotunheimen',
    country: 'Norway',
    geoZone: 'Scandinavia',
    difficulty: 'easy',
    climbed: false,
    details: {
      description: 'Galdhøpiggen is the highest mountain in Norway and Scandinavia. Located in the Jotunheimen National Park, it offers a relatively accessible summit with stunning views of glaciers and the Norwegian highlands. The mountain can be climbed in summer or on ski in winter.',
      imageUrl: IMAGES.galdhopiggen,
      imageAttribution: 'Unsplash - free',
      latitude: 61.6364,
      longitude: 8.3125,
      trails: [
        { name: 'Route from Spiterstulen', distance: '10 km', duration: '4-5 hours', difficulty: 'easy' },
        { name: 'Route via Juvasshytta (glacier crossing)', distance: '6 km', duration: '3-4 hours', difficulty: 'medium' },
        { name: 'Ski Touring Route', distance: '12 km', duration: '5-6 hours', difficulty: 'medium' }
      ]
    }
  },
  {
    id: 12,
    name: 'Kebnekaise',
    height: 2097,
    region: 'Scandinavian Mountains',
    country: 'Sweden',
    geoZone: 'Scandinavia',
    difficulty: 'medium',
    climbed: false,
    details: {
      description: 'Kebnekaise is the highest mountain in Sweden, located in Lapland above the Arctic Circle. The southern peak, covered by a glacier, has been losing height due to climate change. The mountain offers midnight sun views in summer and aurora borealis in winter.',
      imageUrl: IMAGES.kebnekaise,
      imageAttribution: 'Unsplash - free',
      latitude: 67.9033,
      longitude: 18.5172,
      trails: [
        { name: 'Western Route (Kungsleden)', distance: '19 km', duration: '8-10 hours', difficulty: 'easy' },
        { name: 'Eastern Route (via glacier)', distance: '14 km', duration: '6-8 hours', difficulty: 'medium' }
      ]
    }
  },
  {
    id: 13,
    name: 'Mulhacén',
    height: 3479,
    region: 'Sierra Nevada',
    country: 'Spain',
    geoZone: 'Iberian Peninsula',
    difficulty: 'easy',
    climbed: false,
    details: {
      description: 'Mulhacén is the highest peak in mainland Spain and the Iberian Peninsula. Located in the Sierra Nevada National Park in Andalusia, it offers views of both the Mediterranean Sea and the Atlas Mountains of Morocco on clear days. The mountain is named after Abu l-Hasan Ali, the penultimate Moorish king of Granada.',
      imageUrl: IMAGES.mulhacen,
      imageAttribution: 'Unsplash - free',
      latitude: 37.0533,
      longitude: -3.3111,
      trails: [
        { name: 'Route from Capileira', distance: '23 km', duration: '8-10 hours', difficulty: 'medium' },
        { name: 'Route from Alto del Chorrillo', distance: '14 km', duration: '5-6 hours', difficulty: 'easy' },
        { name: 'Traverse via Veleta', distance: '20 km', duration: '7-9 hours', difficulty: 'medium' }
      ]
    }
  },
  {
    id: 14,
    name: 'Aneto',
    height: 3404,
    region: 'Pyrenees',
    country: 'Spain',
    geoZone: 'Iberian Peninsula',
    difficulty: 'medium',
    climbed: false,
    details: {
      description: 'Aneto is the highest peak in the Pyrenees mountain range. Located in the Spanish province of Huesca, it features the Aneto glacier, the southernmost glacier in Europe. The ascent involves crossing the Maladeta glacier and requires mountaineering experience.',
      imageUrl: IMAGES.aneto,
      imageAttribution: 'Unsplash - free',
      latitude: 42.6314,
      longitude: 0.6572,
      trails: [
        { name: 'Classic Route via La Renclusa', distance: '12 km', duration: '7-9 hours', difficulty: 'medium' },
        { name: 'Route via Coronas Valley', distance: '14 km', duration: '8-10 hours', difficulty: 'medium' },
        { name: 'Traverse from Portillón', distance: '16 km', duration: '9-11 hours', difficulty: 'hard' }
      ]
    }
  },
  {
    id: 15,
    name: 'Mount Etna',
    height: 3357,
    region: 'Sicily',
    country: 'Italy',
    geoZone: 'Western Alps',
    difficulty: 'medium',
    climbed: false,
    details: {
      description: 'Mount Etna is Europe\'s highest and most active volcano, located on the east coast of Sicily. Its height varies due to volcanic activity. The mountain has been erupting for thousands of years and is a UNESCO World Heritage Site. Guided tours allow visitors to explore its craters and lava formations.',
      imageUrl: IMAGES.etna,
      imageAttribution: 'Unsplash - free',
      latitude: 37.7510,
      longitude: 14.9934,
      trails: [
        { name: 'Route from Rifugio Sapienza', distance: '8 km', duration: '4-5 hours', difficulty: 'medium' },
        { name: 'Route from Piano Provenzana', distance: '10 km', duration: '5-6 hours', difficulty: 'medium' },
        { name: 'Guided Crater Tour', distance: '6 km', duration: '3-4 hours', difficulty: 'easy' }
      ]
    }
  },
  {
    id: 16,
    name: 'Corno Grande',
    height: 2912,
    region: 'Gran Sasso',
    country: 'Italy',
    geoZone: 'Western Alps',
    difficulty: 'medium',
    climbed: false,
    details: {
      description: 'Corno Grande is the highest peak of the Apennine Mountains, located in the Gran Sasso e Monti della Laga National Park. It features the Calderone glacier, the southernmost glacier in Europe. The mountain offers challenging climbing routes and spectacular views of central Italy.',
      imageUrl: IMAGES.cornoGrande,
      imageAttribution: 'Unsplash - free',
      latitude: 42.4683,
      longitude: 13.5656,
      trails: [
        { name: 'Via Normale from Campo Imperatore', distance: '8 km', duration: '4-5 hours', difficulty: 'medium' },
        { name: 'Via Ferrata Ventricini', distance: '6 km', duration: '5-6 hours', difficulty: 'hard' },
        { name: 'Route via Vetta Occidentale', distance: '10 km', duration: '6-7 hours', difficulty: 'medium' }
      ]
    }
  },
  {
    id: 17,
    name: 'Moldoveanu',
    height: 2544,
    region: 'Făgăraș Mountains',
    country: 'Romania',
    geoZone: 'Carpathians',
    difficulty: 'medium',
    climbed: false,
    details: {
      description: 'Moldoveanu is the highest peak in Romania, located in the Făgăraș Mountains of the Southern Carpathians. The mountain is part of a pristine wilderness area home to bears, wolves, and lynx. The ridge traverse along the Făgăraș crest is considered one of the finest mountain walks in Eastern Europe.',
      imageUrl: IMAGES.moldoveanu,
      imageAttribution: 'Unsplash - free',
      latitude: 45.6014,
      longitude: 24.7358,
      trails: [
        { name: 'Route from Cabana Victoria', distance: '8 km', duration: '5-6 hours', difficulty: 'medium' },
        { name: 'Făgăraș Ridge Traverse', distance: '70 km', duration: '5-7 days', difficulty: 'hard' },
        { name: 'Route from Bâlea Lake', distance: '12 km', duration: '6-8 hours', difficulty: 'medium' }
      ]
    }
  },
  {
    id: 18,
    name: 'Sněžka',
    height: 1603,
    region: 'Krkonoše',
    country: 'Czechia/Poland',
    geoZone: 'Central Europe',
    difficulty: 'easy',
    climbed: false,
    details: {
      description: 'Sněžka (Śnieżka in Polish) is the highest mountain in Czechia and the Krkonoše/Giant Mountains range. The border between Czechia and Poland runs across its summit, which features a distinctive disc-shaped weather observatory. The mountain is known for its harsh weather conditions and unique alpine flora.',
      imageUrl: IMAGES.snezka,
      imageAttribution: 'Unsplash - free',
      latitude: 50.7361,
      longitude: 15.7397,
      trails: [
        { name: 'Route from Pec pod Sněžkou', distance: '8 km', duration: '3-4 hours', difficulty: 'easy' },
        { name: 'Route from Karpacz (Poland)', distance: '8 km', duration: '3-4 hours', difficulty: 'easy' },
        { name: 'Jubilee Trail', distance: '6 km', duration: '2.5-3 hours', difficulty: 'easy' }
      ]
    }
  },
  {
    id: 19,
    name: 'Carrauntoohil',
    height: 1038,
    region: 'MacGillycuddy\'s Reeks',
    country: 'Ireland',
    geoZone: 'British Isles',
    difficulty: 'medium',
    climbed: false,
    details: {
      description: 'Carrauntoohil is the highest peak in Ireland, located in County Kerry. Despite its modest height, the mountain offers challenging terrain with steep ridges and dramatic corries. The summit features a large iron cross and offers views of the Atlantic Ocean and surrounding lakes.',
      imageUrl: IMAGES.carrauntoohil,
      imageAttribution: 'Unsplash - free',
      latitude: 51.9992,
      longitude: -9.7444,
      trails: [
        { name: 'Devil\'s Ladder Route', distance: '10 km', duration: '4-5 hours', difficulty: 'medium' },
        { name: 'Caher Ridge Route', distance: '12 km', duration: '5-6 hours', difficulty: 'medium' },
        { name: 'Brother O\'Shea\'s Gully', distance: '8 km', duration: '4-5 hours', difficulty: 'hard' }
      ]
    }
  },
  {
    id: 20,
    name: 'Ben Nevis',
    height: 1345,
    region: 'Grampian Mountains',
    country: 'Scotland',
    geoZone: 'British Isles',
    difficulty: 'medium',
    climbed: false,
    details: {
      description: 'Ben Nevis is the highest mountain in the British Isles, located in the Scottish Highlands near Fort William. The mountain attracts over 100,000 hikers annually. Its north face features some of the most challenging ice climbs in Britain, while the tourist path offers a more accessible route.',
      imageUrl: IMAGES.benNevis,
      imageAttribution: 'Unsplash - free',
      latitude: 56.7969,
      longitude: -5.0036,
      trails: [
        { name: 'Mountain Track (Tourist Path)', distance: '17 km', duration: '7-9 hours', difficulty: 'medium' },
        { name: 'Carn Mor Dearg Arete', distance: '16 km', duration: '8-10 hours', difficulty: 'hard' },
        { name: 'North Face Routes', distance: 'varies', duration: '6-10 hours', difficulty: 'hard' }
      ]
    }
  },
  {
    id: 21,
    name: 'Snowdon',
    height: 1085,
    region: 'Snowdonia',
    country: 'Wales',
    geoZone: 'British Isles',
    difficulty: 'easy',
    climbed: false,
    details: {
      description: 'Snowdon (Yr Wyddfa in Welsh) is the highest mountain in Wales and England. Located in Snowdonia National Park, it offers six different hiking paths and a mountain railway to the summit. The peak has mythological significance in Welsh culture and offers stunning views of the Irish Sea.',
      imageUrl: IMAGES.snowdon,
      imageAttribution: 'Unsplash - free',
      latitude: 53.0685,
      longitude: -4.0763,
      trails: [
        { name: 'Llanberis Path', distance: '14 km', duration: '5-6 hours', difficulty: 'easy' },
        { name: 'Pyg Track', distance: '11 km', duration: '4-5 hours', difficulty: 'easy' },
        { name: 'Crib Goch Route', distance: '12 km', duration: '5-7 hours', difficulty: 'hard' },
        { name: 'Watkin Path', distance: '13 km', duration: '5-6 hours', difficulty: 'medium' }
      ]
    }
  },
  {
    id: 22,
    name: 'Hoverla',
    height: 2061,
    region: 'Carpathians',
    country: 'Ukraine',
    geoZone: 'Carpathians',
    difficulty: 'easy',
    climbed: false,
    details: {
      description: 'Hoverla is the highest mountain in Ukraine, located in the Carpathian Mountains. It is a symbol of Ukrainian national identity and a popular hiking destination. The mountain features alpine meadows called "polonyna" and offers relatively easy access via well-marked trails.',
      imageUrl: IMAGES.hoverla,
      imageAttribution: 'Unsplash - free',
      latitude: 48.1603,
      longitude: 24.5003,
      trails: [
        { name: 'Route from Zaroslyak', distance: '9 km', duration: '3-4 hours', difficulty: 'easy' },
        { name: 'Route from Lazeshchyna', distance: '12 km', duration: '4-5 hours', difficulty: 'easy' },
        { name: 'Route via Petros', distance: '18 km', duration: '8-10 hours', difficulty: 'medium' }
      ]
    }
  },
  {
    id: 23,
    name: 'Bobotov Kuk',
    height: 2523,
    region: 'Durmitor',
    country: 'Montenegro',
    geoZone: 'Balkans',
    difficulty: 'medium',
    climbed: false,
    details: {
      description: 'Bobotov Kuk is the highest peak in Montenegro\'s Durmitor National Park, a UNESCO World Heritage Site. The mountain rises above deep canyons and glacial lakes, including the famous Black Lake. The area is known for its dramatic karst landscape and diverse wildlife.',
      imageUrl: IMAGES.bobotov,
      imageAttribution: 'Unsplash - free',
      latitude: 43.1244,
      longitude: 19.0283,
      trails: [
        { name: 'Route from Sedlo Pass', distance: '10 km', duration: '5-6 hours', difficulty: 'medium' },
        { name: 'Route via Zeleni Vir', distance: '14 km', duration: '7-8 hours', difficulty: 'medium' }
      ]
    }
  },
  {
    id: 24,
    name: 'Golem Korab',
    height: 2764,
    region: 'Korab Range',
    country: 'North Macedonia/Albania',
    geoZone: 'Balkans',
    difficulty: 'medium',
    climbed: false,
    details: {
      description: 'Golem Korab is the highest peak in both North Macedonia and Albania, located on the border between the two countries. The mountain is relatively remote and less visited than other European peaks, offering a wilderness experience with pristine alpine meadows and endemic flora.',
      imageUrl: IMAGES.korab,
      imageAttribution: 'Unsplash - free',
      latitude: 41.7919,
      longitude: 20.5600,
      trails: [
        { name: 'Route from Strezimir (North Macedonia)', distance: '12 km', duration: '6-7 hours', difficulty: 'medium' },
        { name: 'Route from Albania', distance: '14 km', duration: '7-8 hours', difficulty: 'medium' }
      ]
    }
  },
  {
    id: 25,
    name: 'Jezerca',
    height: 2694,
    region: 'Albanian Alps',
    country: 'Albania',
    geoZone: 'Balkans',
    difficulty: 'hard',
    climbed: false,
    details: {
      description: 'Jezerca is the highest peak of the Albanian Alps (Accursed Mountains). This remote and rugged peak offers one of the most adventurous climbing experiences in Europe. The surrounding area is home to traditional Albanian highland villages and offers spectacular karst scenery.',
      imageUrl: IMAGES.jezerca,
      imageAttribution: 'Unsplash - free',
      latitude: 42.4400,
      longitude: 19.8067,
      trails: [
        { name: 'Route from Theth', distance: '18 km', duration: '2 days', difficulty: 'hard' },
        { name: 'Route from Valbona', distance: '20 km', duration: '2-3 days', difficulty: 'hard' }
      ]
    }
  },
  {
    id: 26,
    name: 'Eiger',
    height: 3967,
    region: 'Bernese Alps',
    country: 'Switzerland',
    geoZone: 'Western Alps',
    difficulty: 'hard',
    climbed: false,
    details: {
      description: 'The Eiger is famous for its imposing north face, known as the "Nordwand" or "Murder Wall." This 1,800-meter face is one of the most challenging climbs in the Alps. The mountain, along with the Mönch and Jungfrau, forms a dramatic trio visible from Interlaken and Grindelwald.',
      imageUrl: IMAGES.eiger,
      imageAttribution: 'Unsplash - free',
      latitude: 46.5775,
      longitude: 8.0053,
      trails: [
        { name: 'West Ridge (Normal Route)', distance: '8 km', duration: '6-8 hours', difficulty: 'hard' },
        { name: 'Mittellegi Ridge', distance: '6 km', duration: '8-12 hours', difficulty: 'hard' },
        { name: 'North Face (Heckmair Route)', distance: '3.8 km', duration: '2-3 days', difficulty: 'hard' }
      ]
    }
  },
  {
    id: 27,
    name: 'Jungfrau',
    height: 4158,
    region: 'Bernese Alps',
    country: 'Switzerland',
    geoZone: 'Western Alps',
    difficulty: 'hard',
    climbed: false,
    details: {
      description: 'The Jungfrau is one of the main peaks of the Bernese Alps. Its name means "Virgin" in German. Together with the Eiger and Mönch, it forms a famous trilogy of peaks. The Jungfraubahn railway takes visitors to Jungfraujoch, the highest railway station in Europe.',
      imageUrl: IMAGES.jungfrau,
      imageAttribution: 'Unsplash - free',
      latitude: 46.5367,
      longitude: 7.9622,
      trails: [
        { name: 'Normal Route via Mönchsjochhütte', distance: '10 km', duration: '6-8 hours', difficulty: 'hard' },
        { name: 'Southeast Ridge', distance: '8 km', duration: '7-9 hours', difficulty: 'hard' }
      ]
    }
  },
  {
    id: 28,
    name: 'Dinara',
    height: 1831,
    region: 'Dinaric Alps',
    country: 'Croatia',
    geoZone: 'Balkans',
    difficulty: 'medium',
    climbed: false,
    details: {
      description: 'Dinara is the highest peak in Croatia and gives its name to the entire Dinaric Alps range. Located on the border with Bosnia and Herzegovina, it offers panoramic views of the Adriatic coast and the Dalmatian hinterland. The mountain features karst terrain with caves and sinkholes.',
      imageUrl: IMAGES.dinara,
      imageAttribution: 'Unsplash - free',
      latitude: 44.0542,
      longitude: 16.3864,
      trails: [
        { name: 'Route from Glavaš', distance: '8 km', duration: '4-5 hours', difficulty: 'medium' },
        { name: 'Route via Troglav', distance: '15 km', duration: '7-8 hours', difficulty: 'medium' }
      ]
    }
  }
];
