<?php 

    
    $url = $_SERVER['REQUEST_URI'];
    
    $url_components = parse_url($url);
    
    $get_nama = $this->input->get('nama', TRUE);
    

    if(!empty($get_nama)){   
        
        $nama_undangan = str_replace('-', ' ', $get_nama);
    
    }

                
    $poto = base_url().'uploads/weddings/'.$couple->row()->bride_photo;

    $cover = str_replace('/', '\\/', $poto);
    
    
    $bride_poto = str_replace('/', '\\/', base_url().'uploads/weddings/'.$couple->row()->bride_photo);            
?>


<?php 

// if(!isset($wedding_id)) return false;


$sliders = $this->Common_model->commonQuery("select * from wedding_slider Where wedding_id = $wedding_id ORDER BY img_order");

$test_url = base_url();


// tesx($get_nama,$wedding_id,$sliders->result_array());

?>


		

               
            <!-- COVER -->
               
                <section data-dce-background-color="#FFFFFF" class="elementor-section elementor-top-section elementor-element elementor-element-53d0ebcf s_C elementor-section-full_width elementor-section-height-default elementor-section-height-default wdp-sticky-section-no" data-id="53d0ebcf" data-element_type="section" id="s_C"
                    data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;_ha_eqh_enable&quot;:false}">
                    <div class="elementor-container elementor-column-gap-no">
                        <div class="elementor-row">
                            <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-40cd2b45 wdp-sticky-section-no" data-id="40cd2b45" data-element_type="column">
                                <div class="elementor-column-wrap elementor-element-populated">
                                    <div class="elementor-widget-wrap">
                                            <section data-dce-background-overlay-color="#0000004A" class="elementor-section elementor-inner-section elementor-element elementor-element-6a7e5d6e elementor-section-full_width elementor-section-height-min-height elementor-section-content-middle elementor-section-height-default wdp-sticky-section-no" data-id="6a7e5d6e" data-element_type="section" 
                                            data-settings="{&quot;background_background&quot;:&quot;slideshow&quot;,&quot;background_slideshow_gallery&quot;:[{&quot;id&quot;:1,&quot;url&quot;:&quot;https://invitee.solusiitkreasi.com/uploads/slider/cover.JPG&quot;}],&quot;background_slideshow_slide_duration&quot;:500,&quot;background_slideshow_transition_duration&quot;:1500,&quot;background_slideshow_loop&quot;:&quot;yes&quot;,&quot;background_slideshow_slide_transition&quot;:&quot;fade&quot;,&quot;_ha_eqh_enable&quot;:false}">
                                            <div class="elementor-background-overlay"></div>
                                            <div class="elementor-container elementor-column-gap-no">
                                                <div class="elementor-row">
                                                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-64d27d56 animated-slow wdp-sticky-section-no" data-id="64d27d56" data-element_type="column" data-settings="{&quot;animation&quot;:&quot;none&quot;}">
                                                        <div class="elementor-column-wrap elementor-element-populated">
                                                            <div class="elementor-widget-wrap">
                                                                <div class="elementor-element elementor-element-2ce1ae24 wdp-sticky-section-no elementor-widget elementor-widget-spacer" data-id="2ce1ae24" data-element_type="widget" data-widget_type="spacer.default">
                                                                    <div class="elementor-widget-container">
                                                                        <div class="elementor-spacer">
                                                                            <div class="elementor-spacer-inner"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-9fc6c6d wdp-sticky-section-no" data-id="9fc6c6d" data-element_type="column">
                                                        <div class="elementor-column-wrap elementor-element-populated">
                                                            <div class="elementor-widget-wrap">
                                                                <div class="elementor-element elementor-element-78c3da9c wdp-sticky-section-no elementor-invisible elementor-widget elementor-widget-heading" data-id="78c3da9c" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
                                                                    <div class="elementor-widget-container">
                                                                        <h2 class="elementor-heading-title elementor-size-default">The Wedding of</h2>
                                                                    </div>
                                                                </div>
                                                                <div class="elementor-element elementor-element-25ccc26a animated-slow wdp-sticky-section-no elementor-invisible elementor-widget elementor-widget-heading" data-id="25ccc26a" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
                                                                    <div class="elementor-widget-container">
                                                                        <h2 class="elementor-heading-title elementor-size-default"> <?php echo $info->wedding_title ?></h2>
                                                                    </div>
                                                                </div>
                                                                <div class="elementor-element elementor-element-cff7dc5 wdp-sticky-section-no elementor-widget elementor-widget-spacer" data-id="cff7dc5" data-element_type="widget" data-widget_type="spacer.default">
                                                                    <div class="elementor-widget-container">
                                                                        <div class="elementor-spacer">
                                                                            <div class="elementor-spacer-inner"></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="elementor-element elementor-element-4245d0f0 wdp-sticky-section-no elementor-widget elementor-widget-heading" data-id="4245d0f0" data-element_type="widget" data-widget_type="heading.default">
                                                                    <div class="elementor-widget-container">
                                                                        <h2 class="elementor-heading-title elementor-size-default">Kepada Yth.</h2>
                                                                    </div>
                                                                </div>
                                                                <div class="elementor-element elementor-element-5cc943ac wdp-sticky-section-no elementor-widget elementor-widget-heading" data-id="5cc943ac" data-element_type="widget" data-widget_type="heading.default">
                                                                    <div class="elementor-widget-container">
                                                                        <h2 class="elementor-heading-title elementor-size-default"> <?php if(!empty($nama_undangan)) {?> &quot;<?php echo strtoupper($nama_undangan) ?>&quot; <?php } ?> </h2>
                                                                    </div>
                                                                </div>
                                                                <div data-dce-background-color="#61CE7000" class="elementor-element elementor-element-68a4ed05 elementor-align-center b_c elementor-mobile-align-center wdp-sticky-section-no elementor-widget elementor-widget-button" data-id="68a4ed05" data-element_type="widget" data-widget_type="button.default">
                                                                    <div class="elementor-widget-container">
                                                                        <div class="elementor-button-wrapper">
                                                                            <a class="elementor-button elementor-size-sm" role="button" id="b_c">
                                                                                <span class="elementor-button-content-wrapper">
                                                                                    <span class="elementor-button-icon elementor-align-icon-left">
                                                                                        <i aria-hidden="true" class="far fa-envelope-open"></i>
                                                                                    </span>
                                                                                    <span class="elementor-button-text">Buka Undangan</span>
                                                                                </span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                
            <!--//END COVER -->
            
            
            
                
            
                