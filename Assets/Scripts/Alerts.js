var sounds : AudioClip[];
var animalObj: GameObject;
var player: GameObject;
var trail: GameObject;
var poisonIvy: GameObject;
var time: double = 0;
var sunsDown: boolean = false;
var isBeastAlerted: boolean = false;
var isIvyAlerted: boolean = false;
var isFallAlerted: boolean = false;
var isFire: boolean = false;
var isFireLooping: boolean = false;
var isHikerDistressed: boolean = false;
var isThunder: boolean = false;
var isTired: boolean = false;
var closestSurfacePoint1: Vector3;
var closestSurfacePoint2: Vector3;
var trueDistance: float;

function Start () {
	isHikerDistressed=false;

}

function Update () {

	time += .03;

	closestSurfacePoint1 = player.collider.ClosestPointOnBounds(trail.transform.position);
	closestSurfacePoint2 = trail.collider.ClosestPointOnBounds(player.transform.position);
	trueDistance = Vector3.Distance(closestSurfacePoint1, closestSurfacePoint2);

	//if the person gets too close to the animal, set off the alert
	if (Vector3.Distance(animalObj.transform.position, player.transform.position) <= 28.0){
		if (!audio.isPlaying){
			beastAlert();
		}
	}
	else{
		isBeastAlerted = false;
	}
	
	//if the person wanders too far off the trail, set off the geiger counter noise
	if (trueDistance >= 20.0){
		if (!audio.isPlaying){
			trailAlert();
		}
	}
	
	if (Vector3.Distance(poisonIvy.transform.position, player.transform.position) <= 6.5){
		if (!audio.isPlaying){
			ivyAlert();
		}
	}
	else{
		isIvyAlerted = false;
	}
	
	if (time > 80.0 && !sunsDown){
		sundown();
	}
	
	
	
	if(Input.GetKeyDown(KeyCode.H)&&!audio.isPlaying&&!isHikerDistressed){
		
		distress();
	
	}
	
	//distress();
	
	//Debug.Log(time);

}
function distress(){
	//clips 8 and 9 are fire alerts
	audio.clip = sounds[7];
	audio.volume = .3;
	
	if (!audio.isPlaying && !isHikerDistressed){
		isHikerDistressed = true;
		audio.Play();
	}
	
}
function fireloop(){
	//clips 8 and 9 are fire alerts
	audio.clip = sounds[9];
	audio.volume = 1;
	
	if (!audio.isPlaying && !isFireLooping){
		isFireLooping = true;
		audio.Play();
	}
	
}
function beastAlert() {
	
	//sounds[0] is the beast alert noise
	audio.clip = sounds[0];
	audio.volume = 1;
	
	if (!audio.isPlaying && !isBeastAlerted){
		isBeastAlerted = true;
		audio.Play();
	}
	
}

function ivyAlert() {

	//sounds[3] is the ivy alert
	audio.clip = sounds[3];
	audio.volume = 1;
	
	if (!audio.isPlaying && !isIvyAlerted){
		isIvyAlerted = true;
		audio.Play();
	}

}

function trailAlert() {
	
	//sounds[1] is the geiger counter noise
	audio.clip = sounds[1];
	if ((trueDistance <= 30.0) && (trueDistance >= 20.0)){
		audio.volume = .02;
	}
	if ((trueDistance <= 40.0) && (trueDistance >= 30.5)){
		audio.volume = .06;
	}
	if ((trueDistance >= 40.5)){
		audio.volume = .12;
	}
	
	if (!audio.isPlaying){
		audio.Play();
	}


}

public function fallAlert(){

	//sounds[4] is the fall alert
	audio.clip = sounds[4];
	audio.volume = 1;
	
	if (!audio.isPlaying && !isFallAlerted){
		isFallAlerted = true;
		audio.Play();
	}

}

function sundown(){

	//sounds[2] is owl hoot
	audio.clip = sounds[2];
	audio.volume = 1;
	if (!audio.isPlaying){
		audio.Play();
	}
	
	sunsDown = true;

}


