<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

if ( ! function_exists('mlx_get_lang'))
{
    function mlx_get_lang($keyword = "")
    { 	
		$CI =& get_instance();
		
		$output = $CI->lang->line($keyword); 
		if(empty($output))
			return $keyword;
		else	
			return $output;
    }   
}