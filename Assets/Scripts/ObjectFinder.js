var sound : AudioClip;
var player : GameObject;
var volumeScale : float;
var keyCode : KeyCode;

private var audioSource;
private var objectSeek : boolean = false;

function Start () {
	audioSource = player.AddComponent(AudioSource);
	audioSource.loop = true;
	audioSource.clip = sound;
	audioSource.volume = 0;
	audioSource.Play();
}

function Update () {
	if (Input.GetKeyDown(keyCode)) {
		objectSeek = !objectSeek;
	}
	
	var distance = Vector3.Distance(player.transform.position, gameObject.transform.position);
	var playerRotation = 360 - player.transform.localRotation.eulerAngles.y;
	var directionToObject = gameObject.transform.position - player.transform.position;
	var basePlayerDirection = new Vector3(0.0f, 0.0f, 1.0f);
	var objectRotationQuat = new Quaternion();
	objectRotationQuat.SetFromToRotation(directionToObject, basePlayerDirection);
	var objectRotation = objectRotationQuat.eulerAngles.y;
	var direction = Mathf.Abs(((objectRotation - playerRotation + 540) % 360) - 180);
	
	if (objectSeek) {
		scale = volumeScale * Mathf.Pow(1 - direction/180.0, 3.0);
		audioSource.volume = scale;
	}
	
	else {
		audioSource.volume = 0;
	}
}