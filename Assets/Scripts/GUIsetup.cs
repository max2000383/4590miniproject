using UnityEngine;
using System.Collections;
using System;
public class GUIsetup : MonoBehaviour {
	
	// Use this for initialization
	void Start () {
		
	}
	public int heartbeat=55;
	public int temperature=40;
	public float counter=0;
	public float CordX=10;
	public int bpOne=120;
	public int bpTwo=80;
	public float CordZ=10;
	public GUISkin MenuSkin;
	public int WarningSelector=1;
	public string Warning;
	public GUITexture map;
	public int guiMode=1;
	public Texture atest;
	void OnGUI () 
	{	
		
		if(WarningSelector!=1&&WarningSelector!=2&&WarningSelector!=3&&WarningSelector!=4&&WarningSelector!=5)WarningSelector=1;
		if(guiMode!=1&&guiMode!=2)
		{
			
			GUI.BeginGroup(new Rect((int)(Screen.width*0.6)-40, (int)(Screen.height*.05), 800, 600));
			GUI.DrawTexture(new Rect(150,0,300,300),atest);
			GUI.EndGroup();
			//display the map
		}
		switch (WarningSelector)
		{
		case 5:
			Warning="USER EXHAUSTION ONCOMING";
			break;	
		case 4:
			Warning="HIKER IN DISTRESS";
			break;	
		case 3:
			Warning="FOREST FIRE APPROACHING";
			break;	
		case 2:
			Warning="STORM APPROACHING";
			break;
		case 1:
			Warning=" ";
			break;
			
		}
		//GUI.skin = MenuSkin;
		//GUI.color=Color.grey;
		counter+=Time.deltaTime;
		if(counter>4){
			counter=0;
			if(heartbeat>60)heartbeat-=UnityEngine.Random.Range(0,4);
			else heartbeat+=UnityEngine.Random.Range(0,4);
			if(temperature>40)temperature-=UnityEngine.Random.Range(0,2);
			else temperature+=UnityEngine.Random.Range(0,2);
			if(bpOne>120)bpOne-=UnityEngine.Random.Range(0,2);
			else bpOne+=UnityEngine.Random.Range(0,2);
			if(bpTwo>80)bpTwo-=UnityEngine.Random.Range(0,2);
			else bpTwo+=UnityEngine.Random.Range(0,2);
			CordZ=(80+transform.position.z);
			CordX=(transform.position.x+80);
		}
		//Warning="atest";
		//It should situated in the upper right corner of the visual field and should be 40% of the view wide and 30% tall (the Glass display has an aspect ratio of 4:3)
		if(guiMode==1)
		{
			GUI.BeginGroup(new Rect((int)(Screen.width*0.6)-40, (int)(Screen.height*.05), 800, 600));
			GUI.Box(new Rect (130,10, 320, 80), "Heart Rate: "+heartbeat+"\nBlood Pressure: "+bpOne+"/"+bpTwo+"\n Avg Temperature:"+
			        temperature+"C \n Incoming weather: Stormy\nCoordinates: 200.01.2"+CordX+", 438.35.1"+CordZ);
			GUI.Box(new Rect(0,0,(int)(Screen.width*0.4),(int)(Screen.height*0.3))," ");
			GUI.Box(new Rect(10,10,100,25),+DateTime.Now.Hour+":"+DateTime.Now.Minute+":"+DateTime.Now.Second);
			if(counter>2&&WarningSelector>1)GUI.Box(new Rect(10,120,440,40),Warning);
			GUI.EndGroup();
		}
		else if (guiMode==2){

			GUI.BeginGroup(new Rect((int)(Screen.width*0.6)-40, (int)(Screen.height*.05), 800, 600));
			GUI.DrawTexture(new Rect(150,0,300,300),atest);
			GUI.EndGroup();
			//display the map
		}

	}
	// Update is called once per frame
	void Update()
		
	{
		if(Input.GetKeyDown(KeyCode.Y))
		{
			
			if(guiMode==1)guiMode=2;
			else guiMode=1;
			
		}
		
		
		if(Input.GetKeyDown(KeyCode.U))
		{	
			guiMode=1;
			if(WarningSelector==2)WarningSelector=1;
			else WarningSelector=2;
			
		}
		if(Input.GetKeyDown(KeyCode.O))
		{
			guiMode=1;
			if(WarningSelector==3)WarningSelector=1;
			else WarningSelector=3;
			
		}
		if(Input.GetKeyDown(KeyCode.G))
		{
			guiMode=1;
			if(WarningSelector==4)WarningSelector=1;
			else WarningSelector=4;
			
		}
		if(Input.GetKeyDown(KeyCode.H))
		{
			guiMode=1;
			if(WarningSelector==5)WarningSelector=1;
			else WarningSelector=5;
			
		}

	}
}
