#pragma strict
var thing: Alerts;

function OnTriggerEnter (other : Collider) {
		thing = other.GetComponent(Alerts);
		thing.isFallAlerted = false;
		other.GetComponent(Alerts).fallAlert();
}
