/* global THREE */
(function() {
  var scene, camera, renderer, blocks;
  
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
    
    blocks = [new Block(0, 0, 1, 3), new Block(4, 0, 3, 1), new Block(-4, 0, 3, 1)];
    blocks.map(function(b) { b.addToScene(scene) });

    camera.position.z = 10;
  }
  
  function render() {
    requestAnimationFrame( render );
    
    blocks.map(function(b) { b.render() });
    
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