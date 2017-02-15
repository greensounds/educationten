<?php
	if( !isset($_GET['p']) )
	{
		//Cargar el contenido de inicio
		$titulo = 'Inicio';
		$contenido = 'inc/inicio.php';
	}
	else if( $_GET['p']=='usa' /*|| $_GET['p']=='acerca/'*/ )
	{
		//Cargar el contenido de usa
		$titulo = 'usa';
		$contenido = 'inc/usa.php';
	}
	else if( $_GET['p']=='mexico' )
	{
		//Cargar el contenido de mexico
		$titulo = 'mexico';
		$contenido = 'inc/mexico.php';
	}
	else if( $_GET['p']=='about' )
	{
		//Cargar el contenido de about
		$titulo = 'about';
		$contenido = 'inc/about.php';
	}
	else if( $_GET['p']=='alabama' )
	{
		//Cargar el contenido de about
		$titulo = 'alabama';
		$contenido = 'inc/states/alabama.php';
	}
	else if( $_GET['p']=='alaska' )
	{
		//Cargar el contenido de about
		$titulo = 'alaska';
		$contenido = 'inc/states/alaska.php';
	}
	else if( $_GET['p']=='arizona' )
	{
		//Cargar el contenido de about
		$titulo = 'arizona';
		$contenido = 'inc/states/arizona.php';
	}
	else if( $_GET['p']=='arkansas' )
	{
		//Cargar el contenido de about
		$titulo = 'arkansas';
		$contenido = 'inc/states/arkansas.php';
	}
	else if ( $_GET['p'] == 'california')
	{
		//cargar el contenido del estado
		$titulo = 'california';
		$contenido = 'inc/states/california.php';
	}
	else if ( $_GET['p'] == 'colorado')
	{
		//cargar el contenido del estado
		$titulo = 'colorado';
		$contenido = 'inc/states/colorado.php';
	}
	else if ( $_GET['p'] == 'connecticut')
	{
		//cargar el contenido del estado
		$titulo = 'connecticut';
		$contenido = 'inc/states/connecticut.php';
	}
	else if ( $_GET['p'] == 'delaware')
	{
		//cargar el contenido del estado
		$titulo = 'delaware';
		$contenido = 'inc/states/delaware.php';
	}
	else if ( $_GET['p'] == 'dc')
	{
		//cargar el contenido del estado
		$titulo = 'dc';
		$contenido = 'inc/states/dc.php';
	}
	else if ( $_GET['p'] == 'florida')
	{
		//cargar el contenido del estado
		$titulo = 'florida';
		$contenido = 'inc/states/florida.php';
	}
	else if ( $_GET['p'] == 'georgia')
	{
		//cargar el contenido del estado
		$titulo = 'georgia';
		$contenido = 'inc/states/georgia.php';
	}
	else if ( $_GET['p'] == 'hawaii')
	{
		//cargar el contenido del estado
		$titulo = 'hawaii';
		$contenido = 'inc/states/hawaii.php';
	}
	else if ( $_GET['p'] == 'idaho')
	{
		//cargar el contenido del estado
		$titulo = 'idaho';
		$contenido = 'inc/states/idaho.php';
	}
	else if ( $_GET['p'] == 'illinois')
	{
		//cargar el contenido del estado
		$titulo = 'illinois';
		$contenido = 'inc/states/illinois.php';
	}
	else if ( $_GET['p'] == 'indiana')
	{
		//cargar el contenido del estado
		$titulo = 'indiana';
		$contenido = 'inc/states/indiana.php';
	}
	else if ( $_GET['p'] == 'iowa')
	{
		//cargar el contenido del estado
		$titulo = 'iowa';
		$contenido = 'inc/states/iowa.php';
	}
	else if ( $_GET['p'] == 'kansas')
	{
		//cargar el contenido del estado
		$titulo = 'kansas';
		$contenido = 'inc/states/kansas.php';
	}
	else if ( $_GET['p'] == 'kentucky')
	{
		//cargar el contenido del estado
		$titulo = 'kentucky';
		$contenido = 'inc/states/kentucky.php';
	}
	else if ( $_GET['p'] == 'louisiana')
	{
		//cargar el contenido del estado
		$titulo = 'louisiana';
		$contenido = 'inc/states/louisiana.php';
	}
	else if ( $_GET['p'] == 'maine')
	{
		//cargar el contenido del estado
		$titulo = 'maine';
		$contenido = 'inc/states/maine.php';
	}
	else if ( $_GET['p'] == 'maryland')
	{
		//cargar el contenido del estado
		$titulo = 'maryland';
		$contenido = 'inc/states/maryland.php';
	}
	else if ( $_GET['p'] == 'ma')
	{
		//cargar el contenido del estado
		$titulo = 'ma';
		$contenido = 'inc/states/ma.php';
	}
	else if ( $_GET['p'] == 'michigan')
	{
		//cargar el contenido del estado
		$titulo = 'michigan';
		$contenido = 'inc/states/michigan.php';
	}
	else if ( $_GET['p'] == 'minnesota')
	{
		//cargar el contenido del estado
		$titulo = 'minnesota';
		$contenido = 'inc/states/minnesota.php';
	}
	else if ( $_GET['p'] == 'ms')
	{
		//cargar el contenido del estado
		$titulo = 'ms';
		$contenido = 'inc/states/ms.php';
	}
	else if ( $_GET['p'] == 'misouri')
	{
		//cargar el contenido del estado
		$titulo = 'misouri';
		$contenido = 'inc/states/.php';
	}
	else if ( $_GET['p'] == 'misouri')
	{
		//cargar el contenido del estado
		$titulo = '';
		$contenido = 'inc/states/.php';
	}
	else if ( $_GET['p'] == 'montana')
	{
		//cargar el contenido del estado
		$titulo = 'montana';
		$contenido = 'inc/states/montana.php';
	}
	else if ( $_GET['p'] == 'nebraska')
	{
		//cargar el contenido del estado
		$titulo = 'nebraska';
		$contenido = 'inc/states/nebraska.php';
	}
	else if ( $_GET['p'] == 'nevada')
	{
		//cargar el contenido del estado
		$titulo = 'nevada';
		$contenido = 'inc/states/nevada.php';
	}
	else if ( $_GET['p'] == 'nh')
	{
		//cargar el contenido del estado
		$titulo = 'nh';
		$contenido = 'inc/states/nh.php';
	}
	else if ( $_GET['p'] == 'nj')
	{
		//cargar el contenido del estado
		$titulo = 'nj';
		$contenido = 'inc/states/nj.php';
	}
	else if ( $_GET['p'] == 'ny')
	{
		//cargar el contenido del estado
		$titulo = 'ny';
		$contenido = 'inc/states/ny.php';
	}
	else if ( $_GET['p'] == 'nc')
	{
		//cargar el contenido del estado
		$titulo = 'nc';
		$contenido = 'inc/states/nc.php';
	}
	else if ( $_GET['p'] == 'nd')
	{
		//cargar el contenido del estado
		$titulo = 'nd';
		$contenido = 'inc/states/nd.php';
	}
	else if ( $_GET['p'] == 'ohio')
	{
		//cargar el contenido del estado
		$titulo = 'ohio';
		$contenido = 'inc/states/ohio.php';
	}
	else if ( $_GET['p'] == 'oklahoma')
	{
		//cargar el contenido del estado
		$titulo = 'oklahoma';
		$contenido = 'inc/states/oklahoma.php';
	}
	else if ( $_GET['p'] == 'oregon')
	{
		//cargar el contenido del estado
		$titulo = 'oregon';
		$contenido = 'inc/states/oregon.php';
	}
	else if ( $_GET['p'] == 'pennsylvania')
	{
		//cargar el contenido del estado
		$titulo = 'pennsylvania';
		$contenido = 'inc/states/pennsylvania.php';
	}
	else if ( $_GET['p'] == 'rhodeisland')
	{
		//cargar el contenido del estado
		$titulo = 'rhodeisland';
		$contenido = 'inc/states/rhodeisland.php';
	}
	else if ( $_GET['p'] == 'sc')
	{
		//cargar el contenido del estado
		$titulo = 'sc';
		$contenido = 'inc/states/sc.php';
	}
	else if ( $_GET['p'] == 'sd')
	{
		//cargar el contenido del estado
		$titulo = 'sd';
		$contenido = 'inc/states/sd.php';
	}
	else if ( $_GET['p'] == 'tennessee')
	{
		//cargar el contenido del estado
		$titulo = 'tennessee';
		$contenido = 'inc/states/tennessee.php';
	}
	else if ( $_GET['p'] == 'texas')
	{
		//cargar el contenido del estado
		$titulo = 'texas';
		$contenido = 'inc/states/texas.php';
	}
	else if ( $_GET['p'] == 'utah')
	{
		//cargar el contenido del estado
		$titulo = 'utah';
		$contenido = 'inc/states/utah.php';
	}
	else if ( $_GET['p'] == 'vermont')
	{
		//cargar el contenido del estado
		$titulo = 'vermont';
		$contenido = 'inc/states/vermont.php';
	}
	else if ( $_GET['p'] == 'virginia')
	{
		//cargar el contenido del estado
		$titulo = 'virginia';
		$contenido = 'inc/states/virginia.php';
	}
	else if ( $_GET['p'] == 'washington')
	{
		//cargar el contenido del estado
		$titulo = 'washington';
		$contenido = 'inc/states/washington.php';
	}
	else if ( $_GET['p'] == 'wa')
	{
		//cargar el contenido del estado
		$titulo = 'wa';
		$contenido = 'inc/states/wa.php';
	}
	else if ( $_GET['p'] == 'wisconsin')
	{
		//cargar el contenido del estado
		$titulo = 'wisconsin';
		$contenido = 'inc/states/wisconsin.php';
	}
	else if ( $_GET['p'] == 'wyoming')
	{
		//cargar el contenido del estado
		$titulo = 'wyoming';
		$contenido = 'inc/states/wyoming.php';
	}
	else if ( $_GET['p'] == 'aguascalientes')
	{
		//cargar el contenido del estado
		$titulo = 'aguascalientes';
		$contenido = 'inc/states/aguascalientes.php';
	}
	else if ( $_GET['p'] == 'baja-california')
	{
		//cargar el contenido del estado
		$titulo = 'baja-california';
		$contenido = 'inc/states/baja-california.php';
	}
	else if ( $_GET['p'] == 'baja-california-sur')
	{
		//cargar el contenido del estado
		$titulo = 'baja-california-sur';
		$contenido = 'inc/states/baja-california-sur.php';
	}
	else if ( $_GET['p'] == 'campeche')
	{
		//cargar el contenido del estado
		$titulo = 'campeche';
		$contenido = 'inc/states/campeche.php';
	}
	else if ( $_GET['p'] == 'coahuila')
	{
		//cargar el contenido del estado
		$titulo = 'coahuila';
		$contenido = 'inc/states/coahuila.php';
	}
	else if ( $_GET['p'] == 'colima')
	{
		//cargar el contenido del estado
		$titulo = 'colima';
		$contenido = 'inc/states/colima.php';
	}
	else if ( $_GET['p'] == 'chiapas')
	{
		//cargar el contenido del estado
		$titulo = 'chiapas';
		$contenido = 'inc/states/chiapas.php';
	}
	else if ( $_GET['p'] == 'chihuahua')
	{
		//cargar el contenido del estado
		$titulo = 'chihuahua';
		$contenido = 'inc/states/chihuahua.php';
	}
	else if ( $_GET['p'] == 'df')
	{
		//cargar el contenido del estado
		$titulo = 'df';
		$contenido = 'inc/states/df.php';
	}
	else if ( $_GET['p'] == 'durango')
	{
		//cargar el contenido del estado
		$titulo = 'durango';
		$contenido = 'inc/states/durango.php';
	}
	else if ( $_GET['p'] == 'guanajuato')
	{
		//cargar el contenido del estado
		$titulo = 'guanajuato';
		$contenido = 'inc/states/guanajuato.php';
	}
	else if ( $_GET['p'] == 'guerrero')
	{
		//cargar el contenido del estado
		$titulo = 'guerrero';
		$contenido = 'inc/states/guerrero.php';
	}
	else if ( $_GET['p'] == 'hidalgo')
	{
		//cargar el contenido del estado
		$titulo = 'hidalgo';
		$contenido = 'inc/states/hidalgo.php';
	}
	else if ( $_GET['p'] == 'jalisco')
	{
		//cargar el contenido del estado
		$titulo = 'jalisco';
		$contenido = 'inc/states/jalisco.php';
	}
	else if ( $_GET['p'] == 'edo-mexico')
	{
		//cargar el contenido del estado
		$titulo = 'edo-de-mexico';
		$contenido = 'inc/states/edo-mexico.php';
	}
	else if ( $_GET['p'] == 'michoacan')
	{
		//cargar el contenido del estado
		$titulo = 'michoacan';
		$contenido = 'inc/states/michoacan.php';
	}
	else if ( $_GET['p'] == 'nayarit')
	{
		//cargar el contenido del estado
		$titulo = 'nayarit';
		$contenido = 'inc/states/nayarit.php';
	}
	else if ( $_GET['p'] == 'nuevo-leon')
	{
		//cargar el contenido del estado
		$titulo = 'nuevo-leon';
		$contenido = 'inc/states/nuevo-leon.php';
	}
	else if ( $_GET['p'] == 'oaxaca')
	{
		//cargar el contenido del estado
		$titulo = 'oaxaca';
		$contenido = 'inc/states/oaxaca.php';
	}
	else if ( $_GET['p'] == 'puebla')
	{
		//cargar el contenido del estado
		$titulo = 'puebla';
		$contenido = 'inc/states/puebla.php';
	}
	else if ( $_GET['p'] == 'queretaro')
	{
		//cargar el contenido del estado
		$titulo = 'queretaro';
		$contenido = 'inc/states/queretaro.php';
	}
	else if ( $_GET['p'] == 'quintana-roo')
	{
		//cargar el contenido del estado
		$titulo = 'quintana-roo';
		$contenido = 'inc/states/quintana-roo.php';
	}
	else if ( $_GET['p'] == 'san-luis-potosi')
	{
		//cargar el contenido del estado
		$titulo = 'san-luis-potosi';
		$contenido = 'inc/states/san-luis-potosi.php';
	}
	else if ( $_GET['p'] == 'sinaloa')
	{
		//cargar el contenido del estado
		$titulo = 'sinaloa';
		$contenido = 'inc/states/sinaloa.php';
	}
	else if ( $_GET['p'] == 'sonora')
	{
		//cargar el contenido del estado
		$titulo = 'sonora';
		$contenido = 'inc/states/sonora.php';
	}
	else if ( $_GET['p'] == 'tabasco')
	{
		//cargar el contenido del estado
		$titulo = 'tabasco';
		$contenido = 'inc/states/tabasco.php';
	}
	else if ( $_GET['p'] == 'tamaulipas')
	{
		//cargar el contenido del estado
		$titulo = 'tamaulipas';
		$contenido = 'inc/states/tamaulipas.php';
	}
	else if ( $_GET['p'] == 'tlaxcala')
	{
		//cargar el contenido del estado
		$titulo = 'tlaxcala';
		$contenido = 'inc/states/tlaxcala.php';
	}
	else if ( $_GET['p'] == 'chihuahua')
	{
		//cargar el contenido del estado
		$titulo = 'chihuahua';
		$contenido = 'inc/states/chihuahua.php';
	}
	else if ( $_GET['p'] == 'veracruz')
	{
		//cargar el contenido del estado
		$titulo = 'veracruz';
		$contenido = 'inc/states/veracruz.php';
	}
	else if ( $_GET['p'] == 'yucatan')
	{
		//cargar el contenido del estado
		$titulo = 'yucatan';
		$contenido = 'inc/states/yucatan.php';
	}
	else if ( $_GET['p'] == 'zacatecas')
	{
		//cargar el contenido del estado
		$titulo = 'zacatecas';
		$contenido = 'inc/states/zacatecas.php';
	}
	else
	{
		//Cargar Error 404
		$titulo = 'Error 404';
		$contenido = 'inc/404.php';
	}
