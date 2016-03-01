var Block = function(x, y, width, height) {
  this.x = x;
  this.y = y;
  
  this.xRot = 0.01;
  this.yRot = 0.02;
  
  this.geometry = new THREE.BoxGeometry(width, height, 1);
  
  this.material = new THREE.MeshLambertMaterial( { color: 0xffffff } );
  this.mesh = new THREE.Mesh(this.geometry, this.material);
    
  this.mesh.translateX(this.x);
  this.mesh.translateY(this.y);
  
  this.incrementRotation = function() {
    if(Math.random() <= 0.01) {
      var inc = Math.random() * 0.1;
      if(Math.random() >= 0.5) {
        this.xRot = (this.xRot + inc) % 0.05; 
      }
      else {
        this.yRot = (this.yRot + inc) % 0.05;
      }
    }
  }
};

Block.prototype = {
  constructor: Block,
  
  addToScene: function(scene) {
    scene.add(this.mesh);
  },
  
  render: function() {
    this.mesh.rotateX(this.xRot);
    this.mesh.rotateY(this.yRot);
    
    this.incrementRotation();
  }
}