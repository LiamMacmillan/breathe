<!DOCTYPE html>
<html>
<!---------->
<!-- HEAD -->
<!---------->
<head> 
    <?php 
        include 'includes/head.php';
        // include 'db/connect.php';
        include 'includes/functions.php';
    ?> 
</head>

<!---------->
<!-- BODY -->
<!---------->
<body>

<canvas class="background"></canvas>
    
<div id="container">
    <div id="top-row" class="row">
        <a href="index" id="logo"><span>Just</span> Breathe</a>
    </div>
    <div id="middle-row" class="row">
        <div id="desc" class="index">
            <span>The 4-7-8 technique forces the mind and body to focus on regulating the breath, helping you relax. Dr. Weil famously described it as a "natural tranquilizer for the nervous system".</span><br />
            <a href="https://www.healthline.com/health/4-7-8-breathing#3" target="_blank">Read More <i class="icn fas fa-arrow-right"></i></a><br />
            <b>Exercising this 5-step breathing technique daily will lead to reduced anxiety, increased relaxation and improved mood.</b>
        </div>
        <div id="start-exercise-btn" class="index">Start Exercise</div>
        <div id="breathe" class="exercise"><p></p></div>
    </div>
    <div id="bottom-row" class="row">
        <div id="progress-bar" class="exercise">
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
    </div>
    <div id="made-by">Made by <a href="mailto:liammacmillan@hotmail.co.uk">Liam Macmillan</a></div>
</div>
    
</body>
</html>