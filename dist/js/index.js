require('../style/index.css');

const renderTime = () => {
	return global.paseDate(null, 'yyyy-MM-dd HH-mm-ss');
}


$(() => {
	window.setInterval(() => {
		$('#timer').html(renderTime());
	}, 1000);

	// jeDate("#input", {
 //        format: "YYYY-MM-DD", //YYYY-MM-DD hh:mm:ss
 //        onClose: false,
 //        theme: { bgcolor: "#3396fb", color: "#ffffff", pnColor: "#3396fb" },
	// });

	$('#timer').html(renderTime());
})