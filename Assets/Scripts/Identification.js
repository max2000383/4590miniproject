var sound : AudioClip;
var player : GameObject;

function Start () {

}

function Update () {
	if (Input.GetKeyDown(KeyCode.I)) {
		var distance = Vector3.Distance(gameObject.transform.position, player.transform.position);
		if (distance < 5.0) {
			audio.PlayOneShot(sound);
		}
	}
}