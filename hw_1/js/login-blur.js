	function MassiveBlurAttack()		
	{
		$(".login-popup").fadeIn("slow") .attr('style','display:block;');
		$(".blur-layer").fadeIn("slow").attr('style','-webkit-filter: blur(4px) contrast(50%);');
		return false;
	}
	function hideMassiveBlurAttack()
	{
		$(".login-popup").attr('style', 'display:none;');
		$(".blur-layer").attr('style','-webkit-filter: none;');
		return false;
	}