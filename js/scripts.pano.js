var panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9, panorama10, panorama11, panorama12, viewer, container, infospot, font;
var panorama13, panorama14, panorama15, panorama16, panorama17, panorama18, panorama19, panorama20, panorama21, panorama22, panorama23, panorama24;
var panorama25, panorama26, panorama27, panorama28, panorama29, panorama30;

container = document.querySelector( '#container' );

function createTextShape ( message, size = 10, count ) {
        message = makeMultiLine( message, count );
        var shapes = font.generateShapes( message, size );
        var geometry = new THREE.ShapeGeometry( shapes );
        var matLite = new THREE.MeshBasicMaterial( {
          color: 0xffffff,
          transparent: true,
          opacity: 1,
          side: THREE.DoubleSide
        } );
        geometry.computeBoundingBox();
        var xMid = - 0.5 * ( geometry.boundingBox.max.x - geometry.boundingBox.min.x );
        geometry.translate( xMid, 0, 0 );
        return new THREE.Mesh( geometry, matLite );
}
function makeMultiLine ( text = '', count = 40 ) {
        let lineCharacterLimit = 0;
        return text.split(' ').map( word => {
          lineCharacterLimit += word.length;
          if ( lineCharacterLimit > count ) {
            word += '\n';
            lineCharacterLimit = 0;
          }
          return word;
        }).join(' ').replace( /\n /g, '\n' );
}

panorama1 = new PANOLENS.ImagePanorama( './asset/PIC_1.jpg' );
panorama2 = new PANOLENS.ImagePanorama( './asset/PIC_2.jpg' );
panorama3 = new PANOLENS.ImagePanorama( './asset/PIC_3.jpg' );
panorama4 = new PANOLENS.ImagePanorama( './asset/PIC_4.jpg' );
panorama5 = new PANOLENS.ImagePanorama( './asset/PIC_5.jpg' );
panorama6 = new PANOLENS.ImagePanorama( './asset/PIC_6.jpg' );
panorama7 = new PANOLENS.ImagePanorama( './asset/PIC_7.jpg' );
panorama8 = new PANOLENS.ImagePanorama( './asset/PIC_8.jpg' );
panorama9 = new PANOLENS.ImagePanorama( './asset/PIC_9.jpg' );
panorama10 = new PANOLENS.ImagePanorama( './asset/PIC_10.jpg' );
panorama11 = new PANOLENS.ImagePanorama( './asset/PIC_11.jpg' );
panorama12 = new PANOLENS.ImagePanorama( './asset/PIC_12.jpg' );

panorama13 = new PANOLENS.ImagePanorama( './asset/PIC_13.jpg' );
panorama14 = new PANOLENS.ImagePanorama( './asset/PIC_14.jpg' );
panorama15 = new PANOLENS.ImagePanorama( './asset/PIC_15.jpg' );
panorama16 = new PANOLENS.ImagePanorama( './asset/PIC_16.jpg' );
panorama17 = new PANOLENS.ImagePanorama( './asset/PIC_17.jpg' );
panorama18 = new PANOLENS.ImagePanorama( './asset/PIC_18.jpg' );
panorama19 = new PANOLENS.ImagePanorama( './asset/PIC_19.jpg' );
panorama20 = new PANOLENS.ImagePanorama( './asset/PIC_20.jpg' );
panorama21 = new PANOLENS.ImagePanorama( './asset/PIC_21.jpg' );
panorama22 = new PANOLENS.ImagePanorama( './asset/PIC_22.jpg' );
panorama23 = new PANOLENS.ImagePanorama( './asset/PIC_23.jpg' );
panorama24 = new PANOLENS.ImagePanorama( './asset/PIC_24.jpg' );
panorama25 = new PANOLENS.ImagePanorama( './asset/PIC_25.jpg' );
panorama26 = new PANOLENS.ImagePanorama( './asset/PIC_26.jpg' );
panorama27 = new PANOLENS.ImagePanorama( './asset/PIC_27.jpg' );
panorama28 = new PANOLENS.ImagePanorama( './asset/PIC_28.jpg' );
panorama29 = new PANOLENS.ImagePanorama( './asset/PIC_29.jpg' );
panorama30 = new PANOLENS.ImagePanorama( './asset/PIC_30.jpg' );

viewer = new PANOLENS.Viewer( {output: 'console', container: container});
viewer.add( panorama29, panorama1, panorama2, panorama3, panorama4, panorama5, panorama6, panorama7, panorama8, panorama9, panorama10, panorama11, panorama12);
viewer.add( panorama13, panorama14, panorama15, panorama16, panorama17, panorama18, panorama19, panorama20, panorama21, panorama22, panorama23, panorama24);
viewer.add( panorama25, panorama26, panorama27, panorama28, panorama30);

panorama29.link( panorama30, new THREE.Vector3( 3566.63, 59.05, -3491.47 ) );

panorama29.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(3601.38, 41.63, -3457.68), 0 );
} );

panorama30.link( panorama1, new THREE.Vector3( 1562.48, -72.26, -4745.57 ) );
panorama30.link( panorama29, new THREE.Vector3( -1233.91, 199.06, 4830.58 ) );

panorama30.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(1380.74, 260.79, -4788.72), 0 );
} );

panorama1.link( panorama2, new THREE.Vector3( 4844.54, -867.11, -830.42 ) );
panorama1.link( panorama30, new THREE.Vector3( -4421.33, -77.77, 2314.28 ) );

panorama1.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4942.05, 473.72, -555.68), 0 );
} );

panorama2.link( panorama1, new THREE.Vector3( -2720.70, -276.96, 4173.84 ) );
panorama2.link( panorama3, new THREE.Vector3( 3546.23, 638.51, -3452.22 ) );

panorama2.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(3424.56, 462.32, -3603.34), 0 );
} );

panorama3.link( panorama2, new THREE.Vector3( 829.42, -2044.78, 4477.97 ) );
panorama3.link( panorama4, new THREE.Vector3( 2908.49, 1125.91, 3902.77 ) );
panorama3.link( panorama5, new THREE.Vector3( 3920.51, -6.26, -3092.37 ) );

panorama3.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-852.46, 143.50, -4914.67), 0 );
} );

panorama4.link( panorama3, new THREE.Vector3( 1444.52, -357.12, -4767.72 ) );

panorama4.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-501.20, -265.70, 4963.29), 0 );
} );

panorama5.link( panorama3, new THREE.Vector3( -3617.90, -80.61, -3439.00 ) );
panorama5.link( panorama6, new THREE.Vector3( 3543.49, -470.82, -3482.99 ) );
panorama5.link( panorama9, new THREE.Vector3( 4471.20, 48.32, 2218.95 ) );
panorama5.link( panorama12, new THREE.Vector3( 2551.13, 66.48, 4293.8 ) );

panorama5.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(4150.56, 33.48, 2774.10), 0 );
} );

panorama6.link( panorama5, new THREE.Vector3( 4975.69, -338.39, -210.20 ) );
panorama6.link( panorama7, new THREE.Vector3( -4827.34, -7.58, 1275.03 ) );
panorama6.link( panorama8, new THREE.Vector3( -3482.75, -99.63, 3573.09 ) );

panorama6.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4133.78, -190.65, 2788.61), 0 );
} );

panorama7.link( panorama5, new THREE.Vector3( 2933.03, -63.89, 4045.93 ) );
panorama7.link( panorama6, new THREE.Vector3( 1828.82, -577.29, 4606.46 ) );
panorama7.link( panorama8, new THREE.Vector3( -4161.00, -330.77, 2736.60 ) );

panorama7.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-1714.52, -724.82, -4631.66), 0 );
} );

panorama8.link( panorama5, new THREE.Vector3( -3937.57, 31.97, 3069.712 ) );
panorama8.link( panorama6, new THREE.Vector3( -3423.39, -190.56, 3627.42 ) );
panorama8.link( panorama7, new THREE.Vector3( 1855.52, -153.60, 4629.662 ) );

panorama8.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3090.90, -566.25, -3875.76), 0 );
} );

panorama9.link( panorama5, new THREE.Vector3( 2884.14, -161.75, 4073.09 ) );
panorama9.link( panorama10, new THREE.Vector3( 1632.41, -328.95, -4707.94 ) );
panorama9.link( panorama11, new THREE.Vector3( -4405.74, -80.54, -2344.64 ) );

panorama9.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3365.11, -306.14, -3679.28), 0 );
} );

panorama10.link( panorama5, new THREE.Vector3( 4777.12, 261.69, -1423.91 ) );
panorama10.link( panorama9, new THREE.Vector3( 4365.93, -312.42, -2402.73 ) );
panorama10.link( panorama11, new THREE.Vector3( 2590.13, -94.63, 4267.17 ) );

panorama10.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4056.62, -181.67, -2908.07), 0 );
} );

panorama11.link( panorama5, new THREE.Vector3( -1323.98, -184.88, 4807.02 ) );
panorama11.link( panorama9, new THREE.Vector3( 758.56, -168.17, 4928.56 ) );
panorama11.link( panorama10, new THREE.Vector3( 4380.55, -112.50, 2391.31 ) );

panorama11.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4033.20, -109.51, -2946.77), 0 );
} );

panorama12.link( panorama5, new THREE.Vector3( -998.55, -180.97, -4890.04 ) );
panorama12.link( panorama15, new THREE.Vector3( -4672.25, -333.03, 1724.93 ) );

panorama12.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4216.65, -553.37, 2611.53), 0 );
} );

panorama13.link( panorama15, new THREE.Vector3( 3453.74, -147.85, 3599.43 ) );
panorama13.link( panorama14, new THREE.Vector3( 1883.00, -405.29, -4607.44 ) );

panorama13.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3266.38, -306.15, -3764.46), 0 );
} );

panorama14.link( panorama13, new THREE.Vector3( 2102.01, 99.90, 4528.51 ) );
panorama14.link( panorama15, new THREE.Vector3( 4624.38, 33.55, 1882.41 ) );

panorama14.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-1913.11, -420.85, -4593.91), 0 );
} );

panorama15.link( panorama12, new THREE.Vector3( 1704.85, -28.81, -4692.74 ) );
panorama15.link( panorama13, new THREE.Vector3( -249.72, -722.50, -4932.42 ) );
panorama15.link( panorama16, new THREE.Vector3( -1964.08, -164.75, 4587.52 ) );
panorama15.link( panorama17, new THREE.Vector3( -910.78, -113.02, 4906.64 ) );
panorama15.link( panorama21, new THREE.Vector3( -73.76, -32.35, 4994.86 ) );

panorama15.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-923.23, -240.20, 4899.62), 0 );
} );

panorama16.link( panorama15, new THREE.Vector3( 4244.97, -335.98, -2606.92 ) );

panorama16.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-2498.95, 37.24, -4329.02), 0 );
} );

panorama17.link( panorama15, new THREE.Vector3( 4047.81, -214.83, 2919.25 ) );
panorama17.link( panorama18, new THREE.Vector3( -4382.33, 25.70, 2395.32 ) );

panorama17.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4602.68, -361.99, 1903.00), 0 );
} );

panorama18.link( panorama17, new THREE.Vector3( -3142.47, 36.84, 3878.40 ) );
panorama18.link( panorama19, new THREE.Vector3( 4886.94, -485.12, -894.98 ) );

panorama18.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(3255.50, 58.08, -3785.79), 0 );
} );

panorama19.link( panorama18, new THREE.Vector3( 3733.60, 28.61, -3321.80 ) );
panorama19.link( panorama20, new THREE.Vector3( -4497.84, -261.44, -2148.25 ) );

panorama19.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4854.93, 1.85, 1172.92), 0 );
} );

panorama20.link( panorama18, new THREE.Vector3( -741.59, -75.08, -4934.95 ) );
panorama20.link( panorama19, new THREE.Vector3( 2937.17, -486.06, -4012.44 ) );

panorama20.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3507.46, 325.57, 3535.85), 0 );
} );

panorama21.link( panorama15, new THREE.Vector3( -2413.52, -199.18, -4365.42 ) );
panorama21.link( panorama22, new THREE.Vector3( -4988.65, -196.47, 69.33 ) );
panorama21.link( panorama23, new THREE.Vector3( 1179.28, 68.86, 4850.50 ) );
panorama21.link( panorama24, new THREE.Vector3( 416.56, -289.37, -4966.80 ) );

panorama21.link( panorama25, new THREE.Vector3( -521.17, -221.84, -4963.97 ) );
panorama21.link( panorama26, new THREE.Vector3( -3245.04, -159.31, -3789.16 ) );
panorama21.link( panorama27, new THREE.Vector3( 3208.81, -140.02, 3819.47 ) );

panorama21.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(1290.84, -61.09, 4820.93), 0 );
} );

panorama22.link( panorama21, new THREE.Vector3( 1474.79, -131.81, 4768.76 ) );

panorama22.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4771.50, 143.50, 1462.82), 0 );
} );

panorama23.link( panorama21, new THREE.Vector3( 3821.18, -208.25, 3202.44 ) );
panorama23.link( panorama28, new THREE.Vector3( -4808.55, -25.31, -1342.46 ) );

panorama23.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-3671.78, -501.35, -3349.60), 0 );
} );

panorama24.link( panorama21, new THREE.Vector3( 2657.45, -175.42, 4219.67 ) );

panorama24.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4969.82, -188.15, 434.86), 0 );
} );

panorama25.link( panorama21, new THREE.Vector3( -4508.93, -89.31, 2141.36 ) );

panorama25.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-4504.82, -203.25, 2139.57), 0 );
} );

panorama26.link( panorama21, new THREE.Vector3( -2689.84, -84.89, 4202.88 ) );

panorama26.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-1797.46, -158.97, -4651.72), 0 );
} );

panorama27.link( panorama21, new THREE.Vector3( -2804.10, -66.12, 4129.55 ) );

panorama27.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-679.72, -149.98, -4941.77), 0 );
} );

panorama28.link( panorama23, new THREE.Vector3( 2917.73, -97.65, 4054.28 ) );

panorama28.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( new THREE.Vector3(-546.53, -2.14, -4968.74), 0 );
} );

radius = 1500;
var loader = new THREE.FontLoader();
var info_p2_1, info_p6_1, info_p8_1, info_p9_1, info_p9_2, info_p10_1, info_p11_1, info_p13_1_1, info_p13_1_2, info_p13_2_1, info_p13_4_1, info_p13_4_2, info_p13_4_3, info_p13_4_4, info_p14_1_1, info_p14_1_2, info_p14_1_3, info_p15_2_1, info_p15_2_2;

loader.load( './fonts/tbi.json', onFontLoaded );
function onFontLoaded ( _font ) {
        font = _font;

p3_t1 = createLabel('Конференц-зал', 0.7, 170);
panorama3.add( p3_t1 );
p5_t1 = createLabel('Кабинет дополнительного \n        образования', 2.4, -50);
panorama5.add( p5_t1 );
p5_t2 = createLabel('Мастерские', 1.1, -130);
panorama5.add( p5_t2 );
p1_t4 = createLabel('3-й этаж', 0.8, 80);
//panorama1.add( p1_t4 );
p1_t5 = createLabel('Кабинет для работы \n    с документами', 0.7, -175);
//panorama1.add( p1_t5 );

p17_1_t1 = createLabel('Коридор 1-го этажа', 5.9, -175);
//panorama17_1.add( p17_1_t1 );

p17_2_t1 = createLabel('Коридор 1-го этажа', 4.5, -175);
//panorama17_2.add( p17_2_t1 );

p2_t1 = createLabel('К лабораториям', 4.6, 20);
//panorama2.add( p2_t1 );
p2_t2 = createLabel('Коридор 1-го этажа', 1.3, -250);
//panorama2.add( p2_t2 );

p3_t1 = createLabel('Санпропускник', 5.05, -20);
//panorama3.add( p3_t1 );
p3_t2 = createLabel('Автоклавная', 4.83, -330);
//panorama3.add( p3_t2 );
p3_t3 = createLabel('Микробиологические \n      исследования', 0.65, -100);
//panorama3.add( p3_t3 );
p3_t4 = createLabel('Микробиологические \n      исследования', 1.4, 00);
//panorama3.add( p3_t4 );
p3_t5 = createLabel('Микологические исследования', 3.2, -45);
//panorama3.add( p3_t5 );
p3_t6 = createLabel('Забор проб', 2.83, -55);
//panorama3.add( p3_t6 );

p4_t1 = createLabel('Коридор 1-го этажа', 0.55, -150);
//panorama4.add( p4_t1 );

p5_t1 = createLabel('Коридор 1-го этажа', 3.4, -175);
//panorama5.add( p5_t1 );

p6_t1 = createLabel('Коридор 1-го этажа', 2.4, -20);
//panorama6.add( p6_t1 );

p7_t1 = createLabel('Коридор 1-го этажа', 0.3, -20);
//panorama7.add( p7_t1 );

p8_t1 = createLabel('Коридор 1-го этажа', 2.2, -200);
//panorama8.add( p8_t1 );

p9_t1 = createLabel('Коридор 1-го этажа', 0.1, -100);
//panorama9.add( p9_t1 );

p10_t1 = createLabel('Коридор 1-го этажа', 1.16, -130);
//panorama10.add( p10_t1 );
p10_t2 = createLabel('Термостатная', 4.2, -10);
//panorama10.add( p10_t2 );

p12_t1 = createLabel('На 1-й этаж', 5.35, -130);
//panorama12.add( p12_t1 );
p12_t2 = createLabel('    Проведение \n физико-химических \n    исследований', 0.85, 250);
//panorama12.add( p12_t2 );
p12_t3 = createLabel('    Проведение \n физико-химических \n    исследований', 2.35, 100);
//panorama12.add( p12_t3 );
p12_t4 = createLabel('    Проведение \n физико-химических \n    исследований', 3.95, 50);
//panorama12.add( p12_t4 );

info_p5_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p5_1.position.set( -2519.86, -2234.82, 3687.60 );
info_p5_1.addHoverElement( document.getElementById( 'desc-p5_1' ), 200 );
panorama5.add( info_p5_1 );

info_p6_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p6_1.position.set( 2870.49, -2174.70, 3456.64 );
info_p6_1.addHoverElement( document.getElementById( 'desc-p6_1' ), 200 );
panorama6.add( info_p6_1 );

info_p8_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p8_1.position.set( -1157.05, 220.09, -4850.32 );
info_p8_1.addHoverElement( document.getElementById( 'desc-p8_1' ), 200 );
panorama8.add( info_p8_1 );

info_p9_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p9_1.position.set( 4585.20, 326.18, 1952.45 );
info_p9_1.addHoverElement( document.getElementById( 'desc-p9_1' ), 200 );
panorama9.add( info_p9_1 );

info_p9_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p9_2.position.set( 4462.10, -1174.62, -1918.06 );
info_p9_2.addHoverElement( document.getElementById( 'desc-p9_2' ), 200 );
panorama9.add( info_p9_2 );

info_p10_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p10_1.position.set( 2853.84, 443.19, -4074.81 );
info_p10_1.addHoverElement( document.getElementById( 'desc-p10_1' ), 200 );
panorama10.add( info_p10_1 );

info_p11_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p11_1.position.set( 3079.23, -373.10, 3912.63 );
info_p11_1.addHoverElement( document.getElementById( 'desc-p11_1' ), 200 );
panorama11.add( info_p11_1 );

info_p13_1_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_1_1.position.set( 3745.09, -2321.64, 2348.57 );
info_p13_1_1.addHoverElement( document.getElementById( 'desc-p13_1_1' ), 200 );
//panorama13_1.add( info_p13_1_1 );
info_p13_1_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_1_2.position.set( -910.80, -2366.09, -4305.69 );
info_p13_1_2.addHoverElement( document.getElementById( 'desc-p13_1_2' ), 200 );
//panorama13_1.add( info_p13_1_2 );

info_p13_2_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_2_1.position.set( -4919.62, 225.32, 800.70 );
info_p13_2_1.addHoverElement( document.getElementById( 'desc-p13_2_1' ), 200 );
//panorama13_2.add( info_p13_2_1 );

info_p13_4_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_1.position.set( 2255.78, -2283.40, 3830.85 );
info_p13_4_1.addHoverElement( document.getElementById( 'desc-p13_4_1' ), 200 );
//panorama13_4.add( info_p13_4_1 );
info_p13_4_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_2.position.set( 3963.87, -1368.49, 2706.61 );
info_p13_4_2.addHoverElement( document.getElementById( 'desc-p13_4_2' ), 200 );
//panorama13_4.add( info_p13_4_2 );
info_p13_4_3 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_3.position.set( 4585.53, -1505.99, -1276.95 );
info_p13_4_3.addHoverElement( document.getElementById( 'desc-p13_4_3' ), 200 );
//panorama13_4.add( info_p13_4_3 );
info_p13_4_4 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p13_4_4.position.set( -1331.62, -3079.72, -3697.05 );
info_p13_4_4.addHoverElement( document.getElementById( 'desc-p13_4_4' ), 200 );
//panorama13_4.add( info_p13_4_4 );

info_p14_1_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p14_1_1.position.set( -4615.91, -1770.56, -681.55 );
info_p14_1_1.addHoverElement( document.getElementById( 'desc-p14_1_1' ), 200 );
//panorama14_1.add( info_p14_1_1 );
info_p14_1_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p14_1_2.position.set( -4950.63, -539.46, -315.52 );
info_p14_1_2.addHoverElement( document.getElementById( 'desc-p14_1_2' ), 200 );
//panorama14_1.add( info_p14_1_2 );
info_p14_1_3 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p14_1_3.position.set( -2884.14, -1090.44, 3931.56 );
info_p14_1_3.addHoverElement( document.getElementById( 'desc-p14_1_3' ), 200 );
//panorama14_1.add( info_p14_1_3 );

info_p15_2_1 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p15_2_1.position.set( 4173.26, -1802.17, 2060.94 );
info_p15_2_1.addHoverElement( document.getElementById( 'desc-p15_2_1' ), 200 );
//panorama15_2.add( info_p15_2_1 );
info_p15_2_2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
info_p15_2_2.position.set( -4820.01, -821.60, -1035.75 );
info_p15_2_2.addHoverElement( document.getElementById( 'desc-p15_2_2' ), 200 );
//panorama15_2.add( info_p15_2_2 );

}

function createLabel(text='', angle=0, height=0)
{
    titleSprite = createTextShape( text, 15);
    titleSprite.position.set( radius * Math.sin( -angle ), height, radius * Math.cos( -angle ) );
    titleSprite.position.y += 45;
    titleSprite.rotation.y = Math.PI - angle;
    titleSprite.scale.multiplyScalar( 2 );
    return titleSprite;
}




