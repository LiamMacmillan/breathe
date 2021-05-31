/* ----------- */
/* JS: DEFAULT */
/* ----------- */

// Adjust viewport height for mobile
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.onload = function() {
    
    $(window).on("resize", function (e) {
        checkScreenSize();
    });

    checkScreenSize();

    function checkScreenSize(){
        var newWindowWidth = $(window).width();
        if (newWindowWidth > 450) {
            Particles.init({
                selector: '.background',
                maxParticles: 250,
                sizeVariations: 18,
                speed: 0.15,
                color: ["rgba(91,133,227,0.2)","rgba(91,133,227,0.4)","rgba(91,133,227,0.6)"]
            });
        }
        else
        {
            Particles.init({
                selector: '.background',
                maxParticles: 80,
                sizeVariations: 6,
                speed: 0.08,
                color: ["rgba(91,133,227,0.2)","rgba(91,133,227,0.4)","rgba(91,133,227,0.6)"]
            });
        }
    }
};

$(document).ready(function() {
    
    var i = 0;
    
    // Start Exercise Button
    $("#start-exercise-btn").click(function() {
        
        // Hide Index elements
        $(".index").fadeOut(1000);
        
        // Show Exercise on timeout
        setTimeout(function() {
            startExercise();
            $(".exercise").addClass("exercise-show");
        }, 1000);
    });
    
    // Start Exercise 
    function startExercise() {
        
        // Show text, apply styling
        $("#breathe p").hide().html("remember, <b>inhale through your nose</b><br />and <b>exhale through your mouth</b>").fadeIn(1000);
        $("#breathe").addClass("start-exercise");
        
        // Initialize exercise on timeout    
        setTimeout(breatheExhale, 5000);
    }
    
    // Inhale
    function breatheInhale() {
        
        // Count inhale & update progress bar (in-progress)
        i++;    
        $("#progress-bar .item:nth-of-type("+i+")").css("opacity","0.4"); 
        
        // Show text, apply stying
        $("#breathe p").hide().html("inhale").fadeIn(1000);
        $("#breathe").addClass("inhale");
        $("#breathe").removeClass("exhale");
        
        // Move on to next step on timeout (must be same as CSS transition time)
        setTimeout(breathHold, 4000);
    }
    
    // Hold Breath
    function breathHold() {
        
        // Pause particles animation & add effect
        Particles.pauseAnimation();
        // todo: $(".background").addClass("background-blur");
        
        // Show text
        $("#breathe p").hide().html("hold &nbsp;breath").fadeIn(1000);
        
        // Move on to next step on timeout (must be same as CSS transition time)
        setTimeout(breatheExhale, 7000);
    }
    
    // Exhale
    function breatheExhale() {
        
        // Resume particle animation & remove effect
        Particles.resumeAnimation();
        // todo: $(".background").removeClass("background-blur");
        
        // Show text, and if the exercise has just began apply alternative text
        if(i >= 1) {
            $("#breathe p").hide().html("slowly exhale").fadeIn(1000);
        }
        else {
            $("#breathe p").hide().html("first, slowly exhale all the air in your lungs").fadeIn(1000);
        }
        
        // Apply styling
        $("#breathe").addClass("exhale");
        $("#breathe").removeClass("inhale");
        
        // Move on to next step on timeout (must be same as CSS transition time)
        setTimeout(function() {
            
            // Update progress bar (completed)
            $("#progress-bar .item:nth-of-type("+i+")").css("background-color","#8AC476");
            $("#progress-bar .item:nth-of-type("+i+")").css("opacity","1");
            
            // If exercise has not yet been completed, call inhale function & repeat exercise
            if(i < 5) {
                breatheInhale();
            }
            // Exercise Completed
            else {
                
                // Show text
                $("#breathe p").hide().html("<i class='success-icn fas fa-check'></i>").fadeIn(1000);
                
                // Apply styling
                $("#breathe").addClass("completed");
                
                // After 3s, show "Exercise Complete" text
                setTimeout(function() {
                    $("#breathe p").hide().html("Exercise &nbsp; Complete<a id='repeat-exercise' href='index'>Back to Homepage<i class='icn fas fa-redo'></i></a>").fadeIn(1000);
                }, 3000);
            }
        }, 8000);
    }

});