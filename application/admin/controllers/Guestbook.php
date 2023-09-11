<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Guestbook extends MY_Controller {	
	
	function __construct() {
        parent::__construct();
        if(!$this->isLogin())
		{
			
			redirect('/logins','location');
		}
		
		if(!$this->has_method_access())
		{
			redirect('/main/','location');
		}
    }
	
	public function index()
	{
		$this->manage();
	}
	
	
	public function manage()
	{
		
		$CI =& get_instance();
		$theme = $CI->config->item('theme');
		
		$this->load->library('Global_lib');
		
		
		$data = $this->global_lib->uri_check();
		
		$data['myHelpers']=$this;
		$this->load->model('Common_model');
		$this->load->helper('text');
		
		
		$data['query'] = $this->Common_model->commonQuery("select * from wedding_invitations order by id");
			
		$evns = $this->Common_model->commonQuery("SELECT event_id,event_title,event_date,event_time FROM wedding_event");
		$data['events'] = $evns->result();
		$data['theme']=$theme;
		
		$data['content'] = "$theme/guestbook/manage";
		
		$this->load->view("$theme/header",$data);
		
	}
	
	
	public function delete($rowid)
	{
		$CI =& get_instance();
		$this->load->library('Global_lib');
		
		if(!is_array($rowid))
			$rowid	= $this->global_lib->DecryptClientId($rowid);
		$this->load->model('Common_model');
			
		$tbl='wedding_invitations';
		$pid='id';
		$url='/attendee/manage/';	 	
		$fld='Attendee';
		
		$rows= $this->Common_model->commonDelete($tbl,$rowid,$pid);
		
		
		$_SESSION['msg'] = '<div class="alert alert-success alert-dismissable" >
								<button aria-hidden="true" data-dismiss="alert" class="close" type="button">×</button>
								
								'.$rows.' '.$fld.' Deleted Successfully.
							</div>
							';
		redirect($url,'location','301');	
	}
	

}
