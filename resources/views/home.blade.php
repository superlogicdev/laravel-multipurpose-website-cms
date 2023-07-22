@extends('layouts.front')

@section('title') {{$homesetting->meta_title}} @endsection
@section('meta') {{$homesetting->meta_description}} @endsection


@section('content')
    
    <div class="slider-niva-section">
        <div class="slider-niva owl-carousel">
            
            @foreach( $sliders as $slido )
            <!-- SLIDE1 -->
            <div class="slider-inner-niva">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-6 col-xl-5">
                            <div class="slider-content">
                               <h1>{!!$slido->heading1!!} </h1>
                               <h2>{!!$slido->heading2!!}</h2>
                               <a href="{!!$slido->button_link!!}" target="_self" class="btn btn-slider"><span>{!!$slido->button_text!!}</span></a>
                            </div>
                            
                         </div>
                         <div class="col-md-6">
                            <div class="slider-image">
                               <img width="450" height="450" class="owl-lazy img-fluid slider-img" data-src="{{$slido->photo ? '/public/images/media/' . $slido->photo->file : '/public/img/200x200.png'}}" alt="" >
                            </div>
                         </div>
                     </div>
                </div>
            </div>

            @endforeach
        
        </div>


    </div>

    <div class="fun-facts-section" id="fun-facts">
        <div class="container">

            <h3 class="fun-facts-heading1">{{$homesetting->fun_title}}</h3>

            <p>{{$homesetting->fun_description}}</p>

            <div class="row fun-facts-timer">
                <div class="col-md-3">
                    <div class="radial">
                        <span class="timer" data-from="0" data-to="{{$homesetting->count_number1}}" data-speed="4000">{{$homesetting->count_number1}}</span>
                        <h4>{{$homesetting->count_description1}}</h4>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="radial">
                        <span class="timer" data-from="0" data-to="{{$homesetting->count_number2}}" data-speed="4000">{{$homesetting->count_number2}}</span>
                        <h4>{{$homesetting->count_description2}}</h4>
                    </div>
                    
                </div>
                <div class="col-md-3">
                    <div class="radial">
                        <span class="timer" data-from="0" data-to="{{$homesetting->count_number3}}" data-speed="4000">{{$homesetting->count_number3}}</span>
                        <h4>{{$homesetting->count_description3}}</h4>
                    </div>
                    
                </div>
                <div class="col-md-3">
                    <div class="radial">
                        <span class="timer" data-from="0" data-to="{{$homesetting->count_number4}}" data-speed="4000">{{$homesetting->count_number4}}</span>
                        <h4>{{$homesetting->count_description4}}</h4>
                    </div>
                </div>
            </div>


        </div>
    </div>


    <div class="about-section">
        <div class="container">
            <div class="row">
               
                <div class="col-md-7">
                    
                    <div class="pictures-row">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="item-about">
                                    <div class="imgone big-paral">
                                        <div class="simpleParallax"><img src="/public/img/loading-blog.gif" width="500" height="666" class="lazy thumparallax-down img-fluid" data-src="{{$homesetting->about_image1}}" alt="two-images-1.jpg"></div>
                                    </div>
                                    <div class="exp-about">
                                        <h5 class="nmb-font-about">{{$homesetting->about_yearstitle}}</h5>
                                        <h6 class="service_summary-about">{{$homesetting->about_yearstext}}</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="item-about">
                                    <div class="imgtwo big-paral">
                                        <div class="simpleParallax"><img src="/public/img/loading-blog.gif" width="500" height="820" class="lazy thumparallax img-fluid" data-src="{{$homesetting->about_image2}}" alt="two-images-1.jpg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


                <div class="col-md-5">

                    <h4 class="about-heading1-home">{{$homesetting->about_subtitle}}</h4>
                    <h3 class="about-heading2-home">{{$homesetting->about_title}}</h3>

                    {!!$homesetting->about_description!!}

                    <a href="{{$homesetting->about_buttonlink}}" target="_self" class="btn btn-style1"><span>{{$homesetting->about_buttontext}}</span></a>

                </div>


            </div>
        </div>
    </div>

    
    <div class="services-section">
        <div class="container">
            
                <h3>{{$homesetting->services_title}}</h3>

                <div class="service-boxes-slider owl-carousel ">
                    
                    @foreach( $services as $service )
                    <div class="service-box-slide">
                        <div class="service-box-parent">
                            <div class="service-box" data-background-image-url="{{$service->photo ? '/public/images/media/' . $service->photo->file : '/public/img/200x200.png'}}">

                                {!!$service->icon!!}
                                <h5>{{$service->title}}</h5>
                                <p>{{$service->description}}  </p>
                                
                            </div>
                        </div>
                    </div>
                    @endforeach

                </div> 
     
        </div>
    </div>


    <div class="portfolio-section">
        <div class="container">
            <h4>{{$homesetting->projects_subtitle}}</h4>
            <h3>{{$homesetting->projects_title}}</h3>



            <div class="row">
                
                @foreach($projects as $project)
                    <div class="col-md-4">
                        <div class="col-project-big">
                            <div class="col-project-inner">
                                    
                                    <a href="{{URL::to('/')}}/project/{{$project->slug}}"><img src="/public/img/loading-blog.gif" width="500" height="820" class="lazy img-fluid" data-src="{{$project->photo ? '/public/images/media/' . $project->photo->file : '/public/img/200x200.png'}}" alt="{{$project->title}}"></a>

                                    <div class="project-popup">
                                        <a href="{{URL::to('/')}}/project/{{$project->slug}}">
                                            <div class="project-popup-inner">
                                                <h6 class="project-categories">{{$project->project_category->name}}</h6>
                                                <h5 class="project-title">{{$project->title}}</h5>
                                            </div>
                                        </a>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                @endforeach
            
            </div>
        </div>
    </div>

    
    <div class="testimonial-section">

        <div class="testimonial-section-slider owl-carousel">

            @foreach($testimonials as $testimonial)
            <blockquote class="testimonial-slide">
                <div class="section_title">{{$testimonial->subtitle}}</div>
                <span class="testimonial_slider_title">{{$testimonial->title}}</span>
                    <div class="testimonial-area">
                        <div class="testimonial-layoutArea">
                           <p>{{$testimonial->description}}</p>
                        </div>
                    </div>
                <div class="testimonials_slider_name"> {{$testimonial->name}}<span> - {{$testimonial->position}}</span></div>
            </blockquote>
            @endforeach

        </div>

    </div>

    <div class="blog-section">

        <div class="container">

            <h3 class="blog-section-subtitle">{{$homesetting->blog_subtitle}}</h3>
            <h3 class="blog-section-title">{{$homesetting->blog_title}}</h3>

            <div class="row">

                @foreach($posts as $post)
                <div class="col-md-4">
                    <article class="blog-single-post">
                        <div class="blog_custom">

                            <div class="post-thumbnail">
                                <a class="relative" href="{{URL::to('/')}}/post/{{$post->slug}}">
                                    <div class="featured_image_blog">
                                        <img class="lazy blog_post_image img-fluid" width="350" height="300" src="https://cdn.dribbble.com/users/105033/screenshots/1132714/loading-animation-800.gif" data-src="{{$post->photo ? '/public/images/media/' . $post->photo->file : '/public/img/200x200.png'}}" alt="{{$post->title}}">
                                        <div class="flex-icon">
                                            <div class="flex-icon-inside">
                                                <i class="fas fa-link"></i>
                                            </div>
                                      </div>
                                    </div>
                                </a>
                                <div class="post-categories">
                                   <p>{{$post->category->name}}</p>
                                </div>
                            </div>

                            <div class="post-details">
                                <div class="post-category-comment-date">                             
                                   <span class="post-date"><i class="far fa-clock"></i> {{ date('d.M.Y', strtotime($post->created_at)) }}</span>
                                   <span class="post-author">
                                   <i class="far fa-user" ></i>
                                   <a href="#0">{{$post->user->name}}</a>
                                   </span>
                                </div>
                                <h3 class="post-name">
                                    <a href="{{URL::to('/')}}/post/{{$post->slug}}" title="{{$post->title}}">{{$post->title}}</a>
                                </h3>
                                <div class="post-excerpt">
                                   <p>{{$post->meta_description}}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                @endforeach

                
            </div>

        </div>

    </div>
    



@endsection
