﻿var sounds : AudioClip[];
private var step : boolean = true;
var trailDistance : double = 0;
var animalObj: GameObject;
var player: GameObject;
var trail: GameObject;
var time: double = 0;
var sunsDown: boolean = false;

function Start () {


}

function Update () {

	time += .03;

	trailDistance = Vector3.Distance(trail.transform.position, player.transform.position);

	//if the person gets too close to the animal, set off the alert
	if (Vector3.Distance(animalObj.transform.position, player.transform.position) <= 20.0){
		if (!audio.isPlaying){
			beastAlert();
		}
	}
	
	//if the person wanders too far off the trail, set off the geiger counter noise
	if (trailDistance >= 20.0){
		if (!audio.isPlaying){
			trailAlert();
		}
	}
	
	if (time > 10.0 && !sunsDown){
		sundown();
	}
	
	//Debug.Log(time);

}

function beastAlert() {

	step = false;
	
	//sounds[0] is the beast alert noise
	audio.clip = sounds[0];
	audio.volume = 1;
	
	if (!audio.isPlaying){
		audio.Play();
	}
	
	step = true;
}

function trailAlert() {

	step = false;
	
	//sounds[1] is the geiger counter noise
	audio.clip = sounds[1];
	if ((trailDistance <= 30.0) && (trailDistance >= 20.0)){
		//Debug.Log("incrementing volume ONE");
		audio.volume = .02;
	}
	if ((trailDistance <= 40.0) && (trailDistance >= 30.5)){
		//Debug.Log("incrementing volume TWO");
		audio.volume = .06;
	}
	if ((trailDistance >= 40.5)){
		//Debug.Log("incrementing volume THREE");
		audio.volume = .12;
	}
	
	if (!audio.isPlaying){
		audio.Play();
	}
	step = true;
}

function sundown(){

	audio.clip = sounds[2];
	audio.volume = 1;
	if (!audio.isPlaying){
		audio.Play();
	}
	
	sunsDown = true;

}

