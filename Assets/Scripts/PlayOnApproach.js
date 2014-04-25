var player : GameObject;
var dummy : GameObject;
var sound : AudioClip;
private var audioSource;
var approachDistance : float;
private var playOnApproach : boolean = true;
private var fadeOut : boolean = false;
var fadeOutSpeed : float;
var volumeScale : float;

function Start () {
	audioSource = GameObject.Instantiate(dummy.AddComponent(AudioSource));
	audioSource.clip = sound;
}

function Update () {
	if (Input.GetKeyDown(KeyCode.P)) {
		playOnApproach = !playOnApproach;
	}

	var distance = Vector3.Distance(gameObject.transform.position, player.transform.position);
	audioSource.transform.position = gameObject.collider.ClosestPointOnBounds(player.transform.position);

	if (!audioSource.isPlaying && playOnApproach && distance < approachDistance) {
		audioSource.volume = volumeScale;
		audioSource.Play();
	}

	else if (audioSource.isPlaying && !playOnApproach) {
		audioSource.Stop();
	}

	else if (fadeOut) {
		audioSource.volume -= fadeOutSpeed*volumeScale;
		if (audioSource.volume <= 0) {
			fadeOut = false;
			audioSource.Stop();
		}
	}

	else if (audioSource.isPlaying && distance > approachDistance) {
		fadeOut = true;
	}
}