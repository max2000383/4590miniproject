var sound : AudioClip;
var water : GameObject;
var direction;

function Start () {

}

function Update () {
	var distance = Vector3.Distance(gameObject.transform.position, water.transform.position);
	var playerRotation = gameObject.transform.rotation.y;
	var directionToWater = water.transform.position - gameObject.transform.position;
	var initialPlayerDirection = new Vector3(0.0f, 0.0f, 1.0f);
	var initialPlayerToWater = Vector3.AngleBetween(directionToWater, initialPlayerDirection);
	direction = initialPlayerToWater;
}