debugger;
$(document).ready(function() {
  $("form#name").submit(function() {
    var name = $("input#userName").val();
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


              if (name) {
                if (firstAnswer === "Front-End Development") {
                  if (secondAnswer === "No Experience" || secondAnswer === "A Little Experience") {
                    $(".fR").text("HTML");
                    $(".reason").text("It is a easier language to learn");
                    $(".oR").text("CSS, or JavaScript");
                    $(".user").text(name);
                    $(".text").show();
                  } else if ((fifthAnswer === "Yes!" || fifthAnswer === "I dont know yet!") && thirdAnswer == "I want to learn a programming language that is mainstream or conventional!") {
                    $(".fR").text("JavaScript");
                    $(".reason").text("For Front End Developlemt JavaScript is the most popular programming language. In almost every case you need to learn JavaScript to be able to make a website");
                    $(".oR").text("CSS, or HTML");
                    $(".user").text(name);
                    $(".text").show();
                  }

                } else if(firstAnswer === "Back-End Development") {

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
