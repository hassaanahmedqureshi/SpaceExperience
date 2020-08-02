function initPlanets(){
    
    // --- Sun --- //
    var sun = new THREE.SphereGeometry(150, 150, 150 );
    var material = new THREE.MeshPhongMaterial( { specular: 0x333333, shininess: 0, emissive: 0xFFFF00, emissiveMap: textureLoader.load( "Images/sun.jpg" ), normalScale: new THREE.Vector2( 0.85, -0.85 ) } );
    var sunMesh = new THREE.Mesh( sun, material );
    solarSystem.add( sunMesh );
    
    sunSound = new THREE.PositionalAudio( listener );
        audioLoader.load( 'Sound/sun.wav', function ( buffer ) {

            sunSound.setBuffer( buffer );
            sunSound.setRefDistance( 80 );
            sunSound.play();
            sunSound.getVolume( panel.Sun);
            sunSound.setLoop( true );

        } );
        sunMesh.add( sunSound );


    // --- Mercury --- //
    mercuryRevolve = new THREE.Object3D();
    var mercury = new THREE.SphereGeometry(5, 50, 50 );
    var material = new THREE.MeshPhongMaterial( { specular: 0x333333, shininess: 0, map: textureLoader.load( "Images/mercury.jpg" ), normalScale: new THREE.Vector2( 0.85, -0.85 ) } );
    mercuryMesh = new THREE.Mesh( mercury, material );
    // mercuryMesh.castShadow = true; //default is false
    // mercuryMesh.receiveShadow = true; //default
    mercuryRevolve.add(mercuryMesh);
    solarSystem.add(mercuryRevolve);

    mercurySound = new THREE.PositionalAudio( listener );
        audioLoader.load( 'Sound/mercury.mp3', function ( buffer ) {

            mercurySound.setBuffer( buffer );
            mercurySound.setRefDistance( 30 );
            mercurySound.setLoop( true );
            mercurySound.setVolume(panel.Mercury );
            mercurySound.play();
            

        } );
        mercuryMesh.add( mercurySound );
    
    // --- Venus --- //
    venusRevolve = new THREE.Object3D();
    var venus = new THREE.SphereGeometry(14, 50, 50 );
    var material = new THREE.MeshPhongMaterial( { specular: 0x333333, shininess: 0, map: textureLoader.load( "Images/venus.jpg" ), normalScale: new THREE.Vector2( 0.85, -0.85 ) } );
    venusMesh = new THREE.Mesh( venus, material );
    // venusMesh.castShadow = true; //default is false
    // venusMesh.receiveShadow = true; //default
    venusRevolve.add(venusMesh);
    solarSystem.add(venusRevolve);

    venusSound = new THREE.PositionalAudio( listener );
    audioLoader.load( 'Sound/venus.mp3', function ( buffer ) {

        venusSound.setBuffer( buffer );
        venusSound.setRefDistance( 30 );
        venusSound.setLoop( true );
        venusSound.setVolume(panel.Venus );
        venusSound.play();

    } );
    venusMesh.add( venusSound );
    

    // --- Earth --- //
    earthRevolve = new THREE.Object3D();
    var earth = new THREE.SphereGeometry(15, 50, 50 );
    var material = new THREE.MeshPhongMaterial( { specular: 0x333333, shininess: 0, map: textureLoader.load( "Images/earth.jpg" ), normalScale: new THREE.Vector2( 0.85, -0.85 ) } );
    earthMesh = new THREE.Mesh( earth, material );
    // earthMesh.castShadow = true; //default is false
    // earthMesh.receiveShadow = true; //default
    earthRevolve.add(earthMesh);
    earthRevolve.rotation.z = 24.439281 * Math.PI / 190; //Earth's tilt 

    earthSound = new THREE.PositionalAudio( listener );
    audioLoader.load( 'Sound/earth.mp3', function ( buffer ) {

        earthSound.setBuffer( buffer );
        earthSound.setRefDistance( 30 );
        earthSound.setLoop( true );
        earthSound.setVolume(panel.Earth );
        earthSound.play();

    } );
    earthMesh.add( earthSound );


    // --- Earth's Moon --- //
    var moon = new THREE.SphereGeometry(3, 50, 50 );
    var material = new THREE.MeshPhongMaterial( { specular: 0x333333, shininess: 0, map: textureLoader.load( "Images/moon.jpg" ), normalScale: new THREE.Vector2( 0.85, -0.85 ) } );
    moonMesh = new THREE.Mesh( moon, material );
    moonMesh.position.x = 30;
    moonMesh.position.y = 10;
    

    earthSystem.add(earthMesh);
    earthSystem.add(moonMesh);
    solarSystem.add(earthSystem);
    

    // --- Mars --- //
    marsRevolve = new THREE.Object3D();
    var mars = new THREE.SphereGeometry(10, 50, 50 );
    var material = new THREE.MeshPhongMaterial( { specular: 0x333333, shininess: 0, map: textureLoader.load( "Images/mars.jpg" ), normalScale: new THREE.Vector2( 0.85, -0.85 ) } );
    marsMesh = new THREE.Mesh( mars, material );
    // marsMesh.castShadow = true; //default is false
    // marsMesh.receiveShadow = true; //default
    marsRevolve.add(marsMesh);
    solarSystem.add(marsRevolve);

    marsSound = new THREE.PositionalAudio( listener );
    audioLoader.load( 'Sound/mars.mp3', function ( buffer ) {

        marsSound.setBuffer( buffer );
        marsSound.setRefDistance( 30 );
        marsSound.setLoop( true );
        marsSound.setVolume(panel.Mars );
        marsSound.play();

    } );
    marsMesh.add( marsSound );

    // --- Jupiter --- //
    jupiterRevolve = new THREE.Group();
    var jupiter = new THREE.SphereGeometry(60, 50, 50 );
    var material = new THREE.MeshPhongMaterial( { specular: 0x333333, shininess: 0, map: textureLoader.load( "Images/jupiter.jpg" ), normalScale: new THREE.Vector2( 0.85, -0.85 ) } );
    jupiterMesh = new THREE.Mesh( jupiter, material );

    jupiterSound = new THREE.PositionalAudio( listener );
    audioLoader.load( 'Sound/jupiter.wav', function ( buffer ) {

        jupiterSound.setBuffer( buffer );
        jupiterSound.setRefDistance( 30 );
        jupiterSound.setLoop( true );
        jupiterSound.setVolume( panel.Jupiter);
        jupiterSound.play();

    } );
    jupiterMesh.add( jupiterSound );

    var ganymede = new THREE.SphereGeometry(10, 50, 50 );
    var material = new THREE.MeshPhongMaterial( { specular: 0x333333, shininess: 0, map: textureLoader.load( "Images/ganymede.jpg" ), normalScale: new THREE.Vector2( 0.85, -0.85 ) } );
    ganymedeMesh = new THREE.Mesh( ganymede, material );
    ganymedeMesh.position.x = 70;
    ganymedeMesh.position.z = 30;
    jupiterRevolve.add(ganymedeMesh);
    jupiterRevolve.add(jupiterMesh);
    solarSystem.add(jupiterRevolve);

    // --- Satrun --- //
    saturnRevolve = new THREE.Group();
    var saturn = new THREE.SphereGeometry(55, 50, 50 );
    var material = new THREE.MeshPhongMaterial( { specular: 0x333333, shininess: 0, map: textureLoader.load( "Images/saturn.jpg" ), normalScale: new THREE.Vector2( 0.85, -0.85 ) } );
    saturnMesh = new THREE.Mesh( saturn, material );
    saturnRevolve.add(saturnMesh);

   saturnSound = new THREE.PositionalAudio( listener );
    audioLoader.load( 'Sound/saturn.mp3', function ( buffer ) {

        saturnSound.setBuffer( buffer );
        saturnSound.setRefDistance( 30 );
        saturnSound.setLoop( true );
        saturnSound.setVolume(panel.Saturn );
        saturnSound.play();

    } );
    saturnMesh.add( saturnSound );
    
    // Saturn Rings
    var ring1 = new THREE.TorusGeometry(82, 1, 3, 500);
    var ring2 = new THREE.TorusGeometry(80, 1, 3, 500);
    var ring3 = new THREE.TorusGeometry(78, 1, 3, 500);
    var newmaterial = new THREE.MeshPhongMaterial( { specular: 0x333333, shininess: 0, map: textureLoader.load( "Images/saturn.jpg" ), normalScale: new THREE.Vector2( 0.85, -0.85 ) } );
    var ring1Mesh = new THREE.Mesh( ring1, newmaterial );
    var ring2Mesh = new THREE.Mesh( ring2, newmaterial );
    var ring3Mesh = new THREE.Mesh( ring3, newmaterial );
    
    ring1Mesh.rotation.x = 24.439281 * Math.PI / 40;
    ring2Mesh.rotation.x = 24.439281 * Math.PI / 40;
    ring3Mesh.rotation.x = 24.439281 * Math.PI / 40;
    //RingObject.add(Ringmesh);

    // --- Saturn's Moon: Titan --- //
    var titan = new THREE.SphereGeometry(3, 50, 50 );
    var material = new THREE.MeshPhongMaterial( { specular: 0x333333, shininess: 0, map: textureLoader.load( "Images/titan.jpg" ), normalScale: new THREE.Vector2( 0.85, -0.85 ) } );
    var titanMesh = new THREE.Mesh( titan, material );
    titanMesh.position.x = 100;
    titanMesh.position.y = 10;

    saturnRevolve.add(titanMesh);

    saturnSystem.add(saturnRevolve);
    saturnSystem.add(ring1Mesh);
    saturnSystem.add(ring2Mesh);
    saturnSystem.add(ring3Mesh);
    solarSystem.add(saturnSystem);

    // --- Uranus --- //
    uranusRevolve = new THREE.Object3D();
    var uranus = new THREE.SphereGeometry(30, 50, 50 );
    var material = new THREE.MeshPhongMaterial( { specular: 0x333333, shininess: 0, map: textureLoader.load( "Images/uranus.jpg" ), normalScale: new THREE.Vector2( 0.85, -0.85 ) } );
    uranusMesh = new THREE.Mesh( uranus, material );
    // uranusMesh.castShadow = true; //default is false
    // uranusMesh.receiveShadow = true; //default
    uranusRevolve.add(uranusMesh);
    solarSystem.add(uranusRevolve);

    uranusSound = new THREE.PositionalAudio( listener );
    audioLoader.load( 'Sound/uranus.mp3', function ( buffer ) {

        uranusSound.setBuffer( buffer );
        uranusSound.setRefDistance( 30 );
        uranusSound.setLoop( true );
        uranusSound.setVolume(panel.Uranus );
        uranusSound.play();

    } );
    uranusMesh.add( uranusSound );

    // --- Neptune --- //
    neptuneRevolve = new THREE.Object3D();
    var neptune = new THREE.SphereGeometry(29, 50, 50 );
    var material = new THREE.MeshPhongMaterial( { specular: 0x333333, shininess: 0, map: textureLoader.load( "Images/neptune.jpg" ), normalScale: new THREE.Vector2( 0.85, -0.85 ) } );
    neptuneMesh = new THREE.Mesh( neptune, material );
    // neptuneMesh.castShadow = true; //default is false
    // neptuneMesh.receiveShadow = true; //default
    neptuneRevolve.add(neptuneMesh);
    solarSystem.add(neptuneRevolve);

   neptuneSound = new THREE.PositionalAudio( listener );
    audioLoader.load( 'Sound/neptune.mp3', function ( buffer ) {

        neptuneSound.setBuffer( buffer );
        neptuneSound.setRefDistance( 30 );
        neptuneSound.setLoop( true );
        neptuneSound.setVolume(panel.Neptune );
        neptuneSound.play();

    } );
    neptuneMesh.add( neptuneSound );




    
    // --- Stars --- //
    var i, r = radius, starsGeometry = [ new THREE.BufferGeometry(), new THREE.BufferGeometry() ];

    var vertices1 = [];
    var vertices2 = [];

    var vertex = new THREE.Vector3();

    for ( i = 0; i < 250; i ++ ) {

        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        vertex.multiplyScalar( r );

        vertices1.push( vertex.x, vertex.y, vertex.z );

    }

    for ( i = 0; i < 1500; i ++ ) {

        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        vertex.multiplyScalar( r );

        vertices2.push( vertex.x, vertex.y, vertex.z );

    }

    starsGeometry[ 0 ].setAttribute( 'position', new THREE.Float32BufferAttribute( vertices1, 3 ) );
    starsGeometry[ 1 ].setAttribute( 'position', new THREE.Float32BufferAttribute( vertices2, 3 ) );

    var stars;
    var starsMaterials = [
        new THREE.PointsMaterial( { color: 0x555555, size: 2, sizeAttenuation: false } ),
        new THREE.PointsMaterial( { color: 0x555555, size: 1, sizeAttenuation: false } ),
        new THREE.PointsMaterial( { color: 0x333333, size: 2, sizeAttenuation: false } ),
        new THREE.PointsMaterial( { color: 0x3a3a3a, size: 1, sizeAttenuation: false } ),
        new THREE.PointsMaterial( { color: 0x1a1a1a, size: 2, sizeAttenuation: false } ),
        new THREE.PointsMaterial( { color: 0x1a1a1a, size: 1, sizeAttenuation: false } )
    ];

    for ( i = 10; i < 30; i ++ ) {

        stars = new THREE.Points( starsGeometry[ i % 2 ], starsMaterials[ i % 6 ] );

        stars.rotation.x = Math.random() * 6;
        stars.rotation.y = Math.random() * 6;
        stars.rotation.z = Math.random() * 6;
        //stars.scale.setScalar( i * 10 );

        stars.matrixAutoUpdate = false;
        stars.updateMatrix();

        scene.add( stars );
    }
}