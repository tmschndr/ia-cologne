$(document).ready(function(){
   $screen = $(".screen");
   offset = 200;
   gyro.frequency = 1;
   gyro.startTracking(function(o){
      gyroGamma = parseInt(gyro.getOrientation().gamma, 10);
      gyroBeta  = parseInt(gyro.getOrientation().beta, 10);

      positionTop  = (-0.5 * gyroGamma) - offset;
      positionLeft = (-0.5 * gyroBeta) - offset;

      $screen.css("background-position", positionTop+"px " + positionLeft+"px");
   });
});
