var player : GameObject;
private var freshApproach : boolean = true;
var sound : AudioClip;
private var audioSource;
var approachDistance : float;
private var playOnApproach : boolean = true;

function Start () {
	audioSource = player.AddComponent(AudioSource);
}

function Update () {
	if (Input.GetKeyDown(KeyCode.P)) {
		playOnApproach = !playOnApproach;
	}

	var distance = Vector3.Distance(gameObject.transform.position, player.transform.position);
	if (!audioSource.isPlaying && playOnApproach) {
		// only have the sound play again if the player has left the object area and returned
		if (distance < approachDistance && freshApproach == true) {
			freshApproach = false;
			audioSource.PlayOneShot(sound);
		}
		else if (distance > approachDistance && freshApproach == false) {
			freshApproach = true;
		}
	}
}