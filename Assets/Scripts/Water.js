﻿var sound : AudioClip;
var player : GameObject;
private var audioSource;
var volumeScale : float = 0.5;

function Start () {
	audioSource = player.AddComponent(AudioSource);
	audioSource.loop = true;
	audioSource.clip = sound;
	audioSource.volume = 0;
	audioSource.Play();
}

function Update () {
	var distance = Vector3.Distance(player.transform.position, gameObject.transform.position);
	var playerRotation = 360 - player.transform.localRotation.eulerAngles.y;
	var directionToWater = gameObject.transform.position - player.transform.position;
	var basePlayerDirection = new Vector3(0.0f, 0.0f, 1.0f);
	var riverRotationQuat = new Quaternion();
	riverRotationQuat.SetFromToRotation(directionToWater, basePlayerDirection);
	var riverRotation = riverRotationQuat.eulerAngles.y;
	var direction = Mathf.Abs(((riverRotation - playerRotation + 540) % 360) - 180);
	
	if (distance < 25.0) {
		scale = volumeScale * Mathf.Pow(1 - direction/180.0, 3.0);
		audioSource.volume = scale;
	}
	
	else {
		audioSource.volume = 0;
	}
}