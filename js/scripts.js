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

              //.oR stands for otherRecommendation. .fR stands for firstRecommendation.

              if (name, address) {
                if (firstAnswer === "Front-End Development") {
                  if (secondAnswer === "No Experience" || secondAnswer === "A Little Experience") {
                    $(".fR").text("CSS/Design");
                    $(".reason").text("This track might be a little easier");
                    $(".oR").text("Java/Android or Ruby/Rails");
                    $(".address").text(address);
                    $(".user").text(name);
                    $(".text").show();
                    $("ul").hide();
                  } else if ((fifthAnswer === "Yes!" || fifthAnswer === "I dont know yet!" || fifthAnswer === "No, I just want to learn something my friends would be jelous of!") && thirdAnswer === "I want to learn a programming language that is mainstream or conventional!") {
                    $(".fR").text("Java/Android");
                    $(".reason").text("There are many different career paths you can choose with learning the java programming language");
                    $(".oR").text("CSS/Design or Ruby/Rails");
                    $(".user").text(name);
                    $(".address").text(address);
                    $(".text").show();
                    $("ul").hide();
                  } else if (thirdAnswer === "I want to learn something new!" && fourthAnswer === "Easy to Learn" || fourthAnswer === "Not Hard but easier") {
                    $(".fR").text("Ruby on Rails");
                    $(".reason").text("It is a newer programming language that is gaining popularity");
                    $(".oR").text("C#/.NET or Java/Android");
                    $(".user").text(name);
                    $(".address").text(address);
                    $(".text").show();
                    $("ul").hide();
                  } else if (fourthAnswer === "Hard to Learn" || fourthAnswer === "Very Hard to Learn") {
                    $(".fR").text("C#/.NET and PHP/Drupal");
                    $(".reason").text("Altogther they are not easy to Learn");
                    $(".oR").text("Java");
                    $(".user").text(name);
                    $(".address").text(address);
                    $(".text").show();
                    $("ul").hide();
                  }

                } else if(firstAnswer === "Back-End Development") {
                  if(secondAnswer === "No Experience" || secondAnswer === "A Little Experience") {
                    $(".fR").text("Python");
                    $(".reason").text("Its an easier to Learn Language and is still widely used today");
                    $(".oR").text("C++, and Java");
                    $(".user").text(name);
                    $(".address").text(address);
                    $(".text").show();
                    $("ul").hide();
                  } else if((fifthAnswer === "Yes!" || fifthAnswer === "I dont know yet!" || fifthAnswer === "No, I just want to learn something my friends would be jelous of!") && thirdAnswer === "I want to learn a programming language that is mainstream or conventional!") {
                    $(".fR").text("Java");
                    $(".reason").text("In terms of getting a career Java is one of the highest paid careers");
                    $(".oR").text("C#, Swift");
                    $(".user").text(name);
                    $(".address").text(address);
                    $(".text").show();
                    $("ul").hide();
                  } else if(thirdAnswer === "I want to learn something new!") {
                    $(".fR").text("Swift");
                    $(".reason").text("Swift is a relatively new Programming language. It was created by Apple in 2014, and it constantly being updated.");
                    $(".oR").text("Ruby on Rails, C#");
                    $(".user").text(name);
                    $(".address").text(address);
                    $(".text").show();
                    $("ul").hide();
                  }
                }
              } else {
                $(".noInput").show();
                $("ul").hide();
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
