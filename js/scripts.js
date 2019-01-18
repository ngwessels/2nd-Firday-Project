$(document).ready(function() {
  $("form#name").submit(function() {
    var name = $("input#userName").val();
    var address = $("input#address").val();
    $("#button").hide();
    $("form#name").hide();
    $("form#form1").show();
    $("form#form1").submit(function() {
      var firstAnswer = $("#firstAnswer").val();
      $("#button1").hide();
      $("form#form2").show();
      $("form#form1").hide();

      $("form#form2").submit(function() {
        var secondAnswer = $("#secondAnswer").val();
        $("#button2").hide();
        $("form#form3").show();
        $("form#form2").hide();
        $("form#form3").submit(function() {
          var thirdAnswer = $("#thirdAnswer").val();

          $("#button3").hide();
          $("form#form4").show();
          $("form#form3").hide();
          $("form#form4").submit(function() {
            var fourthAnswer = $("#fourthAnswer").val();

            $("#button4").hide();
            $("form#form5").show();
            $("form#form4").hide();
            $("form#form5").submit(function() {
              var fifthAnswer = $("#fifthAnswer").val();
              $("#button5").hide();
              $("form#form5").hide();


              //Conditional statements.  It will take every possible input and give user a different response
              //In the class selection .oR stands for otherRecommendation. .fR stands for firstRecommendation.

              if (name, address) {
                if (firstAnswer === "Front-End Development") {
                  if (secondAnswer === "No Experience" || secondAnswer === "A Little Experience") {
                    $(".fR").text("HTML");
                    $(".reason").text("It is a easier language to learn");
                    $(".oR").text("CSS, or JavaScript");
                    $(".address").text(address);
                    $(".user").text(name);
                    $(".text").show();
                  } else if ((fifthAnswer === "Yes!" || fifthAnswer === "I dont know yet!") && thirdAnswer === "I want to learn a programming language that is mainstream or conventional!") {
                    $(".fR").text("JavaScript");
                    $(".reason").text("For Front End Developlemt JavaScript is the most popular programming language. In almost every case you need to learn JavaScript to be able to make a website");
                    $(".oR").text("CSS, or HTML");
                    $(".user").text(name);
                    $(".address").text(address);
                    $(".text").show();
                  } else if (thirdAnswer === "I want to learn something new!") {
                    $(".fR").text("Ruby on Rails");
                    $(".reason").text("It is a newer programming language that is gaining popularity");
                    $(".oR").text("CSS, HTML, JavaScript");
                    $(".user").text(name);
                    $(".address").text(address);
                    $(".text").show();
                  }

                } else if(firstAnswer === "Back-End Development") {
                  if(secondAnswer === "No Experience" || secondAnswer === "A Little Experience") {
                    $(".fR").text("Python");
                    $(".reason").text("Its an easier to Learn Language and is still widely used today");
                    $(".oR").text("C++, and Java");
                    $(".user").text(name);
                    $(".address").text(address);
                    $(".text").show();
                  } else if((fifthAnswer === "Yes!" || fifthAnswer === "I dont know yet!") && thirdAnswer === "I want to learn a programming language that is mainstream or conventional!") {
                    $(".fR").text("Java");
                    $(".reason").text("In terms of getting a career Java is one of the highest paid careers");
                    $(".oR").text("C#, Swift");
                    $(".user").text(name);
                    $(".address").text(address);
                    $(".text").show();
                  } else if(thirdAnswer === "I want to learn something new!") {
                    $(".fR").text("Swift");
                    $(".reason").text("Swift is a relatively new Programming language. It was created by Apple in 2014, and it constantly being updated.");
                    $(".oR").text("Ruby on Rails, C#");
                    $(".user").text(name);
                    $(".address").text(address);
                    $(".text").show();
                  }

                }

              } else {
                $(".noInput").show();
              }
              event.preventDefault();
            });
            event.preventDefault();
          });
          event.preventDefault();
        });
        event.preventDefault();
      });
      event.preventDefault();
    });
    event.preventDefault();
  });
});
