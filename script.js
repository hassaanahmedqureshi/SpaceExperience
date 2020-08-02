var ringDisplay = document.querySelector('.loaderClass');
window.addEventListener('load', (event) => {
    ringDisplay.style.display = 'none';
});

var scene;
var cameraTrackball;
var renderer;
var controls;
var radius = 6371;
var mercuryRevolve;
var venusRevolve;
var earthRevolve;
var marsRevolve;
var jupiterRevolve;
var saturnRevolve;
var uranusRevolve;
var neptuneRevolve;

var mercuryMesh;
var venusMesh;
var earthMesh;
var marsMesh;
var jupiterMesh;
var saturnMesh;
var uranusMesh;
var neptuneMesh;

var sunSound;
var mercurySound;
var venusSound;
var earthSound;
var marsSound;
var jupiterSound;
var saturnSound;
var uranusSound;
var neptuneSound;

var moonMesh;
var sphereOrbitRadius = [250, 350, 450, 550, 850, 1050, 1250, 1550];
var sphereOrbitSpeed = [1.0, 0.5, 0.3, 0.4, 0.2, 0.1, 0.3, 0.2];
var sphereOrbitAngle = [0, 0, 0, 0, 0, 0, 0, 0];
var clock = new THREE.Clock();

var toggleControl = false;

var textureLoader = new THREE.TextureLoader();

var solarSystem = new THREE.Group();
var earthSystem = new THREE.Group();
var saturnSystem = new THREE.Group();
var spaceShip;

var vec = new THREE.Vector3( 0, 0, -100 );

var flyControls;
var stats;

var listener = new THREE.AudioListener();
var audioLoader = new THREE.AudioLoader();

var ambientlight;


function init(){
    //stats = initStats();
    scene = new THREE.Scene();
    
    // --- Camera --- //
    var aspect = window.innerWidth / window.innerHeight;
    cameraTrackball = new THREE.PerspectiveCamera( 45, aspect, 1, 5000 );
    cameraTrackball.position.z = 1000;
    cameraTrackball.add( listener );

    // --- Camera --- //
    cameraFly = new THREE.PerspectiveCamera( 45, aspect, 1, 5000 );
    cameraFly.position.z = 1000;


    initPlanets();


    // --- Lights --- //
    var light = new THREE.PointLight(0xFFFFFF, 1);
    light.position.set(0, 0, 0).normalize();
    light.castShadow = true;  
    solarSystem.add(light);

    ambientlight = new THREE.AmbientLight( 0x404040 ); // soft white light
    solarSystem.add( ambientlight );

    //Set up shadow properties for the light
    light.shadow.mapSize.width = 2000;  // default
    light.shadow.mapSize.height = 2000; // default
    light.shadow.camera.near = 100;       // default
    light.shadow.camera.far = 100000;      // default

    scene.add( solarSystem );


    // --- Renderer --- //
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    document.body.appendChild( renderer.domElement );


    controls = new THREE.TrackballControls( cameraTrackball, renderer.domElement );
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    controls.keys = [ 65, 83, 68 ];

     
    window.addEventListener( 'resize', onWindowResize, false );
    animate();
}


function ambientLight(){ 
    ambientlight.visible = !ambientlight.visible;
}


var panel = {
    RevolvePlanets : false,
    RotatePlanets : false,
    AmbientLight: ambientLight,

    Sun: 0.5,
    Mercury: 0.5,
    Venus: 0.5,
    Earth: 0.5,
    Mars: 0.5,
    Jupiter: 0.5,
    Saturn: 0.5,
    Uranus: 0.5,
    Neptune: 0.5
}


var gui = new dat.GUI();
var folder1 = gui.addFolder( 'General Controls' );
var folder2 = gui.addFolder( 'Planet Sounds' );

folder1.add(panel, 'RevolvePlanets');
folder1.add(panel, 'RotatePlanets');
folder1.add(panel, 'AmbientLight');

folder2.add(panel, 'Sun', 0, 5).onChange(function(){sunSound.setVolume( panel.Sun );});
folder2.add(panel, 'Mercury', 0, 5).onChange(function(){mercurySound.setVolume( panel.Mercury );});
folder2.add(panel, 'Venus', 0, 5).onChange(function(){venusSound.setVolume( panel.Venus );});
folder2.add(panel, 'Earth', 0, 5).onChange(function(){earthSound.setVolume( panel.Earth );});
folder2.add(panel, 'Mars', 0, 5).onChange(function(){marsSound.setVolume( panel.Mars );});
folder2.add(panel, 'Jupiter', 0, 5).onChange(function(){jupiterSound.setVolume( panel.Jupiter );});
folder2.add(panel, 'Saturn', 0, 5).onChange(function(){saturnSound.setVolume( panel.Saturn );});
folder2.add(panel, 'Uranus', 0, 5).onChange(function(){uranusSound.setVolume( panel.Uranus );});
folder2.add(panel, 'Neptune', 0, 5).onChange(function(){neptuneSound.setVolume( panel.Neptune );});



function onWindowResize() {
    cameraFly.aspect = window.innerWidth / window.innerHeight;
    cameraFly.updateProjectionMatrix();

    cameraTrackball.aspect = window.innerWidth / window.innerHeight;
    cameraTrackball.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function revolvePlanets() {
    var z;

    if(panel.RevolvePlanets == false){
        for(z = 0; z<=8; z++){
            sphereOrbitAngle[z] += sphereOrbitSpeed[z]; 
        }
    }
    
    var radians = sphereOrbitAngle[0] * Math.PI / 180;
    mercuryRevolve.position.x = Math.cos(radians) * sphereOrbitRadius[0];
    mercuryRevolve.position.z = Math.sin(radians) * sphereOrbitRadius[0];
     
    var radians = sphereOrbitAngle[1] * Math.PI / 180;

    venusRevolve.position.x = Math.cos(radians) * sphereOrbitRadius[1];
    venusRevolve.position.z = Math.sin(radians) * sphereOrbitRadius[1];

    
     
    var radians = sphereOrbitAngle[2] * Math.PI / 180;
    earthSystem.position.x = Math.cos(radians) * sphereOrbitRadius[2];
    earthSystem.position.z = Math.sin(radians) * sphereOrbitRadius[2];
    

     
    var radians = sphereOrbitAngle[3] * Math.PI / 180;
    marsRevolve.position.x = Math.cos(radians) * sphereOrbitRadius[3];
    marsRevolve.position.z = Math.sin(radians) * sphereOrbitRadius[3];

     
    var radians = sphereOrbitAngle[4] * Math.PI / 180;
    jupiterRevolve.position.x = Math.cos(radians) * sphereOrbitRadius[4];
    jupiterRevolve.position.z = Math.sin(radians) * sphereOrbitRadius[4];
 
    var radians = sphereOrbitAngle[5] * Math.PI / 180;
    saturnSystem.position.x = Math.cos(radians) * sphereOrbitRadius[5];
    saturnSystem.position.z = Math.sin(radians) * sphereOrbitRadius[5];
 
    var radians = sphereOrbitAngle[6] * Math.PI / 180;
    uranusRevolve.position.x = Math.cos(radians) * sphereOrbitRadius[6];
    uranusRevolve.position.z = Math.sin(radians) * sphereOrbitRadius[6];
 
    var radians = sphereOrbitAngle[7] * Math.PI / 180;
    neptuneRevolve.position.x = Math.cos(radians) * sphereOrbitRadius[7];
    neptuneRevolve.position.z = Math.sin(radians) * sphereOrbitRadius[7];



    // Rotation

    if(panel.RotatePlanets == false){
        mercuryMesh.rotation.y += 0.01;
        venusMesh.rotation.y += 0.01;
        earthMesh.rotation.y += 0.01;
        marsMesh.rotation.y += 0.01;
        jupiterMesh.rotation.y += 0.01;
        saturnMesh.rotation.y += 0.01;
        uranusMesh.rotation.y += 0.01;
        neptuneMesh.rotation.y += 0.01;
    }
    
}

function animate() {   
    requestAnimationFrame( animate );
    render();
}



function render() {

    //run the earth's orbit around the Sun
    revolvePlanets();

        controls.update();
        renderer.render( scene, cameraTrackball );
}

init();