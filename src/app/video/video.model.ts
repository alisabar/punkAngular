export class Video{
    
public  id:Number=-1;
public  name:String="";
public  embedded:String="";
public  location:String="";
public  user:String="";
public  band:String="";
public  song:String="";
public  concert_name:String="";
public  concert_date:String="";    
public number_of_views:Number=0;

constructor(id:Number,name:String,embedded:String,location:String,user:String,band:String,song:String,concert_name:String,concert_date:String,number_of_views:Number){

this.id=id;
this.name=name;
this.embedded=embedded;
this.location=location;
this.user=user;
this.band=band;
this.song=song;
this.concert_name=concert_name;
this.concert_date=concert_date;
this.number_of_views=number_of_views;

}
}
