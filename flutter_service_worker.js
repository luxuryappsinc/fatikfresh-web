'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5a4a9debc859bc789596497b2eb24019",
"version.json": "140fe6951f41b220f2909b82f37044df",
"index.html": "bda77835902c659fe2d8cdf87bf6b30f",
"/": "bda77835902c659fe2d8cdf87bf6b30f",
"main.dart.js": "92d674994525a35465f90f7dd2903fe8",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f69077c63d58dc632547d324056f947b",
"assets/AssetManifest.json": "aa0620f97bca0cb298011db6baeb24f4",
"assets/NOTICES": "3c783db4868a43dc94a26a5e63af4f85",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "aa65bf06cf9255c5bdaa557ab90102f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "869270fdfc76e7f5f4743e7f1bbc32f8",
"assets/fonts/MaterialIcons-Regular.otf": "3ff4369ca18e6bad1aad8e96ed25b4c6",
"assets/assets/category_images/new-arrival.png": "1208bfd1a0f3b163ec6995849043ba49",
"assets/assets/category_images/medical-devices.png": "9462456a75b89a9063ae01c701a4141c",
"assets/assets/category_images/toilet-cleaners.png": "8075eb3685cf83df4a42b4e7ac8f9af9",
"assets/assets/category_images/oil.png": "f537c450748915abf876d8ba84cb7c81",
"assets/assets/category_images/syrups-powder-drinks.png": "d416fa869c0124e4f3b4f2105f428ada",
"assets/assets/category_images/keto-food.png": "65d8289f108aa99ec42c6d8db7ac8049",
"assets/assets/category_images/chicken-poultry.png": "6e6118f9e65720535eda6093bc5fca10",
"assets/assets/category_images/soups.png": "87609b1444d0c2bf0eb258c09a6aee3b",
"assets/assets/category_images/hair-care.png": "1c859c85b3d7da7ca3ff2b3b9cebf396",
"assets/assets/category_images/frozen-fish.png": "745b90e9a010d6581488b8dea4c5de3f",
"assets/assets/category_images/beef-snacks.png": "5e4128e897cb0d761bd31ddd42d7f8d3",
"assets/assets/category_images/womens-shower-gel.png": "cba0c7b1794f4a71a36234563b5905d2",
"assets/assets/category_images/cat-litters.png": "4183d5e51f8c2e8e1554a6892d2b216e",
"assets/assets/category_images/fish-cans.png": "6ac9c519920b761101f389bb545989b5",
"assets/assets/category_images/hand-sanitizer.png": "8a1d712d8c4287d65f8bae2a567b2455",
"assets/assets/category_images/cooking-sauces.png": "db26acdf6c47329af722e63a8fcef561",
"assets/assets/category_images/yogurt-sweets.png": "d65a4e40849f5c91f97d5c6984abbd52",
"assets/assets/category_images/tomato-sauces.png": "b42ab041c61ed7430c7e3e5774347eff",
"assets/assets/category_images/cat-food.png": "41a041f83f4d33d61c01da5fb5a0b59b",
"assets/assets/category_images/liquid-uht-milk.png": "6f927d1278bb3590f0aa3a0878429431",
"assets/assets/category_images/colors-flavours.png": "a373c987b5439cac95fc9945aaf57ad8",
"assets/assets/category_images/flash-sale.png": "5ab6d916f8150397cd632abd90f7a135",
"assets/assets/category_images/baby-oral-care.png": "72688029b82f7bf30cdae5c1e532f18a",
"assets/assets/category_images/coffee.png": "1e7dc6b2205a7500138336c9e3eebb71",
"assets/assets/category_images/handwash-handrub.png": "b3ccdece4a67f4dc12e49fda3ae7db40",
"assets/assets/category_images/small-3-7-kg-diapers.png": "1d39fee88c0866cff0bc01e7e004923a",
"assets/assets/category_images/feeders.png": "c05f8da3b55b196704450b4fb1a7a7cb",
"assets/assets/category_images/tapes-glues-adhesive.png": "ce59a41d01cef79ea02b1a05e22296d9",
"assets/assets/category_images/lipsticks-lip-balm.png": "cf06cd4f6909edabbbf03ae32e0af888",
"assets/assets/category_images/toner-ink.png": "b5396f71a031a26630c0bf3218e2b15d",
"assets/assets/category_images/diapers.png": "0bf59641f3127dba387af15a028d8129",
"assets/assets/category_images/oral-care.png": "a03137ac6049bf3641544075623f3747",
"assets/assets/category_images/toothbrushes.png": "0c064d4b103a4e11fe6042835e3afc1a",
"assets/assets/category_images/tea-coffee.png": "63a5998c20b2fb93986bf578e808e859",
"assets/assets/category_images/bird-other-pet-food.png": "bca3aa7f188b85608af57be915830a80",
"assets/assets/category_images/mens-deodorants.png": "ff7070806b111f7d28ae8bcd3ca38bf7",
"assets/assets/category_images/gums-mints-mouth-fresheners.png": "90f3307b71333f0c241aaada0c980f83",
"assets/assets/category_images/feminine-care.png": "9ae8c12bebce03fd48bd16d4d35ac19e",
"assets/assets/category_images/ghee.png": "16f2dd8255fa1fff1efb4e612fd24c8b",
"assets/assets/category_images/plain-biscuits.png": "f73fc47cdc4d880e489d1cb799e1a899",
"assets/assets/category_images/shemai-suji.png": "a7a5c09c0f23a53e480658ae54447121",
"assets/assets/category_images/dried-fish.png": "25304dcac614f954b9ce5670d726b6a4",
"assets/assets/category_images/cookies.png": "c24eab7011441d30bfe5d0e06560654f",
"assets/assets/category_images/highlighters-markers.png": "bd08117fd7f51452a1a36850cd0b37f5",
"assets/assets/category_images/powder-milk.png": "7ec3feb0aa337c4f037060c05eeba399",
"assets/assets/category_images/wafers.png": "e245156c5bc9c83cc29aa78fd5fa31d4",
"assets/assets/category_images/gardening.png": "d26696822256415606d247bb81b58c38",
"assets/assets/category_images/diaries-notebooks.png": "321570dec24241d15063a5fdd8dfd596",
"assets/assets/category_images/tools-hardware.png": "2321a964dedaa6ef35fb7d73bff6f060",
"assets/assets/category_images/toys-sports.png": "2e55291292e344f2ad297c08f72d4f37",
"assets/assets/category_images/womens-perfume.png": "5477a391e79e87d81101d238101de690",
"assets/assets/category_images/fresh-vegetables.png": "ce38ea6ff0c283470209719f2b512f88",
"assets/assets/category_images/napkins-paper-products.png": "1865db834d37e7fe126bd335bc3b28df",
"assets/assets/category_images/lotions.png": "9befe4bb589cc6f3e63669d6e442d663",
"assets/assets/category_images/stapler-punch.png": "6e14fed1969ca504ea70849eb9d9c86e",
"assets/assets/category_images/dishwashing-supplies.png": "d99338ffc9948ef9c0b3c1ad6de14f48",
"assets/assets/category_images/writing-printing.png": "32122bbc9c9b50b173966104e792b578",
"assets/assets/category_images/razors-blades.png": "9bd5d4306387b8f82a9a77b2688524b4",
"assets/assets/category_images/mens-facewash.png": "73913a2006c4bc0700c0c194bef259d7",
"assets/assets/category_images/pens.png": "4b935630e1bafd99b1e85c012846573a",
"assets/assets/category_images/salad-dressing.png": "163e42408bca550352de77133ca8a76a",
"assets/assets/category_images/mushroom-cans.png": "6eafa1d61a55b0c5ae51770e217feb46",
"assets/assets/category_images/cereals.png": "83615d4bb91d7b0949ba45deda5a394a",
"assets/assets/category_images/organizers.png": "fb2ae544c94a1d1ee74c4d2e111e6612",
"assets/assets/category_images/electric-multiplug.png": "1ddb0f51bfc5c479c92b6072304da661",
"assets/assets/category_images/extra-large-15-kg-diapers.png": "14b60ca5d53a7e64dbfa256ac4eea8a8",
"assets/assets/category_images/beauty-makeups.png": "33224223ad4b954fd291b07015c2ab51",
"assets/assets/category_images/vegetable-snacks.png": "bcb99dc04c3afc6a20028800ff130d00",
"assets/assets/category_images/jellies-marshmallows.png": "8653d411f9d0d2f60ba9f5337354cb61",
"assets/assets/category_images/calculators.png": "2950fba3858f78dc1fe299cf39b4fec8",
"assets/assets/category_images/tissue-wipes.png": "2aa8741de073528a0ea1483d7738ca08",
"assets/assets/category_images/nuts-dried-fruits.png": "530c6d3adcaf2bfee5bcb41d5c700380",
"assets/assets/category_images/flour.png": "51b3531563febade2b6aa0eecba235fb",
"assets/assets/category_images/honey.png": "771902479d5fcc48c256e6e8bfb32f6d",
"assets/assets/category_images/womens-soaps.png": "deed5f07071bcea2d337d86cf28cdd63",
"assets/assets/category_images/formula.png": "930f794f79082fe177b513707d5093ff",
"assets/assets/category_images/arts-crafts.png": "3774e63ef50306371572e33c0d1b57c5",
"assets/assets/category_images/cooking.png": "35a8ec777b14775e024793d8f9eff420",
"assets/assets/category_images/face-masks-safety.png": "3faafaa64533290bcd154c2de37526ab",
"assets/assets/category_images/files-folders.png": "885a7ea43fc99f4c7045680458d96f5e",
"assets/assets/category_images/rack-organizer.png": "35e3c0df42ea4b61fbd4e9ca7e06cb2d",
"assets/assets/category_images/fruits_vegetables.png": "b3cc73ab4756fec2bab091c897122f9a",
"assets/assets/category_images/salted-biscuits.png": "15218aa7fbc83c7dcede1bf63a400114",
"assets/assets/category_images/frozen-canned.png": "5ee7801a4c91e3adf4837fd966ec555e",
"assets/assets/category_images/printing-paper.png": "62910ced563a11e074a0f39e71aff5ba",
"assets/assets/category_images/shaving-needs.png": "e038b72b8ce52d123b1f8665a2d5ffd1",
"assets/assets/category_images/skin-care.png": "983a58556f9787f8ab500065f8fee699",
"assets/assets/category_images/dips-spreads-syrups.png": "57776c75ab24fad2febf0db77dcf3816",
"assets/assets/category_images/mosquito-swatter.png": "6b3c04b1b8d3e0febe72f9ec855c8e0d",
"assets/assets/category_images/candies.png": "cf5c4609ed7ab4b9d968c5cc7b2425bc",
"assets/assets/category_images/chicken-snacks.png": "bc99294d0815bd070b600d0d20059665",
"assets/assets/category_images/foods.png": "e4e60db64b546c6921bad34e206bdfd9",
"assets/assets/category_images/creams.png": "60685e5173b926b1fd26cc5f4ddd6431",
"assets/assets/category_images/vegetable-cans.png": "51368aca1b6b1b3416a0b6f46f23e322",
"assets/assets/category_images/spices.png": "2e08b12e91552f160e2dee2ee1c0c462",
"assets/assets/category_images/cream-biscuits.png": "bf41dd2d9fa1f492ec6ff65b0e14bd84",
"assets/assets/category_images/family-planning.png": "823c06922e9c2c9c390e119e6b837c00",
"assets/assets/category_images/grooming-cleaning.png": "730d0f855fa967e756a47039e9dd72ca",
"assets/assets/category_images/baking-tools.png": "2ae2add103c61b6e52eead562f77ba50",
"assets/assets/category_images/baking-dessert-mixes.png": "9525e7b4c26fe5b2993713288405c3e0",
"assets/assets/category_images/other-table-sauces.png": "6ff1e110877e1fa34dd1a381198b9f81",
"assets/assets/category_images/newborn-essentials.png": "14def43374e6396090719b38fcf804ee",
"assets/assets/category_images/office-electronics.png": "f59d8d5c895cc5e817d4623f66297c2f",
"assets/assets/category_images/box-container.png": "7e721de410efcba0f02470673193472a",
"assets/assets/category_images/herbal-digestive-aids.png": "ec1fb676546bf067f7f3541197a54dbd",
"assets/assets/category_images/eggs.png": "63ae93cadc835025319d48853d08b09c",
"assets/assets/category_images/mens-shower-gels.png": "441e147c37b7dcbae3d52c94634a1e2e",
"assets/assets/category_images/antiseptics.png": "ee2f0ba5e42e7e9c5ef6048aff5ffc84",
"assets/assets/category_images/lights-electrical.png": "66f389dd7123f3669408a0766a33ecaa",
"assets/assets/category_images/beverages.png": "210d9c97e6ba81ee6c81bf180885825b",
"assets/assets/category_images/newborn-2-5-kg-diapers.png": "d9da8e44e2474ae511174a69b3b7bf74",
"assets/assets/category_images/mens-perfume.png": "f4c5b5cb0482b913dd56f07f0e99b6e2",
"assets/assets/category_images/kitchen-accessories.png": "7b2ebd382096bf578d70bd647d0d3777",
"assets/assets/category_images/butter-sour-cream.png": "4c09d22de15e2eecd12586d33a88bb4a",
"assets/assets/category_images/vehicle-essentials.png": "46e343eb92bccc6af3a829d4dc512aee",
"assets/assets/category_images/meat.png": "ef0bed9f8ecf7c69bc211fd6c4bc6196",
"assets/assets/category_images/energy-boosters.png": "28c2748277c6cd8bf70766d460fa70c1",
"assets/assets/category_images/talcom-powder.png": "615c23648000a128697102aa6a1f1cbf",
"assets/assets/category_images/ready-mix.png": "df125088689e1c76e39a7e31825c5dc2",
"assets/assets/category_images/handwash.png": "76917c964abbae1b70c3f39441de25b1",
"assets/assets/category_images/kitten-food.png": "d50b88fcf455acc9453efdd144815705",
"assets/assets/category_images/desk-organizers.png": "f45a18e231227d6f5789fb3f8ecacb38",
"assets/assets/category_images/cleaning-accessories.png": "f8570c507b26049b87d46c526ca27b65",
"assets/assets/category_images/local-snacks.png": "16efee5fc163fa5ce81e1fa4669118e2",
"assets/assets/category_images/baby-toddler-food.png": "423559dd4af21a3ee7e88f874c243e18",
"assets/assets/category_images/dairy-eggs.png": "9425797c6fb1934ad1bf17af7ef7cffb",
"assets/assets/category_images/petroleum-jelly.png": "d34466098d572b9bd34ddbfbdda6f5bf",
"assets/assets/category_images/dal-or-lentil.png": "905ce1ba041339f5c6817165ec9a294b",
"assets/assets/category_images/mouthwashes-inhaler-balm.png": "04029059ed332d4875179e6820172f4e",
"assets/assets/category_images/laundry.png": "36b4c8004721439c34f2ec0c6ba85b35",
"assets/assets/category_images/lights.png": "53a6fedba0a67543c6b377b64ae804dd",
"assets/assets/category_images/premium-ingredients.png": "69da5e7815d6abf921f3f2f9172e57f5",
"assets/assets/category_images/electronics.png": "c876171142bb9cd8ca1a5723c5ebd168",
"assets/assets/category_images/floor-glass-cleaners.png": "eef25d85d7c256bb9b8b4c1d0684b9fe",
"assets/assets/category_images/large-10-16-kg-diapers.png": "83349e98c119da022073c56bab9af010",
"assets/assets/category_images/tofu-meat-alternatives.png": "79ec127dfe3d201c1cd731e8401fef03",
"assets/assets/category_images/cheese.png": "907d84fcf40baac70566300787a908e7",
"assets/assets/category_images/candy-chocolate.png": "1cb3b04bb3f0f25478a139ab4316e57f",
"assets/assets/category_images/rice.png": "83fbf35d346ab62f7f2b5d4ecf8f2bbf",
"assets/assets/category_images/measuring-tools.png": "acfea1b3c9707f26b99e7c1146cead6c",
"assets/assets/category_images/toothpastes.png": "66e5b61cce6028423582412632290b32",
"assets/assets/category_images/milk-juice-drinks.png": "22473a1f9a60524fc7425e797752a1de",
"assets/assets/category_images/mens-soaps.png": "0dffac5aa0fa7419a5b6ce6583b228ba",
"assets/assets/category_images/frozen-parathas-roti.png": "be944c0d1f5d6e583ec7a346dc4f9e18",
"assets/assets/category_images/toast-bakery-biscuits.png": "4c414ca1bd47ff470f8bd95201af15f9",
"assets/assets/category_images/womens-shampoos-conditioners.png": "b823d1ce2ce815ad029fe346ec5b377a",
"assets/assets/category_images/water.png": "471fda296cd41cb86cf1251e94b6ec5f",
"assets/assets/category_images/cakes.png": "ebf3e2c679d2e49dbde77da9a5d64576",
"assets/assets/category_images/female-moisturizer.png": "b4f9049fdb5d7baa3389a494993e0ec6",
"assets/assets/category_images/snacks.png": "8f3e9bcf3a9e9923983b71861db6cdeb",
"assets/assets/category_images/school-supplies.png": "4e65ee42f9248141c4734a1430874536",
"assets/assets/category_images/trash-bin-basket.png": "0e9a0c9b0e5889b09472b52e4efa3347",
"assets/assets/category_images/mens-hair-care.png": "1e1bf5f8d6c10f6f49ebffd497650025",
"assets/assets/category_images/basket-bucket.png": "00d56c044a503d92bbbda2f5144f8eaf",
"assets/assets/category_images/cream-lotion.png": "7844f36996ab9bf23147579d6da4a3a4",
"assets/assets/category_images/beard-grooming.png": "e18fe14c46039df86a5c19cc680356b6",
"assets/assets/category_images/shoe-care.png": "24bdbb8c6f3eb4ae8132c82e28f23f8c",
"assets/assets/category_images/masks-cleansers.png": "18881d48527d55963c44463de5610c97",
"assets/assets/category_images/pest-control.png": "717b70967560eae6b5bfb1665935409d",
"assets/assets/category_images/fish-snacks.png": "77cde367f6516dd0c3f63b1d0a5631f6",
"assets/assets/category_images/soaps.png": "acaf1074356dc74a160456f563ca8403",
"assets/assets/category_images/salt-sugar.png": "16de4b918e74378b6885a2458588fc8a",
"assets/assets/category_images/erasers-correction-fluid.png": "408f8b35b8f69105a28356e2e1b4a23a",
"assets/assets/category_images/color-pencils.png": "ba216e6dfb8adc204df1b3801207c373",
"assets/assets/category_images/baking-ingredients.png": "83f047a32592cc2b7d17d4e5f4625f8e",
"assets/assets/category_images/disposables-trash-bags.png": "585856486447adbbfb2b800e26485ae6",
"assets/assets/category_images/popcorn-nuts.png": "530c6d3adcaf2bfee5bcb41d5c700380",
"assets/assets/category_images/organizing-accessories.png": "fd3339ab8a69a00a22cf3bdba296c237",
"assets/assets/category_images/adult-diapers.png": "7421d8998b0e9e11c9f17452ebcf92e9",
"assets/assets/category_images/meat-fish.png": "658b802e794981c373ab4d37fbeb4405",
"assets/assets/category_images/canned-fruits-sweets.png": "ce4f91877db472acd51573ff2f67d23e",
"assets/assets/category_images/fresh-fruits.png": "59122e99cddf5ca1e5f1b5611e3f9dc0",
"assets/assets/category_images/pharmacy.png": "103885e5f5a144bd0e5ae86d0a465bdc",
"assets/assets/category_images/womens-care.png": "4fab6e8240d29613bbe2fd474f7084a7",
"assets/assets/category_images/chocolates.png": "fe5abc78a3c1e75c7c6286189b26fc20",
"assets/assets/category_images/baby-skincare.png": "7c8f49bfda19d72f26ac994e8b7f8858",
"assets/assets/category_images/female-deo.png": "af6f956796863243e1abdca81374fa69",
"assets/assets/category_images/serum-oil-toners.png": "2ddc4c1ddd8d6508359a4e1a75357939",
"assets/assets/category_images/face-wash-scrub.png": "8e7795a0718f3c13d5dc0ea260a58749",
"assets/assets/category_images/mens-care.png": "14a917b49b1035b9d9be553a7ddf03fd",
"assets/assets/category_images/breads.png": "fb0b6641056b287a381d94c4c39b3315",
"assets/assets/category_images/batteries.png": "83de2f8ec527f5b0d93b78c76cedba3b",
"assets/assets/category_images/pasta-macaroni.png": "dd96d6184e344af84da64a2d5cc7587b",
"assets/assets/category_images/baking.png": "a284f0f1ae7a52420a5f1543fc46808b",
"assets/assets/category_images/air-fresheners.png": "7db2fbc040c228e4da39e4a73db3e7eb",
"assets/assets/category_images/fashions.png": "f2825ca984fa8fe20adb1196b12524e2",
"assets/assets/category_images/kitchen-appliances.png": "2387d811a5e022ee6323f89016666005",
"assets/assets/category_images/special-ingredients.png": "788839f1c2ad588778fd6562b7d2516b",
"assets/assets/category_images/food-supplements.png": "0a0a1ef69fa9bbe0143eef272c8c6d77",
"assets/assets/category_images/baby-food.png": "6d3a37867efbc0322d262dd2a984c8ce",
"assets/assets/category_images/breakfast.png": "9b9e03724fbed39ad24148abaa92774c",
"assets/assets/category_images/jams-jellies.png": "8843e65bc9af4475f83338fbf1ed7875",
"assets/assets/category_images/chips-pretzels.png": "7938caacd9428e920084f02557335224",
"assets/assets/category_images/hair-color.png": "11a3b2ab3c6ee37ce579279f70d6b67b",
"assets/assets/category_images/baby-accessories.png": "8328fe47e00d85d94844dc0f919183f0",
"assets/assets/category_images/mens-shampoos-conditioners.png": "9ab9a50619b087f1750d0a24569c9752",
"assets/assets/category_images/body-hair-oil.png": "1848feb6f23e1a2130b8b567470584a4",
"assets/assets/category_images/sauces-pickles.png": "4abb913962e3c1fa7123c19853f73deb",
"assets/assets/category_images/pencils.png": "4ffb8dc54eb86051e5cc247911e15c8b",
"assets/assets/category_images/local-breakfast.png": "3a619ac89fd2d28b39aa101ec49a8f81",
"assets/assets/category_images/liquid-handwash.png": "1bbbc376a0c692884d7c265f4d2df21f",
"assets/assets/category_images/soft-drinks.png": "3eca9f9d19f5d53c1532a5ab40d73e6c",
"assets/assets/category_images/noodles.png": "73fcaa7a1c75b686aabf942f46c4bb13",
"assets/assets/category_images/tea.png": "e8f482ca8b4fca7270379160fac567dc",
"assets/assets/category_images/diabetic-food.png": "f9398da63b4f0c4bd12d9c60457ef5e2",
"assets/assets/category_images/paper-supplies.png": "ef3a141fec0f1a623e5bbe31a234aa66",
"assets/assets/category_images/mouthwash-others.png": "ba19b9b6969fced2114d47079c897d7f",
"assets/assets/category_images/condensed-milk-cream.png": "b3d75f6c4c68a94bd5ae9bc053cd8ec6",
"assets/assets/category_images/popular.png": "ba35ad1f9fcbf3768214790f89beb653",
"assets/assets/category_images/juice.png": "521af5896dd2c6b6ceb093b21a8ceac6",
"assets/assets/category_images/wipes.png": "dd754c2c6dcd2adcc1fd99996e3dc5df",
"assets/assets/category_images/premium-perishables.png": "a1dbf912bd3bb687e4070ac131331865",
"assets/assets/category_images/disposables.png": "658654ad3779018baf7b023b86edb4ef",
"assets/assets/category_images/pickles.png": "5350754c28542fb7eef854c6e40eeb8b",
"assets/assets/category_images/face-wash-mask.png": "8df363e44b7207d8987ac8ff4cdf1834",
"assets/assets/category_images/cutting.png": "e9723cd7e893b8ae4cf782ce1f6949c7",
"assets/assets/category_images/dog-food.png": "2c20650976fc3891591cacf93a165147",
"assets/assets/category_images/medium-5-13-kg-diapers.png": "fbf746daf56046566fafe4603a861c3f",
"assets/assets/images/meats.png": "30ba5295a5e1626d52c07ba1727d9528",
"assets/assets/images/apples.jpg": "fac1ecd8068f59770d182e35db9be1e9",
"assets/assets/images/fruits.png": "9251565e250a883ba80e2d41a3044cdb",
"assets/assets/images/success_2.gif": "4ede98a7e6656be3871ee84d08f3c6a2",
"assets/assets/images/bkash.png": "346e13d8302b7e91dc7810ec7772f746",
"assets/assets/images/tomatoes.jpg": "e50493e56d52461ef99554bd03264110",
"assets/assets/images/nagad.png": "96951aa9b13b53c72346959612d42c56",
"assets/assets/images/stationery.png": "e75c8b5561980462a98567ebf6dd715e",
"assets/assets/images/success.gif": "7e841f6985de5a84815012d57e69711f",
"assets/assets/images/bananas.jpg": "aa47693e4aa73693c56274db595ac892",
"assets/assets/images/dairy.png": "4e23536e78b0ea12cee81ac842204ee6",
"assets/assets/images/success.json": "1f0d15e6fd9e07ca09fb051d22c6ae8d",
"assets/assets/images/shampoo.jpeg.webp": "43c42d2014cf2ac9212efd3d6e82abf1",
"assets/assets/images/banner1.jpg": "2b9d7a16c46f8aa04a85e8ef28c105de",
"assets/assets/images/bakery.png": "1b7102cde5b7e0fe783c9b9e8721e54e",
"assets/assets/images/visa_master_card.png": "5e87c3b7f894c19c655aaa14685681c2",
"assets/assets/images/visa.png": "b0fe851e76ca0c0584af24d3028c5e8e",
"assets/assets/images/cod.png": "313450fe19555a29dd508ad91fc0652a",
"assets/assets/images/order_out.png": "db9f99f9e07beb18723a72d05a44662b",
"assets/assets/images/fish_seafoods.png": "f1393d32d264f9ea2898ee20a8c9388a",
"assets/assets/images/spices.png": "9a8d992200fd1042c4f6efd15d9d486f",
"assets/assets/images/personal_care.png": "1bfd9067fe9848eb6172ddbb73c68075",
"assets/assets/images/oranges.jpg": "ecfef4d81cef7d0ae6a1cc3093b40ffd",
"assets/assets/images/Beverages.png": "a2b555b07946f730ae57045812ee3fb5",
"assets/assets/images/dry_foods.png": "973f4b3048985bbd23314491490b82bc",
"assets/assets/images/order_delivered.png": "b328ee566d4f8c698aa04d3cdebd1d10",
"assets/assets/images/Snacks.png": "fe0e207e1b65d050974eddc366c5c423",
"assets/assets/images/oils.png": "dc21961e3beadb458f2c7add3e57f456",
"assets/assets/images/household.png": "1d4e16a8171f7d02cc34c80a2db5b72c",
"assets/assets/images/order_packed.png": "0c4536091ec5a2e597bb8c6d2dec3d8e",
"assets/assets/images/mastercard.png": "7bfc7acd5ee9a790d865e5c6be43225a",
"assets/assets/images/no_items_cart.png": "25978adc61f5485400110147a7994072",
"assets/assets/images/baby_products.png": "9841ea1128b1b5d1d9b9408507fb4db5",
"assets/assets/images/vegetables.png": "76836349882125fa48df79e33fc2605d",
"assets/assets/images/grains.png": "8e17ffacc14e068a9c95a2218786f163",
"assets/assets/images/noodles.jpg": "46bacf05fb5a9f23feff917d92798f12",
"assets/assets/images/tracking.gif": "8e05937507d9814491d1946e5a38f20e",
"assets/assets/images/order_placed.png": "466f37d4c040b4e6c6d02a3b7d703c5b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
