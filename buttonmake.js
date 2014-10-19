/*
document.addEventListener('DOMContentLoaded', function () {
});
*/
for(var i=0; i<5; i++){
      document.write("Audio File\n");
      var btn = document.createElement("BUTTON");
      btn.innerHTML="Pause";
      btn.setAttribute("onclick","myFunction()");
      document.body.appendChild(btn);
      
      var slider = new Slider('#ex1', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});
      document.write("<BR/>");
  }
