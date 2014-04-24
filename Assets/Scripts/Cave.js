var player : GameObject;
private var freshApproach : boolean = true;
var sound : AudioClip;
private var audioSource;

function Start () {
	audioSource = player.AddComponent(AudioSource);
}

function Update () {
	var distance = Vector3.Distance(gameObject.transform.position, player.transform.position);
		if (!audio.isPlaying) {
			// only have the sound play again if the player has left the cave area and returned
			if (distance < 15.0 && freshApproach == true) {
				freshApproach = false;
				audioSource.PlayOneShot(sound);
			}
			else if (distance > 15.0 && freshApproach == false) {
				freshApproach = true;
			}
		}
}