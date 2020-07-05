"use strict";

$(document).ready(function($) {

  //loading at start only #home page
  $('#home').show();
  $('#japan').hide();
  $('#prep').hide();
  $('#trip-plan').hide();
  $('#about').hide();
  $('.calc-page2, .calc-page3, .calc-page4, .calc-page5').hide();
  $("#type1").hide();
  $("#type2").hide();
  $("#type3").hide();
  $('#page1').css("padding", "15px").addClass('active-btn');

  $('.navbar-nav>li>a, .navbar-brand').click(function(){
    $('.navbar-collapse').collapse('hide');
  });

  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });


  //sidebar/navbar changing site
  document.getElementById("home-btn").onclick = function() {showHome()};
  document.getElementById("home-btn-phone").onclick = function() {showHome()};
  function showHome(){
  $('#japan').fadeOut();
  $('#prep').fadeOut();  
  $('#trip-plan').fadeOut();
  $('#about').fadeOut();
  $('#home').delay(250).fadeIn();
  console.log("home");
  }

  document.getElementById("japan-btn").onclick = function() {showJap()};
  document.getElementById("japan-btn-big").onclick = function() {showJap()};
  document.getElementById("japan-btn-phone").onclick = function() {showJap()};
  function showJap(){
  $('#home').fadeOut();
  $('#prep').fadeOut();
  $('#trip-plan').fadeOut();
  $('#about').fadeOut();
  $('#japan').delay(250).fadeIn();
  console.log("jap");0
  }

  document.getElementById("prep-btn").onclick = function() {showPrep()};
  document.getElementById("prep-btn-big").onclick = function() {showPrep()};
  document.getElementById("prep-btn-phone").onclick = function() {showPrep()};
  function showPrep(){
  $('#home').fadeOut();
  $('#japan').fadeOut();
  $('#trip-plan').fadeOut();
  $('#about').fadeOut();
  $('#prep').delay(250).fadeIn();
  console.log("prep");0
  }

  document.getElementById("trip-btn").onclick = function() {showTrip()};
  document.getElementById("trip-btn-big").onclick = function() {showTrip()};
  document.getElementById("trip-btn-phone").onclick = function() {showTrip()};
  function showTrip(){
  $('#home').fadeOut();
  $('#japan').fadeOut();
  $('#prep').fadeOut();
  $('#about').fadeOut();
  $('#trip-plan').delay(250).fadeIn();
  console.log("trip");0
  }

  document.getElementById("about-btn").onclick = function() {showAbout()};
  document.getElementById("about-btn-phone").onclick = function() {showAbout()};
  function showAbout(){
  $('#home').fadeOut();
  $('#japan').fadeOut();
  $('#prep').fadeOut();
  $('#trip-plan').fadeOut();
  $('#about').delay(250).fadeIn();
  console.log("about");0
  }


  //hiding sidebar and changing main content on full width when 765px
  var x = window.matchMedia("(max-width: 765px)");
  x.onchange = function() {hide(x)};
  var hide = function(x){
    if (x.matches) {
      document.getElementById("main-cont").className = "mb-style col-12 px-0 mx-0";
    } 
    else {
      document.getElementById("main-cont").className = "mb-style col-10 px-0 mx-0";
    }
  }

  if (window.innerWidth < 765) {
      document.getElementById("main-cont").className = "mb-style col-12 px-0 mx-0";
    } 
    else {
      document.getElementById("main-cont").className = "mb-style col-10 px-0 mx-0";
  }

  //top progress bar
  window.onscroll = function() {slide()};
  var slide = function()
  {
    var height = document.body.scrollHeight - window.screen.height;
    var scroll = document.body.scrollTop;
    var position = (scroll / height) * 100;
    document.getElementById("slidebar").style.width = position + "%";
  }

  //modal window and bg fadein/out
  $('#calc-app, #calc-app-site').click(function(){
    $('#japan').fadeOut();
    $('#prep').fadeOut();  
    $('#trip-plan').fadeOut();
    $('#about').fadeOut();
    $('#home').delay(250).fadeIn();
    $('.modal-bg').fadeIn();
    $('.modal-box').fadeIn();
  });

  $('#calc-app-close').click(function(){
    $('.modal-box').fadeOut();
    $('.modal-bg').fadeOut();
  });

  //modal window close when click on bg
  $('.modal-bg').click(function(e)
  {
    if (e.target !== this)
      return;

    $('.modal-box').fadeOut();
    $('.modal-bg').fadeOut();
    $('.about-box').fadeOut();
  });

  //modal window calc-page change sites (by changing class) with button size change
  $("#page1").click(function(){
    $('.calc-page2, .calc-page3, .calc-page4, .calc-page5').fadeOut(100).removeClass('active').promise().done(function(){
      $('.calc-page1').fadeIn(100).addClass('active');
      $('#page1').css("padding", "15px").addClass('active-btn');
      $('#page2, #page3, #page4, #page5').css("padding", "10px").removeClass('active-btn');
    });
    console.log("page1");
  });

  $("#page2").click(function(){
    $('.calc-page1, .calc-page3, .calc-page4, .calc-page5').fadeOut(100).removeClass('active').promise().done(function(){
      $('.calc-page2').fadeIn(100).addClass('active');
      $('#page2').css("padding", "15px").addClass('active-btn');
      $('#page1, #page3, #page4, #page5').css("padding", "10px").removeClass('active-btn');
    });
    console.log("page2");
  });

  $("#page3").click(function(){
    $('.calc-page1, .calc-page2, .calc-page4, .calc-page5').fadeOut(100).removeClass('active').promise().done(function(){
      $('.calc-page3').fadeIn(100).addClass('active');
      $('#page3').css("padding", "15px").addClass('active-btn');
      $('#page1, #page2, #page4, #page5').css("padding", "10px").removeClass('active-btn');
    });
    console.log("page3");
  });

  $("#page4").click(function(){
    $('.calc-page1, .calc-page2, .calc-page3, .calc-page5').fadeOut(100).removeClass('active').promise().done(function(){
      $('.calc-page4').fadeIn(100).addClass('active');
      $('#page4').css("padding", "15px").addClass('active-btn');
      $('#page1, #page2, #page3, #page5').css("padding", "10px").removeClass('active-btn');
    });
    console.log("page4");
  });

  $('#next-page').click(function(){
    $('#calc-pages').children(".active").fadeOut(100).promise().done(function(){
      $('#calc-pages').children(".active").next().fadeIn(100).addClass('active');
      $('#modal-box-btn').children(".active-btn").next().addClass('active-btn').css("padding","15px");
      $('#calc-pages').children(".active").prev().removeClass('active');
      $('#modal-box-btn').children(".active-btn").prev().removeClass('active-btn').css("padding","10px");
    })

  });



  //disable arrow button when page4 is active
  $('.modal-box').click(function(){
    console.log("modal klik");
    setTimeout(function() {
      if ( $('.calc-page4').hasClass('active') ) {
        document.getElementById("next-page").style.backgroundColor = "grey";
        document.getElementById("next-page").style.pointerEvents = "none";
      }
      else {
        document.getElementById("next-page").style.backgroundColor = "#be0029";
        document.getElementById("next-page").style.pointerEvents = "auto";
      }
    }, 150);
  });
  

  //night cost calc
  document.getElementById('nightcalc').nightcost.oninput = function() {calc()};
  document.getElementById('nightcalc').nightno.oninput = function() {calc()};
  document.getElementById('nightcalc').flightcost.oninput = function() {calc()};
  document.getElementById('nightcalc').insucost.oninput = function() {calc()};
  document.getElementById('nightcalc').onclick = function() {calc()};
  document.getElementById('currencyType').onclick = function() {calc()};
  document.getElementById('jrpass').onclick = function() {calc()};

  function calc(){
  var flightcost = parseFloat(document.getElementById('nightcalc').flightcost.value.replace(",","."));
  var insu = parseFloat(document.getElementById('nightcalc').insucost.value.replace(",","."));
  var cost = document.getElementById('nightcalc').nightcost.value.replace(",",".");
  var no = document.getElementById('nightcalc').nightno.value.replace(",",".");
  var night = parseFloat(cost * no);
  // var flight = parseFloat(night) + parseFloat(flightcost);
  //jrpass price in solver is in euro 
  var price;
  
  if (isNaN(night))
  {
    night = 0;
    console.log("NaN");
  }
  if (isNaN(insu))
  {
    insu = 0;
    console.log("NaN");
  }
  if (isNaN(flightcost))
  {
    flightcost = 0;
    console.log("NaN");
  }
  if (isNaN(price))
  {
    price = 0;
    console.log("NaN");
  }

  //jrpass checking - different type with different price
  if  ( document.querySelector("input[name=type0]:checked").value === "jrN")
  {
    $("#type1").hide();
    $("#type2").hide();
    $("#type3").hide();
  }
  else if ( document.querySelector("input[name=type0]:checked").value === "jrY")
  {
    $("#type1").fadeIn(500);
    if ( document.querySelector("input[name=type1]:checked").value === "adult")
    {
      $("#type2").fadeIn(500);
      if ( document.querySelector("input[name=type2]:checked").value === "normal")
      {
        $("#type3").fadeIn(500);
        if ( document.querySelector("input[name=type3]:checked").value === "7")
        {
          price = parseFloat(242);
        }
        else if ( document.querySelector("input[name=type3]:checked").value === "14")
        {
          price = parseFloat(387);
        }
        else if ( document.querySelector("input[name=type3]:checked").value === "21")
        {
          price = parseFloat(495);
        }

      }
      else if ( document.querySelector("input[name=type2]:checked").value === "green")
      {
        $("#type3").fadeIn(500);
        if ( document.querySelector("input[name=type3]:checked").value === "7")
        {
          price = parseFloat(324);
        }
        else if ( document.querySelector("input[name=type3]:checked").value === "14")
        {
          price = parseFloat(525);
        }
        else if ( document.querySelector("input[name=type3]:checked").value === "21")
        {
          price = parseFloat(682);
        }
      }

    }
    else if ( document.querySelector("input[name=type1]:checked").value === "child")
    {
      $("#type2").fadeIn(500);
      if ( document.querySelector("input[name=type2]:checked").value === "normal")
      {
        $("#type3").fadeIn(500);
        if ( document.querySelector("input[name=type3]:checked").value === "7")
        {
          price = parseFloat(121);
        }
        else if ( document.querySelector("input[name=type3]:checked").value === "14")
        {
          price = parseFloat(193);
        }
        else if ( document.querySelector("input[name=type3]:checked").value === "21")
        {
          price = parseFloat(247);
        }

      }
      else if ( document.querySelector("input[name=type2]:checked").value === "green")
      {
        $("#type3").fadeIn(500);
        if ( document.querySelector("input[name=type3]:checked").value === "7")
        {
          price = parseFloat(162)
        }
        else if ( document.querySelector("input[name=type3]:checked").value === "14")
        {
          price = parseFloat(262);
        }
        else if ( document.querySelector("input[name=type3]:checked").value === "21")
        {
          price = parseFloat(341);
        }
      }

    }

  }
  console.log(price);


  switch ( document.querySelector("input[name=currency]:checked").value )
  {
    case 'PLN':
      var totalnightPLN = parseFloat((night+flightcost+insu)).toFixed(2) + " PLN";
      var totalnightEUR = parseFloat((night+flightcost+insu)/4.3).toFixed(2) + " EUR";
      var totalnightYEN = parseFloat((night+flightcost+insu)*28.3).toFixed(2) + " YEN";
      document.getElementById("nighttotalPLN").innerText = totalnightPLN;
      document.getElementById("nighttotalEUR").innerText = totalnightEUR;
      document.getElementById("nighttotalYEN").innerText = totalnightYEN;
      document.getElementById("nighttotalEUR").style.color = "grey";
      document.getElementById("nighttotalYEN").style.color = "grey";
      document.getElementById("nighttotalPLN").style.color = "black";

      var jrpassPLN = parseFloat(price*4.3).toFixed(2) + " PLN";
      var jrpassEUR = parseFloat(price).toFixed(2) + " EUR";
      var jrpassYEN = parseFloat(price*121).toFixed(2) + " YEN";
      document.getElementById("jrpassPLN").innerText = jrpassPLN;
      document.getElementById("jrpassEUR").innerText = jrpassEUR;
      document.getElementById("jrpassYEN").innerText = jrpassYEN;
      document.getElementById("jrpassEUR").style.color = "grey";
      document.getElementById("jrpassYEN").style.color = "grey";
      document.getElementById("jrpassPLN").style.color = "black";

      var totalPLN = parseFloat(night+flightcost+insu+(price*4.3)).toFixed(2) + " PLN";
      var totalEUR = parseFloat(((night+flightcost+insu)/4.3)+price).toFixed(2) + " EUR";
      var totalYEN = parseFloat(((night+flightcost+insu)*28.3)+(price*121)).toFixed(2) + " YEN";
      document.getElementById("totalPLN").innerText = totalPLN;
      document.getElementById("totalEUR").innerText = totalEUR;
      document.getElementById("totalYEN").innerText = totalYEN;
      document.getElementById("totalEUR").style.color = "grey";
      document.getElementById("totalYEN").style.color = "grey";
      document.getElementById("totalPLN").style.color = "black";

      var flightPER = parseFloat(flightcost*100).toFixed(2)/parseFloat(night+flightcost+insu+(price*4.3)).toFixed(2);
      var nightPER = parseFloat(night*100).toFixed(2)/parseFloat(night+flightcost+insu+(price*4.3)).toFixed(2);
      var insurPER = parseFloat(insu*100).toFixed(2)/parseFloat(night+flightcost+insu+(price*4.3)).toFixed(2);
      var jrPER = parseFloat(price*4.3*100).toFixed(2)/parseFloat(night+flightcost+insu+(price*4.3)).toFixed(2);
      
      break

    case 'EUR':
      var totalnightPLN = parseFloat((night+flightcost+insu)*4.3).toFixed(2) + " PLN";
      var totalnightEUR = parseFloat((night+flightcost+insu)).toFixed(2) + " EUR";
      var totalnightYEN = parseFloat((night+flightcost+insu)*121).toFixed(2) + " YEN";
      document.getElementById("nighttotalPLN").innerText = totalnightPLN;
      document.getElementById("nighttotalEUR").innerText = totalnightEUR;
      document.getElementById("nighttotalYEN").innerText = totalnightYEN;
      document.getElementById("nighttotalPLN").style.color = "grey";
      document.getElementById("nighttotalYEN").style.color = "grey";
      document.getElementById("nighttotalEUR").style.color = "black";

      var jrpassPLN = parseFloat(price*4.3).toFixed(2) + " PLN";
      var jrpassEUR = parseFloat(price).toFixed(2) + " EUR";
      var jrpassYEN = parseFloat(price*121).toFixed(2) + " YEN";
      document.getElementById("jrpassPLN").innerText = jrpassPLN;
      document.getElementById("jrpassEUR").innerText = jrpassEUR;
      document.getElementById("jrpassYEN").innerText = jrpassYEN;
      document.getElementById("jrpassEUR").style.color = "black";
      document.getElementById("jrpassYEN").style.color = "grey";
      document.getElementById("jrpassPLN").style.color = "grey";

      var totalPLN = parseFloat(((night+flightcost+insu)*4.3)+(price*4.3)).toFixed(2) + " PLN";
      var totalEUR = parseFloat(night+flightcost+insu+price).toFixed(2) + " EUR";
      var totalYEN = parseFloat(((night+flightcost+insu)*121)+(price*121)).toFixed(2) + " YEN";
      document.getElementById("totalPLN").innerText = totalPLN;
      document.getElementById("totalEUR").innerText = totalEUR;
      document.getElementById("totalYEN").innerText = totalYEN;
      document.getElementById("totalEUR").style.color = "black";
      document.getElementById("totalYEN").style.color = "grey";
      document.getElementById("totalPLN").style.color = "grey";

      var flightPER = parseFloat(flightcost*100).toFixed(2)/parseFloat(night+flightcost+insu+price).toFixed(2);
      var nightPER = parseFloat(night*100).toFixed(2)/parseFloat(night+flightcost+insu+price).toFixed(2);
      var insurPER = parseFloat(insu*100).toFixed(2)/parseFloat(night+flightcost+insu+price).toFixed(2);
      var jrPER = parseFloat(price*100).toFixed(2)/parseFloat(night+flightcost+insu+price).toFixed(2);

      break

    case 'YEN':
      var totalnightPLN = parseFloat((night+flightcost+insu)*0.035).toFixed(2) + " PLN";
      var totalnightEUR = parseFloat((night+flightcost+insu)*0.0082).toFixed(2) + " EUR";
      var totalnightYEN = parseFloat((night+flightcost+insu)).toFixed(2) + " YEN";
      document.getElementById("nighttotalPLN").innerText = totalnightPLN;
      document.getElementById("nighttotalEUR").innerText = totalnightEUR;
      document.getElementById("nighttotalYEN").innerText = totalnightYEN;
      document.getElementById("nighttotalEUR").style.color = "grey";
      document.getElementById("nighttotalPLN").style.color = "grey";
      document.getElementById("nighttotalYEN").style.color = "black";

      var jrpassPLN = parseFloat(price*4.3).toFixed(2) + " PLN";
      var jrpassEUR = parseFloat(price).toFixed(2) + " EUR";
      var jrpassYEN = parseFloat(price*121).toFixed(2) + " YEN";
      document.getElementById("jrpassPLN").innerText = jrpassPLN;
      document.getElementById("jrpassEUR").innerText = jrpassEUR;
      document.getElementById("jrpassYEN").innerText = jrpassYEN;
      document.getElementById("jrpassEUR").style.color = "grey";
      document.getElementById("jrpassYEN").style.color = "black";
      document.getElementById("jrpassPLN").style.color = "grey";

      var totalPLN = parseFloat(((night+flightcost+insu)*0.035)+(price*4.3)).toFixed(2) + " PLN";
      var totalEUR = parseFloat(((night+flightcost+insu)*0.0082)+price).toFixed(2) + " EUR";
      var totalYEN = parseFloat((night+flightcost+insu)+(price*121)).toFixed(2) + " YEN";
      document.getElementById("totalPLN").innerText = totalPLN;
      document.getElementById("totalEUR").innerText = totalEUR;
      document.getElementById("totalYEN").innerText = totalYEN;
      document.getElementById("totalEUR").style.color = "grey";
      document.getElementById("totalYEN").style.color = "black";
      document.getElementById("totalPLN").style.color = "grey";

      var flightPER = parseFloat(flightcost*100).toFixed(2)/parseFloat(night+flightcost+insu+(price*121)).toFixed(2);
      var nightPER = parseFloat(night*100).toFixed(2)/parseFloat(night+flightcost+insu+(price*121)).toFixed(2);
      var insurPER = parseFloat(insu*100).toFixed(2)/parseFloat(night+flightcost+insu+(price*121)).toFixed(2);
      var jrPER = parseFloat(price*121*100).toFixed(2)/parseFloat(night+flightcost+insu+(price*121)).toFixed(2);

      break
  }


  $(".graph1").css("height",flightPER+"%");
  $(".graph1").attr({'data-original-title' : flightPER.toFixed(1)+"%"});
  $("#label1").text("Flight ticket - " + flightPER.toFixed(1)+"%");
  $(".graph2").css("height",nightPER+"%");
  $(".graph2").attr({'data-original-title' : nightPER.toFixed(1)+"%"});
  $("#label2").text("Night - " + nightPER.toFixed(1)+"%");
  $(".graph3").css("height",insurPER+"%");
  $(".graph3").attr({'data-original-title' : insurPER.toFixed(1)+"%"});
  $("#label3").text("Insurance - " + insurPER.toFixed(1)+"%");
  $(".graph4").css("height",jrPER+"%");
  $(".graph4").attr({'data-original-title' : jrPER.toFixed(1)+"%"});
  $("#label4").text("JR Pass - " + jrPER.toFixed(1)+"%");
  }




});