/* global THREE */
(function() {
  var scene, camera, renderer, cube;
  
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
    
    var light = new THREE.PointLight(0xffffff, 1, 0);
    light.position.set(20, 20, 0);
    scene.add(light);
    
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
    
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
  
  function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

  }
  
  init();
  generate();
  render();
}());