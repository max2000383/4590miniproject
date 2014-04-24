var sound : AudioClip;
var player : GameObject;
private var audioSource;
var volumeScale : float = .5;

function Start () {
	audioSource = player.AddComponent(AudioSource);
}

function Update () {
	if (Input.GetKeyDown(KeyCode.I)) {
		var distance = Vector3.Distance(gameObject.transform.position, player.transform.position);
		if (distance < 5.0) {
			audioSource.PlayOneShot(sound, volumeScale);
		}
	}
}