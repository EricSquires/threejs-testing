/* global THREE */
(function() {
  var scene, camera, renderer, cube;
  
  function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
  }
  
  function generate() {
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    
    scene.add(new THREE.AmbientLight(0xffffff));
    
    var light = new THREE.PointLight(0xffffff, 1, 0);
    light.position.set(20, 20, 0);
    scene.add(light);
    
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;
  }
  
  function render() {
    requestAnimationFrame( render );
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;
    
    renderer.render( scene, camera );
  }
  
  init();
  generate();
  render();
}());