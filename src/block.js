var Block = function(x, y, width, height) {
  this.x = x;
  this.y = y;
  
  this.geometry = new THREE.BoxGeometry(width, height, 1);
  
  this.material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
  this.mesh = new THREE.Mesh(this.geometry, this.material);
};

Block.prototype = {
  constructor: Block,
  
  addToScene: function(scene) {
    scene.add(this.mesh);
  },
  
  render: function() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    
    this.mesh.x = this.x;
    this.mesh.y = this.y;
  }
}