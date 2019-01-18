$(document).ready(function() {
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
      event.preventDefault();
      $("form#form3").submit(function() {
        var thirdAnswer = $("#thirdAnswer").val();
        event.preventDefault();
        $("#button3").hide();
        $("form#form4").show();
        $("form#form3").hide()

        $("form#form4").submit(function() {
          var fourthAnswer = $("#fourthAnswer").val();
          event.preventDefault();
          $("#button4").hide();
          $("form#form5").show();
          $("form#form4").hide();

          $("form#form5").submit(function() {
            var fifthAnswer = $("#fifthAnswer").val();
            $("#button5").hide();
            $("form#form5").hide();
            event.preventDefault();

            alert(firstAnswer);
            alert(secondAnswer);
            alert(thirdAnswer);
            alert(fourthAnswer);
            alert(fifthAnswer);
          });
        });

      });
    });
    event.preventDefault();
  });











});
