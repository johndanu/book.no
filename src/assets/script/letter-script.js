window.onload = function () {
	var myCanvas = document.getElementById("myCanvas");
	var ctx = myCanvas.getContext("2d");
	var bkGround = new Image();
	bkGround.onload = function () {
		ctx.drawImage(bkGround, 0, 0, 500,500);
	};
	bkGround.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Tamil_A.svg/1280px-Tamil_A.svg.png';

	// Fill Window Width and Height
	// myCanvas.width = window.innerWidth;
	// myCanvas.height = window.innerHeight;
	myCanvas.width = 500;
	myCanvas.height = 500;



	// Set Background Color
	ctx.fillStyle = "#555";
	ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

	// Mouse Event Handlers
	if (myCanvas) {
		var isDown = false;
		var canvasX, canvasY;
		ctx.lineWidth = 10;

		$(myCanvas)
			.mousedown(function (e) {
				isDown = true;
				ctx.beginPath();
				canvasX = e.pageX - myCanvas.offsetLeft;
				canvasY = e.pageY - myCanvas.offsetTop;
				ctx.moveTo(canvasX, canvasY);
			})
			.mousemove(function (e) {
				if (isDown !== false) {
					canvasX = e.pageX - myCanvas.offsetLeft;
					canvasY = e.pageY - myCanvas.offsetTop;
					ctx.lineTo(canvasX, canvasY);
					ctx.strokeStyle = "#fff";
					ctx.stroke();
				}
			})
			.mouseup(function (e) {
				isDown = false;
				ctx.closePath();
			});
	}

	// Touch Events Handlers
	draw = {
		started: false,
		start: function (evt) {

			ctx.beginPath();
			ctx.moveTo(
				evt.touches[0].pageX,
				evt.touches[0].pageY
			);

			this.started = true;

		},
		move: function (evt) {

			if (this.started) {
				ctx.lineTo(
					evt.touches[0].pageX,
					evt.touches[0].pageY
				);

				ctx.strokeStyle = white;
				ctx.lineWidth = 10;
				ctx.stroke();
			}

		},
		end: function (evt) {
			this.started = false;
		}
	};

	// Touch Events
	myCanvas.addEventListener('touchstart', draw.start, false);
	myCanvas.addEventListener('touchend', draw.end, false);
	myCanvas.addEventListener('touchmove', draw.move, false);

	// Disable Page Move
	document.body.addEventListener('touchmove',function(evt){
		evt.preventDefault();
	},false);
};