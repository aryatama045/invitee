        
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
        
        <!-- Cover Pembukaan-->
         
            <section data-dce-background-overlay-color="#0000002B" class="elementor-section elementor-top-section elementor-element elementor-element-376ffa83 elementor-section-height-min-height elementor-section-full_width elementor-section-items-bottom elementor-section-height-default wdp-sticky-section-no" data-id="376ffa83" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;slideshow&quot;,&quot;background_slideshow_gallery&quot;:[{&quot;id&quot;:99790,&quot;url&quot;:&quot;https:\/\/ts-invitation.com\/wp-content\/uploads\/2023\/08\/HILDA-GUI10.jpg&quot;},{&quot;id&quot;:99791,&quot;url&quot;:&quot;https:\/\/ts-invitation.com\/wp-content\/uploads\/2023\/08\/HILDA-GUI11.jpg&quot;},{&quot;id&quot;:99792,&quot;url&quot;:&quot;https:\/\/ts-invitation.com\/wp-content\/uploads\/2023\/08\/HILDA-GUI12.jpg&quot;}],&quot;background_slideshow_slide_duration&quot;:1000,&quot;background_slideshow_transition_duration&quot;:2000,&quot;background_slideshow_loop&quot;:&quot;yes&quot;,&quot;background_slideshow_slide_transition&quot;:&quot;fade&quot;,&quot;_ha_eqh_enable&quot;:false}">
                <div class="elementor-background-overlay"></div>
                <div class="elementor-container elementor-column-gap-default">
                    <div class="elementor-row">
                        <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6ece48ae wdp-sticky-section-no" data-id="6ece48ae" data-element_type="column">
                            <div class="elementor-column-wrap elementor-element-populated">
                                <div class="elementor-widget-wrap">
                                    <div class="elementor-element elementor-element-655750f9 wdp-sticky-section-no elementor-invisible elementor-widget elementor-widget-heading" data-id="655750f9" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
                                        <div class="elementor-widget-container">
                                            <h2 class="elementor-heading-title elementor-size-default">We are getting married</h2>
                                        </div>
                                    </div>
                                    <div class="elementor-element elementor-element-e8ec957 wdp-sticky-section-no elementor-widget elementor-widget-heading" data-id="e8ec957" data-element_type="widget" data-widget_type="heading.default">
                                        <div class="elementor-widget-container">
                                            <h2 class="elementor-heading-title elementor-size-default">Hilda &Gui</h2>
                                        </div>
                                    </div>
                                    <div class="elementor-element elementor-element-2a5f81bb wdp-sticky-section-no elementor-widget elementor-widget-spacer" data-id="2a5f81bb" data-element_type="widget" data-widget_type="spacer.default">
                                        <div class="elementor-widget-container">
                                            <div class="elementor-spacer">
                                                <div class="elementor-spacer-inner"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <section class="elementor-section elementor-inner-section elementor-element elementor-element-23442556 elementor-section-boxed elementor-section-height-default elementor-section-height-default wdp-sticky-section-no" data-id="23442556" data-element_type="section" data-settings="{&quot;_ha_eqh_enable&quot;:false}">
                                        <div class="elementor-container elementor-column-gap-default">
                                            <div class="elementor-row">
                                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-2f5ca53 wdp-sticky-section-no" data-id="2f5ca53" data-element_type="column">
                                                    <div class="elementor-column-wrap elementor-element-populated">
                                                        <div class="elementor-widget-wrap">
                                                            <div class="elementor-element elementor-element-3244ad2 elementor-countdown--label-block wdp-sticky-section-no elementor-widget elementor-widget-countdown" data-id="3244ad2" data-element_type="widget" data-widget_type="countdown.default">
                                                                <div class="elementor-widget-container">
                                                                    <div class="elementor-countdown-wrapper" data-date="1694232000">
                                                                        <div class="elementor-countdown-item">
                                                                            <span class="elementor-countdown-digits elementor-countdown-days"></span>
                                                                            <span class="elementor-countdown-label">Days</span>
                                                                        </div>
                                                                        <div class="elementor-countdown-item">
                                                                            <span class="elementor-countdown-digits elementor-countdown-hours"></span>
                                                                            <span class="elementor-countdown-label">Hours</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="elementor-element elementor-element-94bea71 elementor-countdown--label-block wdp-sticky-section-no elementor-widget elementor-widget-countdown" data-id="94bea71" data-element_type="widget" data-widget_type="countdown.default">
                                                                <div class="elementor-widget-container">
                                                                    <div class="elementor-countdown-wrapper" data-date="1694232000">
                                                                        <div class="elementor-countdown-item">
                                                                            <span class="elementor-countdown-digits elementor-countdown-minutes"></span>
                                                                            <span class="elementor-countdown-label">Minutes</span>
                                                                        </div>
                                                                        <div class="elementor-countdown-item">
                                                                            <span class="elementor-countdown-digits elementor-countdown-seconds"></span>
                                                                            <span class="elementor-countdown-label">Seconds</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-4e35d07f wdp-sticky-section-no" data-id="4e35d07f" data-element_type="column">
                                                    <div class="elementor-column-wrap elementor-element-populated">
                                                        <div class="elementor-widget-wrap">
                                                            <div class="elementor-element elementor-element-1edbd13b wdp-sticky-section-no elementor-widget elementor-widget-heading" data-id="1edbd13b" data-element_type="widget" data-widget_type="heading.default">
                                                                <div class="elementor-widget-container">
                                                                    <h2 class="elementor-heading-title elementor-size-default">09/09/23</h2>
                                                                </div>
                                                            </div>
                                                            <div data-dce-background-color="#E3CAA500" class="elementor-element elementor-element-733b2ed9 elementor-mobile-align-center elementor-align-center wdp-sticky-section-no elementor-invisible elementor-widget elementor-widget-button" data-id="733b2ed9" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="button.default">
                                                                <div class="elementor-widget-container">
                                                                    <div class="elementor-button-wrapper">
                                                                        <a href="https://www.google.com/calendar/render?action=TEMPLATE&#038;text=The%20Wedding%20of%20Hilda%20and%20Gui&#038;details&#038;dates=20230909T110000/20230909T130000&#038;location=https://maps.app.goo.gl/75wkFMbe3mVNFwot6?g_st=ic" class="elementor-button-link elementor-button elementor-size-sm" role="button">
                                                                            <span class="elementor-button-content-wrapper">
                                                                                <span class="elementor-button-icon elementor-align-icon-left">
                                                                                    <i aria-hidden="true" class="far fa-calendar-alt"></i>
                                                                                </span>
                                                                                <span class="elementor-button-text">Save the Date</span>
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
                                    <div class="elementor-element elementor-element-674d04f wdp-sticky-section-no elementor-invisible elementor-widget elementor-widget-heading" data-id="674d04f" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
                                        <div class="elementor-widget-container">
                                            <h2 class="elementor-heading-title elementor-size-default">
                                                "Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah)."<br>(QS. Az-zariyat : 49)
                                            </h2>
                                        </div>
                                    </div>
                                    <div class="elementor-element elementor-element-1461268 wdp-sticky-section-no elementor-invisible elementor-widget elementor-widget-heading" data-id="1461268" data-element_type="widget" data-settings="{&quot;_animation&quot;:&quot;fadeInUp&quot;}" data-widget_type="heading.default">
                                        <div class="elementor-widget-container">
                                            <h2 class="elementor-heading-title elementor-size-default">#GUIdeHILDAforever</h2>
                                        </div>
                                    </div>
                                    <div class="elementor-element elementor-element-3823df4e wdp-sticky-section-no elementor-widget elementor-widget-spacer" data-id="3823df4e" data-element_type="widget" data-widget_type="spacer.default">
                                        <div class="elementor-widget-container">
                                            <div class="elementor-spacer">
                                                <div class="elementor-spacer-inner"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        <!--//END Cover Pembukaan-->