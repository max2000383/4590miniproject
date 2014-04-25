#pragma strict
var sound : AudioClip;
var player: GameObject;
var bear: GameObject;
var isBeastAlerted: boolean = false;

function Start () {

	audio.clip = sound;

}

function Update () {

	if (Vector3.Distance(bear.transform.position, player.transform.position) <= 22.0){
		roar();
	}
	else{
		isBeastAlerted = false;
	}

}

function roar(){

	audio.volume = 1;
	
	if (!audio.isPlaying && !isBeastAlerted){
		isBeastAlerted = true;
		audio.Play();
	}
	
	
}