/* global THREE */
(function() {
  var scene, camera, renderer, level;
  
  function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    
    window.addEventListener( 'resize', onWindowResize, false );
  }
  
  function generate() {
    scene.add(new THREE.AmbientLight(0x404040));
    
    var light = new THREE.PointLight(0xff0000, 1, 100);
    light.position.set(20, 20, 5);
    scene.add(light);
    
    light = new THREE.PointLight(0x0000ff, 1, 100);
    light.position.set(-20, -20, 5);
    scene.add(light);
    
    light = new THREE.PointLight(0x00ff00, 1, 100);
    light.position.set(0, 0, 5);
    scene.add(light);
    
    loadLevel('src/level1.json', scene);

    camera.position.z = 50;
  }
  
  function loadJSON(jsonPath, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', jsonPath, true);
    
    xobj.onreadystatechange = function() {
      if (xobj.readyState == 4 && xobj.status == 200) {
        callback(xobj.responseText);
      }
    };
    
    xobj.send(null);
  }
  
  function loadLevel(jsonFile, scene) {
    loadJSON(jsonFile, function(response) {
      level = JSON.parse(response);
      level.blocks = level.blocks.map(function(b) { 
        var block = new Block(b.x, b.y, b.width, b.height);
        block.addToScene(scene);
        return block;
      });
    });
  }
  
  function render() {
    requestAnimationFrame( render );
    
    if(level) {
      level.blocks.map(function(b) { b.render() });
    }
    
    renderer.render( scene, camera );
  }
  
  function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

  }
  
  init();
  generate();
  render();
}());