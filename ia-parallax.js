$(document).ready(function(){
   $screen = $(".screen");
   gyro.frequency = 1;

   gyro.startTracking(function(o){
      factorTop  = parseInt(gyro.getOrientation().gamma, 10);
      factorLeft = parseInt(gyro.getOrientation().beta, 10);

      positionTop  = factorTop * -1;
      positionLeft = factorLeft * -1;

      $screen.css("background-position", positionTop+"px " + positionLeft+"px");

      console.log("positionTop: "+positionTop + " | positionLeft: "+positionLeft);

   });
});
