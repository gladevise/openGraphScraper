const ogs = require('../../index');

describe('static', function () {
  it('airbnb', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/airbnb' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql('Entire home/apt for $220. A cute boutique studio located on arguably the best street in Chelsea. A block from the Highline, endless Galleries and Restaurants, the wonderful ...');
        expect(result.ogSiteName).to.be.eql('Airbnb');
        expect(result.ogTitle).to.be.eql('Bright, Chelsea Studio - Apartments for Rent in New York');
        expect(result.ogType).to.be.eql('airbedandbreakfast:listing');
        expect(result.ogUrl).to.be.eql('https://www.airbnb.com/rooms/2250401');
        expect(result.ogDescription).to.be.eql('Apartment in New York, United States. A cute boutique studio located on arguably the best street in Chelsea. A block from the Highline, endless Galleries and Restaurants, the wonderful Chelsea Market and the lively Meatpacking District.  1 Ave from the A-C-E subway and just blocks fro...');
        expect(result.ogLocale).to.be.eql('en_US');
        expect(result.twitterCard).to.be.eql('photo');
        expect(result.twitterTitle).to.be.eql('Bright, Chelsea Studio - Apartments for Rent in New York');
        expect(result.twitterSite).to.be.eql('@airbnb');
        expect(result.twitterAppNameiPhone).to.be.eql('Airbnb');
        expect(result.twitterAppNameiPad).to.be.eql('Airbnb');
        expect(result.twitterAppNameGooglePlay).to.be.eql('Airbnb');
        expect(result.twitterAppIdiPhone).to.be.eql('401626263');
        expect(result.twitterAppIdiPad).to.be.eql('401626263');
        expect(result.twitterAppIdGooglePlay).to.be.eql('com.airbnb.android');
        expect(result.twitterAppUrliPhone).to.be.eql('airbnb://rooms/2250401');
        expect(result.twitterAppUrliPad).to.be.eql('airbnb://rooms/2250401');
        expect(result.twitterAppUrlGooglePlay).to.be.eql('airbnb://rooms/2250401');
        expect(result.ogImage).to.be.eql({
          url: 'https://a1.muscache.com/im/pictures/43670185/606e6e19_original.jpg?aki_policy=x_large',
          width: null,
          height: null,
          type: null,
        });
        expect(result.twitterImage).to.be.eql({
          url: 'https://a1.muscache.com/im/pictures/43670185/606e6e19_original.jpg?aki_policy=x_large',
          width: null,
          height: null,
          alt: null,
        });
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/airbnb');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogDescription',
          'ogImage',
          'ogLocale',
          'ogSiteName',
          'ogTitle',
          'ogType',
          'ogUrl',
          'requestUrl',
          'success',
          'twitterAppIdGooglePlay',
          'twitterAppIdiPad',
          'twitterAppIdiPhone',
          'twitterAppNameGooglePlay',
          'twitterAppNameiPad',
          'twitterAppNameiPhone',
          'twitterAppUrlGooglePlay',
          'twitterAppUrliPad',
          'twitterAppUrliPhone',
          'twitterCard',
          'twitterImage',
          'twitterSite',
          'twitterTitle',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('arstechnica', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/arstechnica' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql('Unbeatable software and support with a great camera, wrapped in a familiar exterior.');
        expect(result.twitterCard).to.be.eql('summary_large_image');
        expect(result.twitterTitle).to.be.eql('Google Pixel review: The best Android phone, even if it is a little pricey');
        expect(result.twitterDescription).to.be.eql('Unbeatable software and support with a great camera, wrapped in a familiar exterior.');
        expect(result.twitterSite).to.be.eql('@arstechnica');
        expect(result.ogSiteName).to.be.eql('Ars Technica');
        expect(result.twitterCreator).to.be.eql('@RonAmadeo');
        expect(result.ogUrl).to.be.eql('http://arstechnica.com/gadgets/2016/10/google-pixel-review-bland-pricey-but-still-best-android-phone/');
        expect(result.ogTitle).to.be.eql('Google Pixel review: The best Android phone, even if it is a little pricey');
        expect(result.ogDescription).to.be.eql('Unbeatable software and support with a great camera, wrapped in a familiar exterior.');
        expect(result.ogType).to.be.eql('article');
        expect(result.ogImage).to.be.eql({
          url: 'https://cdn.arstechnica.net/wp-content/uploads/2016/10/pixel-feature-640x320.jpg',
          width: null,
          height: null,
          type: null,
        });
        expect(result.twitterImage).to.be.eql({
          url: 'https://cdn.arstechnica.net/wp-content/uploads/2016/10/pixel-feature-640x320.jpg',
          width: '640',
          height: '320',
          alt: null,
        });
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/arstechnica');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogDescription',
          'ogImage',
          'ogSiteName',
          'ogTitle',
          'ogType',
          'ogUrl',
          'requestUrl',
          'success',
          'twitterCard',
          'twitterCreator',
          'twitterDescription',
          'twitterImage',
          'twitterSite',
          'twitterTitle',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('battlefield', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/battlefield' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql('Buy Battlefield 1 on Xbox One, PlayStation 4, or Origin for PC. ');
        expect(result.ogUrl).to.be.eql('https://www.battlefield.com/buy/battlefield-1');
        expect(result.ogSiteName).to.be.eql('Battlefield');
        expect(result.ogType).to.be.eql('article');
        expect(result.ogTitle).to.be.eql('Buy Battlefield 1 – Battlefield Official Site');
        expect(result.twitterTitle).to.be.eql('Buy Battlefield 1 – Battlefield Official Site');
        expect(result.twitterCard).to.be.eql('summary_large_image');
        expect(result.ogDescription).to.be.eql('Buy Battlefield 1 on Xbox One, PlayStation 4, or Origin for PC. ');
        expect(result.twitterDescription).to.be.eql('Buy Battlefield 1 on Xbox One, PlayStation 4, or Origin for PC. ');
        expect(result.twitterSite).to.be.eql('@battlefield');
        expect(result.twitterCreator).to.be.eql('@battlefield');
        expect(result.ogImage).to.be.eql({
          url: 'http://media-www-battlefieldwebcore.spark.ea.com/content/battlefield-portal/en_US/_global_/_jcr_content/ccm/componentwrapper_1/components/opengraph/ogImage.img.jpg',
          width: null,
          height: null,
          type: null,
        });
        expect(result.twitterImage).to.be.eql({
          url: 'http://media-www-battlefieldwebcore.spark.ea.com/content/battlefield-portal/en_US/_global_/_jcr_content/ccm/componentwrapper_1/components/opengraph/ogImage.img.jpg',
          width: null,
          height: null,
          alt: null,
        });
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/battlefield');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogDescription',
          'ogImage',
          'ogSiteName',
          'ogTitle',
          'ogType',
          'ogUrl',
          'requestUrl',
          'success',
          'twitterCard',
          'twitterCreator',
          'twitterDescription',
          'twitterImage',
          'twitterSite',
          'twitterTitle',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('bestbuy', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/bestbuy' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql('4.7-inch (diagonal) Retina HD display with 1334-by-750 resolution; 3D Touch; A9 chip with M9 motion coprocessor');
        expect(result.ogTitle).to.be.eql('Apple - iPhone 6s 64GB - Space Gray (Verizon)');
        expect(result.ogType).to.be.eql('product');
        expect(result.ogUrl).to.be.eql('/site/apple-iphone-6s-64gb-space-gray-verizon/4447801.p?skuId=4447801');
        expect(result.ogSiteName).to.be.eql('Best Buy');
        expect(result.ogDescription).to.be.eql('4.7-inch (diagonal) Retina HD display with 1334-by-750 resolution; 3D Touch; A9 chip with M9 motion coprocessor');
        expect(result.twitterCard).to.be.eql('summary_large_image');
        expect(result.twitterSite).to.be.eql('@BestBuy');
        expect(result.twitterCreator).to.be.eql('@BestBuy');
        expect(result.twitterTitle).to.be.eql('Apple - iPhone 6s 64GB - Space Gray (Verizon)');
        expect(result.twitterDescription).to.be.eql('4.7-inch (diagonal) Retina HD display with 1334-by-750 resolution; 3D Touch; A9 chip with M9 motion coprocessor');
        expect(result.ogImage).to.be.eql({
          url: 'http://pisces.bbystatic.com//image2/BestBuy_US/images/products/4447/4447801_sa.jpg;maxHeight=210;maxWidth=210',
          width: null,
          height: null,
          type: null,
        });
        expect(result.twitterImage).to.be.eql({
          url: 'http://pisces.bbystatic.com//image2/BestBuy_US/images/products/4447/4447801_sa.jpg;maxHeight=210;maxWidth=210',
          width: null,
          height: null,
          alt: null,
        });
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/bestbuy');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogDescription',
          'ogImage',
          'ogSiteName',
          'ogTitle',
          'ogType',
          'ogUrl',
          'requestUrl',
          'success',
          'twitterCard',
          'twitterCreator',
          'twitterDescription',
          'twitterImage',
          'twitterSite',
          'twitterTitle',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('bjango', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/bjango.html' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql(undefined); // TODO: look into this
        expect(result.ogTitle).to.be.eql('iStat Menus');
        expect(result.ogImage).to.be.eql([
          {
            url: '/images/mac/istatmenus5/header-text.svg',
            width: null,
            height: null,
            type: 'svg',
          },
          {
            url: '/images/mac/istatmenus5/header-text-simple.svg',
            width: null,
            height: null,
            type: 'svg',
          },
          {
            url: '/images/mac/istatmenus5/heading-istatmenus.svg',
            width: null,
            height: null,
            type: 'svg',
          },
          {
            url: '/images/mac/istatmenus5/header-network.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: '/images/mac/istatmenus5/header-cpu.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: '/images/mac/istatmenus5/image-newdesign.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: '/images/mac/istatmenus5/image-perapp.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: '/images/mac/istatmenus5/image-lightmap.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
        ]);
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/bjango.html');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogImage',
          'ogTitle',
          'requestUrl',
          'success',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('cloudinary', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/cloudinary' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql('Cloudinary');
        expect(result.ogTitle).to.be.eql('Cloudinary - Pricing');
        expect(result.ogDescription).to.be.eql('Cloudinary');
        expect(result.ogImage).to.be.eql([
          {
            url: 'http://res-1.cloudinary.com/cloudinary/image/asset/dpr_2.0/logo-e0df892053afd966cc0bfe047ba93ca4.png',
            width: '172',
            height: '38',
            type: 'png',
          },
          {
            url: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            width: null,
            height: null,
            type: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          },
          {
            url: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            width: null,
            height: null,
            type: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          },
          {
            url: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            width: null,
            height: null,
            type: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          },
          {
            url: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            width: null,
            height: null,
            type: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          },
          {
            url: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            width: null,
            height: null,
            type: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          },
          {
            url: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            width: null,
            height: null,
            type: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          },
          {
            url: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            width: null,
            height: null,
            type: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          },
          {
            url: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            width: '22',
            height: '22',
            type: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          },
          {
            url: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            width: '22',
            height: '22',
            type: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          },
          {
            url: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            width: '22',
            height: '22',
            type: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          },
          {
            url: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            width: '22',
            height: '22',
            type: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          },
          {
            url: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            width: '22',
            height: '22',
            type: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          },
          {
            url: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            width: '22',
            height: '22',
            type: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          },
          {
            url: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
            width: '22',
            height: '22',
            type: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
          },
          {
            url: 'http://res-3.cloudinary.com/cloudinary/image/asset/dpr_2.0/logo-white-f1a9f401b60dd17a7629e663523b150e.png',
            width: '172',
            height: '38',
            type: 'png',
          },
        ]);
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/cloudinary');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogDescription',
          'ogImage',
          'ogTitle',
          'requestUrl',
          'success',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('discourse', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/discourse' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql('Every geek goes through a phase where they discover emulation. It&#39;s practically a rite of passage. \n'
          + '\n'
          + 'This is a companion discussion topic for the original entry at https://blog.codinghorror.com/the-raspberry-pi-has-revol&hellip;'); // TODO: look into this
        expect(result.author).to.be.eql(undefined); // TODO: look into this
        expect(result.ogSiteName).to.be.eql('Coding Horror Discussion');
        expect(result.twitterCard).to.be.eql('summary');
        expect(result.ogUrl).to.be.eql('https://discourse.codinghorror.com/t/the-raspberry-pi-has-revolutionized-emulation/4462/29');
        expect(result.ogTitle).to.be.eql('The Raspberry Pi Has Revolutionized Emulation');
        expect(result.twitterTitle).to.be.eql('The Raspberry Pi Has Revolutionized Emulation');
        expect(result.ogDescription).to.be.eql('Check out Pico-8 for new "fantasy console" goodness.  Works great with Raspberry Pi Zero, 2, 3, etc.');
        expect(result.twitterDescription).to.be.eql('Check out Pico-8 for new "fantasy console" goodness.  Works great with Raspberry Pi Zero, 2, 3, etc.');
        expect(result.ogImage).to.be.eql({
          url: 'https://discourse-cdn.codinghorror.com/user_avatar/discourse.codinghorror.com/adam_sommer/100/74278_1.png',
          width: null,
          height: null,
          type: null,
        });
        expect(result.twitterImage).to.be.eql({
          url: 'https://discourse-cdn.codinghorror.com/user_avatar/discourse.codinghorror.com/adam_sommer/100/74278_1.png',
          width: null,
          height: null,
          alt: null,
        });
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/discourse');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'author',
          'description',
          'ogDescription',
          'ogImage',
          'ogSiteName',
          'ogTitle',
          'ogUrl',
          'requestUrl',
          'success',
          'twitterCard',
          'twitterDescription',
          'twitterImage',
          'twitterTitle',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('docs', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/docs' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.ogTitle).to.be.eql('Bay Area Guide to Mission Series/Banners');
        expect(result.ogType).to.be.eql('article');
        expect(result.ogSiteName).to.be.eql('Google Docs');
        expect(result.ogUrl).to.be.eql('https://docs.google.com/document/d/1GnsFxQZWERvB5A2cYnmpmNzgH_zAtUsUMQ-th1em2jQ/edit?usp=sharing&usp=embed_facebook');
        expect(result.ogDescription).to.be.eql('Guide to Ingress Mission Series/Banners in the Greater SF Bay Area contributors: @katranrocks (Kate Magary), @strandit (Bryant Durrell), @hiryu (Brett Allen), @011101000101001 (Florian Sauer), @FlyingRobot (Timothy Appel), @freddd123 (Austin), @jookwarrior (Andy), @VeIocipractor (TZ), @phthoruth ...');
        expect(result.ogImage).to.be.eql({
          url: 'https://lh4.googleusercontent.com/mRveTQA06RV1oCWNnA6CiDyPwMd5Uz0pTdTIzLR3NdTENlixSZCN17Ry2zUiYXHX6ZanMA=w1200-h630-p',
          width: '1200',
          height: '630',
          type: null,
        });
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'ogDescription',
          'ogImage',
          'ogSiteName',
          'ogTitle',
          'ogType',
          'ogUrl',
          'requestUrl',
          'success',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('ebay', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/ebay' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.ogDescription).to.be.eql('Add style without losing comfort with this 3-person outdoor sofa. Made out of weather resistant wicker on an aluminum frame, it will endure in any of your outdoor spaces. The synthetic resin wicker provides a durable exterior, while still preserving its classic yet modern appearance. | eBay!');
        expect(result.description).to.be.eql('Add style without losing comfort with this 3-person outdoor sofa. Made out of weather resistant wicker on an aluminum frame, it will endure in any of your outdoor spaces. The synthetic resin wicker provides a durable exterior, while still preserving its classic yet modern appearance. | eBay!');
        expect(result.twitterCard).to.be.eql('summary');
        expect(result.ogType).to.be.eql('ebay-objects:item');
        expect(result.twitterDescription).to.be.eql('Add style without losing comfort with this 3-person outdoor sofa. Made out of weather resistant wicker on an aluminum frame, it will endure in any of your outdoor spaces. The synthetic resin wicker provides a durable exterior, while still preserving its classic yet modern appearance. | eBay!');
        expect(result.twitterSite).to.be.eql('@eBay');
        expect(result.ogSiteName).to.be.eql('eBay');
        expect(result.ogUrl).to.be.eql('http://www.ebay.com/itm/Outdoor-Wicker-Patio-Furniture-Sofa-3-Seater-Luxury-Comfort-Brown-Wicker-Couch-/381228738769');
        expect(result.twitterTitle).to.be.eql('Outdoor Wicker Patio Furniture Sofa 3 Seater Luxury Comfort Brown Wicker Couch');
        expect(result.ogTitle).to.be.eql('Outdoor Wicker Patio Furniture Sofa 3 Seater Luxury Comfort Brown Wicker Couch  | eBay');
        expect(result.ogImage).to.be.eql({
          url: 'http://i.ebayimg.com/images/i/381228738769-0-1/s-l1000.jpg',
          width: null,
          height: null,
          type: null,
        });
        expect(result.twitterImage).to.be.eql({
          url: 'http://i.ebayimg.com/images/i/381228738769-0-1/s-l1000.jpg',
          width: null,
          height: null,
          alt: null,
        });
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/ebay');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogDescription',
          'ogImage',
          'ogSiteName',
          'ogTitle',
          'ogType',
          'ogUrl',
          'requestUrl',
          'success',
          'twitterCard',
          'twitterDescription',
          'twitterImage',
          'twitterSite',
          'twitterTitle',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('etsy', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/etsy' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.ogSiteName).to.be.eql('Etsy');
        expect(result.ogLocale).to.be.eql('en_US');
        expect(result.description).to.be.eql('Die cut sticker is cut in the shape of the graphic with no background and all one color.  Available in several colors and a variety of sizes. Please rely on dimensions listed or measure area where you will be applying the decal. Select options from drop down menus. Agents of Shield Hydra logo also available: https://www.etsy.com/your/shops/InfernoDecals/tools/listings/230718253  Sizes listed are in inches. (1 inch = 2.54 centimeters)  Made from quality outdoor vinyl that is water proof, UV resistant and rated to last 6 years outdoors and longer indoors. Self adhesive vinyl is removable and does not damage hard surfaces or vehicle paint. Not reuseable or repositionable. Can be applied to any clean smooth surface such as vehicle body, window, laptop, water bottle, mirror, helmet, guitar etc.  Ships in cardboard mailer or with cardboard inside envelope to protect from damage during shipping. Easy to install, comes with full instructions included. How to install vinyl decals: 1. Clean the area thoroughly with rubbing alcohol or soap and water. Do not use Windex or similar products, it will leave a residue behind that will prevent the sticker from adhering well. 2. Prepare the sticker for application by firmly rubbing a squeegee or credit card across the clear transfer tape. This removes any air bubbles that may have formed and makes the sticker cling to the transfer tape. 3. Peel the white paper backing off the sticker. If the sticker clings to the backing, slowly replace the paper backing and repeat Step 2. 4. Slowly lower the sticker onto the surface and rub it in place firmly with a squeegee or credit card. Wait 10 minutes or more. For best results, wait 24 hours before moving to the next step. 5. Slowly peel the clear transfer tape off at an angle. Be careful not to pull the sticker off the surface. If sticker pulls away from the surface repeat Step 4.  *Use a pin to poke any air bubbles in the center and push the air out through the hole. *For best results do not apply a sticker in extreme hot or cold temperatures.');
        expect(result.ogTitle).to.be.eql('Agents of Shield decal sticker for car, truck, laptop in ANY COLOR die cut vinyl');
        expect(result.ogType).to.be.eql('etsymarketplace:item');
        expect(result.ogUrl).to.be.eql('https://www.etsy.com/listing/230389421/agents-of-shield-decal-sticker-for-car?utm_source=OpenGraph&utm_medium=PageTools&utm_campaign=Share');
        expect(result.ogDescription).to.be.eql('Die cut sticker is cut in the shape of the graphic with no background and all one color.  Available in several colors and a variety of sizes. Please rely on dimensions listed or measure area where you will be applying the decal. Select options from drop down menus. Agents of Shield Hydra logo also available: https://www.etsy.com/your/shops/InfernoDecals/tools/listings/230718253  Sizes listed are in inches. (1 inch = 2.54 centimeters)  Made from quality outdoor vinyl that is water proof, UV resistant and rated to last 6 years outdoors and longer indoors. Self adhesive vinyl is removable and does not damage hard surfaces or vehicle paint. Not reuseable or repositionable. Can be applied to any clean smooth surface such as vehicle body, window, laptop, water bottle, mirror, helmet, guitar etc.  Ships in cardboard mailer or with cardboard inside envelope to protect from damage during shipping. Easy to install, comes with full instructions included. How to install vinyl decals: 1. Clean the area thoroughly with rubbing alcohol or soap and water. Do not use Windex or similar products, it will leave a residue behind that will prevent the sticker from adhering well. 2. Prepare the sticker for application by firmly rubbing a squeegee or credit card across the clear transfer tape. This removes any air bubbles that may have formed and makes the sticker cling to the transfer tape. 3. Peel the white paper backing off the sticker. If the sticker clings to the backing, slowly replace the paper backing and repeat Step 2. 4. Slowly lower the sticker onto the surface and rub it in place firmly with a squeegee or credit card. Wait 10 minutes or more. For best results, wait 24 hours before moving to the next step. 5. Slowly peel the clear transfer tape off at an angle. Be careful not to pull the sticker off the surface. If sticker pulls away from the surface repeat Step 4.  *Use a pin to poke any air bubbles in the center and push the air out through the hole. *For best results do not apply a sticker in extreme hot or cold temperatures.');
        expect(result.twitterCard).to.be.eql('summary_large_image');
        expect(result.twitterTitle).to.be.eql('Agents of Shield decal sticker for car, truck, laptop in ANY COLOR die cut vinyl');
        expect(result.twitterDescription).to.be.eql('Die cut sticker is cut in the shape of the graphic with no background and all one color.  Available in several colors and a variety of sizes. Please rely on dimensions listed or measure area where you will be applying the decal. Select options from drop down menus. Agents of Shield Hydra logo also available: https://www.etsy.com/your/shops/InfernoDecals/tools/listings/230718253  Sizes listed are in inches. (1 inch = 2.54 centimeters)  Made from quality outdoor vinyl that is water proof, UV resistant and rated to last 6 years outdoors and longer indoors. Self adhesive vinyl is removable and does not damage hard surfaces or vehicle paint. Not reuseable or repositionable. Can be applied to any clean smooth surface such as vehicle body, window, laptop, water bottle, mirror, helmet, guitar etc.  Ships in cardboard mailer or with cardboard inside envelope to protect from damage during shipping. Easy to install, comes with full instructions included. How to install vinyl decals: 1. Clean the area thoroughly with rubbing alcohol or soap and water. Do not use Windex or similar products, it will leave a residue behind that will prevent the sticker from adhering well. 2. Prepare the sticker for application by firmly rubbing a squeegee or credit card across the clear transfer tape. This removes any air bubbles that may have formed and makes the sticker cling to the transfer tape. 3. Peel the white paper backing off the sticker. If the sticker clings to the backing, slowly replace the paper backing and repeat Step 2. 4. Slowly lower the sticker onto the surface and rub it in place firmly with a squeegee or credit card. Wait 10 minutes or more. For best results, wait 24 hours before moving to the next step. 5. Slowly peel the clear transfer tape off at an angle. Be careful not to pull the sticker off the surface. If sticker pulls away from the surface repeat Step 4.  *Use a pin to poke any air bubbles in the center and push the air out through the hole. *For best results do not apply a sticker in extreme hot or cold temperatures.');
        expect(result.twitterAppNameiPhone).to.be.eql('Etsy');
        expect(result.twitterAppUrliPhone).to.be.eql('etsy://listing/230389421?ref=TwitterProductCard');
        expect(result.twitterAppIdiPhone).to.be.eql('477128284');
        expect(result.twitterAppNameiPad).to.be.eql('Etsy');
        expect(result.twitterAppUrliPad).to.be.eql('etsy://listing/230389421?ref=TwitterProductCard');
        expect(result.twitterAppIdiPad).to.be.eql('477128284');
        expect(result.twitterAppNameGooglePlay).to.be.eql('Etsy');
        expect(result.twitterAppUrlGooglePlay).to.be.eql('etsy://listing/230389421?ref=TwitterProductCard');
        expect(result.twitterAppIdGooglePlay).to.be.eql('com.etsy.android');
        expect(result.twitterSite).to.be.eql('@Etsy');
        expect(result.ogImage).to.be.eql({
          url: 'https://img0.etsystatic.com/058/0/10499963/il_570xN.759424778_ojd8.jpg',
          width: null,
          height: null,
          type: null,
        });
        expect(result.twitterImage).to.be.eql({
          url: 'https://img0.etsystatic.com/058/0/10499963/il_570xN.759424778_ojd8.jpg',
          width: null,
          height: null,
          alt: null,
        });
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/etsy');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogDescription',
          'ogImage',
          'ogLocale',
          'ogSiteName',
          'ogTitle',
          'ogType',
          'ogUrl',
          'requestUrl',
          'success',
          'twitterAppIdGooglePlay',
          'twitterAppIdiPad',
          'twitterAppIdiPhone',
          'twitterAppNameGooglePlay',
          'twitterAppNameiPad',
          'twitterAppNameiPhone',
          'twitterAppUrlGooglePlay',
          'twitterAppUrliPad',
          'twitterAppUrliPhone',
          'twitterCard',
          'twitterDescription',
          'twitterImage',
          'twitterSite',
          'twitterTitle',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('facebook', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/facebook' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.ogSiteName).to.be.eql('Facebook');
        expect(result.ogUrl).to.be.eql('https://www.facebook.com/');
        expect(result.ogLocale).to.be.eql('en_US');
        expect(result.description).to.be.eql('Create an account or log into Facebook. Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.');
        expect(result.robots).to.be.eql('noodp,noydir');
        expect(result.ogImage).to.be.eql({
          url: 'https://www.facebook.com/images/fb_icon_325x325.png',
          width: null,
          height: null,
          type: null,
        });
        expect(result.ogTitle).to.be.eql('Facebook - Log In or Sign Up');
        expect(result.ogDescription).to.be.eql('Create an account or log into Facebook. Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.');
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/facebook');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogDescription',
          'ogImage',
          'ogLocale',
          'ogSiteName',
          'ogTitle',
          'ogUrl',
          'requestUrl',
          'robots',
          'success',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('foursquare', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/foursquare' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql('Read 111 tips and reviews from 2517 visitors about whiskey, scotch and alley. "Best collection of cocktails in Sydney. Very crowded and extremely..."');
        expect(result.ogTitle).to.be.eql('The Baxter Inn');
        expect(result.ogDescription).to.be.eql('Whisky Bar in Sydney, NSW');
        expect(result.ogUrl).to.be.eql('https://foursquare.com/v/the-baxter-inn/4ed4896c775b45f6ed7b0182');
        expect(result.ogType).to.be.eql('playfoursquare:venue');
        expect(result.ogSiteName).to.be.eql('Foursquare');
        expect(result.twitterSite).to.be.eql('@foursquare');
        expect(result.twitterCreator).to.be.eql('@foursquare');
        expect(result.twitterCard).to.be.eql('summary_large_image');
        expect(result.twitterDescription).to.be.eql('Whisky Bar in Sydney, NSW');
        expect(result.twitterTitle).to.be.eql('The Baxter Inn');
        expect(result.twitterAppNameiPhone).to.be.eql('Foursquare');
        expect(result.twitterAppIdiPhone).to.be.eql('306934924');
        expect(result.twitterAppUrliPhone).to.be.eql('foursquare://venues/4ed4896c775b45f6ed7b0182');
        expect(result.twitterAppNameiPad).to.be.eql('Foursquare');
        expect(result.twitterAppIdiPad).to.be.eql('306934924');
        expect(result.twitterAppUrliPad).to.be.eql('foursquare://venues/4ed4896c775b45f6ed7b0182');
        expect(result.twitterAppNameGooglePlay).to.be.eql('Foursquare');
        expect(result.twitterAppIdGooglePlay).to.be.eql('com.joelapenna.foursquared');
        expect(result.twitterAppUrlGooglePlay).to.be.eql('foursquare://venues/4ed4896c775b45f6ed7b0182');
        expect(result.ogImage).to.be.eql({
          url: 'https://irs2.4sqi.net/img/general/600x600/13692844_gLU3tu6y4S6bcPDyiS1y9GU9ZkghXDaMJE9xFnPuVmo.jpg',
          width: null,
          height: null,
          type: null,
        });
        expect(result.twitterImage).to.be.eql({
          url: 'https://irs2.4sqi.net/img/general/600x600/13692844_gLU3tu6y4S6bcPDyiS1y9GU9ZkghXDaMJE9xFnPuVmo.jpg',
          width: null,
          height: null,
          alt: null,
        });
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/foursquare');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogDescription',
          'ogImage',
          'ogSiteName',
          'ogTitle',
          'ogType',
          'ogUrl',
          'requestUrl',
          'success',
          'twitterAppIdGooglePlay',
          'twitterAppIdiPad',
          'twitterAppIdiPhone',
          'twitterAppNameGooglePlay',
          'twitterAppNameiPad',
          'twitterAppNameiPhone',
          'twitterAppUrlGooglePlay',
          'twitterAppUrliPad',
          'twitterAppUrliPhone',
          'twitterCard',
          'twitterCreator',
          'twitterDescription',
          'twitterImage',
          'twitterSite',
          'twitterTitle',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('insta', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/insta' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.robots).to.be.eql('noimageindex');
        expect(result.description).to.be.eql('See this Instagram photo by @minaalofficial • 105 likes');
        expect(result.ogSiteName).to.be.eql('Instagram');
        expect(result.ogTitle).to.be.eql('Instagram photo by Minaal • Jun 19, 2016 at 4:04am UTC');
        expect(result.ogDescription).to.be.eql('See this Instagram photo by @minaalofficial • 105 likes');
        expect(result.ogUrl).to.be.eql('https://www.instagram.com/p/BG0m4IDGaqk/');
        expect(result.ogType).to.be.eql('instapp:photo');
        expect(result.ogImage).to.be.eql({
          url: 'https://scontent-lax3-1.cdninstagram.com/t51.2885-15/e35/13355676_1724260121146276_372407195_n.jpg?ig_cache_key=MTI3NTgxNTU3NzE1Mjc2MDQ4NA%3D%3D.2',
          width: null,
          height: null,
          type: null,
        });
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/insta');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogDescription',
          'ogImage',
          'ogSiteName',
          'ogTitle',
          'ogType',
          'ogUrl',
          'requestUrl',
          'robots',
          'success',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('itunes', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/itunes' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.an('string').and.to.not.be.empty;
        expect(result.ogTitle).to.be.eql('Pokémon GO on the App Store');
        expect(result.ogDescription).to.be.an('string').and.to.not.be.empty;
        expect(result.ogSiteName).to.be.eql('App Store');
        expect(result.twitterTitle).to.be.eql('Pokémon GO on the App Store');
        expect(result.twitterDescription).to.be.an('string').and.to.not.be.empty;
        expect(result.twitterSite).to.be.eql('@AppStore');
        expect(result.twitterCard).to.be.eql('summary_large_image');
        expect(result.ogImage).to.be.eql({
          url: 'http://is5.mzstatic.com/image/thumb/Purple71/v4/97/0a/71/970a71f1-9c94-cc61-c960-304191a8dc42/source/1200x630bf.jpg',
          width: '1200',
          height: '630',
          type: 'image/jpg',
        });
        expect(result.twitterImage).to.be.eql({
          url: 'http://is5.mzstatic.com/image/thumb/Purple71/v4/97/0a/71/970a71f1-9c94-cc61-c960-304191a8dc42/source/1200x630bf.jpg',
          width: null,
          height: null,
          alt: null,
        });
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/itunes');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogDescription',
          'ogImage',
          'ogSiteName',
          'ogTitle',
          'requestUrl',
          'success',
          'twitterCard',
          'twitterDescription',
          'twitterImage',
          'twitterSite',
          'twitterTitle',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('kickstarter', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/kickstarter' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql('BSX Athletics is raising funds for LVL – The First Wearable Hydration Monitor on Kickstarter! \n'
        + '\n'
        + ' LVL is a wearable hydration monitor that gives you the complete picture of your health by also tracking activity, sleep, mood and HR.'); // TODO: look into this
        expect(result.ogTitle).to.be.eql('LVL – The First Wearable Hydration Monitor');
        expect(result.ogType).to.be.eql('kickstarter:project');
        expect(result.ogUrl).to.be.eql('https://www.kickstarter.com/projects/lactate-threshold/lvl-the-first-wearable-hydration-monitor');
        expect(result.ogSiteName).to.be.eql('Kickstarter');
        expect(result.ogDescription).to.be.eql('LVL is a wearable hydration monitor that gives you the complete picture of your health by also tracking activity, sleep, mood and HR.');
        expect(result.ogLocale).to.be.eql('en_US');
        expect(result.ogLocaleAlternate).to.be.eql('fr_FR');
        expect(result.twitterCard).to.be.eql('summary_large_image');
        expect(result.twitterSite).to.be.eql('@kickstarter');
        expect(result.twitterSiteId).to.be.eql('16186995');
        expect(result.twitterTitle).to.be.eql('LVL – The First Wearable Hydration Monitor');
        expect(result.twitterDescription).to.be.eql('LVL is a wearable hydration monitor that gives you the complete picture of your health by also tracking activity, sleep, mood and HR.');
        expect(result.twitterAppIdiPhone).to.be.eql('596961532');
        expect(result.twitterAppNameiPhone).to.be.eql('Kickstarter');
        expect(result.twitterAppUrliPhone).to.be.eql('ksr://www.kickstarter.com/projects/1655571865/361230638?app_banner=1&ref=category_featured');
        expect(result.ogImage).to.be.eql({
          url: 'https://ksr-ugc.imgix.net/assets/013/622/325/ba3e0c3ba83ec7a7f6621d52f78773b9_original.jpg?w=1536&h=864&fit=fill&bg=000000&v=1473713981&auto=format&q=92&s=06bc55ef9203f6b52b87f7bf978ae915',
          width: '1536',
          height: '1152',
          type: null,
        });
        expect(result.twitterImage).to.be.eql({
          url: 'https://ksr-ugc.imgix.net/assets/013/622/325/ba3e0c3ba83ec7a7f6621d52f78773b9_original.jpg?w=640&h=360&fit=fill&bg=000000&v=1473713981&auto=format&q=92&s=468b71562ed1d30cbf4aa9f9a1d7be1a',
          width: null,
          height: null,
          alt: null,
        });
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/kickstarter');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogDescription',
          'ogImage',
          'ogLocale',
          'ogLocaleAlternate',
          'ogSiteName',
          'ogTitle',
          'ogType',
          'ogUrl',
          'requestUrl',
          'success',
          'twitterAppIdiPhone',
          'twitterAppNameiPhone',
          'twitterAppUrliPhone',
          'twitterCard',
          'twitterDescription',
          'twitterImage',
          'twitterSite',
          'twitterSiteId',
          'twitterTitle',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('learnxinyminutes', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/learnxinyminutes' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql(undefined); // TODO: look into this
        expect(result.ogTitle).to.be.eql('Learn Standard ML in Y Minutes');
        expect(result.ogImage).to.be.eql([
          {
            url: 'https://i.creativecommons.org/l/by-sa/3.0/88x31.png',
            width: null,
            height: null,
            type: 'png',
          },
        ]);
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/learnxinyminutes');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogImage',
          'ogTitle',
          'requestUrl',
          'success',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('lifehacker', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/lifehacker' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql('When you get a new credit card, you typically have to go through the process of updating your automatic bill pay information. Some services, though, w...');
        expect(result.robots).to.be.eql('noarchive');
        expect(result.author).to.be.eql('Kristin Wong');
        expect(result.ogType).to.be.eql('article');
        expect(result.ogTitle).to.be.eql('Some Bill Providers Automatically Update Your Credit Card When You Get A New One');
        expect(result.ogDescription).to.be.eql('When you get a new credit card, you typically have to go through the process of updating your automatic bill pay information. Some services, though, will update automatically. So how do they know your new credit card number?...');
        expect(result.ogUrl).to.be.eql('http://www.lifehacker.com.au/2016/08/some-bill-providers-automatically-update-your-credit-card-when-you-get-a-new-one/');
        expect(result.twitterCard).to.be.eql('summary_large_image');
        expect(result.twitterSite).to.be.eql('@LifehackerAU');
        expect(result.ogImage).to.be.eql({
          url: 'https://i.kinja-img.com/gawker-media/image/upload/t_original/ittdz6udygdrrkbv8eey.jpg',
          width: null,
          height: null,
          type: null,
        });
        expect(result.twitterImage).to.be.eql({
          url: 'https://i.kinja-img.com/gawker-media/image/upload/t_original/ittdz6udygdrrkbv8eey.jpg',
          width: null,
          height: null,
          alt: null,
        });
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/lifehacker');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'author',
          'description',
          'ogDescription',
          'ogImage',
          'ogTitle',
          'ogType',
          'ogUrl',
          'requestUrl',
          'robots',
          'success',
          'twitterCard',
          'twitterImage',
          'twitterSite',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('mulesoft', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/mulesoft' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql('Contact us to see how we can help transform your company with the agility to unlock data, unleash innovation and connect with success.');
        expect(result.ogSiteName).to.be.eql('MuleSoft');
        expect(result.ogType).to.be.eql('article');
        expect(result.ogUrl).to.be.eql('https://www.mulesoft.com/contact');
        expect(result.ogTitle).to.be.eql('1-415-229-2009');
        expect(result.ogDescription).to.be.eql('Contact us to see how we can help transform your company with the agility to unlock data, unleash innovation and connect with success.');
        expect(result.ogImage).to.be.eql([
          {
            url: '/sites/default/files/3C_mulesoft_logo_updated.svg',
            width: null,
            height: null,
            type: 'svg',
          },
          {
            url: 'https://maps.googleapis.com/maps/api/staticmap?size=700x150&zoom=10&language=&maptype=roadmap&markers=color:red|77+geary+street%2C+san+francisco+ca+94108&sensor=false',
            width: null,
            height: null,
            type: 'com/maps/api/staticmap?size=700x150&zoom=10&language=&maptype=roadmap&markers=color:red|77+geary+street%2C+san+francisco+ca+94108&sensor=false',
          },
          {
            url: 'https://maps.googleapis.com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|Barbara+Strozzilaan+101%2C+1083+HN+Amsterdam%2C+Netherlands&sensor=false',
            width: null,
            height: null,
            type: 'com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|Barbara+Strozzilaan+101%2C+1083+HN+Amsterdam%2C+Netherlands&sensor=false',
          },
          {
            url: 'https://maps.googleapis.com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|3460+Preston+Ridge+Rd+Alpharetta%2C+GA+30005&sensor=false',
            width: null,
            height: null,
            type: 'com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|3460+Preston+Ridge+Rd+Alpharetta%2C+GA+30005&sensor=false',
          },
          {
            url: 'https://maps.googleapis.com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|+Av.+Corrientes+316%2C+C1043AAQ+CABA%2C+Argentina&sensor=false',
            width: null,
            height: null,
            type: '+Corrientes+316%2C+C1043AAQ+CABA%2C+Argentina&sensor=false',
          },
          {
            url: 'https://maps.googleapis.com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|222+S.+Riverside+Plaza%2C+Suite+2300%2C+Chicago%2C+IL+60606&sensor=false',
            width: null,
            height: null,
            type: '+Riverside+Plaza%2C+Suite+2300%2C+Chicago%2C+IL+60606&sensor=false',
          },
          {
            url: 'https://maps.googleapis.com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|Orangefield%2C+Westendstrasse+28%2C+Frankfurt%2C+60325+GM&sensor=false',
            width: null,
            height: null,
            type: 'com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|Orangefield%2C+Westendstrasse+28%2C+Frankfurt%2C+60325+GM&sensor=false',
          },
          {
            url: 'https://maps.googleapis.com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|Unit+11%2C+Level+18+Wheelock+House+20+Pedder+Street%2C+Central+Hong+Kong&sensor=false',
            width: null,
            height: null,
            type: 'com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|Unit+11%2C+Level+18+Wheelock+House+20+Pedder+Street%2C+Central+Hong+Kong&sensor=false',
          },
          {
            url: 'https://maps.googleapis.com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|Fitzwilliam+House%2C+10+St+Mary+Axe%2C+London+EC3A+8EQ&sensor=false',
            width: null,
            height: null,
            type: 'com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|Fitzwilliam+House%2C+10+St+Mary+Axe%2C+London+EC3A+8EQ&sensor=false',
          },
          {
            url: 'https://maps.googleapis.com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|79+Madison+Ave%2C+17th+Floor+New+York%2C+NY+10016&sensor=false',
            width: null,
            height: null,
            type: 'com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|79+Madison+Ave%2C+17th+Floor+New+York%2C+NY+10016&sensor=false',
          },
          {
            url: 'https://maps.googleapis.com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|9%2F15+Avenue+Paul+Doumer%2C+92500+Rueil-Malmaison%2C+France&sensor=false',
            width: null,
            height: null,
            type: 'com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|9%2F15+Avenue+Paul+Doumer%2C+92500+Rueil-Malmaison%2C+France&sensor=false',
          },
          {
            url: 'https://maps.googleapis.com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|Wisma+Atria%2C+%2320-06++435+Orchard+Road+238877+Singapore&sensor=false',
            width: null,
            height: null,
            type: 'com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|Wisma+Atria%2C+%2320-06++435+Orchard+Road+238877+Singapore&sensor=false',
          },
          {
            url: 'https://maps.googleapis.com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|Suite+600%2C+56+Berry+Street+North+Sydney+2060&sensor=false',
            width: null,
            height: null,
            type: 'com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|Suite+600%2C+56+Berry+Street+North+Sydney+2060&sensor=false',
          },
          {
            url: 'https://maps.googleapis.com/maps/api/staticmap?size=300x70&zoom=10&language=&maptype=roadmap&markers=color:red|8000+Towers+Crescent+Dr.%2C+13th+Floor%2C+Vienna%2C+VA%2C+22182&sensor=false',
            width: null,
            height: null,
            type: '%2C+13th+Floor%2C+Vienna%2C+VA%2C+22182&sensor=false',
          },
        ]);
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/mulesoft');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogDescription',
          'ogImage',
          'ogSiteName',
          'ogTitle',
          'ogType',
          'ogUrl',
          'requestUrl',
          'success',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('newegg', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/newegg' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql('Buy XYZprinting da Vinci 2.0 Duo FFF &#40;Fused Filament Fabrication&#41; ABS&#47;PLA Dual Nozzle 3D Printer with fast shipping and top-rated customer service.Once you know, you Newegg&#33;');
        expect(result.robots).to.be.eql('index,follow');
        expect(result.ogTitle).to.be.eql('XYZprinting da Vinci 2.0 Duo FFF (Fused Filament Fabrication) ABS/PLA Dual Nozzle 3D Printer-Newegg.com');
        expect(result.ogDescription).to.be.eql('Buy XYZprinting da Vinci 2.0 Duo FFF &#40;Fused Filament Fabrication&#41; ABS&#47;PLA Dual Nozzle 3D Printer with fast shipping and top-rated customer service.Once you know, you Newegg&#33;');
        expect(result.ogImage).to.be.eql([
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/logo_424x210.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/new_tab_business.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: '//promotions.newegg.com/marketplace/2016/16-6127_flash_tech/nav_160x360.jpg',
            width: '156px',
            height: '360px',
            type: 'jpg',
          },
          {
            url: 'http://images10.newegg.com/Marketing_Place/Seller_logo/Seller_A68V_8a313a86-01bb-4eb1-84a0-3d85263980ed.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/Marketing_Place/Seller_logo/Seller_A8N1_68bd60ed-48bc-498e-b13b-b7c053caa855.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/Marketing_Place/Seller_logo/Seller_AAWD_d4515325-3a9d-409d-9539-866d60db451d.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/Marketing_Place/Seller_logo/Seller_A16C_f9f20f69-a5d1-4a5c-b480-fc8ffa6c7621.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/Marketing_Place/Seller_logo/Seller_A1CZ_8a524ef6-6df1-4ca2-9751-158eee9a7b25.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/Marketing_Place/Seller_logo/Seller_A7YS_2fb077d7-4439-4d58-9a27-e4e7cb494e86.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/Marketing_Place/Seller_logo/Seller_A33T_2dbc6016-cd8e-4908-bbfe-b017586e99b4.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/Marketing_Place/Seller_logo/Seller_A8DP_6f0bb325-1287-43c5-8bef-3329c2cd573d.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/Marketing_Place/Seller_logo/Seller_A544_88bde28c-ef46-4244-8c93-2c8c1a5674c6.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/Marketing_Place/Seller_logo/Seller_A8UA_cd283435-0ea8-4eb6-b6bf-f304a04ea42a.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/Marketing_Place/Seller_logo/Seller_A019_021ac5cb-f270-4c09-8bf5-771fb3fd76bf.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/Marketing_Place/Seller_logo/Seller_A3G6_6a3223fb-8363-40d8-b7ba-e46ab051e980.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: '//promotions.newegg.com/marketplace/2016/16-6849/nav_160x360.jpg',
            width: '156px',
            height: '360px',
            type: 'jpg',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/whiteEgg.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/brandimage/Brand106236.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/ProductImage/28-840-014-16.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'http://images10.newegg.com/ProductImageCompressAll35/28-840-014-16.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'http://images10.newegg.com/ProductImageCompressAll35/28-840-014-15.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'http://images10.newegg.com/ProductImageCompressAll35/28-840-014-13.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'http://images10.newegg.com/ProductImageCompressAll35/28-840-014-14.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/loading16.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/ProductImageCompressAll/28-840-014-16.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'http://images10.newegg.com/BizIntell/item/28/840/28-840-014/001_080916.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'http://images10.newegg.com/BizIntell/item/28/840/28-840-014/g01_080916.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'http://images10.newegg.com/BizIntell/item/28/840/28-840-014/g02_080916.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'http://images10.newegg.com/BizIntell/item/28/840/28-840-014/g03_080916.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'http://images10.newegg.com/BizIntell/item/28/840/28-840-014/28-840-017_080916.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'http://images10.newegg.com/BizIntell/item/28/840/28-840-014/28-840-078_080916.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'http://images10.newegg.com/BizIntell/item/28/840/28-840-014/28-840-095_080916.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'http://images10.newegg.com/BizIntell/item/28/840/28-840-014/28-840-014_080916.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'http://images10.newegg.com/BizIntell/item/28/840/28-840-014/28-840-025_080916.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'http://images10.newegg.com/BizIntell/item/28/840/28-840-014/28-840-094_080916.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'http://images10.newegg.com/BizIntell/item/28/840/28-840-014/28-840-014_080916.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/loading16.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/loading16.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/email.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/btn_subscribe-disabled.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/btn_subscribe.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/PayPal89x25.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/none.gif',
            width: null,
            height: '0',
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/awards_04.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/blue-seal-newegginc.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/inc500.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/none.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/none.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/loading16.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/none.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/none.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'http://images10.newegg.com/WebResource/Themes/2005/Nest/Gomeznone69.gif',
            width: '0',
            height: '0',
            type: 'gif',
          },
        ]);
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/newegg');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogDescription',
          'ogImage',
          'ogTitle',
          'requestUrl',
          'robots',
          'success',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('npm', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/npm' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql('Convert a string to a valid safe filename');
        expect(result.ogDescription).to.be.eql('Convert a string to a valid safe filename');
        expect(result.ogTitle).to.be.eql('filenamify');
        expect(result.ogUrl).to.be.eql('https://www.npmjs.com/package/filenamify');
        expect(result.ogSiteName).to.be.eql('npm');
        expect(result.twitterCard).to.be.eql('summary');
        expect(result.twitterTitle).to.be.eql('npm: filenamify');
        expect(result.twitterDescription).to.be.eql('Convert a string to a valid safe filename');
        expect(result.ogImage).to.be.eql({
          url: 'https://www.npmjs.com/static/images/touch-icons/open-graph.png',
          width: null,
          height: null,
          type: null,
        });
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/npm');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogDescription',
          'ogImage',
          'ogSiteName',
          'ogTitle',
          'ogUrl',
          'requestUrl',
          'success',
          'twitterCard',
          'twitterDescription',
          'twitterTitle',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('reddit', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/reddit' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql('reddit: the front page of the internet');
        expect(result.ogSiteName).to.be.eql('reddit');
        expect(result.ogDescription).to.be.eql('4910 points and 7055 comments so far on reddit');
        expect(result.ogTitle).to.be.eql("'UK man' tried to kill Trump: court papers • /r/news");
        expect(result.twitterSite).to.be.eql('reddit');
        expect(result.twitterCard).to.be.eql('summary');
        expect(result.twitterTitle).to.be.eql("'UK man' tried to kill Trump: court papers • /r/news");
        expect(result.ogImage).to.be.eql({
          url: 'https://www.redditstatic.com/icon.png',
          width: null,
          height: null,
          type: null,
        });
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/reddit');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogDescription',
          'ogImage',
          'ogSiteName',
          'ogTitle',
          'requestUrl',
          'success',
          'twitterCard',
          'twitterSite',
          'twitterTitle',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('rottentomatoes', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/rottentomatoes' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.ogTitle).to.be.eql('Inception');
        expect(result.ogType).to.be.eql('video.movie');
        expect(result.ogUrl).to.be.eql('https://www.rottentomatoes.com/m/inception/');
        expect(result.ogDescription).to.be.eql(undefined);
        expect(result.twitterCard).to.be.eql('summary');
        expect(result.twitterSite).to.be.eql('@rottentomatoes');
        expect(result.twitterTitle).to.be.eql('Inception');
        expect(result.twitterDescription).to.be.eql(undefined);
        expect(result.ogImage).to.be.eql([
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/logos/rtlogo.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/logos/rtlogo.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'https://resizing.flixster.com/aP3K1GgAGYQHLHNucEzt-hP40FE=/fit-in/278x400/v1.bTsxMjE5ODM2NDtqOzE3MTUxOzEyMDA7NDA1MDs2MDAw',
            width: null,
            height: null,
            type: 'bTsxMjE5ODM2NDtqOzE3MTUxOzEyMDA7NDA1MDs2MDAw',
          },
          {
            url: 'https://resizing.flixster.com/-ZPpEm82GLTHmOb-Z__n2SrRpUk=/fit-in/278x400/v1.bTsxMjA2NjI4NTtqOzE3MTQ5OzEyMDA7MTA4MDsxNjAw',
            width: null,
            height: null,
            type: 'bTsxMjA2NjI4NTtqOzE3MTQ5OzEyMDA7MTA4MDsxNjAw',
          },
          {
            url: 'https://resizing.flixster.com/FbgpYdh8iqy4X6ygjWfPym4Va1w=/fit-in/278x400/v1.bTsxMjA5MzQ5NDtqOzE3MTQ5OzEyMDA7MjAyNjszMDAw',
            width: null,
            height: null,
            type: 'bTsxMjA5MzQ5NDtqOzE3MTQ5OzEyMDA7MjAyNjszMDAw',
          },
          {
            url: 'https://resizing.flixster.com/Lk6sOAPXbfUDkWycV5SRK5WWDy0=/fit-in/278x400/v1.dDsyMTU1MzM7ajsxNzEwMjsxMjAwOzY0ODs5NjA',
            width: null,
            height: null,
            type: 'dDsyMTU1MzM7ajsxNzEwMjsxMjAwOzY0ODs5NjA',
          },
          {
            url: 'https://resizing.flixster.com/JdLV7nEnHpNa-5I5bAhY5lQPMHE=/206x305/v1.bTsxMTE2NjcyNTtqOzE3MTg0OzEyMDA7ODAwOzEyMDA',
            width: null,
            height: null,
            type: 'bTsxMTE2NjcyNTtqOzE3MTg0OzEyMDA7ODAwOzEyMDA',
          },
          {
            url: 'https://resizing.flixster.com/IRmU9JBApTIEwW_-Ct2yuIAVVf0=/50x50/v1.cjsxOTQyNTtqOzE3MTAwOzEyMDA7NDU0OzY1Mg',
            width: null,
            height: null,
            type: 'cjsxOTQyNTtqOzE3MTAwOzEyMDA7NDU0OzY1Mg',
          },
          {
            url: 'https://resizing.flixster.com/n8L6cs5vZzK_Z0VEd8P3PYQaJCE=/50x50/v1.bjs3OTIyNzk7ajsxNzE1NDsxMjAwOzg1MTsxMjgw',
            width: null,
            height: null,
            type: 'bjs3OTIyNzk7ajsxNzE1NDsxMjAwOzg1MTsxMjgw',
          },
          {
            url: 'https://resizing.flixster.com/3wR60670UQI1X0HvxGr0n2_Se1k=/50x50/v1.cjs0MDg5NztqOzE3MTAwOzEyMDA7Mjc1OzIzMA',
            width: null,
            height: null,
            type: 'cjs0MDg5NztqOzE3MTAwOzEyMDA7Mjc1OzIzMA',
          },
          {
            url: 'https://resizing.flixster.com/MXSrVHy2OhcWYgop79pcPqQhCzY=/50x50/v1.cjs0NTQ5NDtqOzE3MTAwOzEyMDA7MjIwOzE5Ng',
            width: null,
            height: null,
            type: 'cjs0NTQ5NDtqOzE3MTAwOzEyMDA7MjIwOzE5Ng',
          },
          {
            url: 'https://resizing.flixster.com/8oSMWd6Fu1RLLtB3URA3lnO8K44=/50x50/v1.cjs0MDQ4NztqOzE3MTAwOzEyMDA7Mjc1OzIzMA',
            width: null,
            height: null,
            type: 'cjs0MDQ4NztqOzE3MTAwOzEyMDA7Mjc1OzIzMA',
          },
          {
            url: 'https://resizing.flixster.com/aPlvO6VKe1w5OrRkci9HVe3vfhw=/50x50/v1.bjs4NjQwODtqOzE3MTAxOzEyMDA7MjE2MDsxNjIw',
            width: null,
            height: null,
            type: 'bjs4NjQwODtqOzE3MTAxOzEyMDA7MjE2MDsxNjIw',
          },
          {
            url: 'https://resizing.flixster.com/2qcp_Gt6AE-P5N3DOvW-EY6ZJqk=/50x50/v1.cDsxMTE4NDkwODtqOzE3MTg0OzEyMDA7MjczOzM4OQ',
            width: null,
            height: null,
            type: 'cDsxMTE4NDkwODtqOzE3MTg0OzEyMDA7MjczOzM4OQ',
          },
          {
            url: 'https://resizing.flixster.com/HK-9GL62HjXbazGFJ5YGEQFul1A=/50x50/v1.cjsxNzU1NztqOzE3MTAwOzEyMDA7NDM1OzY1Mg',
            width: null,
            height: null,
            type: 'cjsxNzU1NztqOzE3MTAwOzEyMDA7NDM1OzY1Mg',
          },
          {
            url: 'https://resizing.flixster.com/y_tyVgDOoyTevxqC0k25udX5Kt0=/50x50/v1.cjs0MDY4NztqOzE3MTAwOzEyMDA7Mjc1OzIzMA',
            width: null,
            height: null,
            type: 'cjs0MDY4NztqOzE3MTAwOzEyMDA7Mjc1OzIzMA',
          },
          {
            url: 'https://resizing.flixster.com/tc8vQlGrg7N99AFMhtrlRb3-SsQ=/50x50/v1.bjs3OTkzMjk7ajsxNzE1NDsxMjAwOzEyODA7MTkyMA',
            width: null,
            height: null,
            type: 'bjs3OTkzMjk7ajsxNzE1NDsxMjAwOzEyODA7MTkyMA',
          },
          {
            url: 'https://resizing.flixster.com/9jvvVSLrSxxaoHuW3BIhTd6es9E=/50x50/v1.bjs3OTk2NzQ7ajsxNzE1NDsxMjAwOzQ4MDs3MjA',
            width: null,
            height: null,
            type: 'bjs3OTk2NzQ7ajsxNzE1NDsxMjAwOzQ4MDs3MjA',
          },
          {
            url: 'https://resizing.flixster.com/uPYT1F-xTvCQZaIAs9F8p_VS5b8=/50x50/v1.cjs0ODIyNztqOzE3MTAwOzEyMDA7MTg5MDsxODkw',
            width: null,
            height: null,
            type: 'cjs0ODIyNztqOzE3MTAwOzEyMDA7MTg5MDsxODkw',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://resizing.flixster.com/JsDkB3Ci-NcO44d9M5sNLkPCO7c=/50x50/v1.bjs5NTY0ODQ7ajsxNzE1NjsxMjAwOzIwNDg7MTE1Mg',
            width: null,
            height: null,
            type: 'bjs5NTY0ODQ7ajsxNzE1NjsxMjAwOzIwNDg7MTE1Mg',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://resizing.flixster.com/-Bm3PDqWnGOC5mTN1DMNmOz0nxc=/50x50/v1.bjs3Nzc0MjE7ajsxNzE1MzsxMjAwOzM3Njs1NjQ',
            width: null,
            height: null,
            type: 'bjs3Nzc0MjE7ajsxNzE1MzsxMjAwOzM3Njs1NjQ',
          },
          {
            url: 'https://resizing.flixster.com/AZUqNd9f1vdqoaUXKP1k4hwlmUo=/50x50/v1.bjs3OTgzOTM7ajsxNzE1NDsxMjAwOzU0MDs3MjA',
            width: null,
            height: null,
            type: 'bjs3OTgzOTM7ajsxNzE1NDsxMjAwOzU0MDs3MjA',
          },
          {
            url: 'https://resizing.flixster.com/j5bAnPTAHXGJpWeapCVxOE_s5H4=/50x50/v1.bjs3OTI3NjU7ajsxNzE1NDsxMjAwOzMwMDs0NTA',
            width: null,
            height: null,
            type: 'bjs3OTI3NjU7ajsxNzE1NDsxMjAwOzMwMDs0NTA',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://resizing.flixster.com/VOGalUEByupIKvJIzIBBJ0whY7s=/50x50/v1.bjs1MTIxMzE7ajsxNzE1MDsxMjAwOzgzMTsxMTA4',
            width: null,
            height: null,
            type: 'bjs1MTIxMzE7ajsxNzE1MDsxMjAwOzgzMTsxMTA4',
          },
          {
            url: 'https://resizing.flixster.com/rnAYu0RXO3bnwsf7Ol4qE0vPY9o=/50x50/v1.bjs3NTQ2NTM7ajsxNzE1MzsxMjAwOzMwMDs0NTA',
            width: null,
            height: null,
            type: 'bjs3NTQ2NTM7ajsxNzE1MzsxMjAwOzMwMDs0NTA',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://resizing.flixster.com/71_4xANuUM7ZStj4J_GslvYQPc4=/50x50/v1.bjs3ODQwOTg7ajsxNzE1NDsxMjAwOzMwMDs0NTA',
            width: null,
            height: null,
            type: 'bjs3ODQwOTg7ajsxNzE1NDsxMjAwOzMwMDs0NTA',
          },
          {
            url: 'https://resizing.flixster.com/g8mylG9PBeq807h67th4vw1cxpY=/50x50/v1.bjs3NTI4OTk7ajsxNzE1MzsxMjAwOzM3NTs1MDA',
            width: null,
            height: null,
            type: 'bjs3NTI4OTk7ajsxNzE1MzsxMjAwOzM3NTs1MDA',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://resizing.flixster.com/LE17_u__uKLepNt3k0c-fR10q5Y=/50x50/v1.cjs0NTUwNTtqOzE3MTAwOzEyMDA7MjcwOzI0MQ',
            width: null,
            height: null,
            type: 'cjs0NTUwNTtqOzE3MTAwOzEyMDA7MjcwOzI0MQ',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://resizing.flixster.com/-lpotVP2XpAlYzQMzVBjh1BnqOU=/50x50/v1.bjs3NjEzNTE7ajsxNzE1MzsxMjAwOzU0MDs3MjA',
            width: null,
            height: null,
            type: 'bjs3NjEzNTE7ajsxNzE1MzsxMjAwOzU0MDs3MjA',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://resizing.flixster.com/gvKBYzmPnfjc8zw2Bsjgv2CtWGI=/50x50/v1.cjs0MzM5MjtqOzE3MTAwOzEyMDA7MjIwOzE5Ng',
            width: null,
            height: null,
            type: 'cjs0MzM5MjtqOzE3MTAwOzEyMDA7MjIwOzE5Ng',
          },
          {
            url: 'https://resizing.flixster.com/PC8bxV3XHlMF-fRw7_22yflzUGY=/50x50/v1.cjs0NTE0OTtqOzE3MTAwOzEyMDA7NDgwOzQyOA',
            width: null,
            height: null,
            type: 'cjs0NTE0OTtqOzE3MTAwOzEyMDA7NDgwOzQyOA',
          },
          {
            url: 'https://resizing.flixster.com/IbV3J8rG1zNtQEb2WSQRS_DA90c=/50x50/v1.bjs1MjE0ODM7ajsxNzE1MTsxMjAwOzY4MjsxMDIz',
            width: null,
            height: null,
            type: 'bjs1MjE0ODM7ajsxNzE1MTsxMjAwOzY4MjsxMDIz',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/actor.default.tmb.gif',
            width: null,
            height: null,
            type: 'gif',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/user.none.tmb.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'https://resizing.flixster.com/0tNdLsepoE6zolFQh43L-H5zh5k=/50x50/v1.YzsyNjI1O2c7MTcxMDA7MTIwMDsxNTA7MTUw',
            width: null,
            height: null,
            type: 'YzsyNjI1O2c7MTcxMDA7MTIwMDsxNTA7MTUw',
          },
          {
            url: 'https://resizing.flixster.com/ubQmA5Ro0Svdru5Yr4Zkp_SdiOU=/50x50/v1.YzsyMjc4O2o7MTcxMDA7MTIwMDsxMjg7MTI4',
            width: null,
            height: null,
            type: 'YzsyMjc4O2o7MTcxMDA7MTIwMDsxMjg7MTI4',
          },
          {
            url: 'https://resizing.flixster.com/2jAiUFWxpxoGGkEi8T9N4UUW5mQ=/50x50/v1.YzsyMzAzO2c7MTcxMDA7MTIwMDszODs0Mg',
            width: null,
            height: null,
            type: 'YzsyMzAzO2c7MTcxMDA7MTIwMDszODs0Mg',
          },
          {
            url: 'https://resizing.flixster.com/Q1vEjpGS4lCVf9FLoOn35pRUf9I=/50x50/v1.YzsxNTk3O2c7MTcxMDA7MTIwMDszODs0Mw',
            width: null,
            height: null,
            type: 'YzsxNTk3O2c7MTcxMDA7MTIwMDszODs0Mw',
          },
          {
            url: 'https://resizing.flixster.com/o8-tjNeBG8QDY4zpzuGWdOia9mE=/50x50/v1.YzsxNTM0O2c7MTcxMDA7MTIwMDszODs0Mg',
            width: null,
            height: null,
            type: 'YzsxNTM0O2c7MTcxMDA7MTIwMDszODs0Mg',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/user.none.tmb.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/user.none.tmb.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/user.none.tmb.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/user.none.tmb.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/user.none.tmb.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'https://staticv2.rottentomatoes.com/static/images/redesign/user.none.tmb.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'https://graph.facebook.com/v2.2/5300563/picture',
            width: null,
            height: null,
            type: '2/5300563/picture',
          },
          {
            url: 'https://graph.facebook.com/v2.2/619846742/picture',
            width: null,
            height: null,
            type: '2/619846742/picture',
          },
          {
            url: 'https://graph.facebook.com/v2.2/7801226/picture',
            width: null,
            height: null,
            type: '2/7801226/picture',
          },
          {
            url: 'https://graph.facebook.com/v2.2/523402618/picture',
            width: null,
            height: null,
            type: '2/523402618/picture',
          },
        ]);
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/rottentomatoes');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'ogDescription',
          'ogImage',
          'ogTitle',
          'ogType',
          'ogUrl',
          'requestUrl',
          'success',
          'twitterCard',
          'twitterDescription',
          'twitterSite',
          'twitterTitle',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('smile', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/smile' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql('Node.js the Right Way: Practical, Server-Side JavaScript That Scales [Jim Wilson] on Amazon.com. *FREE* shipping on qualifying offers. Get to the forefront of server-side JavaScript programming by writing compact, robust, fast, networked Node applications that scale. Ready to take JavaScript beyond the browser');
        expect(result.ogTitle).to.be.eql('Node.js the Right Way: Practical, Server-Side JavaScript That Scales: Jim Wilson: 9781937785734: Amazon.com: Books');
        expect(result.ogDescription).to.be.eql('Node.js the Right Way: Practical, Server-Side JavaScript That Scales [Jim Wilson] on Amazon.com. *FREE* shipping on qualifying offers. Get to the forefront of server-side JavaScript programming by writing compact, robust, fast, networked Node applications that scale. Ready to take JavaScript beyond the browser');
        expect(result.ogImage).to.be.eql([
          {
            url: '//fls-na.amazon.com/1/batch/1/OP/ATVPDKIKX0DER:156-1988293-0105640:RPGJF0BVXYPQ350P74BR$uedata=s:%2Fgp%2Fproduct%2F1937785734%2Fuedata%2Fnvp%2Funsticky%2F156-1988293-0105640%2FDetail%2Fntpoffrw%3Fstaticb%26id%3DRPGJF0BVXYPQ350P74BR%26pty%3DDetail%26spty%3DGlance%26pti%3DB000HKL6T2:1000',
            width: null,
            height: null,
            type: 'com/1/batch/1/OP/ATVPDKIKX0DER:156-1988293-0105640:RPGJF0BVXYPQ350P74BR$uedata=s:%2Fgp%2Fproduct%2F1937785734%2Fuedata%2Fnvp%2Funsticky%2F156-1988293-0105640%2FDetail%2Fntpoffrw%3Fstaticb%26id%3DRPGJF0BVXYPQ350P74BR%26pty%3DDetail%26spty%3DGlance%26pti%3DB000HKL6T2:1000',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/global-sprite_bluebeacon-32-v1._CB295592523_.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/G/01/kindle/merch/kcp/apple-horizontal-iconv2._CB339188008_.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/G/01/kindle/merch/kcp/google-horizontal-iconv2._CB339188010_.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/G/01/kindle/merch/kcp/windows-horizontal-iconv2._CB339188004_.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/G/01/kindle/merch/kcp/amazon-horizontal-icon._CB349235913_.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/G/01/kindle-apps/buttons/sendMeLinkMedium._CB341573398_.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/G/01/digital/sitb/sticker/sitb-sticker-v3-small._CB341765094_.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: '\n'
              + 'data:image/jpeg;base64,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\n'
              + '\n'
              + '\n'
              + '\n'
              + '\n'
              + '\n'
              + '\n'
              + '\n',
            width: '260px',
            height: null, // TODO: what in the world
            type: '\n'
              + 'data:image/jpeg;base64,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\n'
              + '\n'
              + '\n'
              + '\n'
              + '\n'
              + '\n'
              + '\n'
              + '\n',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/G/01/msx/isbn-example._CB304561077_.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/G/01/kindle/kindle-device-phone-36px._CB297183290_.png',
            width: null,
            height: '16',
            type: 'png',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/G/01/img16/student/productalert/1005981_student_titlecase_productalert_600X50._CB280689958_.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/G/01/subsamazon/merch/2016-10/ConsumerReports/CR75px._SS75_CB277290398_.png',
            width: '75',
            height: '75',
            type: 'png',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/I/51wP%2B%2BgnRTL._SX258_BO1,204,203,200_.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/I/51wP%2B%2BgnRTL._AC_UL115_.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/I/51-U0v0J8DL._AC_UL115_.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/I/51ZwZCpn5dL._AC_UL115_.jpg',
            width: null,
            height: null,
            type: 'jpg',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/I/51-U0v0J8DL._AC_UL160_SR122,160_.jpg',
            width: '122',
            height: '160',
            type: 'jpg',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/I/51ZwZCpn5dL._AC_UL160_SR126,160_.jpg',
            width: '126',
            height: '160',
            type: 'jpg',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/I/51oxddyLhqL._AC_UL160_SR130,160_.jpg',
            width: '130',
            height: '160',
            type: 'jpg',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/I/41pINoeZygL._AC_UL160_SR130,160_.jpg',
            width: '130',
            height: '160',
            type: 'jpg',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/I/5166ztxOm9L._AC_UL160_SR123,160_.jpg',
            width: '123',
            height: '160',
            type: 'jpg',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/I/51gzqnIpxQL._AC_UL160_SR123,160_.jpg',
            width: '123',
            height: '160',
            type: 'jpg',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/G/01/icons/icon_1x1_sl.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/G/01/img15/books/icon/27400_icon_140x140_16._SS75_CB289514780_.png',
            width: '75',
            height: '75',
            type: 'png',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/G/01/icons/icon_1x1_sl.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/I/51wP%2B%2BgnRTL._SL500_PIsitb-sticker-arrow-big,TopRight,35,-73_OU01_AA130_.jpg',
            width: '130',
            height: null,
            type: 'jpg',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/I/51-U0v0J8DL._AC_UL70_SR70,70_.jpg',
            width: '70',
            height: '70',
            type: 'jpg',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/I/81sPjexfGqL._AC_UL70_SR70,70_.jpg',
            width: '70',
            height: '70',
            type: 'jpg',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/I/51F2KSDxGwL._AC_UL70_SR70,70_.jpg',
            width: '70',
            height: '70',
            type: 'jpg',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/I/41SzsmJa9uL._AC_UL70_SR70,70_.jpg',
            width: '70',
            height: '70',
            type: 'jpg',
          },
          {
            url: 'https://images-na.ssl-images-amazon.com/images/G/01/personalization/ybh/loading-4x-gray._CB317976265_.gif',
            width: null,
            height: null,
            type: 'gif',
          },
        ]);
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/smile');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogDescription',
          'ogImage',
          'ogTitle',
          'requestUrl',
          'success',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('ted', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/ted' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql("There's never a bad time to start a good habit. Let these talks set the framework for a healthier, happier life.");
        expect(result.author).to.be.eql('TED');
        expect(result.ogTitle).to.be.eql('8 TED Talks to form better habits');
        expect(result.ogDescription).to.be.eql("There's never a bad time to start a good habit. Let these talks set the framework for a healthier, happier life.");
        expect(result.ogType).to.be.eql('video.other');
        expect(result.twitterCard).to.be.eql('summary_large_image');
        expect(result.twitterSite).to.be.eql('@tedtalks');
        expect(result.twitterAppIdiPhone).to.be.eql('376183339');
        expect(result.twitterAppIdiPad).to.be.eql('376183339');
        expect(result.twitterAppIdGooglePlay).to.be.eql('com.ted.android');
        expect(result.twitterAppNameiPad).to.be.eql('TED');
        expect(result.twitterAppNameiPhone).to.be.eql('TED');
        expect(result.twitterAppNameGooglePlay).to.be.eql('TED');
        expect(result.twitterAppUrliPad).to.be.eql('ted://playlists/321/talks_to_form_better_habits?source=twitter');
        expect(result.twitterAppUrliPhone).to.be.eql('ted://playlists/321/talks_to_form_better_habits?source=twitter');
        expect(result.ogUrl).to.be.eql('https://www.ted.com/playlists/321/talks_to_form_better_habits?utm_campaign=social&utm_medium=referral&utm_source=facebook.com&utm_content=playlist&utm_term=social-science');
        expect(result.ogImage).to.be.eql({
          url: 'https://pi.tedcdn.com/r/pf.tedcdn.com/images/playlists/talks_to_form_better_habits_1200x627.jpg?c=1050%2C550&w=1050',
          width: '1050',
          height: '550',
          type: null,
        });
        expect(result.twitterImage).to.be.eql({
          url: 'https://pi.tedcdn.com/r/pf.tedcdn.com/images/playlists/talks_to_form_better_habits_1200x627.jpg?c=1050%2C550&w=1050',
          width: null,
          height: null,
          alt: null,
        });
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/ted');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'author',
          'description',
          'ogDescription',
          'ogImage',
          'ogTitle',
          'ogType',
          'ogUrl',
          'requestUrl',
          'success',
          'twitterAppIdGooglePlay',
          'twitterAppIdiPad',
          'twitterAppIdiPhone',
          'twitterAppNameGooglePlay',
          'twitterAppNameiPad',
          'twitterAppNameiPhone',
          'twitterAppUrliPad',
          'twitterAppUrliPhone',
          'twitterCard',
          'twitterImage',
          'twitterSite',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('thinkgeek', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/thinkgeek' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql('Whether you perform with them or just break out the occasional flourish in a friendly poker game, Citizen Playing Cards will impress people with their elegance. The tuck case features a combination of gold foil, hot stamping, and bronze foil.');
        expect(result.ogSiteName).to.be.eql('ThinkGeek');
        expect(result.ogType).to.be.eql('product');
        expect(result.ogTitle).to.be.eql('Citizen Playing Cards');
        expect(result.ogDescription).to.be.eql('Whether you perform with them or just break out the occasional flourish in a friendly poker game, Citizen Playing Cards will impress people with their elegance. The tuck case features a combination of gold foil, hot stamping, and bronze foil.');
        expect(result.ogUrl).to.be.eql('http://www.thinkgeek.com/product/jjip/?cpg=fbl_jjip');
        expect(result.articleAuthor).to.be.eql('ThinkGeek');
        expect(result.twitterSite).to.be.eql('@thinkgeek');
        expect(result.twitterCreator).to.be.eql('@thinkgeek');
        expect(result.twitterTitle).to.be.eql('Citizen Playing Cards');
        expect(result.twitterDescription).to.be.eql('Whether you perform with them or just break out the occasional flourish in a friendly poker game, Citizen Playing Cards will impress people with their elegance. The tuck case features a combination of gold foil, hot stamping, and bronze foil.');
        expect(result.twitterCard).to.be.eql('product');
        expect(result.ogImage).to.be.eql({
          url: 'http://www.thinkgeek.com/images/products/zoom/jjip_citizen_playing_cards.jpg',
          width: null,
          height: null,
          type: null, // TODO: why isn't type set here?
        });
        expect(result.twitterImage).to.be.eql({
          url: 'http://www.thinkgeek.com/images/products/zoom/jjip_citizen_playing_cards.jpg',
          width: null,
          height: null,
          alt: null,
        });
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/thinkgeek');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'articleAuthor',
          'description',
          'ogDescription',
          'ogImage',
          'ogSiteName',
          'ogTitle',
          'ogType',
          'ogUrl',
          'requestUrl',
          'success',
          'twitterCard',
          'twitterCreator',
          'twitterDescription',
          'twitterImage',
          'twitterSite',
          'twitterTitle',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('w3', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/w3' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.ogTitle).to.be.eql('JSON-LD 1.0');
        expect(result.ogImage).to.be.eql([
          {
            url: 'https://www.w3.org/Icons/w3c_home',
            width: '72',
            height: '48',
            type: 'org/Icons/w3c_home',
          },
          {
            url: 'linked-data-graph.png',
            width: null,
            height: null,
            type: 'png',
          },
        ]);
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/w3');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'ogImage',
          'ogTitle',
          'requestUrl',
          'success',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('xkcd', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/xkcd' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.ogTitle).to.be.eql('xkcd: Regular Expressions');
        expect(result.ogImage).to.be.eql([
          {
            url: '//imgs.xkcd.com/static/terrible_small_logo.png',
            width: '185',
            height: '83',
            type: 'png',
          },
          {
            url: '//imgs.xkcd.com/comics/regular_expressions.png',
            width: null,
            height: null,
            type: 'png',
          },
          {
            url: '//imgs.xkcd.com/s/a899e84.jpg',
            width: '520',
            height: '100',
            type: 'jpg',
          },
        ]);
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/xkcd');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'ogImage',
          'ogTitle',
          'requestUrl',
          'success',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
  it('yelp', function () {
    return ogs({ url: 'https://jshemas.github.io/openGraphScraperPages/yelp' })
      .then(function (data) {
        const { error, result, response } = data;
        console.log('error:', error);
        console.log('result:', result);
        expect(error).to.be.eql(false);
        expect(result.description).to.be.eql('906 reviews of Boba Guys "Boba guys like a lot of the stores on Valencia, has great ingredients like Strauss milk and grade A tea. You really get what you pay for!   My favorites are the lychee milk tea, lavender-rose milk tea, and currently my…');
        expect(result.ogDescription).to.be.eql('Specialties: High-quality bubble milk teas made with next-level quality ingredients like organic milk, homemade syrup, and homemade almond jelly. Home of the original Horchata Boba and Tea Frescas. Established in 2011.  We started Boba Guys…');
        expect(result.ogSiteName).to.be.eql('Yelp');
        expect(result.ogTitle).to.be.eql('Boba Guys - Mission - San Francisco, CA');
        expect(result.ogType).to.be.eql('yelpyelp:business');
        expect(result.ogUrl).to.be.eql('https://www.yelp.com/biz/boba-guys-san-francisco-4');
        expect(result.twitterCard).to.be.eql('summary');
        expect(result.twitterSite).to.be.eql('@yelp');
        expect(result.twitterAppNameiPhone).to.be.eql('Yelp');
        expect(result.twitterAppNameiPad).to.be.eql('Yelp');
        expect(result.twitterAppNameGooglePlay).to.be.eql('Yelp');
        expect(result.twitterAppIdiPhone).to.be.eql('id284910350');
        expect(result.twitterAppIdiPad).to.be.eql('id284910350');
        expect(result.twitterAppIdGooglePlay).to.be.eql('com.yelp.android');
        expect(result.twitterAppUrliPhone).to.be.eql('yelp:///biz/18TtLS_JtiS2OH30FLqNrw?utm_campaign=default&utm_source=twitter-card');
        expect(result.twitterAppUrliPad).to.be.eql('yelp:///biz/18TtLS_JtiS2OH30FLqNrw?utm_campaign=default&utm_source=twitter-card');
        expect(result.twitterAppUrlGooglePlay).to.be.eql('intent://yelp.com/biz/18TtLS_JtiS2OH30FLqNrw?utm_source=twitter-card#Intent;scheme=http;package=com.yelp.android;end;');
        expect(result.ogImage).to.be.eql({
          url: 'https://s3-media2.fl.yelpcdn.com/bphoto/FE1lCskaigmVupQGk86T4g/o.jpg',
          width: '2000',
          height: '1300',
          type: null,
        });
        expect(result.twitterImage).to.be.eql({
          url: 'https://s3-media1.fl.yelpcdn.com/bphoto/FE1lCskaigmVupQGk86T4g/258s.jpg',
          width: null,
          height: null,
          alt: null,
        });
        expect(result.requestUrl).to.be.eql('https://jshemas.github.io/openGraphScraperPages/yelp');
        expect(result.success).to.be.eql(true);
        expect(result).to.have.all.keys(
          'description',
          'ogDescription',
          'ogImage',
          'ogSiteName',
          'ogTitle',
          'ogType',
          'ogUrl',
          'requestUrl',
          'success',
          'twitterAppIdGooglePlay',
          'twitterAppIdiPad',
          'twitterAppIdiPhone',
          'twitterAppNameGooglePlay',
          'twitterAppNameiPad',
          'twitterAppNameiPhone',
          'twitterAppUrlGooglePlay',
          'twitterAppUrliPad',
          'twitterAppUrliPhone',
          'twitterCard',
          'twitterImage',
          'twitterSite',
        );
        expect(response).to.be.an('object').and.to.not.be.empty;
      })
      .catch(function (error) {
        console.log('error:', error);
        expect().fail('this should not happen');
      });
  });
});
