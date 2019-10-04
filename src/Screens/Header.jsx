import React, { Component } from 'react';


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header>
            <div className="container-fluid p-0">
                <div className="slider-area">
                    <div className="owl-carousel owl-theme">
                        <div className="item">
                            <img src="img/homepage/1.jpg" className="img-fluid" alt="Bg"/>
                        </div>
                        <div className="item">
                            <img src="img/homepage/2.jpeg" className="img-fluid" alt="Bg"/>
                        </div>
                        <div className="item">
                            <img src="img/homepage/3.jpeg" className="img-fluid" alt="Bg"/>
                        </div>
                    </div>
                    <div className="slider-text text-center">
                        <h2>lorem ipsum dolor</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                        <a href="banner.html" className="btn btn-slider">Know More</a>
                    </div>
                </div>
                <div className="navbar">
                    <div className="clearfix">
                        <div className="float-left">
                            <div className="logo-area">
                                <a href="index.html"><img src="img/logo.png" className="img-fluid" alt="Logo"/></a>
                            </div>
                        </div>
                        <div className="float-right">
                            <ul>
                                <li className="nav-item mobile-menu-toggle travel-toggle-menu">
                                    <a href="#" className="nav-link">Travel</a>
                                </li>
                                <li className="nav-item mobile-menu-toggle destinations-toggle-menu">
                                     <a href="#" className="nav-link">Destinations</a>
                                </li>
                                <li className="nav-item mobile-menu-toggle connect-toggle-menu">
                                    <a href="#" className="nav-link">Connect</a>
                                </li>
                                <li className="nav-item mobile-menu-toggle deals-toggle-menu">
                                    <a href="deals.html" className="nav-link">Deals</a>
                                </li>
                                <li className="nav-item mobile-menu-toggle blog-toggle-menu">
                                    <a href="blogs.html" className="nav-link">Blog</a>
                                </li>
                                <li className="nav-item nav-img mobile-menu-toggle search-toggle-menu">
                                    <a href="#" className="nav-link"><img src="img/icons/search_White.png" id="black" className="img-fluid"/></a>
                                </li>
                                <li className="nav-item nav-img">
                                    <a href="signin.html" className="nav-link"><img src="img/icons/profile_white.png" id="black-p" className="img-fluid"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mobile-header-nav">
                        <div className="upper-area text-right">
                            <div className="row">
                                <div className="col-sm-11">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search Continent, Country, City, Town e.t.c"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text"><img src="img/icons/search_black.png" className="img-fluid"/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-1">
                                    <img src="img/icons/times_icon.png" className="img-fluid fa-times" alt="Times" onclick="whiteSearch()"/>
                                </div>
                            </div>
                        </div>
                        <div className="scrollable">
                            <div className="nav justify-content-center" id="nav-tab-a" role="tablist">
                                <a className="text-center active" id="nav-countries-tab-a" data-toggle="tab" href="#nav-countries-a" role="tab" aria-controls="nav-countries-a" aria-selected="true">Countries</a>
                                <a className="text-center" id="nav-nav-cities-tab-a" data-toggle="tab" href="#nav-nav-cities-a" role="tab" aria-controls="nav-nav-cities-a" aria-selected="false">Cities</a>
                            </div>
                            <div className="tab-content" id="nav-tabContent-a">
                                <div className="tab-pane fade show active" id="nav-countries-a" role="tabpanel" aria-labelledby="nav-countries-tab-a">
                                    <div className="row">
                                        <div className="col">
                                            <div className="country-map">
                                                <div className="map-container">
                                                    <img src="img/icons/North-America-.png" className="img-fluid"/>
                                                </div>
                                                <p className="country-name">Norh America</p>
                                                <a href="" className="country-list">Country List</a>	
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="country-map">
                                                <div className="map-container">
                                                    <img src="img/icons/South-America-.png" className="img-fluid"/>
                                                </div>
                                                <p className="country-name">South America</p>
                                                <a href="" className="country-list">Country List</a>	
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="country-map">
                                                <div className="map-container">
                                                    <img src="img/icons/Asia.png" className="img-fluid"/>
                                                </div>
                                                <p className="country-name">Asia</p>
                                                <a href="country.html" className="country-list">Singapore</a>	
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="country-map">
                                                <div className="map-container">
                                                    <img src="img/icons/Europe.png" className="img-fluid"/>
                                                </div>
                                                <p className="country-name">Europe</p>
                                                <a href="" className="country-list">Country List</a>	
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="country-map">
                                                <div className="map-container">
                                                    <img src="img/icons/Africa.png" className="img-fluid"/>
                                                </div>
                                                <p className="country-name">Africa</p>
                                                <a href="" className="country-list">Country List</a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="country-map">
                                                <div className="map-container">
                                                    <img src="img/icons/Australia-.png" className="img-fluid"/>
                                                </div>
                                                <p className="country-name">Austrlia</p>
                                                <a href="" className="country-list">Country List</a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="country-map">
                                                <div className="map-container">
                                                    <img src="img/icons/Antarctica.png" className="img-fluid"/>
                                                </div>
                                                <p className="country-name">Antartica</p>
                                                <a href="" className="country-list">Country List</a>	
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-nav-cities-a" role="tabpanel" aria-labelledby="nav-nav-cities-tab-a">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="cities-card">
                                                <img src="img/homepage/home5.png" className="img-fluid" alt="Home5"/>
                                                <p>Chicago</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="cities-card">
                                                <img src="img/homepage/home6.png" className="img-fluid" alt="Home5"/>
                                                <p>Hong Kong</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="cities-card">
                                                <img src="img/homepage/home7.png" className="img-fluid" alt="Home5"/>
                                                <p>Tornoto</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="cities-card">
                                                <img src="img/homepage/home8.png" className="img-fluid" alt="Home5"/>
                                                <p>Singapore</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-3">
                                            <div className="cities-card">
                                                <img src="img/homepage/home5.png" className="img-fluid" alt="Home5"/>
                                                <p>Chicago</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="cities-card">
                                                <img src="img/homepage/home6.png" className="img-fluid" alt="Home5"/>
                                                <p>Hong Kong</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="cities-card">
                                                <img src="img/homepage/home7.png" className="img-fluid" alt="Home5"/>
                                                <p>Tornoto</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="cities-card">
                                                <img src="img/homepage/home8.png" className="img-fluid" alt="Home5"/>
                                                <p>Singapore</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="destination-header-nav">
                        <div className="upper-area text-right">
                            <div className="row">
                                <div className="col-sm-11">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search Continent, Country, City, Town e.t.c"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text"><img src="img/icons/search_black.png" className="img-fluid"/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-1">
                                    <img src="img/icons/times_icon.png" className="img-fluid fa-times" alt="Times" onclick="whiteSearch()"/>
                                </div>
                            </div>
                        </div>
                        <div className="scrollable">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="content">
                                            <img src="img/homepage/home5.png" className="img-fluid" alt="Home5"/>
                                            <p className="country-name">Trending Travel</p>
                                            <span className="country-list">Country List</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="content">
                                            <img src="img/homepage/home6.png" className="img-fluid" alt="Home5"/>
                                            <p className="country-name">Honeymoon Travel</p>
                                            <span className="country-list">Country List</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="content">
                                            <img src="img/homepage/home7.png" className="img-fluid" alt="Home5"/>
                                            <p className="country-name">Event Travel</p>
                                            <span className="country-list">Country List</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="content">
                                            <img src="img/homepage/home8.png" className="img-fluid" alt="Home5"/>
                                            <p className="country-name">Group Travel</p>
                                            <span className="country-list">Country List</span>
                                        </div>
                                    </div>
                                </div>
                            </div>	
                        </div>
                    </div>
    
                    <div className="connect-header-nav">
                        <div className="upper-area text-right">
                            <div className="row">
                                <div className="col-sm-11">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search Continent, Country, City, Town e.t.c"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text"><img src="img/icons/search_black.png" className="img-fluid"/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-1">
                                    <img src="img/icons/times_icon.png" className="img-fluid fa-times" alt="Times" onclick="whiteSearch()"/>
                                </div>
                            </div>
                        </div>
                        <div className="scrollable">
                            <div className="row">
                                        <div className="col">
                                            <div className="cities-card">
                                                <a href="travel&tourism.html"><img src="img/homepage/home5.png" className="img-fluid" alt="Home5"/></a>
                                                <a href="travel&tourism.html">Travel & Tourism</a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="cities-card">
                                                <a href="medical_tourism.html"><img src="img/homepage/home6.png" className="img-fluid" alt="Home5"/></a>
                                                <a href="medical_tourism.html">Medical Tourism</a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="cities-card">
                                                <a href="#"><img src="img/homepage/home7.png" className="img-fluid" alt="Home5"/></a>
                                                <a href="#">Travel Tourism</a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="cities-card">
                                                <a href="#"><img src="img/homepage/home8.png" className="img-fluid" alt="Home5"/></a>
                                                <a href="#">Education Tourism</a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="cities-card">
                                                <a href="#"><img src="img/homepage/home9.png" className="img-fluid" alt="Home5"/></a>
                                                <a href="#">Tourism</a>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="search-header-nav">
                        <div className="upper-area text-right">
                            <div className="row">
                                <div className="col-sm-11">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search Continent, Country, City, Town e.t.c"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text"><img src="img/icons/search_black.png" className="img-fluid"/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-1">
                                    <img src="img/icons/times_icon.png" className="img-fluid fa-times" alt="Times" onclick="whiteSearch()"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-onScroll animated">
                    <div className="clearfix">
                        <div className="float-left">
                            <div className="logo-area">
                                <a href="index.html"><img src="img/logo.png" className="img-fluid" alt="Logo"/></a>
                            </div>
                        </div>
                        <div className="float-right">
                            <ul>
                                <li className="nav-item mobile-menu-toggle travel-toggle-menu">
                                    <a href="#" className="nav-link">Travel</a>
                                </li>
                                <li className="nav-item mobile-menu-toggle destinations-toggle-menu">
                                     <a href="#" className="nav-link">Destinations</a>
                                </li>
                                <li className="nav-item mobile-menu-toggle connect-toggle-menu">
                                    <a href="#" className="nav-link">Connect</a>
                                </li>
                                <li className="nav-item mobile-menu-toggle deals-toggle-menu">
                                    <a href="deals.html" className="nav-link">Deals</a>
                                </li>
                                <li className="nav-item mobile-menu-toggle blog-toggle-menu">
                                    <a href="blogs.html" className="nav-link">Blog</a>
                                </li>
                                <li className="nav-item nav-img mobile-menu-toggle search-toggle-menu" onclick="blackSearch()">
                                    <a href="#" className="nav-link"><img src="img/icons/search_black.png" id="black" className="img-fluid"/></a>
                                </li>
                                <li className="nav-item nav-img">
                                    <a href="signin.html" className="nav-link"><img src="img/icons/profile_black.png" id="black-p" className="img-fluid"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mobile-header-nav">
                        <div className="upper-area text-right">
                            <div className="row">
                                <div className="col-sm-11">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search Continent, Country, City, Town e.t.c"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text"><img src="img/icons/search_black.png" className="img-fluid"/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-1">
                                    <img src="img/icons/times_icon.png" className="img-fluid fa-times" alt="Times" onclick="whiteSearch()"/>
                                </div>
                            </div>
                        </div>
                        <div className="scrollable">
                            <div className="nav justify-content-center" id="nav-tab-b" role="tablist">
                                <a className="text-center active" id="nav-countries-tab-b" data-toggle="tab" href="#nav-countries-b" role="tab" aria-controls="nav-countries-b" aria-selected="true">Countries</a>
                                <a className="text-center" id="nav-nav-cities-tab-b" data-toggle="tab" href="#nav-nav-cities-b" role="tab" aria-controls="nav-nav-cities-b" aria-selected="false">Cities</a>
                            </div>
                            <div className="tab-content" id="nav-tabContent-b">
                                <div className="tab-pane fade show active" id="nav-countries-b" role="tabpanel" aria-labelledby="nav-countries-tab-b">
                                    <div className="row">
                                        <div className="col">
                                            <div className="country-map">
                                                <div className="map-container">
                                                    <img src="img/icons/North-America-.png" className="img-fluid"/>
                                                </div>
                                                <p className="country-name">Norh America</p>
                                                <a href="" className="country-list">Country List</a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="country-map">
                                                <div className="map-container">
                                                    <img src="img/icons/South-America-.png" className="img-fluid"/>
                                                </div>
                                                <p className="country-name">South America</p>
                                                <a href="" className="country-list">Country List</a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="country-map">
                                                <div className="map-container">
                                                    <img src="img/icons/Asia.png" className="img-fluid"/>
                                                </div>
                                                <p className="country-name">Asia</p>
                                                <a href="country.html" className="country-list">Singapore</a>	
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="country-map">
                                                <div className="map-container">
                                                    <img src="img/icons/Europe.png" className="img-fluid"/>
                                                </div>
                                                <p className="country-name">Europe</p>
                                                <a href="" className="country-list">Country List</a>	
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="country-map">
                                                <div className="map-container">
                                                    <img src="img/icons/Africa.png" className="img-fluid"/>
                                                </div>
                                                <p className="country-name">Africa</p>
                                                <a href="" className="country-list">Country List</a>	
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="country-map">
                                                <div className="map-container">
                                                    <img src="img/icons/Australia-.png" className="img-fluid"/>
                                                </div>
                                                <p className="country-name">Austrlia</p>
                                                <a href="" className="country-list">Country List</a>	
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="country-map">
                                                <div className="map-container">
                                                    <img src="img/icons/Antarctica.png" className="img-fluid"/>
                                                </div>
                                                <p className="country-name">Antartica</p>
                                                <a href="" className="country-list">Country List</a>	
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-nav-cities-b" role="tabpanel" aria-labelledby="nav-nav-cities-tab-b">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="cities-card">
                                                <img src="img/homepage/home5.png" className="img-fluid" alt="Home5"/>
                                                <p>Chicago</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="cities-card">
                                                <img src="img/homepage/home6.png" className="img-fluid" alt="Home5"/>
                                                <p>Hong Kong</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="cities-card">
                                                <img src="img/homepage/home7.png" className="img-fluid" alt="Home5"/>
                                                <p>Tornoto</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="cities-card">
                                                <img src="img/homepage/home8.png" className="img-fluid" alt="Home5"/>
                                                <p>Singapore</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-md-3">
                                            <div className="cities-card">
                                                <img src="img/homepage/home5.png" className="img-fluid" alt="Home5"/>
                                                <p>Chicago</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="cities-card">
                                                <img src="img/homepage/home6.png" className="img-fluid" alt="Home5"/>
                                                <p>Hong Kong</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="cities-card">
                                                <img src="img/homepage/home7.png" className="img-fluid" alt="Home5"/>
                                                <p>Tornoto</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="cities-card">
                                                <img src="img/homepage/home8.png" className="img-fluid" alt="Home5"/>
                                                <p>Singapore</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="destination-header-nav">
                        <div className="upper-area text-right">
                            <div className="row">
                                <div className="col-sm-11">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search Continent, Country, City, Town e.t.c"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text"><img src="img/icons/search_black.png" className="img-fluid"/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-1">
                                    <img src="img/icons/times_icon.png" className="img-fluid fa-times" alt="Times" onclick="whiteSearch()"/>
                                </div>
                            </div>
                        </div>
                        <div className="scrollable">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3">
                                        <div className="content">
                                            <img src="img/homepage/home5.png" className="img-fluid" alt="Home5"/>
                                            <p className="country-name">Trending Travel</p>
                                            <span className="country-list">Country List</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="content">
                                            <img src="img/homepage/home6.png" className="img-fluid" alt="Home5"/>
                                            <p className="country-name">Honeymoon Travel</p>
                                            <span className="country-list">Country List</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="content">
                                            <img src="img/homepage/home7.png" className="img-fluid" alt="Home5"/>
                                            <p className="country-name">Event Travel</p>
                                            <span className="country-list">Country List</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="content">
                                            <img src="img/homepage/home8.png" className="img-fluid" alt="Home5"/>
                                            <p className="country-name">Group Travel</p>
                                            <span className="country-list">Country List</span>
                                        </div>
                                    </div>
                                </div>
                            </div>	
                        </div>
                    </div>
    
                    <div className="connect-header-nav">
                        <div className="upper-area text-right">
                            <div className="row">
                                <div className="col-sm-11">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search Continent, Country, City, Town e.t.c"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text"><img src="img/icons/search_black.png" className="img-fluid"/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-1">
                                    <img src="img/icons/times_icon.png" className="img-fluid fa-times" alt="Times" onclick="whiteSearch()"/>
                                </div>
                            </div>
                        </div>
                        <div className="scrollable">
                            <div className="row">
                                        <div className="col">
                                            <div className="cities-card">
                                                <a href="travel&tourism.html"><img src="img/homepage/home5.png" className="img-fluid" alt="Home5"/></a>
                                                <a href="travel&tourism.html">Travel & Tourism</a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="cities-card">
                                                <a href="medical_tourism.html"><img src="img/homepage/home6.png" className="img-fluid" alt="Home5"/></a>
                                                <a href="medical_tourism.html">Medical Tourism</a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="cities-card">
                                                <a href="#"><img src="img/homepage/home7.png" className="img-fluid" alt="Home5"/></a>
                                                <a href="#">Travel Tourism</a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="cities-card">
                                                <a href="#"><img src="img/homepage/home8.png" className="img-fluid" alt="Home5"/></a>
                                                <a href="#">Education Tourism</a>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="cities-card">
                                                <a href="#"><img src="img/homepage/home9.png" className="img-fluid" alt="Home5"/></a>
                                                <a href="#">Tourism</a>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="search-header-nav">
                        <div className="upper-area text-right">
                            <div className="row">
                                <div className="col-sm-11">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search Continent, Country, City, Town e.t.c"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text"><img src="img/icons/search_black.png" className="img-fluid"/></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-1">
                                    <img src="img/icons/times_icon.png" className="img-fluid fa-times" alt="Times" onclick="whiteSearch()"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-nav">
                    <div className="clearfix">
                        <div className="float-left">
                            <div className="logo-area">
                                <a href="index.html"><img src="img/logo.png" className="img-fluid" alt="Logo"/></a>
                            </div>
                        </div>
                        <div className="float-right">
                            <ul className="nav-ul">
                                <li className="nav-item mobile-nav-img mobile-search-toggle-menu">
                                    <a href="#" className="nav-link"><img src="img/icons/search_White.png" id="black-n" className="img-fluid"/></a>
                                </li>
                                <li className="nav-item mobile-nav-img">
                                    <a href="signin.html" className="nav-link"><img src="img/icons/profile_white.png" id="black-pr" className="img-fluid"/></a>
                                </li>
                                <li className="nav-item mobile-toggle-menu">
                                    <a href="#" className="nav-link" id="mobile-bars"><i className="fas fa-bars"></i></a>
                                    <a href="#" className="nav-link" id="mobile-times"><i className="fas fa-times"></i></a>
                                    <a href="#" className="nav-link" id="mobile-s-times"><i className="fas fa-times"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mobile-search-toggle-nav">
                        <div className="upper-area text-right">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search Continent, Country, City, Town e.t.c"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text"><img src="img/icons/search_black.png" className="img-fluid"/></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-toggle-nav">
                        <div className="mobile-scrollable">
                            <div className="mobile-scrollable-inner">
                                <ul className="mobile-ul">
                                    <li className="mobile-menu-toggle travel-toggle-mobile-menu"><a href="#">Travel</a></li>
                                    <li className="mobile-menu-toggle destination-toggle-mobile-menu"><a href="#">Destinatiton</a></li>
                                    <li className="mobile-menu-toggle connect-toggle-mobile-menu"><a href="#">Connect</a></li>
                                    <li><a href="deals.html">Deals</a></li>
                                    <li><a href="blogs.html">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mobile-travel-nav">
                            <div className="upper-area text-right">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search Continent, Country, City, Town e.t.c"/>
                                            <div className="input-group-append">
                                                <span className="input-group-text"><img src="img/icons/search_black.png" className="img-fluid"/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-scrollable">
                                <div className="nav justify-content-center pt-5" id="nav-tab-m" role="tablist">
                                    <a className="text-center active" id="nav-countries-tab-m" data-toggle="tab" href="#nav-countries-m" role="tab" aria-controls="nav-countries-m" aria-selected="true">Countries</a>
                                    <a className="text-center" id="nav-nav-cities-tab-m" data-toggle="tab" href="#nav-nav-cities-m" role="tab" aria-controls="nav-nav-cities-m" aria-selected="false">Cities</a>
                                </div>
                                <div className="tab-content" id="nav-tabContent-m">
                                    <div className="tab-pane fade show active" id="nav-countries-m" role="tabpanel" aria-labelledby="nav-countries-tab-m">
                                        <div className="row text-center">
                                            <div className="col-6">
                                                <div className="country-map">
                                                    <div className="map-container">
                                                        <img src="img/icons/North-America-.png" className="img-fluid"/>
                                                    </div>
                                                    <p className="country-name">Norh America</p>
                                                    <a href="" className="country-list">Country List</a>	
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="country-map">
                                                    <div className="map-container">
                                                        <img src="img/icons/South-America-.png" className="img-fluid"/>
                                                    </div>
                                                    <p className="country-name">South America</p>
                                                    <a href="" className="country-list">Country List</a>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="country-map">
                                                    <div className="map-container">
                                                        <img src="img/icons/Asia.png" className="img-fluid"/>
                                                    </div>
                                                    <p className="country-name">Asia</p>
                                                    <a href="country.html" className="country-list">Singapore</a>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="country-map">
                                                    <div className="map-container">
                                                        <img src="img/icons/Europe.png" className="img-fluid"/>
                                                    </div>
                                                    <p className="country-name">Europe</p>
                                                    <a href="" className="country-list">Country List</a>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="country-map">
                                                    <div className="map-container">
                                                        <img src="img/icons/Africa.png" className="img-fluid"/>
                                                    </div>
                                                    <p className="country-name">Africa</p>
                                                    <a href="" className="country-list">Country List</a>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="country-map">
                                                    <div className="map-container">
                                                        <img src="img/icons/Australia-.png" className="img-fluid"/>
                                                    </div>
                                                    <p className="country-name">Austrlia</p>
                                                    <a href="" className="country-list">Country List</a>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="country-map">
                                                    <div className="map-container">
                                                        <img src="img/icons/Antarctica.png" className="img-fluid"/>
                                                    </div>
                                                    <p className="country-name">Antartica</p>
                                                    <a href="" className="country-list">Country List</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade text-center" id="nav-nav-cities-m" role="tabpanel" aria-labelledby="nav-nav-cities-tab-m">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="cities-card">
                                                    <img src="img/homepage/home5.png" className="img-fluid" alt="Home5"/>
                                                    <p>Chicago</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="cities-card">
                                                    <img src="img/homepage/home6.png" className="img-fluid" alt="Home5"/>
                                                    <p>Hong Kong</p>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="cities-card">
                                                    <img src="img/homepage/home7.png" className="img-fluid" alt="Home5"/>
                                                    <p>Tornoto</p>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="cities-card">
                                                    <img src="img/homepage/home8.png" className="img-fluid" alt="Home5"/>
                                                    <p>Singapore</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 mt-4">
                                                <div className="cities-card">
                                                    <img src="img/homepage/home5.png" className="img-fluid" alt="Home5"/>
                                                    <p>Chicago</p>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="cities-card">
                                                    <img src="img/homepage/home6.png" className="img-fluid" alt="Home5"/>
                                                    <p>Hong Kong</p>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="cities-card">
                                                    <img src="img/homepage/home7.png" className="img-fluid" alt="Home5"/>
                                                    <p>Tornoto</p>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="cities-card">
                                                    <img src="img/homepage/home8.png" className="img-fluid" alt="Home5"/>
                                                    <p>Singapore</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="mobile-destination-nav">
                            <div className="upper-area text-right">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search Continent, Country, City, Town e.t.c"/>
                                            <div className="input-group-append">
                                                <span className="input-group-text"><img src="img/icons/search_black.png" className="img-fluid"/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-scrollable justify-content-center">
                                <div className="row mt-5">
                                    <div className="col-1"></div>
                                    <div className="col-5">
                                        <div className="content">
                                            <img src="img/homepage/home5.png" className="img-fluid w-100" alt="Home5"/>
                                            <p className="country-name">Trending Travel</p>
                                            <span className="country-list">Country List</span>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="content">
                                            <img src="img/homepage/home6.png" className="img-fluid w-100" alt="Home5"/>
                                            <p className="country-name">Honeymoon Travel</p>
                                            <span className="country-list">Country List</span>
                                        </div>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-1"></div>
                                    <div className="col-5">
                                        <div className="content">
                                            <img src="img/homepage/home7.png" className="img-fluid w-100" alt="Home5"/>
                                            <p className="country-name">Event Travel</p>
                                            <span className="country-list">Country List</span>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="content">
                                            <img src="img/homepage/home8.png" className="img-fluid w-100" alt="Home5"/>
                                            <p className="country-name">Group Travel</p>
                                            <span className="country-list">Country List</span>
                                        </div>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                        </div>
    
                        <div className="mobile-connect-nav">
                            <div className="upper-area text-right">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search Continent, Country, City, Town e.t.c"/>
                                            <div className="input-group-append">
                                                <span className="input-group-text"><img src="img/icons/search_black.png" className="img-fluid"/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-scrollable justify-content-center">
                                        <div className="row mt-5">
                                            <div className="col-1"></div>
                                            <div className="col-5">
                                                <div className="cities-card">
                                                    <a href="travel&tourism.html"><img src="img/homepage/home5.png" className="img-fluid w-100" alt="Home5"/></a><br/>
                                                    <a href="travel&tourism.html">Travel & Tourism</a>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="cities-card">
                                                    <a href="medical_tourism.html"><img src="img/homepage/home6.png" className="img-fluid w-100" alt="Home5"/></a><br/>
                                                    <a href="medical_tourism.html">Medical Tourism</a>
                                                </div>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-1"></div>
                                            <div className="col-5">
                                                <div className="cities-card">
                                                    <a href="#"><img src="img/homepage/home5.png" className="img-fluid w-100" alt="Home5"/></a><br/>
                                                    <a href="#">Travel Tourism</a>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="cities-card">
                                                    <a href="#"><img src="img/homepage/home6.png" className="img-fluid w-100" alt="Home5"/></a><br/>
                                                    <a href="#">Education Tourism</a>
                                                </div>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-1"></div>
                                            <div className="col-5">
                                                <div className="cities-card">
                                                    <a href="#"><img src="img/homepage/home5.png" className="img-fluid w-100" alt="Home5"/></a><br/>
                                                    <a href="#">Tourism</a>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="cities-card">
                                                    <a href="#"><img src="img/homepage/home6.png" className="img-fluid w-100" alt="Home5"/></a><br/>
                                                    <a href="#">Medical Tourism</a>
                                                </div>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-1"></div>
                                            <div className="col-5">
                                                <div className="cities-card">
                                                    <a href="#"><img src="img/homepage/home5.png" className="img-fluid w-100" alt="Home5"/></a><br/>
                                                    <a href="#">Travel Tourism</a>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="cities-card">
                                                    <a href="#"><img src="img/homepage/home6.png" className="img-fluid w-100" alt="Home5"/></a><br/>
                                                    <a href="#">Education Tourism</a>
                                                </div>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-nav-on-scroll animated">
                    <div className="clearfix">
                        <div className="float-left">
                            <div className="logo-area">
                                <a href="index.html"><img src="img/logo.png" className="img-fluid" alt="Logo"/></a>
                            </div>
                        </div>
                        <div className="float-right">
                            <ul className="nav-ul">
                                <li className="nav-item mobile-nav-img mobile-search-toggle-menu">
                                    <a href="#" className="nav-link"><img src="img/icons/search_black.png" className="img-fluid"/></a>
                                </li>
                                <li className="nav-item mobile-nav-img">
                                    <a href="signin.html" className="nav-link"><img src="img/icons/profile_black.png" className="img-fluid"/></a>
                                </li>
                                <li className="nav-item mobile-toggle-menu">
                                    <a href="#" className="nav-link text-black" id="mobile-m-bars"><i className="fas fa-bars"></i></a>
                                    <a href="#" className="nav-link" id="mobile-m-times"><i className="fas fa-times"></i></a>
                                    <a href="#" className="nav-link" id="mobile-sm-times"><i className="fas fa-times"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mobile-search-toggle-nav">
                        <div className="upper-area text-right">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search Continent, Country, City, Town e.t.c"/>
                                        <div className="input-group-append">
                                            <span className="input-group-text"><img src="img/icons/search_black.png" className="img-fluid"/></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-toggle-nav">
                        <div className="mobile-scrollable">
                            <div className="mobile-scrollable-inner">
                                <ul className="mobile-ul">
                                    <li className="mobile-menu-toggle travel-toggle-mobile-menu"><a href="#">Travel</a></li>
                                    <li className="mobile-menu-toggle destination-toggle-mobile-menu"><a href="#">Destinatiton</a></li>
                                    <li className="mobile-menu-toggle connect-toggle-mobile-menu"><a href="#">Connect</a></li>
                                    <li><a href="deals.html">Deals</a></li>
                                    <li><a href="blogs.html">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mobile-travel-nav">
                            <div className="upper-area text-right">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search Continent, Country, City, Town e.t.c"/>
                                            <div className="input-group-append">
                                                <span className="input-group-text"><img src="img/icons/search_black.png" className="img-fluid"/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-scrollable">
                                <div className="nav justify-content-center pt-5" id="nav-tab-m" role="tablist">
                                    <a className="text-center active" id="nav-countries-tab-m" data-toggle="tab" href="#nav-countries-m" role="tab" aria-controls="nav-countries-m" aria-selected="true">Countries</a>
                                    <a className="text-center" id="nav-nav-cities-tab-m" data-toggle="tab" href="#nav-nav-cities-m" role="tab" aria-controls="nav-nav-cities-m" aria-selected="false">Cities</a>
                                </div>
                                <div className="tab-content" id="nav-tabContent-m">
                                    <div className="tab-pane fade show active" id="nav-countries-m" role="tabpanel" aria-labelledby="nav-countries-tab-m">
                                        <div className="row text-center">
                                            <div className="col-6">
                                                <div className="country-map">
                                                    <div className="map-container">
                                                        <img src="img/icons/North-America-.png" className="img-fluid"/>
                                                    </div>
                                                    <p className="country-name">Norh America</p>
                                                    <a href="" className="country-list">Country List</a>	
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="country-map">
                                                    <div className="map-container">
                                                        <img src="img/icons/South-America-.png" className="img-fluid"/>
                                                    </div>
                                                    <p className="country-name">South America</p>
                                                    <a href="" className="country-list">Country List</a>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="country-map">
                                                    <div className="map-container">
                                                        <img src="img/icons/Asia.png" className="img-fluid"/>
                                                    </div>
                                                    <p className="country-name">Asia</p>
                                                    <a href="country.html" className="country-list">Singapore</a>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="country-map">
                                                    <div className="map-container">
                                                        <img src="img/icons/Europe.png" className="img-fluid"/>
                                                    </div>
                                                    <p className="country-name">Europe</p>
                                                    <a href="" className="country-list">Country List</a>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="country-map">
                                                    <div className="map-container">
                                                        <img src="img/icons/Africa.png" className="img-fluid"/>
                                                    </div>
                                                    <p className="country-name">Africa</p>
                                                    <a href="" className="country-list">Country List</a>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="country-map">
                                                    <div className="map-container">
                                                        <img src="img/icons/Australia-.png" className="img-fluid"/>
                                                    </div>
                                                    <p className="country-name">Austrlia</p>
                                                    <a href="" className="country-list">Country List</a>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="country-map">
                                                    <div className="map-container">
                                                        <img src="img/icons/Antarctica.png" className="img-fluid"/>
                                                    </div>
                                                    <p className="country-name">Antartica</p>
                                                    <a href="" className="country-list">Country List</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade text-center" id="nav-nav-cities-m" role="tabpanel" aria-labelledby="nav-nav-cities-tab-m">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="cities-card">
                                                    <img src="img/homepage/home5.png" className="img-fluid" alt="Home5"/>
                                                    <p>Chicago</p>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="cities-card">
                                                    <img src="img/homepage/home6.png" className="img-fluid" alt="Home5"/>
                                                    <p>Hong Kong</p>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="cities-card">
                                                    <img src="img/homepage/home7.png" className="img-fluid" alt="Home5"/>
                                                    <p>Tornoto</p>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="cities-card">
                                                    <img src="img/homepage/home8.png" className="img-fluid" alt="Home5"/>
                                                    <p>Singapore</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 mt-4">
                                                <div className="cities-card">
                                                    <img src="img/homepage/home5.png" className="img-fluid" alt="Home5"/>
                                                    <p>Chicago</p>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="cities-card">
                                                    <img src="img/homepage/home6.png" className="img-fluid" alt="Home5"/>
                                                    <p>Hong Kong</p>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="cities-card">
                                                    <img src="img/homepage/home7.png" className="img-fluid" alt="Home5"/>
                                                    <p>Tornoto</p>
                                                </div>
                                            </div>
                                            <div className="col-6 mt-4">
                                                <div className="cities-card">
                                                    <img src="img/homepage/home8.png" className="img-fluid" alt="Home5"/>
                                                    <p>Singapore</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        <div className="mobile-destination-nav">
                            <div className="upper-area text-right">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search Continent, Country, City, Town e.t.c"/>
                                            <div className="input-group-append">
                                                <span className="input-group-text"><img src="img/icons/search_black.png" className="img-fluid"/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-scrollable justify-content-center">
                                <div className="row mt-5">
                                    <div className="col-1"></div>
                                    <div className="col-5">
                                        <div className="content">
                                            <img src="img/homepage/home5.png" className="img-fluid w-100" alt="Home5"/>
                                            <p className="country-name">Trending Travel</p>
                                            <span className="country-list">Country List</span>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="content">
                                            <img src="img/homepage/home6.png" className="img-fluid w-100" alt="Home5"/>
                                            <p className="country-name">Honeymoon Travel</p>
                                            <span className="country-list">Country List</span>
                                        </div>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-1"></div>
                                    <div className="col-5">
                                        <div className="content">
                                            <img src="img/homepage/home7.png" className="img-fluid w-100" alt="Home5"/>
                                            <p className="country-name">Event Travel</p>
                                            <span className="country-list">Country List</span>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="content">
                                            <img src="img/homepage/home8.png" className="img-fluid w-100" alt="Home5"/>
                                            <p className="country-name">Group Travel</p>
                                            <span className="country-list">Country List</span>
                                        </div>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            </div>
                        </div>
    
                        <div className="mobile-connect-nav">
                            <div className="upper-area text-right">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search Continent, Country, City, Town e.t.c"/>
                                            <div className="input-group-append">
                                                <span className="input-group-text"><img src="img/icons/search_black.png" className="img-fluid"/></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mobile-scrollable justify-content-center">
                                        <div className="row mt-5">
                                            <div className="col-1"></div>
                                            <div className="col-5">
                                                <div className="cities-card">
                                                    <a href="travel&tourism.html"><img src="img/homepage/home5.png" className="img-fluid w-100" alt="Home5"/></a><br/>
                                                    <a href="travel&tourism.html">Travel & Tourism</a>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="cities-card">
                                                    <a href="medical_tourism.html"><img src="img/homepage/home6.png" className="img-fluid w-100" alt="Home5"/></a><br/>
                                                    <a href="medical_tourism.html">Medical Tourism</a>
                                                </div>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-1"></div>
                                            <div className="col-5">
                                                <div className="cities-card">
                                                    <a href="#"><img src="img/homepage/home5.png" className="img-fluid w-100" alt="Home5"/></a><br/>
                                                    <a href="#">Travel Tourism</a>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="cities-card">
                                                    <a href="#"><img src="img/homepage/home6.png" className="img-fluid w-100" alt="Home5"/></a><br/>
                                                    <a href="#">Education Tourism</a>
                                                </div>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-1"></div>
                                            <div className="col-5">
                                                <div className="cities-card">
                                                    <a href="#"><img src="img/homepage/home5.png" className="img-fluid w-100" alt="Home5"/></a><br/>
                                                    <a href="#">Tourism</a>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="cities-card">
                                                    <a href="#"><img src="img/homepage/home6.png" className="img-fluid w-100" alt="Home5"/></a><br/>
                                                    <a href="#">Medical Tourism</a>
                                                </div>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                        <div className="row mt-5">
                                            <div className="col-1"></div>
                                            <div className="col-5">
                                                <div className="cities-card">
                                                    <a href="#"><img src="img/homepage/home5.png" className="img-fluid w-100" alt="Home5"/></a><br/>
                                                    <a href="#">Travel Tourism</a>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="cities-card">
                                                    <a href="#"><img src="img/homepage/home6.png" className="img-fluid w-100" alt="Home5"/></a><br/>
                                                    <a href="#">Education Tourism</a>
                                                </div>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
         );
    }
}
 
export default Header;